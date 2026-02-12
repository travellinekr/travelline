export type TourSpaType =
    | "island-hopping"   // 아일랜드 호핑
    | "city-tour"        // 시티 투어
    | "spa"              // 스파
    | "massage"          // 마사지
    | "theme-park"       // 테마파크
    | "cultural"         // 문화 체험
    | "water-sports"     // 수상 스포츠
    | "adventure"        // 어드벤처
    | "cruise"           // 크루즈
    | "show"             // 공연/쇼
    | "workshop";        // 워크샵/클래스

export interface TourSpaData {
    name: string;
    type: TourSpaType;
    description?: string;     // 설명
    duration?: string;        // 소요 시간
    priceRange?: string;      // 가격대
    pickupAvailable?: boolean; // 픽업 가능 여부
    coordinates?: {           // 좌표 (픽업형은 optional)
        lat: number;
        lng: number;
    };
    reservationRequired?: boolean;  // 예약 필요 여부
    openingHours?: string;    // 영업 시간
    features?: string[];      // 특징
    rating?: number;          // 평점 (1-5)
    icon?: string;           // 이모지
}

// 예제 샘플 데이터 (직접 추가하기 참고용)
export const TOUR_SPA_SAMPLES: TourSpaData[] = [
    {
        name: "아일랜드 호핑 투어",
        type: "island-hopping",
        description: "숙소 픽업 → 섬 투어 → 숙소 드롭",
        duration: "6-8시간",
        priceRange: "$50~100",
        pickupAvailable: true,
        // coordinates 없음 (픽업형)
        reservationRequired: true,
        features: ["호텔 픽업", "점심 포함", "스노클링"],
        rating: 4.7,
        icon: "🏝️"
    },
    {
        name: "타이 마사지 전문점",
        type: "massage",
        description: "전통 타이 마사지",
        duration: "1-2시간",
        priceRange: "$30~80",
        pickupAvailable: false,
        coordinates: { lat: 13.7467, lng: 100.5349 }, // 방문형은 좌표 필수
        reservationRequired: false,
        openingHours: "10:00~22:00",
        features: ["워킹인 가능", "오일 마사지", "커플룸"],
        rating: 4.5,
        icon: "💆"
    }
];

