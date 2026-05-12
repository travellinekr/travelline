import { Hotel } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useAnchor } from "@/contexts/AnchorContext";
import { haversineMeters, formatDistance, getDistanceColorClass } from "@/utils/distance";

function checkHasNotes(notes: any): boolean {
    return Boolean(
        notes &&
        Array.isArray(notes) &&
        notes.length > 0 &&
        notes.some((block: any) => {
            if (block.type === 'paragraph' && Array.isArray(block.content)) {
                return block.content.length > 0 && block.content.some((item: any) => item.text && item.text.trim().length > 0);
            }
            return block.type !== 'paragraph';
        })
    );
}

export function HotelCard({ card, variant, onUpdateCard, ...props }: CommonCardProps) {
    const displayTags = card.tags?.slice(0, 3) || [];
    const showCheckOut = card.showCheckOut || false;
    const hasNotes = checkHasNotes(card.notes);

    const { anchorCard } = useAnchor();
    const anchorDist =
        anchorCard && anchorCard.id !== card.id && card.coordinates && anchorCard.coordinates
            ? haversineMeters(anchorCard.coordinates, card.coordinates)
            : null;
    const showDist = anchorDist !== null && (variant === 'inbox' || variant === 'compact' || variant === 'explore');

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onUpdateCard) {
            onUpdateCard({ showCheckOut: !showCheckOut });
        }
    };

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-rose-400"
            icon={Hotel}
            category={card.accommodationType === 'resort' ? 'Resort' : 'Hotel'}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
            onUpdateCard={onUpdateCard}
        >
            <div className="flex flex-col justify-center w-full">
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                    {card.text || "호텔 이름"}
                </h4>
            <div className="flex items-center gap-1.5 mt-0.5 min-w-0 overflow-hidden">
                    <span
                        className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100 cursor-pointer hover:bg-rose-100 transition-colors shrink-0"
                        onClick={handleToggle}
                    >
                        {showCheckOut ? 'Check-out' : 'Check-in'}
                    </span>
                    <span className="text-[11px] text-gray-500 shrink-0">
                        {showCheckOut ? (card.checkOutTime || "11:00") : (card.checkInTime || "15:00")}
                    </span>
                    {displayTags.length > 0 && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-gray-500 truncate min-w-0">
                                {displayTags.join(' · ')}
                            </span>
                        </>
                    )}
                    {showDist && anchorDist !== null && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className={`text-[11px] shrink-0 ${getDistanceColorClass(anchorDist)}`}>
                                {formatDistance(anchorDist)}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </CardShell>
    );
}
