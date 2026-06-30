'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, Plane, Calendar } from 'lucide-react';
import { Autocomplete } from './Autocomplete';
import { TimeSelect } from './TimeSelect';
import { DateRangePicker } from './DateRangePicker';
import { KOREAN_AIRPORTS, MAJOR_AIRPORTS, CITY_AIRPORT_GROUPS } from '@/data/airports';
import { ALL_AIRLINE_NAMES } from '@/data/airlines';
import { DESTINATION_DATA } from '@/data/destinations';
import { getCityAutocompletePool, koreanToEngName, engNameToKorean } from '@/utils/citySources';
import type { IntercityFlightData, FlightInfo } from '@/liveblocks.config';

interface IntercityFlightModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: IntercityFlightData) => void;
    defaultDate?: string;
    currentCardId?: string;
    cards?: any;                  // Liveblocks cards LiveMap (이전 항공편 탐색용 + 도시 후보)
    destinationCard?: any;
    flightInfo?: FlightInfo | null;
}

// 도시명 입력값(한글/영문 모두 허용) → 그 도시의 공항 목록
//  - CITY_AIRPORT_GROUPS (한글) > DESTINATION_DATA.cities.airports > subCities[].airport 순으로 매칭.
//  - 매칭 실패 시 빈 배열 (Autocomplete 폴백)
function findAirportsByCity(cityInput: string): Array<{ name: string; code: string }> {
    if (!cityInput) return [];
    const trimmed = cityInput.trim();
    const lowered = trimmed.toLowerCase();

    // 1) CITY_AIRPORT_GROUPS (한글 도시명 exact)
    const group = CITY_AIRPORT_GROUPS.find(g => g.city === trimmed);
    if (group && group.airports.length > 0) {
        return group.airports.map(a => ({ name: a.name, code: a.code }));
    }

    // 2) destinations.ts cities — 한글명 또는 engName lowercase
    for (const region of Object.values(DESTINATION_DATA)) {
        for (const c of region.cities) {
            if (c.name === trimmed || c.engName.toLowerCase() === lowered) {
                if (c.airports && c.airports.length > 0) return c.airports;
            }
            if (c.subCities) {
                for (const sub of c.subCities) {
                    if (sub.name === trimmed || sub.engName.toLowerCase() === lowered) {
                        return sub.airport ? [sub.airport] : [];
                    }
                }
            }
        }
    }

    return [];
}

// 모든 공항 통합 (한국 + 해외) — Autocomplete 추천 목록
const ALL_AIRPORT_SUGGESTIONS = [
    ...KOREAN_AIRPORTS.map(a => `${a.name} (${a.code})`),
    ...MAJOR_AIRPORTS.map(a => `${a.name} (${a.code})`),
];

// "인천국제공항 (ICN)" → "ICN"
function extractCode(airportString: string): string {
    if (!airportString) return '';
    const m = airportString.match(/\(([A-Z]{3})\)/);
    return m ? m[1] : '';
}

// IATA 코드 → "공항명 (CODE)" 표시 문자열
function codeToDisplay(code: string): string {
    if (!code) return '';
    const k = KOREAN_AIRPORTS.find(a => a.code === code);
    if (k) return `${k.name} (${k.code})`;
    const m = MAJOR_AIRPORTS.find(a => a.code === code);
    if (m) return `${m.name} (${m.code})`;
    return code;
}

// 공항 코드 → engName lowercase (예: KIX → "osaka")
function airportCodeToCityEngName(code: string): string {
    if (!code) return '';
    const group = CITY_AIRPORT_GROUPS.find(g => g.airports.some(a => a.code === code));
    if (!group) return '';
    const koreanCity = group.city;
    for (const region of Object.values(DESTINATION_DATA)) {
        const main = region.cities.find(c => c.name === koreanCity);
        if (main) return main.engName.toLowerCase();
        for (const c of region.cities) {
            const sub = c.subCities?.find(s => s.name === koreanCity);
            if (sub) return sub.engName.toLowerCase();
        }
    }
    return koreanCity.toLowerCase();
}

