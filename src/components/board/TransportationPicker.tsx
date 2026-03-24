'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Bus, Train, Car, Plus } from 'lucide-react';
import { TRANSPORTATIONS_DATA, TransportationType } from '@/data/transportations';
import { TransportCard } from '@/components/cards/TransportCard';

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
const TRANSPORT_COLOR = 'bg-blue-400';
const TRANSPORT_LABEL_COLOR = 'text-blue-600 bg-blue-50 border-blue-100';

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

// 도시별 교통 수단 목록 필터링 함수
function getTransportationsByCity(cityName: string) {
    const normalizedCity = cityName.toLowerCase();
    const cityKey = Object.keys(TRANSPORTATIONS_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? TRANSPORTATIONS_DATA[cityKey] : [];
}

// 드래그 가능한 교통 카드 컴포넌트
function DraggableTransportCard({ transportation, index }: { transportation: any; index: number }) {
    const cardData = {
        id: `picker-transport-${transportation.city}-${index}`,
        text: transportation.name,
        title: transportation.name,
        category: 'transport' as const,
        transportationType: transportation.type,
        city: transportation.city,
        description: transportation.description,
        priceRange: transportation.priceRange,
        availability: transportation.availability,
        features: transportation.features,
        appRequired: transportation.appRequired,
        appName: transportation.appName,
        icon: transportation.icon,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `picker-transport-${transportation.city}-${index}`,
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-teal-300 bg-teal-50/50 rounded-lg"
            />
        );
    }

    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <TransportCard
                card={cardData}
                variant="inbox"
                onRef={setNodeRef}
                style={style}
                listeners={listeners}
                attributes={attributes}
            />
        </div>
    );
}

// TransportationPicker 메인 컴포넌트
export function TransportationPicker({ destinationCity }: { destinationCity?: string }) {
    // 도시가 선택되지 않은 경우
    if (!destinationCity) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Bus className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    먼저 여행지를 선택해주세요
                </p>
            </div>
        );
    }

    // 해당 도시의 교통 수단 목록 가져오기
    const transportations = getTransportationsByCity(destinationCity);

    if (transportations.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                <Bus className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-sm text-slate-500">
                    {destinationCity}의 교통 정보가 없습니다
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-slate-800">교통 수단</h3>
                </div>
                <span className="text-xs text-slate-500">
                    {transportations.length}개
                </span>
            </div>

            {/* 교통 수단 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {transportations.map((transportation, index) => (
                        <DraggableTransportCard
                            key={index}
                            transportation={transportation}
                            index={index}
                        />
                    ))}

                    {/* 직접 추가하기 버튼 (임시 숨김) */}
                    {/* <button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-50 transition-all gap-2 mt-2">
                        <Plus className="w-5 h-5" />
                        <span className="font-medium text-sm">직접 추가하기</span>
                    </button> */}
                </div>
            </div>
        </div>
    );
}
