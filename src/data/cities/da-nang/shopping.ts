import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "한시장",
        type: "market",
        city: "Da Nang",
        coordinates: { lat: 16.0697, lng: 108.2190 },
        category: "전통 시장",
        specialItems: "식품, 의류, 기념품",
        priceRange: "₫20,000~500,000",
        openingHours: "06:00~18:00",
        taxRefund: false,
        features: ["로컬 시장", "신선 식품", "저렴한 가격"],
        icon: "🏪"
    },
    {
        name: "빈컴 플라자",
        type: "mall",
        city: "Da Nang",
        coordinates: { lat: 16.0696, lng: 108.2228 },
        category: "쇼핑몰",
        specialItems: "패션, 전자제품",
        priceRange: "₫100,000~10,000,000",
        openingHours: "09:30~22:00",
        taxRefund: false,
        features: ["현대식 쇼핑몰", "영화관", "푸드코트"],
        icon: "🏬"
    },
    {
        name: "롯데마트 다낭",
        type: "supermarket",
        city: "Da Nang",
        coordinates: { lat: 16.0426, lng: 108.2219 },
        category: "대형마트",
        specialItems: "식품, 생활용품",
        priceRange: "₫10,000~2,000,000",
        openingHours: "08:00~22:00",
        taxRefund: false,
        features: ["한국계", "다양한 상품", "푸드코트"],
        icon: "🛒"
    }
];

export default shopping;
