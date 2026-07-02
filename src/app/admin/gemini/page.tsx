'use client';

import { StatCard } from '@/components/admin/StatCard';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';

// Gemini 는 실시간 사용량 조회 API 가 공개돼 있지 않음.
// 사용자 API 키 사용량은 Google AI Studio 또는 Google Cloud Console 에서만 조회.
// 여기서는 한도 안내 + 사용처(월별 여행지 추천 카드) 안내만.

export default function GeminiPage() {
    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h1 className="text-xl font-semibold text-slate-900">Gemini</h1>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">무료 한도 (gemini-2.0-flash)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard label="분당 요청" value={FREE_TIER.gemini.rpm} sublabel="Requests / minute" />
                    <StatCard label="일별 요청" value={FREE_TIER.gemini.rpd.toLocaleString('ko-KR')} sublabel="Requests / day" />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· 실시간 사용량은 Google AI Studio 또는 Google Cloud Console 에서만 조회 (프로그래밍 인터페이스 없음)</div>
                <div>· 현재 사용처: `/api/recommend` — 월별 여행지 추천 카드</div>
                <div>· 유료 전환 시 요금: <a href="https://ai.google.dev/pricing" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Gemini 가격 표 ↗</a></div>
                <div>· <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google AI Studio ↗</a></div>
            </div>
        </div>
    );
}
