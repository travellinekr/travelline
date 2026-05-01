import { Plane, Hotel, Utensils, Search, Plus, CheckSquare, ShoppingBag, MapPin, Bus, Palmtree, MoreHorizontal, X } from "lucide-react";
import { DraggableCard } from "./DraggableCard";
import { useDroppable } from "@dnd-kit/core";
import { memo, useMemo } from "react";
import Link from "next/link";
import { useAnchor } from "@/contexts/AnchorContext";
import { DestinationPicker } from "./DestinationPicker";
import { AccommodationPicker } from "./AccommodationPicker";
import { TransportationPicker } from "./TransportationPicker";
import { FoodPicker } from "./FoodPicker";
import { ShoppingPicker } from "./ShoppingPicker";
import { TourSpaPicker } from "./TourSpaPicker";
import { EtcPicker } from "./EtcPicker";
import { PreparationPicker } from "./PreparationPicker";

// anchor 카테고리별 배너 컬러
// safelist (런타임 카테고리 키 매핑): bg-rose-50 bg-orange-50 bg-purple-50 bg-blue-50 bg-cyan-50
//                                     border-rose-200 border-orange-200 border-purple-200 border-blue-200 border-cyan-200
//                                     text-rose-800 text-orange-800 text-purple-800 text-blue-800 text-cyan-800
const ANCHOR_BANNER_COLORS: Record<string, string> = {
  hotel: 'bg-rose-50 border-rose-200 text-rose-800',
  food: 'bg-orange-50 border-orange-200 text-orange-800',
  shopping: 'bg-purple-50 border-purple-200 text-purple-800',
  transport: 'bg-blue-50 border-blue-200 text-blue-800',
  tourspa: 'bg-cyan-50 border-cyan-200 text-cyan-800',
};

