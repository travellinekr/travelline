import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
    const { projectId } = await params;

    try {
        // 1. Liveblocks room 삭제 (Secret Key가 있을 때만)
        const liveblocksSecret = process.env.LIVEBLOCKS_SECRET_KEY;
        if (liveblocksSecret) {
            await fetch(`https://api.liveblocks.io/v2/rooms/${projectId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${liveblocksSecret}` },
            });
        }

        // 2. Supabase에서 프로젝트 삭제 (project_members는 CASCADE로 자동 삭제)
        const { error } = await supabaseAdmin
            .from('projects')
            .delete()
            .eq('id', projectId);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: '삭제 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
