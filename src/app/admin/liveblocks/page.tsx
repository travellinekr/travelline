'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';

interface Data {
    stats: { totalRooms: number; lastCheckedAt: number };
    limits: {
        anonymous_connections_monthly: number;
        connections_per_room: number;
        storage_mb_per_room: number;
    };
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

    const secondsAgo = Math.round((Date.now() - data.stats.lastCheckedAt) / 1000);

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <h1 className="text-xl font-semibold text-slate-900">Liveblocks</h1>
            </header>

            {/* 실측 가능한 값 */}
            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">실측</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard
                        label="총 Room 수"
                        value={data.stats.totalRooms.toLocaleString('ko-KR')}
                        sublabel={`REST /v2/rooms · ${secondsAgo}초 전`}
                    />
                </div>
            </section>

            {/* Dashboard 만 조회 가능한 무료 한도 */}
            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">무료 플랜 한도 (실측 불가)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard
                        label="월 익명 연결"
                        value={data.limits.anonymous_connections_monthly.toLocaleString('ko-KR')}
                        sublabel="월별 리셋"
                    />
                    <StatCard
                        label="Room 당 동시 연결"
                        value={data.limits.connections_per_room}
                        sublabel="실시간 상한"
                    />
                    <StatCard
                        label="Room 당 스토리지"
                        value={`${data.limits.storage_mb_per_room} MB`}
                        sublabel="누적"
                    />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· <strong>Room 총 개수는 무제한</strong> 입니다. 위 "총 Room 수" 는 참고용 카운터일 뿐 한도 아님.</div>
                <div>· 월 익명 연결·room 당 연결/스토리지 실측치는 Liveblocks Dashboard 만 조회 가능 (REST 미제공)</div>
                <div>· 총 room 수 집계는 REST `/v2/rooms` 페이지네이션 (최대 2,000 근사)</div>
                <div>· <a href="https://liveblocks.io/dashboard" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">Liveblocks Dashboard ↗</a></div>
            </div>
        </div>
    );
}
