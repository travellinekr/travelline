import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "시먼딩",
        type: "market",
        city: "Taipei",
        coordinates: { lat: 25.0444, lng: 121.5067 },
        category: "쇼핑 거리",
        specialItems: "패션, 잡화, 먹거리",
        priceRange: "NT$100~10,000",
        openingHours: "11:00~23:00",
        taxRefund: false,
        features: ["젊음의 거리", "트렌디", "보행자 천국"],
        icon: "👗"
    },
    {
        name: "타이베이 101 쇼핑몰",
        type: "mall",
        city: "Taipei",
        coordinates: { lat: 25.0340, lng: 121.5645 },
        category: "럭셔리 쇼핑몰",
        specialItems: "명품, 고급 브랜드",
        priceRange: "NT$5,000~500,000+",
        openingHours: "11:00~21:30",
        taxRefund: true,
        features: ["명품관", "전망대", "프리미엄"],
        icon: "🏙️"
    },
    {
        name: "랴오허 야시장",
        type: "market",
        city: "Taipei",
        coordinates: { lat: 25.0536, lng: 121.5165 },
        category: "야시장",
        specialItems: "의류, 액세서리, 먹거리",
        priceRange: "NT$50~5,000",
        openingHours: "18:00~24:00",
        taxRefund: false,
        features: ["저렴한 가격", "야간 쇼핑", "먹거리"],
        icon: "🌙"
    },
    {
        name: "화시가 관광야시장",
        type: "market",
        city: "Taipei",
        coordinates: { lat: 25.0454, lng: 121.5005 },
        category: "전통 시장",
        specialItems: "한약재, 전통 간식",
        priceRange: "NT$100~5,000",
        openingHours: "16:00~23:30",
        taxRefund: false,
        features: ["전통 시장", "먹거리", "이색 체험"],
        icon: "🏮"
    }
];

export default shopping;
