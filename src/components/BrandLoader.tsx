import React from "react";

// Travelline 공용 로딩 표현.
//
// 원래 여행보드 LoadingSkeleton 안에만 있던 로고 조립 애니메이션을 꺼내 공용화했다.
// 메인 페이지도 같은 표현을 써야 서비스 인상이 한 가지로 남는다.
// 화면마다 스피너 모양이 다르면 "다른 사이트로 넘어온" 느낌을 준다.

/**
 * 로딩용 Travelline 로고 조립 애니메이션.
 * 주황(T 가로획 + 왼쪽 3줄)은 고정, 초록(틸) 3줄이 오른쪽에서 하나씩 미끄러져 들어와 완성 → 반복.
 * 순수 CSS/SVG. keyframe 은 BrandLoaderStyles 에 있다. reduced-motion 존중.
 */
export function AssemblingLogo({ size = 60 }: { size?: number }) {
    const orange = '#FF6B47';
    const teal = '#5BBFAD';
    return (
        <svg width={size} height={Math.round(size * 36 / 40)} viewBox="0 0 40 36" fill="none" aria-hidden="true">
            {/* 주황 — 고정 */}
            <rect x="0" y="0" width="40" height="8" rx="2" fill={orange} />
            <rect x="0" y="12" width="14" height="7" rx="1.5" fill={orange} />
            <rect x="0" y="21" width="14" height="7" rx="1.5" fill={orange} />
            <rect x="0" y="30" width="14" height="6" rx="1.5" fill={orange} />
            {/* 초록(틸) — 오른쪽에서 하나씩 슬라이드-인 */}
            <rect className="tl-tb tl-tb1" x="16" y="12" width="24" height="7" rx="1.5" fill={teal} />
            <rect className="tl-tb tl-tb2" x="16" y="21" width="24" height="7" rx="1.5" fill={teal} />
            <rect className="tl-tb tl-tb3" x="16" y="30" width="24" height="6" rx="1.5" fill={teal} />
        </svg>
    );
}

/**
 * 로딩 문구를 글자 단위로 순차 웨이브(살짝 떠오르며 볼드) 처리.
 * 접근성: 컨테이너 aria-label 로 전체 문구 읽고, 개별 글자 span 은 aria-hidden.
 */
export function WavyText({ text, className = '' }: { text: string; className?: string }) {
    return (
        <p className={className} aria-label={text}>
            {Array.from(text).map((ch, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className="tl-wave"
                    style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
                >
                    {ch === ' ' ? ' ' : ch}
                </span>
            ))}
        </p>
    );
}

/**
 * 위 두 컴포넌트와 상단 진행 바가 쓰는 keyframe 모음.
 * 한 화면에 두 번 렌더돼도 같은 CSS 라 무해하다.
 */
export function BrandLoaderStyles() {
    return (
        <style>{`
            @keyframes loading-bar {
                0% { width: 0%; margin-left: 0%; }
                50% { width: 60%; margin-left: 20%; }
                100% { width: 0%; margin-left: 100%; }
            }
            /* 로고 조립: 초록(틸) 3줄이 오른쪽에서 하나씩 미끄러져 들어옴 */
            @keyframes tl-slot {
                0%   { transform: translateX(48px); opacity: 0; }
                20%  { transform: translateX(-1.5px); opacity: 1; }
                26%  { transform: translateX(0); }
                76%  { transform: translateX(0); opacity: 1; }
                86%  { transform: translateX(0); opacity: 0; }
                100% { transform: translateX(48px); opacity: 0; }
            }
            .tl-tb  { animation: tl-slot 5.5s cubic-bezier(.22,.9,.3,1) infinite; }
            .tl-tb1 { animation-delay: 0s; }
            .tl-tb2 { animation-delay: .5s; }
            .tl-tb3 { animation-delay: 1s; }
            /* 로딩 문구: 글자마다 순차로 살짝 떠오르며 볼드 — 웨이브 */
            @keyframes tl-wave {
                0%, 55%, 100% { transform: translateY(0); font-weight: 500; }
                18% { transform: translateY(-3px); font-weight: 800; }
            }
            .tl-wave { display: inline-block; animation: tl-wave 1.9s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
                .tl-tb { animation: none; transform: none; opacity: 1; }
                .tl-wave { animation: none; }
            }
        `}</style>
    );
}

/** 상단 진행 바 — 화면 최상단에 고정. 무엇이 얼마나 남았는지 모를 때 쓰는 무한 왕복 바. */
export function TopProgressBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-100">
            <div className="h-full bg-emerald-400 animate-[loading-bar_1.8s_ease-in-out_infinite]" />
        </div>
    );
}

/**
 * 바로 쓰는 전체 로딩 표현 — 상단 진행 바 + 로고 조립 + 웨이브 문구.
 * 여행보드처럼 화면 골격까지 흉내낼 필요가 없는 곳(메인 등)에 쓴다.
 */
export function BrandLoader({
    text = '불러오는 중입니다',
    size = 60,
    topBar = true,
    className = '',
}: {
    text?: string;
    size?: number;
    topBar?: boolean;
    className?: string;
}) {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
            {topBar && <TopProgressBar />}
            <AssemblingLogo size={size} />
            <WavyText text={text} className="text-sm text-slate-500 font-medium" />
            <BrandLoaderStyles />
        </div>
    );
}
