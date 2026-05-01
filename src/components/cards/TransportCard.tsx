import { Bus, Train, Car } from "lucide-react";
import { CardShell } from "./CardShell";
import type { CommonCardProps } from "./types";
import { TransportationType } from "@/data/cities";
import { useAnchor } from "@/contexts/AnchorContext";
import { haversineMeters, formatDistance, getDistanceColorClass } from "@/utils/distance";

const TRANSPORT_ICONS: Record<TransportationType, any> = {
    subway: Train, bus: Bus, tram: Train, taxi: Car,
    'ride-hailing': Car, 'rental-car': Car, shuttle: Bus,
    'airport-transfer': Bus, traditional: Bus, micromobility: Car,
};

const TRANSPORT_TYPE_LABELS: Record<TransportationType, string> = {
    subway: '지하철', bus: '버스', tram: '트램', taxi: '택시',
    'ride-hailing': '라이드셰어', 'rental-car': '렌터카', shuttle: '셔틀',
    'airport-transfer': '공항픽업', traditional: '전통교통', micromobility: '킥보드',
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

export function TransportCard({ card, variant, ...props }: CommonCardProps) {
    const transportType = card.transportationType as TransportationType;
    const TransportIcon = TRANSPORT_ICONS[transportType] || Bus;
    const typeLabel = TRANSPORT_TYPE_LABELS[transportType] || card.transportationType;
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
            colorClass="bg-blue-400"
            icon={TransportIcon}
            category={typeLabel}
            className="h-[58px] md:h-[72px]"
            hasNotes={hasNotes}
        >
            <div className="flex flex-col justify-center w-full min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                    {card.icon && <span className="text-base shrink-0">{card.icon}</span>}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                        {card.text || card.title || "교통 수단"}
                    </h4>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 min-w-0 overflow-hidden">
                    {card.description && (
                        <span className="text-[11px] text-gray-600 truncate min-w-0 shrink">{card.description}</span>
                    )}
                    {card.appName && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-blue-600 shrink-0 truncate min-w-0">
                                📱 {card.appName}
                            </span>
                        </>
                    )}
                    {card.priceRange && (
                        <>
                            <span className="text-gray-300 shrink-0">|</span>
                            <span className="text-[11px] text-emerald-600 shrink-0">
                                {card.priceRange}
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
