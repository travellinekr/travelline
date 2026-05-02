import { useState, useMemo, useEffect, useCallback } from 'react';

// AnchorContext.Provider value 생성 hook.
// 거리 정렬 기준 카드(anchor) 선택/해제 + 배너 클릭 시 타임라인 카드로 스크롤.
export function useAnchorLogic({
    cards,
    addToast,
    setInboxState,
}: {
    cards: any;
    addToast: (message: string, type?: 'info' | 'warning') => void;
    setInboxState: (state: 'closed' | 'open') => void;
}) {
    const [selectedAnchorId, setSelectedAnchorId] = useState<string | null>(null);

    const toggleAnchor = useCallback((cardId: string, card: any) => {
        if (!card?.coordinates) return; // 좌표 없는 카드는 anchor 불가
        if (selectedAnchorId === cardId) {
            setSelectedAnchorId(null);
        } else {
            setSelectedAnchorId(cardId);
            addToast('선택한 카드 기준으로 보관함에서 조회 됩니다.', 'info');
        }
    }, [selectedAnchorId, addToast]);

    // anchor 카드 객체 (cards LiveMap에서 lookup)
    const anchorCard = useMemo(
        () => (selectedAnchorId ? (cards as any)?.get?.(selectedAnchorId) ?? null : null),
        [selectedAnchorId, cards]
    );

    // anchor 카드가 storage에서 사라지면 자동 해제
    useEffect(() => {
        if (selectedAnchorId && !anchorCard) setSelectedAnchorId(null);
    }, [selectedAnchorId, anchorCard]);

    const scrollToAnchor = useCallback(() => {
        if (!selectedAnchorId) return;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        if (isMobile) setInboxState('closed'); // 모바일은 인박스 닫고 타임라인 노출
        // 인박스 닫힘 애니메이션 후 스크롤
        setTimeout(() => {
            const el = document.querySelector(`[data-card-id="${selectedAnchorId}"]`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, isMobile ? 350 : 0);
    }, [selectedAnchorId, setInboxState]);

    return useMemo(
        () => ({ selectedAnchorId, anchorCard, toggleAnchor, scrollToAnchor }),
        [selectedAnchorId, anchorCard, toggleAnchor, scrollToAnchor]
    );
}
