'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 현재 세션 확인
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) {
                console.warn('[Auth] 세션 로드 오류:', error.message);
                // 리프레시 토큰이 없거나 유효하지 않은 경우 세션을 강제로 비워 무한 루프 방지
                if (error.message.includes('Refresh Token') || error.message.includes('invalid_grant')) {
                    supabase.auth.signOut();
                }
            }
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // 세션 변화 감지 (로그인/로그아웃 자동 반영)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return { user, loading, signOut };
}
