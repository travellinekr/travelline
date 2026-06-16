// 인앱 브라우저 감지 + 외부 브라우저 강제 점프 헬퍼.
// Google OAuth 는 임베디드 웹뷰를 차단(disallowed_useragent 403)하므로,
// 카톡/네이버앱 등 인앱에서 진입한 사용자를 외부 브라우저로 보내야 함.

export type InAppKind = 'kakaotalk' | 'naver' | 'instagram' | 'facebook' | 'line' | 'other' | null;

// User-Agent 로 인앱 브라우저 종류 판별. SSR 안전(window 없으면 null).
export function detectInAppBrowser(): InAppKind {
    if (typeof navigator === 'undefined') return null;
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes('kakaotalk')) return 'kakaotalk';
    if (ua.includes('naver') || ua.includes('naversearchapp')) return 'naver';
    if (ua.includes('instagram')) return 'instagram';
    if (ua.includes('fb_iab') || ua.includes('fbav') || ua.includes('fban')) return 'facebook';
    if (ua.includes('line/')) return 'line';

    return null;
}

// 외부 브라우저 자동 점프 가능 여부.
// 카톡(안드/iOS)·네이버앱은 URL scheme 으로 점프 시도 가능, 나머지는 수동 안내만.
export function canForceExternalBrowser(kind: InAppKind): boolean {
    return kind === 'kakaotalk' || kind === 'naver';
}

// 인앱 → 외부 브라우저 강제 점프.
// 안드로이드는 거의 100% 동작, iOS 는 카톡 버전·정책에 따라 실패할 수 있어 fallback 안내가 필요.
export function openInExternalBrowser(kind: InAppKind, targetUrl: string): void {
    if (typeof window === 'undefined') return;

    const encoded = encodeURIComponent(targetUrl);

    if (kind === 'kakaotalk') {
        window.location.href = `kakaotalk://web/openExternal?url=${encoded}`;
        return;
    }

    if (kind === 'naver') {
        window.location.href = `naversearchapp://inappbrowser/close?url=${encoded}&target=new`;
        return;
    }

    // 그 외(인스타·페북·라인 등) 는 강제 점프 수단 없음 — 호출자가 안내 텍스트로 처리.
}

// 안내 모달용 한국어 라벨.
export function inAppLabel(kind: InAppKind): string {
    switch (kind) {
        case 'kakaotalk': return '카카오톡';
        case 'naver': return '네이버앱';
        case 'instagram': return '인스타그램';
        case 'facebook': return '페이스북';
        case 'line': return '라인';
        default: return '인앱';
    }
}
