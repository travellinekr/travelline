"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, LogIn, ChevronRight, MapPin, Users, Lightbulb, Plane, Star, Globe, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectCard from "@/components/dashboard/ProjectCard";
import CreateProjectModal from "@/components/dashboard/CreateProjectModal";
import { Project } from "@/types/project";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

// ─── 롤링 배너 카드 데이터 ────────────────────────────────
const ROLLING_CARDS = [
  {
    id: "shared-1",
    type: "shared",
    icon: <Users className="w-5 h-5" />,
    badge: "✈️ 공유 플랜",
    title: "오사카 3박4일 완벽 가이드",
    desc: "도톤보리, 유니버셜 스튜디오, 나라 당일치기까지!",
    tag: "일본",
    color: "from-orange-400 to-rose-400",
  },
  {
    id: "shared-2",
    type: "shared",
    icon: <MapPin className="w-5 h-5" />,
    badge: "🗺️ 공유 플랜",
    title: "파리 신혼여행 5박6일",
    desc: "에펠탑, 루브르 박물관, 베르사유 궁전 완벽 코스",
    tag: "프랑스",
    color: "from-pink-400 to-purple-400",
  },
  {
    id: "how-1",
    type: "guide",
    icon: <Lightbulb className="w-5 h-5" />,
    badge: "💡 사용 가이드",
    title: "Travelline 시작하기",
    desc: "여행 카드를 드래그&드롭으로 타임라인에 배치해보세요. 친구와 실시간 협업도 가능해요!",
    tag: "튜토리얼",
    color: "from-teal-400 to-cyan-400",
  },
  {
    id: "shared-3",
    type: "shared",
    icon: <Plane className="w-5 h-5" />,
    badge: "✈️ 공유 플랜",
    title: "제주도 가족여행 4박5일",
    desc: "한라산 트레킹, 성산일출봉, 협재해수욕장 코스",
    tag: "제주",
    color: "from-emerald-400 to-teal-400",
  },
  {
    id: "how-2",
    type: "guide",
    icon: <Star className="w-5 h-5" />,
    badge: "💡 사용 가이드",
    title: "실시간 협업으로 함께 계획하기",
    desc: "링크 공유만으로 친구, 가족과 함께 여행 보드를 편집할 수 있어요.",
    tag: "협업",
    color: "from-violet-400 to-indigo-400",
  },
];

