"use client";

import { useState, useEffect } from "react";
import { Plus, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectCard from "@/components/dashboard/ProjectCard";
import CreateProjectModal from "@/components/dashboard/CreateProjectModal";
import { Project } from "@/types/project";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(false);

  // 로그인한 경우에만 내 프로젝트 불러오기
  useEffect(() => {
    if (!user) {
      setProjects([]);
      return;
    }
    const fetchProjects = async () => {
      setProjectsLoading(true);

      // 내가 만든 프로젝트 + project_members에 등록된 공유 프로젝트 모두 조회
      const [{ data: myProjects }, { data: sharedMembers }] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false }),
        supabase
          .from('project_members')
          .select('project_id, role, projects(*)')
          .eq('user_id', user.id)
          .neq('role', 'owner'), // owner는 위에서 이미 포함됨
      ]);

      // 공유 프로젝트에서 projects 데이터 추출 (중복 제거)
      const myIds = new Set((myProjects || []).map((p: any) => p.id));
      const sharedProjects = (sharedMembers || [])
        .map((m: any) => m.projects)
        .filter((p: any) => p && !myIds.has(p.id));

      // 합치고 생성일 기준 내림차순 정렬
      const all = [...(myProjects || []), ...sharedProjects]
        .sort((a: any, b: any) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

      const formattedData: Project[] = all.map((item: any) => ({
        id: item.id,
        title: item.title,
        type: item.type,
        desc: item.description || "새로운 계획입니다.",
        date: new Date(item.created_at).toLocaleDateString(),
      }));
      setProjects(formattedData);
      setProjectsLoading(false);
    };

    fetchProjects();
  }, [user]);

  // 프로젝트 생성 (user_id 포함 → 트리거가 자동으로 project_members에 owner 등록)
  const handleCreateProject = async (title: string, type: "travel" | "work") => {
    if (!user) {
      router.push('/login');
      return;
    }
    const { data, error } = await supabase
      .from('projects')
      .insert([{ title, type, description: "새로운 계획입니다.", user_id: user.id }])
      .select();

    if (error) {
      console.error("프로젝트 생성 실패:", error);
      alert("저장에 실패했습니다.");
      return;
    }

    if (data && data[0]) {
      const newProject: Project = {
        id: data[0].id,
        title: data[0].title,
        type: data[0].type,
        desc: data[0].description,
        date: new Date(data[0].created_at).toLocaleDateString(),
      };
      setProjects([newProject, ...projects]);
    }
  };

  // 인증 로딩 중
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-700 flex flex-col">
      <DashboardHeader />
      <main className="flex-1 max-w-6xl w-full mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-700 mb-2">나의 워크스페이스</h2>
            <p className="text-slate-500">진행 중인 여행 계획과 업무를 한눈에 확인하세요.</p>
          </div>
          {user && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <Plus className="w-5 h-5" /> 새 프로젝트
            </button>
          )}
        </div>

        {/* 비로그인 상태 안내 */}
        {!user && (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <LogIn className="w-10 h-10 text-emerald-500" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-700 mb-2">로그인하면 나의 여행 계획을 볼 수 있어요</h3>
              <p className="text-slate-400 text-sm">여행 보드, 할일 목록 등 모든 기능을 이용하려면 로그인이 필요해요.</p>
            </div>
            <button
              onClick={() => router.push('/login')}
              className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              로그인 / 회원가입
            </button>
          </div>
        )}

        {/* 로그인 상태: 프로젝트 목록 */}
        {user && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsLoading ? (
              // 스켈레톤 로딩
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[180px] bg-white rounded-2xl border border-gray-100 animate-pulse" />
              ))
            ) : (
              <>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onDelete={(id) => setProjects(prev => prev.filter(p => p.id !== id))}
                  />
                ))}
                {/* 새로운 계획 만들기 버튼 */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/30 transition-all h-[180px]"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-white group-hover:scale-110 transition-transform shadow-sm">
                    <Plus className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-base">새로운 계획 만들기</span>
                </button>
              </>
            )}
          </div>
        )}
      </main>

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
}