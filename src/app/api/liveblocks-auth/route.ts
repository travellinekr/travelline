import { NextRequest, NextResponse } from 'next/server';
import { Liveblocks } from '@liveblocks/node';
import { createClient } from '@supabase/supabase-js';

// 빌드 타임 환경변수 오류 방지 → 런타임(요청 시)에 생성
function getLiveblocks() {
    const secret = process.env.LIVEBLOCKS_SECRET_KEY;
    if (!secret) throw new Error('LIVEBLOCKS_SECRET_KEY 환경변수가 없습니다.');
    return new Liveblocks({ secret });
}

function getSupabaseAdmin() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error('Supabase 환경변수가 없습니다.');
    return createClient(url, key);
}

// JWT의 sub claim을 verify 없이 로컬에서 추출.
// 보안: 토큰 검증은 supabaseAdmin.auth.getUser()가 담당. 여기서는 단지
// memberQuery를 getUser와 병렬로 시작하기 위한 가설값. user.id != sub인
// 경우(JWT 위조)에는 검증된 user.id로 memberQuery를 다시 실행.
function getJwtSubject(token: string): string | null {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        const payload = parts[1];
        const padded = payload + '='.repeat((4 - payload.length % 4) % 4);
        const json = Buffer.from(
            padded.replace(/-/g, '+').replace(/_/g, '/'),
            'base64'
        ).toString();
        const decoded = JSON.parse(json);
        return typeof decoded.sub === 'string' ? decoded.sub : null;
    } catch {
        return null;
    }
}

function withTimeout<T>(promise: PromiseLike<T>, ms: number, label: string): Promise<T> {
    return Promise.race([
        Promise.resolve(promise),
        new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error(`${label} timeout`)), ms)
        ),
    ]);
}

