"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Hotel, Utensils, ShoppingBag, Palmtree, FileText } from "lucide-react";
import { DESTINATION_DATA, FALLBACK_IMAGES, type CityData } from "@/data/destinations";

// ── 모든 도시 플랫하게 찾기 ───────────────────────────────
function findCityBySlug(slug: string): CityData | null {
    for (const region of Object.values(DESTINATION_DATA)) {
        const city = region.cities.find(
            (c) => c.engName.toLowerCase().replace(/\s+/g, "-") === slug
        );
        if (city) return city;
    }
    return null;
}

// ── 카테고리 탭 정의 (inbox bottomTabs 기준) ─────────────
const CATEGORY_TABS = [
    { id: "all", label: "전체", icon: FileText },
    { id: "food", label: "맛집", icon: Utensils },
    { id: "hotel", label: "숙소", icon: Hotel },
    { id: "shopping", label: "쇼핑", icon: ShoppingBag },
    { id: "tourspa", label: "투어&스파", icon: Palmtree },
];

// ── 빈 상태 컴포넌트 ────────────────────────────────────
function EmptyState({ category }: { category: string }) {
    const tab = CATEGORY_TABS.find((t) => t.id === category);
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                {tab?.icon && <tab.icon className="w-7 h-7 text-slate-300" />}
            </div>
            <p className="text-slate-400 text-sm font-medium">아직 콘텐츠가 없어요</p>
            <p className="text-slate-300 text-xs mt-1">곧 업데이트될 예정이에요!</p>
        </div>
    );
}

export default function CityExplorePage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = use(params);
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
    const [selectedCard, setSelectedCard] = useState<null | { id: string; title: string; desc: string }>(null);

    const city = findCityBySlug(citySlug);

    if (!city) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center">
                <MapPin className="w-12 h-12 text-slate-300 mb-3" />
                <p className="text-slate-400 text-sm">존재하지 않는 여행지예요.</p>
                <button
                    onClick={() => router.push("/explore")}
                    className="mt-4 text-orange-500 text-sm font-semibold hover:underline"
                >
                    여행지 선택으로 돌아가기
                </button>
            </div>
        );
    }

    const imageUrl = FALLBACK_IMAGES[city.engName];

    return (
        <div className="flex flex-col">
            {/* ── 도시 헤더 이미지 ── */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-200">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={city.name}
                        className="w-full h-full object-cover"
                    />
                )}
                {/* 어두운 그라디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* 뒤로가기 버튼 */}
                <button
                    onClick={() => router.push("/explore")}
                    className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>

                {/* 도시명 */}
                <div className="absolute bottom-5 left-5">
                    <h1 className="text-2xl font-black text-white drop-shadow-sm">{city.name}</h1>
                    <p className="text-white/80 text-sm mt-0.5">{city.country} · {city.desc}</p>
                    <div className="flex gap-1.5 mt-2">
                        {city.tags.map((tag) => (
                            <span key={tag} className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── 카테고리 탭 ── */}
            <div className="sticky top-0 z-20 bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex gap-0.5 overflow-x-auto no-scrollbar">
                        {CATEGORY_TABS.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => { setActiveTab(tab.id); setSelectedCard(null); }}
                                    className={`flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all duration-150 ${isActive
                                        ? "border-orange-500 text-orange-500"
                                        : "border-transparent text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    <tab.icon className="w-3.5 h-3.5" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── 메인 콘텐츠 (카드 리스트 + 상세 패널) ── */}
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6">
                <div className="flex gap-5 min-h-[400px]">
                    {/* 좌: 카드 리스트 */}
                    <div className={`flex flex-col gap-2 transition-all duration-200 ${selectedCard ? "w-full md:w-[320px] shrink-0" : "w-full"}`}>
                        <EmptyState category={activeTab} />
                    </div>

                    {/* 우: 카드 상세 패널 (카드 선택 시 표시) */}
                    {selectedCard && (
                        <div className="hidden md:flex flex-1 flex-col bg-white rounded-2xl border border-slate-100 shadow-sm p-6 animate-in slide-in-from-right-4 duration-200">
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="self-start mb-4 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <h2 className="font-bold text-slate-800 text-lg mb-2">{selectedCard.title}</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">{selectedCard.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
