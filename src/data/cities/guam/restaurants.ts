import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "피시아이 마린 파크",
        showInInbox: true,
        type: "western",
        city: "Guam",
        coordinates: { lat: 13.4385, lng: 144.7980 },
        cuisine: "씨푸드",
        specialty: "신선한 해산물, 수중 레스토랑",
        priceRange: "$30~80",
        features: ["수중 전망", "독특한 경험"],
        icon: "🐟"
    },
    {
        name: "자레타오 파밀리아",
        showInInbox: true,
        type: "local",
        city: "Guam",
        coordinates: { lat: 13.5140, lng: 144.7960 },
        cuisine: "차모로 요리",
        specialty: "바비큐, 빨간 밥",
        priceRange: "$15~40",
        features: ["현지 전통 음식", "차모로 문화"],
        icon: "🍖"
    },
    {
        name: "투몬 베이 카페",
        showInInbox: true,
        type: "western",
        city: "Guam",
        coordinates: { lat: 13.5170, lng: 144.7990 },
        cuisine: "아메리칸",
        specialty: "버거, 파스타",
        priceRange: "$20~50",
        features: ["오션뷰", "캐주얼"],
        icon: "🍔"
    },
    {
        name: "아웃백 스테이크하우스",
        showInInbox: false,
        type: "western",
        city: "Guam",
        coordinates: { lat: 13.5200, lng: 144.8020 },
        cuisine: "스테이크",
        specialty: "립아이, 시즐러",
        priceRange: "$30~70",
        features: ["한국인 인기", "스테이크"],
        icon: "🥩"
    }
];

export default restaurants;
