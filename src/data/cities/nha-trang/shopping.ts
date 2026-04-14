import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "담시장",
        showInInbox: true,
        type: "market",
        city: "Nha Trang",
        coordinates: { lat: 12.2451, lng: 109.1899 },
        category: "재래시장",
        specialItems: "식품, 기념품, 의류",
        priceRange: "₫20,000~500,000",
        openingHours: "06:00~19:00",
        taxRefund: false,
        features: ["로컬 시장", "신선 식품", "저렴한 가격"],
        icon: "🏪"
    },
    {
        name: "빈컴 플라자 나트랑",
        showInInbox: true,
        type: "mall",
        city: "Nha Trang",
        coordinates: { lat: 12.2497, lng: 109.1902 },
        category: "쇼핑몰",
        specialItems: "패션, 화장품",
        priceRange: "₫100,000~5,000,000",
        openingHours: "09:30~22:00",
        taxRefund: false,
        features: ["현대식 쇼핑몰", "영화관", "에어컨"],
        icon: "🏬"
    },
    {
        name: "나트랑 센터",
        showInInbox: true,
        type: "mall",
        city: "Nha Trang",
        coordinates: { lat: 12.2388, lng: 109.1967 },
        category: "복합 쇼핑몰",
        specialItems: "패션, 잡화, 레스토랑",
        priceRange: "₫50,000~3,000,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["해변 근처", "푸드코트", "다양한 매장"],
        icon: "🏖️"
    }
];

export default shopping;
