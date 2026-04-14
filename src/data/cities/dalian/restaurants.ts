import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "텐텐 위위안",
        showInInbox: true,
        type: "chinese",
        city: "Dalian",
        coordinates: { lat: 38.9135, lng: 121.6147 },
        cuisine: "해산물",
        specialty: "전복죽",
        priceRange: "¥80~150",
        features: ["신선한 해산물", "가성비"],
        icon: "🦞"
    },
    {
        name: "러시아 풍경거리",
        showInInbox: true,
        type: "western",
        city: "Dalian",
        coordinates: { lat: 38.9189, lng: 121.6445 },
        cuisine: "러시아 요리",
        specialty: "보르시치",
        priceRange: "¥60~120",
        features: ["이색적", "유럽 분위기"],
        icon: "🥘"
    },
    {
        name: "톈진제 간식거리",
        showInInbox: true,
        type: "street-food",
        city: "Dalian",
        coordinates: { lat: 38.9151, lng: 121.6221 },
        cuisine: "길거리 음식",
        specialty: "꼬치, 군밤",
        priceRange: "¥10~50",
        features: ["보행자 거리", "저렴"],
        icon: "🍢"
    },
    {
        name: "달리안 만두",
        showInInbox: false,
        type: "chinese",
        city: "Dalian",
        coordinates: { lat: 38.9168, lng: 121.6185 },
        cuisine: "만두",
        specialty: "해산물 만두",
        priceRange: "¥30~60",
        features: ["현지 스타일", "푸짐"],
        icon: "🥟"
    }
];

export default restaurants;
