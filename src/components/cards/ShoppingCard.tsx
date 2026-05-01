import { ShoppingBag } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { useAnchor } from "@/contexts/AnchorContext";
import { haversineMeters, formatDistance, getDistanceColorClass } from "@/utils/distance";

const SHOPPING_TYPE_LABELS: Record<string, string> = {
    'department-store': '백화점', 'mall': '쇼핑몰', 'market': '재래시장',
    'outlet': '아울렛', 'duty-free': '면세점', 'convenience': '편의점',
    'supermarket': '슈퍼마켓', 'specialty': '전문점', 'boutique': '부티크',
    'souvenir': '기념품점',
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

export function ShoppingCard({ card, variant, ...props }: CommonCardProps) {
    const shoppingName = card.text || card.title || "쇼핑 장소";
    const category = card.shoppingType
        ? SHOPPING_TYPE_LABELS[card.shoppingType] || card.shoppingType
        : "Shopping";
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
            colorClass="bg-purple-400"
            icon={ShoppingBag}
            category={category}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                    {card.icon && <span className="text-base shrink-0">{card.icon}</span>}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{shoppingName}</h4>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 min-w-0 overflow-hidden">
                    {card.specialItems && (
                        <span className="text-[11px] text-gray-600 truncate min-w-0 shrink">{card.specialItems}</span>
                    )}
                    {card.priceRange && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-gray-500 truncate min-w-0">{card.priceRange}</span>
                        </>
                    )}
                    {card.taxRefund && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-purple-600 font-bold shrink-0">면세</span>
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
