import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "반 미 38",
        showInInbox: true,
        type: "local",
        city: "Da Lat",
        coordinates: { lat: 11.9406, lng: 108.4349 },
        cuisine: "반미",
        specialty: "달랏식 바게트 샌드위치",
        priceRange: "₫15,000~30,000",
        features: ["현지 명물", "저렴"],
        icon: "🥖"
    },
    {
        name: "퀀 고이",
        showInInbox: true,
        type: "local",
        city: "Da Lat",
        coordinates: { lat: 11.9423, lng: 108.4367 },
        cuisine: "베트남 요리",
        specialty: "쌀국수, 분짜",
        priceRange: "₫50,000~120,000",
        features: ["현지 음식", "저렴"],
        icon: "🍜"
    },
    {
        name: "달랏 나이트 마켓 푸드존",
        showInInbox: true,
        type: "street-food",
        city: "Da Lat",
        coordinates: { lat: 11.9396, lng: 108.4327 },
        cuisine: "길거리 음식",
        specialty: "구운 옥수수, 아보카도 쉐이크",
        priceRange: "₫20,000~80,000",
        features: ["야시장", "저렴", "다양한 메뉴"],
        icon: "🌽"
    },
    {
        name: "더 달랏 카페",
        showInInbox: false,
        type: "cafe",
        city: "Da Lat",
        coordinates: { lat: 11.9420, lng: 108.4380 },
        cuisine: "카페",
        specialty: "달랏 커피, 딸기 디저트",
        priceRange: "₫40,000~100,000",
        features: ["달랏 특산 커피", "딸기"],
        icon: "☕"
    }
];

export default restaurants;
