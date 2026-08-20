import { createContext, useContext } from "react";

// 거리 정렬 기준 카드(anchor) Context — 타임라인 카드 단일 탭으로 선택
export const AnchorContext = createContext<{
    selectedAnchorId: string | null;
    anchorCard: any | null;
    toggleAnchor: (cardId: string, card: any) => void;
    /** 선택 해제 (경비 등록 후처럼 토글이 아니라 확실히 풀어야 할 때) */
    clearAnchor: () => void;
    scrollToAnchor: () => void;
}>({
    selectedAnchorId: null,
    anchorCard: null,
    toggleAnchor: () => {},
    clearAnchor: () => {},
    scrollToAnchor: () => {},
});

export const useAnchor = () => useContext(AnchorContext);
