import { Plane } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useIntercityFlight } from "@/contexts/IntercityFlightContext";

// 도시간 항공편 카드:
//  - card.intercityFlight 없으면 미등록 → 우측 "등록" 버튼
//  - card.intercityFlight 있으면 등록 완료 → 우측 "수정" 버튼 (일정 종료 시 disabled)
export function IntercityFlightCard({
    card,
    variant,
    canEdit = true,
    ...props
}: CommonCardProps) {
    const { openIntercityModal, isTripEnded } = useIntercityFlight();
    const data = card.intercityFlight;
    const isInbox = variant === 'inbox';

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-sky-400"
            icon={Plane}
            category="Flight"
            className="h-[58px] md:h-[72px]"
            hasNotes={false}
        >
            <div className="flex items-center justify-between w-full min-w-0 gap-2">
                <div className="min-w-0 flex-1">
                    {data ? (
                        <>
                            <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                                {data.airline}
                            </h4>
                            <div className="text-[11px] text-slate-500 truncate">
                                🛫 {data.depAirport} → 🛬 {data.arrAirport}
                                {data.depTime && <> · {data.depTime}</>}
                            </div>
                        </>
                    ) : (
                        <>
                            <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                                도시간 항공편
                            </h4>
                            <div className="text-[11px] text-slate-400 truncate">
                                항공편 정보를 등록해주세요
                            </div>
                        </>
                    )}
                </div>

                {!isInbox && canEdit && (
                    <div onPointerDown={(e) => e.stopPropagation()} className="shrink-0">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                openIntercityModal(card.id);
                            }}
                            disabled={!!data && isTripEnded}
                            className="text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-1 rounded-lg transition-colors disabled:text-slate-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                        >
                            {data ? '수정' : '등록'}
                        </button>
                    </div>
                )}
            </div>
        </CardShell>
    );
}
