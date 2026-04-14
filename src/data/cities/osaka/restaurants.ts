import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "이치란 라멘 도톤보리",
        showInInbox: true,
        type: "japanese",
        city: "Osaka",
        coordinates: { lat: 34.6686, lng: 135.5014 },
        cuisine: "라멘",
        specialty: "돈코츠 라멘",
        priceRange: "¥1,000~1,500",
        openingHours: "24/7",
        features: ["1인 좌석", "영어 메뉴", "24시간"],
        icon: "🍜"
    },
    {
        name: "키지 오코노미야키",
        showInInbox: true,
        type: "local",
        city: "Osaka",
        coordinates: { lat: 34.6954, lng: 135.497 },
        cuisine: "오코노미야키",
        specialty: "모던야키",
        priceRange: "¥1,000~2,000",
        reservation: true,
        openingHours: "11:30-22:00",
        features: ["현지인 추천", "긴 대기", "직접 조리"],
        icon: "🥞"
    },
    {
        name: "쿠쿠루 타코야키",
        showInInbox: true,
        type: "street-food",
        city: "Osaka",
        coordinates: { lat: 34.6692, lng: 135.5012 },
        cuisine: "타코야키",
        specialty: "문어 타코야키",
        priceRange: "¥500~800",
        openingHours: "10:00-22:00",
        features: ["테이크아웃", "저렴", "신선한 재료"],
        icon: "🐙"
    },
    {
        name: "하루코마 스시",
        showInInbox: false,
        type: "japanese",
        city: "Osaka",
        coordinates: { lat: 34.6943, lng: 135.4998 },
        cuisine: "스시",
        specialty: "참치 뱃살",
        priceRange: "¥3,000~5,000",
        openingHours: "11:00-22:00",
        features: ["회전 초밥", "가성비", "신선한 생선"],
        icon: "🍣"
    },
    {
        name: "쿠로몬 시장",
        showInInbox: false,
        type: "local",
        city: "Osaka",
        coordinates: { lat: 34.6662, lng: 135.5061 },
        cuisine: "해산물",
        specialty: "신선 회",
        priceRange: "¥500~3,000",
        openingHours: "8:00-18:00",
        features: ["시장", "즉석 요리", "다양한 먹거리"],
        icon: "🦞"
    },
    {
        name: "쇼우벤탕고 카페",
        showInInbox: false,
        type: "cafe",
        city: "Osaka",
        coordinates: { lat: 34.6951, lng: 135.4995 },
        cuisine: "디저트",
        specialty: "플루피 팬케이크",
        priceRange: "¥1,200~1,800",
        reservation: true,
        openingHours: "10:00-20:00",
        features: ["인스타그래머블", "예약 필수", "긴 대기"],
        icon: "🥞"
    },
    {
        name: "미미우 쿠시카츠",
        showInInbox: false,
        type: "local",
        city: "Osaka",
        coordinates: { lat: 34.6697, lng: 135.5064 },
        cuisine: "쿠시카츠",
        specialty: "오사카식 꼬치튀김",
        priceRange: "¥2,000~4,000",
        openingHours: "11:00~22:00",
        reservation: false,
        features: ["소스 2번 금지", "오사카 원조", "현지 인기"],
        icon: "🍢"
    },
    {
        name: "마츠사카규 야키니쿠 M",
        showInInbox: false,
        type: "japanese",
        city: "Osaka",
        coordinates: { lat: 34.7013, lng: 135.494 },
        cuisine: "야키니쿠",
        specialty: "마츠사카규",
        priceRange: "¥8,000~15,000",
        michelin: "1 Star",
        reservation: true,
        openingHours: "17:00-23:00",
        features: ["고급", "미슐랭", "프리미엄 소고기"],
        icon: "🥩"
    },
    {
        name: "쿠시카츠 다루마",
        showInInbox: false,
        type: "local",
        city: "Osaka",
        coordinates: { lat: 34.6668, lng: 135.5031 },
        cuisine: "꼬치 튀김",
        specialty: "쿠시카츠",
        priceRange: "¥1,500~3,000",
        openingHours: "11:00-22:30",
        features: ["로컬 맛집", "다양한 꼬치", "소스 2번 금지"],
        icon: "🍢"
    }
];

export default restaurants;
