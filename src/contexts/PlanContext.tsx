"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

// 이 여행계획(프로젝트)이 유료인지를 트리 전체에 알린다.
//
// 상품: 1,990원 → 광고 제거 + 사진 원본 3년 보관 (무료는 여행종료 +14일)
//
// 왜 컨텍스트인가:
//   소비처가 서로 멀다. 타임라인의 광고 자리는 얕은데, 사진 뷰어의 만료 판정은
//   Timeline → DraggableCard → 카드 컴포넌트 → CardPhotoStrip → PhotoLightbox 로 깊다.
//   prop 으로 내리면 중간 컴포넌트 네댓 개가 쓰지도 않는 값을 나르게 된다.
//
// 판정 자체는 서버(룸 페이지)에서 끝내고 boolean 만 넘긴다.
// 클라이언트에서 날짜를 비교하면 기기 시간을 바꿔 혜택을 흉내낼 수 있다.

const PlanContext = createContext<{ isPaidPlan: boolean }>({ isPaidPlan: false });

export function PlanProvider({ isPaidPlan, children }: { isPaidPlan: boolean; children: ReactNode }) {
    const value = useMemo(() => ({ isPaidPlan }), [isPaidPlan]);
    return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

/**
 * 지금 보고 있는 프로젝트가 유료인지.
 *
 * Provider 밖(예: 익스플로러 보드)에서는 false — 혜택은 확실할 때만 준다.
 */
export function useIsPaidPlan(): boolean {
    return useContext(PlanContext).isPaidPlan;
}
