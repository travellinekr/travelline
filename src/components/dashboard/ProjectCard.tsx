import { Calendar, MoreHorizontal, Plane, Briefcase } from "lucide-react";
import { Project } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isTravel = project.type === "travel";

  return (
    <Link href={`/room/${project.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group flex relative overflow-hidden h-[180px]">
        
        {/* 좌측 포인트 바 */}
        <div className={`w-1.5 h-full ${isTravel ? "bg-blue-600" : "bg-purple-600"}`} />

        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${isTravel ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"}`}>
                {isTravel ? <Plane className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                {isTravel ? "Travel Plan" : "Work Project"}
              </span>
            </div>
            <button className="text-slate-300 hover:text-slate-600 p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* 💥 [수정됨] text-slate-800 -> text-slate-700 (제목 톤 다운) */}
          <h3 className="text-xl font-bold text-slate-700 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-2 mb-4">
            {project.desc}
          </p>

          <div className="mt-auto flex justify-between items-center">
            <div className={`px-3 py-1 rounded-md text-[11px] font-bold ${
              isTravel ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
            }`}>
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
  );
}