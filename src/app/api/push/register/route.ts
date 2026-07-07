import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// POST /api/push/register — Capacitor 네이티브 앱이 FCM 토큰 발급 후 서버에 저장.
// 요청: Bearer <Supabase 세션 토큰> + Body { token, platform: 'ios'|'android', deviceId? }
// 응답: 200 성공 · 401/400/500 오류

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: NextRequest) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

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

        const body = await request.json();
        const pushToken: string | undefined = body?.token;
        const platform: string | undefined = body?.platform;
        const deviceId: string | undefined = body?.deviceId;

        if (!pushToken || typeof pushToken !== 'string') {
            return NextResponse.json({ error: 'token 필드가 필요합니다.' }, { status: 400 });
        }
        if (platform !== 'ios' && platform !== 'android') {
            return NextResponse.json({ error: "platform 은 'ios' 또는 'android' 여야 합니다." }, { status: 400 });
        }

        // 동일 토큰이 이미 있으면 user_id/platform/updated_at 만 갱신 (기기 유저 전환 대비).
        const { error: upsertError } = await supabaseAdmin
            .from('push_tokens')
            .upsert(
                {
                    user_id: user.id,
                    token: pushToken,
                    platform,
                    device_id: deviceId ?? null,
                    updated_at: new Date().toISOString(),
                },
                { onConflict: 'token' },
            );

        if (upsertError) {
            console.error('[push/register] upsert 실패:', upsertError.message);
            return NextResponse.json({ error: upsertError.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('[push/register] 예외:', err);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
