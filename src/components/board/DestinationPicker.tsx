import { useState, useEffect } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";
import { getCityImage } from "@/utils/cityImages";

import { DESTINATION_DATA, FALLBACK_IMAGES, type RegionKey, type CityData } from "@/data/destinations";


type Step = "month" | "region" | "city";

interface Props {
    onConfirm: (data: { city: string; country: string; month: number, desc: string, imageUrl?: string }) => void;
}

const getCityInsight = (city: string, month: number) => {
    // Simple Simulation Logic (Keep same logic)
    if (['오사카', '도쿄', '후쿠오카'].includes(city)) {
        if (month === 2) return { type: 'good', text: '🌺 매화(Plum Blossom)가 예쁘게 피는 시기예요.' };
        if ([3, 4].includes(month)) return { type: 'good', text: '🌸 벚꽃이 만개하는 최고의 시즌이에요!' };
        if ([6, 7].includes(month)) return { type: 'bad', text: '☔️ 장마철이라 비가 자주 와요.' };
        if ([10, 11].includes(month)) return { type: 'good', text: '🍁 단풍 놀이하기 딱 좋은 날씨예요.' };
    }
    if (city === '삿포로') {
        if ([12, 1, 2].includes(month)) return { type: 'good', text: '❄️ 눈 축제와 설경이 아름다워요.' };
        if ([7, 8].includes(month)) return { type: 'good', text: '💜 라벤더가 한창인 여름이에요.' };
    }
    if (city === '오키나와') {
        if ([7, 8, 9].includes(month)) return { type: 'good', text: '🏖️ 에메랄드빛 바다를 즐기기 좋아요!' };
        if ([1, 2].includes(month)) return { type: 'caution', text: '💨 바람이 많이 불어 쌀쌀할 수 있어요.' };
    }
    if (['방콕', '치앙마이'].includes(city)) {
        if ([11, 12, 1, 2].includes(month)) return { type: 'good', text: '☀️ 덥지 않고 여행하기 가장 쾌적해요!' };
        if ([4, 5].includes(month)) return { type: 'caution', text: '🔥 연중 가장 더운 시기니 주의하세요.' };
        if ([9, 10].includes(month)) return { type: 'bad', text: '⛈️ 스콜성 비가 자주 내려요.' };
    }
    if (['다낭', '나트랑'].includes(city)) {
        if ([2, 3, 4, 5].includes(month)) return { type: 'good', text: '🌊 맑은 날씨가 계속되어 수영하기 좋아요.' };
        if ([9, 10, 11, 12].includes(month)) return { type: 'bad', text: '⛈️ 우기 시즌이라 비가 많이 와요.' };
    }
    if (city === '발리') {
        if ([5, 6, 7, 8, 9].includes(month)) return { type: 'good', text: '🌴 건기라 습도도 낮고 여행하기 최고예요!' };
        if ([12, 1, 2].includes(month)) return { type: 'bad', text: '☔️ 우기라 비가 자주 올 수 있어요.' };
    }
    if (city === '타이베이') {
        if ([10, 11, 12, 1].includes(month)) return { type: 'good', text: '🥟 덥지 않아서 미식 여행하기 딱 좋아요.' };
        if ([6, 7, 8].includes(month)) return { type: 'bad', text: '🥵 습하고 더워서 힘들 수 있어요.' };
    }

    // Default fallback based on season
    if ([12, 1, 2].includes(month)) return { type: 'info', text: '🧤 따뜻하게 입고 가시는 게 좋아요.' };
    if ([7, 8].includes(month)) return { type: 'info', text: '🍦 아주 더운 여름이니 준비 단단히 하세요!' };
    if ([3, 4, 5].includes(month)) return { type: 'info', text: '🌼 꽃 구경하며 산책하기 좋은 날씨예요.' };
    if ([9, 10, 11].includes(month)) return { type: 'info', text: '🍂 선선한 바람이 불어 여행하기 좋아요.' };

    return { type: 'neutral', text: '✈️ 언제 떠나도 매력적인 곳이에요.' };
};

