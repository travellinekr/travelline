import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travelline",
  description: "여행 타임라인으로 더 스마트하게 여행 계획을 세우세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
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
      </body>
    </html>
  );
}
