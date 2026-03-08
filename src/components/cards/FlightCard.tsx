import { Plane } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";

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

export function FlightCard({ card, variant, ...props }: CommonCardProps) {
    const hasNotes = checkHasNotes(card.notes);

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-sky-400"
            icon={Plane}
            category="Flight"
            className="h-[72px]"
            hasNotes={hasNotes}
        >
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
        </CardShell>
    );
}
