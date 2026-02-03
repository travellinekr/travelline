import { Plane } from "lucide-react";
import { TimeSelect } from "../../TimeSelect";
import { Autocomplete } from "../../Autocomplete";
import { KOREAN_AIRPORTS, MAJOR_AIRPORTS } from "@/data/airports";
import { ALL_AIRLINE_NAMES } from "@/data/airlines";

interface FlightSegmentFormProps {
    type: 'outbound' | 'return';
    airports: Array<{ name: string; code: string }>;
    hasMultipleAirports: boolean;
    values: {
        departureAirport: string;
        arrivalAirport: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
        isCustomDeparture?: boolean;
    };
    onChange: {
        setDepartureAirport: (value: string) => void;
        setArrivalAirport: (value: string) => void;
        setHour: (value: string) => void;
        setMinute: (value: string) => void;
        setArrivalHour: (value: string) => void;
        setArrivalMinute: (value: string) => void;
        setAirline: (value: string) => void;
        setIsCustomDeparture?: (value: boolean) => void;
    };
}

export function FlightSegmentForm({
    type,
    airports,
    hasMultipleAirports,
    values,
    onChange
}: FlightSegmentFormProps) {
    const isOutbound = type === 'outbound';
    const title = isOutbound ? '가는편' : '오는편';
    const planeRotation = isOutbound ? '' : 'rotate-180';

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <Plane className={`w-5 h-5 text-purple-500 ${planeRotation}`} />
                <h4 className="font-semibold text-slate-700">{title}</h4>
            </div>

            {/* 공항 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                {/* 출발 공항 */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">출발 공항</label>
                    {isOutbound ? (
                        <select
                            value={values.departureAirport}
                            onChange={(e) => onChange.setDepartureAirport(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        >
                            {KOREAN_AIRPORTS.map(airport => (
                                <option key={airport.code} value={`${airport.name} (${airport.code})`}>
                                    {airport.name} ({airport.code})
                                </option>
                            ))}
                        </select>
                    ) : (
                        values.isCustomDeparture ? (
                            <div className="relative">
                                <Autocomplete
                                    value={values.departureAirport}
                                    onChange={onChange.setDepartureAirport}
                                    suggestions={MAJOR_AIRPORTS.map(a => `${a.name} (${a.code})`)}
                                    placeholder="공항명 입력"
                                    className="w-full px-3 py-2 pr-20 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => onChange.setIsCustomDeparture?.(false)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    목록선택
                                </button>
                            </div>
                        ) : (
                            <select
                                value={values.departureAirport}
                                onChange={(e) => {
                                    if (e.target.value === '__CUSTOM__') {
                                        onChange.setIsCustomDeparture?.(true);
                                        onChange.setDepartureAirport('');
                                    } else {
                                        onChange.setDepartureAirport(e.target.value);
                                    }
                                }}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                <option value="">선택하세요</option>
                                {airports.map(airport => (
                                    <option key={airport.code} value={`${airport.name} (${airport.code})`}>
                                        {airport.name} ({airport.code})
                                    </option>
                                ))}
                                <option value="__CUSTOM__">직접입력</option>
                            </select>
                        )
                    )}
                </div>

                {/* 도착 공항 */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">도착 공항</label>
                    {isOutbound ? (
                        hasMultipleAirports ? (
                            <select
                                value={values.arrivalAirport}
                                onChange={(e) => onChange.setArrivalAirport(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                <option value="">선택하세요</option>
                                {airports.map(airport => (
                                    <option key={airport.code} value={`${airport.name} (${airport.code})`}>
                                        {airport.name} ({airport.code})
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type="text"
                                value={values.arrivalAirport}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 cursor-not-allowed"
                            />
                        )
                    ) : (
                        <select
                            value={values.arrivalAirport}
                            onChange={(e) => onChange.setArrivalAirport(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        >
                            {KOREAN_AIRPORTS.map(airport => (
                                <option key={airport.code} value={`${airport.name} (${airport.code})`}>
                                    {airport.name} ({airport.code})
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>

            {/* 시간/항공사 */}
            <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <TimeSelect
                        label="출발 시간"
                        hour={values.hour}
                        minute={values.minute}
                        onHourChange={onChange.setHour}
                        onMinuteChange={onChange.setMinute}
                    />
                    <TimeSelect
                        label="도착 시간"
                        hour={values.arrivalHour}
                        minute={values.arrivalMinute}
                        onHourChange={onChange.setArrivalHour}
                        onMinuteChange={onChange.setArrivalMinute}
                    />
                </div>
                <div>
                    <label className="block text-xs text-slate-500 mb-1">항공사</label>
                    <Autocomplete
                        value={values.airline}
                        onChange={onChange.setAirline}
                        suggestions={ALL_AIRLINE_NAMES}
                        placeholder="대한항공"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>
        </div>
    );
}
