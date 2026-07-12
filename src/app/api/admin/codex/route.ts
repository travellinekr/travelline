import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAccess } from '@/lib/admin/auth';
import { getCodexStats } from '@/lib/admin/codexStats';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    if (!(await verifyAdminAccess(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({
        stats: getCodexStats(),
        links: {
            chatgptPlan: 'https://chatgpt.com/#settings/Subscription',
            openaiUsage: 'https://platform.openai.com/usage',
            codexDocs: 'https://developers.openai.com/codex',
        },
    });
}
