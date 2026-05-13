// /explore (여행쇼핑) 에서 추가된 카드를 룸 보관함에 반영하는 공통 로직.
// useExploreQueue (룸 mount 시 localStorage 큐 플러시) 와
// 모달 모드 직접 호출 (CollaborativeApp) 양쪽에서 재사용.

export interface ExploreQueueCard {
    name: string;
    city?: string;
    category: string;
    icon?: string;
    coordinates?: { lat: number; lng: number };
    description?: string;
    priceRange?: string;
    openingHours?: string;
    michelin?: string;
    specialty?: string;
    features?: string[];
    reservation?: boolean;
    restaurantType?: string;
    cuisine?: string;
    accommodationType?: string;
    checkInTime?: string;
    checkOutTime?: string;
    tags?: string[];
    shoppingType?: string;
    shoppingCategory?: string;
    specialItems?: string;
    taxRefund?: boolean;
}

interface ApplyDeps {
    cardsRef: React.MutableRefObject<any>;
    handleCreateCard: (data: any) => void;
}

export interface ApplyResult {
    added: number;
    skipped: number;
}

// 토스트는 결과(added/skipped) 기반으로 호출 측에서 띄움.
// (모달 모드: ExploreContent 자체 ToastContainer / 스탠드얼론: useExploreQueue 안에서)
export function applyExploreCards(input: ExploreQueueCard[], deps: ApplyDeps): ApplyResult {
    const { cardsRef, handleCreateCard } = deps;

    const existingKeys = new Set<string>();
    if (cardsRef.current) {
        cardsRef.current.forEach((c: any) => {
            if (c?.text && c?.city) {
                existingKeys.add(`${c.text}__${c.city}`);
            }
        });
    }

    let added = 0;
    let skipped = 0;

    input.forEach((card) => {
        const dupKey = `${card.name}__${card.city || ''}`;
        if (existingKeys.has(dupKey)) {
            skipped++;
            return;
        }
        try {
            handleCreateCard({
                title: card.name,
                category:
                    card.category === 'food' ? 'food'
                    : card.category === 'shopping' ? 'shopping'
                    : 'hotel',
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
            existingKeys.add(dupKey);
            added++;
        } catch (e) {
            console.error('[applyExploreCards] 카드 추가 실패:', e);
        }
    });

    return { added, skipped };
}

// 결과 → 토스트 메시지/타입 매핑 (호출 측에서 재사용)
export function toastForApplyResult(
    result: ApplyResult,
    addToast: (msg: string, type?: 'info' | 'warning') => void,
) {
    const { added, skipped } = result;
    if (added > 0 && skipped > 0) {
        addToast(`✈️ ${added}개 카드가 추가되었고, ${skipped}개는 중복 스킵했습니다.`, 'info');
    } else if (added > 0) {
        addToast(`✈️ ${added}개 카드가 보관함에 추가됐어요!`, 'info');
    } else if (skipped > 0) {
        addToast(`모든 카드가 이미 보관함에 있어요. (${skipped}개 중복 스킵)`, 'warning');
    }
}
