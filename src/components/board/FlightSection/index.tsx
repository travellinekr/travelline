import { useDroppable } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { useStorage } from "@liveblocks/react/suspense";
import { Edit2 } from "lucide-react";
import type { Card, FlightInfo } from "@/liveblocks.config";
import { useFlightForm } from "./FlightForm/useFlightForm";
import { FlightCardView } from "./FlightCardView";
import { FlightForm } from "./FlightForm";

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
}

export function FlightSection({ destinationCard, addToast, onConfirm }: FlightSectionProps) {
    const { setNodeRef, isOver } = useDroppable({ id: 'flights-timeline' });
    const flightInfo = useStorage((root) => root.flightInfo) as FlightInfo | null;
    const [isEditMode, setIsEditMode] = useState(false);

    const flightForm = useFlightForm(destinationCard, flightInfo, addToast, onConfirm);

    // Load flight data when entering edit mode
    useEffect(() => {
        flightForm.loadFlightData(isEditMode);
    }, [isEditMode, flightInfo]);

    // Switch to card view after successful confirmation
    const handleConfirmWrapper = () => {
        flightForm.handleConfirm();
        setIsEditMode(false);
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
                    {flightInfo && !isEditMode && (
                        <button
                            onClick={() => setIsEditMode(true)}
                            className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                        >
                            <Edit2 className="w-3.5 h-3.5" />
                            변경
                        </button>
                    )}
                </div>
            </div>

            {/* 메인 컨텐츠 */}
            {destinationCard ? (
                <>
                    {flightInfo && !isEditMode ? (
                        <FlightCardView flightInfo={flightInfo} isOver={isOver} />
                    ) : (
                        <FlightForm {...flightForm} isOver={isOver} handleConfirm={handleConfirmWrapper} />
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
