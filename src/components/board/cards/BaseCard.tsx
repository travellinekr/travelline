import { GripVertical } from "lucide-react";

export function BaseCard({ children, colorClass, icon: Icon, category, onRef, style, listeners, attributes, className }: any) {
  return (
    <div
      ref={onRef}
      style={style}
      {...listeners}
      {...attributes}
      // 💥 [수정됨] overflow-hidden 추가 (내용 넘침 방지)
      className={`group bg-white hover:bg-slate-50 border-b border-gray-100 flex items-center gap-3 relative touch-none select-none h-[72px] px-3 transition-colors overflow-hidden ${className}`}
    >
      {/* 왼쪽 컬러 바 */}
      <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${colorClass}`}></div>

      {/* 아이콘 영역 */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${colorClass.replace('bg-', 'bg-opacity-10 text-')}`}>
        <Icon className="w-4 h-4" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex-1 min-w-0 flex flex-col justify-center h-full pt-1">
         <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">{category}</span>
         <div className="w-full">
            {children}
         </div>
      </div>

      {/* 우측 드래그 핸들 */}
      <div className="shrink-0 w-8 h-full flex items-center justify-center">
        <GripVertical className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 cursor-grab" />
      </div>
    </div>
  );
}