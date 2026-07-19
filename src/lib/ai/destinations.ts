// AI 여행지 추천 유틸 — 여행 시기(월)·취향을 받아 "카탈로그가 있는 도시" 중에서만 추천하게 하고,
// 추천 결과를 여행지 후보 카드 생성에 필요한 형태로 변환한다. (카탈로그 없는 도시는 추천 대상에서 제외 → 이후 일정 배치까지 매끄럽게)

import { DESTINATION_DATA, FALLBACK_IMAGES, type RegionKey } from '@/data/destinations';
import { CITY_DATA } from '@/data/cities';

const REGION_LABEL: Record<string, string> = {
    japan: '일본',
    china_taiwan: '중화권',
    se_asia: '동남아',
    long_haul: '장거리',
};

export interface RecoCity {
    engName: string;   // CITY_DATA 키 = 카드 city 필드
    name: string;      // 한글 도시명
    country: string;
    region: string;    // 한글 지역 라벨
    tags: string[];
    desc: string;
    timezone?: number; // UTC 오프셋 (승격 후 항공편 시간 계산용)
    hemisphere?: string; // 'south' 면 계절 반대
}

/** 추천 대상 = DESTINATION_DATA 도시 중 카탈로그(CITY_DATA)가 있는 도시만 */
export function listRecommendableCities(): RecoCity[] {
    const out: RecoCity[] = [];
    for (const regionKey of Object.keys(DESTINATION_DATA) as RegionKey[]) {
        const region = DESTINATION_DATA[regionKey];
        for (const c of region.cities) {
            if (!CITY_DATA[c.engName]) continue; // 카탈로그 없는 도시 제외
            out.push({
                engName: c.engName,
                name: c.name,
                country: c.country,
                region: REGION_LABEL[regionKey] ?? regionKey,
                tags: (c as any).tags ?? [],
                desc: (c as any).desc ?? '',
                timezone: (c as any).timezone,
                hemisphere: (c as any).hemisphere,
            });
        }
    }
    return out;
}

/** 프롬프트용 도시 목록 (각 줄: engName | 한글명 | 지역/국가 | 태그 | 설명) */
export function buildDestinationListing(cities: RecoCity[]): string {
    return cities
        .map((c) => {
            const south = c.hemisphere === 'south' ? ' | 남반구(계절 반대)' : '';
            return `- ${c.engName} | ${c.name} | ${c.region}/${c.country} | ${c.tags.join(',')} | ${c.desc}${south}`;
        })
        .join('\n');
}

/** engName 또는 한글명으로 추천대상 도시 찾기 (검증용, 대소문자·공백 무시) */
export function findRecommendableCity(name: string): RecoCity | null {
    const norm = (s: string) => (s || '').trim().toLowerCase().replace(/\s+/g, '');
    const t = norm(name);
    if (!t) return null;
    return (
        listRecommendableCities().find((c) => norm(c.engName) === t || norm(c.name) === t) ?? null
    );
}

/** 여행지 후보 카드 이미지 (Unsplash 실패 시 fallback) */
export function cityImage(engName: string): string | undefined {
    return FALLBACK_IMAGES[engName];
}
