"use client";

import { useState } from "react";
import { X, ArrowRight, Plane } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, type: "travel" | "work") => void;
};

export default function CreateProjectModal({ isOpen, onClose, onCreate }: Props) {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) return;
    onCreate(title.trim(), "travel");
    setTitle("");
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
              <Plane className="w-4 h-4 text-[#FF6B47]" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">새 여행 계획</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-slate-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 제목 입력 */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            여행 이름
          </label>
          <input
            type="text"
            placeholder="예: 2026 오사카 우정여행"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF6B47]/30 focus:border-[#FF6B47] outline-none text-slate-800 placeholder:text-slate-300 transition-all"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>

        {/* 생성 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={!title.trim()}
          className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all"
        >
          시작하기 <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}