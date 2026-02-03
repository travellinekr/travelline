import React from "react";

export function LoadingSkeleton() {
    return (
        <div className="h-screen w-full flex flex-col items-center bg-white font-sans text-slate-700 relative overflow-hidden">
            {/* 헤더 스켈레톤 */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-10 shrink-0 w-full max-w-[1000px]">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
                    <div className="flex flex-col gap-2">
                        <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-gray-100 rounded animate-pulse"></div>
                    </div>
                </div>
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white animate-pulse"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white animate-pulse"></div>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden relative w-full max-w-[1000px] border-x border-gray-100">
                {/* 왼쪽 네비게이션 스켈레톤 */}
                <nav className="w-14 md:w-20 bg-white border-r border-gray-100 flex flex-col shrink-0 py-2 h-full z-20 gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-16 flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-100 rounded animate-pulse"></div>
                        </div>
                    ))}
                </nav>

                <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">
                    <section className="w-full h-full md:w-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative overflow-hidden flex flex-col">
                        {/* 여행지 카드 스켈레톤 (80px) */}
                        <div className="px-4 py-2 border-b border-gray-200 shrink-0 min-h-[100px]">
                            <div className="w-full h-[72px] bg-rose-50/50 border border-rose-100 rounded-xl animate-pulse"></div>
                        </div>

                        {/* 타임라인 스켈레톤 */}
                        <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-6">
                            {[0, 1, 2].map((day) => (
                                <div key={day} className="mb-6">
                                    {/* 날짜 헤더 */}
                                    <div className="flex items-center gap-2 mb-2 px-1">
                                        <div className="w-1.5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                                        <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                    {/* 💥 카드 리스트 스켈레톤 (72px 슬림형) */}
                                    <div className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                                        {[1, 2, 3].map((card) => (
                                            <div key={card} className="h-[72px] border-b border-gray-100 px-3 flex items-center gap-3 animate-pulse">
                                                {/* 왼쪽 컬러바 흉내 */}
                                                <div className="w-1 h-10 bg-gray-100 rounded-r-full"></div>
                                                {/* 아이콘 */}
                                                <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0"></div>
                                                {/* 텍스트 줄 */}
                                                <div className="flex-1 flex flex-col gap-2">
                                                    <div className="w-1/3 h-3 bg-gray-200 rounded"></div>
                                                    <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* PC용 우측 보관함 스켈레톤 */}
                    <div className="hidden md:block w-1/2 h-full bg-gray-50 p-6">
                        <div className="w-full h-full bg-white rounded-xl border border-gray-200 animate-pulse"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
