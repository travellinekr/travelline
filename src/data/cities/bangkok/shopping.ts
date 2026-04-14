import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "짜뚜짝 주말시장",
        showInInbox: true,
        type: "market",
        city: "Bangkok",
        coordinates: { lat: 13.7999, lng: 100.5496 },
        category: "재래시장",
        specialItems: "의류, 잡화, 공예품",
        priceRange: "฿50~5,000",
        openingHours: "09:00~18:00 (주말만)",
        taxRefund: false,
        features: ["세계 최대 시장", "가성비", "다양한 상품"],
        icon: "🎪"
    },
    {
        name: "시암 파라곤",
        showInInbox: true,
        type: "mall",
        city: "Bangkok",
        coordinates: { lat: 13.7465, lng: 100.5348 },
        category: "고급 쇼핑몰",
        specialItems: "명품, 전자제품",
        priceRange: "฿500~500,000+",
        openingHours: "10:00~22:00",
        taxRefund: true,
        features: ["럭셔리", "수족관", "미식"],
        icon: "👑"
    },
    {
        name: "터미널21",
        showInInbox: true,
        type: "mall",
        city: "Bangkok",
        coordinates: { lat: 13.7378, lng: 100.5601 },
        category: "테마 쇼핑몰",
        specialItems: "패션, 잡화",
        priceRange: "฿200~20,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["공항 테마", "각국 컨셉", "SNS 명소"],
        icon: "✈️"
    },
    {
        name: "플래티넘 패션 몰",
        showInInbox: false,
        type: "mall",
        city: "Bangkok",
        coordinates: { lat: 13.7515, lng: 100.5400 },
        category: "도매 쇼핑몰",
        specialItems: "의류, 액세서리",
        priceRange: "฿100~5,000",
        openingHours: "08:00~20:00",
        taxRefund: false,
        features: ["도매 가격", "다양한 의류", "가성비"],
        icon: "👚"
    }
];

export default shopping;
