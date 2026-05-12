'use client';

import { useState, useMemo } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Utensils, Plus, Trash2 } from 'lucide-react';
import { RestaurantType, RestaurantData, CITY_DATA } from '@/data/cities';
import { FoodCard } from '@/components/cards/FoodCard';
import { FoodAddModal } from './FoodAddModal';
import { InboxMapModal } from './InboxMapModal';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';
import { useAnchor } from '@/contexts/AnchorContext';
import { sortByAnchorDistance } from '@/utils/distance';

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd, onDelete }: { onAdd: () => void; onDelete?: (cardId: string) => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'food-delete-zone',
    });

    const isDragging = !!active;

    return (
        <button
            ref={setNodeRef}
            onClick={!isDragging ? onAdd : undefined}
            className={`h-16 border-2 border-dashed rounded-2xl flex items-center justify-center transition-all gap-2 mt-2 ${isDragging
                ? isOver
                    ? 'bg-red-100 border-red-500 text-red-700'
                    : 'bg-red-50 border-red-300 text-red-500'
                : 'border-gray-200 text-gray-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50'
                }`}
        >
            {isDragging ? (
                <>
                    <Trash2 className="w-5 h-5" />
                    <span className="font-medium text-sm">
                        {isOver ? '카드를 놓으면 삭제됩니다' : '삭제할 카드를 넣으세요'}
                    </span>
                </>
            ) : (
                <>
                    <Plus className="w-5 h-5" />
                    <span className="font-medium text-sm">직접 추가하기</span>
                </>
            )}
        </button>
    );
}



// 도시별 맛집 목록 필터링 함수 (대소문자 무시)
function getRestaurantsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(CITY_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? CITY_DATA[cityKey].restaurants : [];
}


// 드래그 가능한 맛집 카드 컴포넌트
function DraggableFoodCard({ card, cardId }: { card: any; cardId?: string }) {
    const cardData = {
        id: cardId || `picker-food-${Date.now()}`,
        text: card.text || card.title,
        title: card.text || card.title,
        category: 'food' as const,
        restaurantType: card.restaurantType,
        city: card.city,
        coordinates: card.coordinates,
        cuisine: card.cuisine,
        specialty: card.specialty,
        priceRange: card.priceRange,
        michelin: card.michelin,
        reservation: card.reservation,
        openingHours: card.openingHours,
        features: card.features,
        icon: card.icon,
        rating: card.rating,
        address: card.address,
        isUserCreated: card.isUserCreated,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: cardId || `picker-food-${Date.now()}`,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-orange-300 bg-orange-50/50 rounded-lg"
            />
        );
    }

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <FoodCard
                card={cardData}
                variant="inbox"
                onRef={setNodeRef}
                style={style}
                listeners={listeners}
                attributes={attributes}
            />
        </div>
    );
}


// FoodPicker 메인 컴포넌트
export function FoodPicker({
    destinationCity,
    onAddCard,
    onDeleteCard,
    createdCards = [],
    roomId
}: {
    destinationCity?: string;
    onAddCard?: (data: any) => void;
    onDeleteCard?: (cardId: string) => void;
    createdCards?: any[];
    roomId?: string;
}) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const handleCreateCard = (data: any) => {

        if (onAddCard) {
            onAddCard(data);
        }
        setIsAddModalOpen(false);
    };

    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <EmptyState
                icon={<Utensils className="w-12 h-12" />}
                title="먼저 여행지를 선택해주세요"
                size="lg"
            />
        );
    }

    const { anchorCard } = useAnchor();
    const anchorCoords = anchorCard?.coordinates ?? null;
    const allRestaurants = destinationCity ? getRestaurantsByCity(destinationCity) : [];
    const sampleRestaurants = sortByAnchorDistance(allRestaurants.filter(r => r.showInInbox), anchorCoords);
    const sortedCreatedCards = sortByAnchorDistance(createdCards, anchorCoords);

    // 지도 마커: 인박스 표시 카드 + anchor (있으면). 좌표 없는 카드는 제외.
    const mapMarkers = useMemo(() => {
        const markers: Array<{ id: string; title: string; coordinates: { lat: number; lng: number }; isAnchor?: boolean }> = [];
        if (anchorCard?.coordinates) {
            markers.push({
                id: `anchor-${anchorCard.id}`,
                title: anchorCard.text || anchorCard.title || '기준 카드',
                coordinates: anchorCard.coordinates,
                isAnchor: true,
            });
        }
        sampleRestaurants.forEach((r: any, i: number) => {
            if (r.coordinates) markers.push({ id: `sample-${i}-${r.name}`, title: r.name, coordinates: r.coordinates });
        });
        sortedCreatedCards.forEach((c: any) => {
            if (c.coordinates) markers.push({ id: c.id, title: c.text || c.title || '카드', coordinates: c.coordinates });
        });
        return markers;
    }, [anchorCard, sampleRestaurants, sortedCreatedCards]);

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <PickerHeader
                title="맛집"
                icon={Utensils}
                color="orange"
                count={sampleRestaurants.length + createdCards.length}
                destinationCity={destinationCity}
                roomId={roomId}
                category="food"
                onMapClick={() => setIsMapOpen(true)}
                mapDisabled={mapMarkers.length === 0}
            />

            {/* 맛집 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 맛집 카드들 (destinationCity 기반 필터링) */}
                    {sampleRestaurants.map((restaurant: RestaurantData, index: number) => (
                        <DraggableFoodCard
                            key={`sample-${index}`}
                            cardId={`picker-food-${index}`}
                            card={{
                                text: restaurant.name,
                                title: restaurant.name,
                                restaurantType: restaurant.type,
                                city: restaurant.city,
                                cuisine: restaurant.cuisine,
                                specialty: restaurant.specialty,
                                priceRange: restaurant.priceRange,
                                rating: restaurant.michelin,
                                coordinates: restaurant.coordinates,
                                features: restaurant.features,
                                icon: restaurant.icon,
                                isUserCreated: false,  // 샘플 카드는 삭제 불가
                            }}
                        />
                    ))}

                    {/* 생성된 카드들 (anchor 시 거리순) */}
                    {sortedCreatedCards.map((card: any) => {

                        return (
                            <DraggableFoodCard
                                key={card.id}
                                cardId={card.id}
                                card={card}
                            />
                        );
                    })}

                    {/* 직접 추가하기 / 삭제 영역 (viewer는 숨김) */}
                    {onAddCard && (
                        <AddOrDeleteButton
                            onAdd={() => setIsAddModalOpen(true)}
                            onDelete={onDeleteCard}
                        />
                    )}
                </div>
            </div>

            {/* 모달 */}
            {isAddModalOpen && (
                <FoodAddModal
                    destinationCity={destinationCity}
                    anchorCoordinates={anchorCoords}
                    anchorTitle={anchorCard?.text || anchorCard?.title || null}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}

            <InboxMapModal
                title="맛집 지도"
                markers={mapMarkers}
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
            />
        </div>
    );
}
