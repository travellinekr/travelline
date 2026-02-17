import { Bus, Train, Car } from "lucide-react";
import { BaseCard } from "./BaseCard";
import { TransportationType } from "@/data/transportations";

// 교통 타입별 아이콘 매핑
const TRANSPORT_ICONS: Record<TransportationType, any> = {
    subway: Train,
    bus: Bus,
    tram: Train,
    taxi: Car,
    'ride-hailing': Car,
    'rental-car': Car,
    shuttle: Bus,
    'airport-transfer': Bus,
    traditional: Bus,
    micromobility: Car,
};

// 교통 카테고리 고유 색상 (통일)
const TRANSPORT_COLOR = 'bg-teal-500';

// 교통 타입별 한글 레이블
const TRANSPORT_TYPE_LABELS: Record<TransportationType, string> = {
    subway: '지하철',
    bus: '버스',
    tram: '트램',
    taxi: '택시',
    'ride-hailing': '라이드셰어',
    'rental-car': '렌터카',
    shuttle: '셔틀',
    'airport-transfer': '공항픽업',
    traditional: '전통교통',
    micromobility: '킥보드',
};

export function TransportCard({ card, ...props }: any) {
    const transportType = card.transportationType as TransportationType;
    const TransportIcon = TRANSPORT_ICONS[transportType] || Bus;
    const colorClass = TRANSPORT_COLOR;
    const typeLabel = TRANSPORT_TYPE_LABELS[transportType] || card.transportationType;

    // 메모가 있는지 확인 (BlockNote 블록 배열 체크)
    const hasNotes = Boolean(
        card.notes &&
        Array.isArray(card.notes) &&
        card.notes.length > 0 &&
        card.notes.some((block: any) => {
            if (block.type === 'paragraph' && Array.isArray(block.content)) {
                return block.content.length > 0 && block.content.some((item: any) => item.text && item.text.trim().length > 0);
            }
            return block.type !== 'paragraph';
        })
    );

    return (
        <BaseCard {...props} colorClass={colorClass} icon={TransportIcon} category={typeLabel} className="h-[72px]" hasNotes={hasNotes}>
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center gap-2">
                    {card.icon && (
                        <span className="text-base">{card.icon}</span>
                    )}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                        {card.text || card.title || "교통 수단"}
                    </h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {card.description && (
                        <span className="text-[11px] text-gray-600 truncate">
                            {card.description}
                        </span>
                    )}
                    {card.appName && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[9px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                📱 {card.appName}
                            </span>
                        </>
                    )}
                    {card.priceRange && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                {card.priceRange}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </BaseCard>
    );
}
