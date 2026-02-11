/**
 * 교통 데이터
 * 
 * 이 파일은 TransportationPicker 컴포넌트에서 사용하는 도시별 교통 수단 정보를 관리합니다.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 타입 정의
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type TransportationType =
    | "subway"          // 지하철/전철
    | "bus"             // 버스
    | "tram"            // 트램/모노레일
    | "taxi"            // 택시
    | "ride-hailing"    // 라이드셰어 (Uber, Grab 등)
    | "rental-car"      // 렌터카
    | "shuttle"         // 셔틀버스
    | "airport-transfer" // 공항 픽업/센딩
    | "traditional"     // 전통 교통수단 (툭툭, 송태우, 지프니 등)
    | "micromobility";   // 전동킥보드/자전거

/**
 * 교통 수단 데이터 타입
 */
export interface TransportationData {
    name: string;                  // 교통 수단 이름 (예: "Tokyo Metro", "Grab", "Uber")
    type: TransportationType;      // 교통 수단 타입
    city: string;                  // 도시 영문명 (destinations.ts의 engName과 매칭)
    description?: string;          // 간단한 설명
    priceRange?: string;          // 가격대 (예: "₩3,000~10,000", "$5-15")
    availability?: string;         // 운영 시간 (예: "24/7", "6AM-12AM")
    features?: string[];          // 특징 (예: ["Air-conditioned", "English support", "Cashless"])
    appRequired?: boolean;        // 앱 설치 필요 여부
    appName?: string;             // 앱 이름 (해당되는 경우)
    paymentMethods?: string[];    // 결제 방법
    icon?: string;                // 이모지 아이콘
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🚇 교통 수단 데이터 (도시별)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const TRANSPORTATIONS_DATA: Record<string, TransportationData[]> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏯 오사카 (Osaka)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Osaka": [
        {
            name: "Osaka Metro",
            type: "subway",
            city: "Osaka",
            description: "8개 노선, 깨끗하고 편리",
            availability: "5:00AM - 12:00AM",
            features: ["에어컨", "IC카드"],
            icon: "🚇"
        },
        {
            name: "Osaka Metro Bus",
            type: "bus",
            city: "Osaka",
            description: "시내 전역 커버",
            features: ["에어컨", "IC카드"],
            icon: "🚌"
        },
        {
            name: "Uber Taxi",
            type: "ride-hailing",
            city: "Osaka",
            description: "택시 연결 서비스",
            appRequired: true,
            appName: "Uber",
            features: ["24시간", "캐시리스", "영어지원"],
            icon: "🚕"
        },
        {
            name: "LUUP",
            type: "micromobility",
            city: "Osaka",
            description: "전동 킥보드/자전거",
            appRequired: true,
            appName: "LUUP",
            features: ["단거리 이동"],
            icon: "🛴"
        },
        {
            name: "공항 픽업/센딩 (KIX)",
            type: "airport-transfer",
            city: "Osaka",
            description: "간사이 공항 픽업/센딩",
            priceRange: "¥15,000~30,000",
            features: ["24시간", "미팅 서비스", "영어지원"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗼 도쿄 (Tokyo)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Tokyo": [
        {
            name: "Tokyo Metro",
            type: "subway",
            city: "Tokyo",
            description: "9개 노선, 가장 편리한 이동 수단",
            availability: "5:00AM - 12:30AM",
            features: ["에어컨", "Suica/Pasmo"],
            icon: "🚇"
        },
        {
            name: "JR 야마노테선",
            type: "subway",
            city: "Tokyo",
            description: "순환선, 주요 역 연결",
            features: ["에어컨", "Suica/Pasmo"],
            icon: "🚃"
        },
        {
            name: "GO Taxi",
            type: "ride-hailing",
            city: "Tokyo",
            description: "일본 대표 택시 앱",
            appRequired: true,
            appName: "GO",
            features: ["24시간", "캐시리스", "일본어/영어"],
            icon: "🚕"
        },
        {
            name: "Uber Taxi",
            type: "ride-hailing",
            city: "Tokyo",
            description: "택시 연결 서비스",
            appRequired: true,
            appName: "Uber",
            features: ["24시간", "캐시리스"],
            icon: "🚕"
        },
        {
            name: "DiDi",
            type: "ride-hailing",
            city: "Tokyo",
            description: "택시 호출 앱",
            appRequired: true,
            appName: "DiDi",
            features: ["24시간", "캐시리스"],
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (나리타/하네다)",
            type: "airport-transfer",
            city: "Tokyo",
            description: "Blacklane, Tokyo MK, Private Van",
            priceRange: "¥20,000~50,000",
            features: ["24시간", "영어 운전사", "WiFi", "미팅보드"],
            appName: "Blacklane / Tokyo MK",
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🎏 후쿠오카 (Fukuoka)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Fukuoka": [
        {
            name: "Fukuoka City Subway",
            type: "subway",
            city: "Fukuoka",
            description: "공항선 포함 3개 노선",
            features: ["에어컨", "IC카드"],
            icon: "🚇"
        },
        {
            name: "Nishitetsu Bus",
            type: "bus",
            city: "Fukuoka",
            description: "시내 전역 커버",
            features: ["에어컨", "IC카드"],
            icon: "🚌"
        },
        {
            name: "Uber Taxi",
            type: "ride-hailing",
            city: "Fukuoka",
            description: "택시 연결",
            appRequired: true,
            appName: "Uber",
            icon: "🚕"
        },
        {
            name: "DiDi",
            type: "ride-hailing",
            city: "Fukuoka",
            description: "일본식 라이드셰어",
            appRequired: true,
            appName: "DiDi",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (후쿠오카)",
            type: "airport-transfer",
            city: "Fukuoka",
            description: "후쿠오카 공항 픽업/센딩",
            priceRange: "¥8,000~15,000",
            features: ["시내 10분", "영어지원"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ❄️ 삿포로 (Sapporo)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Sapporo": [
        {
            name: "Sapporo Subway",
            type: "subway",
            city: "Sapporo",
            description: "3개 노선, 고무 타이어 방식",
            availability: "6:00AM - 12:00AM",
            features: ["조용함", "SAPICA"],
            icon: "🚇"
        },
        {
            name: "Sapporo Streetcar",
            type: "tram",
            city: "Sapporo",
            description: "일본 최북단 노면전차",
            availability: "6:00AM - 11:00PM",
            features: ["눈이 와도 운행"],
            icon: "🚋"
        },
        {
            name: "시내버스",
            type: "bus",
            city: "Sapporo",
            description: "Hokkaido Chuo Bus 등",
            features: ["SAPICA"],
            icon: "🚌"
        },
        {
            name: "Uber Taxi",
            type: "ride-hailing",
            city: "Sapporo",
            description: "택시 연결",
            appRequired: true,
            appName: "Uber",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (신치토세)",
            type: "airport-transfer",
            city: "Sapporo",
            description: "신치토세 공항 픽업/센딩",
            priceRange: "¥12,000~25,000",
            features: ["40분 거리", "영어지원"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🌺 오키나와 (Okinawa)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Okinawa": [
        {
            name: "Yui Rail",
            type: "tram",
            city: "Okinawa",
            description: "나하 공항-Tedako-Uranishi",
            availability: "6:00AM - 11:30PM",
            features: ["OKICA", "나하시 편리"],
            icon: "🚝"
        },
        {
            name: "시내버스",
            type: "bus",
            city: "Okinawa",
            description: "4개 주요 버스회사",
            features: ["OKICA"],
            icon: "🚌"
        },
        {
            name: "렌터카",
            type: "rental-car",
            city: "Okinawa",
            description: "섬 탐험 필수",
            features: ["자유 여행", "외딴섬 접근"],
            icon: "🚗"
        },
        {
            name: "택시",
            type: "taxi",
            city: "Okinawa",
            description: "일반 택시, Uber",
            features: ["24시간"],
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (나하)",
            type: "airport-transfer",
            city: "Okinawa",
            description: "나하 공항 픽업/센딩",
            priceRange: "¥3,000~8,000",
            features: ["주요 리조트", "영어지원"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇹🇼 타이페이 (Taipei)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Taipei": [
        {
            name: "Taipei MRT",
            type: "subway",
            city: "Taipei",
            description: "5개 주요 노선, 매우 깨끗",
            priceRange: "NT$15-65",
            features: ["에어컨", "EasyCard"],
            icon: "🚇"
        },
        {
            name: "시내버스",
            type: "bus",
            city: "Taipei",
            description: "광범위한 노선망",
            priceRange: "NT$15",
            features: ["EasyCard"],
            icon: "🚌"
        },
        {
            name: "Uber",
            type: "ride-hailing",
            city: "Taipei",
            description: "라이드셰어 서비스",
            appRequired: true,
            appName: "Uber",
            features: ["캐시리스"],
            icon: "🚕"
        },
        {
            name: "LINE Taxi",
            type: "ride-hailing",
            city: "Taipei",
            description: "인기 택시 앱",
            appRequired: true,
            appName: "LINE Taxi",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (타오위안)",
            type: "airport-transfer",
            city: "Taipei",
            description: "타오위안 공항 픽업/센딩",
            priceRange: "NT$1,200~1,800",
            features: ["45분 거리", "고속버스 대안"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇻🇳 다낭 (Da Nang)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Nang": [
        {
            name: "DanaBus",
            type: "bus",
            city: "Da Nang",
            description: "시내버스, DanaBus 앱",
            priceRange: "5,000-30,000 VND",
            features: ["에어컨", "앱 추적"],
            icon: "🚌"
        },
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Da Nang",
            description: "그랩카, 그랩바이크",
            appRequired: true,
            appName: "Grab",
            features: ["24시간", "안전"],
            icon: "🚕"
        },
        {
            name: "Xanh SM Taxi",
            type: "taxi",
            city: "Da Nang",
            description: "전기 택시",
            appRequired: true,
            appName: "Xanh SM",
            features: ["친환경", "앱 예약"],
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (다낭)",
            type: "airport-transfer",
            city: "Da Nang",
            description: "다낭 공항 픽업/센딩",
            priceRange: "100,000~200,000 VND",
            features: ["10-15분", "Grab 예약 가능"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇨🇳 상하이 (Shanghai)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Shanghai": [
        {
            name: "Shanghai Metro",
            type: "subway",
            city: "Shanghai",
            description: "19개 노선, 세계 최대 규모",
            priceRange: "3-15 RMB",
            features: ["에어컨", "QR코드"],
            icon: "🚇"
        },
        {
            name: "시내버스",
            type: "bus",
            city: "Shanghai",
            description: "2,000개 노선",
            priceRange: "1-2 RMB",
            features: ["QR코드"],
            icon: "🚌"
        },
        {
            name: "DiDi",
            type: "ride-hailing",
            city: "Shanghai",
            description: "중국 대표 라이드셰어",
            appRequired: true,
            appName: "DiDi",
            features: ["영어 지원", "캐시리스"],
            icon: "🚕"
        },
        {
            name: "Maglev",
            type: "subway",
            city: "Shanghai",
            description: "자기부상열차, 공항 연결",
            priceRange: "50 RMB",
            features: ["430km/h 고속"],
            icon: "🚄"
        },
        {
            name: "공항 픽업/센딩 (푸둥)",
            type: "airport-transfer",
            city: "Shanghai",
            description: "푸둥 공항 픽업/센딩",
            priceRange: "200~400 RMB",
            features: ["영어 운전사", "DiDi 예약"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇹🇭 방콕 (Bangkok)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bangkok": [
        {
            name: "BTS Skytrain",
            type: "subway",
            city: "Bangkok",
            description: "스카이트레인, Sukhumvit/Silom Line",
            priceRange: "฿16-59",
            features: ["에어컨", "Rabbit Card"],
            icon: "🚈"
        },
        {
            name: "MRT",
            type: "subway",
            city: "Bangkok",
            description: "지하철, Blue/Purple Line 등",
            priceRange: "฿14-42",
            features: ["에어컨"],
            icon: "🚇"
        },
        {
            name: "BMTA Bus",
            type: "bus",
            city: "Bangkok",
            description: "100개 이상 노선",
            priceRange: "฿8-25",
            features: ["일부 에어컨"],
            icon: "🚌"
        },
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Bangkok",
            description: "그랩카, 그랩바이크",
            appRequired: true,
            appName: "Grab",
            features: ["24시간"],
            icon: "🚕"
        },
        {
            name: "Bolt",
            type: "ride-hailing",
            city: "Bangkok",
            description: "라이드셰어",
            appRequired: true,
            appName: "Bolt",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (수완나품)",
            type: "airport-transfer",
            city: "Bangkok",
            description: "수완나품/돈므앙 공항 픽업/센딩",
            priceRange: "฿800~1,500",
            features: ["Grab 예약", "호텔 미팅"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇮🇩 발리 (Bali)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bali": [
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Bali",
            description: "그랩카, 그랩바이크",
            appRequired: true,
            appName: "Grab",
            features: ["가장 인기"],
            icon: "🚕"
        },
        {
            name: "GoJek",
            type: "ride-hailing",
            city: "Bali",
            description: "고카, 고라이드",
            appRequired: true,
            appName: "GoJek",
            icon: "🏍️"
        },
        {
            name: "Bluebird Taxi",
            type: "taxi",
            city: "Bali",
            description: "가장 신뢰받는 택시",
            features: ["미터기"],
            icon: "🚕"
        },
        {
            name: "스쿠터 렌탈",
            type: "rental-car",
            city: "Bali",
            description: "가장 인기있는 이동 수단",
            features: ["자유 여행"],
            icon: "🛵"
        },
        {
            name: "공항 픽업/센딩 (덴파사르)",
            type: "airport-transfer",
            city: "Bali",
            description: "응우라라이 공항 픽업/센딩",
            priceRange: "$5.69~30",
            features: ["Klook/GetYourGuide", "영어 운전사", "미팅보드"],
            appName: "Klook / Grab",
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇻🇳 나트랑 (Nha Trang)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Nha Trang": [
        {
            name: "VinBus",
            type: "bus",
            city: "Nha Trang",
            description: "전기버스",
            priceRange: "5,000 VND",
            features: ["친환경", "앱 추적"],
            icon: "🚌"
        },
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Nha Trang",
            description: "그랩카, 그랩바이크",
            appRequired: true,
            appName: "Grab",
            icon: "🚕"
        },
        {
            name: "Xanh SM Taxi",
            type: "taxi",
            city: "Nha Trang",
            description: "전기 택시",
            appRequired: true,
            appName: "Xanh SM",
            icon: "🚕"
        },
        {
            name: "관광버스",
            type: "shuttle",
            city: "Nha Trang",
            description: "Hop-on Hop-off",
            features: ["16개 관광지"],
            icon: "🚌"
        },
        {
            name: "공항 픽업/센딩 (캄란)",
            type: "airport-transfer",
            city: "Nha Trang",
            description: "캄란 공항 픽업/센딩",
            priceRange: "200,000~400,000 VND",
            features: ["35km 거리", "Grab 예약"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇵🇭 세부 (Cebu)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Cebu": [
        {
            name: "지프니",
            type: "traditional",
            city: "Cebu",
            description: "필리핀 전통 교통수단",
            priceRange: "₱13~",
            features: ["저렴함", "현지 문화"],
            icon: "🚐"
        },
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Cebu",
            description: "그랩카, 그랩택시",
            appRequired: true,
            appName: "Grab",
            features: ["안전", "편리"],
            icon: "🚕"
        },
        {
            name: "Angkas",
            type: "ride-hailing",
            city: "Cebu",
            description: "오토바이 택시",
            appRequired: true,
            appName: "Angkas",
            features: ["빠름", "저렴"],
            icon: "🏍️"
        },
        {
            name: "택시",
            type: "taxi",
            city: "Cebu",
            description: "White/Yellow Taxi",
            priceRange: "₱40~",
            features: ["미터기"],
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (막탄)",
            type: "airport-transfer",
            city: "Cebu",
            description: "막탄 공항 픽업/센딩",
            priceRange: "₱300~800",
            features: ["Grab 예약", "단거리"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇹🇭 치앙마이 (Chiang Mai)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Chiang Mai": [
        {
            name: "송태우 (Red Truck)",
            type: "traditional",
            city: "Chiang Mai",
            description: "빨간 픽업트럭 공유 택시",
            priceRange: "฿30-40",
            features: ["현지 교통", "저렴"],
            icon: "🚛"
        },
        {
            name: "툭툭",
            type: "traditional",
            city: "Chiang Mai",
            description: "3륜 오픈카",
            priceRange: "฿60-100",
            features: ["관광", "재미"],
            icon: "🛺"
        },
        {
            name: "RTC 시내버스",
            type: "bus",
            city: "Chiang Mai",
            description: "9개 노선",
            priceRange: "฿20-30",
            features: ["에어컨", "WiFi"],
            icon: "🚌"
        },
        {
            name: "Grab",
            type: "ride-hailing",
            city: "Chiang Mai",
            description: "그랩카, 그랩송태우",
            appRequired: true,
            appName: "Grab",
            icon: "🚕"
        },
        {
            name: "Bolt",
            type: "ride-hailing",
            city: "Chiang Mai",
            description: "라이드셰어",
            appRequired: true,
            appName: "Bolt",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (치앙마이)",
            type: "airport-transfer",
            city: "Chiang Mai",
            description: "치앙마이 공항 픽업/센딩",
            priceRange: "฿150~300",
            features: ["시내 15분", "Grab 예약"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇫🇷 파리 (Paris)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Paris": [
        {
            name: "Paris Metro",
            type: "subway",
            city: "Paris",
            description: "16개 노선, 300개 이상 역",
            priceRange: "€2.15",
            features: ["t+ 티켓"],
            icon: "🚇"
        },
        {
            name: "RER",
            type: "subway",
            city: "Paris",
            description: "광역 급행철도, 5개 노선",
            features: ["공항 연결"],
            icon: "🚆"
        },
        {
            name: "RATP Bus",
            type: "bus",
            city: "Paris",
            description: "시내버스",
            priceRange: "€2.15",
            icon: "🚌"
        },
        {
            name: "G7 Taxi",
            type: "taxi",
            city: "Paris",
            description: "파리 대표 택시",
            appRequired: true,
            appName: "G7",
            features: ["공항 고정요금"],
            icon: "🚕"
        },
        {
            name: "Uber",
            type: "ride-hailing",
            city: "Paris",
            description: "라이드셰어",
            appRequired: true,
            appName: "Uber",
            icon: "🚕"
        },
        {
            name: "Bolt",
            type: "ride-hailing",
            city: "Paris",
            description: "빠르고 저렴",
            appRequired: true,
            appName: "Bolt",
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (CDG/오를리)",
            type: "airport-transfer",
            city: "Paris",
            description: "샤를드골/오를리 공항 픽업/센딩",
            priceRange: "€50~100",
            features: ["Uber/G7", "고정요금"],
            icon: "✈️"
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🇺🇸 괌 (Guam)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Guam": [
        {
            name: "GMTA Bus",
            type: "bus",
            city: "Guam",
            description: "9개 노선, 공공버스",
            priceRange: "$1.50 / $4 (일일권)",
            features: ["섬 전역"],
            icon: "🚌"
        },
        {
            name: "Tumon Shuttle",
            type: "shuttle",
            city: "Guam",
            description: "Red Shuttle, 쇼핑몰 연결",
            priceRange: "$3",
            features: ["10-15분 간격"],
            icon: "🚐"
        },
        {
            name: "렌터카",
            type: "rental-car",
            city: "Guam",
            description: "가장 추천",
            priceRange: "$31/일~",
            features: ["자유 여행", "필수"],
            icon: "🚗"
        },
        {
            name: "Miki Taxi",
            type: "taxi",
            city: "Guam",
            description: "괌 최대 택시 회사",
            appRequired: true,
            appName: "Kakao T",
            features: ["미터기", "앱 호출"],
            icon: "🚕"
        },
        {
            name: "공항 픽업/센딩 (괌)",
            type: "airport-transfer",
            city: "Guam",
            description: "괌 국제공항 픽업/센딩",
            priceRange: "$10~25",
            features: ["호텔까지 10-20분", "사전 예약"],
            icon: "✈️"
        }
    ]
};
