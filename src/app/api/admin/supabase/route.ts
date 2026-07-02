import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { getStorageStats, getUserStats } from '@/lib/admin/supabaseStats';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    if (!(await verifyAdminAccess(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const [storage, users] = await Promise.all([getStorageStats(), getUserStats()]);
    return NextResponse.json({
        storage: storage ?? { photosBucketBytes: 0, photosBucketFileCount: 0 },
        users: users ?? { total: 0, todayNew: 0 },
        limits: FREE_TIER.supabase,
    });
}
