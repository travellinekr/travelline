import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// POST /api/projects/[projectId]/trip-start-date
// 클라(CollaborativeApp) 가 Liveblocks flightInfo.outbound.date 변화 감지 시 호출.
// D-1 크론이 이 컬럼으로 대상 프로젝트 선정.
//
// Body: { date: string | null }  — ISO YYYY-MM-DD 또는 null(초기화)
// 인증: Bearer <Supabase 세션 토큰> · project_members 에서 owner/editor 권한 확인

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> },
) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { projectId } = await params;

    try {
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ error: '로그인이 필요해요.' }, { status: 401 });
        }
        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) {
            return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        }

        // owner/editor 권한 확인
        const { data: member } = await supabaseAdmin
            .from('project_members')
            .select('role')
            .eq('project_id', projectId)
            .eq('user_id', user.id)
            .maybeSingle();

        if (!member || (member.role !== 'owner' && member.role !== 'editor')) {
            return NextResponse.json({ error: '권한이 없어요.' }, { status: 403 });
        }

        const body = await request.json();
        const date: unknown = body?.date;

        let tripStartDate: string | null;
        if (date === null || date === undefined) {
            tripStartDate = null;
        } else if (typeof date === 'string' && ISO_DATE_RE.test(date)) {
            tripStartDate = date;
        } else {
            return NextResponse.json({ error: 'date 형식이 잘못됐습니다 (YYYY-MM-DD 또는 null).' }, { status: 400 });
        }

        const { error: updateError } = await supabaseAdmin
            .from('projects')
            .update({ trip_start_date: tripStartDate })
            .eq('id', projectId);

        if (updateError) {
            console.error('[trip-start-date] update 실패:', updateError.message);
            return NextResponse.json({ error: updateError.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, trip_start_date: tripStartDate });
    } catch (err) {
        console.error('[trip-start-date] 예외:', err);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
