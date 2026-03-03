"use client";

import { useState } from "react";
import { ArrowLeft, Hotel, Utensils, ShoppingBag, Palmtree, Users, BookOpen, Clock, DollarSign, Star, Search, X } from "lucide-react";
import { DESTINATION_DATA, FALLBACK_IMAGES, type RegionKey, type CityData } from "@/data/destinations";
import { RESTAURANTS_DATA, type RestaurantData } from "@/data/restaurants";
import { ACCOMMODATIONS_DATA, type AccommodationData } from "@/data/accommodations";

// ── 지역 탭 ────────────────────────────────────────────
const REGION_TABS: { key: RegionKey; label: string; icon: string }[] = [
    { key: "japan", label: "일본", icon: "🏯" },
    { key: "china_taiwan", label: "중국·대만", icon: "🏮" },
    { key: "se_asia", label: "동남아", icon: "🌴" },
    { key: "long_haul", label: "이색·장거리", icon: "✈️" },
];

// ── 카테고리 탭 ───────────────────────────────────────
const CATEGORY_TABS = [
    { id: "food", label: "맛집", icon: Utensils },
    { id: "hotel", label: "숙소", icon: Hotel },
    { id: "shopping", label: "쇼핑", icon: ShoppingBag },
    { id: "tourspa", label: "투어&스파", icon: Palmtree },
    { id: "shared", label: "공유플랜", icon: Users },
    { id: "guide", label: "여행가이드", icon: BookOpen },
];

const FOOD_ICON_MAP: Record<string, string> = {
    korean: "🇰🇷", japanese: "🍱", chinese: "🥟", western: "🍔",
    italian: "🍝", french: "🥐", cafe: "☕", "street-food": "🍢",
    fusion: "🍽️", local: "🌶️", seafood: "🦞",
};

const FOOD_TYPE_LABEL: Record<string, string> = {
    korean: "한식", japanese: "일식", chinese: "중식", western: "양식",
    italian: "이탈리안", french: "프렌치", cafe: "카페", "street-food": "길거리음식",
    fusion: "퓨전", local: "현지음식",
};

