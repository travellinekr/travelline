"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowLeft, Hotel, Utensils, ShoppingBag, Palmtree, Users, BookOpen, Clock, DollarSign, Star, Search, X, Plus, Check, Loader2, Map as MapIcon } from "lucide-react";
import { DESTINATION_DATA, FALLBACK_IMAGES, type RegionKey, type CityData } from "@/data/destinations";
import { type RestaurantData, type AccommodationData, type ShoppingData, CITY_DATA } from "@/data/cities";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { ToastContainer } from "@/components/common/ToastContainer";
import { useRouter } from "next/navigation";
import { FoodCard } from "@/components/cards/FoodCard";
import { HotelCard } from "@/components/cards/HotelCard";
import { ShoppingCard } from "@/components/cards/ShoppingCard";
import { sortByAnchorDistance } from "@/utils/distance";
import { InboxMapModal } from "@/components/board/InboxMapModal";
import { AnchorContext } from "@/contexts/AnchorContext";
import { toastForApplyResult, type ApplyResult } from "@/utils/applyExploreCards";

// ── 지역 탭 ────────────────────────────────────────────
const REGION_TABS: { key: RegionKey | "main"; label: string; icon: string }[] = [
    { key: "main", label: "여행쇼핑메인", icon: "💎" },
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
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(item.name + ' ' + item.city)}&z=16&output=embed&hl=ko`}
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
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(item.name + ' ' + item.city)}&z=16&output=embed&hl=ko`}
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

// ── 카드 큐 타입 ─────────────────────────────────────
export type ExploreCardQueue = {
    category: 'food' | 'accommodation' | 'shopping';
    name: string;
    city: string;
    icon?: string;
    coordinates?: { lat: number; lng: number };
    description?: string;
    priceRange?: string;
    openingHours?: string;
    michelin?: string;
    specialty?: string;
    features?: string[];
    reservation?: boolean;
    restaurantType?: string;
    cuisine?: string;
    accommodationType?: string;
    checkInTime?: string;
    checkOutTime?: string;
    tags?: string[];
    shoppingType?: string;
    shoppingCategory?: string;
    specialItems?: string;
    taxRefund?: boolean;
};

// ExploreContent — /explore 메인 콘텐츠.
// 스탠드얼론(/explore 라우트): URL searchParams 파싱한 결과를 props로 받아 렌더
// 모달 모드(룸 안): CollaborativeApp이 props로 직접 전달
//
// onBack 옵션:
//   있으면 — "여행보드로" 클릭 시 onBack(activeCategory) 호출 (모달 닫기)
//   없으면 — fromRoomId 가 있으면 router.push(/room/[id]?inbox=...) fallback
//
// onAddCards 옵션:
//   있으면 — 모달 모드. 카드 추가 시 프로젝트 선택 메뉴 없이 즉시 현재 룸에 반영
//   없으면 — 스탠드얼론 모드. localStorage 큐에 쌓아두고 useExploreQueue가 처리
// destinationCity:
//   모달 모드에서 현재 룸의 최종여행지. 모달 안 selectedCity 와 매칭 검증에 사용.
export interface ExploreContentProps {
    initialCity: CityData | null;
    initialRegion: RegionKey | "main";
    initialCategory: string;
    anchor: { lat: number; lng: number; title: string } | null;
    fromRoomId?: string;
    onBack?: (category: string) => void;
    onAddCards?: (cards: ExploreCardQueue[]) => ApplyResult;
    destinationCity?: string;
    // 모달 모드에서 룸 보관함에 이미 있는 카드 키 set (`${name}__${city}`).
    // 해당 카드는 체크박스를 미리 체크된 상태로 표시 + 클릭 비활성화.
    existingCardKeys?: Set<string>;
}

