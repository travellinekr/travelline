"use client";

import { MapPin } from "lucide-react";
import { renderCardInternal } from "@/components/board/DraggableCard";
import { HotelCard } from "@/components/cards/HotelCard";
import { TransportCard } from "@/components/cards/TransportCard";
import { FoodCard } from "@/components/cards/FoodCard";
import { ShoppingCard } from "@/components/cards/ShoppingCard";
import { TourSpaCard } from "@/components/cards/TourSpaCard";

// DragOverlay 내부에 렌더링되는 고스트 카드 컴포넌트.
// 카드 타입(Picker 종류 / 일반 카드)에 따라 7가지 분기.
export function DraggedCardOverlay({
    activeDragItem,
    activeDragSourceColumn,
}: {
    activeDragItem: any;
    activeDragSourceColumn: string | null;
}) {
    if (!activeDragItem) return null;

    const id = String(activeDragItem.id);
    const isDestinationPicker =
        (id.startsWith('picker-') &&
            !id.startsWith('picker-hotel-') &&
            !id.startsWith('picker-transport-') &&
            !id.startsWith('picker-food-') &&
            !id.startsWith('picker-shopping-') &&
            !id.startsWith('picker-tourspa-')) ||
        (activeDragSourceColumn === 'destination-header' && activeDragItem?.category === 'destination');

    if (isDestinationPicker) {
        // Destination 카드 (picker 또는 최종여행지에서 드래그): 인박스 스타일 고정
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                <div className="bg-white flex items-center gap-0 relative h-[72px] w-full overflow-hidden">
                    <div className="w-20 h-full relative flex items-center justify-center overflow-hidden shrink-0 border-r border-gray-50">
                        {activeDragItem.imageUrl ? (
                            <img
                                src={activeDragItem.imageUrl}
                                alt={activeDragItem.text}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-emerald-500 opacity-50" />
                            </div>
                        )}
                        <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm z-10">
                            추천
                        </div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center h-full px-3 py-1">
                        <div className="flex justify-between items-center mb-0.5">
                            <span className="font-bold text-slate-800 text-sm leading-none truncate pr-2">
                                {activeDragItem.text || activeDragItem.title}
                            </span>
                            <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
                                여행지
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (id.startsWith('picker-hotel-')) {
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <HotelCard
                    card={{ ...activeDragItem, text: activeDragItem.title }}
                    variant="inbox"
                />
            </div>
        );
    }

    if (id.startsWith('picker-transport-')) {
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <TransportCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
            </div>
        );
    }

    if (id.startsWith('picker-food-')) {
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <FoodCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
            </div>
        );
    }

    if (id.startsWith('picker-shopping-')) {
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <ShoppingCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
            </div>
        );
    }

    if (id.startsWith('picker-tourspa-')) {
        return (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <TourSpaCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
            </div>
        );
    }

    // 일반 카드: 출발 컬럼 기반 variant로 고스트 렌더링
    const variant =
        activeDragSourceColumn === 'inbox' || activeDragSourceColumn === null
            ? 'inbox'
            : activeDragSourceColumn === 'destination-header'
                ? 'compact'
                : activeDragSourceColumn === 'destination-candidates'
                    ? 'compact'
                    : 'timeline';

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
            {renderCardInternal(
                activeDragItem,
                {
                    listeners: {},
                    attributes: {},
                    onRemove: undefined,
                    canEdit: false,
                    ...(activeDragSourceColumn === 'destination-header' ? { isHeader: true } : {}),
                },
                variant
            )}
        </div>
    );
}
