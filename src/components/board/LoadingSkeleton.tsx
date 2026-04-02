import React from "react";

export function LoadingSkeleton() {
    return (
        <div className="h-screen w-full flex flex-col bg-white font-sans text-slate-700 overflow-hidden">

            {/* 상단 진행 바 */}
            <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-100">
                <div className="h-full bg-emerald-400 animate-[loading-bar_1.8s_ease-in-out_infinite]" />
            </div>

            {/* 헤더 스켈레톤 */}
            <header className="h-16 sm:h-20 bg-white border-b shadow-sm shrink-0">
                <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
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

                            {/* 모바일 로딩 텍스트 - 데스크톱에선 숨김 */}
                            <div className="md:hidden flex flex-col items-center justify-center gap-3 py-8 shrink-0">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
                                </div>
                                <p className="text-sm text-slate-500 font-medium">여행일정을 불러오고 있습니다.</p>
                            </div>

                            {/* 로딩 텍스트 + 타임라인 카드 스켈레톤 */}
                            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-6">

                                {/* 데스크톱 로딩 안내 텍스트 */}
                                <div className="hidden md:flex items-center justify-center gap-2 py-2">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium">여행일정을 불러오고 있습니다.</p>
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

                        {/* 모바일 하단 인박스 핸들 */}
                        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] h-[58px] flex flex-col items-center justify-center gap-1">
                            <div className="w-10 h-1 bg-gray-200 rounded-full" />
                            <p className="text-[11px] text-slate-300 font-medium">보관함</p>
                        </div>

                    </div>
                </main>
            </div>

            <style>{`
                @keyframes loading-bar {
                    0% { width: 0%; margin-left: 0%; }
                    50% { width: 60%; margin-left: 20%; }
                    100% { width: 0%; margin-left: 100%; }
                }
            `}</style>
        </div>
    );
}
