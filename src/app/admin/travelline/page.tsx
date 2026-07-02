'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';

interface Data {
    users: { total: number; todayNew: number };
    projects: { total: number; activeLast7Days: number; todayNew: number };
    supportedDestinationCities: number;
}

export default function TravellinePage() {
    const { data, error, loading } = useAdminData<Data>('travelline');

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
            <h1 className="text-xl font-semibold text-slate-900">Travelline 현황</h1>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">사용자</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard
                        label="전체 가입자"
                        value={data.users.total.toLocaleString('ko-KR')}
                        sublabel="Supabase auth.users"
                    />
                    <StatCard
                        label="오늘 신규"
                        value={data.users.todayNew.toLocaleString('ko-KR')}
                        trend={data.users.todayNew > 0 ? { direction: 'up', amount: `+${data.users.todayNew}` } : undefined}
                    />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">여행계획</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard
                        label="전체 여행"
                        value={data.projects.total.toLocaleString('ko-KR')}
                        sublabel="projects 테이블"
                    />
                    <StatCard
                        label="최근 7일 활성"
                        value={data.projects.activeLast7Days.toLocaleString('ko-KR')}
                        sublabel="updated_at 기준"
                    />
                    <StatCard
                        label="오늘 생성"
                        value={data.projects.todayNew.toLocaleString('ko-KR')}
                        trend={data.projects.todayNew > 0 ? { direction: 'up', amount: `+${data.projects.todayNew}` } : undefined}
                    />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">여행지</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard
                        label="지원 도시 수"
                        value={data.supportedDestinationCities.toLocaleString('ko-KR')}
                        sublabel="destinations.ts 정적 데이터"
                    />
                </div>
            </section>
        </div>
    );
}
