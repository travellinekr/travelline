import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';

// GET /api/projects/[projectId]/members — 보드 멤버 목록
//
// ⚠️ 이전에는 인증이 없어서 projectId 만 알면 누구나 멤버 이메일을 긁어갈 수 있었다.
//    projects 테이블은 anon 으로도 전부 조회되므로 id 확보도 어렵지 않았다.
//
// 두 겹으로 막는다.
//   ① 멤버(viewer 포함)만 조회 가능
//   ② 이메일은 소유자에게만 내려준다
//
// ②가 필요한 이유: 공유 링크로 들어온 로그인 사용자는 liveblocks-auth 에서 viewer 로
// 자동 등록된다. 즉 링크만 받으면 멤버가 되므로, ①만으로는 이메일이 사실상 공개다.
// 이메일이 실제로 필요한 쪽은 권한 변경·내보내기를 하는 소유자뿐이다.
// (UserAvatarMenu 는 email 이 비면 그 줄을 렌더하지 않으므로 화면 수정이 필요 없다)

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> }
) {
    const { projectId } = await params;

    const access = await verifyProjectAccess(request, projectId, 'read');
    if (isAccessError(access)) return access;
    const { admin, role } = access;
    const canSeeEmail = role === 'owner';

    try {
        const { data: members, error: membersError } = await admin
            .from('project_members')
            .select('user_id, role')
            .eq('project_id', projectId);

        if (membersError || !members) {
            return NextResponse.json({ error: membersError?.message }, { status: 500 });
        }

        // 각 user_id 에 대해 auth.users 에서 표시용 정보 조회
        const enriched = await Promise.all(
            members.map(async (m) => {
                const { data: { user } } = await admin.auth.admin.getUserById(m.user_id);
                return {
                    user_id: m.user_id,
                    role: m.role,
                    name: user?.user_metadata?.full_name || user?.email?.split('@')[0] || '사용자',
                    email: canSeeEmail ? (user?.email || '') : '',
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
