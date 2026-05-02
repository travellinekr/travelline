import { useEffect } from 'react';

// /explore 페이지에서 쌓인 카드 큐(localStorage `explore_queue_<roomId>`)를
// 룸 진입 시 보관함으로 자동 추가. 중복 카드는 스킵.
export function useExploreQueue({
    roomId,
    cardsRef,
    handleCreateCard,
    addToast,
}: {
    roomId: string;
    cardsRef: React.MutableRefObject<any>;
    handleCreateCard: (data: any) => void;
    addToast: (msg: string, type?: 'info' | 'warning') => void;
}) {
    useEffect(() => {
        const queueKey = `explore_queue_${roomId}`;
        const raw = localStorage.getItem(queueKey);
        if (!raw) return;

        let queued: any[] = [];
        try { queued = JSON.parse(raw); } catch { return; }
        if (!queued.length) return;

        // 딜레이 후 처리 (Liveblocks 스토리지 준비 대기)
        const timer = setTimeout(() => {
            // 현재 보관함에 있는 카드들의 title+city 세트 (O(1) 중복 검색)
            const existingKeys = new Set<string>();
            if (cardsRef.current) {
                cardsRef.current.forEach((c: any) => {
                    if (c?.text && c?.city) {
                        existingKeys.add(`${c.text}__${c.city}`);
                    }
                });
            }

            let addedCount = 0;
            let skippedCount = 0;

            queued.forEach((card) => {
                const dupKey = `${card.name}__${card.city || ''}`;
                if (existingKeys.has(dupKey)) {
                    skippedCount++;
                    return; // 중복 skip
                }
                try {
                    handleCreateCard({
                        title: card.name,
                        category: card.category === 'food' ? 'food' : card.category === 'shopping' ? 'shopping' : 'hotel',
                        type: 'place',
                        city: card.city || '',
                        icon: card.icon || '',
                        coordinates: card.coordinates,
                        description: card.description || '',
                        priceRange: card.priceRange || '',
                        openingHours: card.openingHours || '',
                        michelin: card.michelin || '',
                        specialty: card.specialty || '',
                        features: card.features || [],
                        reservation: card.reservation || false,
                        restaurantType: card.restaurantType || '',
                        cuisine: card.cuisine || '',
                        accommodationType: card.accommodationType || '',
                        checkInTime: card.checkInTime || '',
                        checkOutTime: card.checkOutTime || '',
                        tags: card.tags || [],
                        shoppingType: card.shoppingType || '',
                        shoppingCategory: card.shoppingCategory || '',
                        specialItems: card.specialItems || '',
                        taxRefund: card.taxRefund || false,
                    });
                    existingKeys.add(dupKey); // 방금 추가한 카드도 키에 등록
                    addedCount++;
                } catch (e) {
                    console.error('[explore_queue] 카드 추가 실패:', e);
                }
            });

            localStorage.removeItem(queueKey);

            // 결과 토스트
            if (addedCount > 0 && skippedCount > 0) {
                addToast(`✈️ ${addedCount}개 카드가 추가되었고, ${skippedCount}개는 중복 스킵했습니다.`, 'info');
            } else if (addedCount > 0) {
                addToast(`✈️ Explore에서 ${addedCount}개 카드가 보관함에 추가됐어요!`, 'info');
            } else if (skippedCount > 0) {
                addToast(`모든 카드가 이미 보관함에 있어요. (${skippedCount}개 중복 스킵)`, 'warning');
            }
        }, 500); // Liveblocks 연결 대기 (ClientSideSuspense 내부라 이미 연결됨)

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);
}
