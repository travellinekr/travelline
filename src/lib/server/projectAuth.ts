import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * 프로젝트 종속 API 라우트의 공통 인증·권한 검사.
 *
 * 기존 라우트(trip-start-date, join)와 동일한 방식:
 *   Bearer <Supabase 세션 토큰> → getUser → project_members 조회 → service role 로 실제 쿼리
 *
 * RLS 는 클라이언트 직접 접근에 대한 2차 방어선으로 남겨 두고,
 * 서버는 service role 로 동작하므로 여기서 권한을 반드시 확인해야 한다.
 *
 * need:
 *   'read'  — 프로젝트 소유자 또는 멤버 전원(viewer 포함)
 *   'write' — 프로젝트 소유자 또는 owner/editor 멤버
 */
export type AccessNeed = 'read' | 'write';

export interface ProjectAccess {
    admin: SupabaseClient;
    userId: string;
    role: 'owner' | 'editor' | 'viewer';
}

/**
 * 토큰 검증까지만 수행 (권한 조회는 하지 않음).
 *
 * verifyProjectAccess 는 getUser → 권한 조회 → 라우트의 데이터 조회 순으로 세 번을 이어
 * 기다린다. Supabase 왕복이 건당 250ms 대라 단계가 곧 지연이 된다. 조회량이 많은
 * 라우트는 이 함수로 토큰만 먼저 확인한 뒤, 권한 조회와 데이터 조회를 한 번에
 * 병렬로 던지고 응답을 받은 다음 resolveProjectRole 로 권한을 판정하면 한 단계를 줄일 수 있다.
 *
 * 데이터를 권한 확인 전에 읽지만 전부 서버 안에서만 돌고, 권한이 없으면 그대로 버리고
 * 403 을 반환하므로 밖으로 나가지 않는다.
 *
 * ⚠️ verifyProjectAccess 는 다른 라우트들이 그대로 쓰고 있으므로 건드리지 않았다.
 *    두 경로의 오류 메시지·상태코드는 동일하게 유지할 것.
 */
export async function authenticateRequest(
    request: NextRequest,
): Promise<{ admin: SupabaseClient; userId: string } | NextResponse> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const admin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return NextResponse.json({ error: '로그인이 필요해요.' }, { status: 401 });
    }

    const { data: { user }, error: userError } = await admin.auth.getUser(token);
    if (userError || !user) {
        return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
    }

    return { admin, userId: user.id };
}

/**
 * 권한 판정 — verifyProjectAccess 내부와 같은 규칙.
 * 프로젝트 소유자는 project_members 에 없을 수도 있으므로 projects.user_id 도 본다.
 */
export function resolveProjectRole(
    projectUserId: string | null | undefined,
    memberRole: string | null | undefined,
    userId: string,
): ProjectAccess['role'] | undefined {
    const isOwner = projectUserId === userId;
    return (isOwner ? 'owner' : memberRole ?? undefined) as ProjectAccess['role'] | undefined;
}

/** 성공 시 ProjectAccess, 실패 시 그대로 반환할 NextResponse */
export async function verifyProjectAccess(
    request: NextRequest,
    projectId: string,
    need: AccessNeed,
): Promise<ProjectAccess | NextResponse> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const admin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return NextResponse.json({ error: '로그인이 필요해요.' }, { status: 401 });
    }

    const { data: { user }, error: userError } = await admin.auth.getUser(token);
    if (userError || !user) {
        return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
    }

    // 프로젝트 소유자는 project_members 에 없을 수도 있으므로 projects.user_id 도 확인
    const [{ data: project }, { data: member }] = await Promise.all([
        admin.from('projects').select('user_id').eq('id', projectId).maybeSingle(),
        admin.from('project_members').select('role').eq('project_id', projectId).eq('user_id', user.id).maybeSingle(),
    ]);

    const isOwner = project?.user_id === user.id;
    const role = (isOwner ? 'owner' : member?.role) as ProjectAccess['role'] | undefined;

    if (!role) {
        // 멤버가 아님 = 손님. 경비는 금전 정보라 존재 여부도 알리지 않고 403.
        return NextResponse.json({ error: '여행 참여자만 이용할 수 있어요.' }, { status: 403 });
    }
    if (need === 'write' && role !== 'owner' && role !== 'editor') {
        return NextResponse.json({ error: '보기 권한만 있어 수정할 수 없어요.' }, { status: 403 });
    }

    return { admin, userId: user.id, role };
}

/** verifyProjectAccess 결과가 실패(NextResponse)인지 판별 */
export function isAccessError(v: ProjectAccess | NextResponse): v is NextResponse {
    return v instanceof NextResponse;
}
