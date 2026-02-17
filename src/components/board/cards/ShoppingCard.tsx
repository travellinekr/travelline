import { ShoppingBag } from "lucide-react";
import { BaseCard } from "./BaseCard";

// 쇼핑 타입별 한글 레이블
const SHOPPING_TYPE_LABELS: Record<string, string> = {
  'department-store': '백화점',
  'mall': '쇼핑몰',
  'market': '재래시장',
  'outlet': '아울렛',
  'duty-free': '면세점',
  'convenience': '편의점',
  'supermarket': '슈퍼마켓',
  'specialty': '전문점',
  'boutique': '부티크',
  'souvenir': '기념품점',
};

export function ShoppingCard({ card, ...props }: any) {
  // 실제 쇼핑 장소명 (card.text 또는 card.title 사용)
  const shoppingName = card.text || card.title || "쇼핑 장소";

  // 쇼핑 카테고리 (shoppingType을 한글로 변환)
  const category = card.shoppingType
    ? SHOPPING_TYPE_LABELS[card.shoppingType] || card.shoppingType
    : "Shopping";

  // 메모가 있는지 확인 (BlockNote 블록 배열 체크)
  const hasNotes = Boolean(
    card.notes &&
    Array.isArray(card.notes) &&
    card.notes.length > 0 &&
    card.notes.some((block: any) => {
      if (block.type === 'paragraph' && Array.isArray(block.content)) {
        return block.content.length > 0 && block.content.some((item: any) => item.text && item.text.trim().length > 0);
      }
      return block.type !== 'paragraph';
    })
  );

  return (
    <BaseCard {...props} colorClass="bg-purple-400" icon={ShoppingBag} category={category} className="h-[72px]" hasNotes={hasNotes}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center gap-2">
          {card.icon && (
            <span className="text-base">{card.icon}</span>
          )}
          <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{shoppingName}</h4>
        </div>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          {card.specialItems && (
            <span className="text-[11px] text-gray-600 truncate">
              {card.specialItems}
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
          {card.taxRefund && (
            <>
              <span className="text-gray-300">|</span>
              <span className="text-[9px] text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 font-bold">
                면세
              </span>
            </>
          )}
        </div>
      </div>
    </BaseCard>
  );
}