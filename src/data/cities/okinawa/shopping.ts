import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "국제거리",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Okinawa",
        coordinates: { lat: 26.2151469, lng: 127.684745 },
        category: "쇼핑 거리",
        specialItems: "기념품, 먹거리, 오키나와 잡화",
        priceRange: "¥500~80,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["오키나와 특산물 및 기념품 쇼핑", "다양한 길거리 간식 투어", "아기자기한 소품샵 구경"],
        icon: "🛍️"
    },
    {
        name: "T 갤러리아 오키나와 by DFS",
        showInInbox: true,
        hasInfo: true,
        type: "duty-free",
        city: "Okinawa",
        coordinates: { lat: 26.2230667, lng: 127.6972666 },
        category: "면세점",
        specialItems: "명품, 화장품, 면세 쇼핑",
        priceRange: "¥500~80,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        taxRefund: true,
        features: ["글로벌 명품 브랜드 입점", "다양한 코스메틱 브랜드", "쾌적하고 고급스러운 쇼핑 환경"],
        icon: "💎"
    },
    {
        name: "이온몰 오키나와 라이카무",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Okinawa",
        coordinates: { lat: 26.313778, lng: 127.7966041 },
        category: "대형 쇼핑몰",
        specialItems: "패션, 식당가, 가족 쇼핑",
        priceRange: "¥500~80,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        taxRefund: true,
        features: ["다양한 글로벌 패션 브랜드", "대형 푸드코트와 다양한 식당가", "아이들과 함께하기 좋은 넓은 공간"],
        icon: "🏬"
    },
    {
        name: "오키나와 아시비나 아울렛몰",
        showInInbox: true,
        hasInfo: true,
        type: "outlet",
        city: "Okinawa",
        coordinates: { lat: 26.1590569, lng: 127.6575776 },
        category: "아울렛",
        specialItems: "브랜드 아울렛, 공항 근처 쇼핑",
        priceRange: "¥500~80,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        taxRefund: false,
        features: ["브랜드 아울렛, 공항 근처 쇼핑", "평점 4", "오키나와 여행 동선에 넣기 좋음"],
        icon: "🏷️"
    },
    {
        name: "우미카지 테라스",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Okinawa",
        coordinates: { lat: 26.1766603, lng: 127.6404367 },
        category: "해변 쇼핑몰",
        specialItems: "카페, 기념품, 바다 전망",
        priceRange: "¥500~80,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        taxRefund: true,
        features: ["카페, 기념품, 바다 전망", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        icon: "🌊"
    },
];

export default shopping;
