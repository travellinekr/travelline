import { Utensils } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function FoodCard({ card, ...props }: any) {
  // 💥 [수정됨] bg-orange-500 -> bg-orange-400 (채도 낮춤)
  return (
    <BaseCard {...props} colorClass="bg-orange-400" icon={Utensils} category="Food" className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.title || "식당 이름"}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5 truncate">
            {card.description || "대표 메뉴 및 메모"}
        </p>
      </div>
    </BaseCard>
  );
}