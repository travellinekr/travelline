import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "괌 프리미어 아울렛",
        showInInbox: true,
        hasInfo: true,
        type: "outlet",
        city: "Guam",
        coordinates: { lat: 13.4899771, lng: 144.78186 },
        category: "아울렛",
        specialItems: "브랜드 할인 쇼핑, 푸드코트",
        priceRange: "$300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: false,
        features: ["브랜드 할인 쇼핑, 푸드코트", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        icon: "🏷️"
    },
    {
        name: "마이크로네시아 몰",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Guam",
        coordinates: { lat: 13.5204393, lng: 144.8177869 },
        category: "대형 쇼핑몰",
        specialItems: "백화점, 푸드코트, 가족 쇼핑",
        priceRange: "$300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: true,
        features: ["백화점, 푸드코트, 가족 쇼핑", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        icon: "🏬"
    },
    {
        name: "T 갤러리아 DFS 괌",
        showInInbox: true,
        hasInfo: true,
        type: "duty-free",
        city: "Guam",
        coordinates: { lat: 13.5134564, lng: 144.8062849 },
        category: "면세점",
        specialItems: "명품, 화장품, 기념품",
        priceRange: "$300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: true,
        features: ["명품, 화장품, 기념품", "평점 4", "괌 여행 동선에 넣기 좋음"],
        icon: "🛂"
    },
    {
        name: "투몬 샌즈 플라자",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Guam",
        coordinates: { lat: 13.5099218, lng: 144.8055263 },
        category: "쇼핑몰",
        specialItems: "명품·패션 쇼핑",
        priceRange: "$300~8,000+",
        openingHours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        taxRefund: true,
        features: ["다양한 브랜드 입점", "쾌적한 쇼핑 환경"],
        icon: "🛍️"
    },
    {
        name: "괌 K마트",
        showInInbox: true,
        hasInfo: true,
        type: "supermarket",
        city: "Guam",
        coordinates: { lat: 13.5001529, lng: 144.8000944 },
        category: "마트",
        specialItems: "기념품, 간식, 생활용품",
        priceRange: "$300~8,000+",
        openingHours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        taxRefund: false,
        features: ["가성비 넘치는 스낵류", "다양한 기념품 쇼핑 가능"],
        icon: "🛒"
    },
];

export default shopping;
