// 다중 도시 여행에서 picker 서브 도시 chips 의 데이터 소스 통합.
//  1) destinations.ts CityData.subCities (기본 정의)
//  2) 사용자가 등록한 도시간 항공편 카드 (isIntercityFlight 마커) 의 city 필드
//
// 두 소스를 합집합 (engName lowercase 기준 중복 제거) 으로 반환.
// 결과가 비어 있으면 picker chips 자체가 미렌더 (단일 도시 회귀 없음).

import { DESTINATION_DATA } from '@/data/destinations';
import type { SubCityData } from '@/data/destinations';

export interface SubCityOption {
    name: string;
    engName: string;
}

function findCityDataByDestinationCard(destinationCard: any) {
    if (!destinationCard) return null;
    const cityKey: string | null = (destinationCard.city as string) || (destinationCard.text as string) || null;
    if (!cityKey) return null;
    const normalized = cityKey.toLowerCase();
    for (const region of Object.values(DESTINATION_DATA)) {
        const found = region.cities.find(
            c => c.engName.toLowerCase() === normalized || c.name === cityKey
        );
        if (found) return found;
    }
    return null;
}

// 도시명 한글 매핑 — destinations.ts 의 도시 (서브 포함) 에서 engName lowercase → 한글명 검색.
function lookupKoreanName(engNameLower: string): string | null {
    for (const region of Object.values(DESTINATION_DATA)) {
        for (const city of region.cities) {
            if (city.engName.toLowerCase() === engNameLower) return city.name;
            if (city.subCities) {
                const sub = city.subCities.find((s: SubCityData) => s.engName.toLowerCase() === engNameLower);
                if (sub) return sub.name;
            }
        }
    }
    return null;
}

// 카드 LiveMap (또는 Map) 에서 intercityFlight 카드의 dep/arrCity 를 추출해 chip 옵션으로 변환.
export function getEffectiveSubCities(destinationCard: any, cards: any): SubCityOption[] {
    const out: SubCityOption[] = [];
    const seen = new Set<string>();

    // 1) destinations.ts 기본 subCities
    const cityData = findCityDataByDestinationCard(destinationCard);
    if (cityData?.subCities) {
        for (const sc of cityData.subCities) {
            const key = sc.engName.toLowerCase();
            if (!seen.has(key)) {
                out.push({ name: sc.name, engName: key });
                seen.add(key);
            }
        }
    }

    // 2) 도시간 항공편/이동 카드: 자식 항공 카드의 city (isIntercityFlight) + 메타 카드의 targetCity
    if (cards && typeof cards.forEach === 'function') {
        cards.forEach((c: any) => {
            const cityVal = c?.targetCity || (c?.isIntercityFlight && c?.city);
            if (!cityVal) return;
            const key = String(cityVal).trim().toLowerCase();
            if (!key || seen.has(key)) return;
            const koreanName = lookupKoreanName(key) ?? key;
            out.push({ name: koreanName, engName: key });
            seen.add(key);
        });
    }

    return out;
}

// Picker (숙소/맛집/쇼핑/투어&스파) 카테고리 chip 옵션.
// - 도시간 이동(항공편/육로) 카드가 1장 이상 등록되었을 때만 chip 노출.
// - chip 순서: 최종 여행지(destinationCard) → 등록된 이동 도시들.
// - 도시간 이동이 없으면 빈 배열 → PickerFilterBar 가 chip 영역 자체 미렌더.
export function getPickerCityChips(destinationCard: any, cards: any): SubCityOption[] {
    const intercity = getEffectiveSubCities(destinationCard, cards);
    if (intercity.length === 0) return [];

    const out: SubCityOption[] = [];
    const seen = new Set<string>();

    // 1) 최종 여행지 (destinationCard.city)
    const destCityRaw = (destinationCard?.city as string) || '';
    const destCityEng = destCityRaw.trim().toLowerCase();
    if (destCityEng) {
        const destKorean = lookupKoreanName(destCityEng) ?? destinationCard?.text ?? destCityRaw;
        out.push({ name: destKorean, engName: destCityEng });
        seen.add(destCityEng);
    }

    // 2) 이동 도시
    for (const c of intercity) {
        if (!seen.has(c.engName)) {
            out.push(c);
            seen.add(c.engName);
        }
    }

    return out;
}

// 모달 "이동할 도시" Autocomplete 풀.
//  - destinations.ts 의 모든 도시 (한글명) + 등록된 도시간 이동/항공편 도시
//  - 중복 제거 (engName lowercase 기준)
//  - 최종 여행지(destinationCard.city) 는 자기 자신 제외 (이동 = 다른 도시로)
export function getCityAutocompletePool(
    destinationCard: any,
    cards: any
): SubCityOption[] {
    const out: SubCityOption[] = [];
    const seen = new Set<string>();
    const selfKey = ((destinationCard?.city as string) || '').trim().toLowerCase();

    const tryPush = (name: string, engName: string) => {
        const key = engName.trim().toLowerCase();
        if (!key || key === selfKey || seen.has(key)) return;
        out.push({ name, engName: key });
        seen.add(key);
    };

    // 1) destinations.ts 모든 도시 + 그 subCities
    for (const region of Object.values(DESTINATION_DATA)) {
        for (const city of region.cities) {
            tryPush(city.name, city.engName);
            if (city.subCities) {
                for (const sc of city.subCities) {
                    tryPush(sc.name, sc.engName);
                }
            }
        }
    }

    // 2) 등록된 도시간 이동/항공편 도시 (intercity 도시 — 사용자가 이전에 직접 입력한 경우)
    if (cards && typeof cards.forEach === 'function') {
        cards.forEach((c: any) => {
            const cityVal = c?.targetCity || (c?.isIntercityFlight && c?.city);
            if (!cityVal) return;
            const key = String(cityVal).trim().toLowerCase();
            if (!key) return;
            const koreanName = lookupKoreanName(key) ?? key;
            tryPush(koreanName, key);
        });
    }

    return out;
}

// 한글 → engName lowercase 변환 (subCityOptions 매칭 우선, 없으면 lowercase 그대로)
export function koreanToEngName(
    input: string,
    subCityOptions: Array<{ name: string; engName: string }>
): string {
    const trimmed = input.trim();
    if (!trimmed) return '';
    const matched = subCityOptions.find(s => s.name === trimmed);
    if (matched) return matched.engName.toLowerCase();
    return trimmed.toLowerCase();
}

// engName lowercase → 한글명 (subCityOptions 매칭, 없으면 lookupKoreanName, 끝까지 없으면 원본)
export function engNameToKorean(
    engName: string,
    subCityOptions?: Array<{ name: string; engName: string }>
): string {
    if (!engName) return '';
    const lowered = engName.toLowerCase();
    if (subCityOptions) {
        const matched = subCityOptions.find(s => s.engName.toLowerCase() === lowered);
        if (matched) return matched.name;
    }
    return lookupKoreanName(lowered) ?? engName;
}
