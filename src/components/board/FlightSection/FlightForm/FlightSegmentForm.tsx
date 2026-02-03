import { useState } from 'react';
import { Plane, Calendar } from "lucide-react";
import { TimeSelect } from "../../TimeSelect";
import { Autocomplete } from "../../Autocomplete";
import { DateRangePicker } from "../../DateRangePicker";
import { KOREAN_AIRPORTS, MAJOR_AIRPORTS, CITY_AIRPORT_GROUPS } from "@/data/airports";
import { ALL_AIRLINE_NAMES } from "@/data/airlines";

interface FlightSegmentFormProps {
    type: 'outbound' | 'return';
    airports: Array<{ name: string; code: string }>;
    hasMultipleAirports: boolean;
    values: {
        departureAirport: string;
        departureTerminal: string;
        departureDate: string;
        arrivalAirport: string;
        arrivalTerminal: string;
        arrivalDate: string;
        hour: string;
        minute: string;
        arrivalHour: string;
        arrivalMinute: string;
        airline: string;
        isCustomDeparture?: boolean;
        isCustomArrival?: boolean;
    };
    onChange: {
        setDepartureAirport: (value: string) => void;
        setDepartureTerminal: (value: string) => void;
        setDepartureDate: (value: string) => void;
        setArrivalAirport: (value: string) => void;
        setArrivalTerminal: (value: string) => void;
        setArrivalDate: (value: string) => void;
        setHour: (value: string) => void;
        setMinute: (value: string) => void;
        setArrivalHour: (value: string) => void;
        setArrivalMinute: (value: string) => void;
        setAirline: (value: string) => void;
        setIsCustomDeparture?: (value: boolean) => void;
        setIsCustomArrival?: (value: boolean) => void;
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

    const [showDepartureDatePicker, setShowDepartureDatePicker] = useState(false);
    const [showArrivalDatePicker, setShowArrivalDatePicker] = useState(false);

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <Plane className={`w-5 h-5 text-purple-500 ${planeRotation}`} />
                <h4 className="font-semibold text-slate-700">{title}</h4>
            </div>

            {/* 1️⃣ 출발 공항 | 터미널 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
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

                {/* 출발 터미널 (텍스트박스) */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">터미널 (선택)</label>
                    <input
                        type="text"
                        value={values.departureTerminal}
                        onChange={(e) => onChange.setDepartureTerminal(e.target.value)}
                        placeholder="T1, T2 등"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* 2️⃣ 출발일자 | 출발시간 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                {/* 출발 일자 */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">출발 일자</label>
                    <button
                        type="button"
                        onClick={() => setShowDepartureDatePicker(true)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white hover:border-purple-500 transition-colors flex items-center gap-2"
                    >
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <span className={values.departureDate ? 'text-slate-700' : 'text-slate-400'}>
                            {values.departureDate ? new Date(values.departureDate).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' }) : '날짜 선택'}
                        </span>
                    </button>
                </div>

                {/* 출발 시간 */}
                <div>
                    <TimeSelect
                        label="출발 시간"
                        hour={values.hour}
                        minute={values.minute}
                        onHourChange={onChange.setHour}
                        onMinuteChange={onChange.setMinute}
                    />
                </div>
            </div>

            {/* 출발 날짜 피커 */}
            {showDepartureDatePicker && (
                <DateRangePicker
                    singleDateMode={true}
                    onConfirm={(start, end) => {
                        onChange.setDepartureDate(start.toISOString().split('T')[0]);
                        setShowDepartureDatePicker(false);
                    }}
                    onClose={() => setShowDepartureDatePicker(false)}
                />
            )}

            {/* 3️⃣ 도착 공항 | 터미널 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                {/* 도착 공항 */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">도착 공항</label>
                    {isOutbound ? (
                        values.isCustomArrival ? (
                            <div className="relative">
                                <Autocomplete
                                    value={values.arrivalAirport}
                                    onChange={onChange.setArrivalAirport}
                                    suggestions={MAJOR_AIRPORTS.map(a => `${a.name} (${a.code})`)}
                                    placeholder="공항명 입력"
                                    className="w-full px-3 py-2 pr-20 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => onChange.setIsCustomArrival?.(false)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    목록선택
                                </button>
                            </div>
                        ) : (
                            <select
                                value={values.arrivalAirport}
                                onChange={(e) => {
                                    if (e.target.value === '__CUSTOM__') {
                                        onChange.setIsCustomArrival?.(true);
                                        onChange.setArrivalAirport('');
                                    } else {
                                        onChange.setArrivalAirport(e.target.value);
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
                    ) : (
                        values.isCustomArrival ? (
                            <div className="relative">
                                <Autocomplete
                                    value={values.arrivalAirport}
                                    onChange={onChange.setArrivalAirport}
                                    suggestions={MAJOR_AIRPORTS.map(a => `${a.name} (${a.code})`)}
                                    placeholder="공항명 입력"
                                    className="w-full px-3 py-2 pr-20 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => onChange.setIsCustomArrival?.(false)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    목록선택
                                </button>
                            </div>
                        ) : (
                            <select
                                value={values.arrivalAirport}
                                onChange={(e) => {
                                    if (e.target.value === '__CUSTOM__') {
                                        onChange.setIsCustomArrival?.(true);
                                        onChange.setArrivalAirport('');
                                    } else {
                                        onChange.setArrivalAirport(e.target.value);
                                    }
                                }}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                <option value="">선택하세요</option>
                                {KOREAN_AIRPORTS.map(airport => (
                                    <option key={airport.code} value={`${airport.name} (${airport.code})`}>
                                        {airport.name} ({airport.code})
                                    </option>
                                ))}
                                <option value="__CUSTOM__">직접입력</option>
                            </select>
                        )
                    )}
                </div>

                {/* 도착 터미널 (텍스트박스) */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">터미널 (선택)</label>
                    <input
                        type="text"
                        value={values.arrivalTerminal}
                        onChange={(e) => onChange.setArrivalTerminal(e.target.value)}
                        placeholder="T1, T2 등"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* 4️⃣ 도착일자 | 도착시간 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                {/* 도착 일자 */}
                <div>
                    <label className="block text-xs text-slate-500 mb-1">도착 일자</label>
                    <button
                        type="button"
                        onClick={() => setShowArrivalDatePicker(true)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white hover:border-purple-500 transition-colors flex items-center gap-2"
                    >
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <span className={values.arrivalDate ? 'text-slate-700' : 'text-slate-400'}>
                            {values.arrivalDate ? new Date(values.arrivalDate).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' }) : '날짜 선택'}
                        </span>
                    </button>
                </div>

                {/* 도착 시간 */}
                <div>
                    <TimeSelect
                        label="도착 시간"
                        hour={values.arrivalHour}
                        minute={values.arrivalMinute}
                        onHourChange={onChange.setArrivalHour}
                        onMinuteChange={onChange.setArrivalMinute}
                    />
                </div>
            </div>

            {/* 도착 날짜 피커 */}
            {showArrivalDatePicker && (
                <DateRangePicker
                    singleDateMode={true}
                    onConfirm={(start, end) => {
                        onChange.setArrivalDate(start.toISOString().split('T')[0]);
                        setShowArrivalDatePicker(false);
                    }}
                    onClose={() => setShowArrivalDatePicker(false)}
                />
            )}

            {/* 5️⃣ 항공사 */}
            <div>
                <label className="block text-xs text-slate-500 mb-1">항공사</label>
                <Autocomplete
                    value={values.airline}
                    onChange={onChange.setAirline}
                    suggestions={ALL_AIRLINE_NAMES}
                    placeholder="대한항공"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
        </div>
    );
}
