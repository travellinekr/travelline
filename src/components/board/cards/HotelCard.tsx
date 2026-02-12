import { Hotel } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function HotelCard({ card, onUpdateCard, ...props }: any) {
  const displayTags = card.tags?.slice(0, 3) || [];
  const showCheckOut = card.showCheckOut || false;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onUpdateCard) {
      onUpdateCard({ showCheckOut: !showCheckOut });
    }
  };

  return (
    <BaseCard {...props} colorClass="bg-rose-400" icon={Hotel} category={card.accommodationType === 'resort' ? 'Resort' : 'Hotel'} className="h-[72px]">
      <div className="flex flex-col justify-center w-full">
        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.text || "호텔 이름"}</h4>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100 cursor-pointer hover:bg-rose-100 transition-colors"
            onClick={handleToggle}
          >
            {showCheckOut ? 'Check-out' : 'Check-in'}
          </span>
          <span className="text-[11px] text-gray-500">
            {showCheckOut ? (card.checkOutTime || "11:00") : (card.checkInTime || "15:00")}
          </span>
          {displayTags.length > 0 && (
            <>
              <span className="text-gray-300">|</span>
              {displayTags.map((tag: string, index: number) => (
                <span key={index} className="text-[9px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </BaseCard>
  );
}