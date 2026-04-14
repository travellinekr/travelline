import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "제이 파이",
        showInInbox: true,
        type: "local",
        city: "Bangkok",
        coordinates: { lat: 13.7495, lng: 100.525 },
        cuisine: "카오팟 푸",
        specialty: "게살 볶음밥",
        priceRange: "฿300~500",
        michelin: "1 Star",
        features: ["미슐랭 1스타", "긴 대기"],
        icon: "🦀"
    },
    {
        name: "팟타이 팁사마이",
        showInInbox: true,
        type: "local",
        city: "Bangkok",
        coordinates: { lat: 13.7543, lng: 100.4998 },
        cuisine: "팟타이",
        specialty: "계란말이 팟타이",
        priceRange: "฿80~150",
        features: ["70년 전통", "현지 인기"],
        icon: "🍜"
    },
    {
        name: "숨분 씨푸드",
        showInInbox: true,
        type: "local",
        city: "Bangkok",
        coordinates: { lat: 13.7278, lng: 100.5635 },
        cuisine: "해산물",
        specialty: "카레 쇼트 크랩",
        priceRange: "฿500~1,500",
        features: ["대형 레스토랑", "다양한 메뉴"],
        icon: "🦞"
    },
    {
        name: "짜뚜짝 주말시장",
        showInInbox: false,
        type: "street-food",
        city: "Bangkok",
        coordinates: { lat: 13.7998, lng: 100.55 },
        cuisine: "길거리 음식",
        specialty: "코코넛 아이스크림",
        priceRange: "฿30~100",
        features: ["초대형 시장", "저렴"],
        icon: "🥥"
    },
    {
        name: "망고 탱고",
        showInInbox: false,
        type: "cafe",
        city: "Bangkok",
        coordinates: { lat: 13.7469, lng: 100.5345 },
        cuisine: "망고 디저트",
        specialty: "망고 찹쌀밥",
        priceRange: "฿150~250",
        features: ["관광객 필수", "신선한 망고"],
        icon: "🥭"
    }
];

export default restaurants;
