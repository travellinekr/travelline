import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';

// DELETE /api/projects/[projectId] — 여행 계획 삭제 (소유자 전용)
//
// ⚠️ 이전에는 인증이 전혀 없었다. service role 로 동작하는 라우트라
//    projects_delete RLS 정책(auth.uid() = user_id)이 통째로 우회됐고,
//    메인화면 목록에는 초대받은 남의 보드도 함께 뜨는데 카드 메뉴에 삭제 버튼이
//    조건 없이 그려져서, 뷰어가 남의 보드를 지울 수 있었다.
//
// 소유자가 삭제를 누르면 두 가지로 갈린다.
//   편집 권한(editor) 멤버가 있으면 → 가장 먼저 합류한 editor 에게 소유권을 넘기고
//                                    본인만 빠진다. 보드와 Liveblocks 룸은 그대로 남는다.
//   뷰어만 있거나 아무도 없으면     → 보드를 실제로 삭제한다(멤버·경비 등은 CASCADE).
//
// 소유권을 넘길 때는 project_members.role 과 projects.user_id 를 **둘 다** 갱신한다.
// 둘이 어긋나면 메인화면 목록 쿼리(user_id 갈래 + members 갈래) 어디에도 안 잡혀
// 새 소유자의 목록에서 보드가 사라진다.

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
    const { projectId } = await params;

    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;
    if (access.role !== 'owner') {
        return NextResponse.json({ error: '소유자만 여행 계획을 삭제할 수 있어요.' }, { status: 403 });
    }
    const { admin, userId } = access;

    // 나를 뺀 멤버. 먼저 합류한 순서대로 본다.
    const { data: others, error: membersError } = await admin
        .from('project_members')
        .select('user_id, role, created_at')
        .eq('project_id', projectId)
        .neq('user_id', userId)
        .order('created_at', { ascending: true });

    if (membersError) {
        console.error('[projects] DELETE 멤버 조회 실패:', membersError.message);
        return NextResponse.json({ error: '멤버를 확인하지 못했어요.' }, { status: 500 });
    }

    const heir = (others ?? []).find((m) => m.role === 'editor');

    // ── 위임 경로 ──────────────────────────────────────────
    if (heir) {
        const { error: promoteError } = await admin
            .from('project_members')
            .update({ role: 'owner' })
            .eq('project_id', projectId)
            .eq('user_id', heir.user_id);
        if (promoteError) {
            console.error('[projects] 소유권 위임(승격) 실패:', promoteError.message);
            return NextResponse.json({ error: '소유권을 넘기지 못했어요.' }, { status: 500 });
        }

        const { error: ownerError } = await admin
            .from('projects')
            .update({ user_id: heir.user_id })
            .eq('id', projectId);
        if (ownerError) {
            // 승격만 된 채로 두면 오너가 둘이 된다 → 원복
            await admin
                .from('project_members')
                .update({ role: 'editor' })
                .eq('project_id', projectId)
                .eq('user_id', heir.user_id);
            console.error('[projects] 소유권 위임(user_id) 실패:', ownerError.message);
            return NextResponse.json({ error: '소유권을 넘기지 못했어요.' }, { status: 500 });
        }

        // 떠나는 소유자를 멤버에서 제거. 실패해도 위임 자체는 끝난 상태라
        // 로그만 남기고 성공으로 응답한다(멤버 관리 화면에서 정리 가능).
        const { error: leaveError } = await admin
            .from('project_members')
            .delete()
            .eq('project_id', projectId)
            .eq('user_id', userId);
        if (leaveError) console.error('[projects] 이전 소유자 제거 실패:', leaveError.message);

        const { data: { user: newOwner } } = await admin.auth.admin.getUserById(heir.user_id);
        return NextResponse.json({
            transferred: true,
            newOwner: {
                userId: heir.user_id,
                name: newOwner?.user_metadata?.full_name || newOwner?.email?.split('@')[0] || '멤버',
            },
        });
    }

    // ── 실제 삭제 경로 ─────────────────────────────────────
    try {
        // Liveblocks room 삭제 (Secret Key가 있을 때만)
        const liveblocksSecret = process.env.LIVEBLOCKS_SECRET_KEY;
        if (liveblocksSecret) {
            await fetch(`https://api.liveblocks.io/v2/rooms/${projectId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${liveblocksSecret}` },
            });
        }

        // project_members · trip_* 는 FK CASCADE 로 함께 정리된다
        const { error } = await admin.from('projects').delete().eq('id', projectId);
        if (error) {
            console.error('[projects] DELETE 실패:', error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ deleted: true });
    } catch {
        return NextResponse.json({ error: '삭제 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
