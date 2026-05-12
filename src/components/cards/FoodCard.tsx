import { Utensils } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useAnchor } from "@/contexts/AnchorContext";
import { haversineMeters, formatDistance, getDistanceColorClass } from "@/utils/distance";

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
    seafood: '해산물',
};

// BlockNote 형식 메모 존재 여부 확인
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

export function FoodCard({ card, variant, ...props }: CommonCardProps) {
    const restaurantName = card.text || card.title || "식당 이름";
    const category = card.restaurantType
        ? RESTAURANT_TYPE_LABELS[card.restaurantType] || card.restaurantType
        : "Food";
    const hasNotes = checkHasNotes(card.notes);

    const { anchorCard } = useAnchor();
    const anchorDist =
        anchorCard && anchorCard.id !== card.id && card.coordinates && anchorCard.coordinates
            ? haversineMeters(anchorCard.coordinates, card.coordinates)
            : null;
    const showDist = anchorDist !== null && (variant === 'inbox' || variant === 'compact' || variant === 'explore');

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-orange-400"
            icon={Utensils}
            category={category}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                    {card.icon && <span className="text-base shrink-0">{card.icon}</span>}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{restaurantName}</h4>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 min-w-0 overflow-hidden">
                    {card.specialty && (
                        <span className="text-[11px] text-gray-600 truncate min-w-0 shrink">{card.specialty}</span>
                    )}
                    {card.priceRange && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-gray-500 truncate min-w-0">{card.priceRange}</span>
                        </>
                    )}
                    {card.michelin && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-yellow-600 shrink-0">
                                ⭐ {card.michelin}
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
