import React from "react";

/**
 * 로딩용 Travelline 로고 조립 애니메이션.
 * 주황(T 가로획 + 왼쪽 3줄)은 고정, 초록(틸) 3줄이 오른쪽에서 하나씩 미끄러져 들어와 완성 → 반복.
 * 순수 CSS/SVG (keyframe 은 LoadingSkeleton 하단 <style> 참고). reduced-motion 존중.
 */
function AssemblingLogo({ size = 60 }: { size?: number }) {
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
function WavyText({ text, className = '' }: { text: string; className?: string }) {
    return (
        <p className={className} aria-label={text}>
            {Array.from(text).map((ch, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className="tl-wave"
                    style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
                >
                    {ch === ' ' ? ' ' : ch}
                </span>
            ))}
        </p>
    );
}

export function LoadingSkeleton() {
    return (
        <div className="h-dvh w-full flex flex-col bg-white font-sans text-slate-700 overflow-hidden">

            {/* 상단 진행 바 */}
            <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-100">
                <div className="h-full bg-emerald-400 animate-[loading-bar_1.8s_ease-in-out_infinite]" />
            </div>

            {/* 헤더 스켈레톤 — 실제 DashboardHeader 와 동일하게 상단 세이프에어리어(노치/펀치홀) 반영.
                env 는 데스크톱/비노치 웹에서 0 → 무영향, 앱·노치 기기에서만 헤더가 노치 아래로 내려감. */}
            <header className="bg-white border-b shadow-sm shrink-0 pt-[env(safe-area-inset-top)]">
                <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-[29px] bg-gray-200 rounded animate-pulse" />
                        <div className="hidden sm:block w-32 h-5 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
                    </div>
                </div>
            </header>

            {/* 콘텐츠 영역 */}
            <div className="w-full flex-1 min-h-0 max-w-6xl mx-auto bg-white flex flex-col border-x border-gray-100 shadow-xl relative overflow-hidden">
                <main className="flex-1 flex overflow-hidden relative">

                    {/* 왼쪽 사이드바 - 데스크톱만 */}
                    <nav className="hidden md:flex w-20 bg-white border-r border-gray-100 flex-col shrink-0 py-2 h-full z-20 gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-16 flex items-center justify-center">
                                <div className="w-8 h-8 bg-gray-100 rounded animate-pulse" />
                            </div>
                        ))}
                    </nav>

                    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">

                        {/* 타임라인 영역 */}
                        <section className="w-full h-full md:w-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative overflow-hidden flex flex-col">

                            {/* 여행지 카드 스켈레톤 */}
                            <div className="px-4 py-4 border-b border-gray-100 shrink-0 min-h-[100px] flex items-center">
                                <div className="w-full h-[58px] md:h-[72px] bg-rose-50 border border-rose-100 rounded-xl animate-pulse" />
                            </div>

                            {/* 모바일 로딩 - 로고 조립 애니메이션 + 그 아래 웨이브 문구 (데스크톱에선 숨김) */}
                            <div className="md:hidden flex flex-col items-center justify-center gap-4 py-10 shrink-0">
                                <AssemblingLogo size={64} />
                                <WavyText text="여행일정을 불러오고 있습니다" className="text-sm text-slate-500 font-medium" />
                            </div>

                            {/* 로딩 텍스트 + 타임라인 카드 스켈레톤 */}
                            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-6">

                                {/* 데스크톱 로딩 - 로고 조립 애니메이션 + 그 아래 웨이브 문구 */}
                                <div className="hidden md:flex flex-col items-center justify-center gap-3 py-4">
                                    <AssemblingLogo size={52} />
                                    <WavyText text="여행일정을 불러오고 있습니다" className="text-xs text-slate-400 font-medium" />
                                </div>

                                {[0, 1, 2].map((day) => (
                                    <div key={day} className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 px-1">
                                            <div className="w-1.5 h-5 bg-gray-200 rounded-full animate-pulse" />
                                            <div className="w-16 h-5 bg-gray-200 rounded animate-pulse" />
                                            <div className="ml-auto w-12 h-4 bg-gray-100 rounded animate-pulse" />
                                        </div>
                                        <div className="rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm">
                                            {[1, 2].map((card) => (
                                                <div key={card} className="h-[58px] md:h-[72px] border-b border-gray-50 px-3 flex items-center gap-3 animate-pulse">
                                                    <div className="w-1 h-8 bg-gray-100 rounded-r-full shrink-0" />
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 shrink-0" />
                                                    <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                                                        <div className="w-2/5 h-3 bg-gray-200 rounded" />
                                                        <div className="w-3/5 h-2.5 bg-gray-100 rounded" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 데스크톱 우측 인박스 */}
                        <div className="hidden md:flex md:flex-col w-1/2 h-full bg-gray-50">
                            {/* 카테고리 탭 스켈레톤 */}
                            <div className="bg-white border-b border-gray-200 px-4 py-3 flex flex-col gap-2 shrink-0">
                                <div className="flex gap-2">
                                    {[80, 64, 56].map((w, i) => (
                                        <div key={i} className={`h-7 w-[${w}px] rounded-full bg-gray-100 animate-pulse`} style={{ width: w }} />
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {[56, 48, 56, 72, 48].map((w, i) => (
                                        <div key={i} className="h-7 rounded-full bg-gray-100 animate-pulse" style={{ width: w }} />
                                    ))}
                                </div>
                            </div>
                            {/* 카드 리스트 스켈레톤 */}
                            <div className="flex-1 p-4 space-y-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-[58px] md:h-[72px] rounded-xl bg-white border border-gray-100 shadow-sm px-3 flex items-center gap-3 animate-pulse">
                                        <div className="w-1 h-8 bg-gray-100 rounded-r-full shrink-0" />
                                        <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0" />
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <div className="w-1/3 h-3 bg-gray-200 rounded" />
                                            <div className="w-1/2 h-2.5 bg-gray-100 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 모바일 우측 인박스 토글 버튼 (스켈레톤) */}
                        <div className="md:hidden fixed right-0 top-[62%] -translate-y-1/2 z-[60] w-8 h-20 rounded-l-lg bg-emerald-200 shadow-lg animate-pulse" />

                    </div>
                </main>
            </div>

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
        </div>
    );
}