export function ExploreContent({
    initialCity,
    initialRegion,
    initialCategory,
    anchor,
    fromRoomId,
    onBack,
    onAddCards,
    destinationCity,
    existingCardKeys,
}: ExploreContentProps) {
    const { user } = useAuth();
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);

    // FoodCard/HotelCard/ShoppingCard 의 useAnchor() 가 거리 계산하도록 synthetic anchorCard 제공.
    // 룸 외부라 실제 AnchorContext 없으므로 URL anchor 로부터 합성.
    const anchorContextValue = useMemo(() => {
        const syntheticAnchorCard = anchor ? {
            id: 'url-anchor',
            text: anchor.title,
            title: anchor.title,
            coordinates: { lat: anchor.lat, lng: anchor.lng },
        } : null;
        return {
            selectedAnchorId: syntheticAnchorCard?.id ?? null,
            anchorCard: syntheticAnchorCard,
            toggleAnchor: () => { },
            scrollToAnchor: () => { },
        };
    }, [anchor]);

    const [activeRegion, setActiveRegion] = useState<RegionKey | "main">(initialRegion);
    const [selectedCity, setSelectedCity] = useState<CityData | null>(initialCity);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [isExploreMapOpen, setIsExploreMapOpen] = useState(false);
    const [selectedFoodIdx, setSelectedFoodIdx] = useState<number | null>(null);
    const [selectedHotelIdx, setSelectedHotelIdx] = useState<number | null>(null);
    const [selectedShoppingIdx, setSelectedShoppingIdx] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showInfoModal, setShowInfoModal] = useState(false);

    // ── 체크 & 여행계획 추가 ─────────────────────────
    const [checkedCards, setCheckedCards] = useState<Map<string, ExploreCardQueue>>(new Map());
    const [showProjectMenu, setShowProjectMenu] = useState(false);
    const [activeProjects, setActiveProjects] = useState<{ id: string; name: string }[]>([]);
    const [projectsLoading, setProjectsLoading] = useState(false);
    const { toasts, addToast, removeToast } = useToast();
    // projectId → 목적지 도시 (null = 미설정, undefined = 아직 모름)
    const [projectCityMap, setProjectCityMap] = useState<Record<string, string | null>>({});

    const regionData = activeRegion !== "main" ? DESTINATION_DATA[activeRegion] : null;
    const cityKey = selectedCity?.engName ?? "";
    const foodList: RestaurantData[] = cityKey ? (CITY_DATA[cityKey]?.restaurants || []) : [];
    const hotelList: AccommodationData[] = cityKey ? (CITY_DATA[cityKey]?.accommodations || []) : [];
    const shoppingList: ShoppingData[] = cityKey ? (CITY_DATA[cityKey]?.shopping || []) : [];

    // 검색 필터링 + anchor 좌표 기준 거리순 정렬 (anchor 없으면 원본 순서)
    const q = searchQuery.toLowerCase();
    const anchorCoords = anchor ? { lat: anchor.lat, lng: anchor.lng } : null;
    const filteredFoodList = sortByAnchorDistance(
        q
            ? foodList.filter((r) =>
                r.name.toLowerCase().includes(q) ||
                (r.specialty || "").toLowerCase().includes(q) ||
                (r.cuisine || "").toLowerCase().includes(q) ||
                (r.type || "").toLowerCase().includes(q)
            )
            : foodList,
        anchorCoords,
    );
    const filteredHotelList = sortByAnchorDistance(
        q
            ? hotelList.filter((h) =>
                h.name.toLowerCase().includes(q) ||
                (h.description || "").toLowerCase().includes(q) ||
                (h.tags || []).some((t) => t.toLowerCase().includes(q))
            )
            : hotelList,
        anchorCoords,
    );
    const filteredShoppingList = sortByAnchorDistance(
        q
            ? shoppingList.filter((s) =>
                s.name.toLowerCase().includes(q) ||
                (s.category || "").toLowerCase().includes(q) ||
                (s.specialItems || "").toLowerCase().includes(q)
            )
            : shoppingList,
        anchorCoords,
    );

    // 지도 마커 (현재 카테고리의 가시 카드 + anchor)
    const exploreMapMarkers = useMemo(() => {
        const arr: Array<{ id: string; title: string; coordinates: { lat: number; lng: number }; isAnchor?: boolean }> = [];
        if (anchor) arr.push({ id: 'anchor', title: anchor.title, coordinates: { lat: anchor.lat, lng: anchor.lng }, isAnchor: true });
        const visible: any[] = activeCategory === 'food' ? filteredFoodList
            : activeCategory === 'hotel' ? filteredHotelList
                : activeCategory === 'shopping' ? filteredShoppingList
                    : [];
        visible.forEach((c: any, i: number) => {
            if (c.coordinates) arr.push({ id: `${activeCategory}-${i}-${c.name}`, title: c.name, coordinates: c.coordinates });
        });
        return arr;
    }, [anchor, activeCategory, filteredFoodList, filteredHotelList, filteredShoppingList]);

    const selectedFood = selectedFoodIdx !== null ? filteredFoodList[selectedFoodIdx] : null;
    const selectedHotel = selectedHotelIdx !== null ? filteredHotelList[selectedHotelIdx] : null;
    const selectedShopping = selectedShoppingIdx !== null ? filteredShoppingList[selectedShoppingIdx] : null;

    // 플로팅 메뉴 외부 클릭 시 닫기
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowProjectMenu(false);
            }
        };
        if (showProjectMenu) document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [showProjectMenu]);


    // ── 카드 체크 핸들러 ─────────────────────────────
    const toggleCardCheck = (key: string, card: ExploreCardQueue, e: React.MouseEvent) => {
        e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
        setCheckedCards(prev => {
            const next = new Map(prev);
            if (next.has(key)) next.delete(key);
            else next.set(key, card);
            return next;
        });
    };

    // ── 프로젝트 목록 fetch & 메뉴 열기 ─────────────
    const handleOpenProjectMenu = async () => {
        if (!user) { router.push('/login'); return; }
        if (checkedCards.size === 0) return;
        // 모달 모드: 프로젝트 선택 메뉴 우회 → 현재 룸 보관함에 즉시 반영
        if (onAddCards) {
            // 도시 매칭 검증 (standalone handleAddToProject 정책과 동일)
            if (!destinationCity) {
                addToast('먼저 여행지를 선택하세요.', 'warning');
                return;
            }
            if (selectedCity) {
                const normalize = (s: string) => s.toLowerCase().replace(/\s/g, '');
                const dest = normalize(destinationCity);
                const sel = normalize(selectedCity.engName);
                const match = dest.includes(sel) || sel.includes(dest);
                if (!match) {
                    addToast('여행지와 다른 카드는 추가되지 않습니다.', 'warning');
                    return;
                }
            }
            const cards = Array.from(checkedCards.values());
            const result = onAddCards(cards);
            toastForApplyResult(result, addToast);
            setCheckedCards(new Map());
            return;
        }
        setShowProjectMenu(v => !v);
        if (activeProjects.length > 0) return; // 이미 로드됨
        setProjectsLoading(true);
        try {
            const [{ data: myProjects }, { data: sharedMembers }] = await Promise.all([
                supabase.from('projects').select('id, name').eq('user_id', user.id).order('created_at', { ascending: false }),
                supabase.from('project_members').select('project_id, role, projects(id, name)').eq('user_id', user.id).neq('role', 'owner'),
            ]);
            const myIds = new Set((myProjects || []).map((p: any) => p.id));
            const shared = (sharedMembers || []).map((m: any) => m.projects).filter((p: any) => p && !myIds.has(p.id));
            const all = [...(myProjects || []), ...shared] as { id: string; name: string }[];
            setActiveProjects(all);

            // 백그라운드: 각 프로젝트의 목적지 도시 조회
            if (all.length > 0 && selectedCity) {
                const { data: sessionData } = await supabase.auth.getSession();
                const token = sessionData?.session?.access_token;
                if (token) {
                    fetch('/api/projects/match-city', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                        body: JSON.stringify({ city: selectedCity.engName, projectIds: all.map(p => p.id) }),
                    })
                        .then(r => r.ok ? r.json() : null)
                        .then((data: { cityMap?: Record<string, string | null> } | null) => {
                            if (data?.cityMap) setProjectCityMap(data.cityMap);
                        })
                        .catch(() => { });
                }
            }
        } finally {
            setProjectsLoading(false);
        }
    };

    // ── 특정 프로젝트에 카드 추가 (도시 검증 포함) ──────
    const handleAddToProject = (project: { id: string; name: string }) => {
        // 도시 검증 (cityMap이 로드된 경우에만)
        if (project.id in projectCityMap) {
            const projectCity = projectCityMap[project.id];
            if (projectCity === null) {
                // 목적지 미설정
                addToast('먼저 여행지를 선택하세요.', 'warning');
                return;
            }
            if (selectedCity) {
                const normalize = (s: string) => s.toLowerCase().replace(/\s/g, '');
                const match = normalize(projectCity).includes(normalize(selectedCity.engName))
                    || normalize(selectedCity.engName).includes(normalize(projectCity));
                if (!match) {
                    addToast('여행지와 다른 카드는 추가되지 않습니다.', 'warning');
                    return;
                }
            }
        }

        const cards = Array.from(checkedCards.values());
        const existing = JSON.parse(localStorage.getItem(`explore_queue_${project.id}`) || '[]') as ExploreCardQueue[];
        localStorage.setItem(`explore_queue_${project.id}`, JSON.stringify([...existing, ...cards]));
        setShowProjectMenu(false);
        setCheckedCards(new Map());
        addToast(`${cards.length}개 카드를 「${project.name}」에 추가했어요! 보드를 열어보세요.`, 'info');
    };
    const handleCitySelect = (city: CityData) => {
        setSelectedCity(city);
        setActiveCategory("food");
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
        setSelectedShoppingIdx(null);
        setSearchQuery("");
        setCheckedCards(new Map());
        setActiveProjects([]);
        setProjectCityMap({});           // 도시 변경 시 cityMap 초기화
        setShowProjectMenu(false);
    };

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
        setSelectedShoppingIdx(null);
        setSearchQuery("");
    };

    const handleSearchChange = (val: string) => {
        setSearchQuery(val);
        setSelectedFoodIdx(null);
        setSelectedHotelIdx(null);
        setSelectedShoppingIdx(null);
    };

    // --- 여행쇼핑 메인 모의 데이터 (TODO: 향후 백엔드 API 연동) ---
    const topCities = [
        DESTINATION_DATA.japan?.cities.find(c => c.engName === "Osaka"),
        DESTINATION_DATA.japan?.cities.find(c => c.engName === "Tokyo"),
        DESTINATION_DATA.se_asia?.cities.find(c => c.engName === "Bangkok"),
        DESTINATION_DATA.se_asia?.cities.find(c => c.engName === "Da Nang"),
        DESTINATION_DATA.long_haul?.cities.find(c => c.engName === "Paris"),
        DESTINATION_DATA.china_taiwan?.cities.find(c => c.engName === "Taipei"),
    ].filter(Boolean) as CityData[];

    const newCards = [
        { type: "food", item: CITY_DATA["Osaka"]?.restaurants?.[0] },
        { type: "hotel", item: CITY_DATA["Tokyo"]?.accommodations?.[0] },
        { type: "food", item: CITY_DATA["Bangkok"]?.restaurants?.[1] },
        { type: "hotel", item: CITY_DATA["Da Nang"]?.accommodations?.[0] },
    ].filter(c => c.item) as { type: "food" | "hotel", item: any }[];

    const sharedPlans = [
        { id: 1, title: "오사카 3박4일 완벽 가이드", desc: "도톤보리, 유니버셜 스튜디오", tag: "일본" },
        { id: 2, title: "방콕 4박5일 호캉스", desc: "고급 수영장, 타이 마사지", tag: "태국" },
        { id: 3, title: "타이베이 먹부림 코스", desc: "풍부한 야시장 투어", tag: "대만" },
        { id: 4, title: "파리 낭만 신혼여행", desc: "에펠탑과 매운 닭발의 조화", tag: "프랑스" },
    ];

    return (
        <AnchorContext.Provider value={anchorContextValue}>
        <div className="flex flex-col h-full overflow-hidden">

            {/* ── 토스트 (공용 컴포넌트) ── */}
            <ToastContainer toasts={toasts} onClose={removeToast} />

            {/* ── 상단 헤더 (2단 구조) ── */}
            <div className="shrink-0 bg-white border-b border-slate-100 z-20">
                <div className="max-w-6xl mx-auto">
                    {/* 1단: 제목 & 장바구니 */}
                    <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">여행 쇼핑</h1>
                        <button 
                            onClick={handleOpenProjectMenu}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm shrink-0 group"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span className="hidden sm:inline">장바구니</span>
                            {checkedCards.size > 0 ? (
                                <span className="bg-orange-500 text-white min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center text-[9px] font-black ml-0.5">
                                    {checkedCards.size}
                                </span>
                            ) : (
                                <span className="bg-slate-700 text-slate-300 min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center text-[9px] font-black ml-0.5 transition-colors group-hover:bg-slate-600">
                                    0
                                </span>
                            )}
                        </button>
                    </div>

                    {/* 2단: 지역 칩 필터 (인박스 스타일) — 모달 모드에선 숨김 (룸 destination 고정) */}
                    {!onAddCards && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 sm:px-6 pb-3 pt-1">
                        {REGION_TABS.map((tab) => {
                            const isActive = activeRegion === tab.key && !selectedCity;
                            // 모바일에서는 '여행쇼핑메인' 대신 '홈' 또는 '전체'로 표시 제안
                            const displayLabel = tab.key === 'main' ? '홈' : tab.label;
                            
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => { 
                                        setActiveRegion(tab.key); 
                                        setSelectedCity(null); 
                                        setSelectedFoodIdx(null); 
                                        setSelectedHotelIdx(null); 
                                        setSearchQuery(""); 
                                    }}
                                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-200 shadow-sm border ${
                                        isActive 
                                        ? "bg-orange-500 text-white border-orange-500 shadow-orange-100" 
                                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                                >
                                    <span>{tab.icon}</span>
                                    {displayLabel}
                                </button>
                            );
                        })}
                    </div>
                    )}
                </div>
            </div>

            {/* ── 여행쇼핑 메인 탭 (기본화면) ── */}
            {!selectedCity && activeRegion === "main" && (
                <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar bg-slate-50 relative pb-10">
                    <div className="max-w-6xl mx-auto flex flex-col gap-10 pt-6 animate-in fade-in duration-500">
                        


                        {/* 1. 상단 광고 영역 (당분간 주석 처리)
                        <div className="px-4 sm:px-6">
                            <div className="w-full bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:scale-[1.01] transition-transform cursor-pointer">
                                <div>
                                    <span className="inline-block px-2.5 py-1 mb-2 bg-white/20 rounded-full text-[11px] font-bold backdrop-blur-sm tracking-wide">
                                        💰 스페셜 프로모션
                                    </span>
                                    <h2 className="text-xl sm:text-2xl font-black mb-1">지금 예약하면 숙소 최대 30% 할인!</h2>
                                    <p className="text-white/80 text-sm">트래블라인 전용 쿠폰팩을 받아가세요.</p>
                                </div>
                                <button className="shrink-0 px-5 py-2.5 bg-white text-rose-500 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                    쿠폰 받기
                                </button>
                            </div>
                        </div>
                        */}

                        {/* 2. 최근 6개월 여행지 TOP 6 */}
                        <div>
                            <div className="px-4 sm:px-6 mb-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold text-slate-800">최근 6개월 인기 여행지 TOP 6</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">트래블라인 유저들이 가장 많이 담은 도시들</p>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 scroll-px-4 sm:scroll-px-6 flex gap-3 overflow-x-auto no-scrollbar pb-3 snap-x snap-mandatory">
                                {topCities.map((city) => (
                                    <button
                                        key={city.engName}
                                        onClick={() => handleCitySelect(city)}
                                        className="shrink-0 w-36 sm:w-44 snap-start group relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <img src={FALLBACK_IMAGES[city.engName]} alt={city.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3 text-left">
                                            <p className="text-white font-black text-lg drop-shadow">{city.name}</p>
                                            <p className="text-white/80 text-[10px] mt-0.5 font-medium">{city.country}</p>
                                        </div>
                                    </button>
                                ))}
                                {/* 모바일 우측 여백 확보용 더미 */}
                                <div className="shrink-0 w-1 sm:w-2" aria-hidden="true" />
                            </div>
                        </div>

                        {/* 3. 카테고리별 신규 등록 카드 */}
                        <div className="px-4 sm:px-6">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold text-slate-800">새롭게 떠오르는 맛집 & 숙소</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">가장 최근에 추가(등록)된 검증된 카드들이에요</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {newCards.map((card, idx) => (
                                    <div key={idx} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-3 hover:shadow-md transition-shadow cursor-default list-none select-none">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">{card.type === 'food' ? (card.item.icon || '🍽️') : (card.item.type === 'resort' ? '🏖️' : '🏨')}</span>
                                                <div className="min-w-0 pr-2">
                                                    <p className="font-bold text-slate-800 text-sm line-clamp-1">{card.item.name}</p>
                                                    <p className="text-[10px] text-slate-400">{card.item.city}</p>
                                                </div>
                                            </div>
                                            <span className="shrink-0 px-2 py-0.5 bg-orange-50 text-orange-500 text-[10px] font-bold rounded-full">New</span>
                                        </div>
                                        <div className="mt-2 text-xs text-slate-500 line-clamp-1">
                                            {card.type === 'food' ? card.item.specialty || card.item.cuisine : card.item.description || "이색 숙소를 확인해보세요"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. 최근 공유 여행계획 */}
                        <div>
                            <div className="px-4 sm:px-6 mb-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold text-slate-800">여행자들의 핫한 일정 엿보기</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">다른 사람들의 잘 짜여진 계흭을 참고하여 빠르게 쇼핑을 시작하세요</p>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 scroll-px-4 sm:scroll-px-6 flex gap-4 overflow-x-auto no-scrollbar pb-3 snap-x snap-mandatory">
                                {sharedPlans.map((plan, i) => {
                                    const gradients = ["from-teal-400 to-emerald-400", "from-blue-400 to-indigo-400", "from-purple-400 to-fuchsia-400", "from-amber-400 to-orange-400"];
                                    return (
                                        <div key={plan.id} className={`shrink-0 w-64 snap-start relative bg-gradient-to-br ${gradients[i % gradients.length]} rounded-2xl p-5 text-white hover:-translate-y-1 transition-transform shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between h-[130px]`}>
                                            <div className="flex items-start justify-between mb-3">
                                                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold">{plan.tag}</span>
                                                <Users className="w-4 h-4 text-white/70" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-sm mb-1 line-clamp-1">{plan.title}</h4>
                                                <p className="text-[11px] text-white/80 line-clamp-1">{plan.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* 모바일 우측 여백 확보용 더미 */}
                                <div className="shrink-0 w-1 sm:w-2" aria-hidden="true" />
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* ── 도시 미선택: 일반 지역 그리드 (스크롤 가능) ── */}
            {!selectedCity && activeRegion !== "main" && regionData && (
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

                            {/* 검색바 + 여행계획 추가 버튼 */}
                            <div className="shrink-0 pb-2.5">
                                <div className="flex gap-2 items-center">
                                    {/* 검색바 — 모바일에서는 버튼 업쓰로 줄어들 */}
                                    <div className="relative flex-1 min-w-0">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => handleSearchChange(e.target.value)}
                                            placeholder={activeCategory === "food" ? "맛집 검색..." : activeCategory === "hotel" ? "숙소 검색..." : activeCategory === "shopping" ? "쇼핑 검색..." : "검색..."}
                                            className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-300 focus:bg-white transition-colors"
                                        />
                                        {searchQuery && (
                                            <button onClick={() => handleSearchChange("")}
                                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* + 내 여행계획 추가 버튼 + 플로팅 메뉴 */}
                                    {(activeCategory === "food" || activeCategory === "hotel" || activeCategory === "shopping") && (
                                        <div className="relative shrink-0" ref={menuRef}>
                                            <button
                                                onClick={handleOpenProjectMenu}
                                                disabled={checkedCards.size === 0}
                                                className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all duration-150 ${checkedCards.size > 0
                                                    ? "bg-orange-500 border-orange-500 text-white shadow-sm hover:bg-orange-600"
                                                    : "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed"
                                                    }`}
                                            >
                                                <Plus className="w-3.5 h-3.5 shrink-0" />
                                                <span>내 여행계획</span>
                                                {checkedCards.size > 0 && (
                                                    <span className="bg-white text-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black shrink-0">
                                                        {checkedCards.size}
                                                    </span>
                                                )}
                                            </button>

                                            {/* 플로팅 메뉴 */}
                                            {showProjectMenu && (
                                                <div className="absolute right-0 top-full mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    <div className="px-3 py-2.5 border-b border-slate-50">
                                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">여행계획 선택</p>
                                                    </div>
                                                    {projectsLoading ? (
                                                        <div className="flex items-center justify-center py-6">
                                                            <Loader2 className="w-4 h-4 text-orange-400 animate-spin" />
                                                        </div>
                                                    ) : activeProjects.length === 0 ? (
                                                        <div className="px-4 py-5 text-center">
                                                            <p className="text-xs text-slate-400">여행 계획이 없어요</p>
                                                            <p className="text-[10px] text-slate-300 mt-0.5">홈에서 새로 만들어보세요!</p>
                                                        </div>
                                                    ) : (
                                                        <div className="max-h-56 overflow-y-auto always-scrollbar">
                                                            {activeProjects.map((project) => (
                                                                <button
                                                                    key={project.id}
                                                                    onClick={() => handleAddToProject(project)}
                                                                    className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5"
                                                                >
                                                                    <span className="text-base">✈️</span>
                                                                    <span className="truncate">{project.name}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 뒤로가기 / 지도 / anchor 정보 (인박스에서 컨텍스트 가지고 진입한 경우) */}
                            <div className="flex items-center gap-2 pb-2.5 shrink-0 flex-wrap">
                                {(onBack || fromRoomId) && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (onBack) onBack(activeCategory);
                                            else if (fromRoomId) router.push(`/room/${fromRoomId}?inbox=${activeCategory}`);
                                        }}
                                        title="원래 여행보드로"
                                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                                    >
                                        <ArrowLeft className="w-3.5 h-3.5" /> 여행보드로
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setIsExploreMapOpen(true)}
                                    disabled={exploreMapMarkers.length === 0}
                                    title={exploreMapMarkers.length > 0 ? '지도에서 보기' : '표시할 위치 없음'}
                                    className={`p-1.5 rounded-md transition-colors ${exploreMapMarkers.length > 0
                                        ? 'text-orange-500 hover:bg-orange-50'
                                        : 'text-slate-300 cursor-not-allowed'}`}
                                >
                                    <MapIcon className="w-4 h-4" />
                                </button>
                                {anchor && (
                                    <span className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-100 max-w-[220px]">
                                        <span className="shrink-0">📍</span>
                                        <span className="truncate min-w-0">{anchor.title}</span>
                                        <span className="shrink-0">기준 거리순</span>
                                    </span>
                                )}
                            </div>

                            {/* 카드 리스트 (독립 스크롤) */}
                            <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar flex flex-col gap-2 pr-3">
                                {activeCategory === "food" && (
                                    filteredFoodList.length > 0
                                        ? filteredFoodList.map((item, idx) => {
                                            const cardKey = `food-${item.name}-${item.city}`;
                                            const isExisting = existingCardKeys?.has(`${item.name}__${item.city}`) ?? false;
                                            const isChecked = isExisting || checkedCards.has(cardKey);
                                            // 음식 카드용 card 객체 생성
                                            const foodCardData = {
                                                id: cardKey,
                                                category: 'food',
                                                text: item.name,
                                                icon: item.icon || FOOD_ICON_MAP[item.type] || '🍴',
                                                restaurantType: item.type,
                                                specialty: item.specialty,
                                                priceRange: item.priceRange,
                                                michelin: item.michelin,
                                                coordinates: item.coordinates,
                                            };
                                            return (
                                                <div key={idx} className="relative">
                                                    <FoodCard
                                                        card={foodCardData}
                                                        variant="explore"
                                                        isSelected={selectedFoodIdx === idx}
                                                        isChecked={isChecked}
                                                        onClick={() => setSelectedFoodIdx(idx === selectedFoodIdx ? null : idx)}
                                                        onToggleCheck={isExisting
                                                            ? (e) => e.stopPropagation()
                                                            : (e) => toggleCardCheck(cardKey, {
                                                                category: 'food',
                                                                name: item.name,
                                                                city: item.city,
                                                                icon: item.icon,
                                                                coordinates: item.coordinates,
                                                                priceRange: item.priceRange,
                                                                openingHours: item.openingHours,
                                                                michelin: item.michelin,
                                                                specialty: item.specialty,
                                                                features: item.features,
                                                                reservation: item.reservation,
                                                                restaurantType: item.type,
                                                                cuisine: item.cuisine,
                                                            }, e)}
                                                    />
                                                    {selectedFoodIdx === idx && <FoodAccordion item={item} />}
                                                </div>
                                            );
                                        })
                                        : <EmptyState category="food" />
                                )}
                                {activeCategory === "hotel" && (
                                    filteredHotelList.length > 0
                                        ? filteredHotelList.map((item, idx) => {
                                            const cardKey = `hotel-${item.name}-${item.city}`;
                                            const isExisting = existingCardKeys?.has(`${item.name}__${item.city}`) ?? false;
                                            const isChecked = isExisting || checkedCards.has(cardKey);
                                            // 숙소 카드용 card 객체 생성
                                            const hotelCardData = {
                                                id: cardKey,
                                                category: 'hotel',
                                                text: item.name,
                                                accommodationType: item.type,
                                                checkInTime: item.checkInTime,
                                                checkOutTime: item.checkOutTime,
                                                tags: item.tags,
                                                coordinates: item.coordinates,
                                            };
                                            return (
                                                <div key={idx} className="relative">
                                                    <HotelCard
                                                        card={hotelCardData}
                                                        variant="explore"
                                                        isSelected={selectedHotelIdx === idx}
                                                        isChecked={isChecked}
                                                        onClick={() => setSelectedHotelIdx(idx === selectedHotelIdx ? null : idx)}
                                                        onToggleCheck={isExisting
                                                            ? (e) => e.stopPropagation()
                                                            : (e) => toggleCardCheck(cardKey, {
                                                                category: 'accommodation',
                                                                name: item.name,
                                                                city: item.city,
                                                                coordinates: item.coordinates,
                                                                description: item.description,
                                                                accommodationType: item.type,
                                                                checkInTime: item.checkInTime,
                                                                checkOutTime: item.checkOutTime,
                                                                tags: item.tags,
                                                            }, e)}
                                                    />
                                                    {selectedHotelIdx === idx && <HotelAccordion item={item} />}
                                                </div>
                                            );
                                        })
                                        : <EmptyState category="hotel" />
                                )}
                                {activeCategory === "shopping" && (
                                    filteredShoppingList.length > 0
                                        ? filteredShoppingList.map((item, idx) => {
                                            const cardKey = `shopping-${item.name}-${item.city}`;
                                            const isExisting = existingCardKeys?.has(`${item.name}__${item.city}`) ?? false;
                                            const isChecked = isExisting || checkedCards.has(cardKey);
                                            const shoppingCardData = {
                                                id: cardKey,
                                                category: 'shopping',
                                                text: item.name,
                                                icon: item.icon,
                                                shoppingType: item.type,
                                                shoppingCategory: item.category,
                                                specialItems: item.specialItems,
                                                priceRange: item.priceRange,
                                                taxRefund: item.taxRefund,
                                                coordinates: item.coordinates,
                                            };
                                            return (
                                                <div key={idx} className="relative">
                                                    <ShoppingCard
                                                        card={shoppingCardData}
                                                        variant="explore"
                                                        isSelected={selectedShoppingIdx === idx}
                                                        isChecked={isChecked}
                                                        onClick={() => setSelectedShoppingIdx(idx === selectedShoppingIdx ? null : idx)}
                                                        onToggleCheck={isExisting
                                                            ? (e) => e.stopPropagation()
                                                            : (e) => toggleCardCheck(cardKey, {
                                                                category: 'shopping',
                                                                name: item.name,
                                                                city: item.city,
                                                                icon: item.icon,
                                                                coordinates: item.coordinates,
                                                                priceRange: item.priceRange,
                                                                openingHours: item.openingHours,
                                                                features: item.features,
                                                                shoppingType: item.type,
                                                                shoppingCategory: item.category,
                                                                specialItems: item.specialItems,
                                                                taxRefund: item.taxRefund,
                                                            }, e)}
                                                    />
                                                </div>
                                            );
                                        })
                                        : <EmptyState category="shopping" />
                                )}
                                {!["food", "hotel", "shopping"].includes(activeCategory) && <EmptyState category={activeCategory} />}
                            </div>
                        </div>{/* 좌측 패널 끝 */}

                        {/* 우: 지도 + 설명 (데스크탑만, 단일 스크롤) */}
                        <div className="hidden md:flex w-1/2 flex-col min-h-0 rounded-2xl border border-slate-100 shadow-sm bg-white overflow-hidden">
                            <div className="flex-1 min-h-0 overflow-y-auto always-scrollbar">

                                {/* 지도 (여백 및 라운딩 포함) */}
                                <div className="h-64 mx-3 mt-3 rounded-xl overflow-hidden">
                                    {(activeCategory === "food" && selectedFood) ? (
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedFood.name + ' ' + selectedFood.city)}&z=16&output=embed&hl=ko`}
                                            className="w-full h-full border-0" loading="lazy" allowFullScreen title={selectedFood.name}
                                        />
                                    ) : (activeCategory === "hotel" && selectedHotel) ? (
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedHotel.name + ' ' + selectedHotel.city)}&z=16&output=embed&hl=ko`}
                                            className="w-full h-full border-0" loading="lazy" allowFullScreen title={selectedHotel.name}
                                        />
                                    ) : (activeCategory === "shopping" && selectedShopping) ? (
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedShopping.name + ' ' + selectedShopping.city)}&z=16&output=embed&hl=ko`}
                                            className="w-full h-full border-0" loading="lazy" allowFullScreen title={selectedShopping.name}
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
                                            <div className="flex items-start gap-2">
                                                <span className="text-xl mt-0.5">{selectedFood.icon || "🍴"}</span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-black text-slate-800 text-sm">{selectedFood.name}</p>
                                                    <p className="text-[11px] text-slate-400">{selectedFood.city}</p>
                                                </div>
                                                <button
                                                    onClick={() => setShowInfoModal(true)}
                                                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-100 hover:text-orange-500 text-slate-400 transition-colors"
                                                    title="정보 더보기"
                                                >
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                </button>
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
                                            <div className="flex items-start gap-2">
                                                <span className="text-xl mt-0.5">{selectedHotel.type === "resort" ? "🏖️" : "🏨"}</span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-black text-slate-800 text-sm">{selectedHotel.name}</p>
                                                    <p className="text-[11px] text-slate-400">{selectedHotel.city}</p>
                                                </div>
                                                <button
                                                    onClick={() => setShowInfoModal(true)}
                                                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-orange-100 hover:text-orange-500 text-slate-400 transition-colors"
                                                    title="정보 더보기"
                                                >
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                </button>
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
                                    ) : activeCategory === "shopping" && selectedShopping ? (
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-2">
                                                <span className="text-xl mt-0.5">{selectedShopping.icon || "🛍️"}</span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-black text-slate-800 text-sm">{selectedShopping.name}</p>
                                                    <p className="text-[11px] text-slate-400">{selectedShopping.city}</p>
                                                </div>
                                            </div>
                                            {selectedShopping.category && (
                                                <div className="p-2.5 bg-purple-50 rounded-lg">
                                                    <p className="text-[10px] font-bold text-purple-700 mb-1">카테고리</p>
                                                    <p className="text-xs text-slate-700">{selectedShopping.category}</p>
                                                </div>
                                            )}
                                            {selectedShopping.specialItems && <div className="flex items-center gap-1.5 text-xs text-slate-600"><ShoppingBag className="w-3.5 h-3.5 text-purple-500" /> {selectedShopping.specialItems}</div>}
                                            {selectedShopping.priceRange && <div className="flex items-center gap-1.5 text-xs text-slate-600"><DollarSign className="w-3.5 h-3.5 text-green-500" /> {selectedShopping.priceRange}</div>}
                                            {selectedShopping.openingHours && <div className="flex items-center gap-1.5 text-xs text-slate-600"><Clock className="w-3.5 h-3.5 text-blue-500" /> {selectedShopping.openingHours}</div>}
                                            {selectedShopping.taxRefund && <p className="text-[11px] text-purple-600 font-semibold">✅ 세금 환급 가능</p>}
                                            {selectedShopping.features && (
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedShopping.features.map((f) => <span key={f} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{f}</span>)}
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

            {/* ── 정보 더보기 모달 (메모장 스타일) ── */}
            {showInfoModal && (activeCategory === 'food' ? selectedFood : selectedHotel) && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={() => setShowInfoModal(false)}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300" onClick={(e) => e.stopPropagation()}>
                        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-amber-400" />
                        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2.5">
                                <span className="text-2xl">{activeCategory === 'food' ? (selectedFood?.icon || '🍴') : (selectedHotel?.type === 'resort' ? '🏖️' : '🏨')}</span>
                                <div>
                                    <p className="font-black text-slate-800 text-base leading-tight">{activeCategory === 'food' ? selectedFood?.name : selectedHotel?.name}</p>
                                    <p className="text-xs text-slate-400">{activeCategory === 'food' ? selectedFood?.city : selectedHotel?.city}</p>
                                </div>
                            </div>
                            <button onClick={() => setShowInfoModal(false)} className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"><X className="w-4 h-4" /></button>
                        </div>
                        <div className="px-5 py-4 space-y-3 max-h-[55vh] overflow-y-auto">
                            {activeCategory === 'food' && selectedFood ? (<>
                                {selectedFood.priceRange && <div className="flex items-center gap-2 text-sm text-slate-700"><DollarSign className="w-4 h-4 text-green-500 shrink-0" /><span>{selectedFood.priceRange}</span></div>}
                                {selectedFood.openingHours && <div className="flex items-center gap-2 text-sm text-slate-700"><Clock className="w-4 h-4 text-blue-500 shrink-0" /><span>{selectedFood.openingHours}</span></div>}
                                {selectedFood.michelin && <div className="flex items-center gap-2 text-sm text-amber-600 font-semibold"><Star className="w-4 h-4 shrink-0" /><span>미슐랭 {selectedFood.michelin}</span></div>}
                                {selectedFood.cuisine && <div className="flex items-center gap-2 text-sm text-slate-700"><Utensils className="w-4 h-4 text-orange-400 shrink-0" /><span>{selectedFood.cuisine}</span></div>}
                                {selectedFood.specialty && <div className="p-3 bg-orange-50 rounded-xl"><p className="text-[11px] font-bold text-orange-600 mb-1">대표 메뉴</p><p className="text-sm text-slate-700">{selectedFood.specialty}</p></div>}
                                {selectedFood.features && selectedFood.features.length > 0 && <div className="flex flex-wrap gap-1.5">{selectedFood.features.map((f) => <span key={f} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{f}</span>)}</div>}
                                {selectedFood.reservation && <p className="text-sm text-rose-500 font-semibold">📅 예약 필수</p>}
                            </>) : activeCategory === 'hotel' && selectedHotel ? (<>
                                {selectedHotel.description && <div className="p-3 bg-blue-50 rounded-xl"><p className="text-sm text-slate-700">{selectedHotel.description}</p></div>}
                                <div className="flex gap-4 text-sm text-slate-700">
                                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500 shrink-0" /><span>체크인 {selectedHotel.checkInTime}</span></div>
                                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400 shrink-0" /><span>체크아웃 {selectedHotel.checkOutTime}</span></div>
                                </div>
                                {selectedHotel.tags && selectedHotel.tags.length > 0 && <div className="flex flex-wrap gap-1.5">{selectedHotel.tags.map((t) => <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{t}</span>)}</div>}
                            </>) : null}
                        </div>
                        <div className="px-5 pb-5 pt-2">
                            <a href={`https://www.google.com/search?q=${encodeURIComponent((activeCategory === 'food' ? selectedFood?.name : selectedHotel?.name) + ' ' + (activeCategory === 'food' ? selectedFood?.city : selectedHotel?.city))}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors">
                                <BookOpen className="w-4 h-4" />
                                구글에서 자세히 보기
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast 메시지 */}
            <ToastContainer toasts={toasts} onClose={removeToast} />

            {/* 지도 모달 (현재 카테고리 가시 카드 + anchor) */}
            <InboxMapModal
                title={`${selectedCity?.name ?? ''} ${activeCategory === 'food' ? '맛집' : activeCategory === 'hotel' ? '숙소' : activeCategory === 'shopping' ? '쇼핑' : activeCategory === 'tourspa' ? '투어&스파' : ''} 지도`}
                markers={exploreMapMarkers}
                isOpen={isExploreMapOpen}
                onClose={() => setIsExploreMapOpen(false)}
            />
        </div>
        </AnchorContext.Provider>
    );
}