export const Inbox = memo(function Inbox({ cards, activeCategory, setActiveCategory, onCreateCard, onRemoveCard, destinationCard, activeDragItem, canEdit = true }: any) {

  const { setNodeRef, isOver } = useDroppable({ id: 'inbox-dropzone' });
  const { anchorCard, toggleAnchor, scrollToAnchor } = useAnchor();

  // ✅ [성능개선] filteredCards useMemo 적용 → 탭 전환 외 불필요한 재계산 방지
  // showInInbox 필터는 cities/ 정적 데이터가 있는 카테고리에만 적용 (hotel/food/shopping)
  // 나머지(preparation/tourspa/other)는 사용자 카드 그대로 표시
  const CITY_DATA_CATEGORIES = ['hotel', 'food', 'shopping'];
  const filteredCards = useMemo(
    () => cards.filter((c: any) =>
      c.category === activeCategory &&
      (!CITY_DATA_CATEGORIES.includes(activeCategory) || c.isUserCreated === true)
    ),
    [cards, activeCategory]
  );

  const topTabs = [
    { id: 'destination', label: '여행지', icon: MapPin },
    // { id: 'flight', label: '항공', icon: Plane },
    { id: 'preparation', label: '여행준비', icon: CheckSquare },
    { id: 'hotel', label: '숙소', icon: Hotel },
  ];

  const bottomTabs = [
    { id: 'food', label: '맛집', icon: Utensils },
    { id: 'shopping', label: '쇼핑', icon: ShoppingBag },
    { id: 'transport', label: '교통', icon: Bus },
    { id: 'tourspa', label: '투어&스파', icon: Palmtree },
    { id: 'other', label: '기타', icon: MoreHorizontal },
  ];

  const getTabIconColor = (id: string, isActive: boolean) => {
    if (!isActive) return 'text-slate-400 group-hover:text-slate-600';
    switch (id) {
      case 'destination': return 'text-emerald-400';
      case 'flight': return 'text-sky-400';
      case 'preparation': return 'text-indigo-400';
      case 'hotel': return 'text-rose-400';
      case 'food': return 'text-orange-400';
      case 'shopping': return 'text-purple-400';
      case 'transport': return 'text-blue-400';
      case 'tourspa': return 'text-cyan-400';
      case 'other': return 'text-amber-400';
      default: return 'text-emerald-400';
    }
  };

  const renderTab = (tab: any) => {
    const isActive = activeCategory === tab.id;
    return (
      <button
        key={tab.id}
        onClick={() => setActiveCategory(tab.id)}
        className={`group px-3 py-1.5 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 md:gap-2 transition-all duration-300 ease-out whitespace-nowrap shrink-0 border ${isActive
          ? 'bg-slate-800 border-slate-800 text-white shadow-lg shadow-slate-200/50 scale-105'
          : 'bg-white border-slate-200 text-slate-500 shadow-sm hover:border-slate-300 hover:text-slate-700 hover:shadow-md'
          }`}
      >
        {tab.icon && <tab.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${getTabIconColor(tab.id, isActive)}`} />}
        {tab.label}
      </button>
    );
  };

  const handleCreateDestination = (data: any) => {
    // 새로운 여행지 카드 생성
    if (onCreateCard) {
      onCreateCard({
        title: data.city,
        category: 'destination',
        description: `${data.month}월 여행 • ${data.desc}`,
        date: `${data.month}월`,
        type: 'travel',
        imageUrl: data.imageUrl
      });
    }
  };

  return (
    <aside
      ref={setNodeRef}
      className={`w-full flex flex-col h-full shadow-xl shadow-gray-200 z-0 relative transition-colors ${isOver ? 'bg-indigo-50/50' : 'bg-white'}`}
    >
      {/* 헤더 영역: 탭 + anchor 배너 (sticky로 묶음) */}
      <div className="sticky top-0 z-30 bg-white shrink-0 shadow-sm">
        {/* 2단 탭 필터 (정밀 높이 조정 100px) */}
        <div className="flex flex-col border-b border-gray-200 w-full min-h-[100px] md:min-h-[100px] justify-center">
        {/* 1단 */}
        <div className="flex items-center px-4 pt-3 pb-1 md:pt-3 md:pb-1 gap-1.5 md:gap-2 overflow-x-auto no-scrollbar">
          {topTabs.map(renderTab)}
          <Link
            href="/explore"
            className="ml-auto shrink-0 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 ease-out border bg-orange-400 border-orange-400 text-white shadow-lg shadow-orange-200/50 hover:bg-orange-500 hover:border-orange-500"
          >
            <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
            여행쇼핑
          </Link>
        </div>
        {/* 2단 */}
        <div className="flex px-4 pt-1 pb-3 md:pb-3 gap-1.5 md:gap-2 overflow-x-auto no-scrollbar">
          {bottomTabs.map(renderTab)}
        </div>
        </div>
        {/* 거리 정렬 기준점 배너 (탭 하단) */}
        {anchorCard && (
          <div className={`flex items-center justify-between gap-2 px-4 py-2 border-b text-sm ${ANCHOR_BANNER_COLORS[anchorCard.category] ?? 'bg-slate-50 border-slate-200 text-slate-800'}`}>
            <button
              type="button"
              onClick={scrollToAnchor}
              className="flex items-center gap-1.5 min-w-0 flex-1 text-left"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="font-semibold truncate">{anchorCard.text || anchorCard.title || '카드'}</span>
              <span className="text-xs opacity-70 shrink-0">기준 거리순</span>
            </button>
            <button
              type="button"
              onClick={() => toggleAnchor(anchorCard.id, anchorCard)}
              aria-label="기준점 해제"
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto bg-transparent custom-scrollbar">
        <div className="flex flex-col px-3 pb-20">

          {activeCategory === 'destination' ? (
            <>
              <DestinationPicker onConfirm={handleCreateDestination} />
            </>
          ) : activeCategory === 'hotel' ? (
            <AccommodationPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
            />
          ) : activeCategory === 'transport' ? (
            <>
              <TransportationPicker destinationCity={destinationCard?.city} />
            </>
          ) : activeCategory === 'food' ? (
            <FoodPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
            />
          ) : activeCategory === 'shopping' ? (
            <ShoppingPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
            />
          ) : activeCategory === 'tourspa' ? (
            <TourSpaPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
            />
          ) : activeCategory === 'other' ? (
            <EtcPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
            />
          ) : activeCategory === 'preparation' ? (
            <PreparationPicker
              destinationCity={destinationCard?.city}
              onAddCard={canEdit ? onCreateCard : undefined}
              onDeleteCard={canEdit ? onRemoveCard : undefined}
              createdCards={filteredCards}
              canEdit={canEdit}
            />
          ) : (
            <>
              {filteredCards.length === 0 && !isOver ? (
                <div className="text-center text-gray-400 py-20 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl">💭</div>
                  <p>보관함이 비었습니다</p>
                </div>
              ) : (
                filteredCards.map((card: any) => (
                  <div key={card.id} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <DraggableCard card={card} canEdit={canEdit} variant="inbox" />
                  </div>
                ))
              )}

              {canEdit && (
                <button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all gap-2 mt-2">
                  <Plus className="w-5 h-5" />
                  <span className="font-medium text-sm">직접 추가하기</span>
                </button>
              )}
            </>
          )}

        </div>
      </div>
    </aside>
  );
});