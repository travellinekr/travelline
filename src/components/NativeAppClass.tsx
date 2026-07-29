'use client';

import { useEffect } from 'react';

/**
 * Capacitor 네이티브 앱에서만 <html> 에 `cap-native` 클래스를 부착.
 * 세이프에어리어(.pt-safe 등) CSS 를 앱에서만 활성화하기 위한 스코프 플래그.
 * 웹(브라우저)에서는 window.Capacitor 가 없어 아무 것도 하지 않음 → 웹 영향 0.
 */
export function NativeAppClass() {
    useEffect(() => {
        const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
        if (cap?.isNativePlatform?.()) {
            document.documentElement.classList.add('cap-native');
        }
    }, []);
    return null;
}
