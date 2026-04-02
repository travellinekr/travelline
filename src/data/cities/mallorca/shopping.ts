import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "팔마 구시가지 쇼핑",
        type: "specialty",
        city: "Mallorca",
        coordinates: { lat: 39.5696, lng: 2.6502 },
        category: "쇼핑 거리",
        specialItems: "가죽 제품, 올리브 오일, 도자기",
        priceRange: "€10~500",
        openingHours: "10:00~20:00",
        taxRefund: false,
        features: ["말로르카 특산품", "가죽 명산지"],
        icon: "👜"
    },
    {
        name: "라 레이나 마켓",
        type: "market",
        city: "Mallorca",
        coordinates: { lat: 39.5705, lng: 2.6515 },
        category: "재래시장",
        specialItems: "신선 식품, 향신료, 현지 특산품",
        priceRange: "€5~100",
        openingHours: "08:00~14:00",
        taxRefund: false,
        features: ["현지 마켓", "신선 식품", "향신료"],
        icon: "🛒"
    },
    {
        name: "살레나스 소금 기념품",
        type: "specialty",
        city: "Mallorca",
        coordinates: { lat: 39.3400, lng: 3.0500 },
        category: "특산품",
        specialItems: "말로르카 소금, 허브 소금",
        priceRange: "€5~30",
        openingHours: "09:00~18:00",
        taxRefund: false,
        features: ["말로르카 명물 소금", "선물용"],
        icon: "🧂"
    },
    {
        name: "아베니다 하이메 III",
        type: "specialty",
        city: "Mallorca",
        coordinates: { lat: 39.5720, lng: 2.6470 },
        category: "쇼핑 거리",
        specialItems: "명품, 패션 브랜드",
        priceRange: "€50~5,000",
        openingHours: "10:00~20:00",
        taxRefund: true,
        features: ["명품 거리", "세금 환급"],
        icon: "🛍️"
    }
];

export default shopping;
