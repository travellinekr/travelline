'use client';

import { useState } from 'react';
import { useDroppable, useDndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Trash2 } from 'lucide-react';
import { DraggableCard } from './DraggableCard';
import { Confirm } from './Confirm';
import { useCardMutations } from '@/hooks/useCardMutations';

interface UnconfirmedSectionProps {
    cards: any[];
    canEdit?: boolean;
}

/**
 * "확정되지 않은 일정" — 타임라인 맨 아래의 임시 보관 영역.
 *
 * 일정이 줄어(항공편 축소 / "미리 일정" 클리어·축소) 일차에서 밀려난 카드가
 * 기존 인박스(보관함)로 흩어지지 않고 여기 모인다 → 바로 옆 일차로 다시 드래그하기 쉽게.
 *
 * - droppable id 는 `unconfirmed-timeline` → CollaborativeApp 의 드래그 라우팅이
 *   `-timeline` 을 떼어 targetColumnId='unconfirmed' 로 인식. 카드 이동은 기존 moveCard 경로 재사용.
 * - 카드는 실제 카드(id `card-*`)라 picker 분기를 타지 않음 → 중복 생성 없이 이동만 됨.
 * - 부모(Timeline)가 카드가 있을 때만 렌더 → 비면 사라짐.
 */
export function UnconfirmedSection({ cards, canEdit = true }: UnconfirmedSectionProps) {
    const { setNodeRef, isOver } = useDroppable({ id: 'unconfirmed-timeline' });
    const { active, over } = useDndContext();
    const { clearColumnCards } = useCardMutations();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const isOverCard = over ? cards.some((c: any) => c.id === over.id) : false;
    const isSectionActive = (isOver || isOverCard) && active;

    const handleDeleteAll = () => {
        clearColumnCards('unconfirmed');
        setShowDeleteConfirm(false);
    };

    const activeClass = 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-100 border-dashed';
    const defaultClass = 'bg-white border-gray-200 border shadow-sm';

    return (
        <div id="unconfirmed-section" className="mb-6 scroll-mt-28">
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-5 rounded-full bg-amber-400"></span>
                    확정되지 않은 일정
                    <span className="text-[13px] text-slate-400 font-normal">({cards.length})</span>
                </h3>
                {canEdit && cards.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setShowDeleteConfirm(true)}
                        className="flex items-center gap-1 px-2.5 py-1 text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-gray-200 rounded-lg text-xs font-medium transition-colors"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                        전체 삭제
                    </button>
                )}
            </div>

            <SortableContext items={[...cards.map((c: any) => c.id)]} strategy={verticalListSortingStrategy}>
                <div
                    ref={setNodeRef}
                    className={`min-h-[58px] md:min-h-[72px] rounded-xl transition-all duration-200 ease-in-out flex flex-col overflow-hidden ${isSectionActive ? activeClass : defaultClass}`}
                >
                    {/* 드래그 오버 안내 (비어있을 때) */}
                    {cards.length === 0 && isSectionActive && (
                        <div className="h-[58px] md:h-[72px] flex items-center justify-center pointer-events-none animate-pulse">
                            <p className="text-xs font-bold text-amber-500 flex items-center gap-2">✨ 여기에 놓기</p>
                        </div>
                    )}

                    {/* 카드 리스트 */}
                    {cards.map((card: any) => {
                        if (!card) return null;
                        return <DraggableCard key={card.id} card={card} variant="compact" canEdit={canEdit} disablePhoto />;
                    })}
                </div>
            </SortableContext>

            {showDeleteConfirm && (
                <Confirm onConfirm={handleDeleteAll} onCancel={() => setShowDeleteConfirm(false)}>
                    확정되지 않은 일정의 카드 {cards.length}개를 모두 삭제하시겠습니까?
                    <br />
                    삭제한 카드는 복구할 수 없습니다.
                </Confirm>
            )}
        </div>
    );
}
