import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "캐널시티 하카타",
        type: "mall",
        city: "Fukuoka",
        coordinates: { lat: 33.5904, lng: 130.4112 },
        category: "복합 쇼핑몰",
        specialItems: "패션, 엔터테인먼트, 레스토랑",
        priceRange: "¥1,000~50,000",
        openingHours: "10:00~21:00",
        taxRefund: true,
        features: ["운하 테마", "분수 쇼", "영화관"],
        icon: "🏢"
    },
    {
        name: "텐진 지하상가",
        type: "mall",
        city: "Fukuoka",
        coordinates: { lat: 33.5903, lng: 130.4016 },
        category: "지하 쇼핑몰",
        specialItems: "패션, 잡화, 화장품",
        priceRange: "¥500~30,000",
        openingHours: "10:00~20:00",
        taxRefund: false,
        features: ["날씨 걱정 없음", "다양한 매장", "음식점"],
        icon: "🛍️"
    },
    {
        name: "야나가와 시장",
        type: "market",
        city: "Fukuoka",
        coordinates: { lat: 33.5876, lng: 130.4150 },
        category: "재래시장",
        specialItems: "신선 식품, 해산물",
        priceRange: "¥300~5,000",
        openingHours: "08:00~17:00",
        taxRefund: false,
        features: ["로컬 음식", "신선도", "저렴한 가격"],
        icon: "🐟"
    }
];

export default shopping;