const getSeason = (month: number, hemisphere: 'north' | 'south') => {
    // Southern Hemisphere Reversal
    if (hemisphere === 'south') {
        if ([12, 1, 2].includes(month)) return 'summer';
        if ([3, 4, 5].includes(month)) return 'autumn';
        if ([6, 7, 8].includes(month)) return 'winter';
        return 'spring';
    }

    // Northern Hemisphere (Default)
    if ([12, 1, 2].includes(month)) return 'winter';
    if ([3, 4, 5].includes(month)) return 'spring';
    if ([6, 7, 8].includes(month)) return 'summer';
    return 'autumn';
};

// API Fetch Function
const fetchUnsplashImage = async (city: CityData, month: number | null) => {
    // Check for local images first (Osaka January only for now)
    if (month && city.engName.toLowerCase() === 'osaka' && month === 1) {
        const localImage = getCityImage(city.engName.toLowerCase(), month);
        if (localImage) return localImage;
    }

    const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

    // If no key or no month, return fallback immediately
    if (!accessKey || !month) return FALLBACK_IMAGES[city.engName];

    // Restore Smart Logic: Use Season for Query
    const season = getSeason(month, city.hemisphere || 'north');

    // V13 Improvement: Use "Landmark" keyword for symbolic images
    const keyword = city.landmark || city.engName;

    let query = `${keyword} ${season} scenic`;

    // Special Case: Feb in East Asia is Plum Blossom season
    if (month === 2 && ['일본', '중국', '대만'].includes(city.country)) {
        query = `${keyword} plum blossom scenic`;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1&client_id=${accessKey}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // Return the high-quality regular URL
            return data.results[0].urls.regular;
        }
    } catch (e) {
    }

    // Fallback if API fails or no results
    return FALLBACK_IMAGES[city.engName];
};

// Draggable City Card Component
function DraggableCityCard({ city, imageUrl, insight, selectedMonth }: {
    city: CityData;
    imageUrl: string;
    insight: { type: string; text: string } | null;
    selectedMonth: number | null;
}) {
    const cardData = {
        id: `picker-${city.engName}`,
        text: city.name,
        category: 'destination' as const,
        month: selectedMonth || undefined,  // 🎯 필수: 캘린더 초기 월 설정에 사용
        city: city.engName.toLowerCase(),  // 🎯 필수: 도시 식별자
        imageUrl: imageUrl,
        airports: city.airports,
        timezone: city.timezone,
    };

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `picker-${city.engName}`,
        data: cardData,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    // 드래그 중일 때 빈 placeholder만 표시
    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                className="w-full min-w-[320px] h-[72px] border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-lg"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="group bg-white hover:bg-slate-50 border border-gray-100 hover:border-emerald-500 flex items-center gap-0 relative touch-none select-none h-[72px] transition-all overflow-hidden w-full max-w-md cursor-grab active:cursor-grabbing rounded-lg shadow-sm hover:shadow-md"
        >
            {/* Left: Image (Fixed 80px width) */}
            <div className="w-20 h-full relative group-hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden shrink-0 border-r border-gray-50 pointer-events-none">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={city.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-slate-200');
                        }}
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-emerald-500 opacity-50" />
                    </div>
                )}
                {insight?.type === 'good' && (
                    <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm z-10">
                        추천
                    </div>
                )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full px-3 py-1 pointer-events-none">
                <div className="flex justify-between items-center mb-0.5">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 leading-none truncate pr-2">
                        {city.name}
                    </span>
                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
                        {city.country}
                    </span>
                </div>

                {insight ? (
                    <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight">
                        {insight.text}
                    </p>
                ) : (
                    <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight">
                        {city.desc}
                    </p>
                )}
            </div>
        </div>
    );
}

