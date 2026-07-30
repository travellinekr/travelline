'use client';

import { useEffect } from 'react';

/**
 * Capacitor 네이티브 앱에서만 <html> 에 `cap-native` 클래스를 부착.
 * 앱 전용 세이프에어리어 CSS(.pt-safe 등) 스코프로 사용.
 * safe-area 는 iOS/Android 모두 CSS env() 로 통일(iOS contentInset='never').
 * 웹(브라우저)에서는 window.Capacitor 가 없어 아무 것도 하지 않음 → 웹 영향 0.
 */
export function NativeAppClass() {
    useEffect(() => {
        const cap = (window as unknown as {
            Capacitor?: { isNativePlatform?: () => boolean };
        }).Capacitor;
        if (!cap?.isNativePlatform?.()) return;
        document.documentElement.classList.add('cap-native');
    }, []);
    return null;
}
