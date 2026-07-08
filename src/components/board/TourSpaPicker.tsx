'use client';

import { useState, useMemo } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Palmtree, Plus, Trash2 } from 'lucide-react';
import { TourSpaType } from '@/data/tourSpa';
import { CITY_DATA } from '@/data/cities';
import { TourSpaCard } from '@/components/cards/TourSpaCard';
import { TourSpaAddModal } from './TourSpaAddModal';
import { InboxMapModal } from './InboxMapModal';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';
import { PickerFilterBar } from './PickerFilterBar';
import { useAnchor } from '@/contexts/AnchorContext';
import { sortByAnchorDistance } from '@/utils/distance';

// 드롭다운 그룹 — 의미 단위로 묶어 7개로 압축
const TOURSPA_TYPE_GROUPS: Array<{ value: string; label: string; types: TourSpaType[] | null }> = [
    { value: 'all', label: '전체', types: null },
    { value: 'sightseeing', label: '관광지', types: ['city-tour', 'cultural'] },
    { value: 'tour', label: '투어', types: ['island-hopping', 'adventure', 'cruise'] },
    { value: 'spa', label: '스파·마사지', types: ['spa', 'massage'] },
    { value: 'theme-park', label: '테마파크', types: ['theme-park'] },
    { value: 'activity', label: '액티비티', types: ['water-sports'] },
    { value: 'show', label: '공연·체험', types: ['show', 'workshop'] },
];

function matchesTourSpaFilter(card: any, selectedValue: string, searchText: string, selectedSubCity: string): boolean {
    const cardType = card.type || card.tourSpaType;
    const group = TOURSPA_TYPE_GROUPS.find(g => g.value === selectedValue);
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

function getTourSpaByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(CITY_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? (CITY_DATA[cityKey].tourSpa ?? []) : [];
}

function getCityList(destinationCity?: string, subCities: Array<{ name: string; engName: string }> = []) {
    if (subCities.length > 0) return subCities.map(c => c.engName || c.name).filter(Boolean);
    return destinationCity ? [destinationCity] : [];
}

function getStaticTourSpaCards(destinationCity?: string, subCities: Array<{ name: string; engName: string }> = []) {
    return getCityList(destinationCity, subCities).flatMap(city =>
        getTourSpaByCity(city).map(item => ({ ...item, city }))
    );
}

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
                : 'border-gray-200 text-gray-400 hover:border-cyan-400 hover:text-cyan-500 hover:bg-cyan-50'
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



// 드래그 가능한 투어&스파 카드 컴포넌트
function DraggableTourSpaCard({ tourSpa, index, cardId }: { tourSpa: any; index: number; cardId?: string }) {
    const id = cardId || `picker-tourspa-${index}`;
    const cardData = {
        id,
        text: tourSpa.name,
        title: tourSpa.name,
        category: 'tourspa' as const,
        tourSpaType: tourSpa.type,
        city: tourSpa.city,
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
        isUserCreated: tourSpa.isUserCreated,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-cyan-300 bg-cyan-50/50 rounded-lg"
            />
        );
    }

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:border-cyan-500 hover:shadow-md transition-all">
            <TourSpaCard
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


// TourSpaPicker 메인 컴포넌트
export function TourSpaPicker({
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

    const { anchorCard } = useAnchor();
    const anchorCoords = anchorCard?.coordinates ?? null;
    const sampleTourSpaCards = sortByAnchorDistance(getStaticTourSpaCards(destinationCity, subCities), anchorCoords);
    const sortedCreatedCards = sortByAnchorDistance(createdCards, anchorCoords);

    const filteredSample = useMemo(
        () => sampleTourSpaCards.filter((c: any) => matchesTourSpaFilter(c, selectedType, searchText, selectedSubCity)),
        [sampleTourSpaCards, selectedType, searchText, selectedSubCity],
    );
    const filteredCreated = useMemo(
        () => sortedCreatedCards.filter((c: any) => matchesTourSpaFilter(c, selectedType, searchText, selectedSubCity)),
        [sortedCreatedCards, selectedType, searchText, selectedSubCity],
    );

    const mapMarkers = useMemo(() => {
        const markers: Array<{ id: string; title: string; coordinates: { lat: number; lng: number }; isAnchor?: boolean }> = [];
        if (anchorCard?.coordinates) {
            markers.push({ id: `anchor-${anchorCard.id}`, title: anchorCard.text || anchorCard.title || '기준 카드', coordinates: anchorCard.coordinates, isAnchor: true });
        }
        sampleTourSpaCards.forEach((c: any, i: number) => {
            if (c.coordinates) markers.push({ id: `sample-${i}-${c.name}`, title: c.name, coordinates: c.coordinates });
        });
        sortedCreatedCards.forEach((c: any) => {
            if (c.coordinates) markers.push({ id: c.id, title: c.text || c.title || '카드', coordinates: c.coordinates });
        });
        return markers;
    }, [anchorCard, sampleTourSpaCards, sortedCreatedCards]);

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
                icon={<Palmtree className="w-12 h-12" />}
                title="먼저 여행지를 선택해주세요"
                size="lg"
            />
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <PickerHeader
                title="투어&스파"
                icon={Palmtree}
                color="cyan"
                count={filteredSample.length + filteredCreated.length}
                category="tourspa"
                onMapClick={() => setIsMapOpen(true)}
                mapDisabled={mapMarkers.length === 0}
            />

            {/* 필터 바 */}
            <PickerFilterBar
                color="cyan"
                typeOptions={TOURSPA_TYPE_GROUPS.map(g => ({ value: g.value, label: g.label }))}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                searchText={searchText}
                onSearchChange={setSearchText}
                subCities={subCities}
                selectedSubCity={selectedSubCity}
                onSubCityChange={setSelectedSubCity}
            />

            {/* 투어&스파 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 도시별 추천 관광 카드 */}
                    {filteredSample.map((tourSpa: any, index: number) => (
                        <DraggableTourSpaCard
                            key={`sample-${index}`}
                            cardId={`picker-tourspa-${index}`}
                            tourSpa={{
                                name: tourSpa.name,
                                type: tourSpa.type,
                                icon: tourSpa.icon,
                                description: tourSpa.description,
                                duration: tourSpa.duration,
                                priceRange: tourSpa.priceRange,
                                pickupAvailable: tourSpa.pickupAvailable,
                                coordinates: tourSpa.coordinates,
                                reservationRequired: tourSpa.reservationRequired,
                                openingHours: tourSpa.openingHours,
                                features: tourSpa.features,
                                rating: tourSpa.rating,
                                city: tourSpa.city,
                                isUserCreated: false,
                            }}
                            index={index}
                        />
                    ))}

                    {/* 생성된 카드들 (anchor 시 거리순) */}
                    {filteredCreated.map((card: any) => {

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
                <TourSpaAddModal
                    destinationCity={destinationCity}
                    anchorCoordinates={anchorCoords}
                    anchorTitle={anchorCard?.text || anchorCard?.title || null}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}

            <InboxMapModal
                title="투어&스파 지도"
                markers={mapMarkers}
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
            />
        </div>
    );
}
