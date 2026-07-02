'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';
import { UsageCard } from '@/components/admin/UsageCard';

interface Data {
    stats: { totalRooms: number; lastCheckedAt: number };
    limits: { mau: number; connections: number };
}

export default function LiveblocksPage() {
    const { data, error, loading } = useAdminData<Data>('liveblocks');

    if (loading) return <div className="text-sm text-slate-500">불러오는 중...</div>;
    if (error || !data) {
        return (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-sm text-red-800">
                조회 실패: {error || '데이터 없음'}
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <h1 className="text-xl font-semibold text-slate-900">Liveblocks</h1>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">사용량</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UsageCard
                        apiName="Rooms"
                        used={data.stats.totalRooms}
                        limit={data.limits.mau}
                        unit="rooms"
                        detailHref="/admin/liveblocks"
                        note="room 1개 ≈ 1 여행보드"
                        lastCheckedAt={data.stats.lastCheckedAt}
                    />
                    <StatCard
                        label="동시 연결 한도"
                        value={data.limits.connections}
                        sublabel="Starter 무료 플랜"
                    />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· MAU 실측값은 Liveblocks Dashboard 에서만 조회 (REST 미제공)</div>
                <div>· 총 room 수 = REST `/v2/rooms` pagination 합계 (최대 2000 근사)</div>
                <div>· Starter 무료: MAU {data.limits.mau} / 동시 연결 {data.limits.connections} / 스토리지 1MB per room</div>
                <div>· <a href="https://liveblocks.io/dashboard" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">Liveblocks Dashboard ↗</a></div>
            </div>
        </div>
    );
}
