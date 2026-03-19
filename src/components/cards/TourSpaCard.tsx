import { Palmtree } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";

const TOUR_SPA_TYPE_LABELS: Record<string, string> = {
    'island-hopping': '아일랜드 호핑', 'city-tour': '시티 투어', 'nature-tour': '자연 관광',
    'cultural-tour': '문화 투어', 'adventure': '액티비티', 'water-sports': '수상 스포츠',
    'diving': '다이빙', 'snorkeling': '스노클링', 'massage': '마사지',
    'spa': '스파', 'wellness': '웰니스', 'hot-spring': '온천',
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
    const category = card.tourSpaType
        ? TOUR_SPA_TYPE_LABELS[card.tourSpaType] || card.tourSpaType
        : "투어&스파";
    const hasNotes = checkHasNotes(card.notes);

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-teal-400"
            icon={Palmtree}
            category={category}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                    {card.icon && <span className="text-base shrink-0">{card.icon}</span>}
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
                </div>
            </div>
        </CardShell>
    );
}
