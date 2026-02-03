"use client";

import { useState } from "react";
import { X, ArrowRight, Plane, CheckSquare } from "lucide-react";

// 💥 Props 타입 정의 (onCreate 추가됨)
type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, type: "travel" | "work") => void;
};

export default function CreateProjectModal({ isOpen, onClose, onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"travel" | "work">("travel");

  if (!isOpen) return null;

  // 생성하기 버튼 클릭 핸들러
  const handleSubmit = () => {
    if (!title) return;
    
    // 부모에게 데이터 전달
    onCreate(title, type);
    
    // 초기화 및 닫기
    setTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">새로운 프로젝트 시작</h2>
          <button onClick={onClose}><X className="w-5 h-5 text-gray-500" /></button>
        </div>

        {/* 제목 입력 */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">프로젝트 이름</label>
          <input 
            type="text" 
            placeholder="예: 2026년 우정여행" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>

        {/* 타입 선택 */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button 
            onClick={() => setType("travel")}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${type === "travel" ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-gray-100 hover:bg-gray-50"}`}
          >
            <Plane className="w-6 h-6" />
            <span className="font-bold">여행 계획</span>
          </button>
          <button 
            onClick={() => setType("work")}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${type === "work" ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-gray-100 hover:bg-gray-50"}`}
          >
            <CheckSquare className="w-6 h-6" />
            <span className="font-bold">업무/ToDo</span>
          </button>
        </div>

        <button 
          onClick={handleSubmit}
          disabled={!title}
          className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          생성하기 <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}