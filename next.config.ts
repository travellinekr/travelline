import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @supabase/ssr을 서버 전용 패키지로 지정 → 클라이언트 번들에 포함 금지
  // Turbopack이 useSearchParams를 클라이언트 번들에 번들링하는 문제 방지
  serverExternalPackages: ['@supabase/ssr'],

  experimental: {
    serverActions: {
      allowedOrigins: [
        "travelline.co.kr",
        "www.travelline.co.kr",
        "travelline-eta.vercel.app",
      ],
    },
  },
};

export default nextConfig;
