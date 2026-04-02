import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "꾸따 비치워크",
        type: "mall",
        city: "Bali",
        coordinates: { lat: -8.7188, lng: 115.1691 },
        category: "해변 쇼핑몰",
        specialItems: "서핑 용품, 비치웨어",
        priceRange: "Rp100,000~5,000,000",
        openingHours: "10:30~22:30",
        taxRefund: false,
        features: ["해변 근처", "서핑", "선셋 뷰"],
        icon: "🏄"
    },
    {
        name: "스미냑 빌리지",
        type: "mall",
        city: "Bali",
        coordinates: { lat: -8.6822, lng: 115.1574 },
        category: "럭셔리 쇼핑몰",
        specialItems: "디자이너 브랜드, 수제품",
        priceRange: "Rp200,000~10,000,000+",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["럭셔리", "부티크", "고급 레스토랑"],
        icon: "✨"
    },
    {
        name: "우붓 아트마켓",
        type: "market",
        city: "Bali",
        coordinates: { lat: -8.5069, lng: 115.2601 },
        category: "전통 시장",
        specialItems: "수공예품, 그림, 기념품",
        priceRange: "Rp50,000~2,000,000",
        openingHours: "08:00~18:00",
        taxRefund: false,
        features: ["전통 공예", "흥정 가능", "감성"],
        icon: "🎨"
    },
    {
        name: "발리 컬렉션",
        type: "mall",
        city: "Bali",
        coordinates: { lat: -8.8051, lng: 115.2304 },
        category: "아울렛 몰",
        specialItems: "브랜드 의류, 잡화",
        priceRange: "Rp150,000~5,000,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["누사두아", "면세", "리조트 근처"],
        icon: "🏬"
    }
];

export default shopping;
