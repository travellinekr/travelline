import { NextRequest, NextResponse } from 'next/server';
import { Liveblocks } from '@liveblocks/node';
import { createClient } from '@supabase/supabase-js';

const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
    try {
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
                },
            });
            const targetRoom = room || '*';
            session.allow(targetRoom, session.READ_ACCESS);
            const { status, body: responseBody } = await session.authorize();
            return new NextResponse(responseBody, {
                status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // 2. 토큰으로 유저 확인 (2초 타임아웃 - 초과 시 anon 폴백으로 빠르게 응답)
        const getUserResult = await Promise.race([
            supabaseAdmin.auth.getUser(token),
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('getUser timeout')), 2000)
            ),
        ]).catch(() => null);

        const user = getUserResult?.data?.user ?? null;
        if (!user) {
            const anonId = `anon_${crypto.randomUUID()}`;
            const session = liveblocks.prepareSession(anonId, {
                userInfo: { name: '게스트', email: '', avatar: '', color: '#94a3b8' },
            });
            const targetRoom = room || '*';
            session.allow(targetRoom, session.READ_ACCESS);
            const { status, body: responseBody } = await session.authorize();
            return new NextResponse(responseBody, {
                status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // 3. project_members에서 role 조회 (2초 타임아웃 - 초과 시 viewer 처리)
        let role = 'viewer';
        let memberData: { role: string } | null = null;
        if (room) {
            const memberResult = await Promise.race([
                supabaseAdmin
                    .from('project_members')
                    .select('role')
                    .eq('project_id', room)
                    .eq('user_id', user.id)
                    .single(),
                new Promise<never>((_, reject) =>
                    setTimeout(() => reject(new Error('memberQuery timeout')), 2000)
                ),
            ]).catch(() => null);

            if (memberResult?.data) {
                memberData = memberResult.data;
                role = memberResult.data.role;
            }
        }

        console.log(`[liveblocks-auth] user=${user.id} room=${room} role=${role}`);

        // 4. Liveblocks 권한 결정
        const canWrite = role === 'owner' || role === 'editor';

        // 5. Liveblocks 세션 생성
        const isGuest = !memberData;
        const session = liveblocks.prepareSession(user.id, {
            userInfo: {
                name: isGuest ? '손님' : (user.user_metadata?.full_name || user.email || '사용자'),
                email: isGuest ? '' : (user.email || ''),
                avatar: isGuest ? '' : (user.user_metadata?.avatar_url || ''),
                color: `hsl(${Math.abs(user.id.charCodeAt(0) * 137) % 360}, 70%, 50%)`,
            },
        });

        // 6. room 권한 부여
        const targetRoom = room || '*';
        session.allow(targetRoom, canWrite
            ? session.FULL_ACCESS
            : session.READ_ACCESS
        );

        // 6초 타임아웃 적용
        const authorizeWithTimeout = Promise.race([
            session.authorize(),
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('Liveblocks authorize timeout')), 6000)
            ),
        ]);

        const { status, body: responseBody } = await authorizeWithTimeout;

        // responseBody가 유효한 JSON인지 확인
        try {
            JSON.parse(responseBody);
        } catch {
            console.error('[liveblocks-auth] authorize 응답이 JSON이 아님:', responseBody);
            return NextResponse.json(
                { error: 'forbidden', reason: 'Liveblocks 인증 응답 오류' },
                { status: 500 }
            );
        }

        return new NextResponse(responseBody, {
            status,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        console.error('[liveblocks-auth] 오류:', err);
        return NextResponse.json(
            { error: 'forbidden', reason: '인증 처리 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
