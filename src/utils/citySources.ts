// 다중 도시 여행에서 picker 서브 도시 chips 의 데이터 소스 통합.
//  1) destinations.ts CityData.subCities (기본 정의)
//  2) 사용자가 도시간 항공편으로 등록한 도착 도시 (cards 의 intercityFlight.arrCity / depCity)
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

    // 2) 사용자 항공편 등록 도시 (dep/arr 모두 후보)
    if (cards && typeof cards.forEach === 'function') {
        cards.forEach((c: any) => {
            const info = c?.intercityFlight;
            if (!info) return;
            for (const candidate of [info.depCity, info.arrCity]) {
                if (!candidate) continue;
                const key = String(candidate).trim().toLowerCase();
                if (!key || seen.has(key)) continue;
                const koreanName = lookupKoreanName(key) ?? key;
                out.push({ name: koreanName, engName: key });
                seen.add(key);
            }
        });
    }

    return out;
}
