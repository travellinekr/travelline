'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { SessionExpiredModal } from './SessionExpiredModal';

export function GlobalSessionWatcher() {
    const pathname = usePathname();
    const [showExpired, setShowExpired] = useState(false);
    const online = useOnlineStatus();

    // 오프라인이면 Supabase 자동 refresh 스케줄러 중단 → 실패 fetch 반복 방지.
    // 온라인 복귀 시 재개(즉시 1회 시도 + 이후 라이브러리 기본 스케줄).
    useEffect(() => {
        if (online) {
            supabase.auth.startAutoRefresh().catch(() => { /* 오프라인 등 실패는 무시 — 다음 online 이벤트에 재시도 */ });
        } else {
            supabase.auth.stopAutoRefresh().catch(() => { /* noop */ });
        }
    }, [online]);

    useEffect(() => {
        // 세션 변화 및 만료 감지
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, _session) => {
            // SIGNED_OUT: 사용자가 명시적 로그아웃 하거나, 서버에서 세션을 폐기한 경우
            // TOKEN_REFRESH_FAILED: 토큰 만료 후 갱신(Refresh) 실패한 경우 (장기간 방치)
            // INITIAL_SESSION + !session은 비로그인 손님(공유 링크 진입)이라 만료 아님 → 제외
            if (event === 'SIGNED_OUT' || (event as string) === 'TOKEN_REFRESH_FAILED') {
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
