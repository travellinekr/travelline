import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "난징 소롱보",
        type: "chinese",
        city: "Shanghai",
        coordinates: { lat: 31.2363, lng: 121.4806 },
        cuisine: "샤오롱바오",
        specialty: "삼선 샤오롱바오",
        priceRange: "¥50~100",
        features: ["상하이 대표", "저렴"],
        icon: "🥟"
    },
    {
        name: "양스 덤플링",
        type: "chinese",
        city: "Shanghai",
        coordinates: { lat: 31.2259, lng: 121.475 },
        cuisine: "팬프라이 만두",
        specialty: "생전바오",
        priceRange: "¥30~60",
        features: ["바삭한 만두", "현지 맛집"],
        icon: "🥟"
    },
    {
        name: "M 온 더 번드",
        type: "western",
        city: "Shanghai",
        coordinates: { lat: 31.2401, lng: 121.49 },
        cuisine: "유러피언",
        specialty: "파블로바",
        priceRange: "¥400~800",
        reservation: true,
        features: ["와이탄 뷰", "럭셔리"],
        icon: "🍷"
    },
    {
        name: "푸춘 샤오롱",
        type: "chinese",
        city: "Shanghai",
        coordinates: { lat: 31.2314, lng: 121.4753 },
        cuisine: "샤오롱바오",
        specialty: "크랩 샤오롱바오",
        priceRange: "¥80~150",
        features: ["게살 샤오롱바오", "인기"],
        icon: "🦀"
    },
    {
        name: "난징동루 먹자거리",
        type: "street-food",
        city: "Shanghai",
        coordinates: { lat: 31.2357, lng: 121.4821 },
        cuisine: "길거리 음식",
        specialty: "다양한 중국 음식",
        priceRange: "¥20~100",
        features: ["관광 명소", "야경"],
        icon: "🏮"
    }
];

export default restaurants;
