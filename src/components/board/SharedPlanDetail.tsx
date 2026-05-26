'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { renderCardInternal } from './DraggableCard';
import type { SharedPlanSnapshot } from '@/utils/sharedPlanSnapshot';

interface SharedPlan {
  id: string;
  title: string;
  city: string;
  duration_nights: number;
  duration_days: number;
  created_at: string;
  owner_id: string;
  snapshot: SharedPlanSnapshot | null;
}

interface SharedPlanDetailProps {
  planId: string;
  onBack: () => void;
}

interface DraggableSharedPlanCardProps {
  card: any;
  isSelected: boolean;
  selectedCards: any[];
  onToggleSelect: (cardId: string) => void;
}

function DraggableSharedPlanCard({ card, isSelected, selectedCards, onToggleSelect }: DraggableSharedPlanCardProps) {
  const dragData = useMemo(() => {
    if (isSelected && selectedCards.length > 1) {
      return { __sharedPlan: true, bulk: true, cards: selectedCards };
    }
    return { __sharedPlan: true, bulk: false, card };
  }, [isSelected, selectedCards, card]);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `shared-${card.id}`,
    data: dragData,
  });

  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

  if (isDragging) {
    return (
      <div className="h-[58px] md:h-[72px] border-2 border-dashed border-orange-300 bg-orange-50/50 rounded-xl" />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onToggleSelect(card.id)}
      className={`touch-none cursor-grab active:cursor-grabbing rounded-xl transition-shadow ${isSelected
        ? 'ring-2 ring-orange-500 ring-offset-1'
        : 'hover:ring-1 hover:ring-orange-200'
        }`}
    >
      <div className="pointer-events-none">
        {renderCardInternal(card, {}, 'compact')}
      </div>
    </div>
  );
}

export function SharedPlanDetail({ planId, onBack }: SharedPlanDetailProps) {
  const [plan, setPlan] = useState<SharedPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/shared-plans?id=${encodeURIComponent(planId)}`);
        if (!res.ok) throw new Error('상세 정보를 불러오지 못했어요.');
        const data = await res.json();
        if (!cancelled) setPlan(data?.item ?? null);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || '오류가 발생했어요.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [planId]);

  const allCards = useMemo(() => {
    const days = plan?.snapshot?.days || [];
    const arr: any[] = [];
    days.forEach((day) => {
      (day.cards || []).forEach((card) => arr.push(card));
    });
    return arr;
  }, [plan]);

  const selectedCards = useMemo(
    () => allCards.filter((c) => selectedIds.has(c.id)),
    [allCards, selectedIds]
  );

  const toggleSelect = (cardId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  // 공유플랜 카드가 실제로 드롭(추가)되면 선택 상태 초기화
  useDndMonitor({
    onDragEnd: (event) => {
      const activeId = String(event.active?.id ?? '');
      if (!activeId.startsWith('shared-')) return;
      if (event.over) clearSelection();
    },
  });

  const Header = (
    <div className="sticky top-0 z-10 bg-white pb-2 pt-1 border-b border-gray-100 mb-3 flex items-center justify-between">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1 px-2 py-1 -ml-2 rounded-md text-sm font-semibold text-orange-500 hover:bg-orange-50 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        목록으로 가기
      </button>
      {selectedIds.size > 0 && (
        <button
          type="button"
          onClick={clearSelection}
          className="text-xs font-semibold text-slate-500 hover:text-slate-700 px-2 py-1"
        >
          선택 해제 ({selectedIds.size})
        </button>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="flex flex-col h-full">
        {Header}
        <div className="space-y-2 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[72px] bg-slate-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-full">
        {Header}
        <div className="py-6 text-center text-sm text-red-500">{error}</div>
      </div>
    );
  }

  if (!plan || !plan.snapshot) {
    return (
      <div className="flex flex-col h-full">
        {Header}
        <div className="py-6 text-center text-sm text-slate-400">데이터를 찾을 수 없어요.</div>
      </div>
    );
  }

  const { title, snapshot } = plan;
  const days = Array.isArray(snapshot?.days) ? snapshot.days : [];

  return (
    <div className="flex flex-col h-full">
      {Header}

      <div className="mb-4">
        <div className="font-bold text-lg text-slate-800 truncate">{title}</div>
        <div className="text-xs text-slate-500 mt-0.5">
          {snapshot.destination?.text || ''}
          {plan.duration_nights > 0 ? ` · ${plan.duration_nights}박 ${plan.duration_days}일` : ''}
        </div>
        {selectedIds.size > 0 && (
          <div className="mt-2 text-xs text-orange-600 font-semibold">
            카드를 일정으로 드래그하면 {selectedIds.size}개를 한꺼번에 추가할 수 있어요.
          </div>
        )}
      </div>

      <div className="space-y-5 pb-6">
        {days.map((day) => (
          <div key={day.id}>
            <h4 className="font-bold text-sm text-emerald-600 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {day.title}
            </h4>
            <div className="space-y-2 pl-3 border-l-2 border-emerald-100">
              {(day.cards || []).length === 0 ? (
                <div className="text-xs text-slate-400 italic py-1">카드가 없어요</div>
              ) : (
                (day.cards || []).map((card) => (
                  <DraggableSharedPlanCard
                    key={card.id}
                    card={card}
                    isSelected={selectedIds.has(card.id)}
                    selectedCards={selectedCards}
                    onToggleSelect={toggleSelect}
                  />
                ))
              )}
            </div>
          </div>
        ))}
        {days.length === 0 && (
          <div className="py-6 text-center text-sm text-slate-400">일정이 비어있어요.</div>
        )}
      </div>
    </div>
  );
}
