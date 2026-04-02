import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "레촌 벨리",
        type: "local",
        city: "Cebu",
        coordinates: { lat: 10.3156, lng: 123.8854 },
        cuisine: "레촌",
        specialty: "통돼지 구이",
        priceRange: "₱300~600",
        features: ["세부 명물", "바삭"],
        icon: "🐖"
    },
    {
        name: "라파스 라파스",
        type: "local",
        city: "Cebu",
        coordinates: { lat: 10.2935, lng: 123.9022 },
        cuisine: "씨푸드",
        specialty: "신선한 해산물",
        priceRange: "₱500~1,500",
        features: ["시장 옆", "저렴"],
        icon: "🦞"
    },
    {
        name: "하우스 오브 레촌",
        type: "local",
        city: "Cebu",
        coordinates: { lat: 10.3113, lng: 123.8925 },
        cuisine: "필리핀 요리",
        specialty: "레촌, 스페어립",
        priceRange: "₱300~800",
        features: ["관광객 인기", "푸짐"],
        icon: "🍖"
    },
    {
        name: "지코스 레촌",
        type: "local",
        city: "Cebu",
        coordinates: { lat: 10.3081, lng: 123.8948 },
        cuisine: "바비큐",
        specialty: "숯불 바비큐",
        priceRange: "₱200~500",
        features: ["저렴", "숯불향"],
        icon: "🔥"
    },
    {
        name: "수툴릴 시장",
        type: "street-food",
        city: "Cebu",
        coordinates: { lat: 10.3074, lng: 123.8926 },
        cuisine: "길거리 음식",
        specialty: "바비큐 꼬치",
        priceRange: "₱50~200",
        features: ["야시장", "저렴"],
        icon: "🍢"
    }
];

export default restaurants;
