'use client';

import { useAppUrlOpen } from '@/hooks/useAppUrlOpen';

/**
 * Universal Links / App Links 리스너 마운트 컴포넌트.
 * 웹 (브라우저 · Vercel) 에서는 즉시 no-op — bundle 크기 영향 없음.
 * 앱 (Capacitor native) 에서만 window.Capacitor.Plugins.App 을 통해 URL open 이벤트 수신.
 */
export function AppUrlOpenWatcher() {
    useAppUrlOpen();
    return null;
}
