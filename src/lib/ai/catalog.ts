// AI 플래너 카탈로그 유틸 — 등록 도시(CITY_DATA)의 실제 장소를 AI가 고르게 하고,
// 고른 장소명을 카드 생성 payload 로 변환한다. (좌표·정보팝업 필드는 카탈로그 원본에서 채움 → 환각 방지)

import { CITY_DATA } from '@/data/cities';
import { findCityByName } from '@/data/destinations';

// CITY_DATA 버킷 ↔ 카드 카테고리 매핑
const BUCKETS = [
    { bucket: 'restaurants', category: 'food' },
    { bucket: 'accommodations', category: 'hotel' },
    { bucket: 'shopping', category: 'shopping' },
    { bucket: 'tourSpa', category: 'tourspa' },
    { bucket: 'transport', category: 'transport' },
] as const;

export type CardCategory = 'food' | 'hotel' | 'shopping' | 'tourspa' | 'transport';

/**
 * destination 카드의 city 로 CITY_DATA 키를 찾는다.
 * city 는 경로에 따라 영문("Nha Trang"/"nha trang") 또는 한글("나트랑") 둘 다 가능하므로 모두 처리.
 */
export function resolveCityKey(name?: string): string | null {
    if (!name) return null;
    const target = name.trim().toLowerCase();
    for (const key of Object.keys(CITY_DATA)) {
        if (key.toLowerCase() === target) return key;
    }
    // 공백 제거 후 재시도 (예: "nhatrang" ↔ "Nha Trang")
    const collapsed = target.replace(/\s+/g, '');
    for (const key of Object.keys(CITY_DATA)) {
        if (key.toLowerCase().replace(/\s+/g, '') === collapsed) return key;
    }
    // 한글명("나트랑") → DESTINATION_DATA 에서 engName 찾아 재매칭
    const byKo = findCityByName(name.trim());
    if (byKo && CITY_DATA[byKo.city.engName]) return byKo.city.engName;
    return null;
}

export function hasCatalog(name?: string): boolean {
    return resolveCityKey(name) !== null;
}

/** 프롬프트에 넣을 카탈로그 목록(카테고리별 트림). 좌표는 넣지 않음(클라 재부착). */
export function buildCatalogListing(cityKey: string, dayCount: number): string {
    const maxPerCat = Math.min(16, Math.max(8, dayCount * 3));
    const bundle: any = CITY_DATA[cityKey] || {};
    const lines: string[] = [];

    for (const { bucket, category } of BUCKETS) {
        const items: any[] = Array.isArray(bundle[bucket]) ? bundle[bucket] : [];
        if (items.length === 0) continue;
        // hasInfo(정보팝업 있는) 항목 우선
        const sorted = [...items].sort((a, b) => (b?.hasInfo ? 1 : 0) - (a?.hasInfo ? 1 : 0));
        const picked = sorted.slice(0, maxPerCat);
        lines.push(`# ${category}`);
        for (const it of picked) {
            const desc = (it?.description || it?.specialItems || '').toString().slice(0, 40);
            const tier = it?.priceTier ? ` | tier:${it.priceTier}` : ''; // 숙소 등급(예산 매칭용)
            lines.push(`- ${it.name} | ${it.type ?? ''}${tier} | ${desc}`);
        }
    }
    return lines.join('\n');
}

// 외래어 표기 흔들림 보정: 모델이 같은 장소를 한글/영문/일본어로 섞어 쓰는 경우
// (예: "레스토랑"↔"レストラン"↔"restaurant", "클럽"↔"club")를 같은 이름으로 매칭.
// 각 그룹의 변형을 대표 토큰으로 치환 + 공백 제거 후 비교.
const LOANWORD_GROUPS: string[][] = [
    ['레스토랑', 'restaurant', 'レストラン', '레스또랑'],
    ['클럽', 'club', 'クラブ'],
    ['카페', 'cafe', 'café', 'カフェ'],
    ['스파', 'spa', 'スパ'],
    ['호텔', 'hotel', 'ホテル'],
    ['리조트', 'resort', 'リゾート'],
    ['비치', 'beach', 'ビーチ'],
    ['마켓', 'market', 'マーケット'],
    ['마트', 'mart'],
    ['센터', 'center', 'centre', 'センター'],
    ['몰', 'mall', 'モール'],
    ['하우스', 'house', 'ハウス'],
    ['가든', 'garden'],
    ['브루하우스', 'brewhouse'],
];
function canon(s: string): string {
    let t = (s || '').trim().toLowerCase();
    for (const grp of LOANWORD_GROUPS) {
        const canonical = grp[0];
        for (let i = 1; i < grp.length; i++) {
            t = t.split(grp[i].toLowerCase()).join(canonical);
        }
    }
    return t.replace(/\s+/g, '');
}

