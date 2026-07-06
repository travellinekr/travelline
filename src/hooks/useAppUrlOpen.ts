'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Universal Links / App Links 로 앱이 열릴 때 대상 경로로 라우팅.
 *
 * Phase 1 원칙 (Vercel 웹 bundle 무영향) 유지 위해 `@capacitor/app` 을 import 하지 않고
 * Capacitor 가 native 환경에서 자동 주입하는 `window.Capacitor.Plugins.App` 을 런타임 접근.
 * 웹 (Vercel · 브라우저) 에서는 즉시 no-op.
 *
 * 대상 경로: `/room/*` (Phase 2 스코프). 그 외 도메인/경로는 무시 (앱이 열려도 홈 유지).
 */

type AppUrlOpenPayload = { url: string };
type PluginListenerHandle = { remove: () => Promise<void> | void };
type CapacitorAppLike = {
    addListener: (event: 'appUrlOpen', cb: (data: AppUrlOpenPayload) => void) => Promise<PluginListenerHandle> | PluginListenerHandle;
    getLaunchUrl?: () => Promise<{ url: string } | null>;
};
type CapacitorGlobal = {
    isNativePlatform?: () => boolean;
    Plugins?: { App?: CapacitorAppLike };
};

function getCapacitorApp(): CapacitorAppLike | null {
    if (typeof window === 'undefined') return null;
    const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
    if (!cap?.isNativePlatform?.()) return null;
    return cap.Plugins?.App ?? null;
}

// Universal/App Link URL 에서 앱 내부 라우팅 대상 path 추출.
// 예: "https://travelline.co.kr/room/abc123?x=1" → "/room/abc123?x=1"
// 도메인이 travelline.co.kr 이 아니거나 /room/* 이 아니면 null.
function extractRoomPath(fullUrl: string): string | null {
    try {
        const u = new URL(fullUrl);
        if (u.hostname !== 'travelline.co.kr') return null;
        if (!u.pathname.startsWith('/room/')) return null;
        return `${u.pathname}${u.search}${u.hash}`;
    } catch {
        return null;
    }
}

export function useAppUrlOpen() {
    const router = useRouter();

    useEffect(() => {
        const app = getCapacitorApp();
        if (!app) return;

        let handle: PluginListenerHandle | null = null;
        let cancelled = false;

        // 1. 앱 백그라운드에서 링크 클릭으로 재활성화 시
        Promise.resolve(app.addListener('appUrlOpen', (data) => {
            const path = extractRoomPath(data.url);
            if (path) router.push(path);
        })).then((h) => {
            if (cancelled) {
                Promise.resolve(h.remove()).catch(() => {});
            } else {
                handle = h;
            }
        }).catch(() => {});

        // 2. 앱 콜드 스타트로 링크 클릭 시 (앱 부팅 후 최초 URL)
        app.getLaunchUrl?.().then((res) => {
            if (!res?.url) return;
            const path = extractRoomPath(res.url);
            if (path) router.push(path);
        }).catch(() => {});

        return () => {
            cancelled = true;
            if (handle) Promise.resolve(handle.remove()).catch(() => {});
        };
    }, [router]);
}
