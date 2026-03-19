import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    const next = requestUrl.searchParams.get('next'); // 로그인 후 이동할 경로

    // 개발 환경에서는 requestUrl.origin(localhost)를 사용, 프로덕션에서만 SITE_URL 사용
    const isDev = process.env.NODE_ENV === 'development';
    const origin = isDev ? requestUrl.origin : (process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin);

    console.log(`[Auth Callback] Code: ${code ? 'Yes' : 'No'}, Next: ${next}, Origin: ${origin}`);

    if (code) {
        try {
            const cookieStore = await cookies();
            const supabase = createServerClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                {
                    cookies: {
                        getAll: () => cookieStore.getAll(),
                        setAll: (cookiesToSet) =>
                            cookiesToSet.forEach(({ name, value, options }) =>
                                cookieStore.set(name, value, options)
                            ),
                    },
                }
            );
            const { error } = await supabase.auth.exchangeCodeForSession(code);
            if (error) {
                console.error('[auth/callback] 세션 교환 오류:', error.message);
                return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(error.message)}`, origin));
            }

            // 공유 링크 진입 시 viewer 자동 등록 (/room/[roomId] 패턴 감지)
            const roomMatch = next?.match(/^\/room\/([^/?]+)/);
            if (roomMatch) {
                const roomId = roomMatch[1];
                await fetch(new URL(`/api/projects/${roomId}/join`, origin), { method: 'POST' });
            }
        } catch (err) {
            console.error('[auth/callback] 예외:', err);
            return NextResponse.redirect(new URL('/login?error=unexpected', origin));
        }
    }

    // 로그인 완료 후: next 파라미터가 있으면 해당 경로로, 없으면 메인으로
    const redirectPath = next && next.startsWith('/') ? next : '/';
    return NextResponse.redirect(new URL(redirectPath, origin));
}
