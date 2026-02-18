'use client';

import { MoreHorizontal } from 'lucide-react';
import { BaseCard } from './BaseCard';

export function EtcCard({ card, onRef, style, listeners, attributes, onOpenNotes, hasNotes }: any) {
    const title = card.text || card.title || '기타';
    const item = card.etcItem || '';

    return (
        <BaseCard
            colorClass="bg-violet-400"
            icon={MoreHorizontal}
            category="ETC"
            onRef={onRef}
            style={style}
            listeners={listeners}
            attributes={attributes}
            className="h-[72px]"
            onOpenNotes={onOpenNotes}
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0">
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                    {title}
                </h4>
                {item && (
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                        {item}
                    </p>
                )}
            </div>
        </BaseCard>
    );
}
