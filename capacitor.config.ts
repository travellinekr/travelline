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
        // canonical 도메인(www)로 직접 로드. apex(travelline.co.kr)는 www 로 308 리다이렉트되므로
        // apex 로 두면 매 실행 리다이렉트 + OAuth 딥링크 복귀 URL 이 www 로 튕겨 App Link 불일치.
        url: 'https://www.travelline.co.kr',
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
            // Google OAuth (참고: 구글은 WebView OAuth 를 차단 → 앱에선 시스템 브라우저 필요)
            'accounts.google.com',
            // 카카오 OAuth — WebView 허용. 미등록 시 외부 브라우저로 튕겨 세션이 앱에 안 남음
            'kauth.kakao.com',
            '*.kakao.com',
            'accounts.kakao.com',
            // 네이버 OAuth — WebView 허용
            'nid.naver.com',
            '*.naver.com',
        ],
    },
    ios: {
        // safe-area 는 CSS env(safe-area-inset-*) 로 일원화한다(웹/Safari 와 동일).
        // 'automatic' 은 window 스크롤(메인 페이지)에서 position:sticky 헤더와 충돌 →
        // 스크롤 시 상단 여백 누적 + Safari(자동 인셋 없음)와 동작 불일치.
        // 'never' 로 두면 iOS·Android·Safari 모두 env() 한 경로로 통일됨.
        contentInset: 'never',
        // 스크롤 바운스 활성 (네이티브 느낌)
        scrollEnabled: true,
    },
    android: {
        // 뒤로가기 버튼 → WebView history 우선
        allowMixedContent: false,
    },
};

export default config;
