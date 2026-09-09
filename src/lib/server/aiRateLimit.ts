import { NextResponse } from 'next/server';
import { requireUser } from './requireUser';

// AI 라우트 보호 — 로그인 확인 + 사용자당 호출 빈도 제한.
//
// 왜 필요한가:
//   AI 호출 한 번이 제미나이 요금으로 직결된다. 라우트가 열려 있으면 주소를 아는
//   누구나 반복문으로 부를 수 있고, 크레딧이 몇 시간 만에 빈다.
//
// 왜 UI 만으로는 부족한가:
//   AI 버튼은 화면마다 다른 조건으로 가려진다(데스크톱은 canEdit, 모바일은 로그인).
//   화면을 거치지 않고 주소로 직접 호출하면 UI 게이트는 아무 의미가 없다.
//   돈이 나가는 경로는 서버에서 막아야 한다.

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

// 사용자별 최근 호출 시각. 서버 인스턴스 메모리에만 있다.
//
// 한계: Vercel 은 인스턴스가 여러 개라 이 카운트가 인스턴스마다 따로 세어진다.
//       즉 실제 허용량은 10회보다 늘어날 수 있다. 그래도 반복문을 멈추는 데는
//       충분하고, 진짜 방어선은 "로그인 필수"다(계정 없이는 아예 못 부른다).
//       정확한 상한이 필요해지면 DB 로 옮긴다.
const hits = new Map<string, number[]>();

/** 오래된 기록 정리 — 맵이 무한정 커지지 않게 한다 */
function prune(now: number) {
    if (hits.size < 500) return;
    for (const [key, times] of hits) {
        const alive = times.filter((t) => now - t < WINDOW_MS);
        if (alive.length === 0) hits.delete(key);
        else hits.set(key, alive);
    }
}

/**
 * 분당 호출 수 확인. 넘으면 그대로 반환할 429, 통과면 null.
 * 통과한 호출은 이 시점에 기록된다.
 */
export function checkAiRateLimit(userId: string): NextResponse | null {
    const now = Date.now();
    prune(now);

    const recent = (hits.get(userId) ?? []).filter((t) => now - t < WINDOW_MS);
    if (recent.length >= MAX_PER_WINDOW) {
        // 가장 오래된 기록이 창을 벗어날 때까지 남은 시간
        const retryAfter = Math.max(1, Math.ceil((WINDOW_MS - (now - recent[0])) / 1000));
        return NextResponse.json(
            { error: `요청이 너무 잦아요. ${retryAfter}초 후에 다시 시도해주세요.` },
            { status: 429, headers: { 'Retry-After': String(retryAfter) } },
        );
    }

    recent.push(now);
    hits.set(userId, recent);
    return null;
}

/** 로그인 확인 + 빈도 확인을 한 번에. 통과하면 userId, 아니면 반환할 응답. */
export async function guardAiRoute(request: Request): Promise<{ userId: string } | NextResponse> {
    const auth = await requireUser(request, 'AI 플래너는 로그인 후 이용할 수 있어요.');
    if (auth instanceof NextResponse) return auth;

    const limited = checkAiRateLimit(auth.userId);
    if (limited) return limited;

    return auth;
}
