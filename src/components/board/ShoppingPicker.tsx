'use client';

import { useState, useMemo } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { ShoppingType, ShoppingData, CITY_DATA } from '@/data/cities';
import { ShoppingCard } from '@/components/cards/ShoppingCard';
import { ShoppingAddModal } from './ShoppingAddModal';
import { InboxMapModal } from './InboxMapModal';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';
import { PickerFilterBar } from './PickerFilterBar';
import { useAnchor } from '@/contexts/AnchorContext';
import { sortByAnchorDistance } from '@/utils/distance';

// 드롭다운 그룹 — 의미 단위로 묶어 7개로 압축
const SHOPPING_TYPE_GROUPS: Array<{ value: string; label: string; types: ShoppingType[] | null }> = [
    { value: 'all', label: '전체', types: null },
    { value: 'department', label: '백화점·쇼핑몰', types: ['department-store', 'mall'] },
    { value: 'market', label: '전통시장', types: ['market'] },
    { value: 'supermarket', label: '마트·편의점', types: ['supermarket', 'convenience'] },
    { value: 'outlet', label: '아울렛', types: ['outlet'] },
    { value: 'duty-free', label: '면세점', types: ['duty-free'] },
    { value: 'souvenir', label: '기념품·특산품', types: ['souvenir', 'specialty', 'boutique'] },
];

function matchesShoppingFilter(card: any, selectedValue: string, searchText: string): boolean {
    const cardType = card.type || card.shoppingType;
    const group = SHOPPING_TYPE_GROUPS.find(g => g.value === selectedValue);
    if (group?.types && !(cardType && group.types.includes(cardType))) return false;
    if (searchText.trim()) {
        const q = searchText.trim().toLowerCase();
        const name = (card.name || card.text || card.title || '').toLowerCase();
        if (!name.includes(q)) return false;
    }
    return true;
}

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd, onDelete }: { onAdd: () => void; onDelete?: (cardId: string) => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'shopping-delete-zone',
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
                : 'border-gray-200 text-gray-400 hover:border-purple-400 hover:text-purple-500 hover:bg-purple-50'
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



// 도시별 쇼핑 목록 필터링 함수 (대소문자 무시)
function getShoppingByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(CITY_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? CITY_DATA[cityKey].shopping : [];
}


// 드래그 가능한 쇼핑 카드 컴포넌트
function DraggableShoppingCard({ card, cardId }: { card: any; cardId?: string }) {
    const cardData = {
        id: cardId || `picker-shopping-${Date.now()}`,
        text: card.text || card.title,
        title: card.text || card.title,
        category: 'shopping' as const,
        shoppingType: card.shoppingType,
        city: card.city,
        coordinates: card.coordinates,
        shoppingCategory: card.shoppingCategory,
        specialItems: card.specialItems,
        priceRange: card.priceRange,
        openingHours: card.openingHours,
        taxRefund: card.taxRefund,
        features: card.features,
        icon: card.icon,
        rating: card.rating,
        address: card.address,
        isUserCreated: card.isUserCreated,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: cardId || `picker-shopping-${Date.now()}`,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-purple-300 bg-purple-50/50 rounded-lg"
            />
        );
    }

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:border-purple-500 hover:shadow-md transition-all">
            <ShoppingCard
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


// ShoppingPicker 메인 컴포넌트
export function ShoppingPicker({
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
    const [selectedType, setSelectedType] = useState('all');
    const [searchText, setSearchText] = useState('');

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
                icon={<ShoppingBag className="w-12 h-12" />}
                title="먼저 여행지를 선택해주세요"
                size="lg"
            />
        );
    }

    const { anchorCard } = useAnchor();
    const anchorCoords = anchorCard?.coordinates ?? null;
    const allShopping = destinationCity ? getShoppingByCity(destinationCity) : [];
    const sampleShopping = sortByAnchorDistance(allShopping.filter(s => s.showInInbox), anchorCoords);
    const sortedCreatedCards = sortByAnchorDistance(createdCards, anchorCoords);

    const filteredSample = useMemo(
        () => sampleShopping.filter((s: any) => matchesShoppingFilter(s, selectedType, searchText)),
        [sampleShopping, selectedType, searchText],
    );
    const filteredCreated = useMemo(
        () => sortedCreatedCards.filter((c: any) => matchesShoppingFilter(c, selectedType, searchText)),
        [sortedCreatedCards, selectedType, searchText],
    );

    const mapMarkers = useMemo(() => {
        const markers: Array<{ id: string; title: string; coordinates: { lat: number; lng: number }; isAnchor?: boolean }> = [];
        if (anchorCard?.coordinates) {
            markers.push({ id: `anchor-${anchorCard.id}`, title: anchorCard.text || anchorCard.title || '기준 카드', coordinates: anchorCard.coordinates, isAnchor: true });
        }
        sampleShopping.forEach((s: any, i: number) => {
            if (s.coordinates) markers.push({ id: `sample-${i}-${s.name}`, title: s.name, coordinates: s.coordinates });
        });
        sortedCreatedCards.forEach((c: any) => {
            if (c.coordinates) markers.push({ id: c.id, title: c.text || c.title || '카드', coordinates: c.coordinates });
        });
        return markers;
    }, [anchorCard, sampleShopping, sortedCreatedCards]);

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <PickerHeader
                title="쇼핑"
                icon={ShoppingBag}
                color="purple"
                count={filteredSample.length + filteredCreated.length}
                category="shopping"
                onMapClick={() => setIsMapOpen(true)}
                mapDisabled={mapMarkers.length === 0}
            />

            {/* 필터 바 */}
            <PickerFilterBar
                color="purple"
                typeOptions={SHOPPING_TYPE_GROUPS.map(g => ({ value: g.value, label: g.label }))}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                searchText={searchText}
                onSearchChange={setSearchText}
            />

            {/* 쇼핑 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 샘플 쇼핑 카드들 (destinationCity 기반 필터링) */}
                    {filteredSample.map((shopping: ShoppingData, index: number) => (
                        <DraggableShoppingCard
                            key={`sample-${index}`}
                            cardId={`picker-shopping-${index}`}
                            card={{
                                text: shopping.name,
                                title: shopping.name,
                                shoppingType: shopping.type,
                                city: shopping.city,
                                category: shopping.category,
                                specialItems: shopping.specialItems,
                                openingHours: shopping.openingHours,
                                coordinates: shopping.coordinates,
                                features: shopping.features,
                                icon: shopping.icon,
                                isUserCreated: false,  // 샘플 카드는 삭제 불가
                            }}
                        />
                    ))}

                    {/* 생성된 카드들 (anchor 시 거리순) */}
                    {filteredCreated.map((card: any) => {

                        return (
                            <DraggableShoppingCard
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
                <ShoppingAddModal
                    destinationCity={destinationCity}
                    anchorCoordinates={anchorCoords}
                    anchorTitle={anchorCard?.text || anchorCard?.title || null}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}

            <InboxMapModal
                title="쇼핑 지도"
                markers={mapMarkers}
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
            />
        </div>
    );
}
