"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectCard from "@/components/dashboard/ProjectCard";
import CreateProjectModal from "@/components/dashboard/CreateProjectModal";
import { Project } from "@/types/project";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  // 1. Supabase 데이터 불러오기
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        const formattedData: Project[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          type: item.type,
          desc: item.description || "새로운 계획입니다.",
          date: new Date(item.created_at).toLocaleDateString(),
        }));
        setProjects(formattedData);
      }
      if (error) console.error("Error loading projects:", error);
    };

    fetchProjects();
  }, []);

  // 2. 프로젝트 생성 로직
  const handleCreateProject = async (title: string, type: "travel" | "work") => {
    const { data, error } = await supabase
      .from('projects')
      .insert([{ title, type, description: "새로운 계획입니다." }])
      .select();

    if (data) {
      const newProject: Project = {
        id: data[0].id,
        title: data[0].title,
        type: data[0].type,
        desc: data[0].description,
        date: new Date(data[0].created_at).toLocaleDateString(),
      };
      setProjects([newProject, ...projects]);
    }
    if (error) alert("저장에 실패했습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-700 flex flex-col">
      <DashboardHeader />
      <main className="flex-1 max-w-6xl w-full mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            {/* 💥 [수정됨] text-slate-900 -> text-slate-700 (부드러운 진회색) */}
            <h2 className="text-3xl font-bold text-slate-700 mb-2">나의 워크스페이스</h2>
            <p className="text-slate-500">진행 중인 여행 계획과 업무를 한눈에 확인하세요.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            // 💥 [수정됨] 버튼 배경도 너무 검지 않게 bg-slate-900 -> bg-slate-700
            className="bg-slate-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            <Plus className="w-5 h-5" /> 새 프로젝트
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
        </div>
      </main>
      <CreateProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateProject} 
      />
    </div>
  );
}