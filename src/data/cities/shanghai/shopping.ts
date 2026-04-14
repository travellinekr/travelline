import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "난징루",
        showInInbox: true,
        type: "market",
        city: "Shanghai",
        coordinates: { lat: 31.2353, lng: 121.4786 },
        category: "쇼핑 거리",
        specialItems: "백화점, 브랜드 매장",
        priceRange: "¥100~100,000+",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["보행자 거리", "야경", "명품관"],
        icon: "🏬"
    },
    {
        name: "신천지",
        showInInbox: true,
        type: "boutique",
        city: "Shanghai",
        coordinates: { lat: 31.2194, lng: 121.4778 },
        category: "복합 문화 공간",
        specialItems: "럭셔리 브랜드, 디자인 상품",
        priceRange: "¥500~200,000+",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["프렌치 컨셉트", "고급 레스토랑", "감성"],
        icon: "✨"
    },
    {
        name: "티엔즈팡",
        showInInbox: true,
        type: "market",
        city: "Shanghai",
        coordinates: { lat: 31.2089, lng: 121.4632 },
        category: "예술 거리",
        specialItems: "수공예품, 디자인 상품",
        priceRange: "¥50~10,000",
        openingHours: "10:00~23:00",
        taxRefund: false,
        features: ["골목길", "아티스트", "카페"],
        icon: "🎨"
    },
    {
        name: "난징루 제1백화점",
        showInInbox: false,
        type: "department-store",
        city: "Shanghai",
        coordinates: { lat: 31.2354, lng: 121.4839 },
        category: "백화점",
        specialItems: "화장품, 의류, 식품",
        priceRange: "¥100~50,000",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["역사적 건물", "종합 백화점", "면세"],
        icon: "🏢"
    }
];

export default shopping;
