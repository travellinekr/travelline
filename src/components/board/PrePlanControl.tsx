'use client';

import { useState } from 'react';
import { CalendarRange, Check, Trash2 } from 'lucide-react';
import { useDayColumnMutations } from '@/hooks/useDayColumnMutations';
import { Confirm } from './Confirm';

interface PrePlanControlProps {
    /** 현재 존재하는 day1+ 컬럼 수 (드롭다운 기본값 + 클리어 버튼 노출 판단) */
    currentDayCount: number;
    /** day1+ 컬럼 중 카드가 하나라도 있는지 (클리어 시 확인창 노출 판단) */
    hasItineraryCards: boolean;
    addToast: (message: string, type: 'info' | 'warning') => void;
}

const MAX_NIGHTS = 13; // 0박 ~ 13박
const MAX_DAYS = 14;   // 1일 ~ 14일

/**
 * "미리 일정 만들기" 영역 — 항공편 없이 여행 기간(박/일)을 골라 일차를 생성.
 * flightInfo 가 없을 때만 노출되며(부모 Timeline 이 제어), 항공편 바로 아래에 고정된다.
 *
 * - 박/일 드롭다운 분리 → "3박 5일" 같은 불규칙 일정 지원. 박 변경 시 일을 (박+1)로 자동 채우되 일은 독립 수정.
 * - 반영 시 밸리데이션: 일 ≤ 박(예: 5박 4일)이면 토스트로 막음.
 * - 일차 생성은 "일(day)" 값 기준: applyDayCount(days).
 * - 클리어: 일차에 카드가 있으면 확인창 → 모든 일차 제거(카드는 보관함으로 이동) 후 다시 설정.
 * - 레이아웃 2단(안내 / 컨트롤), 데스크탑에서도 간결·낮은 높이.
 */
export function PrePlanControl({ currentDayCount, hasItineraryCards, addToast }: PrePlanControlProps) {
    const { applyDayCount } = useDayColumnMutations();

    const initialDays = currentDayCount > 0 ? Math.min(currentDayCount, MAX_DAYS) : 3;
    const [days, setDays] = useState(initialDays);
    const [nights, setNights] = useState(Math.max(0, initialDays - 1));
    const [showClearConfirm, setShowClearConfirm] = useState(false);

    const handleNightsChange = (value: number) => {
        setNights(value);
        setDays(Math.min(value + 1, MAX_DAYS)); // 편의: 박+1 자동, 이후 일은 독립 수정 가능
    };

    const handleApply = () => {
        // 밸리데이션: N박이면 최소 N+1일 (일 ≤ 박은 불가능한 일정)
        if (days <= nights) {
            addToast(`${nights}박 ${days}일 일정은 만들 수 없어요. 일수를 박보다 크게 선택하세요.`, 'warning');
            return;
        }
        const moved = applyDayCount(days);
        if (moved && moved > 0) {
            addToast(`일정이 줄어 ${moved}개의 카드가 '확정되지 않은 일정'으로 이동됐어요.`, 'info');
        }
    };

    const runClear = () => {
        const moved = applyDayCount(0); // 모든 day1+ 제거 (카드는 "확정되지 않은 일정"으로 이동)
        setShowClearConfirm(false);
        addToast(moved > 0 ? `일차를 모두 지웠어요. ${moved}개의 카드가 '확정되지 않은 일정'으로 이동됐어요.` : '일차를 모두 지웠어요.', 'info');
    };

    const handleClear = () => {
        if (hasItineraryCards) setShowClearConfirm(true);
        else runClear();
    };

    const nightOptions = Array.from({ length: MAX_NIGHTS + 1 }, (_, i) => i); // 0..13
    const dayOptions = Array.from({ length: MAX_DAYS }, (_, i) => i + 1);      // 1..14

    const selectClass =
        'text-sm border border-gray-200 rounded-lg pl-2.5 pr-1.5 py-1.5 bg-white text-slate-700 ' +
        'focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400';

    return (
        <div className="mb-6">
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-5 rounded-full bg-emerald-500"></span>
                    미리 일정 만들기
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">Plan ahead</span>
            </div>

            {/* 컨트롤 카드 — 2단 (상단 안내 / 하단 컨트롤), 간결·낮은 높이 */}
            <div className="rounded-xl border border-gray-200 shadow-sm bg-white px-3 py-2.5 flex flex-col gap-2">
                {/* 상단: 안내 문구 (간결) */}
                <div className="flex items-center gap-1.5">
                    <CalendarRange className="w-4 h-4 text-emerald-500 shrink-0" />
                    <p className="text-xs text-slate-500 min-w-0">항공편 없이 여행 기간을 골라 일차를 만들어요.</p>
                </div>

                {/* 하단: 박 / 일 선택 + 반영 (+ 클리어) */}
                <div className="flex items-center gap-2 flex-wrap">
                    <label className="flex items-center gap-1">
                        <select
                            value={nights}
                            onChange={(e) => handleNightsChange(Number(e.target.value))}
                            className={selectClass}
                            aria-label="숙박 일수 (박)"
                        >
                            {nightOptions.map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                        <span className="text-sm text-slate-600">박</span>
                    </label>

                    <label className="flex items-center gap-1">
                        <select
                            value={days}
                            onChange={(e) => setDays(Number(e.target.value))}
                            className={selectClass}
                            aria-label="여행 일수 (일)"
                        >
                            {dayOptions.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <span className="text-sm text-slate-600">일</span>
                    </label>

                    <div className="ml-auto flex items-center gap-1.5">
                        {currentDayCount > 0 && (
                            <button
                                onClick={handleClear}
                                className="flex items-center gap-1 px-3 py-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-gray-200 rounded-lg text-sm font-medium transition-colors"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                                클리어
                            </button>
                        )}
                        <button
                            onClick={handleApply}
                            className="flex items-center gap-1 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm shrink-0"
                        >
                            <Check className="w-4 h-4" />
                            반영
                        </button>
                    </div>
                </div>
            </div>

            {/* 클리어 확인창 (일차에 카드가 있을 때만) */}
            {showClearConfirm && (
                <Confirm onConfirm={runClear} onCancel={() => setShowClearConfirm(false)}>
                    일차에 담긴 카드는 '확정되지 않은 일정'으로 이동되고 모든 일차가 삭제됩니다.
                    <br />
                    계속하시겠습니까?
                </Confirm>
            )}
        </div>
    );
}
