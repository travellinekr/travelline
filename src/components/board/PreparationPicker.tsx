'use client';

import { useDroppable, useDndContext } from '@dnd-kit/core';
import { CheckSquare, Plus, Trash2 } from 'lucide-react';
import { DraggableCard } from './DraggableCard';

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd, onDelete }: { onAdd: () => void; onDelete?: (cardId: string) => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'preparation-delete-zone',
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
                : 'border-gray-200 text-gray-400 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-50'
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

// PreparationPicker 메인 컴포넌트
export function PreparationPicker({
    destinationCity,
    onAddCard,
    onDeleteCard,
    createdCards = [],
    canEdit = true
}: {
    destinationCity?: string;
    onAddCard?: (data: any) => void;
    onDeleteCard?: (cardId: string) => void;
    createdCards?: any[];
    canEdit?: boolean;
}) {
    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <CheckSquare className="w-12 h-12 text-slate-300 mb-3" />
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
                    <CheckSquare className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-bold text-slate-800">여행준비</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {createdCards.length}개
                </span>
            </div>

            {/* 카드 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col gap-3 py-4">
                    {createdCards.length === 0 && (
                        <div className="text-center text-gray-400 py-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl">💭</div>
                            <p>보관함이 비었습니다</p>
                        </div>
                    )}
                    {createdCards.map((card: any) => (
                        <div key={card.id} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <DraggableCard card={card} canEdit={canEdit} variant="inbox" />
                        </div>
                    ))}

                    {/* 직접 추가하기 / 삭제 영역 (임시 숨김) */}
                    {/* {canEdit && (
                        <AddOrDeleteButton
                            onAdd={() => { }}
                            onDelete={onDeleteCard}
                        />
                    )} */}
                </div>
            </div>
        </div>
    );
}
