import { Plane } from "lucide-react";
import type { FlightInfo } from "@/liveblocks.config";

interface FlightCardViewProps {
    flightInfo: FlightInfo;
    isOver: boolean;
}

export function FlightCardView({ flightInfo, isOver }: FlightCardViewProps) {
    return (
        <div
            className={`min-h-[72px] rounded-xl transition-all duration-200 ease-in-out flex flex-col overflow-hidden ${isOver
                ? 'border-purple-500 bg-purple-50/50 ring-2 ring-purple-100 border-dashed'
                : 'bg-white border-gray-200 border shadow-sm'
                }`}
        >
            {/* 가는편 카드 */}
            <div className="flex items-center gap-0 border-b border-gray-100 h-[72px] relative">
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-purple-500"></div>
                <div className="flex items-center gap-3 p-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <Plane className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-bold text-purple-600">🛫 가는편</span>
                            <span className="text-[10px] text-slate-400">{flightInfo.outbound.airline}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 truncate mb-0.5">
                            {flightInfo.outbound.departureAirport.split('(')[0].trim()} → {flightInfo.outbound.arrivalAirport.split('(')[0].trim()}
                        </p>
                        <p className="text-xs text-slate-500">
                            {new Date(flightInfo.outbound.date).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })} {flightInfo.outbound.time} → {flightInfo.outbound.arrivalDate ? new Date(flightInfo.outbound.arrivalDate).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' }) + ' ' : ''}{flightInfo.outbound.arrivalTime || ''}
                        </p>
                    </div>
                </div>
            </div>

            {/* 오는편 카드 */}
            <div className="flex items-center gap-0 h-[72px] relative">
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-purple-500"></div>
                <div className="flex items-center gap-3 p-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <Plane className="w-5 h-5 text-purple-600 rotate-180" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-bold text-purple-600">🛬 오는편</span>
                            <span className="text-[10px] text-slate-400">{flightInfo.return.airline}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 truncate mb-0.5">
                            {flightInfo.return.departureAirport.split('(')[0].trim()} → {flightInfo.return.arrivalAirport.split('(')[0].trim()}
                        </p>
                        <p className="text-xs text-slate-500">
                            {new Date(flightInfo.return.date).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })} {flightInfo.return.time} → {flightInfo.return.arrivalDate ? new Date(flightInfo.return.arrivalDate).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' }) + ' ' : ''}{flightInfo.return.arrivalTime || ''}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
