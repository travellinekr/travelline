'use client';

import { MoreHorizontal } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";

export function EtcCard({ card, variant, ...props }: CommonCardProps) {
    const title = card.text || card.title || '기타';
    const item = card.etcItem || '';

    return (
        <CardShell
            {...props}
            card={card}
            variant={variant}
            colorClass="bg-amber-400"
            icon={MoreHorizontal}
            category="ETC"
            className="h-[58px] md:h-[72px]"
        >
            <div className="flex flex-col w-full min-w-0">
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{title}</h4>
                <p className="text-[11px] text-gray-400 mt-0.5 truncate">{item || '—'}</p>
            </div>
        </CardShell>
    );
}
