'use client';

import { useState, useMemo } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { Hotel, Plus, Trash2, Map, ShoppingBag } from 'lucide-react';
import { AccommodationData, CITY_DATA } from '@/data/cities';
import { HotelCard } from '@/components/cards/HotelCard';
import { AccommodationAddModal } from './AccommodationAddModal';
import { InboxMapModal } from './InboxMapModal';
import { EmptyState } from './EmptyState';
import { useAnchor } from '@/contexts/AnchorContext';
import { sortByAnchorDistance } from '@/utils/distance';
import { citySlugFromName } from '@/data/destinations';

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



// 도시별 숙소 목록 필터링 함수 (대소문자 무시)
function getAccommodationsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(CITY_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? CITY_DATA[cityKey].accommodations : [];
}


// 드래그 가능한 숙소 카드 컴포넌트
function DraggableHotelCard({ card, cardId }: { card: any; cardId?: string }) {
    const cardData = {
        id: cardId || `picker-hotel-${Date.now()}`,
        text: card.text || card.title,
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
        isUserCreated: card.isUserCreated,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: cardId || `picker-hotel-${Date.now()}`,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-rose-300 bg-rose-50/50 rounded-lg"
            />
        );
    }

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <HotelCard
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


// AccommodationPicker 메인 컴포넌트
export function AccommodationPicker({
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

    const { anchorCard } = useAnchor();
    const anchorCoords = anchorCard?.coordinates ?? null;
    const allAccommodations = destinationCity ? getAccommodationsByCity(destinationCity) : [];
    const sampleAccommodations = sortByAnchorDistance(allAccommodations.filter(a => a.showInInbox), anchorCoords);
    const sortedCreatedCards = sortByAnchorDistance(createdCards, anchorCoords);

    const mapMarkers = useMemo(() => {
        const markers: Array<{ id: string; title: string; coordinates: { lat: number; lng: number }; isAnchor?: boolean }> = [];
        if (anchorCard?.coordinates) {
            markers.push({ id: `anchor-${anchorCard.id}`, title: anchorCard.text || anchorCard.title || '기준 카드', coordinates: anchorCard.coordinates, isAnchor: true });
        }
        sampleAccommodations.forEach((a: any, i: number) => {
            if (a.coordinates) markers.push({ id: `sample-${i}-${a.name}`, title: a.name, coordinates: a.coordinates });
        });
        sortedCreatedCards.forEach((c: any) => {
            if (c.coordinates) markers.push({ id: c.id, title: c.text || c.title || '카드', coordinates: c.coordinates });
        });
        return markers;
    }, [anchorCard, sampleAccommodations, sortedCreatedCards]);

    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <EmptyState
                icon={<Hotel className="w-12 h-12" />}
                title="먼저 여행지를 선택해주세요"
                size="lg"
            />
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-800">숙소</h3>
                    <button
                        type="button"
                        onClick={() => setIsMapOpen(true)}
                        disabled={mapMarkers.length === 0}
                        title={mapMarkers.length > 0 ? '지도에서 보기' : '표시할 위치 없음'}
                        className={`p-1 rounded-md transition-colors ${mapMarkers.length > 0 ? 'text-rose-500 hover:bg-rose-50' : 'text-slate-300 cursor-not-allowed'}`}
                    >
                        <Map className="w-4 h-4" />
                    </button>
                    {(() => {
                        const slug = destinationCity ? citySlugFromName(destinationCity) : null;
                        const params = new URLSearchParams();
                        if (slug) {
                            params.set('city', slug);
                            params.set('category', 'hotel');
                            if (roomId) params.set('from', roomId);
                            if (anchorCard?.coordinates) {
                                params.set('anchorLat', String(anchorCard.coordinates.lat));
                                params.set('anchorLng', String(anchorCard.coordinates.lng));
                                params.set('anchorTitle', anchorCard.text || anchorCard.title || '');
                            }
                        }
                        return (
                            <Link
                                href={slug ? `/explore?${params.toString()}` : '#'}
                                onClick={slug ? undefined : (e) => e.preventDefault()}
                                title={slug ? '여행쇼핑에서 보기' : '여행쇼핑에서 볼 수 없는 도시'}
                                className={`p-1 rounded-md transition-colors ${slug
                                    ? 'text-rose-500 hover:bg-rose-50'
                                    : 'text-slate-300 cursor-not-allowed'}`}
                                aria-disabled={!slug}
                            >
                                <ShoppingBag className="w-4 h-4" />
                            </Link>
                        );
                    })()}
                </div>
                <span className="text-xs text-slate-500">
                    {sampleAccommodations.length + createdCards.length}개
                </span>
            </div>

            {/* 숙소 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 카드들 (destinationCity 기반 필터링) */}
                    {sampleAccommodations.map((accommodation: AccommodationData, index: number) => (
                        <DraggableHotelCard
                            key={`sample-${index}`}
                            cardId={`picker-hotel-${index}`}
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

                    {/* 생성된 카드들 (샘플 카드 아래, anchor 시 거리순) */}
                    {sortedCreatedCards.map((card: any) => {

                        return (
                            <DraggableHotelCard
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
                <AccommodationAddModal
                    destinationCity={destinationCity}
                    anchorCoordinates={anchorCoords}
                    anchorTitle={anchorCard?.text || anchorCard?.title || null}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}

            <InboxMapModal
                title="숙소 지도"
                markers={mapMarkers}
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
            />
        </div>
    );
}
