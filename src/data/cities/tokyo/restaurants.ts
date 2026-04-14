import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "스키야바시 지로",
        showInInbox: true,
        type: "japanese",
        city: "Tokyo",
        coordinates: { lat: 35.6654, lng: 135.7632 },
        cuisine: "스시",
        specialty: "오마카세",
        priceRange: "¥40,000~50,000",
        michelin: "3 Stars",
        reservation: true,
        openingHours: "11:30-14:00, 17:30-20:30",
        features: ["미슐랭 3스타", "예약 필수", "지로의 꿈"],
        icon: "🍣"
    },
    {
        name: "이치란 시부야",
        showInInbox: true,
        type: "japanese",
        city: "Tokyo",
        coordinates: { lat: 35.6595, lng: 139.7004 },
        cuisine: "라멘",
        specialty: "돈코츠 라멘",
        priceRange: "¥1,000~1,500",
        openingHours: "24/7",
        features: ["1인 좌석", "영어 메뉴", "24시간"],
        icon: "🍜"
    },
    {
        name: "츠키지 장외시장",
        showInInbox: true,
        type: "local",
        city: "Tokyo",
        coordinates: { lat: 35.6654, lng: 139.7707 },
        cuisine: "해산물",
        specialty: "참치 덮밥",
        priceRange: "¥1,500~3,000",
        openingHours: "5:00-14:00",
        features: ["아침 시장", "신선한 회", "다양한 먹거리"],
        icon: "🐟"
    },
    {
        name: "나리사와",
        showInInbox: false,
        type: "fusion",
        city: "Tokyo",
        coordinates: { lat: 35.6655, lng: 139.7235 },
        cuisine: "이노베이티브",
        specialty: "사토야마 요리",
        priceRange: "¥25,000~35,000",
        michelin: "2 Stars",
        reservation: true,
        openingHours: "12:00-15:00, 18:00-23:00",
        features: ["미슐랭 2스타", "창작 요리", "친환경"],
        icon: "🌿"
    },
    {
        name: "아후리 라멘",
        showInInbox: false,
        type: "japanese",
        city: "Tokyo",
        coordinates: { lat: 35.647, lng: 139.7095 },
        cuisine: "라멘",
        specialty: "유자 라멘",
        priceRange: "¥1,200~1,800",
        openingHours: "11:00-22:00",
        features: ["상큼한 맛", "건강한 라멘", "영어 메뉴"],
        icon: "🍋"
    },
    {
        name: "긴자 코쥬",
        showInInbox: false,
        type: "japanese",
        city: "Tokyo",
        coordinates: { lat: 35.6731, lng: 139.764 },
        cuisine: "카이세키",
        specialty: "계절 요리",
        priceRange: "¥30,000~50,000",
        michelin: "2 Stars",
        reservation: true,
        openingHours: "12:00-14:00, 18:00-22:00",
        features: ["미슐랭 2스타", "고급 일식", "계절 재료"],
        icon: "🍱"
    },
    {
        name: "빌즈 오모테산도",
        showInInbox: false,
        type: "cafe",
        city: "Tokyo",
        coordinates: { lat: 35.6653, lng: 139.7125 },
        cuisine: "브런치",
        specialty: "리코타 팬케이크",
        priceRange: "¥2,000~3,500",
        openingHours: "8:30-21:00",
        features: ["브런치 맛집", "테라스 좌석", "긴 대기"],
        icon: "🥞"
    },
    {
        name: "규카츠 모토무라",
        showInInbox: false,
        type: "japanese",
        city: "Tokyo",
        coordinates: { lat: 35.6897, lng: 139.6922 },
        cuisine: "규카츠",
        specialty: "소고기 카츠",
        priceRange: "¥1,500~2,500",
        openingHours: "11:00-22:00",
        features: ["레어 조리", "바삭한 튀김", "가성비"],
        icon: "🥩"
    }
];

export default restaurants;
