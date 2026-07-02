import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';
import { getUserStats, getProjectStats, getStorageStats } from '@/lib/admin/supabaseStats';
import { getLiveblocksStats } from '@/lib/admin/liveblocksStats';
import { getUnsplashStats } from '@/lib/admin/unsplashStats';
import { getSupportedDestinationCityCount } from '@/lib/admin/travellineStats';

// AI 브리핑용 통합 엔드포인트.
// Authorization: Bearer <ADMIN_API_TOKEN> 필수.
// 응답: flat JSON + 각 값에 unit/limit/remainingPct → LLM 이 자연어 브리핑 생성 용이.

export const dynamic = 'force-dynamic'; // 매 호출마다 fresh

export async function GET(request: NextRequest) {
    const access = await verifyAdminAccess(request);
    if (!access) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [users, projects, storage, liveblocks, unsplash] = await Promise.all([
        getUserStats(),
        getProjectStats(),
        getStorageStats(),
        getLiveblocksStats(),
        getUnsplashStats(),
    ]);

    const storageBytes = storage?.photosBucketBytes ?? 0;
    const storageMB = storageBytes / (1024 * 1024);
    const storageLimitMB = FREE_TIER.supabase.storage_gb * 1024;

    const unsplashUsed = unsplash ? unsplash.limit - unsplash.remaining : 0;
    const unsplashLimit = unsplash?.limit ?? FREE_TIER.unsplash.hourly;

    const liveblocksRooms = liveblocks?.totalRooms ?? 0;

    return NextResponse.json({
        generatedAt: new Date().toISOString(),
        travelline: {
            users: users ?? { total: 0, todayNew: 0 },
            projects: projects ?? { total: 0, activeLast7Days: 0, todayNew: 0 },
            supportedDestinationCities: getSupportedDestinationCityCount(),
        },
        apis: {
            supabase: {
                storage: {
                    used_mb: Math.round(storageMB * 100) / 100,
                    limit_mb: storageLimitMB,
                    remainingPct: Math.max(0, 100 - (storageMB / storageLimitMB) * 100),
                    fileCount: storage?.photosBucketFileCount ?? 0,
                },
                users: {
                    used: users?.total ?? 0,
                    limit_mau: FREE_TIER.supabase.mau,
                    remainingPct: Math.max(0, 100 - ((users?.total ?? 0) / FREE_TIER.supabase.mau) * 100),
                },
                note: 'DB size, egress 는 Supabase Dashboard 에서만 조회 가능',
            },
            gemini: {
                rpm_limit: FREE_TIER.gemini.rpm,
                rpd_limit: FREE_TIER.gemini.rpd,
                note: '실시간 사용량은 Google Cloud Console 에서 조회 (Metric API 미제공)',
            },
            unsplash: {
                used_hourly: unsplashUsed,
                limit_hourly: unsplashLimit,
                remaining: unsplash?.remaining ?? null,
                remainingPct: unsplashLimit > 0 ? ((unsplash?.remaining ?? 0) / unsplashLimit) * 100 : 0,
                lastCheckedAt: unsplash?.lastCheckedAt ?? null,
            },
            googleMaps: {
                monthly_credit_usd: FREE_TIER.googleMaps.monthly_credit_usd,
                note: '월 $200 크레딧, 실시간 사용량은 Google Cloud Console 참조',
            },
            liveblocks: {
                totalRooms: liveblocksRooms,
                mau_limit: FREE_TIER.liveblocks.mau,
                connection_limit: FREE_TIER.liveblocks.connections,
                note: 'MAU 실측값은 Liveblocks Dashboard 에서만 조회',
                lastCheckedAt: liveblocks?.lastCheckedAt ?? null,
            },
        },
    });
}
