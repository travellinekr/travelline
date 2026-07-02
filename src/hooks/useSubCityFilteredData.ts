import { useMemo } from 'react';

// 여러 도시 데이터를 통합 로드하는 공통 훅.
//  - 도시간 이동/항공편 등록 시 subCities 가 [최종여행지, ...이동도시] 배열로 옴
//  - subCities 없으면(단일 도시 여행) destinationCity 하나만 로드
//  - FoodPicker / AccommodationPicker / ShoppingPicker 3곳 공통 패턴 추출
//
// 반환 배열 순서는 subCities 순서 × 각 도시별 데이터 순서 (flatMap) — 기존 로직과 동일.
export function useSubCityFilteredData<T>(
    getterByCity: (city: string) => T[],
    subCities: Array<{ engName: string }>,
    destinationCity: string | undefined,
): T[] {
    return useMemo(() => {
        const citiesToLoad = subCities.length > 0
            ? subCities.map(c => c.engName)
            : (destinationCity ? [destinationCity] : []);
        return citiesToLoad.flatMap(city => getterByCity(city));
    }, [getterByCity, subCities, destinationCity]);
}