// session.authorize() 호출 → JSON 검증 → NextResponse 반환.
// Liveblocks 백엔드가 슬로우 응답 시 plain text("Call to /v2/.../authorize timed out") 를
// 반환하는 경우가 있어 모든 경로에서 JSON 검증 필수.
async function authorizeAndRespond(
    session: ReturnType<ReturnType<typeof getLiveblocks>['prepareSession']>,
    context: string,
): Promise<NextResponse> {
    try {
        const { status, body: responseBody } = await withTimeout(
            session.authorize(),
            5000,
            `Liveblocks authorize (${context})`,
        );
        try {
            JSON.parse(responseBody);
        } catch {
            console.error(`[liveblocks-auth/${context}] authorize 응답이 JSON 아님:`, responseBody);
            return NextResponse.json(
                { error: 'forbidden', reason: 'Liveblocks 인증 응답 오류' },
                { status: 500 },
            );
        }
        return new NextResponse(responseBody, {
            status,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error(`[liveblocks-auth/${context}] authorize 실패:`, err);
        return NextResponse.json(
            { error: 'forbidden', reason: '인증 처리 시간이 초과되었습니다.' },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const liveblocks = getLiveblocks();
        const supabaseAdmin = getSupabaseAdmin();

        const body = await request.json();
        const { room } = body;

        // 1. 요청 헤더에서 Supabase 세션 토큰 추출
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');

        // ─── 비로그인 사용자: 익명 뷰어로 READ_ACCESS 허용 ───
        if (!token) {
            const anonId = `anon_${crypto.randomUUID()}`;
            const session = liveblocks.prepareSession(anonId, {
                userInfo: {
                    name: '게스트',
                    email: '',
                    avatar: '',
                    color: `hsl(${Math.floor(Math.random() * 360)}, 60%, 55%)`,
                    role: 'viewer',
                    isGuest: true,
                },
            });
            const targetRoom = room || '*';
            session.allow(targetRoom, session.READ_ACCESS);
            return authorizeAndRespond(session, 'anon-no-token');
        }

        // 2. JWT에서 sub(user_id)를 추출하여 memberQuery를 getUser와 병렬 실행.
        //    토큰 검증은 getUser가 담당하므로 안전. sub 추출 실패 시 memberQuery는
        //    getUser 완료 후 직렬로 실행 (기존 동작).
        const tentativeUserId = getJwtSubject(token);

        const [getUserResult, earlyMemberResult] = await Promise.all([
            withTimeout(supabaseAdmin.auth.getUser(token), 2000, 'getUser').catch(() => null),
            (room && tentativeUserId)
                ? withTimeout(
                    supabaseAdmin
                        .from('project_members')
                        // '*' 인 이유: display_name 은 마이그레이션 021 에서 추가된 컬럼이다.
                        // 컬럼명을 명시하면 미적용 환경에서 쿼리가 통째로 실패하고,
                        // 이 조회는 .catch(() => null) 로 감싸여 있어 "멤버 아님" 으로 판정된다.
                        // 즉 전원이 손님(읽기 전용)이 되어 편집 권한을 잃는다.
                        .select('*')
                        .eq('project_id', room)
                        .eq('user_id', tentativeUserId)
                        .single(),
                    2000,
                    'memberQuery'
                ).catch(() => null)
                : Promise.resolve(null),
        ]);

        const user = getUserResult?.data?.user ?? null;
        if (!user) {
            const anonId = `anon_${crypto.randomUUID()}`;
            const session = liveblocks.prepareSession(anonId, {
                userInfo: { name: '게스트', email: '', avatar: '', color: '#94a3b8', role: 'viewer', isGuest: true },
            });
            const targetRoom = room || '*';
            session.allow(targetRoom, session.READ_ACCESS);
            return authorizeAndRespond(session, 'anon-no-user');
        }

        // 3. memberQuery 결과 검증 + 필요 시 재조회
        let role = 'viewer';
        let memberData: { role: string; display_name?: string | null } | null = null;

        if (earlyMemberResult?.data && tentativeUserId === user.id) {
            // JWT sub가 검증된 user.id와 일치 → 병렬 결과 사용 (정상 경로)
            memberData = earlyMemberResult.data;
            role = earlyMemberResult.data.role;
        } else if (room) {
            // sub 추출 실패 또는 user.id 불일치(위조 가능성) → 검증된 id로 재조회
            const verifiedMemberResult = await withTimeout(
                supabaseAdmin
                    .from('project_members')
                    // 위와 같은 이유로 '*'. 컬럼 하나 늘었다고 권한이 날아가면 안 된다.
                    .select('*')
                    .eq('project_id', room)
                    .eq('user_id', user.id)
                    .single(),
                2000,
                'memberQuery'
            ).catch(() => null);

            if (verifiedMemberResult?.data) {
                memberData = verifiedMemberResult.data;
                role = verifiedMemberResult.data.role;
            }
        }

        // 비회원 로그인 사용자 → viewer로 자동 등록 (공유 링크 진입 케이스).
        // 응답 차단 안 하도록 fire-and-forget. 다음 토큰 갱신부터 정상 멤버로 인식.
        if (room && !memberData) {
            supabaseAdmin
                .from('project_members')
                .upsert(
                    { project_id: room, user_id: user.id, role: 'viewer' },
                    { onConflict: 'project_id,user_id', ignoreDuplicates: true }
                )
                .then(({ error }) => {
                    if (error) console.error('[liveblocks-auth] auto-join 실패:', error.message);
                });
        }

        // 4. Liveblocks 권한 결정
        const canWrite = role === 'owner' || role === 'editor';

        // 5. Liveblocks 세션 생성
        const isGuest = !memberData;
        const session = liveblocks.prepareSession(user.id, {
            userInfo: {
                // 보드별 별칭(project_members.display_name) 이 있으면 그것을 쓴다.
                // 없으면(아직 안 바꾼 멤버) 계정 이름으로 떨어진다.
                //
                // 주의: 이 값은 토큰에 박혀서 나가므로 별칭을 바꿔도 즉시 갱신되지 않는다.
                // 실시간 반영은 presence.displayName 이 맡고, 여기 값은 첫 프레임 폴백이다.
                name: isGuest
                    ? '손님'
                    : (memberData?.display_name?.trim() || user.user_metadata?.full_name || user.email || '사용자'),
                email: isGuest ? '' : (user.email || ''),
                avatar: isGuest ? '' : (user.user_metadata?.avatar_url || ''),
                color: `hsl(${Math.abs(user.id.charCodeAt(0) * 137) % 360}, 70%, 50%)`,
                role: role as 'owner' | 'editor' | 'viewer',
                isGuest,
            },
        });

        // 6. room 권한 부여
        const targetRoom = room || '*';
        session.allow(targetRoom, canWrite
            ? session.FULL_ACCESS
            : session.READ_ACCESS
        );

        return authorizeAndRespond(session, 'authenticated');

    } catch (err) {
        console.error('[liveblocks-auth] 오류:', err);
        return NextResponse.json(
            { error: 'forbidden', reason: '인증 처리 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
