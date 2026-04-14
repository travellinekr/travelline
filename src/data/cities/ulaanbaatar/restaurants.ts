import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "모던 노마즈",
        showInInbox: true,
        type: "local",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9070, lng: 106.9177 },
        cuisine: "몽골 요리",
        specialty: "호르혹, 보즈",
        priceRange: "₮15,000~40,000",
        features: ["전통 몽골 요리", "관광객 인기"],
        icon: "🥩"
    },
    {
        name: "몽골리안 바비큐",
        showInInbox: true,
        type: "local",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9080, lng: 106.9150 },
        cuisine: "바비큐",
        specialty: "양고기 바비큐",
        priceRange: "₮20,000~50,000",
        features: ["양고기", "몽골 전통"],
        icon: "🍖"
    },
    {
        name: "버드나무 카페",
        showInInbox: true,
        type: "cafe",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9065, lng: 106.9170 },
        cuisine: "카페",
        specialty: "커피, 케이크",
        priceRange: "₮8,000~20,000",
        features: ["현지 카페", "분위기"],
        icon: "☕"
    },
    {
        name: "칸 브루어리",
        showInInbox: false,
        type: "western",
        city: "Ulaanbaatar",
        coordinates: { lat: 47.9090, lng: 106.9200 },
        cuisine: "펍 음식",
        specialty: "크래프트 맥주, 버거",
        priceRange: "₮25,000~60,000",
        features: ["수제 맥주", "외국인 인기"],
        icon: "🍺"
    }
];

export default restaurants;
