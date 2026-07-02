import { DESTINATION_DATA } from '@/data/destinations';

// destinations.ts 정적 데이터 기반 지원 도시 수. 서비스가 다루는 총 여행지 후보.
// 실제 사용자가 선택한 도시 수는 Liveblocks storage 스캔이 필요하므로 이 단계에선 미제공.
export function getSupportedDestinationCityCount(): number {
    let count = 0;
    for (const region of Object.keys(DESTINATION_DATA)) {
        const cities = (DESTINATION_DATA as any)[region];
        if (Array.isArray(cities)) count += cities.length;
    }
    return count;
}
