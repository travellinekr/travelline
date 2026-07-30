'use client';

import { useEffect } from 'react';

/**
 * Capacitor 네이티브 앱에서만 <html> 에 클래스를 부착.
 * - `cap-native`  : 앱 여부 (양 플랫폼 공통 CSS 스코프. 예: .pt-safe)
 * - `cap-android` : Android 만 (Android 전용 여백. 예: .pt-safe-android)
 * safe-area 는 iOS/Android 모두 CSS env() 로 통일(iOS contentInset='never').
 * 웹(브라우저)에서는 window.Capacitor 가 없어 아무 것도 하지 않음 → 웹 영향 0.
 */
export function NativeAppClass() {
    useEffect(() => {
        const cap = (window as unknown as {
            Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string };
        }).Capacitor;
        if (!cap?.isNativePlatform?.()) return;
        const el = document.documentElement;
        el.classList.add('cap-native');
        if (cap.getPlatform?.() === 'android') el.classList.add('cap-android');
    }, []);
    return null;
}
