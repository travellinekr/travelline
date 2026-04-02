import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "달랏 야시장",
        type: "market",
        city: "Da Lat",
        coordinates: { lat: 11.9396, lng: 108.4327 },
        category: "야시장",
        specialItems: "꽃, 딸기, 수공예품",
        priceRange: "₫20,000~500,000",
        openingHours: "17:00~23:00",
        taxRefund: false,
        features: ["꽃 도시", "특산품", "기념품"],
        icon: "🌸"
    },
    {
        name: "호아 빈 광장",
        type: "market",
        city: "Da Lat",
        coordinates: { lat: 11.9400, lng: 108.4335 },
        category: "재래시장",
        specialItems: "신선 과일, 채소, 기념품",
        priceRange: "₫10,000~200,000",
        openingHours: "06:00~18:00",
        taxRefund: false,
        features: ["현지 시장", "저렴", "신선 식품"],
        icon: "🛒"
    },
    {
        name: "달랏 실크 마켓",
        type: "specialty",
        city: "Da Lat",
        coordinates: { lat: 11.9410, lng: 108.4350 },
        category: "특산품",
        specialItems: "실크, 자수 제품",
        priceRange: "₫100,000~2,000,000",
        openingHours: "08:00~20:00",
        taxRefund: false,
        features: ["베트남 실크", "수공예"],
        icon: "🧵"
    }
];

export default shopping;
