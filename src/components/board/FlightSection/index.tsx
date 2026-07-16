import { useDroppable } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { useStorage } from "@liveblocks/react/suspense";
import { Edit2, Plus, X, Plane } from "lucide-react";
import type { Card, FlightInfo } from "@/liveblocks.config";
import { useFlightForm } from "./FlightForm/useFlightForm";
import { FlightCardView } from "./FlightCardView";
import { FlightForm } from "./FlightForm";
import { isTripEnded } from "@/utils/timeline";

interface FlightSectionProps {
    destinationCard?: Card | null;
    addToast: (message: string, type: 'info' | 'warning') => void;
    onConfirm: (data: {
        outbound: {
            date: Date;
            departureAirport: string;
            arrivalAirport: string;
            time: string;
            airline: string;
        };
        return: {
            date: Date;
            departureAirport: string;
            arrivalAirport: string;
            time: string;
            airline: string;
        };
    }) => void;
    canEdit?: boolean;
}

export function FlightSection({ destinationCard, addToast, onConfirm, canEdit = true }: FlightSectionProps) {
    const { setNodeRef, isOver } = useDroppable({ id: 'flights-timeline' });
    const flightInfo = useStorage((root) => root.flightInfo) as FlightInfo | null;
    // 등록·변경 공용 폼 열림 상태. 기본값 닫힘 → 미등록 시에도 폼이 인라인으로 펼쳐지지 않음.
    const [isFormOpen, setIsFormOpen] = useState(false);

    const flightForm = useFlightForm(destinationCard, flightInfo, addToast, onConfirm);

    // 폼을 열 때 기존 항공편 데이터를 폼에 로드 (flightInfo 없으면 no-op → 신규 등록은 기본값 유지)
    useEffect(() => {
        flightForm.loadFlightData(isFormOpen);
    }, [isFormOpen, flightInfo]);

    // Switch to card view after successful confirmation
    const handleConfirmWrapper = () => {
        const success = flightForm.handleConfirm();
        if (success) {
            setIsFormOpen(false);
        }
    };

    return (
        <div className="mb-6" ref={setNodeRef}>
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-5 rounded-full bg-purple-500"></span>
                    항공편
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">Flights</span>
                    {/* 헤더 우측 버튼: 상태별로 변경 / 등록 / 취소 (여행지 선택 시에만 노출) */}
                    {destinationCard && canEdit && (
                        isFormOpen ? (
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                                취소
                            </button>
                        ) : flightInfo ? (
                            <button
                                onClick={() => setIsFormOpen(true)}
                                disabled={isTripEnded(flightInfo)}
                                className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors disabled:text-slate-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                            >
                                <Edit2 className="w-3.5 h-3.5" />
                                변경
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                            >
                                <Plus className="w-3.5 h-3.5" />
                                등록
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* 메인 컨텐츠 */}
            {destinationCard ? (
                <>
                    {isFormOpen && canEdit ? (
                        // 폼 열림 → 인라인 아코디언으로 펼침 (등록·변경 공용)
                        <FlightForm {...flightForm} isOver={isOver} onConfirmClick={handleConfirmWrapper} />
                    ) : flightInfo ? (
                        // 등록됨 → 접힌 카드뷰
                        <FlightCardView flightInfo={flightInfo} isOver={isOver} />
                    ) : canEdit ? (
                        // 미등록 → 한 줄 안내 카드 (클릭 시 폼 열림)
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className={`w-full min-h-[72px] rounded-xl border shadow-sm transition-all duration-200 flex items-center justify-center gap-2 py-6 ${isOver
                                ? 'border-purple-500 bg-purple-50/50 ring-2 ring-purple-100 border-dashed'
                                : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50/40'
                                }`}
                        >
                            <Plane className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-slate-500">항공편을 등록하세요</span>
                        </button>
                    ) : (
                        // 뷰어 권한 + 미등록
                        <div className="min-h-[72px] rounded-xl border shadow-sm bg-white border-gray-200 text-center py-6 flex items-center justify-center">
                            <p className="text-xs text-slate-300 font-medium">항공편이 등록되지 않았습니다</p>
                        </div>
                    )}
                </>
            ) : (
                <div className="min-h-[72px] rounded-xl border shadow-sm bg-white border-gray-200 text-center py-6 flex items-center justify-center">
                    <p className="text-xs text-slate-300 font-medium">여행지를 먼저 선택하세요</p>
                </div>
            )}
        </div>
    );
}
