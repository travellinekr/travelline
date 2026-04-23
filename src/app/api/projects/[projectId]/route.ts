import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// createClient를 모듈 최상위에서 호출하지 않음
// → 빌드 타임에 환경변수가 없어도 오류가 발생하지 않도록 함수 내부에서 생성
function getSupabaseAdmin() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        throw new Error('환경 변수가 설정되지 않았습니다. Vercel 환경변수를 확인해주세요.');
    }
    return createClient(supabaseUrl, supabaseServiceRoleKey);
}

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
        const supabaseAdmin = getSupabaseAdmin();
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
