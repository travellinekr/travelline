// 경비 기능 코드값 — DB 코드 테이블 대신 이 파일 한 곳에서 관리한다.
//
// 이유: 코드 그룹이 3개뿐이고 값이 거의 변하지 않음 + union 타입으로 컴파일 타임에 오타가 잡힘.
//       (카드 category 도 liveblocks.config.ts 에서 같은 방식으로 관리 중)
// 나중에 다국어/사용자 정의 카테고리가 필요해지면 이 파일만 DB 조회로 교체하면 된다.
//
// ⚠️ supabase/migrations/008_expenses.sql 의 CHECK 제약과 반드시 일치시킬 것.

/** 자산 = 여행에 미리 투입해 둔 돈. 잔액 계산의 분자. */
export const ASSET_TYPES = [
    { code: 'cash', label: '현금' },
    // 지출 목록의 지불방법 열은 폭이 빠듯해 축약형을 쓴다(트래블카드 → 트래블).
    { code: 'travel_card', label: '트래블' },
] as const;

/**
 * 지불수단. 자산 2종을 그대로 포함하고 신용카드만 추가한다.
 * 신용카드는 후불이라 대응하는 자산이 없고, 그래서 잔액 계산에서 자연히 빠진다.
 * ASSET_TYPES 를 확장하는 형태라 두 구분값 체계가 타입 레벨에서 어긋날 수 없다.
 */
export const PAYMENT_TYPES = [
    ...ASSET_TYPES,
    { code: 'credit_card', label: '신용카드' },
] as const;

export type AssetType = typeof ASSET_TYPES[number]['code'];
export type PaymentType = typeof PAYMENT_TYPES[number]['code'];

export const ASSET_TYPE_LABEL: Record<AssetType, string> =
    Object.fromEntries(ASSET_TYPES.map((t) => [t.code, t.label])) as Record<AssetType, string>;

export const PAYMENT_TYPE_LABEL: Record<PaymentType, string> =
    Object.fromEntries(PAYMENT_TYPES.map((t) => [t.code, t.label])) as Record<PaymentType, string>;

/**
 * 신용카드 해외결제 수수료율 (브랜드사 + 카드사 합산 근사치).
 *
 * 비자/마스터 브랜드 수수료 약 1.0~1.1% + 국내 카드사 해외이용 수수료 약 0.2~0.3%.
 * 카드마다 다르고 매입 시점 환율까지 겹쳐 정확한 값은 결제 순간에 알 수 없다.
 * 정확도를 좇는 대신 하나의 상수로 근사하고, 화면에서 "약"으로 표시한다.
 *
 * 총사용경비를 즉시 보여주는 것이 목적이므로 실제 청구액과는 차이가 날 수 있다.
 */
export const CARD_FX_FEE_RATE = 0.015;

/**
 * 통화 — ISO 4217 코드 + 한글 표기.
 *
 *  code     : DB 저장·환율 API 연동용 표준 코드 (JPY)
 *  name     : 통화 이름 한글 (엔화)          — 선택 목록·설명문에 사용
 *  unit     : 금액 뒤에 붙는 단위 한글 (엔)   — "12,000엔"
 *  symbol   : 기호 (¥)                       — 좁은 자리에서 사용
 *  decimals : 표시 자릿수. ISO 최소단위가 아니라 "실제로 그 나라에서 쓰는" 기준.
 *             (예: TWD 는 ISO 상 2 이지만 현지 가격은 정수라 0)
 *
 * destinations.ts 에 등록된 14개국 전부를 커버한다. 도시가 추가되면
 * COUNTRY_CURRENCY 에 나라를 추가하고, 새 통화면 여기에도 한 줄 넣을 것.
 */
export const CURRENCIES = [
    { code: 'KRW', name: '원화', unit: '원', symbol: '₩', decimals: 0 },
    { code: 'JPY', name: '엔화', unit: '엔', symbol: '¥', decimals: 0 },
    { code: 'VND', name: '동', unit: '동', symbol: '₫', decimals: 0 },
    { code: 'THB', name: '바트', unit: '바트', symbol: '฿', decimals: 2 },
    { code: 'PHP', name: '페소', unit: '페소', symbol: '₱', decimals: 2 },
    { code: 'CNY', name: '위안화', unit: '위안', symbol: '¥', decimals: 2 },
    { code: 'TWD', name: '대만달러', unit: '대만달러', symbol: 'NT$', decimals: 0 },
    { code: 'HKD', name: '홍콩달러', unit: '홍콩달러', symbol: 'HK$', decimals: 2 },
    { code: 'SGD', name: '싱가포르달러', unit: '싱가포르달러', symbol: 'S$', decimals: 2 },
    { code: 'MYR', name: '링깃', unit: '링깃', symbol: 'RM', decimals: 2 },
    { code: 'IDR', name: '루피아', unit: '루피아', symbol: 'Rp', decimals: 0 },
    { code: 'KHR', name: '리엘', unit: '리엘', symbol: '៛', decimals: 0 },
    { code: 'LAK', name: '킵', unit: '킵', symbol: '₭', decimals: 0 },
    { code: 'MNT', name: '투그릭', unit: '투그릭', symbol: '₮', decimals: 0 },
    { code: 'USD', name: '달러', unit: '달러', symbol: '$', decimals: 2 },
] as const;

