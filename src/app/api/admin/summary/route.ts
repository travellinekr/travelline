import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';
import { getUserStats, getProjectStats, getStorageStats } from '@/lib/admin/supabaseStats';
import { getLiveblocksStats } from '@/lib/admin/liveblocksStats';
import { getUnsplashStats } from '@/lib/admin/unsplashStats';
import { getCodexStats } from '@/lib/admin/codexStats';
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
    const codex = getCodexStats();

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
            codex: {
                authMode: codex.authMode,
                hasCodexCliAuth: codex.hasCodexCliAuth,
                hasHermesCodexCredential: codex.hasHermesCodexCredential,
                hermesCredentialCount: codex.hermesCredentialCount,
                usageAvailable: codex.usageAvailable,
                localUsage: {
                    today_tokens: codex.hermesUsage.today.total_tokens,
                    last7Days_tokens: codex.hermesUsage.last7Days.total_tokens,
                    month_tokens: codex.hermesUsage.month.total_tokens,
                    daily_limit_tokens: codex.limits.daily.limitTokens,
                    weekly_limit_tokens: codex.limits.weekly.limitTokens,
                    monthly_limit_tokens: codex.limits.monthly.limitTokens,
                    daily_remaining_tokens: codex.limits.daily.remainingTokens,
                    weekly_remaining_tokens: codex.limits.weekly.remainingTokens,
                    monthly_remaining_tokens: codex.limits.monthly.remainingTokens,
                    daily_usage_pct: codex.limits.daily.usagePct,
                    weekly_usage_pct: codex.limits.weekly.usagePct,
                    monthly_usage_pct: codex.limits.monthly.usagePct,
                    lastUsedAt: codex.hermesUsage.lastUsedAt,
                },
                note: codex.usageUnavailableReason,
                lastCheckedAt: codex.checkedAt,
            },
            liveblocks: {
                totalRooms: liveblocksRooms,
                anonymous_connections_monthly_limit: FREE_TIER.liveblocks.anonymous_connections_monthly,
                connections_per_room_limit: FREE_TIER.liveblocks.connections_per_room,
                storage_mb_per_room_limit: FREE_TIER.liveblocks.storage_mb_per_room,
                note: 'Room 수는 무제한. 월 익명 연결·room 당 연결/스토리지 실측은 Liveblocks Dashboard 만 조회 가능',
                lastCheckedAt: liveblocks?.lastCheckedAt ?? null,
            },
        },
    });
}
