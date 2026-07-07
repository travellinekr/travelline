import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { sendPushToUsers } from '@/lib/server/fcm';

// Service Role로 RLS 우회
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { projectId } = await params;

    try {
        // 현재 로그인된 사용자 확인
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => cookieStore.getAll(),
                    setAll: (cookiesToSet) =>
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        ),
                },
            }
        );

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
        }

        // 프로젝트 존재 확인 + owner_id/name 조회 (푸시 발송용)
        const { data: project } = await supabaseAdmin
            .from('projects')
            .select('id, user_id, name')
            .eq('id', projectId)
            .single();

        if (!project) {
            return NextResponse.json({ error: '존재하지 않는 프로젝트입니다.' }, { status: 404 });
        }

        // 기존 멤버 여부 사전 확인 → 신규 insert 판정 (upsert ignoreDuplicates 에선 판별 불가)
        const { data: existing } = await supabaseAdmin
            .from('project_members')
            .select('user_id')
            .eq('project_id', projectId)
            .eq('user_id', user.id)
            .maybeSingle();

        const isNewMember = !existing;

        if (isNewMember) {
            // viewer 로 신규 등록
            const { error } = await supabaseAdmin
                .from('project_members')
                .insert({ project_id: projectId, user_id: user.id, role: 'viewer' });

            if (error && !error.message.includes('duplicate')) {
                console.error('[join] DB 오류:', error.message);
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
        }

        // 신규 참여 + 오너 아닐 때만 오너에게 푸시 발송 (best-effort · 실패해도 join 성공)
        if (isNewMember && project.user_id && project.user_id !== user.id) {
            const joinerName = user.user_metadata?.full_name || user.email?.split('@')[0] || '새 멤버';
            const projectTitle = project.name || '여행보드';
            sendPushToUsers([project.user_id], {
                title: '새 멤버가 참여했어요',
                body: `${joinerName} 님이 "${projectTitle}" 여행보드에 참여했어요.`,
                data: { projectId, kind: 'member_joined' },
            }).catch((e) => console.warn('[join] push 발송 실패 (무시):', e));
        }

        return NextResponse.json({ success: true, role: 'viewer' });
    } catch (err) {
        console.error('[join] 예외:', err);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