export type CurrencyCode = typeof CURRENCIES[number]['code'];

export const CURRENCY_MAP: Record<string, typeof CURRENCIES[number]> =
    Object.fromEntries(CURRENCIES.map((c) => [c.code, c]));

/**
 * 나라(한글) → 기본 통화.
 * 키는 destinations.ts 의 CityData.country 값과 정확히 일치해야 한다.
 *
 * 도시가 아니라 나라 단위로 잡은 이유: 도시 31개를 전부 수정하는 대신 나라 14개만
 * 관리하면 되고, 새 도시가 추가돼도 같은 나라면 자동으로 통화가 따라온다.
 *
 * ⚠️ 캄보디아는 공식 통화가 KHR(리엘) 이지만 관광지 결제는 대부분 USD 다.
 *    기본값은 KHR 로 두되 사용자가 USD 로 바꿀 수 있어야 한다(통화는 등록 시 선택 가능).
 */
export const COUNTRY_CURRENCY: Record<string, CurrencyCode> = {
    '대한민국': 'KRW',
    '한국': 'KRW',
    '일본': 'JPY',
    '베트남': 'VND',
    '태국': 'THB',
    '필리핀': 'PHP',
    '중국': 'CNY',
    '대만': 'TWD',
    '홍콩': 'HKD',
    '싱가포르': 'SGD',
    '말레이시아': 'MYR',
    '인도네시아': 'IDR',
    '캄보디아': 'KHR',
    '라오스': 'LAK',
    '몽골': 'MNT',
    '미국': 'USD',
};

/**
 * 나라명(한글) 으로 기본 통화 조회. 미등록 나라면 null.
 *
 * 도시에서 출발할 때는 destinations.ts 의 findCountryByCity() 로 나라를 먼저 구한다.
 *   findCountryByCity(destinationCity) → getCurrencyByCountry(country)
 * (destinations.ts 를 여기서 import 하지 않는 이유: 이 파일은 코드값만 담는
 *  의존성 없는 파일로 유지해 어디서든 가볍게 쓰기 위함)
 */
export function getCurrencyByCountry(country?: string | null): CurrencyCode | null {
    if (!country) return null;
    return COUNTRY_CURRENCY[country.trim()] ?? null;
}

/**
 * 금액 입력칸 마스킹 — 타이핑하는 동안 정수부에 3자리 콤마를 넣는다.
 *
 *  formatNumberInput('1234567')      → '1,234,567'
 *  formatNumberInput('1234.5', true) → '1,234.5'
 *  formatNumberInput('12a3')         → '123'      (숫자 외 문자는 제거)
 *
 * allowDecimal=false(기본) 이면 소수점을 아예 받지 않는다.
 * 원·엔·동·루피아처럼 CURRENCIES.decimals 가 0 인 통화에 사용.
 * 저장 시에는 parseAmountInput 으로 콤마를 걷어내고 숫자로 바꾼다.
 */
export function formatNumberInput(raw: string, allowDecimal = false): string {
    if (!raw) return '';
    const cleaned = raw.replace(allowDecimal ? /[^\d.]/g : /[^\d]/g, '');
    if (!cleaned) return '';

    const dotIndex = cleaned.indexOf('.');
    // 소수점은 하나만 인정하고, 뒤쪽에 더 찍힌 점은 버린다
    const intPart = dotIndex === -1 ? cleaned : cleaned.slice(0, dotIndex);
    const decPart = dotIndex === -1 ? null : cleaned.slice(dotIndex + 1).replace(/\./g, '');

    // 선행 0 정리 ('007' → '7'). 단 '0' 자체와 '0.xx' 는 유지
    const normalizedInt = intPart.replace(/^0+(?=\d)/, '');
    const withComma = normalizedInt.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return decPart === null ? withComma : `${withComma || '0'}.${decPart}`;
}

/** 마스킹된 입력값 → 숫자. 비었거나 음수/비정상이면 null. */
export function parseAmountInput(raw: string): number | null {
    if (!raw?.trim()) return null;
    const n = Number(raw.replace(/,/g, ''));
    return Number.isFinite(n) && n >= 0 ? n : null;
}

/**
 * 금액 표시. style 로 한글 단위("12,000엔") / 기호("¥12,000") 선택.
 * 기본은 한글 단위 — JPY 와 CNY 가 기호(¥)를 공유해 헷갈리기 때문.
 */
export function formatAmount(
    amount: number,
    currency: string,
    style: 'unit' | 'symbol' | 'plain' = 'unit',
): string {
    const meta = CURRENCY_MAP[currency];
    const decimals = meta?.decimals ?? 2;
    const num = amount.toLocaleString('ko-KR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
    if (style === 'plain') return num;          // 통화명을 옆에 따로 쓸 때 (숫자만)
    if (!meta) return `${num} ${currency}`;
    return style === 'symbol' ? `${meta.symbol}${num}` : `${num}${meta.unit}`;
}
