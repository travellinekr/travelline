import { Car } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useIntercityMove } from "@/contexts/IntercityMoveContext";
import { engNameToKorean } from "@/utils/citySources";

// 도시간 이동(육로) 메타 카드.
// - card.targetCity 가 있으면 타이틀=도시명, 서브="도시간 이동", "수정" 버튼.
// - 없으면 타이틀="도시간 이동", 서브="이동할 도시를 등록해주세요", "등록" 버튼.
// - 자식 카드 없음 — 항공편처럼 자식 카드 생성 X (단일 메타 카드).
export function IntercityMoveCard({
    card,
    variant,
    canEdit = true,
    ...props
}: CommonCardProps) {
    const { openIntercityMoveModal, isTripEnded } = useIntercityMove();
    const isInbox = variant === 'inbox';

    const cityKorean = card.targetCity ? engNameToKorean(card.targetCity) : null;
    const hasCity = !!cityKorean;

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-blue-400"
            icon={Car}
            category="Transport"
            className="h-[58px] md:h-[72px]"
            hasNotes={false}
        >
            <div className="flex items-center justify-between w-full min-w-0 gap-2">
                <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                        {cityKorean ?? '도시간 이동'}
                    </h4>
                    <div className="text-[11px] text-slate-400 truncate">
                        {hasCity ? '도시간 이동' : '이동할 도시를 등록해주세요'}
                    </div>
                </div>

                {!isInbox && canEdit && (
                    <div onPointerDown={(e) => e.stopPropagation()} className="shrink-0">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                openIntercityMoveModal(card.id);
                            }}
                            disabled={isTripEnded}
                            className="text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-1 rounded-lg transition-colors disabled:text-slate-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                        >
                            {hasCity ? '수정' : '등록'}
                        </button>
                    </div>
                )}
            </div>
        </CardShell>
    );
}
