export type ShoppingType =
    | "department-store"  // 백화점
    | "mall"             // 쇼핑몰
    | "market"           // 재래시장
    | "outlet"           // 아울렛
    | "duty-free"        // 면세점
    | "convenience"      // 편의점
    | "supermarket"      // 슈퍼마켓
    | "specialty"        // 전문점
    | "boutique"         // 부티크
    | "souvenir";        // 기념품점

export interface ShoppingData {
    name: string;
    type: ShoppingType;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    category?: string;        // 판매 카테고리 (패션, 화장품, 전자제품 등)
    specialItems?: string;    // 특산품/인기 상품
    priceRange?: string;      // 가격대
    openingHours?: string;    // 영업 시간
    taxRefund?: boolean;      // 택스 리펀드 가능 여부
    features?: string[];      // 특징
    icon?: string;           // 이모지
}

export const SHOPPING_DATA: Record<string, ShoppingData[]> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Osaka
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Osaka": [
        {
            name: "한큐 우메다 본점",
            type: "department-store",
            city: "Osaka",
            coordinates: { lat: 34.7024, lng: 135.4959 },
            category: "종합 백화점",
            specialItems: "명품, 화장품, 식품관",
            priceRange: "¥1,000~100,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["택스 리펀드", "명품관", "식품관"],
            icon: "🏬"
        },
        {
            name: "도톤보리 쇼핑 거리",
            type: "market",
            city: "Osaka",
            coordinates: { lat: 34.6686, lng: 135.5010 },
            category: "쇼핑 거리",
            specialItems: "기념품, 의류, 잡화",
            priceRange: "¥500~10,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["관광 명소", "다양한 상점", "야간 쇼핑"],
            icon: "🛍️"
        },
        {
            name: "구로몬 시장",
            type: "market",
            city: "Osaka",
            coordinates: { lat: 34.6660, lng: 135.5065 },
            category: "전통 시장",
            specialItems: "신선 식품, 해산물, 과일",
            priceRange: "¥300~5,000",
            openingHours: "08:00~18:00",
            taxRefund: false,
            features: ["오사카 부엌", "신선 식품", "시식 가능"],
            icon: "🐟"
        },
        {
            name: "난바 파크스",
            type: "mall",
            city: "Osaka",
            coordinates: { lat: 34.6610, lng: 135.5020 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 잡화, 레스토랑",
            priceRange: "¥1,000~30,000",
            openingHours: "11:00~21:00",
            taxRefund: true,
            features: ["옥상 정원", "영화관", "다양한 브랜드"],
            icon: "🏢"
        },
        {
            name: "돈키호테 도톤보리점",
            type: "specialty",
            city: "Osaka",
            coordinates: { lat: 34.6688, lng: 135.5015 },
            category: "종합 할인점",
            specialItems: "화장품, 과자, 전자제품",
            priceRange: "¥100~50,000",
            openingHours: "24/7",
            taxRefund: true,
            features: ["24시간 영업", "면세", "한국어 안내"],
            icon: "🎡"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Tokyo
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Tokyo": [
        {
            name: "긴자 미츠코시",
            type: "department-store",
            city: "Tokyo",
            coordinates: { lat: 35.6717, lng: 139.7642 },
            category: "럭셔리 백화점",
            specialItems: "명품, 일본 전통 공예품",
            priceRange: "¥5,000~500,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["명품관", "전통 공예", "프리미엄"],
            icon: "👜"
        },
        {
            name: "시부야 109",
            type: "mall",
            city: "Tokyo",
            coordinates: { lat: 35.6595, lng: 139.6982 },
            category: "패션 몰",
            specialItems: "트렌디 패션, 액세서리",
            priceRange: "¥1,000~30,000",
            openingHours: "10:00~21:00",
            taxRefund: true,
            features: ["젊은 패션", "트렌디", "다양한 브랜드"],
            icon: "👗"
        },
        {
            name: "아메요코 시장",
            type: "market",
            city: "Tokyo",
            coordinates: { lat: 35.7103, lng: 139.7743 },
            category: "전통 시장",
            specialItems: "식품, 잡화, 의류",
            priceRange: "¥100~10,000",
            openingHours: "10:00~20:00",
            taxRefund: false,
            features: ["저렴한 가격", "다양한 상품", "활기찬 분위기"],
            icon: "🏪"
        },
        {
            name: "돈키호테 신주쿠점",
            type: "specialty",
            city: "Tokyo",
            coordinates: { lat: 35.6938, lng: 139.7036 },
            category: "종합 할인점",
            specialItems: "화장품, 전자제품, 과자",
            priceRange: "¥100~100,000",
            openingHours: "24/7",
            taxRefund: true,
            features: ["24시간", "면세", "다양한 상품"],
            icon: "🎪"
        },
        {
            name: "긴자 로프트",
            type: "specialty",
            city: "Tokyo",
            coordinates: { lat: 35.6718, lng: 139.7645 },
            category: "라이프스타일 편집샵",
            specialItems: "문구, 잡화, 디자인 상품",
            priceRange: "¥500~20,000",
            openingHours: "11:00~21:00",
            taxRefund: true,
            features: ["유니크 상품", "디자인", "문구류"],
            icon: "📝"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Fukuoka
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Fukuoka": [
        {
            name: "캐널시티 하카타",
            type: "mall",
            city: "Fukuoka",
            coordinates: { lat: 33.5904, lng: 130.4112 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 엔터테인먼트, 레스토랑",
            priceRange: "¥1,000~50,000",
            openingHours: "10:00~21:00",
            taxRefund: true,
            features: ["운하 테마", "분수 쇼", "영화관"],
            icon: "🏢"
        },
        {
            name: "텐진 지하상가",
            type: "mall",
            city: "Fukuoka",
            coordinates: { lat: 33.5903, lng: 130.4016 },
            category: "지하 쇼핑몰",
            specialItems: "패션, 잡화, 화장품",
            priceRange: "¥500~30,000",
            openingHours: "10:00~20:00",
            taxRefund: false,
            features: ["날씨 걱정 없음", "다양한 매장", "음식점"],
            icon: "🛍️"
        },
        {
            name: "야나가와 시장",
            type: "market",
            city: "Fukuoka",
            coordinates: { lat: 33.5876, lng: 130.4150 },
            category: "재래시장",
            specialItems: "신선 식품, 해산물",
            priceRange: "¥300~5,000",
            openingHours: "08:00~17:00",
            taxRefund: false,
            features: ["로컬 음식", "신선도", "저렴한 가격"],
            icon: "🐟"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Sapporo
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Sapporo": [
        {
            name: "스스키노 상점가",
            type: "market",
            city: "Sapporo",
            coordinates: { lat: 43.0532, lng: 141.3553 },
            category: "쇼핑 거리",
            specialItems: "기념품, 특산품, 의류",
            priceRange: "¥500~20,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["유흥가", "야간 쇼핑", "다양한 매장"],
            icon: "🏪"
        },
        {
            name: "삿포로 공장",
            type: "mall",
            city: "Sapporo",
            coordinates: { lat: 43.0707, lng: 141.3677 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 맥주 박물관",
            priceRange: "¥1,000~30,000",
            openingHours: "10:00~21:00",
            taxRefund: true,
            features: ["맥주 공장", "실내 정원", "레스토랑"],
            icon: "🍺"
        },
        {
            name: "탄키리샤",
            type: "specialty",
            city: "Sapporo",
            coordinates: { lat: 43.0642, lng: 141.3545 },
            category: "종합 할인점",
            specialItems: "과자, 화장품, 전자제품",
            priceRange: "¥100~50,000",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["면세", "한국어 안내", "다양한 상품"],
            icon: "🎁"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Okinawa
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Okinawa": [
        {
            name: "국제거리",
            type: "market",
            city: "Okinawa",
            coordinates: { lat: 26.2139, lng: 127.6792 },
            category: "쇼핑 거리",
            specialItems: "기념품, 오키나와 특산품",
            priceRange: "¥500~10,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["관광 명소", "다양한 상점", "야간 쇼핑"],
            icon: "🏖️"
        },
        {
            name: "아웃렛몰 아시비나",
            type: "outlet",
            city: "Okinawa",
            coordinates: { lat: 26.2019, lng: 127.6474 },
            category: "아웃렛",
            specialItems: "브랜드 의류, 잡화",
            priceRange: "¥2,000~100,000",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["할인가", "브랜드", "공항 근처"],
            icon: "👜"
        },
        {
            name: "미하마 아메리칸 빌리지",
            type: "mall",
            city: "Okinawa",
            coordinates: { lat: 26.3148, lng: 127.7593 },
            category: "복합 쇼핑몰",
            specialItems: "미국 스타일 상품",
            priceRange: "¥1,000~30,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["미국풍", "관람차", "해변 근처"],
            icon: "🎡"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Taipei
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Taipei": [
        {
            name: "시먼딩",
            type: "market",
            city: "Taipei",
            coordinates: { lat: 25.0444, lng: 121.5067 },
            category: "쇼핑 거리",
            specialItems: "패션, 잡화, 먹거리",
            priceRange: "NT$100~10,000",
            openingHours: "11:00~23:00",
            taxRefund: false,
            features: ["젊음의 거리", "트렌디", "보행자 천국"],
            icon: "👗"
        },
        {
            name: "타이베이 101 쇼핑몰",
            type: "mall",
            city: "Taipei",
            coordinates: { lat: 25.0340, lng: 121.5645 },
            category: "럭셔리 쇼핑몰",
            specialItems: "명품, 고급 브랜드",
            priceRange: "NT$5,000~500,000+",
            openingHours: "11:00~21:30",
            taxRefund: true,
            features: ["명품관", "전망대", "프리미엄"],
            icon: "🏙️"
        },
        {
            name: "랴오허 야시장",
            type: "market",
            city: "Taipei",
            coordinates: { lat: 25.0536, lng: 121.5165 },
            category: "야시장",
            specialItems: "의류, 액세서리, 먹거리",
            priceRange: "NT$50~5,000",
            openingHours: "18:00~24:00",
            taxRefund: false,
            features: ["저렴한 가격", "야간 쇼핑", "먹거리"],
            icon: "🌙"
        },
        {
            name: "화시가 관광야시장",
            type: "market",
            city: "Taipei",
            coordinates: { lat: 25.0454, lng: 121.5005 },
            category: "전통 시장",
            specialItems: "한약재, 전통 간식",
            priceRange: "NT$100~5,000",
            openingHours: "16:00~23:30",
            taxRefund: false,
            features: ["전통 시장", "먹거리", "이색 체험"],
            icon: "🏮"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Shanghai
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Shanghai": [
        {
            name: "난징루",
            type: "market",
            city: "Shanghai",
            coordinates: { lat: 31.2353, lng: 121.4786 },
            category: "쇼핑 거리",
            specialItems: "백화점, 브랜드 매장",
            priceRange: "¥100~100,000+",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["보행자 거리", "야경", "명품관"],
            icon: "🏬"
        },
        {
            name: "신천지",
            type: "boutique",
            city: "Shanghai",
            coordinates: { lat: 31.2194, lng: 121.4778 },
            category: "복합 문화 공간",
            specialItems: "럭셔리 브랜드, 디자인 상품",
            priceRange: "¥500~200,000+",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["프렌치 컨셉트", "고급 레스토랑", "감성"],
            icon: "✨"
        },
        {
            name: "티엔즈팡",
            type: "market",
            city: "Shanghai",
            coordinates: { lat: 31.2089, lng: 121.4632 },
            category: "예술 거리",
            specialItems: "수공예품, 디자인 상품",
            priceRange: "¥50~10,000",
            openingHours: "10:00~23:00",
            taxRefund: false,
            features: ["골목길", "아티스트", "카페"],
            icon: "🎨"
        },
        {
            name: "난징루 제1백화점",
            type: "department-store",
            city: "Shanghai",
            coordinates: { lat: 31.2354, lng: 121.4839 },
            category: "백화점",
            specialItems: "화장품, 의류, 식품",
            priceRange: "¥100~50,000",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["역사적 건물", "종합 백화점", "면세"],
            icon: "🏢"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Dalian
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Dalian": [
        {
            name: "러시아 풍정 거리",
            type: "market",
            city: "Dalian",
            coordinates: { lat: 38.9140, lng: 121.6380 },
            category: "쇼핑 거리",
            specialItems: "러시아 기념품, 의류",
            priceRange: "¥50~5,000",
            openingHours: "09:00~21:00",
            taxRefund: false,
            features: ["유럽풍 건물", "기념품", "사진 명소"],
            icon: "🏛️"
        },
        {
            name: "승리광장",
            type: "mall",
            city: "Dalian",
            coordinates: { lat: 38.9188, lng: 121.6296 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "¥100~30,000",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["대형 광장", "다양한 매장", "레스토랑"],
            icon: "🏢"
        },
        {
            name: "시안루",
            type: "market",
            city: "Dalian",
            coordinates: { lat: 38.9147, lng: 121.6311 },
            category: "쇼핑 거리",
            specialItems: "의류, 잡화, 먹거리",
            priceRange: "¥20~10,000",
            openingHours: "09:00~22:00",
            taxRefund: false,
            features: ["저렴한 가격", "로컬 상품", "다양한 매장"],
            icon: "🛍️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Da Nang
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Nang": [
        {
            name: "한시장",
            type: "market",
            city: "Da Nang",
            coordinates: { lat: 16.0697, lng: 108.2190 },
            category: "전통 시장",
            specialItems: "식품, 의류, 기념품",
            priceRange: "₫20,000~500,000",
            openingHours: "06:00~18:00",
            taxRefund: false,
            features: ["로컬 시장", "신선 식품", "저렴한 가격"],
            icon: "🏪"
        },
        {
            name: "빈컴 플라자",
            type: "mall",
            city: "Da Nang",
            coordinates: { lat: 16.0696, lng: 108.2228 },
            category: "쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "₫100,000~10,000,000",
            openingHours: "09:30~22:00",
            taxRefund: false,
            features: ["현대식 쇼핑몰", "영화관", "푸드코트"],
            icon: "🏬"
        },
        {
            name: "롯데마트 다낭",
            type: "supermarket",
            city: "Da Nang",
            coordinates: { lat: 16.0426, lng: 108.2219 },
            category: "대형마트",
            specialItems: "식품, 생활용품",
            priceRange: "₫10,000~2,000,000",
            openingHours: "08:00~22:00",
            taxRefund: false,
            features: ["한국계", "다양한 상품", "푸드코트"],
            icon: "🛒"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Bangkok
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bangkok": [
        {
            name: "짜뚜짝 주말시장",
            type: "market",
            city: "Bangkok",
            coordinates: { lat: 13.7999, lng: 100.5496 },
            category: "재래시장",
            specialItems: "의류, 잡화, 공예품",
            priceRange: "฿50~5,000",
            openingHours: "09:00~18:00 (주말만)",
            taxRefund: false,
            features: ["세계 최대 시장", "가성비", "다양한 상품"],
            icon: "🎪"
        },
        {
            name: "시암 파라곤",
            type: "mall",
            city: "Bangkok",
            coordinates: { lat: 13.7465, lng: 100.5348 },
            category: "고급 쇼핑몰",
            specialItems: "명품, 전자제품",
            priceRange: "฿500~500,000+",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["럭셔리", "수족관", "미식"],
            icon: "👑"
        },
        {
            name: "터미널21",
            type: "mall",
            city: "Bangkok",
            coordinates: { lat: 13.7378, lng: 100.5601 },
            category: "테마 쇼핑몰",
            specialItems: "패션, 잡화",
            priceRange: "฿200~20,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["공항 테마", "각국 컨셉", "SNS 명소"],
            icon: "✈️"
        },
        {
            name: "플래티넘 패션 몰",
            type: "mall",
            city: "Bangkok",
            coordinates: { lat: 13.7515, lng: 100.5400 },
            category: "도매 쇼핑몰",
            specialItems: "의류, 액세서리",
            priceRange: "฿100~5,000",
            openingHours: "08:00~20:00",
            taxRefund: false,
            features: ["도매 가격", "다양한 의류", "가성비"],
            icon: "👚"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Nha Trang
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Nha Trang": [
        {
            name: "담시장",
            type: "market",
            city: "Nha Trang",
            coordinates: { lat: 12.2451, lng: 109.1899 },
            category: "재래시장",
            specialItems: "식품, 기념품, 의류",
            priceRange: "₫20,000~500,000",
            openingHours: "06:00~19:00",
            taxRefund: false,
            features: ["로컬 시장", "신선 식품", "저렴한 가격"],
            icon: "🏪"
        },
        {
            name: "빈컴 플라자 나트랑",
            type: "mall",
            city: "Nha Trang",
            coordinates: { lat: 12.2497, lng: 109.1902 },
            category: "쇼핑몰",
            specialItems: "패션, 화장품",
            priceRange: "₫100,000~5,000,000",
            openingHours: "09:30~22:00",
            taxRefund: false,
            features: ["현대식 쇼핑몰", "영화관", "에어컨"],
            icon: "🏬"
        },
        {
            name: "나트랑 센터",
            type: "mall",
            city: "Nha Trang",
            coordinates: { lat: 12.2388, lng: 109.1967 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 잡화, 레스토랑",
            priceRange: "₫50,000~3,000,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["해변 근처", "푸드코트", "다양한 매장"],
            icon: "🏖️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Bali
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bali": [
        {
            name: "꾸따 비치워크",
            type: "mall",
            city: "Bali",
            coordinates: { lat: -8.7188, lng: 115.1691 },
            category: "해변 쇼핑몰",
            specialItems: "서핑 용품, 비치웨어",
            priceRange: "Rp100,000~5,000,000",
            openingHours: "10:30~22:30",
            taxRefund: false,
            features: ["해변 근처", "서핑", "선셋 뷰"],
            icon: "🏄"
        },
        {
            name: "스미냑 빌리지",
            type: "mall",
            city: "Bali",
            coordinates: { lat: -8.6822, lng: 115.1574 },
            category: "럭셔리 쇼핑몰",
            specialItems: "디자이너 브랜드, 수제품",
            priceRange: "Rp200,000~10,000,000+",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["럭셔리", "부티크", "고급 레스토랑"],
            icon: "✨"
        },
        {
            name: "우붓 아트마켓",
            type: "market",
            city: "Bali",
            coordinates: { lat: -8.5069, lng: 115.2601 },
            category: "전통 시장",
            specialItems: "수공예품, 그림, 기념품",
            priceRange: "Rp50,000~2,000,000",
            openingHours: "08:00~18:00",
            taxRefund: false,
            features: ["전통 공예", "흥정 가능", "감성"],
            icon: "🎨"
        },
        {
            name: "발리 컬렉션",
            type: "mall",
            city: "Bali",
            coordinates: { lat: -8.8051, lng: 115.2304 },
            category: "아울렛 몰",
            specialItems: "브랜드 의류, 잡화",
            priceRange: "Rp150,000~5,000,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["누사두아", "면세", "리조트 근처"],
            icon: "🏬"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Cebu
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Cebu": [
        {
            name: "SM 시티 세부",
            type: "mall",
            city: "Cebu",
            coordinates: { lat: 10.3114, lng: 123.9183 },
            category: "대형 쇼핑몰",
            specialItems: "패션, 전자제품, 식품",
            priceRange: "₱200~50,000",
            openingHours: "10:00~21:00",
            taxRefund: false,
            features: ["필리핀 최대 몰", "영화관", "푸드코트"],
            icon: "🏬"
        },
        {
            name: "아얄라 센터 세부",
            type: "mall",
            city: "Cebu",
            coordinates: { lat: 10.3180, lng: 123.9059 },
            category: "프리미엄 쇼핑몰",
            specialItems: "브랜드 의류, 악세서리",
            priceRange: "₱500~100,000",
            openingHours: "10:00~21:00",
            taxRefund: false,
            features: ["고급 브랜드", "야외 정원", "레스토랑"],
            icon: "🌳"
        },
        {
            name: "카본 마켓",
            type: "market",
            city: "Cebu",
            coordinates: { lat: 10.2934, lng: 123.9013 },
            category: "재래시장",
            specialItems: "신선 식품, 기념품",
            priceRange: "₱50~5,000",
            openingHours: "05:00~18:00",
            taxRefund: false,
            features: ["로컬 시장", "저렴한 가격", "다양한 상품"],
            icon: "🛒"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Chiang Mai
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Chiang Mai": [
        {
            name: "나이트 바자",
            type: "market",
            city: "Chiang Mai",
            coordinates: { lat: 18.7883, lng: 98.9953 },
            category: "야시장",
            specialItems: "수공예품, 의류, 기념품",
            priceRange: "฿50~3,000",
            openingHours: "18:00~23:00",
            taxRefund: false,
            features: ["야간 쇼핑", "저렴한 가격", "먹거리"],
            icon: "🌙"
        },
        {
            name: "센트럴 페스티벌",
            type: "mall",
            city: "Chiang Mai",
            coordinates: { lat: 18.8022, lng: 99.0120 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "฿200~30,000",
            openingHours: "11:00~22:00",
            taxRefund: false,
            features: ["현대식 쇼핑몰", "영화관", "푸드코트"],
            icon: "🏢"
        },
        {
            name: "와로롯 시장",
            type: "market",
            city: "Chiang Mai",
            coordinates: { lat: 18.7896, lng: 99.0047 },
            category: "전통 시장",
            specialItems: "식품, 직물, 기념품",
            priceRange: "฿30~2,000",
            openingHours: "05:00~18:00",
            taxRefund: false,
            features: ["로컬 시장", "신선 식품", "저렴한 가격"],
            icon: "🏪"
        },
        {
            name: "선데이 워킹 스트리트",
            type: "market",
            city: "Chiang Mai",
            coordinates: { lat: 18.7878, lng: 98.9871 },
            category: "주말 시장",
            specialItems: "수공예품, 예술품",
            priceRange: "฿100~5,000",
            openingHours: "16:00~22:00 (일요일만)",
            taxRefund: false,
            features: ["보행자 전용", "아티스트", "감성"],
            icon: "🎨"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Da Lat
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Lat": [
        {
            name: "달랏 야시장",
            type: "market",
            city: "Da Lat",
            coordinates: { lat: 11.9404, lng: 108.4387 },
            category: "야시장",
            specialItems: "먹거리, 의류, 기념품",
            priceRange: "₫20,000~300,000",
            openingHours: "18:00~23:00",
            taxRefund: false,
            features: ["야간 쇼핑", "로컬 음식", "저렴한 가격"],
            icon: "🌙"
        },
        {
            name: "달랏 마켓",
            type: "market",
            city: "Da Lat",
            coordinates: { lat: 11.9404, lng: 108.4422 },
            category: "전통 시장",
            specialItems: "신선 식품, 꽃, 과일",
            priceRange: "₫10,000~200,000",
            openingHours: "06:00~18:00",
            taxRefund: false,
            features: ["신선 채소", "꽃시장", "로컬 특산품"],
            icon: "🌸"
        },
        {
            name: "빈컴 플라자 달랏",
            type: "mall",
            city: "Da Lat",
            coordinates: { lat: 11.9351, lng: 108.4388 },
            category: "쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "₫50,000~2,000,000",
            openingHours: "09:00~22:00",
            taxRefund: false,
            features: ["현대식 쇼핑몰", "에어컨", "푸드코트"],
            icon: "🏬"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Guam
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Guam": [
        {
            name: "GPO 괌 프리미어 아웃렛",
            type: "outlet",
            city: "Guam",
            coordinates: { lat: 13.5138, lng: 144.8039 },
            category: "아웃렛",
            specialItems: "브랜드 의류, 악세서리",
            priceRange: "$20~500",
            openingHours: "10:00~21:00",
            taxRefund: false,
            features: ["면세", "할인가", "브랜드"],
            icon: "🛍️"
        },
        {
            name: "마이크로네시아 몰",
            type: "mall",
            city: "Guam",
            coordinates: { lat: 13.5117, lng: 144.8023 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 전자제품, 식품",
            priceRange: "$10~1,000",
            openingHours: "10:00~21:00",
            taxRefund: false,
            features: ["대형 몰", "푸드코트", "영화관"],
            icon: "🏬"
        },
        {
            name: "DFS 갤러리아",
            type: "duty-free",
            city: "Guam",
            coordinates: { lat: 13.5130, lng: 144.8020 },
            category: "면세점",
            specialItems: "명품, 화장품, 주류",
            priceRange: "$30~10,000+",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["면세", "명품", "럭셔리"],
            icon: "💎"
        },
        {
            name: "K마트",
            type: "supermarket",
            city: "Guam",
            coordinates: { lat: 13.4769, lng: 144.7507 },
            category: "대형마트",
            specialItems: "식품, 생활용품",
            priceRange: "$5~200",
            openingHours: "24/7",
            taxRefund: false,
            features: ["24시간", "다양한 상품", "저렴한 가격"],
            icon: "🛒"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Ulaanbaatar
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Ulaanbaatar": [
        {
            name: "간단 사거리",
            type: "market",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9191, lng: 106.9177 },
            category: "쇼핑 거리",
            specialItems: "의류, 잡화, 기념품",
            priceRange: "₮10,000~500,000",
            openingHours: "10:00~20:00",
            taxRefund: false,
            features: ["중심가", "다양한 매장", "카페"],
            icon: "🏪"
        },
        {
            name: "노민 백화점",
            type: "department-store",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9186, lng: 106.9177 },
            category: "백화점",
            specialItems: "패션, 화장품, 식품",
            priceRange: "₮20,000~1,000,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["현대식 백화점", "푸드코트", "브랜드"],
            icon: "🏬"
        },
        {
            name: "샹그릴라 쇼핑센터",
            type: "mall",
            city: "Ulaanbaatar",
            coordinates: { lat: 47.9197, lng: 106.9166 },
            category: "복합 쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "₮15,000~800,000",
            openingHours: "10:00~22:00",
            taxRefund: false,
            features: ["고급 쇼핑몰", "레스토랑", "영화관"],
            icon: "🏢"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Paris
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Paris": [
        {
            name: "샹젤리제 거리",
            type: "market",
            city: "Paris",
            coordinates: { lat: 48.8697, lng: 2.3078 },
            category: "쇼핑 거리",
            specialItems: "명품, 브랜드 매장",
            priceRange: "€50~10,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["명품 거리", "개선문", "카페"],
            icon: "🇫🇷"
        },
        {
            name: "갤러리 라파예트",
            type: "department-store",
            city: "Paris",
            coordinates: { lat: 48.8738, lng: 2.3322 },
            category: "백화점",
            specialItems: "명품, 패션, 화장품",
            priceRange: "€30~20,000+",
            openingHours: "10:00~20:30",
            taxRefund: true,
            features: ["유리 돔", "명품관", "루프탑"],
            icon: "🏛️"
        },
        {
            name: "마레 지구",
            type: "boutique",
            city: "Paris",
            coordinates: { lat: 48.8566, lng: 2.3622 },
            category: "감성 거리",
            specialItems: "빈티지, 디자이너 숍",
            priceRange: "€20~5,000",
            openingHours: "11:00~19:00",
            taxRefund: false,
            features: ["골목길", "부티크", "카페"],
            icon: "🎨"
        },
        {
            name: "프랭탕 백화점",
            type: "department-store",
            city: "Paris",
            coordinates: { lat: 48.8691, lng: 2.3281 },
            category: "백화점",
            specialItems: "럭셔리 브랜드",
            priceRange: "€50~15,000+",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["역사적 건물", "명품", "루프탑 카페"],
            icon: "👜"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Mallorca
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Mallorca": [
        {
            name: "팔마 구시가지",
            type: "market",
            city: "Mallorca",
            coordinates: { lat: 39.5696, lng: 2.6502 },
            category: "쇼핑 거리",
            specialItems: "수공예품, 기념품, 의류",
            priceRange: "€20~500",
            openingHours: "10:00~20:00",
            taxRefund: true,
            features: ["중세 거리", "감성", "카페"],
            icon: "🏰"
        },
        {
            name: "라 람블라",
            type: "market",
            city: "Mallorca",
            coordinates: { lat: 39.5719, lng: 2.6497 },
            category: "보행자 거리",
            specialItems: "꽃, 기념품, 예술품",
            priceRange: "€10~300",
            openingHours: "09:00~21:00",
            taxRefund: false,
            features: ["꽃시장", "노천 상점", "분위기"],
            icon: "🌺"
        },
        {
            name: "페스티보 파크",
            type: "mall",
            city: "Mallorca",
            coordinates: { lat: 39.5962, lng: 2.6398 },
            category: "쇼핑몰",
            specialItems: "패션, 전자제품",
            priceRange: "€30~1,000",
            openingHours: "10:00~22:00",
            taxRefund: true,
            features: ["현대식 쇼핑몰", "영화관", "푸드코트"],
            icon: "🏬"
        },
        {
            name: "올리바르 시장",
            type: "market",
            city: "Mallorca",
            coordinates: { lat: 39.5732, lng: 2.6515 },
            category: "전통 시장",
            specialItems: "신선 식품, 과일, 치즈",
            priceRange: "€5~100",
            openingHours: "07:00~14:00",
            taxRefund: false,
            features: ["로컬 시장", "신선도", "전통"],
            icon: "🧀"
        }
    ]
};
