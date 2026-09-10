'use client';

import Link from "next/link";
import { Plus, MousePointer2, BookOpen, MessageSquareText } from "lucide-react";

/**
 * CreateCanvasStrip — 홈 상단의 "새 보드 만들기" 진입 영역.
 *
 * 피그마/캔바의 홈처럼, 가장 먼저 보이는 것이 "새로 만들기" 가 되도록 한다.
 * 점 그리드 + 협업 커서 장식으로 Travelline = 함께 그리는 캔버스라는 인상을 준다.
 */
export default function CreateCanvasStrip({ onNew }: { onNew: () => void }) {
  return (
    <section className="w-full border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 pb-3 md:pt-6 md:pb-4">
        <button
          type="button"
          onClick={onNew}
          className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left transition-colors hover:border-emerald-300 hover:bg-emerald-50/30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          {/* 장식용 협업 커서 */}
          <MousePointer2
            className="pointer-events-none absolute left-[8%] top-6 hidden h-5 w-5 -scale-x-100 fill-rose-400 text-white sm:block"
            aria-hidden="true"
          />
          <MousePointer2
            className="pointer-events-none absolute right-[10%] bottom-5 hidden h-5 w-5 fill-sky-400 text-white sm:block"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-4 p-5 md:flex-row md:items-center md:p-7">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-800 md:text-xl">
                새 여행 보드를 만들어 함께 계획해보세요
              </h2>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">
                드래그&amp;드롭 타임라인 · 실시간 커서 공유 · 지도 연동
              </p>
            </div>
            {/* 실제 클릭은 바깥 button 이 받는다. 여기는 버튼처럼 보이는 라벨. */}
            <span className="inline-flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-6 text-base font-semibold text-white transition-colors group-hover:bg-emerald-600">
              <Plus className="h-4 w-4" /> 새 보드 만들기
            </span>
          </div>
        </button>

        {/* 빠른 시작 칩 */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onNew}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Plus className="h-3.5 w-3.5" /> 빈 보드로 시작
          </button>
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <BookOpen className="h-3.5 w-3.5" /> 사용 가이드
          </Link>
          <Link
            href="/community"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <MessageSquareText className="h-3.5 w-3.5" /> 커뮤니티 둘러보기
          </Link>
        </div>
      </div>
    </section>
  );
}