// 이전에 등록된 도시간 항공편의 마지막 도착 공항 IATA 코드.
// 출발 공항 default chain: 두번째 등록 시 = 첫번째의 도착 공항.
// isIntercityFlight 마커 + route "🛬" prefix 로 도착 카드만 필터.
function findPreviousIntercityArrivalAirport(cards: any, excludeParentId?: string): string {
    if (!cards || typeof cards.forEach !== 'function') return '';
    const arrivals: Array<{ airportCode: string; date: string; time: string }> = [];
    cards.forEach((c: any) => {
        if (!c?.isIntercityFlight) return;
        // 현재 편집중인 메타 카드의 자식들은 제외 (자기 자신 참조 방지)
        if (excludeParentId && c.parentIntercityCardId === excludeParentId) return;
        const route: string = c.route || '';
        if (!route.startsWith('🛬')) return;
        const code = c.airportCode || '';
        if (!code) return;
        arrivals.push({ airportCode: code, date: c.date || '', time: c.time || '' });
    });
    if (arrivals.length === 0) return '';
    arrivals.sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
    return arrivals[arrivals.length - 1].airportCode;
}

// 특정 메타 카드의 자식 (출발 + 도착) 카드를 찾아 IntercityFlightData 로 재구성.
// 수정 모드에서 모달 prefill 용.
function findExistingIntercityFlight(cards: any, parentId?: string): IntercityFlightData | null {
    if (!cards || !parentId || typeof cards.forEach !== 'function') return null;
    let dep: any = null;
    let arr: any = null;
    cards.forEach((c: any) => {
        if (c?.parentIntercityCardId !== parentId) return;
        const route: string = c.route || '';
        if (route.startsWith('🛫')) dep = c;
        else if (route.startsWith('🛬')) arr = c;
    });
    if (!dep || !arr) return null;
    return {
        depAirport: dep.airportCode || '',
        depCity: dep.city || '',
        arrAirport: arr.airportCode || '',
        arrCity: arr.city || '',
        depDate: dep.date || '',
        depTime: dep.time || '',
        arrDate: arr.date || '',
        arrTime: arr.time || '',
        airline: dep.text || dep.title || '',
    };
}

// YYYY-MM-DD → "6월 23일"
function formatDateKo(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
}

