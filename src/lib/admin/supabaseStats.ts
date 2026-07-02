import { getSupabaseAdmin } from './supabaseAdmin';

// Supabase 관련 실시간 통계 수집. 조회 실패 시 null 반환.

export interface UserStats {
    total: number;
    todayNew: number;
}

export interface ProjectStats {
    total: number;
    activeLast7Days: number;
    todayNew: number;
}

export interface StorageStats {
    photosBucketBytes: number;
    photosBucketFileCount: number;
}

export async function getUserStats(): Promise<UserStats | null> {
    const admin = getSupabaseAdmin();
    if (!admin) return null;
    try {
        // 첫 페이지만 → total 획득
        const { data, error } = await admin.auth.admin.listUsers({ perPage: 1000, page: 1 });
        if (error) throw error;
        const total = data?.users?.length ?? 0;
        // 오늘 신규: 오늘 00:00 이후 created_at
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayNew = (data?.users ?? []).filter(u => {
            if (!u.created_at) return false;
            return new Date(u.created_at).getTime() >= todayStart.getTime();
        }).length;
        return { total, todayNew };
    } catch (err) {
        console.error('[admin/supabaseStats] getUserStats error:', err);
        return null;
    }
}

export async function getProjectStats(): Promise<ProjectStats | null> {
    const admin = getSupabaseAdmin();
    if (!admin) return null;
    try {
        const [totalRes, activeRes, todayRes] = await Promise.all([
            admin.from('projects').select('id', { count: 'exact', head: true }),
            admin.from('projects').select('id', { count: 'exact', head: true })
                .gte('updated_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
            admin.from('projects').select('id', { count: 'exact', head: true })
                .gte('created_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
        ]);
        return {
            total: totalRes.count ?? 0,
            activeLast7Days: activeRes.count ?? 0,
            todayNew: todayRes.count ?? 0,
        };
    } catch (err) {
        console.error('[admin/supabaseStats] getProjectStats error:', err);
        return null;
    }
}

// card-photos 버킷 크기 (재귀 스캔).
// 프로젝트/카드 폴더 계층이라 3단계 순회. 파일 수가 많아지면 시간이 걸림 → 대시보드 조회 시만.
export async function getStorageStats(): Promise<StorageStats | null> {
    const admin = getSupabaseAdmin();
    if (!admin) return null;
    try {
        let totalBytes = 0;
        let fileCount = 0;

        const walk = async (prefix: string): Promise<void> => {
            const { data, error } = await admin.storage.from('card-photos').list(prefix, {
                limit: 1000,
                sortBy: { column: 'name', order: 'asc' },
            });
            if (error || !data) return;
            for (const item of data) {
                // metadata 가 있는 항목은 파일, 없으면 폴더로 취급
                const isFile = !!item.metadata;
                if (isFile) {
                    const size = (item.metadata as any)?.size ?? 0;
                    totalBytes += size;
                    fileCount += 1;
                } else {
                    const nextPrefix = prefix ? `${prefix}/${item.name}` : item.name;
                    await walk(nextPrefix);
                }
            }
        };
        await walk('');
        return { photosBucketBytes: totalBytes, photosBucketFileCount: fileCount };
    } catch (err) {
        console.error('[admin/supabaseStats] getStorageStats error:', err);
        return null;
    }
}
