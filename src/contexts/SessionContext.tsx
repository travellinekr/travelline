'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

// Supabase auth session 캐싱 Context.
//  - 진입 1회 getSession() + onAuthStateChange 구독
//  - 자식 컴포넌트가 useSessionAccessToken() 으로 캐시된 access_token 조회
//  - 세션 만료·재로그인 흐름은 기존 GlobalSessionWatcher 유지 (여기는 read-only 캐시)
//  - Provider 밖에서 호출 시 안전 fallback → getSession() 직접 호출

type Ctx = {
    session: Session | null;
    // 최신 access_token 을 반환 (session 이 아직 로드 안 됐거나 만료된 경우 fresh getSession 호출)
    getAccessToken: () => Promise<string | null>;
};

const SessionContext = createContext<Ctx | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const sessionRef = useRef<Session | null>(null);

    useEffect(() => {
        // 초기 로드
        supabase.auth.getSession().then(({ data }) => {
            sessionRef.current = data.session;
            setSession(data.session);
        });

        // 로그인/로그아웃/토큰 갱신 자동 반영
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, next) => {
            sessionRef.current = next;
            setSession(next);
        });

        return () => subscription.unsubscribe();
    }, []);

    const getAccessToken = async (): Promise<string | null> => {
        // ref 우선 (최신 값), 없으면 fresh 호출로 fallback
        if (sessionRef.current?.access_token) return sessionRef.current.access_token;
        const { data } = await supabase.auth.getSession();
        return data.session?.access_token ?? null;
    };

    return (
        <SessionContext.Provider value={{ session, getAccessToken }}>
            {children}
        </SessionContext.Provider>
    );
}

// 캐시된 access_token 조회 (Provider 없이도 안전 — fresh 호출로 fallback)
export async function getCachedAccessToken(ctx: Ctx | null): Promise<string | null> {
    if (ctx) return ctx.getAccessToken();
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token ?? null;
}

export function useSessionContext(): Ctx | null {
    return useContext(SessionContext);
}
