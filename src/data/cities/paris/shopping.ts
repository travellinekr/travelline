import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "갤러리 라파예트",
        type: "department-store",
        city: "Paris",
        coordinates: { lat: 48.8736, lng: 2.3322 },
        category: "백화점",
        specialItems: "명품, 패션, 화장품",
        priceRange: "€20~10,000",
        openingHours: "09:30~20:30",
        taxRefund: true,
        features: ["세금 환급", "루프탑", "명품 브랜드"],
        icon: "🏬"
    },
    {
        name: "봉 마르셰",
        type: "department-store",
        city: "Paris",
        coordinates: { lat: 48.8511, lng: 2.3237 },
        category: "백화점",
        specialItems: "고급 패션, 식품관",
        priceRange: "€30~20,000",
        openingHours: "10:00~20:00",
        taxRefund: true,
        features: ["세계 최초 백화점", "고급 식품관", "명품"],
        icon: "🛍️"
    },
    {
        name: "생또노레 거리",
        type: "specialty",
        city: "Paris",
        coordinates: { lat: 48.8680, lng: 2.3200 },
        category: "명품 거리",
        specialItems: "샤넬, 에르메스, 루이비통",
        priceRange: "€200~100,000",
        openingHours: "10:00~19:00",
        taxRefund: true,
        features: ["명품 쇼핑 거리", "세금 환급"],
        icon: "💎"
    },
    {
        name: "마레 지구 빈티지",
        type: "boutique",
        city: "Paris",
        coordinates: { lat: 48.8580, lng: 2.3540 },
        category: "빈티지",
        specialItems: "빈티지 의류, 독립 브랜드",
        priceRange: "€20~500",
        openingHours: "11:00~20:00",
        taxRefund: false,
        features: ["트렌디", "빈티지", "독립 쇼핑"],
        icon: "👗"
    }
];

export default shopping;
