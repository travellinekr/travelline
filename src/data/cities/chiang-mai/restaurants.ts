import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "카오 소이 람두안",
        showInInbox: true,
        type: "local",
        city: "Chiang Mai",
        coordinates: { lat: 18.7880, lng: 98.9922 },
        cuisine: "카오 소이",
        specialty: "치앙마이 전통 국수",
        priceRange: "฿50~100",
        features: ["현지 맛집", "저렴"],
        icon: "🍜"
    },
    {
        name: "SP 치킨",
        showInInbox: true,
        type: "local",
        city: "Chiang Mai",
        coordinates: { lat: 18.7950, lng: 98.9680 },
        cuisine: "닭요리",
        specialty: "숯불 치킨",
        priceRange: "฿80~150",
        features: ["현지 인기", "숯불향"],
        icon: "🍗"
    },
    {
        name: "쾐드 게우",
        showInInbox: true,
        type: "local",
        city: "Chiang Mai",
        coordinates: { lat: 18.7870, lng: 98.9890 },
        cuisine: "태국 북부 요리",
        specialty: "북부 스타일 돼지고기",
        priceRange: "฿60~120",
        features: ["전통 맛", "현지인 추천"],
        icon: "🥩"
    },
    {
        name: "더 리버사이드",
        showInInbox: false,
        type: "western",
        city: "Chiang Mai",
        coordinates: { lat: 18.7850, lng: 98.9980 },
        cuisine: "서양식",
        specialty: "스테이크, 파스타",
        priceRange: "฿200~500",
        features: ["강변 뷰", "분위기 좋음"],
        icon: "🥗"
    },
    {
        name: "힌레키 카페",
        showInInbox: false,
        type: "cafe",
        city: "Chiang Mai",
        coordinates: { lat: 18.7910, lng: 98.9700 },
        cuisine: "카페",
        specialty: "스페셜티 커피, 디저트",
        priceRange: "฿80~150",
        features: ["인스타 명소", "분위기"],
        icon: "☕"
    }
];

export default restaurants;
