import React from "react";

export function LoadingSkeleton() {
    return (
        <div className="h-screen w-full flex flex-col bg-white font-sans text-slate-700 overflow-hidden">

            {/* 헤더 스켈레톤 - DashboardHeader와 동일한 구조 */}
            <header className="h-16 sm:h-20 bg-white border-b shadow-sm shrink-0">
                <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
                    {/* 로고 + 타이틀 */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-[29px] bg-gray-200 rounded animate-pulse" />
                        <div className="hidden sm:block w-28 h-6 bg-gray-200 rounded animate-pulse" />
                    </div>
                    {/* 아바타 */}
                    <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
                </div>
            </header>

            {/* 콘텐츠 영역 - max-w-6xl 박스 */}
            <div className="w-full flex-1 min-h-0 max-w-6xl mx-auto bg-white flex flex-col border-x border-gray-100 shadow-xl relative overflow-hidden">
                <main className="flex-1 flex overflow-hidden relative">

                    {/* 왼쪽 사이드바 네비 - 데스크톱만 표시 (실제 Sidebar와 동일) */}
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
                            <div className="px-4 py-2 border-b border-gray-200 shrink-0 min-h-[100px]">
                                <div className="w-full h-[72px] bg-rose-50/50 border border-rose-100 rounded-xl animate-pulse" />
                            </div>

                            {/* 타임라인 카드 스켈레톤 */}
                            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-6">
                                {[0, 1, 2].map((day) => (
                                    <div key={day} className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 px-1">
                                            <div className="w-1.5 h-5 bg-gray-200 rounded-full animate-pulse" />
                                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
                                        </div>
                                        <div className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                                            {[1, 2, 3].map((card) => (
                                                <div key={card} className="h-[72px] border-b border-gray-100 px-3 flex items-center gap-3 animate-pulse">
                                                    <div className="w-1 h-10 bg-gray-100 rounded-r-full" />
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0" />
                                                    <div className="flex-1 flex flex-col gap-2">
                                                        <div className="w-1/3 h-3 bg-gray-200 rounded" />
                                                        <div className="w-2/3 h-2 bg-gray-100 rounded" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* PC 우측 보관함 */}
                        <div className="hidden md:block w-1/2 h-full bg-gray-50 p-6">
                            <div className="w-full h-full bg-white rounded-xl border border-gray-200 animate-pulse" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
