'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Utensils, Plus } from 'lucide-react';
import { RESTAURANTS_DATA, RestaurantType } from '@/data/restaurants';
import { BaseCard } from './cards/BaseCard';

// 음식 타입별 한글 레이블
const RESTAURANT_TYPE_LABELS: Record<RestaurantType, string> = {
    korean: '한식',
    japanese: '일식',
    chinese: '중식',
    western: '양식',
    italian: '이탈리안',
    french: '프렌치',
    cafe: '카페',
    'street-food': '길거리음식',
    fusion: '퓨전',
    local: '현지음식',
};

// 도시별 맛집 목록 필터링 함수
function getRestaurantsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(RESTAURANTS_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? RESTAURANTS_DATA[cityKey] : [];
}

// 드래그 가능한 맛집 카드 컴포넌트
function DraggableFoodCard({ restaurant, index }: { restaurant: any; index: number }) {
    const cardData = {
        id: `picker-food-${restaurant.city}-${index}`,
        title: restaurant.name,
        category: 'food' as const,
        restaurantType: restaurant.type,
        city: restaurant.city,
        coordinates: restaurant.coordinates,  // GPS 좌표 추가
        cuisine: restaurant.cuisine,
        specialty: restaurant.specialty,
        priceRange: restaurant.priceRange,
        michelin: restaurant.michelin,
        reservation: restaurant.reservation,
        openingHours: restaurant.openingHours,
        features: restaurant.features,
        icon: restaurant.icon,
        description: restaurant.specialty || restaurant.cuisine,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `picker-food-${restaurant.city}-${index}`,
        data: cardData,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    const typeLabel = RESTAURANT_TYPE_LABELS[restaurant.type as RestaurantType] || restaurant.type;

    // 드래그 중일 때 빈 placeholder 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-orange-300 bg-orange-50/50 rounded-lg"
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
                colorClass="bg-orange-400"
                icon={Utensils}
                category={typeLabel}
                className="h-[72px]"
            >
                <div className="flex flex-col justify-center w-full">
                    <div className="flex items-center gap-2">
                        {restaurant.icon && (
                            <span className="text-base">{restaurant.icon}</span>
                        )}
                        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                            {restaurant.name}
                        </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        {restaurant.specialty && (
                            <span className="text-[11px] text-gray-600 truncate">
                                {restaurant.specialty}
                            </span>
                        )}
                        {restaurant.priceRange && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-[11px] text-gray-500">
                                    {restaurant.priceRange}
                                </span>
                            </>
                        )}
                        {restaurant.michelin && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-[9px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 font-bold">
                                    ⭐ {restaurant.michelin}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </BaseCard>
        </div>
    );
}

// FoodPicker 메인 컴포넌트
export function FoodPicker({ destinationCity }: { destinationCity?: string }) {
    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Utensils className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    // 해당 도시의 맛집 목록 가져오기
    const restaurants = getRestaurantsByCity(destinationCity);

    if (restaurants.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Utensils className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    {destinationCity}의 맛집 정보가 없습니다
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-slate-800">맛집 선택</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {restaurants.length}개
                </span>
            </div>

            {/* 맛집 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {restaurants.map((restaurant, index) => (
                        <DraggableFoodCard
                            key={index}
                            restaurant={restaurant}
                            index={index}
                        />
                    ))}

                    {/* 직접 추가하기 버튼 */}
                    <button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all gap-2 mt-2">
                        <Plus className="w-5 h-5" />
                        <span className="font-medium text-sm">직접 추가하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
