'use client';

import { Search } from 'lucide-react';

type PickerColor = 'orange' | 'rose' | 'purple' | 'cyan';

// Tailwind purge 대응을 위해 정적 매핑 (focus ring + chip 활성 색상)
const COLOR_FOCUS: Record<PickerColor, string> = {
    orange: 'focus:ring-orange-400 focus:border-orange-400',
    rose: 'focus:ring-rose-400 focus:border-rose-400',
    purple: 'focus:ring-purple-400 focus:border-purple-400',
    cyan: 'focus:ring-cyan-400 focus:border-cyan-400',
};

const COLOR_CHIP_ACTIVE: Record<PickerColor, string> = {
    orange: 'bg-orange-500 text-white border-orange-500',
    rose: 'bg-rose-500 text-white border-rose-500',
    purple: 'bg-purple-500 text-white border-purple-500',
    cyan: 'bg-cyan-500 text-white border-cyan-500',
};

export interface FilterOption {
    value: string;
    label: string;
}

export interface SubCityOption {
    engName: string;     // lowercase 매칭 키
    name: string;        // 표시명
}

interface PickerFilterBarProps {
    color: PickerColor;
    typeOptions: FilterOption[];
    selectedType: string;
    onTypeChange: (value: string) => void;
    searchText: string;
    onSearchChange: (value: string) => void;
    subCities?: SubCityOption[];
    selectedSubCity?: string; // 'all' 또는 engName
    onSubCityChange?: (value: string) => void;
}

// 인박스 picker 공통 필터 바 — 좌측 type 드롭다운 + 우측 이름 검색 input.
// 다중 도시 여행시 상단에 서브 도시 chips 한 줄 추가 (subCities 있을 때만).
export function PickerFilterBar({
    color,
    typeOptions,
    selectedType,
    onTypeChange,
    searchText,
    onSearchChange,
    subCities,
    selectedSubCity = 'all',
    onSubCityChange,
}: PickerFilterBarProps) {
    const focusClass = COLOR_FOCUS[color];
    const chipActiveClass = COLOR_CHIP_ACTIVE[color];
    const showSubCities = !!(subCities && subCities.length > 0 && onSubCityChange);

    return (
        <div className="border-b border-slate-100 bg-white shrink-0">
            <div className="flex items-center gap-2 py-2">
                <select
                    value={selectedType}
                    onChange={(e) => onTypeChange(e.target.value)}
                    aria-label="유형 필터"
                    className={`w-[110px] text-sm py-2 px-2.5 border border-slate-200 rounded-lg bg-white outline-none focus:ring-2 transition-shadow ${focusClass}`}
                >
                    {typeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>

                <div className="flex-1 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="이름으로 검색"
                        aria-label="이름 검색"
                        className={`w-full text-sm py-2 pl-8 pr-2.5 border border-slate-200 rounded-lg bg-white outline-none focus:ring-2 transition-shadow ${focusClass}`}
                    />
                </div>
            </div>

            {showSubCities && (
                <div className="flex gap-2 pb-2 overflow-x-auto">
                    <button
                        type="button"
                        onClick={() => onSubCityChange!('all')}
                        className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full border transition-colors ${selectedSubCity === 'all' ? chipActiveClass : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                    >
                        전체
                    </button>
                    {subCities!.map(sc => (
                        <button
                            key={sc.engName}
                            type="button"
                            onClick={() => onSubCityChange!(sc.engName)}
                            className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full border transition-colors ${selectedSubCity === sc.engName ? chipActiveClass : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                        >
                            {sc.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
