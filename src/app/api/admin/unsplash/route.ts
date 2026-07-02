import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { getUnsplashStats } from '@/lib/admin/unsplashStats';
import { FREE_TIER } from '@/lib/admin/freeTierLimits';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    if (!(await verifyAdminAccess(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const stats = await getUnsplashStats();
    return NextResponse.json({
        stats: stats ?? null,
        limits: FREE_TIER.unsplash,
    });
}
