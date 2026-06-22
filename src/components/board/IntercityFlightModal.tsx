'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, Plane } from 'lucide-react';
import { CITY_AIRPORT_GROUPS, MAJOR_AIRPORTS, KOREAN_AIRPORTS } from '@/data/airports';
import { ALL_AIRLINE_NAMES } from '@/data/airlines';
import type { IntercityFlightData } from '@/liveblocks.config';

interface IntercityFlightModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: IntercityFlightData) => void;
    initialData?: IntercityFlightData;
    defaultDate?: string; // 드롭한 day 의 실제 날짜 (ISO)
}

interface AirportOption { name: string; code: string; cityName: string; }

// CITY_AIRPORT_GROUPS + 한국/주요 공항 통합 → select 옵션
function buildAirportOptions(): AirportOption[] {
    const out: AirportOption[] = [];
    const seen = new Set<string>();

    CITY_AIRPORT_GROUPS.forEach(group => {
        group.airports.forEach(a => {
            if (!seen.has(a.code)) {
                out.push({ name: a.name, code: a.code, cityName: group.city });
                seen.add(a.code);
            }
        });
    });

    [...KOREAN_AIRPORTS, ...MAJOR_AIRPORTS].forEach(a => {
        if (!seen.has(a.code)) {
            out.push({ name: a.name, code: a.code, cityName: '' });
            seen.add(a.code);
        }
    });

    return out;
}

export function IntercityFlightModal({
    isOpen,
    onClose,
    onSave,
    initialData,
    defaultDate,
}: IntercityFlightModalProps) {
    const airportOptions = useMemo(() => buildAirportOptions(), []);

    const [depAirport, setDepAirport] = useState('');
    const [depCity, setDepCity] = useState('');
    const [arrAirport, setArrAirport] = useState('');
    const [arrCity, setArrCity] = useState('');
    const [depDate, setDepDate] = useState('');
    const [depTime, setDepTime] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [arrTime, setArrTime] = useState('');
    const [airline, setAirline] = useState('');

    // 초기값 세팅
    useEffect(() => {
        if (!isOpen) return;
        if (initialData) {
            setDepAirport(initialData.depAirport);
            setDepCity(initialData.depCity);
            setArrAirport(initialData.arrAirport);
            setArrCity(initialData.arrCity);
            setDepDate(initialData.depDate);
            setDepTime(initialData.depTime);
            setArrDate(initialData.arrDate);
            setArrTime(initialData.arrTime);
            setAirline(initialData.airline);
        } else {
            const initDate = defaultDate || '';
            setDepAirport('');
            setDepCity('');
            setArrAirport('');
            setArrCity('');
            setDepDate(initDate);
            setDepTime('');
            setArrDate(initDate);
            setArrTime('');
            setAirline('');
        }
    }, [isOpen, initialData, defaultDate]);

    // 출발 공항 선택 시 도시 자동 매핑
    const handleDepAirportChange = (code: string) => {
        setDepAirport(code);
        const opt = airportOptions.find(o => o.code === code);
        if (opt && opt.cityName) {
            setDepCity(opt.cityName.toLowerCase());
        }
    };

    const handleArrAirportChange = (code: string) => {
        setArrAirport(code);
        const opt = airportOptions.find(o => o.code === code);
        if (opt && opt.cityName) {
            setArrCity(opt.cityName.toLowerCase());
        }
    };

    const isValid = depAirport && arrAirport && depDate && depTime && arrDate && arrTime && airline.trim();

    const handleSave = () => {
        if (!isValid) return;
        onSave({
            depAirport,
            depCity: depCity.trim().toLowerCase(),
            arrAirport,
            arrCity: arrCity.trim().toLowerCase(),
            depDate,
            depTime,
            arrDate,
            arrTime,
            airline: airline.trim(),
        });
    };

    if (!isOpen) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-4 bg-black/50">
            <div className="bg-white md:rounded-2xl shadow-2xl w-full md:max-w-xl h-full md:max-h-[90vh] flex flex-col">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-2.5 border-b border-gray-100 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Plane className="w-5 h-5 text-sky-500" />
                        도시간 항공편 {initialData ? '수정' : '등록'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* 출발 */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-slate-700">출발</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <select
                                value={depAirport}
                                onChange={(e) => handleDepAirportChange(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="">공항 선택</option>
                                {airportOptions.map(opt => (
                                    <option key={opt.code} value={opt.code}>
                                        {opt.code} · {opt.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={depCity}
                                onChange={(e) => setDepCity(e.target.value)}
                                placeholder="도시명 (예: sydney)"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="date"
                                value={depDate}
                                onChange={(e) => setDepDate(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <input
                                type="time"
                                value={depTime}
                                onChange={(e) => setDepTime(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                    </div>

                    {/* 도착 */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-slate-700">도착</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <select
                                value={arrAirport}
                                onChange={(e) => handleArrAirportChange(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="">공항 선택</option>
                                {airportOptions.map(opt => (
                                    <option key={opt.code} value={opt.code}>
                                        {opt.code} · {opt.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={arrCity}
                                onChange={(e) => setArrCity(e.target.value)}
                                placeholder="도시명 (예: melbourne)"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="date"
                                value={arrDate}
                                onChange={(e) => setArrDate(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                            <input
                                type="time"
                                value={arrTime}
                                onChange={(e) => setArrTime(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                    </div>

                    {/* 항공사 */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-slate-700">항공사</h3>
                        <input
                            type="text"
                            value={airline}
                            onChange={(e) => setAirline(e.target.value)}
                            list="intercity-airline-list"
                            placeholder="예: 콴타스항공"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <datalist id="intercity-airline-list">
                            {ALL_AIRLINE_NAMES.map(n => (
                                <option key={n} value={n} />
                            ))}
                        </datalist>
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex justify-end gap-3 px-6 py-2.5 border-t border-gray-100 shrink-0 bg-white">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!isValid}
                        className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {initialData ? '수정' : '등록'}
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