export function DestinationPicker({ onConfirm }: Props) {
    // Step 1: Month -> Region -> City
    const [step, setStep] = useState<Step>("month");
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<RegionKey | null>(null);

    // Image Cache state to avoid re-fetching
    const [cityImages, setCityImages] = useState<Record<string, string>>({});

    // Preload images when month/region selected
    useEffect(() => {
        if (selectedMonth && step === "city") {
            const citiesToLoad = selectedRegion ? DESTINATION_DATA[selectedRegion].cities : [];

            citiesToLoad.forEach(async (city) => {
                // If already loaded for this session, skip
                if (cityImages[city.name]) return;

                const url = await fetchUnsplashImage(city, selectedMonth);
                setCityImages(prev => ({ ...prev, [city.name]: url || FALLBACK_IMAGES[city.engName] }));
            });
        }
    }, [selectedMonth, step, selectedRegion]);

    const handleMonthSelect = (month: number) => {
        setSelectedMonth(month);
        // Clear image cache to force re-fetch for new season
        setCityImages({});
        setStep("region");
    };

    const handleRegionSelect = (key: RegionKey) => {
        setSelectedRegion(key);
        setStep("city");
    };

    const handleCitySelect = (city: CityData) => {
        if (selectedMonth) {
            const insight = getCityInsight(city.name, selectedMonth);
            onConfirm({
                city: city.name,
                country: city.country,
                desc: insight.text,
                month: selectedMonth,
                imageUrl: cityImages[city.name] // Pass the actual loaded image URL
            });
        }
    };

    const handleBack = () => {
        if (step === "city") setStep("region");
        else if (step === "region") setStep("month");
    };

    // --- Render Steps ---

    if (step === "month") {
        return (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">언제 떠나시나요?</h3>
                    <p className="text-xs text-slate-400">여행 시기를 먼저 선택해주세요</p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                        <button
                            key={month}
                            onClick={() => handleMonthSelect(month)}
                            className="h-14 rounded-xl bg-white border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all flex flex-col items-center justify-center gap-0.5 group shadow-sm"
                        >
                            <span className="text-sm font-bold text-slate-600 group-hover:text-emerald-600">{month}월</span>
                            {month === 4 && <span className="text-[9px] text-rose-500 font-bold animate-pulse">추천</span>}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    if (step === "region") {
        return (
            <div className="flex flex-col gap-4 p-2 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-2 px-1">
                    <button onClick={handleBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h3 className="font-bold text-slate-800">{selectedMonth}월, 어디로 떠나시나요?</h3>
                        <p className="text-xs text-slate-400">마음이 이끄는 곳을 골라보세요</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {Object.entries(DESTINATION_DATA).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => handleRegionSelect(key as RegionKey)}
                            className="group relative flex items-center p-4 bg-white border border-gray-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/30 transition-all shadow-sm hover:shadow-md text-left"
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center mr-4 transition-colors">
                                {key === 'japan' && <span className="text-xl">🏯</span>}
                                {key === 'china_taiwan' && <span className="text-xl">🏮</span>}
                                {key === 'se_asia' && <span className="text-xl">🌴</span>}
                                {key === 'long_haul' && <span className="text-xl">✈️</span>}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700 group-hover:text-emerald-700 text-base">{data.title}</h4>
                                <p className="text-xs text-slate-400 group-hover:text-emerald-600/70">{data.subtitle}</p>
                            </div>
                            <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-emerald-500 ml-auto rotate-180 transition-colors" />
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (step === "city" && selectedRegion) {
        const regionData = DESTINATION_DATA[selectedRegion];
        return (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-4 px-1">
                    <button onClick={handleBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h3 className="font-bold text-slate-800">{selectedMonth}월 {regionData.title} 여행</h3>
                        <p className="text-xs text-slate-400">도시를 선택하면 카드가 생성됩니다</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pb-20 justify-items-center">
                    {regionData.cities.map((city) => {
                        const insight = selectedMonth ? getCityInsight(city.name, selectedMonth) : null;
                        const imageUrl = cityImages[city.name] || FALLBACK_IMAGES[city.engName];

                        return (
                            <DraggableCityCard
                                key={city.name}
                                city={city}
                                imageUrl={imageUrl}
                                insight={insight}
                                selectedMonth={selectedMonth}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;
}
