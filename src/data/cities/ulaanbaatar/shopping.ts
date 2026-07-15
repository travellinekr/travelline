import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "국영백화점",
        showInInbox: true,
        hasInfo: true,
        type: "department-store",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9168099, lng: 106.9063627 },
        category: "백화점",
        specialItems: "기념품, 캐시미어, 생활 쇼핑",
        priceRange: "₮300~8,000+",
        openingHours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        taxRefund: true,
        features: ["기념품, 캐시미어, 생활 쇼핑", "평점 4.3", "울란바토르 여행 동선에 넣기 좋음"],
        icon: "🏬"
    },
    {
        name: "갤러리아 울란바토르",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9205668, lng: 106.9190462 },
        category: "쇼핑몰",
        specialItems: "패션, 카페, 도심 쇼핑",
        priceRange: "₮300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        taxRefund: true,
        features: ["패션, 카페, 도심 쇼핑", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        icon: "🛍️"
    },
    {
        name: "샹그릴라 몰",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.91371969999999, lng: 106.9217266 },
        category: "고급 쇼핑몰",
        specialItems: "브랜드, 레스토랑, 영화관",
        priceRange: "₮300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: true,
        features: ["브랜드, 레스토랑, 영화관", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        icon: "🛍️"
    },
    {
        name: "나란툴 시장",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.90920999999999, lng: 106.9481273 },
        category: "전통시장",
        specialItems: "전통 의류, 생활용품, 로컬 시장",
        priceRange: "₮300~8,000+",
        openingHours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 휴무일",
        taxRefund: false,
        features: ["전통 의류 및 생활용품", "활기찬 현지 마켓 체험"],
        icon: "🛒"
    },
    {
        name: "고비 캐시미어",
        showInInbox: true,
        hasInfo: true,
        type: "specialty",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.902679, lng: 106.869283 },
        category: "캐시미어 전문점",
        specialItems: "캐시미어 의류, 선물 쇼핑",
        priceRange: "₮300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["고품질 캐시미어 의류", "기념품 쇼핑"],
        icon: "🧣"
    },
];

export default shopping;
