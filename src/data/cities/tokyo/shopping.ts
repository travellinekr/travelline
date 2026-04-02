import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
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
];

export default shopping;
