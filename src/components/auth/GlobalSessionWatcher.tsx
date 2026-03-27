'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { SessionExpiredModal } from './SessionExpiredModal';

export function GlobalSessionWatcher() {
    const pathname = usePathname();
    const [showExpired, setShowExpired] = useState(false);

    useEffect(() => {
        // 세션 변화 및 만료 감지
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            // SIGNED_OUT: 사용자가 명시적 로그아웃 하거나, 서버에서 세션을 폐기한 경우
            // TOKEN_REFRESH_FAILED: 토큰 만료 후 갱신(Refresh) 실패한 경우 (장기간 방치)
            if (event === 'SIGNED_OUT' || (event as string) === 'TOKEN_REFRESH_FAILED' || (event === 'INITIAL_SESSION' && !session)) {
                // 현재 페이지가 메인 페이지나 로그인 페이지가 아닌 경우에만 모달 표시
                if (pathname !== '/' && pathname !== '/login') {
                    setShowExpired(true);
                }
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [pathname]);

    if (!showExpired) return null;

    return <SessionExpiredModal onClose={() => setShowExpired(false)} />;
}
