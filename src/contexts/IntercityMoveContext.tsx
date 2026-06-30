import { createContext, useContext } from "react";

// 도시간 이동(육로) 카드의 등록/수정 버튼이 모달을 열기 위해 사용.
// CollaborativeApp 가 setEditingMoveCardId 를 Provider로 전달.
export const IntercityMoveContext = createContext<{
    openIntercityMoveModal: (cardId: string) => void;
    isTripEnded: boolean;
}>({
    openIntercityMoveModal: () => {},
    isTripEnded: false,
});

export const useIntercityMove = () => useContext(IntercityMoveContext);
