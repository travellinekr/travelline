'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export function GlobalSessionWatcher() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // 세션 변화 및 만료 감지
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            // SIGNED_OUT: 사용자가 명시적 로그아웃 하거나, 서버에서 세션을 폐기한 경우
            // TOKEN_REFRESH_FAILED: 토큰 만료 후 갱신(Refresh) 실패한 경우 (장기간 방치)
            if (event === 'SIGNED_OUT' || (event as string) === 'TOKEN_REFRESH_FAILED' || (event === 'INITIAL_SESSION' && !session)) {
                // 현재 페이지가 메인 페이지나 로그인 페이지가 아닌 경우에만 리다이렉트
                if (pathname !== '/' && pathname !== '/login') {
                    alert('세션이 만료되었습니다. 안전을 위해 다시 로그인해 주세요.');
                    router.push('/');
                }
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [pathname, router]);

    return null; // UI를 렌더링하지 않는 백그라운드 컴포넌트
}
