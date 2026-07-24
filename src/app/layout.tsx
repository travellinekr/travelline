import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Nanum_Pen_Script } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { GlobalSessionWatcher } from "@/components/auth/GlobalSessionWatcher";
import { AppUrlOpenWatcher } from "@/components/AppUrlOpenWatcher";
import { PushNotificationsInit } from "@/components/PushNotificationsInit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 온보딩 코치마크 손글씨체 (칠판 필기 느낌).
// subsets 에 'korean' 이 타입에 없어 preload:false 로 두고 전체 글리프(한글 포함) 로드.
const nanumPen = Nanum_Pen_Script({
  variable: "--font-hand",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Travelline",
  description: "여행 타임라인으로 더 스마트하게 여행 계획을 세우세요",
};

// viewport-fit=cover: iOS 노치/펀치홀 대응. 이게 있어야 env(safe-area-inset-*)가 실제 값으로 계산됨.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nanumPen.variable} antialiased`}
        suppressHydrationWarning
      >
        <GlobalSessionWatcher />
        <AppUrlOpenWatcher />
        <PushNotificationsInit />
        {/* Suspense: Turbopack SSR 빌드 시 useSearchParams 오류 방지 */}
        <Suspense fallback={null}>
          {children}
        </Suspense>

        {/* Google Maps 인증 실패 시 에러 억제 (개발 환경 RefererNotAllowedMapError 방지) */}
        <script dangerouslySetInnerHTML={{ __html: 'window.gm_authFailure = function() { console.warn("[Maps] API 키 도메인 설정을 확인하세요."); };' }} />

        {/* Google Maps API */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,marker&loading=async`}
          strategy="afterInteractive"
        />

        {/* Kakao JS SDK (공유하기) — init 은 사용처(ShareModal)에서 지연 실행 */}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
