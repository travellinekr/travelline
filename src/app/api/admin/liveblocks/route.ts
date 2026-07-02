import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { getLiveblocksStats } from '@/lib/admin/liveblocksStats';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    if (!(await verifyAdminAccess(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const stats = await getLiveblocksStats();
    return NextResponse.json({
        stats: stats ?? { totalRooms: 0, lastCheckedAt: Date.now() },
        limits: FREE_TIER.liveblocks,
    });
}
