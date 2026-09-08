import { NextRequest, NextResponse } from 'next/server';
import { authenticateRequest } from '@/lib/server/projectAuth';

// PATCH /api/projects/[projectId]/members/me — 이 보드에서 쓰는 내 별칭 변경
//
// 별칭은 보드마다 따로 둔다(project_members.display_name).
// 같은 사람이 회사 보드에서는 실명, 친구 보드에서는 별명을 쓸 수 있다.
//
// 권한: 자기 것만 바꾼다. 남의 별칭을 바꿀 수 있으면 안 되므로
//       userId 를 파라미터로 받지 않고 토큰에서만 꺼낸다.
//       viewer 도 자기 이름은 바꿀 수 있어야 하므로 역할은 따지지 않는다.
//
//       멤버 확인을 위해 project_members 를 따로 조회하지 않는다.
//       update 자체가 (project_id, user_id) 로 걸려 있어 멤버가 아니면 0 행이 되고,
//       아래에서 403 으로 돌려준다. 즉 조회가 하던 판정을 update 가 이미 한다.
//       Supabase 왕복이 건당 250ms 대라, 한 단계를 줄이면 체감이 그만큼 빨라진다.

const MAX_LEN = 20;

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> },
) {
    const { projectId } = await params;

    const auth = await authenticateRequest(request);
    if (auth instanceof NextResponse) return auth;
    const { admin, userId } = auth;

    let body: any;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
    }

    const raw = typeof body?.display_name === 'string' ? body.display_name.trim() : '';

    // 빈 값은 "계정 이름으로 되돌리기" 로 취급해 NULL 을 넣는다.
    // 빈 문자열을 그대로 저장하면 화면에 이름이 사라진 것처럼 보인다.
    const value = raw === '' ? null : raw;

    if (value !== null && value.length > MAX_LEN) {
        return NextResponse.json(
            { error: `별칭은 ${MAX_LEN}자까지 쓸 수 있어요.` },
            { status: 400 },
        );
    }

    const { data, error } = await admin
        .from('project_members')
        .update({ display_name: value })
        .eq('project_id', projectId)
        .eq('user_id', userId)
        .select('display_name')
        .maybeSingle();

    if (error) {
        console.error('[members/me PATCH] 오류:', error.message);
        return NextResponse.json({ error: '별칭을 저장하지 못했어요.' }, { status: 500 });
    }
    if (!data) {
        return NextResponse.json({ error: '이 보드의 멤버가 아니에요.' }, { status: 403 });
    }

    return NextResponse.json({ display_name: data.display_name });
}
