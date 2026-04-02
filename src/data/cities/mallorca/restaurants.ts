import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "까 나 마르크",
        type: "local",
        city: "Mallorca",
        coordinates: { lat: 39.5696, lng: 2.6502 },
        cuisine: "말로르칸 요리",
        specialty: "엔세이마다, 소브라사다",
        priceRange: "€15~40",
        features: ["현지 전통 음식", "인기 맛집"],
        icon: "🥘"
    },
    {
        name: "팔마 올드 마켓 타파스",
        type: "local",
        city: "Mallorca",
        coordinates: { lat: 39.5690, lng: 2.6510 },
        cuisine: "타파스",
        specialty: "지중해식 타파스",
        priceRange: "€20~50",
        features: ["지중해 요리", "분위기"],
        icon: "🫒"
    },
    {
        name: "포르트 드 소예르 씨푸드",
        type: "local",
        city: "Mallorca",
        coordinates: { lat: 39.7940, lng: 2.6960 },
        cuisine: "씨푸드",
        specialty: "신선한 지중해 해산물",
        priceRange: "€30~70",
        features: ["항구 뷰", "신선한 해산물"],
        icon: "🦐"
    },
    {
        name: "히믈로 테라스 카페",
        type: "cafe",
        city: "Mallorca",
        coordinates: { lat: 39.5700, lng: 2.6490 },
        cuisine: "카페",
        specialty: "커피, 크루아상",
        priceRange: "€5~20",
        features: ["테라스", "팔마 구시가지"],
        icon: "☕"
    }
];

export default restaurants;
