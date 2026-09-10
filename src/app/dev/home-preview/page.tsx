"use client";

/**
 * /dev/home-preview — 홈(로그인 후 대시보드) 리디자인 라이브 프리뷰 (개발 전용).
 *
 * 실제 CreateCanvasStrip / CanvasProjectCard 컴포넌트를 목업 데이터로 렌더한다.
 * 로그인 없이 볼 수 있게 하기 위한 페이지 → 프로덕션에서는 404 (아래 NODE_ENV 가드).
 * 네비게이션 어디에도 링크 없음.
 *
 * 열기:  npm run dev  →  http://localhost:3000/dev/home-preview
 */

import { notFound } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import type { Project } from "@/types/project";
import CreateCanvasStrip from "@/components/dashboard/CreateCanvasStrip";
import CanvasProjectCard from "@/components/dashboard/CanvasProjectCard";
import CreateProjectModal from "@/components/dashboard/CreateProjectModal";

const MOCK_PROJECTS: (Project & { isOwner: boolean })[] = [
  { id: "prev-a1b2c3", title: "2026 오사카 우정여행", type: "travel", desc: "", date: "2026. 8. 12.", isOwner: true },
  { id: "prev-d4e5f6", title: "제주 3박4일 가족여행", type: "travel", desc: "", date: "2026. 7. 30.", isOwner: true },
  { id: "prev-g7h8i9", title: "다낭 신혼여행 계획", type: "travel", desc: "", date: "2026. 9. 1.", isOwner: false },
  { id: "prev-j1k2l3", title: "도쿄 벚꽃 시즌 나들이", type: "travel", desc: "", date: "2026. 3. 20.", isOwner: true },
  { id: "prev-m4n5o6", title: "방콕 미식 투어", type: "travel", desc: "", date: "2026. 6. 5.", isOwner: false },
  { id: "prev-p7q8r9", title: "발리 워케이션", type: "travel", desc: "", date: "2026. 10. 2.", isOwner: true },
];

export default function HomePreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      {/* 개발 프리뷰 표시 바 */}
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-2 text-center text-xs font-semibold text-amber-800">
        개발 프리뷰 · 목업 데이터 · 카드를 눌러도 실제 보드로 이동하지 않아요
      </div>

      {/* 간이 헤더 (실제 헤더 대신 — 로그인 상태 흉내) */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-700">Travelline</span>
          <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm font-bold">나</div>
        </div>
      </header>

      {/* 새 보드 만들기 스트립 */}
      <CreateCanvasStrip onNew={() => setModalOpen(true)} />

      {/* 내 여행 보드 */}
      <main
        className="flex-1 max-w-6xl w-full mx-auto pt-4 pb-6 md:pt-6 md:pb-8 px-4 sm:px-6"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.22) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5 flex items-center gap-2">
              내 여행 보드
              <span className="text-sm font-semibold text-slate-400">{MOCK_PROJECTS.length}</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400">함께 편집 중인 보드를 열어보거나 새 보드를 시작하세요.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-slate-800 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
          >
            <Plus className="w-4 h-4" /> 새 보드
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {MOCK_PROJECTS.map((project, idx) => (
            <CanvasProjectCard key={project.id} project={project} colorIndex={idx} isOwner={project.isOwner} />
          ))}
          <button
            onClick={() => setModalOpen(true)}
            className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 transition-all hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50/30 min-h-[160px]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.28) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
              <Plus className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <span className="text-xs font-bold md:text-sm">새 보드 만들기</span>
          </button>
        </div>
      </main>

      <CreateProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={() => setModalOpen(false)}
      />
    </div>
  );
}
