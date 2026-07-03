import type { CapacitorConfig } from '@capacitor/cli';

// Capacitor 서버 모드 설정.
// - server.url: 현재 배포된 travelline.co.kr 을 WebView 로 열기 → 기존 웹 로직 100% 재사용
// - webDir: 오프라인 fallback HTML 용 최소 로컬 자산 폴더
// - allowNavigation: 외부 로그인/스토리지/API 도메인 사전 등록 (WKWebView CSP 우회)
//
// WebView 특이사항 대응:
// - Supabase auth · Liveblocks websocket · Google Maps · Unsplash 은 외부 도메인이므로
//   allowNavigation 에 명시하지 않으면 WKWebView 가 external browser 로 튐

const config: CapacitorConfig = {
    appId: 'kr.travelline.app',
    appName: 'Travelline',
    webDir: 'capacitor',
    server: {
        url: 'https://travelline.co.kr',
        cleartext: false,
        allowNavigation: [
            '*.travelline.co.kr',
            'travelline.co.kr',
            '*.supabase.co',
            '*.liveblocks.io',
            'maps.googleapis.com',
            '*.googleapis.com',
            'api.unsplash.com',
            'images.unsplash.com',
            '*.unsplash.com',
            // Google OAuth
            'accounts.google.com',
        ],
    },
    ios: {
        // iOS 노치/홈인디케이터 자동 safe-area 처리
        contentInset: 'automatic',
        // 스크롤 바운스 활성 (네이티브 느낌)
        scrollEnabled: true,
    },
    android: {
        // 뒤로가기 버튼 → WebView history 우선
        allowMixedContent: false,
    },
};

export default config;
