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

/** 카탈로그에서 name 으로 장소 찾기 (카테고리 우선, 없으면 전체 탐색). 대소문자 무시. */
export function findCatalogPlace(
    cityKey: string,
    name: string,
    category?: string
): { place: any; category: CardCategory } | null {
    const bundle: any = CITY_DATA[cityKey] || {};
    const norm = (s: string) => (s || '').trim().toLowerCase();
    const target = norm(name);

    const order = category
        ? [BUCKETS.find((b) => b.category === category), ...BUCKETS].filter(Boolean)
        : BUCKETS;

    for (const b of order as typeof BUCKETS) {
        const items: any[] = Array.isArray(bundle[b.bucket]) ? bundle[b.bucket] : [];
        const found = items.find((it) => norm(it?.name) === target);
        if (found) return { place: found, category: b.category };
    }
    return null;
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
