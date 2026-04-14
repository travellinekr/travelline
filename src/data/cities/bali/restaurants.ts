import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "로카보어",
        showInInbox: true,
        type: "western",
        city: "Bali",
        coordinates: { lat: -8.5069, lng: 115.2625 },
        cuisine: "컨템포러리",
        specialty: "로컬 재료 요리",
        priceRange: "Rp200,000~400,000",
        reservation: true,
        features: ["우붓", "정글 뷰"],
        icon: "🌿"
    },
    {
        name: "워룽 마데",
        showInInbox: true,
        type: "local",
        city: "Bali",
        coordinates: { lat: -8.65, lng: 115.2167 },
        cuisine: "바비 굴링",
        specialty: "통돼지 바비큐",
        priceRange: "Rp50,000~100,000",
        features: ["발리 대표", "저렴"],
        icon: "🐷"
    },
    {
        name: "메라키 셰프",
        showInInbox: true,
        type: "italian",
        city: "Bali",
        coordinates: { lat: -8.5101, lng: 115.2631 },
        cuisine: "이탈리안",
        specialty: "파스타, 피자",
        priceRange: "Rp150,000~300,000",
        features: ["우붓", "라이스 테라스 뷰"],
        icon: "🍝"
    },
    {
        name: "씨 서커스",
        showInInbox: false,
        type: "fusion",
        city: "Bali",
        coordinates: { lat: -8.6815, lng: 115.1344 },
        cuisine: "퓨전 요리",
        specialty: "씨푸드",
        priceRange: "Rp200,000~500,000",
        features: ["비치 프론트", "선셋 뷰"],
        icon: "🌅"
    },
    {
        name: "나시 아얌 끄둘",
        showInInbox: false,
        type: "street-food",
        city: "Bali",
        coordinates: { lat: -8.7185, lng: 115.1713 },
        cuisine: "길거리 음식",
        specialty: "나시 아얌",
        priceRange: "Rp15,000~30,000",
        features: ["초저렴", "현지 맛"],
        icon: "🍗"
    }
];

export default restaurants;
