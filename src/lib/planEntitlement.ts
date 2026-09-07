// 여행계획(프로젝트) 단위 유료 혜택 판정.
//
// 상품: 1,990원 → 광고 제거 + 사진 원본 3년 보관 (무료는 여행종료 +14일)
//
// projects.paid_until (timestamptz, NOT NULL) 하나로 판정한다.
//
//     now() > paid_until  →  무료
//
// 무료는 NULL 이 아니라 과거 센티널(2000-01-01)이다.
// NULL 이면 `paid_until < now()` 류의 조건에서 그 행이 통째로 빠져(SQL 3값 논리),
// 무료 프로젝트를 훑는 배치가 정작 결제한 적 없는 프로젝트를 놓친다.
// 모든 행이 값을 가지면 규칙이 하나로 통일된다.

/** 유료 혜택 기간 — 결제 1건당 3년 */
export const PAID_PLAN_YEARS = 3;

/** 무료 상태를 나타내는 과거 시각. DB 컬럼 기본값과 같아야 한다. */
export const FREE_PLAN_SENTINEL = '2000-01-01T00:00:00Z';

/**
 * 지금 시점에 유료 혜택이 살아 있는지.
 *
 * 서버(룸 페이지)에서 계산해 boolean 으로 내려보낸다.
 * 클라이언트 시계로 판정하면 기기 시간을 바꿔 광고를 없앨 수 있다.
 * 피해가 큰 조작은 아니지만, 서버에 이미 판정할 자리가 있으므로 클라이언트에 맡기지 않는다.
 *
 * 값이 없거나 깨진 경우는 무료로 본다 — 혜택은 확실할 때만 준다.
 */
export function isPaidPlanActive(paidUntil: string | Date | null | undefined): boolean {
    if (!paidUntil) return false;
    const until = paidUntil instanceof Date ? paidUntil : new Date(paidUntil);
    if (isNaN(until.getTime())) return false;
    return until.getTime() > Date.now();
}

/**
 * 결제 시 넣을 새 만료 시각.
 *
 * 이미 유료인 프로젝트에 추가 결제하면 남은 기간에 이어붙인다(소멸시키지 않는다).
 * 만료됐거나 무료였으면 지금부터 3년.
 */
export function extendPaidUntil(current: string | Date | null | undefined, now: Date = new Date()): Date {
    const base = isPaidPlanActive(current)
        ? new Date(current instanceof Date ? current : new Date(current as string))
        : now;
    const next = new Date(base);
    next.setFullYear(next.getFullYear() + PAID_PLAN_YEARS);
    return next;
}
