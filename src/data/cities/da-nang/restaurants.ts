import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "미꽝 바민",
        type: "local",
        city: "Da Nang",
        coordinates: { lat: 16.0544, lng: 108.2022 },
        cuisine: "베트남 면",
        specialty: "미꽝",
        priceRange: "₫30,000~60,000",
        features: ["다낭 대표", "저렴"],
        icon: "🍜"
    },
    {
        name: "반쎄오 바둔",
        type: "local",
        city: "Da Nang",
        coordinates: { lat: 16.0471, lng: 108.2068 },
        cuisine: "반쎄오",
        specialty: "바삭한 반쎄오",
        priceRange: "₫50,000~100,000",
        features: ["현지 인기", "직접 싸먹기"],
        icon: "🥞"
    },
    {
        name: "마담 란",
        type: "local",
        city: "Da Nang",
        coordinates: { lat: 16.0621, lng: 108.2233 },
        cuisine: "베트남 요리",
        specialty: "분보훼",
        priceRange: "₫100,000~200,000",
        features: ["깔끔", "영어 메뉴"],
        icon: "🍲"
    },
    {
        name: "논누억",
        type: "local",
        city: "Da Nang",
        coordinates: { lat: 16.039, lng: 108.2509 },
        cuisine: "해산물",
        specialty: "구이 해산물",
        priceRange: "₫150,000~400,000",
        features: ["신선", "다양한 해산물"],
        icon: "🦞"
    },
    {
        name: "한 시장",
        type: "street-food",
        city: "Da Nang",
        coordinates: { lat: 16.074, lng: 108.226 },
        cuisine: "길거리 음식",
        specialty: "반미, 분짜",
        priceRange: "₫20,000~50,000",
        features: ["시장", "저렴"],
        icon: "🥖"
    }
];

export default restaurants;
