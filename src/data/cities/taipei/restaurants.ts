import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "딘타이펑",
        type: "chinese",
        city: "Taipei",
        coordinates: { lat: 25.0418, lng: 121.543 },
        cuisine: "샤오롱바오",
        specialty: "샤오롱바오",
        priceRange: "NT$400~800",
        michelin: "1 Star",
        reservation: true,
        features: ["미슐랭 1스타", "세계 10대 레스토랑"],
        icon: "🥟"
    },
    {
        name: "스린 야시장",
        type: "street-food",
        city: "Taipei",
        coordinates: { lat: 25.0875, lng: 121.5242 },
        cuisine: "야시장",
        specialty: "대계배",
        priceRange: "NT$50~200",
        features: ["타이베이 대표", "다양한 먹거리"],
        icon: "🏮"
    },
    {
        name: "아종 면선",
        type: "local",
        city: "Taipei",
        coordinates: { lat: 25.0441, lng: 121.5133 },
        cuisine: "면선",
        specialty: "굴 면선",
        priceRange: "NT$60~100",
        features: ["현지 맛집", "저렴"],
        icon: "🍜"
    },
    {
        name: "영캉지에 망고빙수",
        type: "cafe",
        city: "Taipei",
        coordinates: { lat: 25.0331, lng: 121.5286 },
        cuisine: "빙수",
        specialty: "망고빙수",
        priceRange: "NT$180~280",
        features: ["타이베이 대표", "신선한 망고"],
        icon: "🥭"
    },
    {
        name: "진펑 육포",
        type: "local",
        city: "Taipei",
        coordinates: { lat: 25.0458, lng: 121.515 },
        cuisine: "육포",
        specialty: "돼지고기 육포",
        priceRange: "NT$300~600",
        features: ["선물용", "달콤짭조름"],
        icon: "🥓"
    }
];

export default restaurants;
