import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "SM 시티 세부",
        showInInbox: true,
        type: "mall",
        city: "Cebu",
        coordinates: { lat: 10.3114, lng: 123.9183 },
        category: "대형 쇼핑몰",
        specialItems: "패션, 전자제품, 식품",
        priceRange: "₱200~50,000",
        openingHours: "10:00~21:00",
        taxRefund: false,
        features: ["필리핀 최대 몰", "영화관", "푸드코트"],
        icon: "🏬"
    },
    {
        name: "아얄라 센터 세부",
        showInInbox: true,
        type: "mall",
        city: "Cebu",
        coordinates: { lat: 10.3180, lng: 123.9059 },
        category: "프리미엄 쇼핑몰",
        specialItems: "브랜드 의류, 악세서리",
        priceRange: "₱500~100,000",
        openingHours: "10:00~21:00",
        taxRefund: false,
        features: ["고급 브랜드", "야외 정원", "레스토랑"],
        icon: "🌳"
    },
    {
        name: "카본 마켓",
        showInInbox: true,
        type: "market",
        city: "Cebu",
        coordinates: { lat: 10.2934, lng: 123.9013 },
        category: "재래시장",
        specialItems: "신선 식품, 기념품",
        priceRange: "₱50~5,000",
        openingHours: "05:00~18:00",
        taxRefund: false,
        features: ["로컬 시장", "저렴한 가격", "다양한 상품"],
        icon: "🛒"
    }
];

export default shopping;
