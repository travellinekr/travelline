"use client";

import { useDroppable } from "@dnd-kit/core";

// 📱 모바일 우측 드래그 삭제 드롭존
// inboxOpen=true (인박스 오픈 상태): 인박스 카테고리 탭(100px) 아래부터
// inboxOpen=false (타임라인 상태): DashboardHeader(64px) + 최종여행지(100px) = 164px 아래부터
export function RightDeleteZone({ isActive, inboxOpen = false }: { isActive: boolean; inboxOpen?: boolean }) {
    const { setNodeRef } = useDroppable({ id: 'right-delete-zone' });
    const topOffset = inboxOpen ? 100 : 164;
    return (
        <div
            ref={setNodeRef}
            style={{ top: `${topOffset}px` }}
            className={`md:hidden fixed right-0 bottom-0 w-[20%] z-[55] flex items-center justify-center pointer-events-none transition-colors duration-150 ${
                isActive
                    ? 'bg-red-500/60 border-l-4 border-red-500'
                    : 'bg-red-500/15 border-l-2 border-red-300'
            }`}
        >
            <span
                style={{ writingMode: 'vertical-rl' }}
                className={`font-bold tracking-widest ${
                    isActive ? 'text-white text-base' : 'text-red-600/70 text-sm'
                }`}
            >
                드롭하면 삭제 됩니다
            </span>
        </div>
    );
}
