'use client';

import { useEffect } from 'react';

/**
 * Capacitor 네이티브 앱에서만 <html> 에 클래스를 부착.
 * - `cap-native`  : 앱 여부 (세이프에어리어 .pt-safe 등 앱 전용 CSS 스코프)
 * - `cap-ios`     : iOS (contentInset:'automatic' 이 스크롤 콘텐츠를 자동 인셋)
 * - `cap-android` : Android (자동 인셋 없음 → 스크롤 흐름 요소는 CSS env 필요)
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
        const platform = cap.getPlatform?.();
        if (platform === 'ios') el.classList.add('cap-ios');
        else if (platform === 'android') el.classList.add('cap-android');
    }, []);
    return null;
}
