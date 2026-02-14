'use client';

import { useState } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Palmtree, Plus, Trash2 } from 'lucide-react';
import { TOUR_SPA_SAMPLES, TourSpaType } from '@/data/tourSpa';
import { BaseCard } from './cards/BaseCard';
import { TourSpaAddModal } from './TourSpaAddModal';

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd, onDelete }: { onAdd: () => void; onDelete?: (cardId: string) => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'tourspa-delete-zone',
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
                : 'border-gray-200 text-gray-400 hover:border-teal-400 hover:text-teal-500 hover:bg-teal-50'
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

// 투어&스파 타입별 한글 레이블
const TOUR_SPA_TYPE_LABELS: Record<TourSpaType, string> = {
    'island-hopping': '아일랜드 호핑',
    'city-tour': '시티 투어',
    'spa': '스파',
    'massage': '마사지',
    'theme-park': '테마파크',
    'cultural': '문화 체험',
    'water-sports': '수상 스포츠',
    'adventure': '어드벤처',
    'cruise': '크루즈',
    'show': '공연/쇼',
    'workshop': '워크샵/클래스',
};

// 드래그 가능한 투어&스파 카드 컴포넌트
function DraggableTourSpaCard({ tourSpa, index, cardId }: { tourSpa: any; index: number; cardId?: string }) {
    const cardData = {
        id: cardId || `picker-tourspa-${index}`,
        title: tourSpa.name,
        category: 'tourspa' as const,
        tourSpaType: tourSpa.type,
        description: tourSpa.description,
        duration: tourSpa.duration,
        priceRange: tourSpa.priceRange,
        pickupAvailable: tourSpa.pickupAvailable,
        coordinates: tourSpa.coordinates,
        reservationRequired: tourSpa.reservationRequired,
        openingHours: tourSpa.openingHours,
        features: tourSpa.features,
        rating: tourSpa.rating,
        icon: tourSpa.icon,
        isUserCreated: tourSpa.isUserCreated,  // 삭제 검증용
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: cardId || `picker-tourspa-${index}`,  // cardId가 있으면 우선 사용
        data: cardData,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    const typeLabel = TOUR_SPA_TYPE_LABELS[tourSpa.type as TourSpaType] || tourSpa.type;

    // 드래그 중일 때 빈 placeholder 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-teal-300 bg-teal-50/50 rounded-lg"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="cursor-grab active:cursor-grabbing"
        >
            <BaseCard
                colorClass="bg-teal-400"
                icon={Palmtree}
                category={typeLabel}
                className="h-[72px]"
            >
                <div className="flex flex-col justify-center w-full">
                    <div className="flex items-center gap-2">
                        {tourSpa.icon && (
                            <span className="text-base">{tourSpa.icon}</span>
                        )}
                        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                            {tourSpa.name}
                        </h4>
                    </div>
                    {/* 셋째줄: 주소만 표시 */}
                    {tourSpa.address && (
                        <div className="mt-0.5">
                            <span className="text-[11px] text-gray-500 truncate block">
                                {tourSpa.address}
                            </span>
                        </div>
                    )}
                </div>
            </BaseCard>
        </div>
    );
}

// TourSpaPicker 메인 컴포넌트
export function TourSpaPicker({
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
                <Palmtree className="w-12 h-12 text-slate-300 mb-3" />
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
                    <Palmtree className="w-5 h-5 text-teal-500" />
                    <h3 className="font-bold text-slate-800">투어&스파</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {createdCards.length}개
                </span>
            </div>

            {/* 투어&스파 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 카드 비활성화 */}
                    {/* {TOUR_SPA_SAMPLES.map((tourSpa, index) => (
                        <DraggableTourSpaCard
                            key={index}
                            tourSpa={tourSpa}
                            index={index}
                        />
                    ))} */}

                    {/* 생성된 카드들 (샘플 카드 아래) */}
                    {createdCards.map((card: any) => {

                        // 타입에 따른 아이콘 매핑
                        const getIcon = (type: string) => {
                            const iconMap: { [key: string]: string } = {
                                'massage': '🧘',
                                'spa': '💆',
                                'tour': '🚌',
                                'activity': '🎯'
                            };
                            return iconMap[type] || '🎫';
                        };

                        return (
                            <DraggableTourSpaCard
                                key={card.id}
                                cardId={card.id}
                                tourSpa={{
                                    name: card.text || card.title,
                                    type: card.tourSpaType,
                                    icon: getIcon(card.tourSpaType),
                                    description: card.description,
                                    address: card.address,
                                    duration: card.duration,
                                    priceRange: card.priceRange,
                                    pickupAvailable: card.pickupAvailable,
                                    coordinates: card.coordinates,
                                    reservationRequired: card.reservationRequired,
                                    openingHours: card.openingHours,
                                    features: card.features,
                                }}
                                index={-1}
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
                <TourSpaAddModal
                    destinationCity={destinationCity}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}
        </div>
    );
}
