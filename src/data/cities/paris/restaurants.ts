import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "르 쥘 베른",
        showInInbox: true,
        type: "french",
        city: "Paris",
        coordinates: { lat: 48.8579, lng: 2.2942 },
        cuisine: "프랑스 요리",
        specialty: "에펠탑 뷰 프렌치 파인다이닝",
        priceRange: "€100~250",
        features: ["에펠탑 내부", "미슐랭", "뷰 맛집"],
        icon: "🍽️"
    },
    {
        name: "레 두 마고",
        showInInbox: true,
        type: "cafe",
        city: "Paris",
        coordinates: { lat: 48.8541, lng: 2.3332 },
        cuisine: "카페",
        specialty: "크루아상, 카페 크림",
        priceRange: "€10~30",
        features: ["생제르맹 명소", "역사적 카페", "분위기"],
        icon: "☕"
    },
    {
        name: "라뒤레 샹제리제",
        showInInbox: true,
        type: "cafe",
        city: "Paris",
        coordinates: { lat: 48.8715, lng: 2.3085 },
        cuisine: "파티스리",
        specialty: "마카롱, 에클레어",
        priceRange: "€5~30",
        features: ["유명 디저트", "마카롱 원조", "선물용"],
        icon: "🍰"
    },
    {
        name: "오베르주 니콜라 플라멜",
        showInInbox: false,
        type: "french",
        city: "Paris",
        coordinates: { lat: 48.8604, lng: 2.3518 },
        cuisine: "프랑스 요리",
        specialty: "현대 프렌치 요리",
        priceRange: "€50~120",
        features: ["역사적 건물", "마레 지구", "분위기"],
        icon: "🍷"
    },
    {
        name: "르 팔라스 디네",
        showInInbox: false,
        type: "western",
        city: "Paris",
        coordinates: { lat: 48.8720, lng: 2.3380 },
        cuisine: "브라세리",
        specialty: "스테이크 프리트, 홍합",
        priceRange: "€25~60",
        features: ["오페라 지구", "전통 브라세리"],
        icon: "🥐"
    }
];

export default restaurants;
