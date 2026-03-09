import { ShoppingBag } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";

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
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center gap-2">
                    {card.icon && <span className="text-base">{card.icon}</span>}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{shoppingName}</h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {card.specialItems && (
                        <span className="text-[11px] text-gray-600 truncate">{card.specialItems}</span>
                    )}
                    {card.priceRange && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[11px] text-gray-500">{card.priceRange}</span>
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
        </CardShell>
    );
}
