'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';
import { UsageCard } from '@/components/admin/UsageCard';

interface Data {
    stats: { limit: number; remaining: number; lastCheckedAt: number } | null;
    limits: { hourly: number };
}

export default function UnsplashPage() {
    const { data, error, loading } = useAdminData<Data>('unsplash');

    if (loading) return <div className="text-sm text-slate-500">불러오는 중...</div>;
    if (error || !data) {
        return (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-sm text-red-800">
                조회 실패: {error || '데이터 없음'}
            </div>
        );
    }

    const limit = data.stats?.limit ?? data.limits.hourly;
    const remaining = data.stats?.remaining ?? limit;
    const used = Math.max(0, limit - remaining);

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                <h1 className="text-xl font-semibold text-slate-900">Unsplash</h1>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">시간당 한도</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UsageCard
                        apiName="Unsplash API"
                        used={used}
                        limit={limit}
                        unit="req/hr"
                        detailHref="/admin/unsplash"
                        lastCheckedAt={data.stats?.lastCheckedAt ?? undefined}
                    />
                    <StatCard label="잔여 요청" value={remaining} sublabel="현재 시간대" />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· 시간 단위로 잔여량이 리셋됩니다.</div>
                <div>· Developer plan 무료 한도: 시간당 50 requests. Production 승인 시 5,000/hr.</div>
                <div>· 응답 헤더 `X-Ratelimit-Limit`, `X-Ratelimit-Remaining` 기반. 60초 in-memory 캐시.</div>
                <div>· <a href="https://unsplash.com/oauth/applications" target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">Unsplash Applications ↗</a></div>
            </div>
        </div>
    );
}
