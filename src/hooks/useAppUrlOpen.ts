'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

/**
 * Universal Links / App Links 로 앱이 열릴 때 처리.
 *
 * Phase 1 원칙 (Vercel 웹 bundle 무영향) 유지 위해 `@capacitor/app` 등을 import 하지 않고
 * Capacitor 가 native 환경에서 자동 주입하는 `window.Capacitor.Plugins.*` 을 런타임 접근.
 * 웹 (Vercel · 브라우저) 에서는 즉시 no-op.
 *
 * 처리 경로:
 * - `/room/*`        → 해당 룸으로 라우팅 (Phase 2)
 * - `/auth/callback` → OAuth(구글 Custom Tabs) 세션 복귀 (Phase 2-B):
 *                      #access_token/#refresh_token 또는 ?code= 를 받아 WebView 세션에 심고
 *                      Custom Tab 을 닫은 뒤 next(또는 홈)로 이동. 웹 흐름은 건드리지 않음.
 */

type AppUrlOpenPayload = { url: string };
type PluginListenerHandle = { remove: () => Promise<void> | void };
type CapacitorAppLike = {
    addListener: (event: 'appUrlOpen', cb: (data: AppUrlOpenPayload) => void) => Promise<PluginListenerHandle> | PluginListenerHandle;
    getLaunchUrl?: () => Promise<{ url: string } | null>;
};
type CapacitorBrowserLike = { close?: () => Promise<void> | void };
type CapacitorGlobal = {
    isNativePlatform?: () => boolean;
    Plugins?: { App?: CapacitorAppLike; Browser?: CapacitorBrowserLike };
};

function getCapacitor(): CapacitorGlobal | null {
    if (typeof window === 'undefined') return null;
    const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
    if (!cap?.isNativePlatform?.()) return null;
    return cap;
}

// Universal/App Link URL 에서 앱 내부 라우팅 대상 path 추출.
// 예: "https://travelline.co.kr/room/abc123?x=1" → "/room/abc123?x=1"
// 도메인이 travelline.co.kr 이 아니거나 /room/* 이 아니면 null.
function extractRoomPath(u: URL): string | null {
    if (!u.pathname.startsWith('/room/')) return null;
    return `${u.pathname}${u.search}${u.hash}`;
}

// /auth/callback 딥링크에서 세션을 WebView 에 심는다. 성공 시 이동할 next 경로 반환.
async function handleAuthCallback(u: URL): Promise<string | null> {
    // implicit 플로우: #access_token=...&refresh_token=...  /  pkce 플로우: ?code=...
    const frag = u.hash.startsWith('#') ? u.hash.slice(1) : u.hash;
    const hp = new URLSearchParams(frag);
    const accessToken = hp.get('access_token');
    const refreshToken = hp.get('refresh_token');
    const code = u.searchParams.get('code');
    try {
        if (accessToken && refreshToken) {
            await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
        } else if (code) {
            await supabase.auth.exchangeCodeForSession(code);
        } else {
            return null;
        }
    } catch {
        return null;
    }
    // 시스템 브라우저(Custom Tab) 닫기
    getCapacitor()?.Plugins?.Browser?.close?.();
    const next = u.searchParams.get('next');
    return next && next.startsWith('/') ? next : '/';
}

export function useAppUrlOpen() {
    const router = useRouter();

    useEffect(() => {
        const cap = getCapacitor();
        const app = cap?.Plugins?.App;
        if (!app) return;

        let handle: PluginListenerHandle | null = null;
        let cancelled = false;

        const handleUrl = async (rawUrl: string) => {
            let u: URL;
            try { u = new URL(rawUrl); } catch { return; }
            if (u.hostname !== 'travelline.co.kr') return;

            if (u.pathname.startsWith('/auth/callback')) {
                const next = await handleAuthCallback(u);
                if (next) router.push(next);
                return;
            }
            const roomPath = extractRoomPath(u);
            if (roomPath) router.push(roomPath);
        };

        // 1. 앱 백그라운드에서 링크/OAuth 복귀로 재활성화 시
        Promise.resolve(app.addListener('appUrlOpen', (data) => {
            void handleUrl(data.url);
        })).then((h) => {
            if (cancelled) {
                Promise.resolve(h.remove()).catch(() => {});
            } else {
                handle = h;
            }
        }).catch(() => {});

        // 2. 앱 콜드 스타트로 링크 클릭 시 (앱 부팅 후 최초 URL)
        app.getLaunchUrl?.().then((res) => {
            if (res?.url) void handleUrl(res.url);
        }).catch(() => {});

        return () => {
            cancelled = true;
            if (handle) Promise.resolve(handle.remove()).catch(() => {});
        };
    }, [router]);
}
