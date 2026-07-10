'use client';

import { useEffect, useState } from 'react';

// 브라우저 온라인 상태 감지. navigator.onLine + online/offline 이벤트 사용.
// - 초기값은 SSR 안전하게 true 로 가정 후 마운트 시 실제 값 반영.
// - 하이브리드 앱(Capacitor) 도 같은 API 사용 가능.
export function useOnlineStatus(): boolean {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        // 마운트 시 실제 상태 반영
        if (typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean') {
            setOnline(navigator.onLine);
        }
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return online;
}
