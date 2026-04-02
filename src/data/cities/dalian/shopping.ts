import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "러시아 풍정 거리",
        type: "market",
        city: "Dalian",
        coordinates: { lat: 38.9140, lng: 121.6380 },
        category: "쇼핑 거리",
        specialItems: "러시아 기념품, 의류",
        priceRange: "¥50~5,000",
        openingHours: "09:00~21:00",
        taxRefund: false,
        features: ["유럽풍 건물", "기념품", "사진 명소"],
        icon: "🏛️"
    },
    {
        name: "승리광장",
        type: "mall",
        city: "Dalian",
        coordinates: { lat: 38.9188, lng: 121.6296 },
        category: "복합 쇼핑몰",
        specialItems: "패션, 전자제품",
        priceRange: "¥100~30,000",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["대형 광장", "다양한 매장", "레스토랑"],
        icon: "🏢"
    },
    {
        name: "시안루",
        type: "market",
        city: "Dalian",
        coordinates: { lat: 38.9147, lng: 121.6311 },
        category: "쇼핑 거리",
        specialItems: "의류, 잡화, 먹거리",
        priceRange: "¥20~10,000",
        openingHours: "09:00~22:00",
        taxRefund: false,
        features: ["저렴한 가격", "로컬 상품", "다양한 매장"],
        icon: "🛍️"
    }
];

export default shopping;
