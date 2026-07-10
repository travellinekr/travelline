import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 네이버 OAuth 시작 라우트.
// - state 를 랜덤 생성해 httpOnly 쿠키에 저장 (콜백에서 CSRF 방지)
// - next(로그인 후 이동할 경로) 도 쿠키에 저장 (state 와 함께 검증)
// - nid.naver.com/oauth2.0/authorize 로 302
export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const nextParam = requestUrl.searchParams.get('next');
    const next = nextParam && nextParam.startsWith('/') ? nextParam : '/';

    const clientId = process.env.NAVER_CLIENT_ID;
    if (!clientId) {
        console.error('[naver/login] NAVER_CLIENT_ID env 미설정');
        return NextResponse.redirect(new URL('/login?error=naver_not_configured', requestUrl.origin));
    }

    const isDev = process.env.NODE_ENV === 'development';
    const origin = isDev ? requestUrl.origin : (process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin);
    const redirectUri = `${origin}/api/auth/naver/callback`;

    const state = crypto.randomUUID();

    const cookieStore = await cookies();
    const cookieOpts = {
        httpOnly: true,
        secure: !isDev,
        sameSite: 'lax' as const,
        path: '/',
        maxAge: 60 * 10, // 10분
    };
    cookieStore.set('sb-naver-state', state, cookieOpts);
    cookieStore.set('sb-naver-next', next, cookieOpts);

    const authorizeUrl = new URL('https://nid.naver.com/oauth2.0/authorize');
    authorizeUrl.searchParams.set('response_type', 'code');
    authorizeUrl.searchParams.set('client_id', clientId);
    authorizeUrl.searchParams.set('redirect_uri', redirectUri);
    authorizeUrl.searchParams.set('state', state);

    return NextResponse.redirect(authorizeUrl.toString());
}
