import { Palmtree } from "lucide-react";
import { BaseCard } from "./BaseCard";

export function TourSpaCard({ card, ...props }: any) {
    return (
        <BaseCard {...props} colorClass="bg-teal-400" icon={Palmtree} category="투어&스파" className="h-[72px]">
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center gap-2">
                    {card.icon && (
                        <span className="text-base">{card.icon}</span>
                    )}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{card.title || "투어 & 스파"}</h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {card.description && (
                        <span className="text-[11px] text-gray-600 truncate">
                            {card.description}
                        </span>
                    )}
                    {card.duration && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[11px] text-gray-500">
                                {card.duration}
                            </span>
                        </>
                    )}
                    {card.pickupAvailable && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[9px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100 font-bold">
                                픽업
                            </span>
                        </>
                    )}
                </div>
            </div>
        </BaseCard>
    );
}
