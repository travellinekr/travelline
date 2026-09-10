'use client';

import { MoreHorizontal, Trash2, Pencil, Users } from "lucide-react";
import { Project } from "@/types/project";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Confirm } from "@/components/board/Confirm";
import { supabase } from "@/lib/supabaseClient";
import { CARD_CATEGORY_COLOR, CURSOR_COLORS } from "@/data/colors";

/**
 * CanvasProjectCard — 대시보드(홈)용 여행 보드 카드.
 *
 * Travelline 의 정체성(피그마처럼 여러 명이 커서를 공유하며 함께 편집)을
 * 홈에서부터 보여주기 위해, 카드 상단을 "미니 캔버스 썸네일"로 만든다.
 *   - 점 그리드 배경 = 보드의 무한 캔버스
 *   - 컬러 블록      = 타임라인에 놓인 카드들 (project.id 해시로 고정 배치)
 *   - 커서 화살표    = 실시간 협업 커서 (순수 장식, 실제 접속자 아님)
 *
 * 삭제/수정/소유권 위임 로직은 기존 ProjectCard 와 동일하게 유지한다.
 */

interface CanvasProjectCardProps {
  project: Project;
  onDelete?: (projectId: string) => void;
  onEdit?: (projectId: string, newTitle: string) => void;
  /** 0~n 순환 색상 인덱스 */
  colorIndex?: number;
  /** 내가 만든(또는 소유권을 넘겨받은) 보드인지. 수정·삭제는 소유자만 */
  isOwner?: boolean;
}

// 미니 캔버스에 뿌릴 카테고리 색 (좌측 바 색과 옅은 배경 색을 함께 쓴다)
const PREVIEW_CATS = ["destination", "hotel", "food", "transport", "tourspa", "flight"] as const;

// 문자열 → 안정적인 양수 해시. 같은 보드는 항상 같은 썸네일 배치를 갖는다.
function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// 해시에서 미니 캔버스용 블록 2~3개를 만든다.
function previewBlocks(id: string) {
  const h = hashStr(id);
  const count = 2 + (h % 2); // 2 or 3
  return Array.from({ length: count }).map((_, i) => {
    const seed = hashStr(id + "_" + i);
    const cat = PREVIEW_CATS[seed % PREVIEW_CATS.length];
    return {
      cat,
      top: 14 + ((seed >> 3) % 46),   // %
      left: 10 + ((seed >> 6) % 50),  // %
      width: 30 + ((seed >> 9) % 26), // %
    };
  });
}

