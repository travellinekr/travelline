import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// PATCH /api/projects/[projectId]/members/[userId]  — 역할 변경 + owner 위임
// DELETE /api/projects/[projectId]/members/[userId] — 강퇴
//
// 인증: Bearer <Supabase access_token>. 요청자가 해당 projectId 의 owner 여야 함.
// Service Role 클라이언트로 RLS 우회.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

type Role = 'owner' | 'editor' | 'viewer';

async function authorizeOwner(request: NextRequest, projectId: string) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return { error: NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 }) };
    }
    const admin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return { error: NextResponse.json({ error: '로그인이 필요해요.' }, { status: 401 }) };
    }
    const { data: { user }, error: userError } = await admin.auth.getUser(token);
    if (userError || !user) {
        return { error: NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 }) };
    }

    const { data: requester } = await admin
        .from('project_members')
        .select('role')
        .eq('project_id', projectId)
        .eq('user_id', user.id)
        .maybeSingle();

    if (!requester || requester.role !== 'owner') {
        return { error: NextResponse.json({ error: '소유자만 멤버를 관리할 수 있어요.' }, { status: 403 }) };
    }

    return { admin, requesterId: user.id };
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string; userId: string }> },
) {
    const { projectId, userId } = await params;
    const auth = await authorizeOwner(request, projectId);
    if ('error' in auth) return auth.error;
    const { admin, requesterId } = auth;

    let body: { role?: Role };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '요청 본문을 읽을 수 없어요.' }, { status: 400 });
    }
    const newRole = body.role;
    if (newRole !== 'owner' && newRole !== 'editor' && newRole !== 'viewer') {
        return NextResponse.json({ error: 'role 은 owner/editor/viewer 중 하나여야 해요.' }, { status: 400 });
    }

    // 대상 멤버 조회
    const { data: target } = await admin
        .from('project_members')
        .select('role')
        .eq('project_id', projectId)
        .eq('user_id', userId)
        .maybeSingle();

    if (!target) {
        return NextResponse.json({ error: '대상 멤버를 찾을 수 없어요.' }, { status: 404 });
    }

    // 자기 자신은 이 API 로 변경 불가 (owner 위임은 대상만 지정, 요청자는 자동 강등)
    if (userId === requesterId) {
        return NextResponse.json({ error: '자기 자신의 역할은 변경할 수 없어요.' }, { status: 400 });
    }

    // owner 위임 케이스
    if (newRole === 'owner') {
        // 1) 대상 → owner
        const { error: e1 } = await admin
            .from('project_members')
            .update({ role: 'owner' })
            .eq('project_id', projectId)
            .eq('user_id', userId);
        if (e1) {
            console.error('[members PATCH] 대상 owner 승격 실패:', e1.message);
            return NextResponse.json({ error: e1.message }, { status: 500 });
        }
        // 2) 요청자 → editor (실패 시 대상 원복 시도)
        const { error: e2 } = await admin
            .from('project_members')
            .update({ role: 'editor' })
            .eq('project_id', projectId)
            .eq('user_id', requesterId);
        if (e2) {
            console.error('[members PATCH] 요청자 강등 실패, 롤백 시도:', e2.message);
            await admin
                .from('project_members')
                .update({ role: target.role })
                .eq('project_id', projectId)
                .eq('user_id', userId);
            return NextResponse.json({ error: '위임 처리에 실패했어요.' }, { status: 500 });
        }
        return NextResponse.json({ success: true, newRole: 'owner', wasTransfer: true });
    }

    // editor/viewer 변경 케이스
    if (target.role === 'owner') {
        return NextResponse.json({ error: '먼저 소유자를 위임해주세요.' }, { status: 400 });
    }
    const { error } = await admin
        .from('project_members')
        .update({ role: newRole })
        .eq('project_id', projectId)
        .eq('user_id', userId);
    if (error) {
        console.error('[members PATCH] update 실패:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, newRole, wasTransfer: false });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string; userId: string }> },
) {
    const { projectId, userId } = await params;
    const auth = await authorizeOwner(request, projectId);
    if ('error' in auth) return auth.error;
    const { admin, requesterId } = auth;

    if (userId === requesterId) {
        return NextResponse.json({ error: '자기 자신은 내보낼 수 없어요.' }, { status: 400 });
    }

    const { data: target } = await admin
        .from('project_members')
        .select('role')
        .eq('project_id', projectId)
        .eq('user_id', userId)
        .maybeSingle();

    if (!target) {
        return NextResponse.json({ error: '대상 멤버를 찾을 수 없어요.' }, { status: 404 });
    }
    if (target.role === 'owner') {
        return NextResponse.json({ error: '소유자는 내보낼 수 없어요.' }, { status: 400 });
    }

    const { error } = await admin
        .from('project_members')
        .delete()
        .eq('project_id', projectId)
        .eq('user_id', userId);
    if (error) {
        console.error('[members DELETE] 삭제 실패:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
