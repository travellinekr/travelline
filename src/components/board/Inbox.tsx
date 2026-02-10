import { Plane, Hotel, Utensils, Search, Plus, CheckSquare, ShoppingBag, MapPin, Bus } from "lucide-react";
import { DraggableCard } from "./DraggableCard";
import { useDroppable } from "@dnd-kit/core";
import { memo } from "react";
import { DestinationPicker } from "./DestinationPicker";

export const Inbox = memo(function Inbox({ cards, activeCategory, setActiveCategory, onCreateCard, onRemoveCard }: any) {

  const { setNodeRef, isOver } = useDroppable({ id: 'inbox-dropzone' });

  const filteredCards = cards.filter((c: any) => c.category === activeCategory);

  const topTabs = [
    { id: 'destination', label: '여행지', icon: MapPin },
    // { id: 'flight', label: '항공', icon: Plane },
    { id: 'preparation', label: '여행준비', icon: CheckSquare },
  ];

  const bottomTabs = [
    { id: 'hotel', label: '숙소', icon: Hotel },
    { id: 'food', label: '맛집', icon: Utensils },
    { id: 'shopping', label: '쇼핑', icon: ShoppingBag },
    { id: 'transport', label: '교통', icon: Bus },
  ];

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
        {tab.icon && <tab.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-600'}`} />}
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
      {/* 2단 탭 필터 (정밀 높이 조정 100px) */}
      <div className="sticky top-0 z-30 flex flex-col border-b border-gray-200 bg-white shrink-0 w-full min-h-[100px] md:min-h-[100px] justify-center shadow-sm">
        {/* 1단 */}
        <div className="flex px-4 pt-3 pb-1 md:pt-3 md:pb-1 gap-1.5 md:gap-2 overflow-x-auto no-scrollbar">
          {topTabs.map(renderTab)}
        </div>
        {/* 2단 */}
        <div className="flex px-4 pt-1 pb-3 md:pb-3 gap-1.5 md:gap-2 overflow-x-auto no-scrollbar">
          {bottomTabs.map(renderTab)}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-transparent custom-scrollbar">
        <div className="flex flex-col gap-3 max-w-lg mx-auto pb-20">

          {activeCategory === 'destination' ? (
            <>
              <DestinationPicker onConfirm={handleCreateDestination} />
            </>
          ) : (
            <>
              {filteredCards.length === 0 && !isOver ? (
                <div className="text-center text-gray-400 py-20 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl">📭</div>
                  <p>보관함이 비었습니다</p>
                </div>
              ) : (
                filteredCards.map((card: any) => (
                  <DraggableCard key={card.id} card={card} />
                ))
              )}

              <button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all gap-2 mt-2">
                <Plus className="w-5 h-5" />
                <span className="font-medium text-sm">직접 추가하기</span>
              </button>
            </>
          )}

        </div>
      </div>
    </aside>
  );
});