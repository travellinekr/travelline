import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    const next = requestUrl.searchParams.get('next'); // 로그인 후 이동할 경로

    // 🛑 중요: ngrok 환경에서 request.origin이 localhost로 잡힐 수 있으므로 환경변수 우선 사용
    const origin = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin;

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
        } catch (err) {
            console.error('[auth/callback] 예외:', err);
            return NextResponse.redirect(new URL('/login?error=unexpected', origin));
        }
    }

    // 로그인 완료 후: next 파라미터가 있으면 해당 경로로, 없으면 메인으로
    const redirectPath = next && next.startsWith('/') ? next : '/';
    return NextResponse.redirect(new URL(redirectPath, origin));
}
