import { Plane } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useIntercityFlight } from "@/contexts/IntercityFlightContext";
import { useStorage } from "@/liveblocks.config";

// 도시간 항공편 메타 카드.
// - 자식 항공 카드(parentIntercityCardId === 이 카드 id)가 존재하면 "수정", 없으면 "등록".
// - 클릭 시 모달 오픈. 수정 케이스는 모달이 기존 데이터를 prefill 함.
export function IntercityFlightCard({
    card,
    variant,
    canEdit = true,
    ...props
}: CommonCardProps) {
    const { openIntercityModal, isTripEnded } = useIntercityFlight();
    const isInbox = variant === 'inbox';

    // 이 메타 카드를 부모로 가진 자식 카드가 존재하는지 — 등록 여부 판정
    const isRegistered = useStorage((root) => {
        const cards = root.cards as any;
        if (!cards || typeof cards.forEach !== 'function') return false;
        let found = false;
        cards.forEach((c: any) => {
            if (found) return;
            if (c?.parentIntercityCardId === card.id) found = true;
        });
        return found;
    });

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-blue-400"
            icon={Plane}
            category="Transport"
            className="h-[58px] md:h-[72px]"
            hasNotes={false}
        >
            <div className="flex items-center justify-between w-full min-w-0 gap-2">
                <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                        도시간 항공편
                    </h4>
                    <div className="text-[11px] text-slate-400 truncate">
                        {isRegistered ? '등록 완료' : '항공편 정보를 등록해주세요'}
                    </div>
                </div>

                {!isInbox && canEdit && (
                    <div onPointerDown={(e) => e.stopPropagation()} className="shrink-0">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                openIntercityModal(card.id);
                            }}
                            disabled={isTripEnded}
                            className="text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-1 rounded-lg transition-colors disabled:text-slate-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                        >
                            {isRegistered ? '수정' : '등록'}
                        </button>
                    </div>
                )}
            </div>
        </CardShell>
    );
}
