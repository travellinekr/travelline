/**
 * 맛집 데이터
 * 
 * 이 파일은 FoodPicker 컴포넌트에서 사용하는 도시별 맛집 정보를 관리합니다.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 타입 정의
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type RestaurantType =
    | "korean"      // 한식
    | "japanese"    // 일식
    | "chinese"     // 중식
    | "western"     // 양식
    | "italian"     // 이탈리안
    | "french"      // 프렌치
    | "cafe"        // 카페/디저트
    | "street-food" // 길거리 음식
    | "fusion"      // 퓨전
    | "local";      // 현지 음식

export interface RestaurantData {
    name: string;
    type: RestaurantType;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    cuisine?: string;
    specialty?: string;
    priceRange?: string;
    michelin?: string;
    reservation?: boolean;
    openingHours?: string;
    features?: string[];
    icon?: string;
}

export const RESTAURANTS_DATA: Record<string, RestaurantData[]> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Osaka
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Osaka": [
        {
            name: "이치란 라멘 도톤보리",
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
            name: "마츠사카규 야키니쿠 M",
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
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Tokyo
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Tokyo": [
        {
            name: "스키야바시 지로",
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
    ],
};

