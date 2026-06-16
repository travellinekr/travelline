'use client';

import { Search } from 'lucide-react';

type PickerColor = 'orange' | 'rose' | 'purple' | 'cyan';

// Tailwind purge 대응을 위해 정적 매핑 (focus ring 색상)
const COLOR_FOCUS: Record<PickerColor, string> = {
    orange: 'focus:ring-orange-400 focus:border-orange-400',
    rose: 'focus:ring-rose-400 focus:border-rose-400',
    purple: 'focus:ring-purple-400 focus:border-purple-400',
    cyan: 'focus:ring-cyan-400 focus:border-cyan-400',
};

export interface FilterOption {
    value: string;
    label: string;
}

interface PickerFilterBarProps {
    color: PickerColor;
    typeOptions: FilterOption[];
    selectedType: string;
    onTypeChange: (value: string) => void;
    searchText: string;
    onSearchChange: (value: string) => void;
}

// 인박스 picker 공통 필터 바 — 좌측 type 드롭다운 + 우측 이름 검색 input.
// 4개 카테고리 색상(orange/rose/purple/cyan)에 따라 focus 컬러 분기.
export function PickerFilterBar({
    color,
    typeOptions,
    selectedType,
    onTypeChange,
    searchText,
    onSearchChange,
}: PickerFilterBarProps) {
    const focusClass = COLOR_FOCUS[color];

    return (
        <div className="flex items-center gap-2 py-2 border-b border-slate-100 bg-white shrink-0">
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
    );
}
