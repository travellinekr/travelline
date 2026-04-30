import { createContext, useContext } from "react";

// 거리 정렬 기준 카드(anchor) Context — 타임라인 카드 단일 탭으로 선택
export const AnchorContext = createContext<{
    selectedAnchorId: string | null;
    toggleAnchor: (cardId: string, card: any) => void;
}>({
    selectedAnchorId: null,
    toggleAnchor: () => {},
});

export const useAnchor = () => useContext(AnchorContext);
