import { User } from "lucide-react"; // 아이콘이 없다면 대체용

export default function DashboardHeader() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8 shadow-sm shrink-0">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
        <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-lg font-sans">
          M
        </span>
        MindFlows
      </h1>
      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-slate-900">황규혁님</p>
          <p className="text-xs text-gray-500">Free Plan</p>
        </div>
        {/* 프로필 이미지 Placeholder */}
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
           <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </header>
  );
}