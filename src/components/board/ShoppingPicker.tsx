'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ShoppingBag, Plus } from 'lucide-react';
import { useState } from 'react';
import { SHOPPING_DATA, ShoppingType } from '@/data/shopping';
import { BaseCard } from './cards/BaseCard';
import { ShoppingAddModal } from './ShoppingAddModal';

// 쇼핑 타입별 한글 레이블
const SHOPPING_TYPE_LABELS: Record<ShoppingType, string> = {
    'department-store': '백화점',
    'mall': '쇼핑몰',
    'market': '재래시장',
    'outlet': '아울렛',
    'duty-free': '면세점',
    'convenience': '편의점',
    'supermarket': '슈퍼마켓',
    'specialty': '전문점',
    'boutique': '부티크',
    'souvenir': '기념품점',
};

// 도시별 쇼핑 장소 필터링 함수
function getShoppingByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(SHOPPING_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? SHOPPING_DATA[cityKey] : [];
}

// 드래그 가능한 쇼핑 카드 컴포넌트
function DraggableShoppingCard({ shopping, index }: { shopping: any; index: number }) {
    const cardData = {
        id: `picker-shopping-${shopping.city}-${index}`,
        title: shopping.name,
        category: 'shopping' as const,
        shoppingType: shopping.type,
        city: shopping.city,
        coordinates: shopping.coordinates,
        shoppingCategory: shopping.category,
        specialItems: shopping.specialItems,
        priceRange: shopping.priceRange,
        openingHours: shopping.openingHours,
        taxRefund: shopping.taxRefund,
        features: shopping.features,
        icon: shopping.icon,
        description: shopping.specialItems || shopping.category,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `picker-shopping-${shopping.city}-${index}`,
        data: cardData,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    const typeLabel = SHOPPING_TYPE_LABELS[shopping.type as ShoppingType] || shopping.type;

    // 드래그 중일 때 빈 placeholder 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-purple-300 bg-purple-50/50 rounded-lg"
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
                colorClass="bg-purple-400"
                icon={ShoppingBag}
                category={typeLabel}
                className="h-[72px]"
            >
                <div className="flex flex-col justify-center w-full">
                    <div className="flex items-center gap-2">
                        {shopping.icon && (
                            <span className="text-base">{shopping.icon}</span>
                        )}
                        <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                            {shopping.name}
                        </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        {shopping.specialItems && (
                            <span className="text-[11px] text-gray-600 truncate">
                                {shopping.specialItems}
                            </span>
                        )}
                        {shopping.priceRange && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-[11px] text-gray-500">
                                    {shopping.priceRange}
                                </span>
                            </>
                        )}
                        {shopping.taxRefund && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-[9px] text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 font-bold">
                                    면세
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </BaseCard>
        </div>
    );
}

// ShoppingPicker 메인 컴포넌트
export function ShoppingPicker({ destinationCity, onCreateCard }: { destinationCity?: string; onCreateCard?: (data: any) => void }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <ShoppingBag className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    // 해당 도시의 쇼핑 장소 가져오기
    const shoppingList = getShoppingByCity(destinationCity);

    if (shoppingList.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <ShoppingBag className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    {destinationCity}의 쇼핑 정보가 없습니다
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-purple-500" />
                    <h3 className="font-bold text-slate-800">쇼핑 선택</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {shoppingList.length}개
                </span>
            </div>

            {/* 쇼핑 장소 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {shoppingList.map((shopping, index) => (
                        <DraggableShoppingCard
                            key={index}
                            shopping={shopping}
                            index={index}
                        />
                    ))}

                    {/* 직접 추가하기 버튼 */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-purple-400 hover:text-purple-500 hover:bg-purple-50 transition-all gap-2 mt-2"
                    >
                        <Plus className="w-5 h-5" />
                        <span className="font-medium text-sm">직접 추가하기</span>
                    </button>
                </div>
            </div>

            {/* 직접 추가하기 모달 */}
            {isAddModalOpen && (
                <ShoppingAddModal
                    destinationCity={destinationCity}
                    onClose={() => setIsAddModalOpen(false)}
                    onCreate={(data) => {
                        if (onCreateCard) {
                            onCreateCard(data);
                        }
                        setIsAddModalOpen(false);
                    }}
                />
            )}
        </div>
    );
}
