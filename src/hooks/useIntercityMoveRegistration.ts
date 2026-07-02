import { useState, useMemo, useCallback } from "react";
import { isTripEnded } from "@/utils/timeline";

// 도시간 이동(육로) 등록 로직 (state + 저장 핸들러 + Context value).
// CollaborativeApp 규모 축소 목적. 동작은 원본과 100% 동일.
export function useIntercityMoveRegistration({
    flightInfo,
    setCardTargetCity,
}: {
    flightInfo: any;
    setCardTargetCity: (args: { cardId: string; targetCity: string }) => void;
}) {
    // 도시간 이동(육로) 모달 — 클릭한 메타 카드 id
    const [editingMoveCardId, setEditingMoveCardId] = useState<string | null>(null);

    const handleSaveIntercityMove = useCallback((_cityKorean: string, cityEngName: string) => {
        if (!editingMoveCardId) return;
        setCardTargetCity({ cardId: editingMoveCardId, targetCity: cityEngName });
        setEditingMoveCardId(null);
    }, [editingMoveCardId, setCardTargetCity]);

    const intercityMoveContextValue = useMemo(() => ({
        openIntercityMoveModal: (cardId: string) => setEditingMoveCardId(cardId),
        isTripEnded: isTripEnded(flightInfo),
    }), [flightInfo]);

    return {
        editingMoveCardId,
        setEditingMoveCardId,
        handleSaveIntercityMove,
        intercityMoveContextValue,
    };
}
