import { createContext, useContext } from "react";

// 도시간 항공편 카드의 등록/수정 버튼이 모달을 열기 위해 사용.
// CollaborativeApp 가 setEditingIntercityCardId 를 Provider로 전달.
export const IntercityFlightContext = createContext<{
    openIntercityModal: (cardId: string) => void;
    isTripEnded: boolean;
}>({
    openIntercityModal: () => {},
    isTripEnded: false,
});

export const useIntercityFlight = () => useContext(IntercityFlightContext);
