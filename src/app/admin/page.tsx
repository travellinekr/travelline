'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';
import { UsageCard } from '@/components/admin/UsageCard';
import { RiskAlert } from '@/components/admin/RiskAlert';
import { LastUpdated } from '@/components/admin/LastUpdated';
import { computeStatus } from '@/lib/admin/freeTierLimits';

interface SummaryData {
    generatedAt: string;
    travelline: {
        users: { total: number; todayNew: number };
        projects: { total: number; activeLast7Days: number; todayNew: number };
        supportedDestinationCities: number;
    };
    apis: {
        supabase: {
            storage: { used_mb: number; limit_mb: number; remainingPct: number; fileCount: number };
            users: { used: number; limit_mau: number; remainingPct: number };
        };
        gemini: { rpm_limit: number; rpd_limit: number };
        unsplash: { used_hourly: number; limit_hourly: number; remaining: number | null; lastCheckedAt: number | null };
        googleMaps: { monthly_credit_usd: number };
        liveblocks: { totalRooms: number; mau_limit: number; connection_limit: number; lastCheckedAt: number | null };
    };
}

export default function AdminMainPage() {
    const { data, error, loading } = useAdminData<SummaryData>('summary');

    if (loading) {
        return <div className="text-sm text-slate-500">불러오는 중...</div>;
    }
    if (error || !data) {
        return (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-sm text-red-800">
                조회 실패: {error || '데이터 없음'}
            </div>
        );
    }

    const t = data.travelline;
    const a = data.apis;
    const generatedAtMs = new Date(data.generatedAt).getTime();

    // 위험 알림 (95%+ 만)
    const risks: Array<{ apiName: string; ratio: number; detail: string }> = [];
    const supStorageRatio = a.supabase.storage.used_mb / a.supabase.storage.limit_mb;
    if (computeStatus(a.supabase.storage.used_mb, a.supabase.storage.limit_mb) === 'danger') {
        risks.push({
            apiName: 'Supabase Storage',
            ratio: supStorageRatio,
            detail: `${a.supabase.storage.used_mb.toFixed(1)}MB / ${a.supabase.storage.limit_mb}MB`,
        });
    }
    if (a.unsplash.limit_hourly > 0 && computeStatus(a.unsplash.used_hourly, a.unsplash.limit_hourly) === 'danger') {
        risks.push({
            apiName: 'Unsplash',
            ratio: a.unsplash.used_hourly / a.unsplash.limit_hourly,
            detail: `시간당 ${a.unsplash.used_hourly}/${a.unsplash.limit_hourly}`,
        });
    }
    if (computeStatus(a.liveblocks.totalRooms, a.liveblocks.mau_limit) === 'danger') {
        risks.push({
            apiName: 'Liveblocks',
            ratio: a.liveblocks.totalRooms / a.liveblocks.mau_limit,
            detail: `${a.liveblocks.totalRooms} rooms`,
        });
    }

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-900">개요</h1>
                <LastUpdated timestamp={generatedAtMs} />
            </header>

            <RiskAlert items={risks} />

            {/* Travelline 현황 */}
            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">Travelline 현황</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard
                        label="사용자"
                        value={t.users.total.toLocaleString('ko-KR')}
                        trend={t.users.todayNew > 0 ? { direction: 'up', amount: `${t.users.todayNew} 오늘` } : undefined}
                        sublabel="전체 가입자"
                    />
                    <StatCard
                        label="여행계획"
                        value={t.projects.total.toLocaleString('ko-KR')}
                        trend={t.projects.todayNew > 0 ? { direction: 'up', amount: `${t.projects.todayNew} 오늘` } : undefined}
                        sublabel={`최근 7일 활성 ${t.projects.activeLast7Days}`}
                    />
                    <StatCard
                        label="지원 여행도시"
                        value={t.supportedDestinationCities.toLocaleString('ko-KR')}
                        sublabel="destinations.ts 기준"
                    />
                </div>
            </section>

            {/* API 사용 현황 */}
            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">API 사용 현황</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <UsageCard
                        apiName="Supabase Storage"
                        used={Math.round(a.supabase.storage.used_mb * 10) / 10}
                        limit={a.supabase.storage.limit_mb}
                        unit="MB"
                        detailHref="/admin/supabase"
                        note={`파일 ${a.supabase.storage.fileCount}개`}
                    />
                    <UsageCard
                        apiName="Gemini (일)"
                        used={0}
                        limit={a.gemini.rpd_limit}
                        unit="req/day"
                        detailHref="/admin/gemini"
                        note="실시간 조회 불가 · 한도 표시"
                        forcedStatus="normal"
                    />
                    <UsageCard
                        apiName="Unsplash (시간)"
                        used={a.unsplash.used_hourly}
                        limit={a.unsplash.limit_hourly}
                        unit="req/hr"
                        detailHref="/admin/unsplash"
                        lastCheckedAt={a.unsplash.lastCheckedAt ?? undefined}
                    />
                    <UsageCard
                        apiName="Google Maps"
                        used={0}
                        limit={a.googleMaps.monthly_credit_usd}
                        unit="USD/월"
                        detailHref="/admin/google-maps"
                        note="$200 무료 크레딧 · Console 조회"
                        forcedStatus="normal"
                    />
                    <UsageCard
                        apiName="Liveblocks Rooms"
                        used={a.liveblocks.totalRooms}
                        limit={a.liveblocks.mau_limit}
                        unit="rooms"
                        detailHref="/admin/liveblocks"
                        note={`MAU 한도 ${a.liveblocks.mau_limit}`}
                        lastCheckedAt={a.liveblocks.lastCheckedAt ?? undefined}
                    />
                </div>
            </section>
        </div>
    );
}
