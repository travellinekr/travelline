'use client';

import { StatCard } from '@/components/admin/StatCard';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';

// Google Maps Platform: 월 $200 무료 크레딧 (모든 API 공통).
// 실시간 사용량은 Google Cloud Console → Billing → Cost Table 에서만 조회.

export default function GoogleMapsPage() {
    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <h1 className="text-xl font-semibold text-slate-900">Google Maps</h1>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">월 무료 크레딧</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard
                        label="Monthly Credit"
                        value={`$${FREE_TIER.googleMaps.monthly_credit_usd}`}
                        sublabel="Maps / Places / Routes 공통"
                    />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· 실시간 사용량·비용은 Google Cloud Console 에서 조회</div>
                <div>· 현재 사용처: 여행보드 지도 렌더, /api/places/search, /api/places/nearby</div>
                <div>· 주요 요금 (참고): Static Map 무료 (2 requests/session), Dynamic Map $7/1000, Places Autocomplete $17/1000</div>
                <div>· <a href="https://console.cloud.google.com/billing" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Google Cloud Billing ↗</a></div>
            </div>
        </div>
    );
}