/** 카탈로그에서 name 으로 장소 찾기 (카테고리 우선, 없으면 전체 탐색). 대소문자·외래어 표기 흔들림 무시. */
export function findCatalogPlace(
    cityKey: string,
    name: string,
    category?: string
): { place: any; category: CardCategory } | null {
    const bundle: any = CITY_DATA[cityKey] || {};
    const norm = (s: string) => (s || '').trim().toLowerCase();
    const target = norm(name);
    const ctarget = canon(name);

    const order = category
        ? [BUCKETS.find((b) => b.category === category), ...BUCKETS].filter(Boolean)
        : BUCKETS;

    // 1차: 정확 일치(소문자·트림)
    for (const b of order as typeof BUCKETS) {
        const items: any[] = Array.isArray(bundle[b.bucket]) ? bundle[b.bucket] : [];
        const found = items.find((it) => norm(it?.name) === target);
        if (found) return { place: found, category: b.category };
    }
    // 2차: 표기 흔들림 보정(외래어 변형 + 공백 무시) — 1차 실패 시에만
    for (const b of order as typeof BUCKETS) {
        const items: any[] = Array.isArray(bundle[b.bucket]) ? bundle[b.bucket] : [];
        const found = items.find((it) => canon(it?.name) === ctarget);
        if (found) return { place: found, category: b.category };
    }
    // 3차(최후): 한 글자 깨짐(예: "레"→"レ") 같은 미세 오타 → 유사도 매칭.
    // 오검출 방지: 카테고리가 명시된 경우에만, 충분히 긴 이름에, 높은 유사도(≥0.8)일 때만.
    if (category && ctarget.length >= 5) {
        const bucket = BUCKETS.find((b) => b.category === category);
        if (bucket) {
            const items: any[] = Array.isArray(bundle[bucket.bucket]) ? bundle[bucket.bucket] : [];
            let best: { place: any; ratio: number } | null = null;
            for (const it of items) {
                const c = canon(it?.name);
                if (!c) continue;
                const dist = levenshtein(ctarget, c);
                const ratio = 1 - dist / Math.max(ctarget.length, c.length);
                if (ratio > (best?.ratio ?? 0)) best = { place: it, ratio };
            }
            if (best && best.ratio >= 0.8) return { place: best.place, category: bucket.category };
        }
    }
    return null;
}

// 소형 Levenshtein 편집거리 (유사도 폴백용)
function levenshtein(a: string, b: string): number {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    let cur = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        cur[0] = i;
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        }
        [prev, cur] = [cur, prev];
    }
    return prev[n];
}

/** 카탈로그 장소 → createCardToColumn payload (카테고리별 필드 매핑). picker 매핑과 동일 규칙. */
export function placeToCardPayload(place: any, category: CardCategory): any {
    const common = {
        category,
        title: place.name,
        text: place.name,
        city: place.city,
        coordinates: place.coordinates ?? undefined,
        icon: place.icon,
        hasInfo: place.hasInfo === true,
        description: place.description,
        priceRange: place.priceRange,
        openingHours: place.openingHours,
        features: place.features,
    };
    switch (category) {
        case 'food':
            return { ...common, restaurantType: place.type, cuisine: place.cuisine, specialty: place.specialty, michelin: place.michelin, reservation: place.reservation };
        case 'hotel':
            return { ...common, accommodationType: place.type, priceTier: place.priceTier, checkInTime: place.checkInTime, checkOutTime: place.checkOutTime, tags: place.tags };
        case 'shopping':
            return { ...common, shoppingType: place.type, shoppingCategory: place.category, specialItems: place.specialItems, taxRefund: place.taxRefund };
        case 'tourspa':
            return { ...common, tourSpaType: place.type, duration: place.duration, pickupAvailable: place.pickupAvailable, reservationRequired: place.reservationRequired, rating: place.rating };
        case 'transport':
            return { ...common, transportationType: place.type, availability: place.availability, appRequired: place.appRequired, appName: place.appName };
        default:
            return common;
    }
}
