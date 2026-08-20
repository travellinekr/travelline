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

    // 좌표 유무와 무관하게 선택 가능. 경비 등록이 교통·여행준비처럼 좌표 없는 카드에도
    // 붙어야 하기 때문. 좌표가 없으면 거리 정렬만 조용히 비활성된다
    // (sortByAnchorDistance 는 anchor 가 null 이면 원본을 그대로 반환하고,
    //  Food/Accommodation Picker 는 anchorCard?.coordinates 가드가 이미 걸려 있음).
    const toggleAnchor = useCallback((cardId: string, card: any) => {
        if (!card) return;
        if (selectedAnchorId === cardId) {
            setSelectedAnchorId(null);
        } else {
            setSelectedAnchorId(cardId);
            addToast(
                card.coordinates
                    ? '선택한 카드 기준으로 보관함에서 조회 됩니다.'
                    : '카드를 선택했어요. 경비를 등록할 수 있어요.',
                'info',
            );
        }
    }, [selectedAnchorId, addToast]);

    const clearAnchor = useCallback(() => setSelectedAnchorId(null), []);

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
        () => ({ selectedAnchorId, anchorCard, toggleAnchor, clearAnchor, scrollToAnchor }),
        [selectedAnchorId, anchorCard, toggleAnchor, clearAnchor, scrollToAnchor]
    );
}
