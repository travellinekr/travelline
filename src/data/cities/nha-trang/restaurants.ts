import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "랜턴스 레스토랑",
        type: "local",
        city: "Nha Trang",
        coordinates: { lat: 12.2388, lng: 109.1967 },
        cuisine: "베트남 요리",
        specialty: "분짜, 반쎄오",
        priceRange: "₫80,000~200,000",
        features: ["현지인 추천", "영어 메뉴"],
        icon: "🍜"
    },
    {
        name: "옌스 레스토랑",
        type: "local",
        city: "Nha Trang",
        coordinates: { lat: 12.245, lng: 109.1943 },
        cuisine: "홈메이드",
        specialty: "쌀국수, 스프링롤",
        priceRange: "₫50,000~150,000",
        features: ["가성비", "한국어 가능"],
        icon: "🥢"
    },
    {
        name: "세일링 클럽",
        type: "western",
        city: "Nha Trang",
        coordinates: { lat: 12.2487, lng: 109.1926 },
        cuisine: "퓨전 요리",
        specialty: "씨푸드 플래터",
        priceRange: "₫200,000~500,000",
        features: ["비치 뷰", "칵테일 바"],
        icon: "🍤"
    },
    {
        name: "락 깐",
        type: "local",
        city: "Nha Trang",
        coordinates: { lat: 12.2415, lng: 109.1976 },
        cuisine: "바비큐",
        specialty: "숯불 바비큐",
        priceRange: "₫100,000~300,000",
        features: ["로컬 맛집", "직접 구워먹기"],
        icon: "🍖"
    },
    {
        name: "관응온",
        type: "street-food",
        city: "Nha Trang",
        coordinates: { lat: 12.2456, lng: 109.195 },
        cuisine: "길거리 음식",
        specialty: "반미, 반짜",
        priceRange: "₫30,000~80,000",
        features: ["저렴", "현지 분위기"],
        icon: "🥖"
    }
];

export default restaurants;