export default function CanvasProjectCard({
  project,
  onDelete,
  onEdit,
  colorIndex = 0,
  isOwner = false,
}: CanvasProjectCardProps) {
  const isTravel = project.type === "travel";
  const accentBar = isTravel
    ? [
        CARD_CATEGORY_COLOR.destination,
        CARD_CATEGORY_COLOR.hotel,
        CARD_CATEGORY_COLOR.transport,
        CARD_CATEGORY_COLOR.tourspa,
        CARD_CATEGORY_COLOR.flight,
      ][colorIndex % 5]
    : CARD_CATEGORY_COLOR.shopping;

  const blocks = previewBlocks(project.id);
  // 장식용 커서 색 — 보드마다 다르게, CURSOR_COLORS 에서 2개 골라 고정.
  const cursorA = CURSOR_COLORS[hashStr(project.id) % CURSOR_COLORS.length];
  const cursorB = CURSOR_COLORS[hashStr(project.id + "b") % CURSOR_COLORS.length];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [heirName, setHeirName] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll, true);
    window.addEventListener("resize", closeOnScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeOnScroll, true);
      window.removeEventListener("resize", closeOnScroll);
    };
  }, []);

  // 확인창 전에 편집 권한 멤버가 있는지 본다 → 삭제 vs 소유권 위임 문구 분기.
  const openDeleteConfirm = async () => {
    setMenuOpen(false);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(`/api/projects/${project.id}/members`, {
        headers: { Authorization: `Bearer ${session?.access_token ?? ""}` },
      });
      const { members } = await res.json();
      const editor = (members || []).find((m: any) => m.role === "editor");
      setHeirName(editor ? editor.name : null);
    } catch {
      setHeirName(null);
    }
    setShowConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    setShowConfirm(false);
    setDeleting(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        onDelete?.(project.id);
        if (body?.transferred) {
          alert(`${body.newOwner?.name ?? "멤버"}님에게 소유권을 넘기고 목록에서 제거했어요.`);
        }
      } else {
        alert(body?.error || "삭제에 실패했습니다.");
      }
    } catch {
      alert("삭제 중 오류가 발생했습니다.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="relative">
      {showConfirm && (
        <Confirm onConfirm={handleDeleteConfirm} onCancel={() => setShowConfirm(false)}>
          {heirName ? (
            <>
              <span className="font-bold">&quot;{project.title}&quot;</span> 을(를) 내 목록에서 뺄까요?<br />
              <span className="text-sm text-rose-700/70">
                편집 권한이 있는 <span className="font-semibold">{heirName}</span>님에게 소유권이 넘어가고, 보드는 그대로 유지돼요.
              </span>
            </>
          ) : (
            <>
              <span className="font-bold">&quot;{project.title}&quot;</span> 프로젝트를 삭제할까요?<br />
              <span className="text-sm text-rose-700/70">삭제하면 복구할 수 없어요.</span>
            </>
          )}
        </Confirm>
      )}

      <Link href={`/room/${project.id}`} className="block">
        <div
          className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md ${
            deleting ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {/* ── 미니 캔버스 썸네일 ─────────────────────────────── */}
          <div
            className="relative h-[104px] md:h-[116px] border-b border-slate-100 bg-slate-50"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            {blocks.map((b, i) => {
              const c = CARD_CATEGORY_COLOR[b.cat];
              return (
                <div
                  key={i}
                  className={`absolute flex items-center overflow-hidden rounded-md border ${c.border} ${c.soft} shadow-sm`}
                  style={{ top: `${b.top}%`, left: `${b.left}%`, width: `${b.width}%`, height: "22px" }}
                >
                  <span className={`h-full w-1 shrink-0 ${c.bar}`} />
                  <span className="mx-1.5 h-1.5 flex-1 rounded-full bg-white/70" />
                </div>
              );
            })}

            {/* 장식용 협업 커서 (실제 접속자 아님) */}
            <CursorMark className="absolute left-[18%] top-[58%]" color={cursorA} />
            <CursorMark className="absolute right-[16%] top-[24%]" color={cursorB} />
          </div>

          {/* ── 파일명 줄 ─────────────────────────────────────── */}
          <div className="flex items-center gap-2 px-3 py-2.5">
            <span className={`h-4 w-4 shrink-0 rounded-[5px] ${accentBar.bar}`} />
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold text-slate-800">{project.title}</h3>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-400">
                <Users className="h-3 w-3" />
                {isTravel ? "여행 보드" : "워크 보드"} · {project.date}
              </p>
            </div>

            {/* 소유자만 ... 메뉴 노출 */}
            <div
              ref={menuRef}
              className={`relative shrink-0 ${isOwner ? "" : "invisible pointer-events-none"}`}
              onClick={(e) => e.preventDefault()}
            >
              <button
                ref={menuBtnRef}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!menuOpen && menuBtnRef.current) {
                    const rect = menuBtnRef.current.getBoundingClientRect();
                    setMenuPos({ top: rect.bottom + 6, right: window.innerWidth - rect.right });
                  }
                  setMenuOpen(!menuOpen);
                }}
                className="rounded-lg p-1 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>

              {menuOpen && (
                <div
                  style={{ top: menuPos.top, right: menuPos.right }}
                  className="fixed z-[9999] w-36 rounded-xl border border-gray-100 bg-white py-1 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setMenuOpen(false);
                      onEdit && onEdit(project.id, project.title);
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    <Pencil className="h-4 w-4" />
                    수정
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openDeleteConfirm();
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    삭제
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// 피그마풍 커서 화살표 — 장식 전용.
function CursorMark({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className={className}
      style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.15))" }}
      aria-hidden="true"
    >
      <path d="M4 2.5 L19 11 L11.5 12.5 L8.5 20 Z" fill={color} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
