'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';
import { UsageCard } from '@/components/admin/UsageCard';

interface Data {
    storage: { photosBucketBytes: number; photosBucketFileCount: number };
    users: { total: number; todayNew: number };
    limits: { db_mb: number; storage_gb: number; mau: number; egress_gb: number };
}

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export default function SupabasePage() {
    const { data, error, loading } = useAdminData<Data>('supabase');

    if (loading) return <div className="text-sm text-slate-500">불러오는 중...</div>;
    if (error || !data) {
        return (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-sm text-red-800">
                조회 실패: {error || '데이터 없음'}
            </div>
        );
    }

    const storageMB = data.storage.photosBucketBytes / (1024 * 1024);
    const storageLimitMB = data.limits.storage_gb * 1024;

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h1 className="text-xl font-semibold text-slate-900">Supabase</h1>
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">사용량</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UsageCard
                        apiName="Storage (card-photos)"
                        used={Math.round(storageMB * 10) / 10}
                        limit={storageLimitMB}
                        unit="MB"
                        detailHref="/admin/supabase"
                        note={`파일 ${data.storage.photosBucketFileCount.toLocaleString('ko-KR')}개`}
                    />
                    <UsageCard
                        apiName="MAU (auth.users)"
                        used={data.users.total}
                        limit={data.limits.mau}
                        unit="users"
                        detailHref="/admin/supabase"
                    />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">상세</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard label="Storage 사용" value={formatBytes(data.storage.photosBucketBytes)} sublabel="원본 + 썸네일 합계" />
                    <StatCard label="Storage 파일 수" value={data.storage.photosBucketFileCount.toLocaleString('ko-KR')} />
                    <StatCard label="전체 사용자" value={data.users.total.toLocaleString('ko-KR')} />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">참고</div>
                <div>· DB size, Egress 는 Supabase Dashboard 에서만 조회 가능 (Management API 없음)</div>
                <div>· 무료 한도: DB {data.limits.db_mb}MB · Storage {data.limits.storage_gb}GB · MAU {data.limits.mau.toLocaleString('ko-KR')} · Egress {data.limits.egress_gb}GB/월</div>
                <div>
                    · <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">Supabase Dashboard 열기 ↗</a>
                </div>
            </div>
        </div>
    );
}
