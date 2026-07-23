import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 모드 하단 Next.js 인디케이터("N" 마크) 숨김 (운영에는 원래 안 보임)
  devIndicators: false,
  // 빌드 시 ESLint 오류 무시 (liveblocks.config.ts 타입 이슈)
  eslint: { ignoreDuringBuilds: true },
  // @supabase/ssr을 서버 전용 패키지로 지정 → 클라이언트 번들에 포함 금지
  // Turbopack이 useSearchParams를 클라이언트 번들에 번들링하는 문제 방지
  serverExternalPackages: ['@supabase/ssr', 'firebase-admin'],

  experimental: {
    serverActions: {
      allowedOrigins: [
        "travelline.co.kr",
        "www.travelline.co.kr",
        "travelline-eta.vercel.app",
      ],
    },
  },

  // Universal Links / App Links 판정 파일 서빙 (Phase 2 딥링크).
  // apple-app-site-association: 확장자 없음 → Vercel 기본 Content-Type 이슈 대비 명시.
  // assetlinks.json: 확장자로 자동 매핑되지만 명시적으로 고정.
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
    ];
  },
};

export default nextConfig;
