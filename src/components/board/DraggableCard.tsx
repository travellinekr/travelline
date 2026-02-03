import { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Calendar, MapPin, X } from "lucide-react";

import { FlightCard } from "./cards/FlightCard";
import { HotelCard } from "./cards/HotelCard";
import { FoodCard } from "./cards/FoodCard";
import { PreparationCard } from "./cards/PreparationCard";
import { ShoppingCard } from "./cards/ShoppingCard";
import { DefaultCard } from "./cards/DefaultCard";
import { useCardMutations } from "@/hooks/useCardMutations";

// 임시 사용자 ID Hook (TODO: 실제 인증 시스템으로 대체 필요)
function useTempUserId() {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let id = localStorage.getItem('temp-user-id');
    if (!id) {
      id = `user-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('temp-user-id', id);
    }
    setUserId(id);
  }, []);

  return userId;
}

// 여행지 카드
function DestinationCard({ card, style, onRef, listeners, attributes, onRemove, variant, onVoteToggle, isHeader }: any) {
  const isCompact = variant === 'compact';

  // Header View (destination-header) - 타이틀 강조
  if (isCompact && isHeader) {
    return (
      <div
        ref={onRef}
        style={style}
        {...listeners}
        {...attributes}
        className="group bg-gradient-to-r from-rose-50 via-white to-rose-50 hover:from-rose-100 hover:to-rose-100 border-b border-rose-100 flex items-center gap-0 relative touch-none select-none h-[72px] transition-all duration-300 overflow-hidden w-full cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md"
      >
        {/* Left: Image (Fixed 80px width) */}
        <div className="w-20 h-full relative group-hover:opacity-95 transition-opacity flex items-center justify-center overflow-hidden shrink-0 border-r border-rose-100 pointer-events-none">
          {card.imageUrl ? (
            <img
              src={card.imageUrl}
              alt={card.text}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-slate-200');
              }}
            />
          ) : (
            <div className="w-full h-full bg-rose-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-rose-500 opacity-70" />
            </div>
          )}
          <div className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10">
            선택
          </div>
        </div>

        {/* Center: City Name + Description */}
        <div className="flex-1 min-w-0 flex flex-col items-center justify-center h-full px-6 gap-0.5">
          <h2 className="font-bold text-2xl text-slate-600 group-hover:text-rose-500 transition-colors tracking-tight">
            {card.text || card.title}
          </h2>
          {card.description && (
            <p className="text-xs text-slate-400 truncate max-w-full">
              {card.description}
            </p>
          )}
        </div>

        {/* Remove Button */}
        <div className="shrink-0 w-8 h-full flex items-center justify-center">
          {onRemove && (
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-rose-200 text-rose-300 hover:text-rose-600 transition-colors pointer-events-auto"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Compact View (Timeline & Candidates List) - 72px
  if (isCompact) {
    const voteCount = card.votes?.length || 0;

    return (
      <div
        ref={onRef}
        style={style}
        {...listeners}
        {...attributes}
        className="group bg-white hover:bg-slate-50 border-b border-gray-100 flex items-center gap-0 relative touch-none select-none h-[72px] transition-colors overflow-hidden w-full cursor-grab active:cursor-grabbing"
      >
        {/* Left: Image (Fixed 80px width) */}
        <div
          className="w-20 h-full relative group-hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden shrink-0 border-r border-gray-50 pointer-events-none"
        >
          {card.imageUrl ? (
            <img
              src={card.imageUrl}
              alt={card.text}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-slate-200');
              }}
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-emerald-500 opacity-50" />
            </div>
          )}
          <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm z-10">
            추천
          </div>
        </div>

        {/* Right: Content - 3 rows layout */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full pl-3 pr-1 py-2">
          {/* Row 1: Title + Badge */}
          <div className="flex justify-between items-center pointer-events-none gap-2">
            <span className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 leading-none truncate flex-1 min-w-0">
              {card.text || card.title}
            </span>
            <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
              여행지
            </span>
          </div>

          {/* Row 2: Description */}
          <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight pointer-events-none">
            {card.description}
          </p>

          {/* Row 3: Vote Button */}
          <div
            className="flex justify-end pointer-events-auto"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                if (onVoteToggle) {
                  onVoteToggle(card.id);
                }
              }}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-colors cursor-pointer"
            >
              <span className="text-xs">💗</span>
              <span className="text-[10px] font-semibold text-pink-600">{voteCount}</span>
            </button>
          </div>
        </div>

        {/* Remove Button */}
        <div className="shrink-0 w-6 h-full flex items-center justify-center">
          {onRemove && (
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-300 hover:text-rose-500 transition-colors pointer-events-auto"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Default View (Top Header) - Large Style
  return (
    <div
      ref={onRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-full px-4 py-3 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-between shadow-sm group hover:shadow-md transition-all cursor-grab active:cursor-grabbing relative"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm md:text-base font-black text-purple-600">{card.title || "여행지"}</span>
        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{card.description?.split('•')[0] || "TRAVEL"}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-slate-600 bg-white/50 px-2 py-1 rounded border border-rose-100 hidden md:inline-block">
          {card.date || "날짜 미정"}
        </span>
        <div className="w-6 h-6 md:w-7 md:h-7 bg-rose-400 rounded-lg flex items-center justify-center shadow-sm shadow-rose-200 shrink-0">
          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </div>
        {onRemove && (
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="ml-1 w-6 h-6 flex items-center justify-center rounded-full hover:bg-rose-200/50 text-rose-300 hover:text-rose-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export function renderCardInternal(card: any, props: any = {}) {
  switch (card.category) {
    case 'destination': return <DestinationCard key={card.id} card={card} {...props} />;
    case 'preparation': return <PreparationCard key={card.id} card={card} {...props} />;
    case 'shopping': return <ShoppingCard key={card.id} card={card} {...props} />;
    case 'flight': return <FlightCard key={card.id} card={card} {...props} />;
    case 'hotel': return <HotelCard key={card.id} card={card} {...props} />;
    case 'food': return <FoodCard key={card.id} card={card} {...props} />;
    default: return <DefaultCard key={card.id} card={card} {...props} />;
  }
}

export function DraggableCard({ card, onRemove, variant, isHeader }: { card: any, onRemove?: () => void, variant?: 'default' | 'compact', isHeader?: boolean }) {
  const { toggleVote } = useCardMutations();
  const userId = useTempUserId();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: card.id,
    data: card,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    zIndex: isDragging ? 999 : 'auto',
    position: 'relative' as const,
  };

  const handleVoteToggle = (cardId: string) => {
    if (!userId) return; // Skip if userId not yet loaded
    toggleVote({ cardId, userId });
  };

  if (isDragging) {
    const isDestination = card.category === 'destination';
    const isCompact = variant === 'compact';

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`w-full min-w-[320px] flex-shrink-0 border-2 border-dashed rounded-lg bg-slate-50/50 
          ${isDestination
            ? (isCompact ? 'h-[72px] border-emerald-300 bg-emerald-50/50' : 'h-[54px] border-rose-300 bg-rose-50/50')
            : 'h-[72px] border-slate-300'}
        `}
      />
    );
  }

  return renderCardInternal(card, {
    onRef: setNodeRef,
    style,
    listeners,
    attributes,
    onRemove,
    variant,
    onVoteToggle: handleVoteToggle,
    isHeader
  });
}