function formatDateISO(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

export function IntercityFlightModal({
    isOpen,
    onClose,
    onSave,
    defaultDate,
    currentCardId,
    cards,
    destinationCard,
    flightInfo,
}: IntercityFlightModalProps) {
    const [departureAirport, setDepartureAirport] = useState('');
    const [departureTerminal, setDepartureTerminal] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [arrivalTerminal, setArrivalTerminal] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [arrivalHour, setArrivalHour] = useState('');
    const [arrivalMinute, setArrivalMinute] = useState('');
    const [airline, setAirline] = useState('');
    const [targetCity, setTargetCity] = useState(''); // 이동할 도시 (도착 도시 override)
    const [isCustomArrival, setIsCustomArrival] = useState(false); // 도착 공항 직접입력 토글

    const [showDepDatePicker, setShowDepDatePicker] = useState(false);
    const [showArrDatePicker, setShowArrDatePicker] = useState(false);

    // 이동할 도시 → 도착 공항 후보 (없으면 빈 배열 → Autocomplete 폴백)
    const targetCityAirports = useMemo(() => findAirportsByCity(targetCity), [targetCity]);

    // 등록된 도시 후보 — 기존 도시간 항공편 카드 + destinations.ts subCities
    const subCityOptions = useMemo(
        () => getCityAutocompletePool(destinationCard, cards),
        [destinationCard, cards]
    );
    const citySuggestions = useMemo(
        () => subCityOptions.map(s => s.name),
        [subCityOptions]
    );

    useEffect(() => {
        if (!isOpen) return;

        // 수정 모드 — 메타 카드에 자식 항공 카드가 있으면 그 데이터 prefill
        const existing = findExistingIntercityFlight(cards, currentCardId);
        if (existing) {
            setDepartureAirport(codeToDisplay(existing.depAirport));
            setArrivalAirport(codeToDisplay(existing.arrAirport));
            setDepartureDate(existing.depDate);
            setArrivalDate(existing.arrDate);
            const [h, m] = (existing.depTime || '').split(':');
            setHour(h || '');
            setMinute(m || '');
            const [ah, am] = (existing.arrTime || '').split(':');
            setArrivalHour(ah || '');
            setArrivalMinute(am || '');
            setAirline(existing.airline);
            setDepartureTerminal('');
            setArrivalTerminal('');
            // 이동할 도시 prefill (engName → Korean 매핑)
            const cityKorean = engNameToKorean(existing.arrCity, subCityOptions);
            setTargetCity(cityKorean);
            // 도착 공항이 해당 도시 후보에 있으면 dropdown 모드, 없으면 직접입력 모드
            const cityAirports = findAirportsByCity(cityKorean);
            const matched = cityAirports.some(a => a.code === existing.arrAirport);
            setIsCustomArrival(cityAirports.length > 0 && !matched);
            return;
        }

        // 등록 모드 default 체인:
        //  - 출발 공항: 이전 도시간 항공편(isIntercityFlight)의 도착 공항 → 없으면 현지 도착 공항
        //  - 날짜: 드롭한 day 의 실제 날짜 (출발/도착 모두)
        //  - 시간/항공사: 빈 값 (사용자가 직접 입력)
        const prevArr = findPreviousIntercityArrivalAirport(cards, currentCardId);
        let depCode = prevArr;
        if (!depCode && flightInfo?.outbound?.arrivalAirport) {
            depCode = extractCode(flightInfo.outbound.arrivalAirport);
        }
        setDepartureAirport(codeToDisplay(depCode));

        setDepartureDate(defaultDate || '');
        setArrivalDate(defaultDate || '');

        setHour('');
        setMinute('');
        setArrivalHour('');
        setArrivalMinute('');
        setAirline('');

        setArrivalAirport('');
        setDepartureTerminal('');
        setArrivalTerminal('');
        setTargetCity('');
        setIsCustomArrival(false);
    }, [isOpen, defaultDate, cards, flightInfo, currentCardId, subCityOptions]);

    // 헤더/버튼 텍스트 분기
    const isEdit = !!findExistingIntercityFlight(cards, currentCardId);

    const isValid = !!(
        departureAirport && arrivalAirport && departureDate && hour && minute
        && arrivalDate && arrivalHour && arrivalMinute && airline.trim()
    );

    const handleSave = () => {
        if (!isValid) return;
        const depCode = extractCode(departureAirport);
        const arrCode = extractCode(arrivalAirport);
        // arrCity: 사용자가 "이동할 도시"를 입력했으면 그 값을 우선, 아니면 공항 코드로 자동 매핑
        const targetCityKey = koreanToEngName(targetCity, subCityOptions);
        const arrCity = targetCityKey || airportCodeToCityEngName(arrCode);
        onSave({
            depAirport: depCode,
            depCity: airportCodeToCityEngName(depCode),
            arrAirport: arrCode,
            arrCity,
            depDate: departureDate,
            depTime: `${hour}:${minute}`,
            arrDate: arrivalDate,
            arrTime: `${arrivalHour}:${arrivalMinute}`,
            airline: airline.trim(),
        });
    };

    if (!isOpen) return null;

    const initialMonth = defaultDate ? new Date(defaultDate) : undefined;
    const inputClass = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500";

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-4 bg-black/50">
            <div className="bg-white md:rounded-2xl md:overflow-hidden shadow-2xl w-full md:max-w-2xl h-full md:max-h-[90vh] flex flex-col">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-2.5 border-b border-gray-100 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Plane className="w-5 h-5 text-purple-500" />
                        도시간 항공편 {isEdit ? '수정' : '등록'}
                    </h2>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg" aria-label="닫기">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* 이동할 도시 */}
                    <div>
                        <label className="block text-xs text-slate-500 mb-1">이동할 도시</label>
                        <Autocomplete
                            value={targetCity}
                            onChange={setTargetCity}
                            suggestions={citySuggestions}
                            placeholder={citySuggestions.length > 0 ? '예: 시드니' : '도시명 직접 입력'}
                            className={inputClass}
                        />
                    </div>

                    {/* 출발 */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Plane className="w-5 h-5 text-purple-500" />
                            <h4 className="font-semibold text-slate-700">출발</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">출발 공항</label>
                                <Autocomplete
                                    value={departureAirport}
                                    onChange={setDepartureAirport}
                                    suggestions={ALL_AIRPORT_SUGGESTIONS}
                                    placeholder="공항명 입력"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">터미널 (선택)</label>
                                <input
                                    type="text"
                                    value={departureTerminal}
                                    onChange={(e) => setDepartureTerminal(e.target.value)}
                                    placeholder="T1, T2 등"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">출발 일자</label>
                                <button
                                    type="button"
                                    onClick={() => setShowDepDatePicker(true)}
                                    className={`${inputClass} bg-white hover:border-purple-500 transition-colors flex items-center gap-2`}
                                >
                                    <Calendar className="w-4 h-4 text-purple-500" />
                                    <span className={departureDate ? 'text-slate-700' : 'text-slate-400'}>
                                        {departureDate ? formatDateKo(departureDate) : '날짜 선택'}
                                    </span>
                                </button>
                            </div>
                            <div>
                                <TimeSelect
                                    label="출발 시간"
                                    hour={hour}
                                    minute={minute}
                                    onHourChange={setHour}
                                    onMinuteChange={setMinute}
                                />
                            </div>
                        </div>

                        {showDepDatePicker && (
                            <DateRangePicker
                                singleDateMode={true}
                                initialMonth={initialMonth}
                                onConfirm={(start) => {
                                    setDepartureDate(formatDateISO(start));
                                    setShowDepDatePicker(false);
                                }}
                                onClose={() => setShowDepDatePicker(false)}
                            />
                        )}
                    </div>

                    {/* 도착 */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Plane className="w-5 h-5 text-purple-500 rotate-180" />
                            <h4 className="font-semibold text-slate-700">도착</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">도착 공항</label>
                                {/* 이동할 도시에 매칭되는 공항이 있고 직접입력 모드가 아니면 → select dropdown
                                    그 외에는 → Autocomplete (도시 정보가 없거나 사용자가 직접입력 선택 시) */}
                                {targetCityAirports.length > 0 && !isCustomArrival ? (
                                    <select
                                        value={arrivalAirport}
                                        onChange={(e) => {
                                            if (e.target.value === '__CUSTOM__') {
                                                setIsCustomArrival(true);
                                                setArrivalAirport('');
                                            } else {
                                                setArrivalAirport(e.target.value);
                                            }
                                        }}
                                        className={`${inputClass} bg-white`}
                                    >
                                        <option value="">선택하세요</option>
                                        {targetCityAirports.map(a => (
                                            <option key={a.code} value={`${a.name} (${a.code})`}>
                                                {a.name} ({a.code})
                                            </option>
                                        ))}
                                        <option value="__CUSTOM__">직접입력</option>
                                    </select>
                                ) : (
                                    <div className="relative">
                                        <Autocomplete
                                            value={arrivalAirport}
                                            onChange={setArrivalAirport}
                                            suggestions={ALL_AIRPORT_SUGGESTIONS}
                                            placeholder="공항명 입력"
                                            className={`${inputClass} ${targetCityAirports.length > 0 ? 'pr-16' : ''}`}
                                        />
                                        {targetCityAirports.length > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsCustomArrival(false);
                                                    setArrivalAirport('');
                                                }}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                                            >
                                                목록선택
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">터미널 (선택)</label>
                                <input
                                    type="text"
                                    value={arrivalTerminal}
                                    onChange={(e) => setArrivalTerminal(e.target.value)}
                                    placeholder="T1, T2 등"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-slate-500 mb-1">도착 일자</label>
                                <button
                                    type="button"
                                    onClick={() => setShowArrDatePicker(true)}
                                    className={`${inputClass} bg-white hover:border-purple-500 transition-colors flex items-center gap-2`}
                                >
                                    <Calendar className="w-4 h-4 text-purple-500" />
                                    <span className={arrivalDate ? 'text-slate-700' : 'text-slate-400'}>
                                        {arrivalDate ? formatDateKo(arrivalDate) : '날짜 선택'}
                                    </span>
                                </button>
                            </div>
                            <div>
                                <TimeSelect
                                    label="도착 시간"
                                    hour={arrivalHour}
                                    minute={arrivalMinute}
                                    onHourChange={setArrivalHour}
                                    onMinuteChange={setArrivalMinute}
                                />
                            </div>
                        </div>

                        {showArrDatePicker && (
                            <DateRangePicker
                                singleDateMode={true}
                                initialMonth={initialMonth}
                                onConfirm={(start) => {
                                    setArrivalDate(formatDateISO(start));
                                    setShowArrDatePicker(false);
                                }}
                                onClose={() => setShowArrDatePicker(false)}
                            />
                        )}
                    </div>

                    {/* 항공사 */}
                    <div>
                        <label className="block text-xs text-slate-500 mb-1">항공사</label>
                        <Autocomplete
                            value={airline}
                            onChange={setAirline}
                            suggestions={ALL_AIRLINE_NAMES}
                            placeholder="대한항공"
                            className={inputClass}
                        />
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex justify-end gap-3 px-6 py-2.5 border-t border-gray-100 shrink-0 bg-white">
                    <button onClick={onClose} className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                        취소
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!isValid}
                        className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isEdit ? '수정' : '등록'}
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
