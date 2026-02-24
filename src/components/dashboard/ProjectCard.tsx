'use client';

import { Calendar, MoreHorizontal, Plane, Briefcase, Trash2, Pencil } from "lucide-react";
import { Project } from "@/types/project";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Confirm } from "@/components/board/Confirm";

interface ProjectCardProps {
  project: Project;
  onDelete?: (projectId: string) => void;
  onEdit?: (projectId: string, newTitle: string) => void;
  colorIndex?: number; // 0~4 순환 색상 인덱스
}

// 5가지 색상 팔레트 (순환)
const COLOR_PALETTES = [
  { bar: "bg-orange-400", icon: "bg-orange-50 text-orange-500", badge: "bg-orange-100 text-orange-600", hover: "group-hover:text-orange-500" }, // 오렌지
  { bar: "bg-teal-400", icon: "bg-teal-50 text-teal-600", badge: "bg-teal-100 text-teal-700", hover: "group-hover:text-teal-500" }, // 틸
  { bar: "bg-violet-400", icon: "bg-violet-50 text-violet-600", badge: "bg-violet-100 text-violet-700", hover: "group-hover:text-violet-500" }, // 바이올렛
  { bar: "bg-rose-400", icon: "bg-rose-50 text-rose-500", badge: "bg-rose-100 text-rose-600", hover: "group-hover:text-rose-500" }, // 로즈
  { bar: "bg-sky-400", icon: "bg-sky-50 text-sky-600", badge: "bg-sky-100 text-sky-700", hover: "group-hover:text-sky-500" }, // 스카이
];

export default function ProjectCard({ project, onDelete, onEdit, colorIndex = 0 }: ProjectCardProps) {
  const isTravel = project.type === "travel";
  const palette = isTravel ? COLOR_PALETTES[colorIndex % COLOR_PALETTES.length] : { bar: "bg-purple-500", icon: "bg-purple-50 text-purple-600", badge: "bg-purple-100 text-purple-700", hover: "group-hover:text-purple-500" };
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDeleteConfirm = async () => {
    setShowConfirm(false);
    setDeleting(true);
    try {
      const res = await fetch(`/api/projects/${project.id}`, { method: 'DELETE' });
      if (res.ok) {
        onDelete?.(project.id);
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch {
      alert('삭제 중 오류가 발생했습니다.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="relative">
      {/* 삭제 확인 다이얼로그 */}
      {showConfirm && (
        <Confirm
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowConfirm(false)}
        >
          <span className="font-bold">"{project.title}"</span> 프로젝트를 삭제할까요?<br />
          <span className="text-sm text-rose-700/70">삭제하면 복구할 수 없어요.</span>
        </Confirm>
      )}

      <Link href={`/room/${project.id}`} className="block">
        <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group flex relative overflow-hidden h-[140px] ${deleting ? 'opacity-50 pointer-events-none' : ''}`}>

          {/* 좌측 포인트 바 */}
          <div className={`w-1.5 h-full ${palette.bar}`} />

          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${palette.icon}`}>
                  {isTravel ? <Plane className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                </div>
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  {isTravel ? "Travel Plan" : "Work Project"}
                </span>
              </div>

              {/* ... 메뉴 버튼 */}
              <div ref={menuRef} className="relative" onClick={e => e.preventDefault()}>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(!menuOpen); }}
                  className="text-slate-300 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>

                {/* 드롭다운 메뉴 */}
                {menuOpen && (
                  <div className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                    {/* 수정 버튼 */}
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(false); onEdit && onEdit(project.id, project.title); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                      수정
                    </button>
                    {/* 삭제 버튼 */}
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(false); setShowConfirm(true); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      삭제
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3 className={`text-base font-bold text-slate-700 mb-1 ${palette.hover} transition-colors line-clamp-2`}>
              {project.title}
            </h3>

            <div className="mt-auto flex justify-between items-center">
              <div className={`px-3 py-1 rounded-md text-[11px] font-bold ${palette.badge}`}>
                {isTravel ? "D-Day 체크" : "진행중"}
              </div>
              <div className="flex items-center text-slate-400 text-[12px]">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {project.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}