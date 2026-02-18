'use client';

import { useState } from 'react';
import { useDraggable, useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { MoreHorizontal, Plus, Trash2 } from 'lucide-react';
import { BaseCard } from './cards/BaseCard';
import { EtcAddModal } from './EtcAddModal';
import { CardEditorModal } from './CardEditorModal';

// 직접 추가하기 / 삭제 영역 버튼
function AddOrDeleteButton({ onAdd }: { onAdd: () => void }) {
    const { active } = useDndContext();
    const { setNodeRef, isOver } = useDroppable({
        id: 'etc-delete-zone',
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
                : 'border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-500 hover:bg-violet-50'
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

// 드래그 가능한 기타 카드
function DraggableEtcCard({ card, index, cardId }: { card: any; index: number; cardId?: string }) {
    const id = cardId || `picker-etc-${index}`;
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    const cardData = {
        id,
        title: card.title || card.text,
        text: card.title || card.text,
        category: 'other' as const,
        etcItem: card.etcItem || '',
        isUserCreated: true,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    const hasNotes = !!(card.notes && Array.isArray(card.notes) && card.notes.length > 0);

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-violet-300 bg-violet-50/50 rounded-lg"
            />
        );
    }

    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                {...listeners}
                {...attributes}
                className="cursor-grab active:cursor-grabbing"
            >
                <BaseCard
                    colorClass="bg-violet-400"
                    icon={MoreHorizontal}
                    category="ETC"
                    className="h-[72px]"
                    onOpenNotes={() => setIsNotesOpen(true)}
                    hasNotes={hasNotes}
                >
                    <div className="flex flex-col justify-center w-full min-w-0">
                        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                            {card.title || card.text}
                        </h4>
                        {card.etcItem && (
                            <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                                {card.etcItem}
                            </p>
                        )}
                    </div>
                </BaseCard>
            </div>

            {/* 메모 모달 */}
            {isNotesOpen && (
                <CardEditorModal
                    cardId={id}
                    cardTitle={card.title || card.text || '기타'}
                    isOpen={isNotesOpen}
                    onClose={() => setIsNotesOpen(false)}
                />
            )}
        </>
    );
}


// EtcPicker 메인 컴포넌트
export function EtcPicker({
    destinationCity,
    onAddCard,
    onDeleteCard,
    createdCards = []
}: {
    destinationCity?: string;
    onAddCard?: (data: any) => void;
    onDeleteCard?: (cardId: string) => void;
    createdCards?: any[];
}) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleCreateCard = (data: any) => {
        if (onAddCard) {
            onAddCard(data);
        }
        setIsAddModalOpen(false);
    };

    // 여행지 없을 때
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <MoreHorizontal className="w-12 h-12 text-slate-300 mb-3" />
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
                    <MoreHorizontal className="w-5 h-5 text-violet-500" />
                    <h3 className="font-bold text-slate-800">기타</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {createdCards.length}개
                </span>
            </div>

            {/* 카드 목록 */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {createdCards.map((card: any, index: number) => (
                        <DraggableEtcCard
                            key={card.id}
                            cardId={card.id}
                            card={card}
                            index={index}
                        />
                    ))}

                    {/* 직접 추가하기 / 삭제 영역 */}
                    <AddOrDeleteButton
                        onAdd={() => setIsAddModalOpen(true)}
                    />
                </div>
            </div>

            {/* 모달 */}
            {isAddModalOpen && (
                <EtcAddModal
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={handleCreateCard}
                />
            )}
        </div>
    );
}
