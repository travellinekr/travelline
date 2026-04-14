import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "국제거리",
        showInInbox: true,
        type: "market",
        city: "Okinawa",
        coordinates: { lat: 26.2139, lng: 127.6792 },
        category: "쇼핑 거리",
        specialItems: "기념품, 오키나와 특산품",
        priceRange: "¥500~10,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["관광 명소", "다양한 상점", "야간 쇼핑"],
        icon: "🏖️"
    },
    {
        name: "아웃렛몰 아시비나",
        showInInbox: true,
        type: "outlet",
        city: "Okinawa",
        coordinates: { lat: 26.2019, lng: 127.6474 },
        category: "아웃렛",
        specialItems: "브랜드 의류, 잡화",
        priceRange: "¥2,000~100,000",
        openingHours: "10:00~20:00",
        taxRefund: true,
        features: ["할인가", "브랜드", "공항 근처"],
        icon: "👜"
    },
    {
        name: "미하마 아메리칸 빌리지",
        showInInbox: true,
        type: "mall",
        city: "Okinawa",
        coordinates: { lat: 26.3148, lng: 127.7593 },
        category: "복합 쇼핑몰",
        specialItems: "미국 스타일 상품",
        priceRange: "¥1,000~30,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["미국풍", "관람차", "해변 근처"],
        icon: "🎡"
    }
];

export default shopping;