// ── BaseCard 스타일 정적 카드 ─────────────────────────
function StaticBaseCard({
    colorClass, Icon, category, children, isSelected, onClick,
}: {
    colorClass: string;
    Icon: any;
    category: string;
    children: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`group w-full bg-white hover:bg-slate-50 border-b flex items-center gap-3 relative h-[72px] px-3 transition-colors overflow-hidden text-left rounded-xl ${isSelected
                ? "border-2 border-orange-400 bg-orange-50/50 shadow-sm"
                : "border border-gray-100 hover:border-slate-200"
                }`}
        >
            <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${colorClass}`} />
            <div className="ml-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-black/5">
                <Icon className="w-4 h-4 text-slate-600" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">{category}</span>
                {children}
            </div>
            {isSelected && <div className="shrink-0 w-2 h-2 rounded-full bg-orange-400 mr-1" />}
        </button>
    );
}

function ExploreFood({ item, isSelected, onClick }: { item: RestaurantData; isSelected: boolean; onClick: () => void }) {
    const icon = item.icon || FOOD_ICON_MAP[item.type] || "🍴";
    const category = FOOD_TYPE_LABEL[item.type] || item.type;
    return (
        <StaticBaseCard colorClass="bg-orange-400" Icon={Utensils} category={category} isSelected={isSelected} onClick={onClick}>
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-1.5">
                    <span className="text-base leading-none">{icon}</span>
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{item.name}</h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {item.specialty && <span className="text-[11px] text-gray-600 truncate">{item.specialty}</span>}
                    {item.priceRange && <><span className="text-gray-300">|</span><span className="text-[11px] text-gray-500">{item.priceRange}</span></>}
                    {item.michelin && <><span className="text-gray-300">|</span><span className="text-[9px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 font-bold">⭐ {item.michelin}</span></>}
                </div>
            </div>
        </StaticBaseCard>
    );
}

function ExploreHotel({ item, isSelected, onClick }: { item: AccommodationData; isSelected: boolean; onClick: () => void }) {
    const category = item.type === "resort" ? "Resort" : "Hotel";
    return (
        <StaticBaseCard colorClass="bg-rose-400" Icon={Hotel} category={category} isSelected={isSelected} onClick={onClick}>
            <div className="flex flex-col w-full">
                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{item.name}</h4>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    {item.tags?.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                </div>
            </div>
        </StaticBaseCard>
    );
}

function EmptyState({ category }: { category: string }) {
    const tab = CATEGORY_TABS.find((t) => t.id === category);
    const Icon = tab?.icon;
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                {Icon && <Icon className="w-6 h-6 text-slate-300" />}
            </div>
            <p className="text-slate-400 text-sm font-medium">아직 콘텐츠가 없어요</p>
            <p className="text-slate-300 text-xs mt-1">곧 업데이트될 예정이에요!</p>
        </div>
    );
}

// ── 모바일 아코디언 내부 컨텐츠 ──────────────────────
function FoodAccordion({ item }: { item: RestaurantData }) {
    return (
        <div className="md:hidden mt-1 rounded-xl border border-orange-200 bg-white overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <div className="h-44">
                <iframe
                    src={`https://maps.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&z=15&output=embed&hl=ko`}
                    className="w-full h-full border-0" loading="lazy" allowFullScreen title={item.name}
                />
            </div>
            <div className="p-3 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon || "🍴"}</span>
                    <div>
                        <p className="font-black text-slate-800 text-sm">{item.name}</p>
                        <p className="text-[11px] text-slate-400">{item.city}</p>
                    </div>
                </div>
                {item.priceRange && <p className="text-xs text-slate-600">💰 {item.priceRange}</p>}
                {item.openingHours && <p className="text-xs text-slate-600">🕐 {item.openingHours}</p>}
                {item.michelin && <p className="text-xs text-amber-600 font-semibold">⭐ 미슐랭 {item.michelin}</p>}
                {item.specialty && (
                    <div className="p-2 bg-orange-50 rounded-lg">
                        <p className="text-[10px] font-bold text-orange-700 mb-0.5">대표 메뉴</p>
                        <p className="text-xs text-slate-700">{item.specialty}</p>
                    </div>
                )}
                {item.features && (
                    <div className="flex flex-wrap gap-1">
                        {item.features.map((f) => <span key={f} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{f}</span>)}
                    </div>
                )}
                {item.reservation && <p className="text-[11px] text-rose-500 font-semibold">📅 예약 필수</p>}
            </div>
        </div>
    );
}

function HotelAccordion({ item }: { item: AccommodationData }) {
    return (
        <div className="md:hidden mt-1 rounded-xl border border-rose-200 bg-white overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <div className="h-44">
                <iframe
                    src={`https://maps.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&z=15&output=embed&hl=ko`}
                    className="w-full h-full border-0" loading="lazy" allowFullScreen title={item.name}
                />
            </div>
            <div className="p-3 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{item.type === "resort" ? "🏖️" : "🏨"}</span>
                    <div>
                        <p className="font-black text-slate-800 text-sm">{item.name}</p>
                        <p className="text-[11px] text-slate-400">{item.city}</p>
                    </div>
                </div>
                {item.description && (
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <p className="text-xs text-slate-700">{item.description}</p>
                    </div>
                )}
                <div className="flex gap-3 text-xs text-slate-600">
                    <span>🟢 체크인 {item.checkInTime}</span>
                    <span>🔴 체크아웃 {item.checkOutTime}</span>
                </div>
                {item.tags && (
                    <div className="flex flex-wrap gap-1">
                        {item.tags.map((t) => <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>)}
                    </div>
                )}
            </div>
        </div>
    );
}

