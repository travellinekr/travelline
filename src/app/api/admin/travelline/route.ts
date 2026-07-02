import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { getUserStats, getProjectStats } from '@/lib/admin/supabaseStats';
import { getSupportedDestinationCityCount } from '@/lib/admin/travellineStats';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    if (!(await verifyAdminAccess(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const [users, projects] = await Promise.all([getUserStats(), getProjectStats()]);
    return NextResponse.json({
        users: users ?? { total: 0, todayNew: 0 },
        projects: projects ?? { total: 0, activeLast7Days: 0, todayNew: 0 },
        supportedDestinationCities: getSupportedDestinationCityCount(),
    });
}
