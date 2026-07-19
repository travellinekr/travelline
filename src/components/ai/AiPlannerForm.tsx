'use client';

import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';

export type CompanionKey = 'solo' | 'couple' | 'family' | 'friends';
export type BudgetKey = 'budget' | 'mid' | 'luxury';

export interface AiRequirements {
    dayCount?: number | null;
    month?: number | null;           // 여행 월(1~12) — 여행지 추천 모드에서 사용
    preferredCities?: string[];      // 사용자가 언급한 관심 도시 — 추천 모드
    companions?: CompanionKey | null;
    budget?: BudgetKey | null;
    pace?: 'packed' | 'relaxed' | null;
    style?: string[];
    notes?: string | null;
}

interface AiPlannerFormProps {
    onSubmit: (req: AiRequirements) => void;
    busy?: boolean;
    submitLabel?: string;
}

const STYLE_OPTIONS = ['미식', '자연/해변', '쇼핑', '관광/명소', '휴양', '액티비티'];
const COMPANION_OPTIONS: Array<{ key: CompanionKey; label: string }> = [
    { key: 'solo', label: '혼자' },
    { key: 'couple', label: '커플' },
    { key: 'family', label: '가족' },
    { key: 'friends', label: '친구' },
];
const BUDGET_OPTIONS: Array<{ key: BudgetKey; label: string; desc: string }> = [
    { key: 'budget', label: '가성비', desc: '실속 위주' },
    { key: 'mid', label: '중간', desc: '무난하게' },
    { key: 'luxury', label: '고급', desc: '리조트급' },
];
const MIN_DAYS = 1;
const MAX_DAYS = 14;

/**
 * 빠른 폼 — 대화를 건너뛰고 요구사항을 즉시 산출.
 * AiChat 과 동일한 AiRequirements 를 만들어 onSubmit 으로 넘긴다.
 */
export function AiPlannerForm({ onSubmit, busy, submitLabel = '이 내용으로 배치' }: AiPlannerFormProps) {
    const [dayCount, setDayCount] = useState(3);
    const [companions, setCompanions] = useState<CompanionKey | null>(null);
    const [budget, setBudget] = useState<BudgetKey | null>(null);
    const [pace, setPace] = useState<'packed' | 'relaxed'>('relaxed');
    const [style, setStyle] = useState<string[]>([]);
    const [notes, setNotes] = useState('');

    const toggleStyle = (s: string) =>
        setStyle((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

    const submit = () => {
        if (busy) return;
        onSubmit({ dayCount, companions, budget, pace, style, notes: notes.trim() || null });
    };

    return (
        <div className="flex flex-col gap-5 p-4">
            {/* 일수 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">며칠 일정인가요?</label>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setDayCount((d) => Math.max(MIN_DAYS, d - 1))}
                        className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 active:scale-95 transition"
                        aria-label="일수 감소"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="min-w-[64px] text-center font-bold text-lg text-slate-800 tabular-nums">
                        {dayCount}일
                    </span>
                    <button
                        type="button"
                        onClick={() => setDayCount((d) => Math.min(MAX_DAYS, d + 1))}
                        className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 active:scale-95 transition"
                        aria-label="일수 증가"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* 동행 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">누구와 함께 <span className="text-slate-400 font-normal">(선택)</span></label>
                <div className="grid grid-cols-4 gap-2">
                    {COMPANION_OPTIONS.map((c) => {
                        const active = companions === c.key;
                        return (
                            <button
                                key={c.key}
                                type="button"
                                onClick={() => setCompanions(active ? null : c.key)}
                                className={`px-2 py-2 rounded-xl border text-sm font-semibold transition ${
                                    active
                                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                                        : 'border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                            >
                                {c.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 예산 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">예산대 <span className="text-slate-400 font-normal">(선택)</span></label>
                <div className="grid grid-cols-3 gap-2">
                    {BUDGET_OPTIONS.map((b) => {
                        const active = budget === b.key;
                        return (
                            <button
                                key={b.key}
                                type="button"
                                onClick={() => setBudget(active ? null : b.key)}
                                className={`flex flex-col items-start gap-0.5 px-3 py-2 rounded-xl border text-left transition ${
                                    active
                                        ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-200'
                                        : 'border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <span className={`text-sm font-semibold ${active ? 'text-emerald-700' : 'text-slate-700'}`}>{b.label}</span>
                                <span className="text-[11px] text-slate-400">{b.desc}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 페이스 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">여행 페이스</label>
                <div className="grid grid-cols-2 gap-2">
                    {([
                        { key: 'relaxed', label: '여유롭게', desc: '하루 2~3곳' },
                        { key: 'packed', label: '빡빡하게', desc: '하루 4곳+' },
                    ] as const).map((p) => (
                        <button
                            key={p.key}
                            type="button"
                            onClick={() => setPace(p.key)}
                            className={`flex flex-col items-start gap-0.5 px-3 py-2 rounded-xl border text-left transition ${
                                pace === p.key
                                    ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-200'
                                    : 'border-slate-200 hover:border-slate-300'
                            }`}
                        >
                            <span className={`text-sm font-semibold ${pace === p.key ? 'text-emerald-700' : 'text-slate-700'}`}>{p.label}</span>
                            <span className="text-[11px] text-slate-400">{p.desc}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 스타일 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">선호 스타일 <span className="text-slate-400 font-normal">(선택)</span></label>
                <div className="flex flex-wrap gap-1.5">
                    {STYLE_OPTIONS.map((s) => {
                        const active = style.includes(s);
                        return (
                            <button
                                key={s}
                                type="button"
                                onClick={() => toggleStyle(s)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                                    active
                                        ? 'bg-emerald-500 border-emerald-500 text-white'
                                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                            >
                                {s}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 메모 */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">추가 요청 <span className="text-slate-400 font-normal">(선택)</span></label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="예: 둘째 날은 해변 근처 위주로"
                    className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400"
                />
            </div>

            <button
                type="button"
                onClick={submit}
                disabled={busy}
                className="mt-1 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-bold text-sm shadow-sm transition"
            >
                <Check className="w-4 h-4" />
                {submitLabel}
            </button>
        </div>
    );
}