// ─── 둘러보기 배너 컴포넌트 (3칸 롤링 그리드) ────────────
function RollingBanner() {
  const [idx, setIdx] = useState(0);
  const total = ROLLING_CARDS.length; // 5
  const router = useRouter();

  // 3초마다 1칸씩 전진
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(t);
  }, [total]);

  // 데스크탑: 3장 슬라이싱 (순환)
  const desktopCards = [0, 1, 2].map((offset) => ROLLING_CARDS[(idx + offset) % total]);
  // 모바일: 1장
  const mobileCard = ROLLING_CARDS[idx];

  return (
    <section className="w-full bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-700">둘러보기</h2>
            <p className="text-sm text-slate-400">공유된 여행 플랜과 사용 가이드를 확인하세요</p>
          </div>
          <button
            onClick={() => router.push('/explore')}
            className="flex items-center gap-1 text-sm font-semibold text-slate-400 hover:text-orange-500 transition-colors group"
          >
            더보기
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 데스크탑: 3칸 롤링 그리드 */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {desktopCards.map((card, i) => (
            <div
              key={`${card.id}-${idx}-${i}`}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-5 text-white h-[140px] flex flex-col justify-between cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-200 animate-in fade-in duration-500`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold">
                  {card.icon}
                  {card.badge}
                </div>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">{card.tag}</span>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 line-clamp-1">{card.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 모바일: 1장 롤링 */}
        <div className="md:hidden">
          <div
            key={`mobile-${idx}`}
            className={`bg-gradient-to-br ${mobileCard.color} rounded-2xl p-5 text-white h-[120px] flex flex-col justify-between animate-in fade-in duration-500`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold">
                {mobileCard.icon}
                {mobileCard.badge}
              </div>
              <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">{mobileCard.tag}</span>
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">{mobileCard.title}</h3>
              <p className="text-white/80 text-xs line-clamp-2">{mobileCard.desc}</p>
            </div>
          </div>
          {/* 인디케이터 */}
          <div className="flex justify-center gap-1.5 mt-3">
            {ROLLING_CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-slate-600" : "w-1.5 bg-slate-300"}`}
              />
            ))}
          </div>
        </div>

        {/* 데스크탑 인디케이터 */}
        <div className="hidden md:flex justify-center gap-1.5 mt-4">
          {ROLLING_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-slate-600" : "w-1.5 bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 푸터 컴포넌트 ────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full mt-auto py-6 px-6">
      <div className="max-w-6xl mx-auto bg-slate-300 text-slate-700 rounded-2xl px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-black text-xl tracking-tight">Travelline</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              여행 타임라인으로 더 스마트하게,<br />
              친구와 실시간으로 함께 계획하세요.
            </p>
          </div>

          {/* 회사 정보 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">회사 정보</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500 shrink-0" />
                <span>YoonTech (윤테크)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>서울특별시 강남구 테헤란로 427</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>contact@yoontech.kr</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>02-1234-5678</span>
              </li>
            </ul>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">서비스</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">고객문의</a></li>
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-400 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © 2026 YoonTech (윤테크). All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            사업자등록번호: 123-45-67890 | 통신판매업신고: 제2026-서울강남-0001호
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── 메인 대시보드 ────────────────────────────────────────
export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<{ id: string; title: string } | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setProjects([]);
      return;
    }
    const fetchProjects = async () => {
      setProjectsLoading(true);
      const [{ data: myProjects }, { data: sharedMembers }] = await Promise.all([
        supabase.from("projects").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("project_members").select("project_id, role, projects(*)").eq("user_id", user.id).neq("role", "owner"),
      ]);
      const myIds = new Set((myProjects || []).map((p: any) => p.id));
      const sharedProjects = (sharedMembers || []).map((m: any) => m.projects).filter((p: any) => p && !myIds.has(p.id));
      const all = [...(myProjects || []), ...sharedProjects].sort(
        (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setProjects(
        all.map((item: any) => ({
          id: item.id,
          title: item.name,
          type: (item.type as "travel" | "work") || "travel",
          desc: "새로운 계획입니다.",
          date: new Date(item.created_at).toLocaleDateString(),
        }))
      );
      setProjectsLoading(false);
    };
    fetchProjects();
  }, [user]);

  const handleCreateProject = async (title: string, type: "travel" | "work") => {
    if (!user) { router.push("/login"); return; }
    const { data, error } = await supabase
      .from("projects")
      .insert([{ name: title, user_id: user.id }])
      .select();
    if (error) { console.error("프로젝트 생성 실패:", error.message); alert(`저장 실패: ${error.message}`); return; }
    if (data && data[0]) {
      setProjects([
        { id: data[0].id, title: data[0].name, type: "travel", desc: "새로운 계획입니다.", date: new Date(data[0].created_at).toLocaleDateString() },
        ...projects,
      ]);
    }
  };

  // 프로젝트 이름 수정
  const handleEditProject = async (newTitle: string) => {
    if (!editTarget) return;
    const { error } = await supabase
      .from("projects")
      .update({ name: newTitle })
      .eq("id", editTarget.id);
    if (error) { console.error("수정 실패:", error.message); return; }
    setProjects((prev) => prev.map((p) => p.id === editTarget.id ? { ...p, title: newTitle } : p));
    setEditTarget(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      {/* ① 헤더 */}
      <DashboardHeader />

      {/* ② 광고 / 공유카드 롤링 배너 */}
      <RollingBanner />

      {/* ③ 나의 여행 계획 */}
      <main className="flex-1 max-w-6xl w-full mx-auto py-8 md:py-10 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">나의 여행 계획</h2>
            <p className="text-sm text-slate-400">진행 중인 여행 계획을 확인하고 새로운 여행을 시작하세요.</p>
          </div>
          {user && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-800 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              <Plus className="w-4 h-4" /> 새 여행 계획
            </button>
          )}
        </div>

        {/* 비로그인 - 히어로 랜딩 섹션 */}
        {!user && (
          <div className="flex flex-col items-center gap-12 py-10 md:py-16">
            {/* 히어로 */}
            <div className="text-center max-w-2xl mx-auto px-2">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                ✈️ 새로운 여행 계획의 시작
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                여행을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">타임라인</span>으로<br className="hidden sm:block" /> 함께 계획하세요
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
                드래그&드롭으로 쉽게 일정 구성, 친구와 실시간 협업, 지도 연동까지.<br className="hidden md:block" />
                여행의 모든 순간을 Travelline으로 완성하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4" /> 무료로 시작하기
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="w-full sm:w-auto bg-white text-slate-700 px-8 py-3.5 rounded-2xl font-bold text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" /> 로그인
                </button>
              </div>
            </div>

            {/* 피처 카드 3개 */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  emoji: "🗓️",
                  color: "bg-orange-50 border-orange-100",
                  iconColor: "text-orange-500",
                  title: "드래그&드롭 타임라인",
                  desc: "항공, 호텔, 맛집, 교통 카드를 끌어다 놓기만 하면 완성",
                },
                {
                  emoji: "👥",
                  color: "bg-teal-50 border-teal-100",
                  iconColor: "text-teal-500",
                  title: "실시간 협업",
                  desc: "링크 하나로 친구, 가족과 함께 보드를 실시간으로 편집",
                },
                {
                  emoji: "🗺️",
                  color: "bg-violet-50 border-violet-100",
                  iconColor: "text-violet-500",
                  title: "지도 연동",
                  desc: "Google Maps로 장소 검색하고 카드에 바로 위치 저장",
                },
              ].map((f) => (
                <div key={f.title} className={`${f.color} border rounded-2xl p-6 flex flex-col gap-3`}>
                  <div className="text-3xl">{f.emoji}</div>
                  <h3 className={`font-bold text-base ${f.iconColor}`}>{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* 하단 CTA */}
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-3">지금 바로 무료로 사용해보세요</p>
              <button
                onClick={() => router.push("/login")}
                className="text-sm font-semibold text-[#FF6B47] hover:underline flex items-center gap-1 mx-auto"
              >
                Google로 1초 로그인 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 로그인 상태: 프로젝트 목록 */}
        {user && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectsLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[140px] bg-white rounded-2xl border border-slate-100 animate-pulse" />
              ))
              : (
                <>
                  {projects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      colorIndex={idx}
                      onDelete={(id) => setProjects((prev) => prev.filter((p) => p.id !== id))}
                      onEdit={(id, title) => setEditTarget({ id, title })}
                    />
                  ))}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50/30 transition-all h-[140px]"
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-white group-hover:scale-110 transition-transform shadow-sm">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm">새로운 계획 만들기</span>
                  </button>
                </>
              )}
          </div>
        )}
      </main>

      {/* ④ 푸터 */}
      <Footer />

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />

      {/* 수정 모달 */}
      <CreateProjectModal
        isOpen={!!editTarget}
        onClose={() => setEditTarget(null)}
        onCreate={handleCreateProject}
        editMode
        initialTitle={editTarget?.title}
        onSave={handleEditProject}
      />
    </div>
  );
}