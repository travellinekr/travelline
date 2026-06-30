'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, Car } from 'lucide-react';
import { Autocomplete } from './Autocomplete';
import { getCityAutocompletePool, koreanToEngName, engNameToKorean } from '@/utils/citySources';

interface IntercityMoveModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (cityKorean: string, cityEngName: string) => void;
    currentCardId?: string;
    cards?: any;
    destinationCard?: any;
}

// 도시간 이동(육로) 메타 카드 등록/수정 모달.
// - 입력: 이동할 도시 1개만 (Autocomplete + 자유 입력).
// - 옵션은 getEffectiveSubCities — 등록된 도시 + destinations.ts subCities.
export function IntercityMoveModal({
    isOpen,
    onClose,
    onSave,
    currentCardId,
    cards,
    destinationCard,
}: IntercityMoveModalProps) {
    const [city, setCity] = useState('');

    const subCityOptions = useMemo(
        () => getCityAutocompletePool(destinationCard, cards),
        [destinationCard, cards]
    );
    const citySuggestions = useMemo(
        () => subCityOptions.map(s => s.name),
        [subCityOptions]
    );

    // 수정 모드: 기존 메타 카드의 targetCity → 한글명 prefill
    useEffect(() => {
        if (!isOpen) return;
        if (!cards || !currentCardId) {
            setCity('');
            return;
        }
        const existing = cards.get ? cards.get(currentCardId) : null;
        const target = existing?.targetCity;
        if (target) {
            setCity(engNameToKorean(target, subCityOptions));
        } else {
            setCity('');
        }
    }, [isOpen, currentCardId, cards, subCityOptions]);

    const isEdit = !!(cards?.get && cards.get(currentCardId || '')?.targetCity);
    const isValid = city.trim().length > 0;

    const handleSave = () => {
        if (!isValid) return;
        const trimmed = city.trim();
        const engName = koreanToEngName(trimmed, subCityOptions);
        onSave(trimmed, engName);
    };

    if (!isOpen) return null;

    const inputClass = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500";

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-4 bg-black/50">
            <div className="bg-white md:rounded-2xl md:overflow-hidden shadow-2xl w-full md:max-w-md h-full md:h-auto flex flex-col">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-2.5 border-b border-gray-100 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Car className="w-5 h-5 text-purple-500" />
                        도시간 이동 {isEdit ? '수정' : '등록'}
                    </h2>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg" aria-label="닫기">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <div>
                        <label className="block text-xs text-slate-500 mb-1">이동할 도시</label>
                        <Autocomplete
                            value={city}
                            onChange={setCity}
                            suggestions={citySuggestions}
                            placeholder={citySuggestions.length > 0 ? '예: 베니스' : '도시명 직접 입력'}
                            className={inputClass}
                        />
                        <p className="text-[11px] text-slate-400 mt-1">
                            자동차·기차 등 육로로 이동할 도시를 입력해주세요
                        </p>
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

    if (typeof document === 'undefined') return null;
    return createPortal(modalContent, document.body);
}
