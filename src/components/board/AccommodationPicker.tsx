'use client';

import { useState, useMemo } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Hotel, Plus, Trash2 } from 'lucide-react';
import { AccommodationData, AccommodationType, CITY_DATA } from '@/data/cities';
import { HotelCard } from '@/components/cards/HotelCard';
import { AccommodationAddModal } from './AccommodationAddModal';
import { InboxMapModal } from './InboxMapModal';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';
import { PickerFilterBar } from './PickerFilterBar';
import { useAnchor } from '@/contexts/AnchorContext';
import { sortByAnchorDistance } from '@/utils/distance';
import { useSubCityFilteredData } from '@/hooks/useSubCityFilteredData';

// 드롭다운 그룹 — 호텔/리조트/에어비앤비/호스텔·게스트하우스
const HOTEL_TYPE_GROUPS: Array<{ value: string; label: string; types: AccommodationType[] | null }> = [
    { value: 'all', label: '전체', types: null },
    { value: 'hotel', label: '호텔', types: ['hotel'] },
    { value: 'resort', label: '리조트', types: ['resort'] },
    { value: 'airbnb', label: '에어비앤비', types: ['airbnb'] },
    { value: 'hostel', label: '호스텔·게스트하우스', types: ['hostel', 'guesthouse'] },
];

function matchesHotelFilter(card: any, selectedValue: string, searchText: string, selectedSubCity: string): boolean {
    const cardType = card.type || card.accommodationType;
    const group = HOTEL_TYPE_GROUPS.find(g => g.value === selectedValue);
    if (group?.types && !(cardType && group.types.includes(cardType))) return false;
    if (searchText.trim()) {
        const q = searchText.trim().toLowerCase();
        const name = (card.name || card.text || card.title || '').toLowerCase();
        if (!name.includes(q)) return false;
    }
    if (selectedSubCity !== 'all') {
        const cardCity = String(card.city || '').toLowerCase();
        if (cardCity !== selectedSubCity.toLowerCase()) return false;
    }
    return true;
}

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
        priceTier: card.priceTier,
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
        hasInfo: card.hasInfo,
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
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:border-rose-500 hover:shadow-md transition-all">
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
    roomId,
    subCities = [],
}: {
    destinationCity?: string;
    onAddCard?: (data: any) => void;
    onDeleteCard?: (cardId: string) => void;
    createdCards?: any[];
    roomId?: string;
    subCities?: Array<{ name: string; engName: string }>;
}) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [selectedSubCity, setSelectedSubCity] = useState('all');

    const handleCreateCard = (data: any) => {

        if (onAddCard) {
            onAddCard(data);
        }
        setIsAddModalOpen(false);
    };

    const { anchorCard } = useAnchor();
    const anchorCoords = anchorCard?.coordinates ?? null;
    // 다중 도시 — subCities 있으면 그 도시들 데이터 통합 로드, 없으면 destinationCity 하나만
    const allAccommodations = useSubCityFilteredData(getAccommodationsByCity, subCities, destinationCity);
    const sampleAccommodations = sortByAnchorDistance(allAccommodations.filter(a => a.showInInbox), anchorCoords);
    const sortedCreatedCards = sortByAnchorDistance(createdCards, anchorCoords);

    const filteredSample = useMemo(
        () => sampleAccommodations.filter((a: any) => matchesHotelFilter(a, selectedType, searchText, selectedSubCity)),
        [sampleAccommodations, selectedType, searchText, selectedSubCity],
    );
    const filteredCreated = useMemo(
        () => sortedCreatedCards.filter((c: any) => matchesHotelFilter(c, selectedType, searchText, selectedSubCity)),
        [sortedCreatedCards, selectedType, searchText, selectedSubCity],
    );

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
            <PickerHeader
                title="숙소"
                icon={Hotel}
                color="rose"
                count={filteredSample.length + filteredCreated.length}
                category="hotel"
                onMapClick={() => setIsMapOpen(true)}
                mapDisabled={mapMarkers.length === 0}
            />

            {/* 필터 바 */}
            <PickerFilterBar
                color="rose"
                typeOptions={HOTEL_TYPE_GROUPS.map(g => ({ value: g.value, label: g.label }))}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                searchText={searchText}
                onSearchChange={setSearchText}
                subCities={subCities}
                selectedSubCity={selectedSubCity}
                onSubCityChange={setSelectedSubCity}
            />

            {/* 숙소 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 카드들 (destinationCity 기반 필터링) */}
                    {filteredSample.map((accommodation: AccommodationData, index: number) => (
                        <DraggableHotelCard
                            key={`sample-${index}`}
                            cardId={`picker-hotel-${index}`}
                            card={{
                                text: accommodation.name,
                                title: accommodation.name,
                                accommodationType: accommodation.type,
                                priceTier: accommodation.priceTier,
                                city: accommodation.city,
                                coordinates: accommodation.coordinates,
                                checkInTime: accommodation.checkInTime,
                                checkOutTime: accommodation.checkOutTime,
                                description: accommodation.description,
                                tags: accommodation.tags,
                                hasInfo: accommodation.hasInfo,
                                isUserCreated: false,  // 샘플 카드는 삭제 불가
                            }}
                        />
                    ))}

                    {/* 생성된 카드들 (샘플 카드 아래, anchor 시 거리순) */}
                    {filteredCreated.map((card: any) => {

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
