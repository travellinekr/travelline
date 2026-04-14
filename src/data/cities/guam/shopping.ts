import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "마이크로네시아 몰",
        showInInbox: true,
        type: "mall",
        city: "Guam",
        coordinates: { lat: 13.4720, lng: 144.7680 },
        category: "대형 쇼핑몰",
        specialItems: "명품, 패션, 전자제품",
        priceRange: "$20~5,000",
        openingHours: "10:00~21:00",
        taxRefund: false,
        features: ["괌 최대 몰", "면세 쇼핑", "다양한 브랜드"],
        icon: "🏬"
    },
    {
        name: "GPO (괌 프리미어 아울렛)",
        showInInbox: true,
        type: "outlet",
        city: "Guam",
        coordinates: { lat: 13.4690, lng: 144.7660 },
        category: "아울렛",
        specialItems: "브랜드 아울렛, 스포츠웨어",
        priceRange: "$30~2,000",
        openingHours: "10:00~21:00",
        taxRefund: false,
        features: ["할인 쇼핑", "아울렛", "브랜드"],
        icon: "🛍️"
    },
    {
        name: "투몬 샌즈 플라자",
        showInInbox: true,
        type: "mall",
        city: "Guam",
        coordinates: { lat: 13.5190, lng: 144.8010 },
        category: "쇼핑몰",
        specialItems: "기념품, 화장품, 의류",
        priceRange: "$10~1,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["투몬 위치", "편리", "기념품"],
        icon: "🛒"
    },
    {
        name: "DFS T 갤러리아",
        showInInbox: false,
        type: "duty-free",
        city: "Guam",
        coordinates: { lat: 13.5175, lng: 144.7988 },
        category: "면세점",
        specialItems: "명품, 화장품, 주류",
        priceRange: "$50~10,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["면세", "명품 브랜드", "화장품"],
        icon: "💎"
    }
];

export default shopping;
