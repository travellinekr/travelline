import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "스스키노 상점가",
        showInInbox: true,
        type: "market",
        city: "Sapporo",
        coordinates: { lat: 43.0532, lng: 141.3553 },
        category: "쇼핑 거리",
        specialItems: "기념품, 특산품, 의류",
        priceRange: "¥500~20,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["유흥가", "야간 쇼핑", "다양한 매장"],
        icon: "🏪"
    },
    {
        name: "삿포로 공장",
        showInInbox: true,
        type: "mall",
        city: "Sapporo",
        coordinates: { lat: 43.0707, lng: 141.3677 },
        category: "복합 쇼핑몰",
        specialItems: "패션, 맥주 박물관",
        priceRange: "¥1,000~30,000",
        openingHours: "10:00~21:00",
        taxRefund: true,
        features: ["맥주 공장", "실내 정원", "레스토랑"],
        icon: "🍺"
    },
    {
        name: "탄키리샤",
        showInInbox: true,
        type: "specialty",
        city: "Sapporo",
        coordinates: { lat: 43.0642, lng: 141.3545 },
        category: "종합 할인점",
        specialItems: "과자, 화장품, 전자제품",
        priceRange: "¥100~50,000",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["면세", "한국어 안내", "다양한 상품"],
        icon: "🎁"
    }
];

export default shopping;
