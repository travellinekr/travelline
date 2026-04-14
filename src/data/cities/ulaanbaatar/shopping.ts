import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "나란툴 마켓",
        showInInbox: true,
        type: "market",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.8990, lng: 106.9350 },
        category: "재래시장",
        specialItems: "캐시미어, 모피, 기념품",
        priceRange: "₮5,000~500,000",
        openingHours: "09:00~18:00",
        taxRefund: false,
        features: ["현지 최대 시장", "저렴", "다양한 상품"],
        icon: "🛒"
    },
    {
        name: "몽골 캐시미어 부티크",
        showInInbox: true,
        type: "specialty",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9075, lng: 106.9180 },
        category: "특산품",
        specialItems: "캐시미어, 울 제품",
        priceRange: "₮50,000~1,000,000",
        openingHours: "10:00~20:00",
        taxRefund: false,
        features: ["캐시미어 명품", "몽골 특산"],
        icon: "🧥"
    },
    {
        name: "수흐바타르 광장 기념품",
        showInInbox: true,
        type: "specialty",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9087, lng: 106.9177 },
        category: "기념품",
        specialItems: "몽골 공예품, 전통 의상",
        priceRange: "₮3,000~100,000",
        openingHours: "09:00~20:00",
        taxRefund: false,
        features: ["관광 명소", "기념품", "공예품"],
        icon: "🎁"
    }
];

export default shopping;
