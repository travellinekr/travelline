import { MapPin } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";

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

export function DefaultCard({ card, variant, ...props }: CommonCardProps) {
    const hasNotes = checkHasNotes(card.notes);

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-emerald-400"
            icon={MapPin}
            category="Activity"
            className="h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full">
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.text}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5 truncate">상세 정보를 입력하세요</p>
            </div>
        </CardShell>
    );
}
