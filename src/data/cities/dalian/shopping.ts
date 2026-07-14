import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "파빌리온 다롄",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Dalian",
        coordinates: { lat: 39.0095808, lng: 121.5956376 },
        category: "쇼핑몰",
        specialItems: "패션, 식당가, 도심 쇼핑",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: true,
        features: ["패션, 식당가, 도심 쇼핑", "평점 4.7", "다롄 여행 동선에 넣기 좋음"],
        icon: "shop"
    },
    {
        name: "올림피아 66 다롄",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Dalian",
        coordinates: { lat: 38.90877, lng: 121.60792 },
        category: "대형 쇼핑몰",
        specialItems: "브랜드 쇼핑, 레스토랑, 영화관",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: true,
        features: ["브랜드 쇼핑, 레스토랑, 영화관", "평점 4.3", "다롄 여행 동선에 넣기 좋음"],
        icon: "shop"
    },
    {
        name: "뉴마트 쇼핑 플라자 다롄",
        showInInbox: true,
        hasInfo: true,
        type: "department-store",
        city: "Dalian",
        coordinates: { lat: 38.916433, lng: 121.633147 },
        category: "백화점",
        specialItems: "백화점 쇼핑, 생활용품, 식당가",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: true,
        features: ["백화점 쇼핑, 생활용품, 식당가", "평점 4.7", "다롄 여행 동선에 넣기 좋음"],
        icon: "shop"
    },
    {
        name: "승리광장 지하상가",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Dalian",
        coordinates: { lat: 38.91953, lng: 121.63394 },
        category: "지하상가",
        specialItems: "잡화, 의류, 로컬 쇼핑",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["잡화, 의류, 로컬 쇼핑", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        icon: "shop"
    },
    {
        name: "카이더 허핑 플라자",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Dalian",
        coordinates: { lat: 38.896582, lng: 121.588098 },
        category: "쇼핑몰",
        specialItems: "가족 쇼핑, 식당가, 생활 브랜드",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: true,
        features: ["가족 쇼핑, 식당가, 생활 브랜드", "평점 4.8", "다롄 여행 동선에 넣기 좋음"],
        icon: "shop"
    },
];

export default shopping;
