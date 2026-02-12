export type ShoppingType =
    | "department-store"  // 백화점
    | "mall"             // 쇼핑몰
    | "market"           // 재래시장
    | "outlet"           // 아울렛
    | "duty-free"        // 면세점
    | "convenience"      // 편의점
    | "supermarket"      // 슈퍼마켓
    | "specialty"        // 전문점
    | "boutique"         // 부티크
    | "souvenir";        // 기념품점

export interface ShoppingData {
    name: string;
    type: ShoppingType;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    category?: string;        // 판매 카테고리 (패션, 화장품, 전자제품 등)
    specialItems?: string;    // 특산품/인기 상품
    priceRange?: string;      // 가격대
    openingHours?: string;    // 영업 시간
    taxRefund?: boolean;      // 택스 리펀드 가능 여부
    features?: string[];      // 특징
    icon?: string;           // 이모지
}

export const SHOPPING_DATA: Record<string, ShoppingData[]> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Osaka
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Osaka": [
        {
            name: "한큐 우메다 본점",
            type: "department-store",
            city: "Osaka",
            coordinates: { lat: 34.7024, lng: 135.4959 },
            category: "종합 백화점",
            specialItems: "명품, 화장품, 식품관",
            priceRange: "¥1,000~100,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["택스 리펀드", "명품관", "식품관"],
            icon: "🏬"
        },
        {
            name: "도톤보리 쇼핑 거리",
            type: "market",
            city: "Osaka",
            coordinates: { lat: 34.6686, lng: 135.5010 },
            category: "쇼핑 거리",
            specialItems: "기념품, 의류, 잡화",
            priceRange: "¥500~10,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["관광 명소", "다양한 상점", "야간 쇼핑"],
            icon: "🛍️"
        },
        {
            name: "구로몬 시장",
            type: "market",
            city: "Osaka",
            coordinates: { lat: 34.6660, lng: 135.5065 },
            category: "전통 시장",
            specialItems: "신선 식품, 해산물, 과일",
            priceRange: "¥300~5,000",
            openingHours: "08:00~18:00",
            taxRefund: false,
            features: ["오사카 부엌", "신선 식품", "시식 가능"],
            icon: "🐟"
        },
        {
            name: "난바 파크스",
            type: "mall",
            city: "Osaka",
            coordinates: { lat: 34.6610, lng: 135.5020 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 잡화, 레스토랑",
            priceRange: "¥1,000~30,000",
            openingHours: "11:00~21:00",
            taxRefund: true,
            features: ["옥상 정원", "영화관", "다양한 브랜드"],
            icon: "🏢"
        },
        {
            name: "돈키호테 도톤보리점",
            type: "specialty",
            city: "Osaka",
            coordinates: { lat: 34.6688, lng: 135.5015 },
            category: "종합 할인점",
            specialItems: "화장품, 과자, 전자제품",
            priceRange: "¥100~50,000",
            openingHours: "24/7",
            taxRefund: true,
            features: ["24시간 영업", "면세", "한국어 안내"],
            icon: "🎡"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Tokyo
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Tokyo": [
        {
            name: "긴자 미츠코시",
            type: "department-store",
            city: "Tokyo",
            coordinates: { lat: 35.6717, lng: 139.7642 },
            category: "럭셔리 백화점",
            specialItems: "명품, 일본 전통 공예품",
            priceRange: "¥5,000~500,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["명품관", "전통 공예", "프리미엄"],
            icon: "👜"
        },
        {
            name: "시부야 109",
            type: "mall",
            city: "Tokyo",
            coordinates: { lat: 35.6595, lng: 139.6982 },
            category: "패션 몰",
            specialItems: "트렌디 패션, 액세서리",
            priceRange: "¥1,000~30,000",
            openingHours: "10:00~21:00",
            taxRefund: true,
            features: ["젊은 패션", "트렌디", "다양한 브랜드"],
            icon: "👗"
        },
        {
            name: "아메요코 시장",
            type: "market",
            city: "Tokyo",
            coordinates: { lat: 35.7103, lng: 139.7743 },
            category: "전통 시장",
            specialItems: "식품, 잡화, 의류",
            priceRange: "¥100~10,000",
            openingHours: "10:00~20:00",
            taxRefund: false,
            features: ["저렴한 가격", "다양한 상품", "활기찬 분위기"],
            icon: "🏪"
        },
        {
            name: "돈키호테 신주쿠점",
            type: "specialty",
            city: "Tokyo",
            coordinates: { lat: 35.6938, lng: 139.7036 },
            category: "종합 할인점",
            specialItems: "화장품, 전자제품, 과자",
            priceRange: "¥100~100,000",
            openingHours: "24/7",
            taxRefund: true,
            features: ["24시간", "면세", "다양한 상품"],
            icon: "🎪"
        },
        {
            name: "긴자 로프트",
            type: "specialty",
            city: "Tokyo",
            coordinates: { lat: 35.6718, lng: 139.7645 },
            category: "라이프스타일 편집샵",
            specialItems: "문구, 잡화, 디자인 상품",
            priceRange: "¥500~20,000",
            openingHours: "11:00~21:00",
            taxRefund: true,
            features: ["유니크 상품", "디자인", "문구류"],
            icon: "📝"
        }
    ],

    // 나머지 17개 도시는 생략...
};
