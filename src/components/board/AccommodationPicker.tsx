'use client';

import { useState } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Hotel, Plus, Trash2 } from 'lucide-react';
import { ACCOMMODATIONS_DATA, AccommodationData } from '@/data/accommodations';
import { BaseCard } from './cards/BaseCard';
import { AccommodationAddModal } from './AccommodationAddModal';

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd, onDelete }: { onAdd: () => void; onDelete?: (cardId: string) => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'hotel-delete-zone',
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
                : 'border-gray-200 text-gray-400 hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50'
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

// 숙소 타입 정의 (데이터와 일치)
type AccommodationType = 'hotel' | 'resort';

// 숙소 타입별 한글 레이블
const ACCOMMODATION_TYPE_LABELS: Record<AccommodationType, string> = {
    hotel: '호텔',
    resort: '리조트',
};

// 도시별 숙소 목록 필터링 함수 (대소문자 무시)
function getAccommodationsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(ACCOMMODATIONS_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? ACCOMMODATIONS_DATA[cityKey] : [];
}


// 드래그 가능한 숙소 카드 컴포넌트
function DraggableHotelCard({ card, cardId }: { card: any; cardId?: string }) {
    const cardData = {
        id: cardId || `picker-hotel-${Date.now()}`,
        title: card.text || card.title,
        category: 'hotel' as const,
        accommodationType: card.accommodationType,
        city: card.city,
        coordinates: card.coordinates,
        checkInTime: card.checkInTime,
        checkOutTime: card.checkOutTime,
        priceRange: card.priceRange,
        features: card.features,
        tags: card.tags,
        icon: card.icon,
        rating: card.rating,
        address: card.address,
        isUserCreated: card.isUserCreated,  // 삭제 검증용
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: cardId || `picker-hotel-${Date.now()}`,
        data: cardData,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    const typeLabel = ACCOMMODATION_TYPE_LABELS[card.accommodationType as AccommodationType] || card.accommodationType;

    // 드래그 중일 때 빈 placeholder 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-rose-300 bg-rose-50/50 rounded-lg"
            />
        );
    }

    // 아이콘 매핑
    const getIcon = (type: string) => {
        const iconMap: { [key: string]: string } = {
            'hotel': '🏨',
            'resort': '🏖️',
            'airbnb': '🏠',
            'hostel': '🛏️',
            'guesthouse': '🏡',
            'villa': '🏘️',
            'apartment': '🏢',
        };
        return card.icon || iconMap[type] || '🏨';
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="cursor-grab active:cursor-grabbing"
        >
            <BaseCard
                colorClass="bg-rose-400"
                icon={Hotel}
                category={typeLabel}
                className="h-[72px]"
            >
                <div className="flex flex-col justify-center w-full">
                    <div className="flex items-center gap-2">
                        <span className="text-base">{getIcon(card.accommodationType)}</span>
                        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                            {card.text || card.title}
                        </h4>
                    </div>
                    {/* 셋째줄: 주소만 표시 */}
                    {card.address && (
                        <div className="mt-0.5">
                            <span className="text-[11px] text-gray-500 truncate block">
                                {card.address}
                            </span>
                        </div>
                    )}
                </div>
            </BaseCard>
        </div>
    );
}

// AccommodationPicker 메인 컴포넌트
export function AccommodationPicker({
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

    // 🔍 디버깅: 샘플 데이터 로딩 확인
    const sampleAccommodations = destinationCity ? getAccommodationsByCity(destinationCity) : [];

    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Hotel className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-800">숙소</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {sampleAccommodations.length + createdCards.length}개
                </span>
            </div>

            {/* 숙소 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 카드들 (destinationCity 기반 필터링) */}
                    {sampleAccommodations.map((accommodation: AccommodationData, index: number) => (
                        <DraggableHotelCard
                            key={`sample-${index}`}
                            cardId={`sample-hotel-${index}`}
                            card={{
                                text: accommodation.name,
                                title: accommodation.name,
                                accommodationType: accommodation.type,
                                city: accommodation.city,
                                coordinates: accommodation.coordinates,
                                checkInTime: accommodation.checkInTime,
                                checkOutTime: accommodation.checkOutTime,
                                description: accommodation.description,
                                tags: accommodation.tags,
                                isUserCreated: false,  // 샘플 카드는 삭제 불가
                            }}
                        />
                    ))}

                    {/* 생성된 카드들 (샘플 카드 아래) */}
                    {createdCards.map((card: any) => {

                        return (
                            <DraggableHotelCard
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
                <AccommodationAddModal
                    destinationCity={destinationCity}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}
        </div>
    );
}
