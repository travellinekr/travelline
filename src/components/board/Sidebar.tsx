import { Card, FlightInfo } from "@/liveblocks.config";
import { calculateTripDaysFromFlightInfo } from "@/utils/calculateTripDays";
import { Plane, MapPin } from "lucide-react";

interface SidebarProps {
    destinationCard?: Card | null;
    flightInfo?: FlightInfo | null;
    activeDay: string;
    onDayClick: (dayId: string) => void;
    onFlightRegisterClick: () => void;
    addToast: (message: string, type: 'info' | 'warning') => void;
    columns: ReadonlyMap<string, { readonly id: string; readonly title: string; readonly cardIds: readonly string[] }> | null;
}

export function Sidebar({
    destinationCard,
    flightInfo,
    activeDay,
    onDayClick,
    onFlightRegisterClick,
    addToast,
    columns,
}: SidebarProps) {
    const hasDestination = !!destinationCard;

    // Check if there are destination candidates
    const hasCandidates = (() => {
        const candidatesCol = columns?.get('destination-candidates');
        return candidatesCol && candidatesCol.cardIds.length > 0;
    })();

    // Handle destination click
    const handleDestinationClick = () => {
        if (!hasDestination && !hasCandidates) {
            addToast('여행지를 선택해 주세요', 'info');
        } else if (!hasDestination && hasCandidates) {
            addToast('어디를 갈지 여행지 후보에서 고르세요', 'info');
        } else if (destinationCard?.text) {
            addToast(`${destinationCard.text}! 즐거운 계획 세우세요^^`, 'info');
        }
    };

    // Handle flight click
    const handleFlightClick = () => {
        if (!hasDestination) {
            addToast('여행지를 선택해 주세요', 'warning');
        } else if (!flightInfo) {
            addToast('항공편을 등록해 주세요', 'info');
            onFlightRegisterClick();
        } else {
            // Scroll to flight section
            onDayClick('flights');
        }
    };

    // Handle itinerary click (before flight registration)
    const handleItineraryClick = () => {
        addToast('✈️ 항공편을 먼저 등록해주세요', 'warning');
    };

    // Calculate days if flight is registered
    const days = flightInfo ? (() => {
        const dayCount = calculateTripDaysFromFlightInfo(flightInfo);

        return Array.from({ length: dayCount }, (_, i) => {
            if (i === 0) return { id: 'day0', label: '0', sublabel: '준비' };
            return { id: `day${i}`, label: `${i}`, sublabel: '일차' };
        });
    })() : [];

    return (
        <nav className="hidden md:flex w-20 bg-white border-r border-gray-100 flex-col shrink-0 h-full z-20">
            {/* Fixed Header: Destination + Flight */}
            <div className="flex-none py-2 space-y-2">
                {/* Destination Section */}
                <div
                    onClick={handleDestinationClick}
                    className={`h-16 flex items-center justify-center font-bold tracking-wide cursor-pointer transition-all duration-200 ${hasDestination
                        ? 'bg-emerald-50 border-l-4 border-emerald-500'
                        : 'hover:bg-slate-50 border-l-4 border-transparent'
                        }`}
                >
                    <div className="text-center leading-tight">
                        <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${hasDestination ? 'bg-emerald-100' : 'bg-slate-200'
                            }`}>
                            <MapPin className={`w-5 h-5 ${hasDestination ? 'text-emerald-600' : 'text-slate-400'}`} />
                        </div>
                        <span className={`block text-[10px] md:text-xs font-normal mt-1 ${hasDestination ? 'text-emerald-700' : 'text-slate-400'
                            }`}>여행지</span>
                    </div>
                </div>
            </div>

            {/* Flight Section */}
            <div
                onClick={handleFlightClick}
                className={`h-16 flex items-center justify-center font-bold tracking-wide cursor-pointer transition-all duration-200 ${activeDay === 'flights'
                    ? 'bg-slate-100 border-l-4 border-purple-500'
                    : flightInfo
                        ? 'hover:bg-slate-50 border-l-4 border-transparent'
                        : 'hover:bg-slate-50 border-l-4 border-transparent'
                    }`}>
                <div className="text-center leading-tight">
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${flightInfo ? 'bg-purple-100' : 'bg-slate-200'
                        }`}>
                        <Plane className={`w-5 h-5 ${flightInfo ? 'text-purple-600' : 'text-slate-400'}`} />
                    </div>
                    <span className={`block text-[10px] md:text-xs font-normal mt-1 ${activeDay === 'flights' ? 'text-slate-700' :
                        flightInfo ? 'text-purple-600' : 'text-slate-400'
                        }`}>항공편</span>
                </div>
            </div>
            {/* Scrollable Itinerary Section */}
            <div className="flex-1 overflow-y-auto custom-scrollbar py-2 space-y-2">
                {/* If no flight, show Itinerary placeholder */}
                {!flightInfo && (
                    <div
                        onClick={handleItineraryClick}
                        className="h-16 flex items-center justify-center font-bold tracking-wide cursor-pointer transition-all duration-200 text-slate-300 hover:bg-slate-50 border-l-4 border-transparent"
                    >
                        <div className="text-center leading-tight">
                            <span className="block text-xl">📅</span>
                            <span className="text-[10px] md:text-xs font-normal opacity-60">일정</span>
                        </div>
                    </div>
                )}

                {/* Day schedule (only if flight registered) */}
                {flightInfo && days.map(({ id, label, sublabel }) => {
                    const isActive = activeDay === id;
                    return (
                        <div
                            key={id}
                            onClick={() => onDayClick(id)}
                            className={`h-16 flex items-center justify-center font-bold tracking-wide cursor-pointer transition-all duration-200 ${isActive
                                ? 'bg-slate-100 text-slate-700 border-l-4 border-emerald-500'
                                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-700 border-l-4 border-transparent'
                                }`}
                        >
                            <div className="text-center leading-tight">
                                <span className="block text-base md:text-xl">{label}</span>
                                <span className={`text-[10px] md:text-xs font-normal ${isActive ? 'opacity-100 font-bold' : 'opacity-60'}`}>
                                    {sublabel}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
