'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { initPushNotifications } from '@/lib/native/pushNotifications';

/**
 * 로그인 유저에게 푸시 알림 등록을 트리거하는 마운트 컴포넌트.
 * 웹 (브라우저 · Vercel) 에서는 initPushNotifications 가 즉시 no-op.
 * 앱 (Capacitor native) 에서만 permission 프롬프트 + 토큰 발급 + 서버 저장 실행.
 *
 * SIGNED_IN 이벤트마다 재호출 안전 (upsert + 리스너는 native SDK 가 중복 방지).
 */
export function PushNotificationsInit() {
    useEffect(() => {
        // 마운트 시점 현재 세션 확인
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.access_token) {
                initPushNotifications(session.access_token);
            }
        });

        // 이후 로그인 이벤트에서 재시도 (첫 로그인 · 재로그인 커버)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session?.access_token) {
                initPushNotifications(session.access_token);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return null;
}
