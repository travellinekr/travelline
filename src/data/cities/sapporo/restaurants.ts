import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "스프 카레 가루다",
        showInInbox: true,
        type: "local",
        city: "Sapporo",
        coordinates: { lat: 43.0621, lng: 141.3545 },
        cuisine: "수프 카레",
        specialty: "치킨 수프 카레",
        priceRange: "¥1,200~1,800",
        features: ["삿포로 명물", "매콤"],
        icon: "🍛"
    },
    {
        name: "스시젠 본점",
        showInInbox: true,
        type: "japanese",
        city: "Sapporo",
        coordinates: { lat: 43.065, lng: 141.353 },
        cuisine: "스시",
        specialty: "회",
        priceRange: "¥3,000~5,000",
        features: ["신선한 해산물", "현지 인기"],
        icon: "🦀"
    },
    {
        name: "라멘 요코초",
        showInInbox: true,
        type: "street-food",
        city: "Sapporo",
        coordinates: { lat: 43.0546, lng: 141.3505 },
        cuisine: "라멘",
        specialty: "미소 라멘",
        priceRange: "¥800~1,200",
        features: ["라멘 골목", "다양한 가게"],
        icon: "🍜"
    },
    {
        name: "징기스칸 다루마",
        showInInbox: false,
        type: "local",
        city: "Sapporo",
        coordinates: { lat: 43.0557, lng: 141.3492 },
        cuisine: "징기스칸",
        specialty: "양고기 구이",
        priceRange: "¥2,000~3,500",
        features: ["삿포로 대표", "무한리필"],
        icon: "🍖"
    },
    {
        name: "니조 시장",
        showInInbox: false,
        type: "local",
        city: "Sapporo",
        coordinates: { lat: 43.0668, lng: 141.3551 },
        cuisine: "해산물",
        specialty: "우니, 연어알 덮밥",
        priceRange: "¥1,500~3,000",
        features: ["시장", "신선"],
        icon: "🦞"
    }
];

export default restaurants;
