'use client';

import { useState } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Utensils, Plus, Trash2 } from 'lucide-react';
import { RestaurantType, RestaurantData, RESTAURANTS_DATA } from '@/data/restaurants';
import { FoodCard } from '@/components/cards/FoodCard';
import { FoodAddModal } from './FoodAddModal';

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
    const cityKey = Object.keys(RESTAURANTS_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? RESTAURANTS_DATA[cityKey] : [];
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
    createdCards = []
}: {
    destinationCity?: string;
    onAddCard?: (data: any) => void;
    onDeleteCard?: (cardId: string) => void;
    createdCards?: any[]
}) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleCreateCard = (data: any) => {

        if (onAddCard) {
            onAddCard(data);
        }
        setIsAddModalOpen(false);
    };

    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Utensils className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    // 샘플 데이터 필터링
    const sampleRestaurants = destinationCity ? getRestaurantsByCity(destinationCity) : [];

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-slate-800">맛집</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {sampleRestaurants.length + createdCards.length}개
                </span>
            </div>

            {/* 맛집 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col">
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

                    {/* 생성된 카드들 */}
                    {createdCards.map((card: any) => {

                        return (
                            <DraggableFoodCard
                                key={card.id}
                                cardId={card.id}
                                card={card}
                            />
                        );
                    })}

                    {/* 직접 추가하기 / 삭제 영역 */}
                    <AddOrDeleteButton
                        onAdd={() => setIsAddModalOpen(true)}
                        onDelete={onDeleteCard}
                    />
                </div>
            </div>

            {/* 모달 */}
            {isAddModalOpen && (
                <FoodAddModal
                    destinationCity={destinationCity}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}
        </div>
    );
}
