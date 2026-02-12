import { Utensils } from "lucide-react";
import { BaseCard } from "./BaseCard";

// 음식 타입별 한글 레이블
const RESTAURANT_TYPE_LABELS: Record<string, string> = {
  korean: '한식',
  japanese: '일식',
  chinese: '중식',
  western: '양식',
  italian: '이탈리안',
  french: '프렌치',
  cafe: '카페',
  'street-food': '길거리음식',
  fusion: '퓨전',
  local: '현지음식',
};

export function FoodCard({ card, ...props }: any) {
  // 실제 식당명 (card.text 또는 card.title 사용)
  const restaurantName = card.text || card.title || "식당 이름";

  // 음식 카테고리 (restaurantType을 한글로 변환)
  const category = card.restaurantType
    ? RESTAURANT_TYPE_LABELS[card.restaurantType] || card.restaurantType
    : "Food";

  return (
    <BaseCard {...props} colorClass="bg-orange-400" icon={Utensils} category={category} className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center gap-2">
          {card.icon && (
            <span className="text-base">{card.icon}</span>
          )}
          <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{restaurantName}</h4>
        </div>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          {card.specialty && (
            <span className="text-[11px] text-gray-600 truncate">
              {card.specialty}
            </span>
          )}
          {card.priceRange && (
            <>
              <span className="text-gray-300">|</span>
              <span className="text-[11px] text-gray-500">
                {card.priceRange}
              </span>
            </>
          )}
          {card.michelin && (
            <>
              <span className="text-gray-300">|</span>
              <span className="text-[9px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 font-bold">
                ⭐ {card.michelin}
              </span>
            </>
          )}
        </div>
      </div>
    </BaseCard>
  );
}