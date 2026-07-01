import { createContext, useContext } from "react";

// 도시간 항공편 카드의 등록/수정 버튼이 모달을 열기 위해 사용.
// childInfoMap: 모든 메타 카드의 자식 카드 정보(등록 여부 + 도착 도시) 사전.
//   - 카드 1장당 useStorage selector 등록을 막기 위해 CollaborativeApp 에서 1회 집계 후 내려줌.
//   - key: 메타 카드 id, value: { isRegistered, childArrCity }
export type IntercityChildInfo = { isRegistered: boolean; childArrCity: string };

export const IntercityFlightContext = createContext<{
    openIntercityModal: (cardId: string) => void;
    isTripEnded: boolean;
    childInfoMap: Map<string, IntercityChildInfo>;
}>({
    openIntercityModal: () => {},
    isTripEnded: false,
    childInfoMap: new Map(),
});

export const useIntercityFlight = () => useContext(IntercityFlightContext);
