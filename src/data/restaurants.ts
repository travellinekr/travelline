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
            features: ["1인 좌석", "영어 메뉴"],
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
            features: ["현지인 추천", "긴 대기"],
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
            features: ["테이크아웃", "저렴"],
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
            features: ["회전 초밥", "가성비"],
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
            features: ["시장", "즉석 요리"],
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
            features: ["인스타그래머블", "예약 필수"],
            icon: "🥞"
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
            coordinates: { lat: 35.6654, lng: 139.7632 },
            cuisine: "스시",
            specialty: "오마카세",
            priceRange: "¥40,000~50,000",
            michelin: "3 Stars",
            reservation: true,
            features: ["미슐랭 3스타", "예약 필수"],
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
            features: ["1인 좌석", "24시간"],
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
            features: ["아침 시장", "신선한 회"],
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
            features: ["미슐랭 2스타", "창작 요리"],
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
            features: ["상큼한 맛", "건강한 라멘"],
            icon: "🍋"
        },
        {
            name: "빌즈 오모테산도",
            type: "cafe",
            city: "Tokyo",
            coordinates: { lat: 35.6653, lng: 139.7125 },
            cuisine: "브런치",
            specialty: "리코타 팬케이크",
            priceRange: "¥2,000~3,500",
            features: ["브런치 맛집", "긴 대기"],
            icon: "🥞"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Fukuoka
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Fukuoka": [
        {
            name: "하카타 잇푸도",
            type: "japanese",
            city: "Fukuoka",
            coordinates: { lat: 33.5904, lng: 130.4016 },
            cuisine: "라멘",
            specialty: "돈코츠 라멘",
            priceRange: "¥800~1,200",
            features: ["현지 인기", "진한 국물"],
            icon: "🍜"
        },
        {
            name: "모츠나베 야마나카",
            type: "local",
            city: "Fukuoka",
            coordinates: { lat: 33.5895, lng: 130.399 },
            cuisine: "모츠나베",
            specialty: "소곱창전골",
            priceRange: "¥2,000~3,500",
            reservation: true,
            features: ["현지 맛집", "예약 추천"],
            icon: "🍲"
        },
        {
            name: "야타이 거리",
            type: "street-food",
            city: "Fukuoka",
            coordinates: { lat: 33.5892, lng: 130.4021 },
            cuisine: "길거리 음식",
            specialty: "라멘, 오뎅",
            priceRange: "¥500~1,500",
            features: ["야외 포장마차", "로컬 경험"],
            icon: "🏮"
        },
        {
            name: "텐진 호르몬",
            type: "japanese",
            city: "Fukuoka",
            coordinates: { lat: 33.59, lng: 130.4005 },
            cuisine: "곱창구이",
            specialty: "신선한 호르몬",
            priceRange: "¥2,500~4,000",
            features: ["신선한 재료", "현지인 추천"],
            icon: "🔥"
        },
        {
            name: "미조레 우동",
            type: "local",
            city: "Fukuoka",
            coordinates: { lat: 33.5885, lng: 130.4033 },
            cuisine: "우동",
            specialty: "고보텐 우동",
            priceRange: "¥600~1,000",
            features: ["부드러운 면", "가성비"],
            icon: "🍜"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Sapporo
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Sapporo": [
        {
            name: "스프 카레 가루다",
            type: "local",
            city: "Sapporo",
            coordinates: { lat: 43.0621, lng: 141.3545 },
            cuisine: "수프 카레",
            specialty: "치킨 수프 카레",
            priceRange: "¥1,200~1,800",
            features: ["삿포로 명물", "매콤"],
            icon: "🍛"
        },
        {
            name: "스시젠 본점",
            type: "japanese",
            city: "Sapporo",
            coordinates: { lat: 43.065, lng: 141.353 },
            cuisine: "스시",
            specialty: "회",
            priceRange: "¥3,000~5,000",
            features: ["신선한 해산물", "현지 인기"],
            icon: "🦀"
        },
        {
            name: "라멘 요코초",
            type: "street-food",
            city: "Sapporo",
            coordinates: { lat: 43.0546, lng: 141.3505 },
            cuisine: "라멘",
            specialty: "미소 라멘",
            priceRange: "¥800~1,200",
            features: ["라멘 골목", "다양한 가게"],
            icon: "🍜"
        },
        {
            name: "징기스칸 다루마",
            type: "local",
            city: "Sapporo",
            coordinates: { lat: 43.0557, lng: 141.3492 },
            cuisine: "징기스칸",
            specialty: "양고기 구이",
            priceRange: "¥2,000~3,500",
            features: ["삿포로 대표", "무한리필"],
            icon: "🍖"
        },
        {
            name: "니조 시장",
            type: "local",
            city: "Sapporo",
            coordinates: { lat: 43.0668, lng: 141.3551 },
            cuisine: "해산물",
            specialty: "우니, 연어알 덮밥",
            priceRange: "¥1,500~3,000",
            features: ["시장", "신선"],
            icon: "🦞"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Okinawa
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Okinawa": [
        {
            name: "우미카지 테라스",
            type: "fusion",
            city: "Okinawa",
            coordinates: { lat: 26.1946, lng: 127.6464 },
            cuisine: "퓨전 요리",
            specialty: "타코스, 타코라이스",
            priceRange: "¥1,500~2,500",
            features: ["오션뷰", "인생샷"],
            icon: "🌮"
        },
        {
            name: "제이크스 스테이크하우스",
            type: "western",
            city: "Okinawa",
            coordinates: { lat: 26.3358, lng: 127.8011 },
            cuisine: "스테이크",
            specialty: "안구스 비프",
            priceRange: "¥3,000~6,000",
            features: ["미군 기지 스타일", "두툼한 스테이크"],
            icon: "🥩"
        },
        {
            name: "나하 공설시장",
            type: "local",
            city: "Okinawa",
            coordinates: { lat: 26.216, lng: 127.6774 },
            cuisine: "시장 음식",
            specialty: "고야 참푸루",
            priceRange: "¥800~1,800",
            features: ["로컬 시장", "현지 음식"],
            icon: "🥘"
        },
        {
            name: "C&C 브렉퍼스트",
            type: "cafe",
            city: "Okinawa",
            coordinates: { lat: 26.415, lng: 127.7155 },
            cuisine: "브런치",
            specialty: "아사이볼, 팬케이크",
            priceRange: "¥1,200~2,000",
            features: ["건강식", "해변 근처"],
            icon: "🥥"
        },
        {
            name: "나키진 소키소바",
            type: "local",
            city: "Okinawa",
            coordinates: { lat: 26.688, lng: 127.929 },
            cuisine: "오키나와 소바",
            specialty: "소키소바",
            priceRange: "¥700~1,200",
            features: ["현지 맛집", "부드러운 돼지갈비"],
            icon: "🍜"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Taipei
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Taipei": [
        {
            name: "딘타이펑",
            type: "chinese",
            city: "Taipei",
            coordinates: { lat: 25.0418, lng: 121.543 },
            cuisine: "샤오롱바오",
            specialty: "샤오롱바오",
            priceRange: "NT$400~800",
            michelin: "1 Star",
            reservation: true,
            features: ["미슐랭 1스타", "세계 10대 레스토랑"],
            icon: "🥟"
        },
        {
            name: "스린 야시장",
            type: "street-food",
            city: "Taipei",
            coordinates: { lat: 25.0875, lng: 121.5242 },
            cuisine: "야시장",
            specialty: "대계배",
            priceRange: "NT$50~200",
            features: ["타이베이 대표", "다양한 먹거리"],
            icon: "🏮"
        },
        {
            name: "아종 면선",
            type: "local",
            city: "Taipei",
            coordinates: { lat: 25.0441, lng: 121.5133 },
            cuisine: "면선",
            specialty: "굴 면선",
            priceRange: "NT$60~100",
            features: ["현지 맛집", "저렴"],
            icon: "🍜"
        },
        {
            name: "영캉지에 망고빙수",
            type: "cafe",
            city: "Taipei",
            coordinates: { lat: 25.0331, lng: 121.5286 },
            cuisine: "빙수",
            specialty: "망고빙수",
            priceRange: "NT$180~280",
            features: ["타이베이 대표", "신선한 망고"],
            icon: "🥭"
        },
        {
            name: "진펑 육포",
            type: "local",
            city: "Taipei",
            coordinates: { lat: 25.0458, lng: 121.515 },
            cuisine: "육포",
            specialty: "돼지고기 육포",
            priceRange: "NT$300~600",
            features: ["선물용", "달콤짭조름"],
            icon: "🥓"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Shanghai
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Shanghai": [
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
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Dalian
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Dalian": [
        {
            name: "텐텐 위위안",
            type: "chinese",
            city: "Dalian",
            coordinates: { lat: 38.9135, lng: 121.6147 },
            cuisine: "해산물",
            specialty: "전복죽",
            priceRange: "¥80~150",
            features: ["신선한 해산물", "가성비"],
            icon: "🦞"
        },
        {
            name: "러시아 풍경거리",
            type: "western",
            city: "Dalian",
            coordinates: { lat: 38.9189, lng: 121.6445 },
            cuisine: "러시아 요리",
            specialty: "보르시치",
            priceRange: "¥60~120",
            features: ["이색적", "유럽 분위기"],
            icon: "🥘"
        },
        {
            name: "톈진제 간식거리",
            type: "street-food",
            city: "Dalian",
            coordinates: { lat: 38.9151, lng: 121.6221 },
            cuisine: "길거리 음식",
            specialty: "꼬치, 군밤",
            priceRange: "¥10~50",
            features: ["보행자 거리", "저렴"],
            icon: "🍢"
        },
        {
            name: "달리안 만두",
            type: "chinese",
            city: "Dalian",
            coordinates: { lat: 38.9168, lng: 121.6185 },
            cuisine: "만두",
            specialty: "해산물 만두",
            priceRange: "¥30~60",
            features: ["현지 스타일", "푸짐"],
            icon: "🥟"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Da Nang
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Nang": [
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
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Bangkok
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bangkok": [
        {
            name: "제이 파이",
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
            type: "cafe",
            city: "Bangkok",
            coordinates: { lat: 13.7469, lng: 100.5345 },
            cuisine: "망고 디저트",
            specialty: "망고 찹쌀밥",
            priceRange: "฿150~250",
            features: ["관광객 필수", "신선한 망고"],
            icon: "🥭"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Nha Trang
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Nha Trang": [
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
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Bali
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bali": [
        {
            name: "로카보어",
            type: "western",
            city: "Bali",
            coordinates: { lat: -8.5069, lng: 115.2625 },
            cuisine: "컨템포러리",
            specialty: "로컬 재료 요리",
            priceRange: "Rp200,000~400,000",
            reservation: true,
            features: ["우붓", "정글 뷰"],
            icon: "🌿"
        },
        {
            name: "워룽 마데",
            type: "local",
            city: "Bali",
            coordinates: { lat: -8.65, lng: 115.2167 },
            cuisine: "바비 굴링",
            specialty: "통돼지 바비큐",
            priceRange: "Rp50,000~100,000",
            features: ["발리 대표", "저렴"],
            icon: "🐷"
        },
        {
            name: "메라키 셰프",
            type: "italian",
            city: "Bali",
            coordinates: { lat: -8.5101, lng: 115.2631 },
            cuisine: "이탈리안",
            specialty: "파스타, 피자",
            priceRange: "Rp150,000~300,000",
            features: ["우붓", "라이스 테라스 뷰"],
            icon: "🍝"
        },
        {
            name: "씨 서커스",
            type: "fusion",
            city: "Bali",
            coordinates: { lat: -8.6815, lng: 115.1344 },
            cuisine: "퓨전 요리",
            specialty: "씨푸드",
            priceRange: "Rp200,000~500,000",
            features: ["비치 프론트", "선셋 뷰"],
            icon: "🌅"
        },
        {
            name: "나시 아얌 끄둘",
            type: "street-food",
            city: "Bali",
            coordinates: { lat: -8.7185, lng: 115.1713 },
            cuisine: "길거리 음식",
            specialty: "나시 아얌",
            priceRange: "Rp15,000~30,000",
            features: ["초저렴", "현지 맛"],
            icon: "🍗"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Cebu
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Cebu": [
        {
            name: "레촌 벨리",
            type: "local",
            city: "Cebu",
            coordinates: { lat: 10.3156, lng: 123.8854 },
            cuisine: "레촌",
            specialty: "통돼지 구이",
            priceRange: "₱300~600",
            features: ["세부 명물", "바삭"],
            icon: "🐖"
        },
        {
            name: "라파스 라파스",
            type: "local",
            city: "Cebu",
            coordinates: { lat: 10.2935, lng: 123.9022 },
            cuisine: "씨푸드",
            specialty: "신선한 해산물",
            priceRange: "₱500~1,500",
            features: ["시장 옆", "저렴"],
            icon: "🦞"
        },
        {
            name: "하우스 오브 레촌",
            type: "local",
            city: "Cebu",
            coordinates: { lat: 10.3113, lng: 123.8925 },
            cuisine: "필리핀 요리",
            specialty: "레촌, 스페어립",
            priceRange: "₱300~800",
            features: ["관광객 인기", "푸짐"],
            icon: "🍖"
        },
        {
            name: "지코스 레촌",
            type: "local",
            city: "Cebu",
            coordinates: { lat: 10.3081, lng: 123.8948 },
            cuisine: "바비큐",
            specialty: "숯불 바비큐",
            priceRange: "₱200~500",
            features: ["저렴", "숯불향"],
            icon: "🔥"
        },
        {
            name: "수툴릴 시장",
            type: "street-food",
            city: "Cebu",
            coordinates: { lat: 10.3074, lng: 123.8926 },
            cuisine: "길거리 음식",
            specialty: "바비큐 꼬치",
            priceRange: "₱50~200",
            features: ["야시장", "저렴"],
            icon: "🍢"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Chiang Mai
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Chiang Mai": [
        {
            name: "카오 소이 람두안",
            type: "local",
            city: "Chiang Mai",
            coordinates: { lat: 18.7878, lng: 98.993 },
            cuisine: "카오 소이",
            specialty: "코코넛 카레 국수",
            priceRange: "฿50~100",
            features: ["치앙마이 대표", "저렴"],
            icon: "🍜"
        },
        {
            name: "SP 치킨",
            type: "local",
            city: "Chiang Mai",
            coordinates: { lat: 18.7953, lng: 98.9851 },
            cuisine: "프라이드 치킨",
            specialty: "바삭 치킨",
            priceRange: "฿80~150",
            features: ["바삭바삭", "가성비"],
            icon: "🍗"
        },
        {
            name: "쾐드 게우",
            type: "local",
            city: "Chiang Mai",
            coordinates: { lat: 18.7885, lng: 98.9924 },
            cuisine: "태국 요리",
            specialty: "팟타이",
            priceRange: "฿60~120",
            features: ["오래된 식당", "현지 맛"],
            icon: "🥘"
        },
        {
            name: "더 리버사이드",
            type: "western",
            city: "Chiang Mai",
            coordinates: { lat: 18.7909, lng: 98.9998 },
            cuisine: "퓨전 요리",
            specialty: "립, 스테이크",
            priceRange: "฿200~500",
            features: ["핑강 뷰", "라이브 음악"],
            icon: "��"
        },
        {
            name: "힌레키 카페",
            type: "cafe",
            city: "Chiang Mai",
            coordinates: { lat: 18.7865, lng: 98.9915 },
            cuisine: "카페",
            specialty: "타이 티, 케이크",
            priceRange: "฿80~150",
            features: ["감성 카페", "조용"],
            icon: "��"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Da Lat
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Lat": [
        {
            name: "다 콴",
            type: "local",
            city: "Da Lat",
            coordinates: { lat: 11.9404, lng: 108.4583 },
            cuisine: "바비큐",
            specialty: "숯불 바비큐",
            priceRange: "₫100,000~250,000",
            features: ["현지 인기", "푸짐"],
            icon: "🍖"
        },
        {
            name: "가우 타찌",
            type: "street-food",
            city: "Da Lat",
            coordinates: { lat: 11.9365, lng: 108.438 },
            cuisine: "길거리 음식",
            specialty: "소이 소시지",
            priceRange: "₫20,000~40,000",
            features: ["저렴", "간식"],
            icon: "🥖"
        },
        {
            name: "V 카페",
            type: "cafe",
            city: "Da Lat",
            coordinates: { lat: 11.9447, lng: 108.442 },
            cuisine: "커피",
            specialty: "베트남 커피",
            priceRange: "₫30,000~70,000",
            features: ["고산 커피", "전망"],
            icon: "☕"
        },
        {
            name: "달랏 야시장",
            type: "street-food",
            city: "Da Lat",
            coordinates: { lat: 11.9367, lng: 108.4368 },
            cuisine: "길거리 음식",
            specialty: "군옥수수, 딸기",
            priceRange: "₫10,000~50,000",
            features: ["다양한 먹거리", "분위기"],
            icon: "🌽"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Guam
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Guam": [
        {
            name: "프로아",
            type: "local",
            city: "Guam",
            coordinates: { lat: 13.5166, lng: 144.7969 },
            cuisine: "차모로 요리",
            specialty: "적소고기",
            priceRange: "$20~40",
            features: ["괌 전통", "대표 맛집"],
            icon: "🥩"
        },
        {
            name: "메스클라 도스",
            type: "fusion",
            city: "Guam",
            coordinates: { lat: 13.5186, lng: 144.7992 },
            cuisine: "챠모로 퓨전",
            specialty: "랍스터, 스테이크",
            priceRange: "$30~80",
            reservation: true,
            features: ["고급", "전망 좋음"],
            icon: "🦞"
        },
        {
            name: "카프리치오사",
            type: "italian",
            city: "Guam",
            coordinates: { lat: 13.5109, lng: 144.8006 },
            cuisine: "이탈리안",
            specialty: "파스타, 피자",
            priceRange: "$15~35",
            features: ["일본계", "푸짐"],
            icon: "🍝"
        },
        {
            name: "피카스 카페",
            type: "cafe",
            city: "Guam",
            coordinates: { lat: 13.5134, lng: 144.7985 },
            cuisine: "브런치",
            specialty: "팬케이크",
            priceRange: "$12~25",
            features: ["조식 맛집", "미국 스타일"],
            icon: "🥞"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Ulaanbaatar
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Ulaanbaatar": [
        {
            name: "모던 노마즈",
            type: "local",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9191, lng: 106.9178 },
            cuisine: "몽골 전통",
            specialty: "허르헉, 보즈",
            priceRange: "₮30,000~60,000",
            features: ["전통 음악", "현대적"],
            icon: "🥘"
        },
        {
            name: "에델바이스",
            type: "western",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9211, lng: 106.9176 },
            cuisine: "유럽 요리",
            specialty: "수제 소시지",
            priceRange: "₮25,000~50,000",
            features: ["유럽 스타일", "맥주"],
            icon: "🍺"
        },
        {
            name: "문스톤 카페",
            type: "cafe",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9177, lng: 106.9168 },
            cuisine: "카페",
            specialty: "커피, 케이크",
            priceRange: "₮10,000~20,000",
            features: ["힙한 분위기", "와이파이"],
            icon: "☕"
        },
        {
            name: "보르츠 호쇼르",
            type: "local",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9185, lng: 106.9155 },
            cuisine: "몽골 요리",
            specialty: "호쇼르",
            priceRange: "₮5,000~15,000",
            features: ["저렴", "현지 음식"],
            icon: "🥟"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Paris
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Paris": [
        {
            name: "람브루아지",
            type: "french",
            city: "Paris",
            coordinates: { lat: 48.8549, lng: 2.3626 },
            cuisine: "프렌치",
            specialty: "클래식 프렌치",
            priceRange: "€300~500",
            michelin: "3 Stars",
            reservation: true,
            features: ["미슐랭 3스타", "우아함"],
            icon: "🍷"
        },
        {
            name: "라스 뒤 팔라펠",
            type: "street-food",
            city: "Paris",
            coordinates: { lat: 48.8574, lng: 2.3591 },
            cuisine: "중동 음식",
            specialty: "팔라펠 샌드위치",
            priceRange: "€8~12",
            features: ["현지인 추천", "가성비"],
            icon: "🥙"
        },
        {
            name: "안젤리나 파리",
            type: "cafe",
            city: "Paris",
            coordinates: { lat: 48.8656, lng: 2.3276 },
            cuisine: "디저트",
            specialty: "몽블랑, 핫초콜릿",
            priceRange: "€15~25",
            features: ["유명 티하우스", "우아함"],
            icon: "��"
        },
        {
            name: "세팀",
            type: "french",
            city: "Paris",
            coordinates: { lat: 48.8533, lng: 2.3712 },
            cuisine: "비스트로",
            specialty: "계절 요리",
            priceRange: "€80~120",
            michelin: "1 Star",
            reservation: true,
            features: ["미슐랭 1스타", "트렌디"],
            icon: "🍽️"
        },
        {
            name: "피에르 에르메",
            type: "cafe",
            city: "Paris",
            coordinates: { lat: 48.8547, lng: 2.3272 },
            cuisine: "마카롱",
            specialty: "이스파한 마카롱",
            priceRange: "€3~8",
            features: ["마카롱 명가", "선물용"],
            icon: "🧁"
        }
    ],
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Mallorca
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Mallorca": [
        {
            name: "카 나 토네타",
            type: "fusion",
            city: "Mallorca",
            coordinates: { lat: 39.5696, lng: 2.6502 },
            cuisine: "지중해 퓨전",
            specialty: "씨푸드 파에야",
            priceRange: "€40~80",
            reservation: true,
            features: ["미슐랭 가이드", "바다 뷰"],
            icon: "🥘"
        },
        {
            name: "엘 피노",
            type: "local",
            city: "Mallorca",
            coordinates: { lat: 39.5631, lng: 2.6497 },
            cuisine: "스페인 요리",
            specialty: "바비큐 립",
            priceRange: "€20~40",
            features: ["현지 인기", "테라스"],
            icon: "🥩"
        },
        {
            name: "엘 캄파리오",
            type: "local",
            city: "Mallorca",
            coordinates: { lat: 39.5664, lng: 2.6503 },
            cuisine: "타파스",
            specialty: "문어 구이",
            priceRange: "€15~30",
            features: ["항구 뷰", "다양한 타파스"],
            icon: "🦑"
        },
        {
            name: "로살라 베이커리",
            type: "cafe",
            city: "Mallorca",
            coordinates: { lat: 39.5692, lng: 2.6519 },
            cuisine: "페이스트리",
            specialty: "엔사이마다",
            priceRange: "€3~8",
            features: ["마요르카 전통빵", "달콤"],
            icon: "🥐"
        }
    ],
};
