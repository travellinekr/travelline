import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/admin/supabaseAdmin';

// 네이버 OAuth 콜백.
// - state 검증 → 토큰 교환 → 프로필 조회 → Supabase 유저 lookup/create → magiclink 발급 → 302
// - 성공 시: Supabase magiclink URL 로 리다이렉트 → Supabase 가 세션 쿠키 세팅 후 /auth/callback 으로 돌려보냄
// - 실패 시: /login?error=<code> 로 리다이렉트
export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    const state = requestUrl.searchParams.get('state');
    const errorParam = requestUrl.searchParams.get('error');

    const isDev = process.env.NODE_ENV === 'development';
    const origin = isDev ? requestUrl.origin : (process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin);

    const fail = (errCode: string) => NextResponse.redirect(new URL(`/login?error=${errCode}`, origin));

    // 유저가 동의 화면에서 취소했거나 네이버가 에러 반환
    if (errorParam) {
        console.warn('[naver/callback] Naver 응답 에러:', errorParam);
        return fail('naver_denied');
    }

    if (!code || !state) return fail('naver_invalid_response');

    const cookieStore = await cookies();
    const cookieState = cookieStore.get('sb-naver-state')?.value;
    const nextRaw = cookieStore.get('sb-naver-next')?.value || '/';
    const next = nextRaw.startsWith('/') ? nextRaw : '/';

    // 쿠키 정리 (state 는 1회성)
    cookieStore.delete('sb-naver-state');
    cookieStore.delete('sb-naver-next');

    if (!cookieState || cookieState !== state) {
        console.warn('[naver/callback] state mismatch');
        return fail('state_mismatch');
    }

    const clientId = process.env.NAVER_CLIENT_ID;
    const clientSecret = process.env.NAVER_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        console.error('[naver/callback] NAVER_CLIENT_ID / SECRET env 미설정');
        return fail('naver_not_configured');
    }

    try {
        // 1) code → access_token
        const tokenUrl = new URL('https://nid.naver.com/oauth2.0/token');
        tokenUrl.searchParams.set('grant_type', 'authorization_code');
        tokenUrl.searchParams.set('client_id', clientId);
        tokenUrl.searchParams.set('client_secret', clientSecret);
        tokenUrl.searchParams.set('code', code);
        tokenUrl.searchParams.set('state', state);

        const tokenRes = await fetch(tokenUrl.toString(), { method: 'GET', cache: 'no-store' });
        const tokenData = await tokenRes.json().catch(() => null);
        if (!tokenRes.ok || !tokenData?.access_token) {
            console.error('[naver/callback] 토큰 교환 실패:', tokenData);
            return fail('naver_token_failed');
        }

        // 2) access_token → 프로필 조회
        const profileRes = await fetch('https://openapi.naver.com/v1/nid/me', {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
            cache: 'no-store',
        });
        const profileData = await profileRes.json().catch(() => null);
        if (!profileRes.ok || profileData?.resultcode !== '00' || !profileData?.response) {
            console.error('[naver/callback] 프로필 조회 실패:', profileData);
            return fail('naver_profile_failed');
        }

        const nv = profileData.response as {
            id: string;
            email?: string;
            name?: string;
            nickname?: string;
            profile_image?: string;
        };
        const email = nv.email?.trim().toLowerCase();
        const fullName = nv.name || nv.nickname || '';
        const avatarUrl = nv.profile_image || '';

        if (!email) {
            return fail('naver_email_required');
        }

        // 3) Supabase Admin: 이메일로 기존 유저 찾기 (없으면 생성)
        const admin = getSupabaseAdmin();
        if (!admin) {
            console.error('[naver/callback] Supabase admin 클라이언트 없음 (SUPABASE_SERVICE_ROLE_KEY 확인)');
            return fail('supabase_not_configured');
        }

        // listUsers 는 페이지네이션이라 여러 페이지 순회. 프로젝트 규모 작으니 최대 5페이지(1000명) 만 조회.
        let existingUserId: string | null = null;
        for (let page = 1; page <= 5; page += 1) {
            const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
            if (error) {
                console.error('[naver/callback] listUsers 오류:', error.message);
                return fail('supabase_lookup_failed');
            }
            const found = data.users.find((u) => u.email?.toLowerCase() === email);
            if (found) { existingUserId = found.id; break; }
            if (!data.users.length || data.users.length < 200) break; // 마지막 페이지
        }

        if (!existingUserId) {
            const { error: createErr } = await admin.auth.admin.createUser({
                email,
                email_confirm: true,
                user_metadata: {
                    provider: 'naver',
                    full_name: fullName,
                    avatar_url: avatarUrl,
                    naver_id: nv.id,
                },
            });
            if (createErr) {
                console.error('[naver/callback] createUser 오류:', createErr.message);
                return fail('supabase_create_failed');
            }
        }

        // 4) magiclink 발급 → 브라우저가 그 URL 방문 시 Supabase 가 세션 쿠키 세팅
        const nextQuery = next !== '/' ? `?next=${encodeURIComponent(next)}` : '';
        const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
            type: 'magiclink',
            email,
            options: { redirectTo: `${origin}/auth/callback${nextQuery}` },
        });
        if (linkErr || !linkData?.properties?.action_link) {
            console.error('[naver/callback] generateLink 오류:', linkErr?.message);
            return fail('supabase_link_failed');
        }

        return NextResponse.redirect(linkData.properties.action_link);
    } catch (err) {
        console.error('[naver/callback] 예외:', err);
        return fail('unexpected');
    }
}
