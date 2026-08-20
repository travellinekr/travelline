import { CARD_FX_FEE_RATE, type CurrencyCode } from '@/data/expenseCodes';

// 신용카드 해외결제 → 원화 환산. 서버 전용.
//
// 출처: open.er-api.com (ExchangeRate-API 무료 엔드포인트)
//   - API 키 불필요, 우리가 쓰는 15개 통화 전부 커버
//   - UTC 00:00 하루 1회 갱신 → "당일 환율" 개념과 일치
//
// 환산값은 지출 등록 시점에 trip_expenses.krw_amount 로 박제한다.
// 조회할 때마다 환산하지 않는 이유: 어제 쓴 300바트가 오늘 다른 금액이 되어
// 총사용경비가 매일 흔들린다.

const ENDPOINT = 'https://open.er-api.com/v6/latest/KRW';
const TIMEOUT_MS = 4000;

// 원본이 하루 1회만 갱신되므로 6시간 캐시로 충분하다.
// 서버리스 인스턴스마다 따로 잡히지만, 미스가 나도 호출 1회일 뿐이라 문제되지 않는다.
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

/** 1 KRW = N 외화 (API 원본 방향) */
let cache: { rates: Record<string, number>; at: number } | null = null;
let inflight: Promise<Record<string, number> | null> | null = null;

async function fetchRates(): Promise<Record<string, number> | null> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const res = await fetch(ENDPOINT, { signal: controller.signal, cache: 'no-store' });
        if (!res.ok) return null;
        const body = await res.json();
        if (body?.result !== 'success' || !body?.rates) return null;
        return body.rates as Record<string, number>;
    } catch {
        return null;
    } finally {
        clearTimeout(timer);
    }
}

async function getRates(): Promise<Record<string, number> | null> {
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.rates;

    // 동시 요청이 몰려도 외부 호출은 1회만 나가게 묶는다
    if (!inflight) {
        inflight = fetchRates().finally(() => { inflight = null; });
    }
    const rates = await inflight;

    if (rates) {
        cache = { rates, at: Date.now() };
        return rates;
    }
    // 조회 실패 시 만료된 캐시라도 쓴다. 하루 1회 갱신이라 하루 지난 값도 충분히 쓸 만하다.
    return cache?.rates ?? null;
}

/**
 * 외화 금액 → 원화 환산액(카드 수수료 포함, 원 단위 반올림).
 *
 * 환율을 못 구하면 null 을 돌려준다. 호출부는 저장을 막지 말고 krw_amount 를
 * 비워 둘 것 — 지출 기록 자체가 사라지는 것보다 총액이 조금 비는 편이 낫다.
 */
export async function convertToKrw(
    amount: number,
    currency: CurrencyCode,
): Promise<number | null> {
    if (!Number.isFinite(amount) || amount <= 0) return null;
    if (currency === 'KRW') return Math.round(amount);

    const rates = await getRates();
    const perKrw = rates?.[currency];              // 1 KRW = perKrw 외화
    if (!perKrw || !Number.isFinite(perKrw) || perKrw <= 0) return null;

    const krwPerUnit = 1 / perKrw;                 // 외화 1단위 = krwPerUnit 원
    return Math.round(amount * krwPerUnit * (1 + CARD_FX_FEE_RATE));
}
