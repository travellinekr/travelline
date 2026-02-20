import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// Service Role로 RLS 우회
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
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

        // 프로젝트 존재 여부 확인
        const { data: project } = await supabaseAdmin
            .from('projects')
            .select('id')
            .eq('id', projectId)
            .single();

        if (!project) {
            return NextResponse.json({ error: '존재하지 않는 프로젝트입니다.' }, { status: 404 });
        }

        // viewer로 등록 (이미 등록된 경우 무시 - UNIQUE 제약 활용)
        const { error } = await supabaseAdmin
            .from('project_members')
            .upsert(
                {
                    project_id: projectId,
                    user_id: user.id,
                    role: 'viewer',
                },
                { onConflict: 'project_id,user_id', ignoreDuplicates: true }
            );

        if (error && !error.message.includes('duplicate')) {
            console.error('[join] DB 오류:', error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, role: 'viewer' });
    } catch (err) {
        console.error('[join] 예외:', err);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
