import { Hotel } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function HotelCard({ card, ...props }: any) {
  // 💥 [수정됨] bg-rose-500 -> bg-rose-400 (채도 낮춤)
  return (
    <BaseCard {...props} colorClass="bg-rose-400" icon={Hotel} category="Hotel" className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.title || "호텔 이름"}</h4>
        <div className="flex items-center gap-2 mt-0.5">
           <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
             Check-in
           </span>
           <span className="text-[11px] text-gray-500 truncate">{card.time || "15:00"}</span>
        </div>
      </div>
    </BaseCard>
  );
}