import { MapPin } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function DefaultCard({ card, ...props }: any) {
  // 💥 [수정됨] bg-emerald-500 -> bg-emerald-400 (채도 낮춤)
  return (
    <BaseCard {...props} colorClass="bg-emerald-400" icon={MapPin} category="Activity" className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.text}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5 truncate">상세 정보를 입력하세요</p>
      </div>
    </BaseCard>
  );
}