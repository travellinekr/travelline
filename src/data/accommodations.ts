/**
 * 숙박 데이터
 * 
 * 이 파일은 AccommodationPicker 컴포넌트에서 사용하는 도시별 숙박 정보를 관리합니다.
 * 유튜브 검색 결과를 기반으로 2024-2025년 인기 숙박 시설 데이터를 포함합니다.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 타입 정의
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * 숙박 데이터 타입
 */
export interface AccommodationData {
    name: string;                  // 숙소명
    type: 'hotel' | 'resort';      // 숙소 구분
    coordinates: {                 // GPS 좌표
        lat: number;
        lng: number;
    };
    checkInTime: string;           // 체크인 시간 (예: "15:00")
    checkOutTime: string;          // 체크아웃 시간 (예: "11:00")
    city: string;                  // 도시 영문명 (destinations.ts의 engName과 매칭)
    description?: string;          // 간단한 설명
    tags?: string[];               // 특징 태그
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏨 숙박 데이터 (도시별)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const ACCOMMODATIONS_DATA: Record<string, AccommodationData[]> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏯 오사카 (Osaka)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Osaka": [
        {
            name: "센타라 그랜드 호텔 오사카",
            type: "hotel",
            coordinates: { lat: 34.660291, lng: 135.5022983 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Osaka",
            description: "난바역 도보 5분, 간사이공항 라피트 이용 편리",
            tags: ["난바", "공항접근성"]
        },
        {
            name: "스위소텔 난카이 오사카",
            type: "hotel",
            coordinates: { lat: 34.6641574, lng: 135.5011441 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Osaka",
            description: "난바역 직결, 라피트역 연결",
            tags: ["난바", "역직결"]
        },
        {
            name: "호텔 한큐 리스파이어 오사카",
            type: "hotel",
            coordinates: { lat: 34.7047014, lng: 135.4961473 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Osaka",
            description: "JR 오사카역 도보 7분, 쾌적한 시설",
            tags: ["우메다", "쾌적"]
        },
        {
            name: "더 파크 프론트 호텔 앳 유니버설 스튜디오 재팬",
            type: "hotel",
            coordinates: { lat: 34.6678977, lng: 135.4372576 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Osaka",
            description: "USJ 바로 앞, 테마파크 여행 최적",
            tags: ["USJ", "테마파크"]
        },
        {
            name: "호텔 뉴 오타니 오사카",
            type: "hotel",
            coordinates: { lat: 34.6908166, lng: 135.5335447 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Osaka",
            description: "오사카성 공원 바로 옆, 멋진 전망",
            tags: ["오사카성", "전망"]
        },
        {
            name: "포시즌스 호텔 오사카",
            type: "hotel",
            coordinates: { lat: 34.6961363, lng: 135.4935424 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Osaka",
            description: "2024년 신규 오픈, 전통 료칸 경험 가능",
            tags: ["럭셔리", "료칸"]
        },
        {
            name: "칸데오 호텔 오사카 더 타워",
            type: "hotel",
            coordinates: { lat: 34.6954318, lng: 135.5005214 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Osaka",
            description: "고급스러운 인테리어, 난바 중심",
            tags: ["난바", "고급"]
        },
        {
            name: "카락사 호텔 오사카 난바",
            type: "hotel",
            coordinates: { lat: 34.6705808, lng: 135.4989305 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Osaka",
            description: "깔끔한 객실, 가성비 좋음",
            tags: ["난바", "가성비"]
        },
        {
            name: "호텔 유니버설 포트",
            type: "hotel",
            coordinates: { lat: 34.6663662, lng: 135.4380851 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Osaka",
            description: "USJ 공식 호텔, 가족 여행 추천",
            tags: ["USJ", "가족"]
        },
        {
            name: "호텔 발리 타워 오사카 텐노지",
            type: "hotel",
            coordinates: { lat: 34.647204, lng: 135.511924 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Osaka",
            description: "합리적 가격, 휴식 같은 분위기",
            tags: ["텐노지", "가성비"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗼 도쿄 (Tokyo)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Tokyo": [
        {
            name: "파크 하얏트 도쿄",
            type: "hotel",
            coordinates: { lat: 35.6861125, lng: 139.6904007 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Tokyo",
            description: "2025년 리뉴얼 예정, 클래식 럭셔리",
            tags: ["신주쿠", "럭셔리"]
        },
        {
            name: "아만 도쿄",
            type: "hotel",
            coordinates: { lat: 35.6854775, lng: 139.7656705 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Tokyo",
            description: "30m 아트리움, 루프탑 수영장",
            tags: ["오테마치", "럭셔리"]
        },
        {
            name: "불가리 호텔 도쿄",
            type: "hotel",
            coordinates: { lat: 35.6788388, lng: 139.7683266 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Tokyo",
            description: "도쿄역 근처, 이탈리아 디자인",
            tags: ["도쿄역", "럭셔리"]
        },
        {
            name: "미츠이 가든 호텔 우에노",
            type: "hotel",
            coordinates: { lat: 35.7118567, lng: 139.7781079 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "팬더 테마 객실, 아메요코 근처",
            tags: ["우에노", "테마"]
        },
        {
            name: "신주쿠 워싱턴 호텔",
            type: "hotel",
            coordinates: { lat: 35.6869153, lng: 139.6932758 },
            checkInTime: "14:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "신주쿠역 직결, 한국인 직원",
            tags: ["신주쿠", "역직결"]
        },
        {
            name: "아사쿠사 뷰 호텔",
            type: "hotel",
            coordinates: { lat: 35.715464, lng: 139.7918707 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "스카이트리 뷰, 26층 조식",
            tags: ["아사쿠사", "전망"]
        },
        {
            name: "호텔 더 셀레스틴 도쿄 시바",
            type: "hotel",
            coordinates: { lat: 35.650874, lng: 139.748867 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "도쿄타워 뷰",
            tags: ["미나토", "전망"]
        },
        {
            name: "솔라리아 니시테츠 호텔 긴자",
            type: "hotel",
            coordinates: { lat: 35.6707725, lng: 139.7672454 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "긴자 5분, 넓은 객실",
            tags: ["긴자", "쇼핑"]
        },
        {
            name: "온센 료칸 유엔 신주쿠",
            type: "hotel",
            coordinates: { lat: 35.69291279999999, lng: 139.709008 },
            checkInTime: "15:00",
            checkOutTime: "10:00",
            city: "Tokyo",
            description: "도심 온천, 하코네 온천물",
            tags: ["신주쿠", "온천"]
        },
        {
            name: "시부야 엑셀 호텔 도큐",
            type: "hotel",
            coordinates: { lat: 35.6585773, lng: 139.6998213 },
            checkInTime: "14:00",
            checkOutTime: "11:00",
            city: "Tokyo",
            description: "스크램블 교차로 2분",
            tags: ["시부야", "중심"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🍜 후쿠오카 (Fukuoka)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Fukuoka": [
        {
            name: "JR 큐슈 호텔 블로썸 하카타",
            type: "hotel",
            coordinates: { lat: 33.59015249999999, lng: 130.414029 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Fukuoka",
            description: "하카타역 도보 2분, 모던 인테리어",
            tags: ["하카타", "역근처"]
        },
        {
            name: "호텔 닛코 후쿠오카",
            type: "hotel",
            coordinates: { lat: 33.5913235, lng: 130.4172277 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Fukuoka",
            description: "4성급, 서비스 품질 우수",
            tags: ["하카타", "고급"]
        },
        {
            name: "더 블로썸 텐진",
            type: "hotel",
            coordinates: { lat: 33.5901838, lng: 130.4016888 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Fukuoka",
            description: "2021년 오픈, 최신 시설",
            tags: ["텐진", "신상"]
        },
        {
            name: "원 후쿠오카 호텔",
            type: "hotel",
            coordinates: { lat: 33.5908005, lng: 130.4000978 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Fukuoka",
            description: "2025년 4월 오픈 예정, 럭셔리 스타일",
            tags: ["텐진", "신상"]
        },
        {
            name: "더 리츠칼튼 후쿠오카",
            type: "hotel",
            coordinates: { lat: 33.5897405, lng: 130.3947638 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Fukuoka",
            description: "5성급, 텐진 중심",
            tags: ["텐진", "럭셔리"]
        },
        {
            name: "솔라리아 니시테츠 호텔 후쿠오카",
            type: "hotel",
            coordinates: { lat: 33.5890853, lng: 130.3988213 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Fukuoka",
            description: "다이마루 백화점 연결",
            tags: ["텐진", "쇼핑"]
        },
        {
            name: "힐튼 후쿠오카 씨 호크",
            type: "resort",
            coordinates: { lat: 33.5954, lng: 130.3589 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Fukuoka",
            description: "바다 전망, 고층 호텔",
            tags: ["오션뷰", "럭셔리"]
        },
        {
            name: "미쓰이 가든 호텔 후쿠오카 기온",
            type: "hotel",
            coordinates: { lat: 33.5904295, lng: 130.4135396 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Fukuoka",
            description: "현대적 인테리어, 대중목욕탕",
            tags: ["하카타", "온천"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏮 타이베이 (Taipei)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Taipei": [
        {
            name: "그랜드 하얏트 타이베이",
            type: "hotel",
            coordinates: { lat: 25.0351708, lng: 121.5628669 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Taipei",
            description: "타이베이 101 직결, 5성급",
            tags: ["101", "럭셔리"]
        },
        {
            name: "리젠트 타이베이 호텔",
            type: "hotel",
            coordinates: { lat: 25.054158, lng: 121.524288 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Taipei",
            description: "중산 지역, 명품 쇼핑몰",
            tags: ["중산", "쇼핑"]
        },
        {
            name: "코스모스 호텔 타이베이",
            type: "hotel",
            coordinates: { lat: 25.0463786, lng: 121.5182543 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Taipei",
            description: "타이베이 메인역 바로 앞",
            tags: ["역앞", "접근성"]
        },
        {
            name: "소테츠 그랜드 프레사 타이베이",
            type: "hotel",
            coordinates: { lat: 25.0329636, lng: 121.5654268 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Taipei",
            description: "2024년 신규 오픈, 시먼딩 도보 1분",
            tags: ["시먼딩", "신상"]
        },
        {
            name: "호텔 로얄 닛코 타이베이",
            type: "hotel",
            coordinates: { lat: 25.053857, lng: 121.52291 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Taipei",
            description: "2024년 리모델링, 쑹산공항 근처",
            tags: ["중산", "공항"]
        },
        {
            name: "유나이티드 호텔",
            type: "hotel",
            coordinates: { lat: 25.0329636, lng: 121.5654268 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Taipei",
            description: "MRT역 110m, 최근 리모델링",
            tags: ["역근처", "신상"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏖️ 다낭 (Da Nang)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Da Nang": [
        {
            name: "신라모노그램 다낭",
            type: "resort",
            coordinates: { lat: 15.9629566, lng: 108.2889999 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "5성급 리조트, 한국인 선호",
            tags: ["럭셔리", "비치"]
        },
        {
            name: "다낭 메리어트 리조트 & 스파",
            type: "resort",
            coordinates: { lat: 16.0544563, lng: 108.0717219 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "미케 비치, 실투숙객 만족도 높음",
            tags: ["비치", "럭셔리"]
        },
        {
            name: "라디슨 레드 다낭",
            type: "hotel",
            coordinates: { lat: 16.0544563, lng: 108.0717219 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "미케 비치 바로 앞, 현대적 디자인",
            tags: ["비치", "신상"]
        },
        {
            name: "풀먼 다낭 비치 리조트",
            type: "resort",
            coordinates: { lat: 16.0410, lng: 108.2505 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "5성급 비치 리조트",
            tags: ["비치", "럭셔리"]
        },
        {
            name: "다이아몬드 씨 호텔 다낭",
            type: "hotel",
            coordinates: { lat: 16.0664686, lng: 108.2451072 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "20층 루프탑 수영장, 오션뷰",
            tags: ["가성비", "전망"]
        },
        {
            name: "골든 로터스 럭셔리 호텔 다낭",
            type: "hotel",
            coordinates: { lat: 16.0523169, lng: 108.2466746 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Da Nang",
            description: "2023년 오픈, 16층 인피니티 풀",
            tags: ["신상", "풀"]
        },
        {
            name: "벨 메종 파로산드 다낭 호텔",
            type: "hotel",
            coordinates: { lat: 16.0675871, lng: 108.2448052 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "가족 여행 추천, 높은 만족도",
            tags: ["가족", "비치"]
        },
        {
            name: "하이안 비치 호텔 & 스파",
            type: "hotel",
            coordinates: { lat: 16.0530442, lng: 108.2475282 },
            checkInTime: "14:00",
            checkOutTime: "12:00",
            city: "Da Nang",
            description: "2025년 가성비 1위, 트립어드바이저",
            tags: ["가성비", "비치"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ❄️ 삿포로 (Sapporo)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Sapporo": [
        {
            name: "JR 타워 호텔 닛코 삿포로",
            type: "hotel",
            coordinates: { lat: 43.0684388, lng: 141.3523648 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "삿포로역 직결, 온천 스파 보유",
            tags: ["역직결", "온천"]
        },
        {
            name: "인터컨티넨탈 삿포로",
            type: "hotel",
            coordinates: { lat: 43.0617713, lng: 141.3544506 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Sapporo",
            description: "2025년 럭셔리 라인, 최소 42㎡ 객실",
            tags: ["오도리", "럭셔리"]
        },
        {
            name: "호텔 소세이 삿포로 엠갤러리",
            type: "hotel",
            coordinates: { lat: 43.0650191, lng: 141.3606067 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "5성급, 앤틱한 분위기",
            tags: ["삿포로역", "럭셔리"]
        },
        {
            name: "그랑벨 호텔 삿포로",
            type: "hotel",
            coordinates: { lat: 43.0550034, lng: 141.3565401 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "루프탑 노천탕, 대욕장",
            tags: ["스스키노", "온천"]
        },
        {
            name: "포르자 호텔 삿포로",
            type: "hotel",
            coordinates: { lat: 43.065455, lng: 141.3526763 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "가성비, 가족 여행",
            tags: ["삿포로역", "가성비"]
        },
        {
            name: "도미인 프리미엄 삿포로",
            type: "hotel",
            coordinates: { lat: 43.057061, lng: 141.34884 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "대욕장 보유",
            tags: ["스스키노", "온천"]
        },
        {
            name: "크로스 호텔 삿포로",
            type: "hotel",
            coordinates: { lat: 43.06404, lng: 141.3532757 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "현대적 디자인",
            tags: ["삿포로역", "모던"]
        },
        {
            name: "베셀 호텔 캄파나 스스키노",
            type: "hotel",
            coordinates: { lat: 43.0542308, lng: 141.3492526 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Sapporo",
            description: "깔끔한 인테리어",
            tags: ["스스키노", "쾌적"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏝️ 오키나와 (Okinawa)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Okinawa": [
        {
            name: "할레쿨라니 오키나와",
            type: "resort",
            coordinates: { lat: 26.5265784, lng: 127.9231466 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Okinawa",
            description: "전 객실 오션뷰, 인피니티 풀",
            tags: ["온나손", "럭셔리"]
        },
        {
            name: "호텔 몬토레 오키나와 스파 앤 리조트",
            type: "resort",
            coordinates: { lat: 26.4537478, lng: 127.8058024 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Okinawa",
            description: "타이거 비치 앞, 온천",
            tags: ["온나손", "온천"]
        },
        {
            name: "더 부세나 테라스",
            type: "resort",
            coordinates: { lat: 26.5404329, lng: 127.9357986 },
            checkInTime: "14:00",
            checkOutTime: "11:00",
            city: "Okinawa",
            description: "5성급 리조트",
            tags: ["나고", "럭셔리"]
        },
        {
            name: "호텔 닛코 아리비라",
            type: "resort",
            coordinates: { lat: 26.4150328, lng: 127.7155444 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Okinawa",
            description: "스페인 풍 건축",
            tags: ["요미탄", "럭셔리"]
        },
        {
            name: "오리엔탈 호텔 오키나와",
            type: "resort",
            coordinates: { lat: 26.5301784, lng: 127.9339101 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Okinawa",
            description: "나고시 북부, 넓은 객실",
            tags: ["나고", "스파"]
        },
        {
            name: "서던 비치 호텔 앤 리조트",
            type: "resort",
            coordinates: { lat: 26.1320273, lng: 127.6529371 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Okinawa",
            description: "이토만시, 아름다운 해변",
            tags: ["남부", "비치"]
        },
        {
            name: "히요리 오션 리조트",
            type: "resort",
            coordinates: { lat: 26.3343533, lng: 127.8056058 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Okinawa",
            description: "2024년 오픈, 전 객실 오션뷰",
            tags: ["온나손", "신상"]
        },
        {
            name: "호시노야 오키나와",
            type: "resort",
            coordinates: { lat: 26.4203689, lng: 127.7148038 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Okinawa",
            description: "호시노 리조트 럭셔리 라인",
            tags: ["요미탄", "럭셔리"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏙️ 상하이 (Shanghai)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Shanghai": [
        {
            name: "콘래드 상하이",
            type: "hotel",
            coordinates: { lat: 31.230416, lng: 121.473701 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Shanghai",
            description: "2024년 신규 오픈",
            tags: ["푸동", "럭셔리"]
        },
        {
            name: "시클루시브 호텔",
            type: "hotel",
            coordinates: { lat: 31.230416, lng: 121.473701 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Shanghai",
            description: "1918년 맨션 개조, 부티크 호텔",
            tags: ["우캉루", "부티크"]
        },
        {
            name: "더 페닌슐라 상하이",
            type: "hotel",
            coordinates: { lat: 31.230416, lng: 121.473701 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Shanghai",
            description: "와이탄, 5성급",
            tags: ["와이탄", "럭셔리"]
        },
        {
            name: "파크 하얏트 상하이",
            type: "hotel",
            coordinates: { lat: 31.234732, lng: 121.50764 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Shanghai",
            description: "상하이 타워, 고층 전망",
            tags: ["푸동", "전망"]
        },
        {
            name: "페어몬트 피스 호텔",
            type: "hotel",
            coordinates: { lat: 31.2390388, lng: 121.4895427 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Shanghai",
            description: "난징루, 역사적 건물",
            tags: ["난징루", "역사"]
        },
        {
            name: "푸시 인터컨티넨탈",
            type: "hotel",
            coordinates: { lat: 31.230416, lng: 121.473701 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Shanghai",
            description: "와이탄 뷰",
            tags: ["푸동", "전망"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏖️ 방콕 (Bangkok)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bangkok": [
        {
            name: "파크 하얏트 방콕",
            type: "hotel",
            coordinates: { lat: 13.743764, lng: 100.54729 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bangkok",
            description: "BTS 플린칫, 럭셔리",
            tags: ["플린칫", "럭셔리"]
        },
        {
            name: "페닌슐라 방콕",
            type: "hotel",
            coordinates: { lat: 13.7231212, lng: 100.5108006 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bangkok",
            description: "차오프라야 강변",
            tags: ["강변", "럭셔리"]
        },
        {
            name: "시암 켐핀스키",
            type: "hotel",
            coordinates: { lat: 13.7484011, lng: 100.5348436 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bangkok",
            description: "시암 파라곤 연결",
            tags: ["시암", "쇼핑"]
        },
        {
            name: "하얏트 플레이스 수쿰윗",
            type: "hotel",
            coordinates: { lat: 13.7563309, lng: 100.5017651 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Bangkok",
            description: "2024년 신상, 가성비",
            tags: ["수쿰윗", "신상"]
        },
        {
            name: "목시 방콕 라차프라송",
            type: "hotel",
            coordinates: { lat: 13.7563309, lng: 100.5017651 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Bangkok",
            description: "2024년 오픈, 모던",
            tags: ["라차프라송", "신상"]
        },
        {
            name: "그랜드 센터 포인트 룸피니",
            type: "hotel",
            coordinates: { lat: 13.7245888, lng: 100.5475271 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Bangkok",
            description: "2025년, 길고 넓은 객실",
            tags: ["룸피니", "신상"]
        },
        {
            name: "머큐어 방콕 수라웡",
            type: "hotel",
            coordinates: { lat: 13.7273198, lng: 100.522248 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Bangkok",
            description: "2024년 3월 오픈",
            tags: ["실롬", "신상"]
        },
        {
            name: "인터컨티넨탈 수쿰윗 59",
            type: "hotel",
            coordinates: { lat: 13.7563309, lng: 100.5017651 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bangkok",
            description: "토롱로, 럭셔리",
            tags: ["토롱로", "럭셔리"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🌴 발리 (Bali)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Bali": [
        {
            name: "디 아푸르바 켐핀스키",
            type: "resort",
            coordinates: { lat: -8.4095178, lng: 115.188916 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "2025년 최고 호텔, 웅장한 풀",
            tags: ["누사두아", "럭셔리"]
        },
        {
            name: "소피텔 발리 누사두아",
            type: "resort",
            coordinates: { lat: -8.7916892, lng: 115.2299236 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "프랑스-발리 조화, 라군 풀",
            tags: ["누사두아", "럭셔리"]
        },
        {
            name: "만다파 리츠칼튼 리저브",
            type: "resort",
            coordinates: { lat: -8.3405389, lng: 115.0919509 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "우붓, 아융강 절경",
            tags: ["우붓", "럭셔리"]
        },
        {
            name: "세인트 레지스 발리",
            type: "resort",
            coordinates: { lat: -8.8128275, lng: 115.2264772 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "최고급, 전용 해변",
            tags: ["누사두아", "럭셔리"]
        },
        {
            name: "포시즌스 사얀",
            type: "resort",
            coordinates: { lat: -8.5003995, lng: 115.2415196 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "우붓 자연 럭셔리 풀빌라",
            tags: ["우붓", "풀빌라"]
        },
        {
            name: "우마나 발리 LXR",
            type: "resort",
            coordinates: { lat: -8.3405389, lng: 115.0919509 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "2025년 주목, 클리프 풀 빌라",
            tags: ["울루와투", "신상"]
        },
        {
            name: "아야나 리조트 앤 스파",
            type: "resort",
            coordinates: { lat: -8.7862171, lng: 115.1392725 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "12개 인피니티 풀, 대규모",
            tags: ["짐바란", "가족"]
        },
        {
            name: "힐튼 발리 리조트",
            type: "resort",
            coordinates: { lat: -8.8256848, lng: 115.2186745 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Bali",
            description: "절벽 위, 프라이빗 해변",
            tags: ["누사두아", "가족"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏖️ 나트랑 (Nha Trang)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Nha Trang": [
        {
            name: "알마 리조트",
            type: "resort",
            coordinates: { lat: 12.2941855, lng: 109.229089 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "12개 수영장, 워터파크",
            tags: ["깜란", "가족"]
        },
        {
            name: "그란 멜리아 나트랑",
            type: "resort",
            coordinates: { lat: 12.076636, lng: 109.192766 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "2023년 오픈, 4베드룸 풀빌라",
            tags: ["나트랑", "신상"]
        },
        {
            name: "아미아나 리조트 나트랑",
            type: "resort",
            coordinates: { lat: 12.295209, lng: 109.2338719 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "프라이빗 해변, 스노클링",
            tags: ["나트랑", "비치"]
        },
        {
            name: "아미아나 리조트 깜란",
            type: "resort",
            coordinates: { lat: 12.1050356, lng: 109.1912295 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "독립형 풀빌라, 한적한 휴양",
            tags: ["깜란", "풀빌라"]
        },
        {
            name: "빈펄 리조트",
            type: "resort",
            coordinates: { lat: 12.220935, lng: 109.2473572 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "다양한 놀이시설",
            tags: ["나트랑", "가족"]
        },
        {
            name: "하바나 나트랑 호텔",
            type: "hotel",
            coordinates: { lat: 12.2433961, lng: 109.195842 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Nha Trang",
            description: "프라이빗 해변, 최고층 오션뷰",
            tags: ["나트랑", "전망"]
        },
        {
            name: "퓨전 리조트 깜 라인",
            type: "resort",
            coordinates: { lat: 12.0500142, lng: 109.2040205 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "공항 10분, 한적한 휴양",
            tags: ["깜란", "휴양"]
        },
        {
            name: "식스센스 닌반 베이",
            type: "resort",
            coordinates: { lat: 12.3589397, lng: 109.2776855 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Nha Trang",
            description: "럭셔리 풀빌라",
            tags: ["닌반", "럭셔리"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏝️ 세부 (Cebu)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Cebu": [
        {
            name: "샹그릴라 막탄",
            type: "resort",
            coordinates: { lat: 10.3081301, lng: 124.0200301 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "530개 객실, 400m 백사장",
            tags: ["막탄", "럭셔리"]
        },
        {
            name: "크림슨 리조트 앤 스파",
            type: "resort",
            coordinates: { lat: 10.2966371, lng: 124.0140605 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "프라이빗 바다, 인피니티 풀",
            tags: ["막탄", "럭셔리"]
        },
        {
            name: "제이파크 아일랜드 리조트",
            type: "resort",
            coordinates: { lat: 10.282778, lng: 123.9955854 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "워터파크, 가족 추천",
            tags: ["막탄", "가족"]
        },
        {
            name: "뫼벤픽 호텔 막탄",
            type: "resort",
            coordinates: { lat: 10.3105249, lng: 124.0234039 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "고층 리조트, 이비자 클럽",
            tags: ["막탄", "나이트"]
        },
        {
            name: "블루워터 마리바고",
            type: "resort",
            coordinates: { lat: 10.2867261, lng: 124.0011428 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "다양한 객실, 가성비 조식",
            tags: ["막탄", "가성비"]
        },
        {
            name: "두짓 타니 막탄",
            type: "resort",
            coordinates: { lat: 10.3303929, lng: 124.0393159 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "2019년 오픈, 최대 인피니티 풀",
            tags: ["막탄", "풀"]
        },
        {
            name: "바이 호텔 세부",
            type: "hotel",
            coordinates: { lat: 10.3118418, lng: 123.9212061 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "5성급, 인피니티 풀, 루프탑 바",
            tags: ["세부시티", "가성비"]
        },
        {
            name: "플랜테이션 베이",
            type: "resort",
            coordinates: { lat: 10.2605254, lng: 123.9828074 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Cebu",
            description: "웅장하고 독특한 분위기",
            tags: ["막탄", "풀"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏔️ 치앙마이 (Chiang Mai)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Chiang Mai": [
        {
            name: "센사이 호텔 님만",
            type: "hotel",
            coordinates: { lat: 18.795158, lng: 98.968226 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Chiang Mai",
            description: "5성급 부티크, 전통 란나 스타일",
            tags: ["님만", "부티크"]
        },
        {
            name: "아난타라 치앙마이",
            type: "resort",
            coordinates: { lat: 18.7815954, lng: 99.003714 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Chiang Mai",
            description: "5성급, 다양한 액티비티",
            tags: ["올드타운", "럭셔리"]
        },
        {
            name: "부리라타나 호텔",
            type: "hotel",
            coordinates: { lat: 18.7879397, lng: 98.9887655 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Chiang Mai",
            description: "올드타운, 가성비, 선데이 마켓",
            tags: ["올드타운", "가성비"]
        },
        {
            name: "멜리아 치앙마이",
            type: "hotel",
            coordinates: { lat: 18.7852997, lng: 99.0027877 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Chiang Mai",
            description: "2022년 오픈, 나이트 바자 근처",
            tags: ["나이트바자", "신상"]
        },
        {
            name: "라야 헤리티지",
            type: "hotel",
            coordinates: { lat: 18.8486074, lng: 98.98525769999999 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Chiang Mai",
            description: "강변 럭셔리 부티크",
            tags: ["강변", "부티크"]
        },
        {
            name: "크로스 치앙마이 리버사이드",
            type: "hotel",
            coordinates: { lat: 18.7661385, lng: 99.0048216 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Chiang Mai",
            description: "현대적 디자인, 스위트룸",
            tags: ["강변", "모던"]
        },
        {
            name: "포시즌스 리조트",
            type: "resort",
            coordinates: { lat: 18.7883439, lng: 98.98530079999999 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Chiang Mai",
            description: "매림 외곽, 전통 북부 스타일",
            tags: ["매림", "럭셔리"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏝️ 괌 (Guam)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Guam": [
        {
            name: "더 츠바키 타워",
            type: "hotel",
            coordinates: { lat: 13.5216166, lng: 144.8058334 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Guam",
            description: "2020년 오픈, 6성급, 가장 넓은 객실",
            tags: ["투몬", "럭셔리"]
        },
        {
            name: "두짓타니 괌",
            type: "resort",
            coordinates: { lat: 13.5137475, lng: 144.8051339 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Guam",
            description: "5성급, 워터슬라이드",
            tags: ["투몬", "럭셔리"]
        },
        {
            name: "호텔 닛코 괌",
            type: "resort",
            coordinates: { lat: 13.5219545, lng: 144.8048848 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Guam",
            description: "건 비치, 72m 워터슬라이드",
            tags: ["건비치", "가족"]
        },
        {
            name: "하얏트 리젠시 괌",
            type: "resort",
            coordinates: { lat: 13.5121598, lng: 144.8043393 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Guam",
            description: "5성급, 해변 직결",
            tags: ["투몬", "가족"]
        },
        {
            name: "롯데호텔 괌",
            type: "hotel",
            coordinates: { lat: 13.5201894, lng: 144.8072708 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Guam",
            description: "5성급, 한식 조식, 한국인 직원",
            tags: ["투몬", "한식"]
        },
        {
            name: "괌 리프 호텔",
            type: "hotel",
            coordinates: { lat: 13.516843, lng: 144.806098 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Guam",
            description: "인피니티 타워, 가성비",
            tags: ["투몬", "가성비"]
        },
        {
            name: "호텔 타노 괌",
            type: "hotel",
            coordinates: { lat: 13.3823791, lng: 144.6972774 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Guam",
            description: "4성급, 리모델링, 세탁기",
            tags: ["투몬", "가성비"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🗼 파리 (Paris)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Paris": [
        {
            name: "르 브리스톨 파리",
            type: "hotel",
            coordinates: { lat: 48.87168639999999, lng: 2.3147996 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Paris",
            description: "2025년 최고 평점 5성급",
            tags: ["샹젤리제", "럭셔리"]
        },
        {
            name: "리츠 파리",
            type: "hotel",
            coordinates: { lat: 48.8682, lng: 2.3288 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Paris",
            description: "상징적 럭셔리 호텔",
            tags: ["방돔", "럭셔리"]
        },
        {
            name: "호텔 르 들뤼스",
            type: "hotel",
            coordinates: { lat: 48.8575475, lng: 2.3513765 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Paris",
            description: "루브르 근처 부티크",
            tags: ["루브르", "부티크"]
        },
        {
            name: "풀먼 파리 투르 에펠",
            type: "hotel",
            coordinates: { lat: 48.8556488, lng: 2.2928584 },
            checkInTime: "15:00",
            checkOutTime: "12:00",
            city: "Paris",
            description: "에펠탑 도보 5분, 에펠탑 뷰",
            tags: ["에펠탑", "전망"]
        },
        {
            name: "이비스 파리 에펠 타워",
            type: "hotel",
            coordinates: { lat: 48.85837009999999, lng: 2.2944813 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Paris",
            description: "가성비, 에펠탑 근처",
            tags: ["에펠탑", "가성비"]
        },
        {
            name: "호텔 R 드 파리",
            type: "hotel",
            coordinates: { lat: 48.879942, lng: 2.329001 },
            checkInTime: "15:00",
            checkOutTime: "11:00",
            city: "Paris",
            description: "오페라 근처, 최근 리노베이션",
            tags: ["오페라", "깨끗"]
        }
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏝️ 기타 도시 (데이터 준비 중)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Dalyan": [],  // 달랏 - 추후 추가 예정
    "Dalian": [],  // 다롄 - 추후 추가 예정
    "Ulaanbaatar": [],  // 울란바토르 - 추후 추가 예정
    "Majorca": []  // 마요르카 - 추후 추가 예정
};

/**
 * 도시별 숙박 목록 조회
 */
export function getAccommodationsByCity(cityEngName: string): AccommodationData[] {
    // 대소문자 무관 검색: 입력값을 소문자로 변환 후 키 매칭
    const normalizedInput = cityEngName.toLowerCase();
    const matchedKey = Object.keys(ACCOMMODATIONS_DATA).find(
        key => key.toLowerCase() === normalizedInput
    );
    return matchedKey ? ACCOMMODATIONS_DATA[matchedKey] : [];
}

/**
 * 숙박 타입별 필터링
 */
export function filterAccommodationsByType(
    accommodations: AccommodationData[],
    type: 'hotel' | 'resort' | 'all'
): AccommodationData[] {
    if (type === 'all') return accommodations;
    return accommodations.filter(acc => acc.type === type);
}
