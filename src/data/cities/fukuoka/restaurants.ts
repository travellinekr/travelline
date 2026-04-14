import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "하카타 잇푸도",
        showInInbox: true,
        type: "japanese",
        city: "Fukuoka",
        coordinates: { lat: 33.5904, lng: 130.4016 },
        cuisine: "라멘",
        specialty: "돈코츠 라멘",
        priceRange: "¥800~1,200",
        features: ["현지 인기", "진한 국물"],
        icon: "🍜"
    },
    {
        name: "모츠나베 야마나카",
        showInInbox: true,
        type: "local",
        city: "Fukuoka",
        coordinates: { lat: 33.5895, lng: 130.399 },
        cuisine: "모츠나베",
        specialty: "소곱창전골",
        priceRange: "¥2,000~3,500",
        reservation: true,
        features: ["현지 맛집", "예약 추천"],
        icon: "🍲"
    },
    {
        name: "야타이 거리",
        showInInbox: true,
        type: "street-food",
        city: "Fukuoka",
        coordinates: { lat: 33.5892, lng: 130.4021 },
        cuisine: "길거리 음식",
        specialty: "라멘, 오뎅",
        priceRange: "¥500~1,500",
        features: ["야외 포장마차", "로컬 경험"],
        icon: "🏮"
    },
    {
        name: "텐진 호르몬",
        showInInbox: false,
        type: "japanese",
        city: "Fukuoka",
        coordinates: { lat: 33.59, lng: 130.4005 },
        cuisine: "곱창구이",
        specialty: "신선한 호르몬",
        priceRange: "¥2,500~4,000",
        features: ["신선한 재료", "현지인 추천"],
        icon: "🔥"
    },
    {
        name: "미조레 우동",
        showInInbox: false,
        type: "local",
        city: "Fukuoka",
        coordinates: { lat: 33.5885, lng: 130.4033 },
        cuisine: "우동",
        specialty: "고보텐 우동",
        priceRange: "¥600~1,000",
        features: ["부드러운 면", "가성비"],
        icon: "🍜"
    }
];

export default restaurants;
