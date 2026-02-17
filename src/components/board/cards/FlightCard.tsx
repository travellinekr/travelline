import { Plane } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function FlightCard({ card, ...props }: any) {
  // 멤모가 있는지 확인 (BlockNote 블록 배열 체크)
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

  // 💥 [수정됨] bg-sky-500 -> bg-sky-400 (채도 낮춤)
  return (
    <BaseCard {...props} colorClass="bg-sky-400" icon={Plane} category="Flight" className="h-[72px]" hasNotes={hasNotes}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-between items-center w-full mb-0.5">
          <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
            {card.text || "항공편 정보"}
          </h4>
          <span className="shrink-0 text-[11px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">
            {card.time || "00:00"}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <span className="font-medium text-slate-600">{card.route || "ICN - CXR"}</span>
          {card.description && (
            <>
              <span className="text-gray-300">|</span>
              <span className="truncate">{card.description}</span>
            </>
          )}
        </div>
      </div>
    </BaseCard>
  );
}