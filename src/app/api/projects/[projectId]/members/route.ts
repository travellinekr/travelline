import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Service Role로 auth.users 접근
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
    const { projectId } = await params;

    try {
        // 1. project_members 조회
        const { data: members, error: membersError } = await supabaseAdmin
            .from('project_members')
            .select('user_id, role')
            .eq('project_id', projectId);

        if (membersError || !members) {
            return NextResponse.json({ error: membersError?.message }, { status: 500 });
        }

        // 2. 각 user_id에 대해 auth.users에서 이름/이메일 조회
        const enriched = await Promise.all(
            members.map(async (m) => {
                const { data: { user } } = await supabaseAdmin.auth.admin.getUserById(m.user_id);
                return {
                    user_id: m.user_id,
                    role: m.role,
                    name: user?.user_metadata?.full_name || user?.email?.split('@')[0] || '사용자',
                    email: user?.email || '',
                    avatar: user?.user_metadata?.avatar_url || '',
                };
            })
        );

        return NextResponse.json({ members: enriched });
    } catch (err) {
        console.error('[members API] 오류:', err);
        return NextResponse.json({ error: '서버 오류' }, { status: 500 });
    }
}
