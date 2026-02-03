import { ShoppingBag } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function ShoppingCard({ card, ...props }: any) {
  // 💥 [수정됨] bg-purple-500 -> bg-purple-400 (채도 낮춤)
  return (
    <BaseCard {...props} colorClass="bg-purple-400" icon={ShoppingBag} category="Shopping" className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.title || "쇼핑 장소"}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5 truncate">
            {card.description || "구매 리스트 작성"}
        </p>
      </div>
    </BaseCard>
  );
}