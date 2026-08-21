'use client';

import { Calendar, MoreHorizontal, Plane, Briefcase, Trash2, Pencil } from "lucide-react";
import { Project } from "@/types/project";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Confirm } from "@/components/board/Confirm";
import { supabase } from "@/lib/supabaseClient";

interface ProjectCardProps {
  project: Project;
  onDelete?: (projectId: string) => void;
  onEdit?: (projectId: string, newTitle: string) => void;
  colorIndex?: number; // 0~4 순환 색상 인덱스
  /** 내가 만든(또는 소유권을 넘겨받은) 보드인지. 수정·삭제는 소유자만 */
  isOwner?: boolean;
}

// 5가지 색상 팔레트 (순환)
const COLOR_PALETTES = [
  { bar: "bg-orange-400", icon: "bg-orange-50 text-orange-500", badge: "bg-orange-100 text-orange-600", hover: "group-hover:text-orange-500" }, // 오렌지
  { bar: "bg-teal-400", icon: "bg-teal-50 text-teal-600", badge: "bg-teal-100 text-teal-700", hover: "group-hover:text-teal-500" }, // 틸
  { bar: "bg-violet-400", icon: "bg-violet-50 text-violet-600", badge: "bg-violet-100 text-violet-700", hover: "group-hover:text-violet-500" }, // 바이올렛
  { bar: "bg-rose-400", icon: "bg-rose-50 text-rose-500", badge: "bg-rose-100 text-rose-600", hover: "group-hover:text-rose-500" }, // 로즈
  { bar: "bg-sky-400", icon: "bg-sky-50 text-sky-600", badge: "bg-sky-100 text-sky-700", hover: "group-hover:text-sky-500" }, // 스카이
];

export default function ProjectCard({ project, onDelete, onEdit, colorIndex = 0, isOwner = false }: ProjectCardProps) {
  const isTravel = project.type === "travel";
  const palette = isTravel ? COLOR_PALETTES[colorIndex % COLOR_PALETTES.length] : { bar: "bg-purple-500", icon: "bg-purple-50 text-purple-600", badge: "bg-purple-100 text-purple-700", hover: "group-hover:text-purple-500" };
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  // 삭제를 누르기 전에 '실제 삭제'인지 '소유권 위임'인지 알려주기 위한 후계자 이름
  const [heirName, setHeirName] = useState<string | null>(null);
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

  // 확인창을 띄우기 전에 편집 권한 멤버가 있는지 본다.
  // 있으면 보드가 지워지는 게 아니라 그 사람에게 넘어가므로 문구가 달라야 한다.
  const openDeleteConfirm = async () => {
    setMenuOpen(false);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(`/api/projects/${project.id}/members`, {
        headers: { Authorization: `Bearer ${session?.access_token ?? ''}` },
      });
      const { members } = await res.json();
      const editor = (members || []).find((m: any) => m.role === 'editor');
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
      // 소유자만 허용하는 API 라 세션 토큰을 실어 보낸다
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }
      const res = await fetch(`/api/projects/${project.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        // 위임이든 삭제든 내 목록에서는 빠진다
        onDelete?.(project.id);
        if (body?.transferred) {
          alert(`${body.newOwner?.name ?? '멤버'}님에게 소유권을 넘기고 목록에서 제거했어요.`);
        }
      } else {
        alert(body?.error || '삭제에 실패했습니다.');
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
          {heirName ? (
            <>
              <span className="font-bold">"{project.title}"</span> 을(를) 내 목록에서 뺄까요?<br />
              <span className="text-sm text-rose-700/70">
                편집 권한이 있는 <span className="font-semibold">{heirName}</span>님에게 소유권이 넘어가고,
                보드는 그대로 유지돼요.
              </span>
            </>
          ) : (
            <>
              <span className="font-bold">"{project.title}"</span> 프로젝트를 삭제할까요?<br />
              <span className="text-sm text-rose-700/70">삭제하면 복구할 수 없어요.</span>
            </>
          )}
        </Confirm>
      )}

      <Link href={`/room/${project.id}`} className="block">
        <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group flex relative overflow-hidden h-[100px] md:h-[120px] ${deleting ? 'opacity-50 pointer-events-none' : ''}`}>

          {/* 좌측 포인트 바 */}
          <div className={`w-1.5 h-full ${palette.bar}`} />

          <div className="px-3 py-2.5 md:px-4 md:py-3 flex flex-col flex-1 min-h-0">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1.5">
                <div className={`p-1.5 rounded-lg ${palette.icon}`}>
                  {isTravel ? <Plane className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  {isTravel ? "Travel Plan" : "Work Project"}
                </span>
              </div>

              {/* ... 메뉴 버튼 — 수정·삭제는 소유자만이므로 소유자에게만 보인다.
                  (서버에서도 owner 를 확인하지만, 눌러서 거절당하는 UI 를 만들지 않기 위함) */}
              <div ref={menuRef} className={`relative ${isOwner ? '' : 'invisible pointer-events-none'}`} onClick={e => e.preventDefault()}>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenuOpen(!menuOpen); }}
                  className="text-slate-300 hover:text-slate-600 p-0.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
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
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); openDeleteConfirm(); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      삭제
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3 className={`text-sm md:text-base font-bold text-slate-700 leading-snug ${palette.hover} transition-colors line-clamp-1 md:line-clamp-2`}>
              {project.title}
            </h3>

            <div className="mt-auto flex justify-between items-center pt-1.5">
              <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${palette.badge}`}>
                {isTravel ? "D-Day 체크" : "진행중"}
              </div>
              <div className="flex items-center text-slate-400 text-[11px]">
                <Calendar className="w-3 h-3 mr-1" />
                {project.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}