// ── 메인 페이지 ───────────────────────────────────────
export default function ExplorePage() {
    const [activeRegion, setActiveRegion] = useState<RegionKey>("japan");
    const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
    const [activeCategory, setActiveCategory] = useState("food");
    const [selectedFoodIdx, setSelectedFoodIdx] = useState<number | null>(null);
    const [selectedHotelIdx, setSelectedHotelIdx] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const regionData = DESTINATION_DATA[activeRegion];
    const cityKey = selectedCity?.engName ?? "";
    const foodList: RestaurantData[] = cityKey ? (RESTAURANTS_DATA[cityKey] || []) : [];
    const hotelList: AccommodationData[] = cityKey ? (ACCOMMODATIONS_DATA[cityKey] || []) : [];

    // 검색 필터링
    const q = searchQuery.toLowerCase();
    const filteredFoodList = q
        ? foodList.filter((r) =>
            r.name.toLowerCase().includes(q) ||
            (r.specialty || "").toLowerCase().includes(q) ||
            (r.cuisine || "").toLowerCase().includes(q) ||
            (r.type || "").toLowerCase().includes(q)
        )
        : foodList;
    const filteredHotelList = q
        ? hotelList.filter((h) =>
            h.name.toLowerCase().includes(q) ||
            (h.description || "").toLowerCase().includes(q) ||
            (h.tags || []).some((t) => t.toLowerCase().includes(q))
        )
        : hotelList;

    const selectedFood = selectedFoodIdx !== null ? filteredFoodList[selectedFoodIdx] : null;
    const selectedHotel = selectedHotelIdx !== null ? filteredHotelList[selectedHotelIdx] : null;

    const handleCitySelect = (city: CityData) => {
        setSelectedCity(city);
        setActiveCategory("food");
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
        setSearchQuery("");
    };

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
        setSearchQuery("");
    };

    const handleSearchChange = (val: string) => {
        setSearchQuery(val);
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
    };

    return (
        <div className="flex flex-col h-full overflow-hidden">

            {/* ── 지역 탭 (고정, shrink-0) ── */}
            <div className="shrink-0 bg-white border-b border-slate-100 z-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex gap-0.5 overflow-x-auto no-scrollbar">
                        {REGION_TABS.map((tab) => {
                            const isActive = activeRegion === tab.key && !selectedCity;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => { setActiveRegion(tab.key); setSelectedCity(null); setSelectedFoodIdx(null); setSelectedHotelIdx(null); setSearchQuery(""); }}
                                    className={`flex items-center gap-1.5 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-all duration-150 ${isActive ? "border-orange-500 text-orange-500" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"
                                        }`}
                                >
                                    <span>{tab.icon}</span>{tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── 도시 미선택: 그리드 (스크롤 가능) ── */}
            {!selectedCity && (
                <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in slide-in-from-bottom-3 duration-300">
                        <div className="mb-6">
                            <h2 className="text-xl font-black text-slate-800">
                                {REGION_TABS.find((t) => t.key === activeRegion)?.icon}{" "}{regionData.title}
                            </h2>
                            <p className="text-sm text-slate-400 mt-0.5">{regionData.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {regionData.cities.map((city) => {
                                const imageUrl = FALLBACK_IMAGES[city.engName];
                                return (
                                    <button
                                        key={city.engName}
                                        onClick={() => handleCitySelect(city)}
                                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {imageUrl && (
                                            <img src={imageUrl} alt={city.name}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                                            <p className="text-white font-bold text-sm leading-tight drop-shadow">{city.name}</p>
                                            <p className="text-white/70 text-[10px] mt-0.5">{city.country}</p>
                                            <div className="flex gap-1 mt-1.5 flex-wrap">
                                                {city.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="text-[9px] bg-white/20 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full font-semibold">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* ── 도시 선택 후: 패널별 독립 스크롤 (메인 스크롤 없음) ── */}
            {selectedCity && (
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-300">

                    {/* 도시 헤더 (고정) */}
                    <div className="shrink-0 px-4 sm:px-6 pt-4 pb-0 max-w-6xl mx-auto w-full">
                        <div className="relative rounded-2xl overflow-hidden h-32 sm:h-40 shadow-md mb-3">
                            {FALLBACK_IMAGES[selectedCity.engName] && (
                                <img src={FALLBACK_IMAGES[selectedCity.engName]} alt={selectedCity.name}
                                    className="absolute inset-0 w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                            <button onClick={() => setSelectedCity(null)}
                                className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
                                <ArrowLeft className="w-3.5 h-3.5" /> 목록으로
                            </button>
                            <div className="absolute bottom-4 left-4">
                                <h2 className="text-2xl font-black text-white drop-shadow">{selectedCity.name}</h2>
                                <p className="text-white/80 text-sm mt-0.5">{selectedCity.country} · {selectedCity.desc}</p>
                                <div className="flex gap-1.5 mt-2">
                                    {selectedCity.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] bg-white/25 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-semibold">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 카테고리 탭 (고정) */}
                        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-3">
                            {CATEGORY_TABS.map((tab) => {
                                const isActive = activeCategory === tab.id;
                                return (
                                    <button key={tab.id} onClick={() => handleCategoryChange(tab.id)}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-all duration-150 ${isActive ? "bg-slate-800 border-slate-800 text-white shadow-sm" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                                            }`}>
                                        <tab.icon className={`w-3.5 h-3.5 ${isActive ? "text-orange-400" : "text-slate-400"}`} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── 카드 + 지도 (flex-1, 각자 독립 스크롤) ── */}
                    <div className="flex-1 min-h-0 flex gap-4 px-4 sm:px-6 pb-4 max-w-6xl mx-auto w-full">

                        {/* 좌: 검색바(고정) + 카드 리스트(독립 스크롤) */}
                        <div className="w-full md:w-1/2 flex flex-col min-h-0">

                            {/* 검색바 (고정) */}
                            <div className="shrink-0 pb-2.5">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => handleSearchChange(e.target.value)}
                                        placeholder={activeCategory === "food" ? "맛집 이름, 메뉴 검색..." : activeCategory === "hotel" ? "숙소 이름, 특징 검색..." : "검색..."}
                                        className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-300 focus:bg-white transition-colors"
                                    />
                                    {searchQuery && (
                                        <button onClick={() => handleSearchChange("")}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* 카드 리스트 (독립 스크롤) */}
                            <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar flex flex-col gap-2 pr-3">
                                {activeCategory === "food" && (
                                    filteredFoodList.length > 0
                                        ? filteredFoodList.map((item, idx) => (
                                            <div key={idx}>
                                                <ExploreFood item={item} isSelected={selectedFoodIdx === idx}
                                                    onClick={() => setSelectedFoodIdx(idx === selectedFoodIdx ? null : idx)} />
                                                {selectedFoodIdx === idx && <FoodAccordion item={item} />}
                                            </div>
                                        ))
                                        : <EmptyState category="food" />
                                )}
                                {activeCategory === "hotel" && (
                                    filteredHotelList.length > 0
                                        ? filteredHotelList.map((item, idx) => (
                                            <div key={idx}>
                                                <ExploreHotel item={item} isSelected={selectedHotelIdx === idx}
                                                    onClick={() => setSelectedHotelIdx(idx === selectedHotelIdx ? null : idx)} />
                                                {selectedHotelIdx === idx && <HotelAccordion item={item} />}
                                            </div>
                                        ))
                                        : <EmptyState category="hotel" />
                                )}
                                {!["food", "hotel"].includes(activeCategory) && <EmptyState category={activeCategory} />}
                            </div>
                        </div>{/* 좌측 패널 끝 */}

                        {/* 우: 지도 + 설명 (데스크탑만, 단일 스크롤) */}
                        <div className="hidden md:flex w-1/2 flex-col min-h-0 rounded-2xl border border-slate-100 shadow-sm bg-white overflow-hidden">
                            <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar">

                                {/* 지도 (여백 및 라운딩 포함) */}
                                <div className="h-64 mx-3 mt-3 rounded-xl overflow-hidden">
                                    {(activeCategory === "food" && selectedFood) ? (
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${selectedFood.coordinates.lat},${selectedFood.coordinates.lng}&z=15&output=embed&hl=ko`}
                                            className="w-full h-full border-0" loading="lazy" allowFullScreen title={selectedFood.name}
                                        />
                                    ) : (activeCategory === "hotel" && selectedHotel) ? (
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${selectedHotel.coordinates.lat},${selectedHotel.coordinates.lng}&z=15&output=embed&hl=ko`}
                                            className="w-full h-full border-0" loading="lazy" allowFullScreen title={selectedHotel.name}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-300">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                            <p className="text-xs">카드를 선택하면 지도가 표시됩니다</p>
                                        </div>
                                    )}
                                </div>

                                {/* 상세 설명 (지도 아래 연속) */}
                                <div className="px-4 pr-6 py-4">
                                    {activeCategory === "food" && selectedFood ? (
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{selectedFood.icon || "🍴"}</span>
                                                <div>
                                                    <p className="font-black text-slate-800 text-sm">{selectedFood.name}</p>
                                                    <p className="text-[11px] text-slate-400">{selectedFood.city}</p>
                                                </div>
                                            </div>
                                            {selectedFood.priceRange && <div className="flex items-center gap-1.5 text-xs text-slate-600"><DollarSign className="w-3.5 h-3.5 text-green-500" /> {selectedFood.priceRange}</div>}
                                            {selectedFood.openingHours && <div className="flex items-center gap-1.5 text-xs text-slate-600"><Clock className="w-3.5 h-3.5 text-blue-500" /> {selectedFood.openingHours}</div>}
                                            {selectedFood.michelin && <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold"><Star className="w-3.5 h-3.5" /> 미슐랭 {selectedFood.michelin}</div>}
                                            {selectedFood.specialty && (
                                                <div className="p-2.5 bg-orange-50 rounded-lg">
                                                    <p className="text-[10px] font-bold text-orange-700 mb-1">대표 메뉴</p>
                                                    <p className="text-xs text-slate-700">{selectedFood.specialty}</p>
                                                </div>
                                            )}
                                            {selectedFood.features && (
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedFood.features.map((f) => <span key={f} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{f}</span>)}
                                                </div>
                                            )}
                                            {selectedFood.reservation && <p className="text-[11px] text-rose-500 font-semibold">📅 예약 필수</p>}
                                        </div>
                                    ) : activeCategory === "hotel" && selectedHotel ? (
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{selectedHotel.type === "resort" ? "🏖️" : "🏨"}</span>
                                                <div>
                                                    <p className="font-black text-slate-800 text-sm">{selectedHotel.name}</p>
                                                    <p className="text-[11px] text-slate-400">{selectedHotel.city}</p>
                                                </div>
                                            </div>
                                            {selectedHotel.description && (
                                                <div className="p-2.5 bg-blue-50 rounded-lg">
                                                    <p className="text-xs text-slate-700">{selectedHotel.description}</p>
                                                </div>
                                            )}
                                            <div className="flex gap-3 text-xs text-slate-600">
                                                <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-blue-500" /> 체크인 {selectedHotel.checkInTime}</div>
                                                <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-slate-400" /> 체크아웃 {selectedHotel.checkOutTime}</div>
                                            </div>
                                            {selectedHotel.tags && (
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedHotel.tags.map((t) => <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>)}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center text-slate-300 text-xs text-center py-8">
                                            카드를 선택하면<br />상세 정보가 표시됩니다
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>{/* 우측 패널 끝 */}

                    </div>{/* 카드+지도 영역 끝 */}
                </div>
            )}
        </div>
    );
}
