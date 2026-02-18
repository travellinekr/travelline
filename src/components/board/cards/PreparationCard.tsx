import { CheckSquare, Stamp } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function PreparationCard({ card, ...props }: any) {
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

  // 입국심사 카드 여부
  const isEntryCard = Boolean(card.isEntryCard);
  const icon = isEntryCard ? Stamp : CheckSquare;
  const subText = isEntryCard ? "입국 서류 확인" : "준비물 챙기기";

  return (
    <BaseCard {...props} colorClass="bg-indigo-400" icon={icon} category="Prep" className="h-[72px]" hasNotes={hasNotes}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          <h4 className="font-bold text-slate-800 text-[15px] decoration-indigo-500/30 truncate leading-tight flex-1">
            {card.text}
          </h4>
          <span className="shrink-0 text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
            D-Day
          </span>
        </div>
        <p className="text-[11px] text-gray-400 mt-0.5 truncate">{subText}</p>
      </div>
    </BaseCard>
  );
}