import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Bearer 토큰 검증만 하는 최소 게이트.
//
// 프로젝트 권한(role)까지 볼 필요가 없고 "로그인했는가"만 물으면 되는 라우트용이다.
// verifyProjectAccess 는 projects/project_members 를 더 조회하므로, 프로젝트와
// 무관한 라우트(외부 API 프록시 등)에는 왕복이 낭비다.
//
// 왜 필요한가: 외부 유료 API 를 대신 불러주는 라우트가 열려 있으면, 주소를 아는
// 누구나 우리 키로 구글·제미나이를 부를 수 있다. UI 에서 버튼을 가려도 주소로
// 직접 부르면 그만이라, 돈이 나가는 경로는 서버에서 막아야 한다.

/**
 * Authorization: Bearer <Supabase 세션 토큰> 을 검증해 userId 를 돌려준다.
 * 실패하면 그대로 반환할 NextResponse.
 *
 * @param message 토큰이 없을 때 보여줄 안내. 라우트마다 문구가 달라야 사용자가 무엇을 하려다 막혔는지 안다.
 */
export async function requireUser(
    request: Request,
    message = '로그인 후 이용할 수 있어요.',
): Promise<{ userId: string } | NextResponse> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return NextResponse.json({ error: message }, { status: 401 });
    }

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const { data: { user }, error } = await admin.auth.getUser(token);
    if (error || !user) {
        return NextResponse.json({ error: '로그인이 만료됐어요. 다시 로그인해주세요.' }, { status: 401 });
    }

    return { userId: user.id };
}
