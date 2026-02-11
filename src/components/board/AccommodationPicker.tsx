'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Hotel, Plus } from 'lucide-react';
import { ACCOMMODATIONS_DATA } from '@/data/accommodations';
import { BaseCard } from './cards/BaseCard';

// 도시별 숙소 목록 필터링 함수
function getAccommodationsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(ACCOMMODATIONS_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? ACCOMMODATIONS_DATA[cityKey] : [];
}

// 드래그 가능한 호텔 카드 컴포넌트
function DraggableHotelCard({ accommodation, index }: { accommodation: any; index: number }) {
    const cardData = {
        id: `picker-hotel-${accommodation.city}-${index}`,
        title: accommodation.name,
        category: 'hotel' as const,
        accommodationType: accommodation.type,
        checkInTime: accommodation.checkInTime,
        checkOutTime: accommodation.checkOutTime,
        city: accommodation.city,
        coordinates: accommodation.coordinates,
        description: accommodation.description,
        tags: accommodation.tags,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `picker-hotel-${accommodation.city}-${index}`,
        data: cardData,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    // 드래그 중일 때 빈 placeholder 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-rose-300 bg-rose-50/50 rounded-lg"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="cursor-grab active:cursor-grabbing"
        >
            <BaseCard
                colorClass="bg-rose-400"
                icon={Hotel}
                category={accommodation.type === 'resort' ? 'Resort' : 'Hotel'}
                className="h-[72px]"
            >
                <div className="flex flex-col justify-center w-full">
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                        {accommodation.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
                            Check-in
                        </span>
                        <span className="text-[11px] text-gray-500">
                            {accommodation.checkInTime}
                        </span>
                        {accommodation.tags && accommodation.tags.length > 0 && (
                            <>
                                <span className="text-gray-300">|</span>
                                {accommodation.tags.slice(0, 3).map((tag: string, index: number) => (
                                    <span key={index} className="text-[9px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </BaseCard>
        </div>
    );
}

// AccommodationPicker 메인 컴포넌트
export function AccommodationPicker({ destinationCity }: { destinationCity?: string }) {
    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Hotel className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    // 해당 도시의 숙소 목록 가져오기
    const accommodations = getAccommodationsByCity(destinationCity);

    if (accommodations.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Hotel className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    {destinationCity}의 숙소 정보가 없습니다
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-800">숙소 선택</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {accommodations.length}개
                </span>
            </div>

            {/* 숙소 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {accommodations.map((accommodation, index) => (
                        <DraggableHotelCard
                            key={index}
                            accommodation={accommodation}
                            index={index}
                        />
                    ))}

                    {/* 직접 추가하기 버튼 */}
                    <button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50 transition-all gap-2 mt-2">
                        <Plus className="w-5 h-5" />
                        <span className="font-medium text-sm">직접 추가하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
