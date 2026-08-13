import { Palmtree } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useAnchor } from "@/contexts/AnchorContext";
import { haversineMeters, formatDistance, getDistanceColorClass } from "@/utils/distance";
import { getCardSubcategoryLabel } from "@/utils/cardSubcategoryLabels";

// 데이터에 icon 이 없는 카드(유저 직접 추가 등)를 위한 type 기반 fallback
const TOUR_SPA_TYPE_ICONS: Record<string, string> = {
    'island-hopping': '🏝️', 'city-tour': '🚌', 'nature-tour': '🌳',
    'cultural-tour': '🏛️', 'cultural': '🏛️', 'adventure': '🧗',
    'water-sports': '🏄', 'diving': '🤿', 'snorkeling': '🐠',
    'massage': '💆', 'spa': '🧖', 'wellness': '🧘', 'hot-spring': '♨️',
    'theme-park': '🎢', 'cruise': '🛳️', 'show': '🎭', 'workshop': '🎨',
};

function checkHasNotes(notes: any): boolean {
    return Boolean(
        notes && Array.isArray(notes) && notes.length > 0 &&
        notes.some((block: any) => {
            if (block.type === 'paragraph' && Array.isArray(block.content)) {
                return block.content.length > 0 && block.content.some((item: any) => item.text && item.text.trim().length > 0);
            }
            return block.type !== 'paragraph';
        })
    );
}

export function TourSpaCard({ card, variant, ...props }: CommonCardProps) {
    const tourSpaName = card.text || card.title || "투어 & 스파";
    const category = getCardSubcategoryLabel('tourSpa', card.tourSpaType);
    const displayIcon = card.icon || (card.tourSpaType && TOUR_SPA_TYPE_ICONS[card.tourSpaType]) || null;
    const hasNotes = checkHasNotes(card.notes);

    const { anchorCard } = useAnchor();
    const anchorDist =
        anchorCard && anchorCard.id !== card.id && card.coordinates && anchorCard.coordinates
            ? haversineMeters(anchorCard.coordinates, card.coordinates)
            : null;
    const showDist = anchorDist !== null && (variant === 'inbox' || variant === 'compact');

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-cyan-400"
            icon={Palmtree}
            category={category}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                    {displayIcon && <span className="text-base shrink-0">{displayIcon}</span>}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{tourSpaName}</h4>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 min-w-0 overflow-hidden">
                    {card.address ? (
                        <span className="text-[11px] text-gray-600 truncate min-w-0 shrink">{card.address}</span>
                    ) : card.description ? (
                        <span className="text-[11px] text-gray-600 truncate min-w-0 shrink">{card.description}</span>
                    ) : null}
                    {card.duration && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-gray-500 shrink-0">{card.duration}</span>
                        </>
                    )}
                    {card.pickupAvailable && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-teal-600 font-bold shrink-0">픽업</span>
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
