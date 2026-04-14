import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "나이트 바자",
        showInInbox: true,
        type: "market",
        city: "Chiang Mai",
        coordinates: { lat: 18.7852, lng: 99.0030 },
        category: "야시장",
        specialItems: "의류, 기념품, 공예품",
        priceRange: "฿50~2,000",
        openingHours: "18:00~24:00",
        taxRefund: false,
        features: ["야간 쇼핑", "흥정 가능", "다양한 상품"],
        icon: "🌙"
    },
    {
        name: "센트럴 페스티벌",
        showInInbox: true,
        type: "mall",
        city: "Chiang Mai",
        coordinates: { lat: 18.7921, lng: 98.9697 },
        category: "대형 쇼핑몰",
        specialItems: "패션, 전자제품, 식품",
        priceRange: "฿200~50,000",
        openingHours: "11:00~22:00",
        taxRefund: false,
        features: ["에어컨", "푸드코트", "영화관"],
        icon: "🏬"
    },
    {
        name: "와로롯 시장",
        showInInbox: true,
        type: "market",
        city: "Chiang Mai",
        coordinates: { lat: 18.7930, lng: 98.9980 },
        category: "재래시장",
        specialItems: "북부 특산품, 차, 허브",
        priceRange: "฿30~1,000",
        openingHours: "06:00~18:00",
        taxRefund: false,
        features: ["현지 시장", "저렴", "특산품"],
        icon: "🛒"
    },
    {
        name: "선데이 워킹 스트리트",
        showInInbox: false,
        type: "market",
        city: "Chiang Mai",
        coordinates: { lat: 18.7870, lng: 98.9870 },
        category: "주말 야시장",
        specialItems: "수공예품, 의류, 음식",
        priceRange: "฿50~3,000",
        openingHours: "일요일 17:00~23:00",
        taxRefund: false,
        features: ["일요일만", "수공예", "거리 공연"],
        icon: "🎪"
    }
];

export default shopping;
