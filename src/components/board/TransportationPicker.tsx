'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Bus, Train, Car, Plus, Plane } from 'lucide-react';
import { TransportationType, CITY_DATA } from '@/data/cities';
import { TransportCard } from '@/components/cards/TransportCard';
import { EmptyState } from './EmptyState';
import { PickerHeader } from './PickerHeader';

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
    const cityKey = Object.keys(CITY_DATA).find(
        key => key.toLowerCase() === normalizedCity
    );
    return cityKey ? CITY_DATA[cityKey].transport : [];
}

// "도시간 항공편" 메타 카드 — 일차에 드롭 시 미등록 항공편 카드 생성
function DraggableIntercityFlightPickerCard() {
    const cardData = {
        id: 'picker-intercity-flight',
        text: '도시간 항공편',
        title: '도시간 항공편',
        category: 'flight' as const,
        __intercityFlightTrigger: true,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: 'picker-intercity-flight',
        data: cardData,
    });

    const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full h-[72px] border-2 border-dashed border-sky-300 bg-sky-50/50 rounded-lg"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="group bg-white hover:bg-slate-50 border border-sky-200 hover:border-sky-400 rounded-xl flex items-center gap-3 relative touch-none select-none h-[58px] md:h-[72px] px-3 transition-all cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md overflow-hidden"
        >
            <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-sky-400" />
            <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
                <span className="hidden md:block text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                    Flight
                </span>
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                    도시간 항공편
                </h4>
                <div className="text-[11px] text-slate-500 truncate">
                    일차에 드롭 후 등록
                </div>
            </div>
        </div>
    );
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
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
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
            <EmptyState
                icon={<Bus className="w-12 h-12" />}
                title="먼저 여행지를 선택해주세요"
                size="lg"
            />
        );
    }

    // 해당 도시의 교통 수단 목록 가져오기
    const transportations = getTransportationsByCity(destinationCity).filter(t => t.showInInbox);
    const totalCount = transportations.length + 1; // 도시간 항공편 메타 카드 +1

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <PickerHeader
                title="교통 수단"
                icon={Bus}
                color="blue"
                count={totalCount}
            />

            {/* 교통 수단 목록 (스크롤 가능) */}
            <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-3">
                    {/* 도시간 항공편 메타 카드 — 항상 상단 고정 */}
                    <DraggableIntercityFlightPickerCard />

                    {transportations.length === 0 ? (
                        <p className="text-center text-xs text-slate-400 py-4">
                            {destinationCity}의 교통 정보가 없습니다
                        </p>
                    ) : (
                        transportations.map((transportation, index) => (
                            <DraggableTransportCard
                                key={index}
                                transportation={transportation}
                                index={index}
                            />
                        ))
                    )}

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
