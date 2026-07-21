import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "라일레이 비치": {
        photos: ["/images/krabi/info/tourSpa/railay-beach-krabi.jpg"],
        summary: "절벽과 롱테일보트가 어우러진 풍경이 아름다운 끄라비의 핵심 해변입니다.",
        updatedAt: "2026-07-21",
        highlights: ["웅장한 석회암 절벽", "전통적인 롱테일보트 정박지"],
        tips: ["클라이밍을 즐기기에 최적의 장소입니다."],
        duration: "반나절~1일",
        price: "보트·투어별 상이",
        access: { area: "태국 크래비 아오낭 라일레이 해변", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7050538811056541825", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%BC%EB%A0%88%EC%9D%B4+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "프라낭 케이브 비치": {
        photos: ["/images/krabi/info/tourSpa/phra-nang-cave-beach-krabi.jpg"],
        summary: "동굴과 해변의 조화가 매력적인 라일레이 남쪽의 인기 코스입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신비로운 분위기의 동굴", "아름다운 해안선"],
        tips: ["물때를 확인하여 방문하는 것이 좋습니다."],
        duration: "2~4시간",
        price: "보트·투어별 상이",
        access: { area: "Phra nang Cave Beach, Krabi, 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1506081915522107425", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%9D%BC%EB%82%AD+%EC%BC%80%EC%9D%B4%EB%B8%8C+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "홍섬": {
        photos: ["/images/krabi/info/tourSpa/hong-island-krabi.jpg"],
        summary: "라군과 전망대, 스노클링으로 유명한 크라비의 대표적인 섬 투어 코스입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 라군 경관", "전망대에서의 파노라마 뷰", "맑은 바다에서의 스노클링"],
        tips: ["전망대까지 올라가는 길이 가파를 수 있으니 편한 신발을 착용하세요."],
        duration: "반나절~1일",
        price: "투어별 상이",
        access: { area: "3MHJ+J6H, Nong Thale, Mueang Krabi District, Krabi 81110 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1999823209887088797", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EC%84%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "피피섬 투어": {
        photos: ["/images/krabi/info/tourSpa/phi-phi-islands-krabi.jpg"],
        summary: "마야베이와 필레라군 등 환상적인 해변을 둘러보는 장거리 섬 투어입니다.",
        updatedAt: "2026-07-21",
        highlights: ["영화 속 마야베이 방문", "필레라군의 에메랄드빛 바다", "다양한 스노클링 포인트"],
        tips: ["이동 시간이 길 수 있으므로 멀미약 준비를 권장합니다."],
        duration: "1일",
        price: "투어별 상이",
        access: { area: "태국 크래비 Mueang Krabi District, 피피섬", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13807394858565148529", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%ED%94%BC%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "끄라비 4섬 투어": {
        photos: ["/images/krabi/info/tourSpa/four-islands-tour-krabi.jpg"],
        summary: "포다섬, 치킨섬, 탑섬, 프라낭 일대를 한 번에 둘러보는 기본 섬투어입니다.",
        updatedAt: "2026-07-21",
        highlights: ["포다섬·치킨섬·탑섬·프라낭 일대 포함", "스노클링 및 해변 휴양 가능"],
        tips: ["기본적인 섬 투어 코스로 초보자에게 추천합니다"],
        duration: "반나절~1일",
        price: "투어별 상이",
        access: { area: "633 Moo 2 Railay East Railay, ตำบล อ่าวนาง อำเภอเมืองกระบี่ กระบี่ 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.blancothailand.com/krabi-island-adventure/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8311142168474808022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%81%84%EB%9D%BC%EB%B9%84+4%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "포다섬": {
        photos: ["/images/krabi/info/tourSpa/koh-poda-krabi.jpg"],
        summary: "하얀 모래사장과 아름다운 바다색으로 유명한 4섬 투어의 핵심 포인트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 에메랄드빛 바다", "하얀 모래사장"],
        tips: ["스노클링 장비를 챙겨가면 더욱 좋습니다"],
        duration: "반나절",
        price: "투어별 상이",
        access: { area: "Ko Poda, Mueang Krabi District, Krabi, 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16337395671683894106", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%8B%A4%EC%84%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "치킨섬": {
        photos: ["/images/krabi/info/tourSpa/chicken-island-krabi.jpg"],
        summary: "닭 머리 모양의 독특한 바위가 특징인 스노클링 명소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["닭 모양 바위 관람", "스노클링 즐기기"],
        tips: ["물때를 확인하고 방문하는 것이 좋습니다."],
        duration: "반나절",
        price: "투어별 상이",
        access: { area: "태국 크래비 Mueang Krabi District, 아오낭 WRX5+J8X", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16082146524355108432", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%ED%82%A8%EC%84%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "에메랄드 풀": {
        photos: ["/images/krabi/info/tourSpa/emerald-pool-krabi.jpg"],
        summary: "숲속에서 만나는 신비로운 에메랄드빛 천연 온천입니다.",
        updatedAt: "2026-07-21",
        highlights: ["에메랄드빛 천연 수영장", "아름다운 숲길 트레킹"],
        tips: ["주변의 블루 풀도 함께 둘러보세요."],
        duration: "반나절~1일",
        price: "입장권·차량 별도",
        access: { area: "Khlong Thom Nuea, Khlong Thom District, Krabi 81120 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12510852535467263470", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EB%A9%94%EB%9E%84%EB%93%9C+%ED%92%80+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타이거 케이브 템플": {
        photos: ["/images/krabi/info/tourSpa/tiger-cave-temple-krabi.jpg"],
        summary: "계단을 올라 끄라비의 탁 트인 전망을 감상할 수 있는 대표적인 사원입니다.",
        updatedAt: "2026-07-21",
        highlights: ["웅장한 계단 오르기", "끄라비 전경 조망"],
        tips: ["편안한 운동화 착용 권장"],
        duration: "2~4시간",
        price: "입장 무료/기부 가능",
        access: { area: "35 Tambon Krabi Noi, Amphoe Mueang Krabi, Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6104414347015522321", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EA%B1%B0+%EC%BC%80%EC%9D%B4%EB%B8%8C+%ED%85%9C%ED%94%8C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "클롱톰 온천": {
        photos: ["/images/krabi/info/tourSpa/klong-thom-hot-springs-krabi.jpg"],
        summary: "온천수와 숲속의 자연이 어우러져 휴식을 취하기 좋은 힐링 코스입니다.",
        updatedAt: "2026-07-21",
        highlights: ["따뜻한 온천수 체험", "울창한 숲속 산책"],
        tips: ["수영복 지참 필수"],
        duration: "2~4시간",
        price: "입장권 별도",
        access: { area: "W6J4+H83, Khlong Thom Nuea, Khlong Thom District, Krabi 81120 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14669138356759617241", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%B4%EB%A1%B1%ED%86%B0+%EC%98%A8%EC%B2%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아오 탈라네 카약": {
        photos: ["/images/krabi/info/tourSpa/ao-thalane-kayak-krabi.png"],
        summary: "맹그로브 숲 사이를 유유히 지나가는 환상적인 카약 투어를 즐길 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["신비로운 맹그로브 생태계 체험", "고요한 자연 속에서의 카약킹"],
        tips: ["가이드 투어를 이용하면 더 자세한 설명을 들을 수 있습니다."],
        duration: "반나절",
        price: "투어별 상이",
        access: { area: "33 1, Tambon Khao Thong, Amphoe Mueang Krabi, Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18165620528718757013", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%98%A4+%ED%83%88%EB%9D%BC%EB%84%A4+%EC%B9%B4%EC%95%BD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노파랏 타라 비치": {
        photos: ["/images/krabi/info/tourSpa/noppharat-thara-beach-krabi.jpg"],
        summary: "아오낭 북쪽에 위치한 조용하고 평화로운 해변 산책 코스입니다.",
        updatedAt: "2026-07-21",
        highlights: ["여유로운 해변 산책", "조용한 분위기의 휴식"],
        tips: ["일몰 시간에 맞춰 방문하면 아름다운 노을을 볼 수 있습니다."],
        duration: "1~2시간",
        price: "무료",
        access: { area: "Nopharat Thara Beach, Krabi 81180 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1959338552868998658", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%ED%8C%8C%EB%9E%8F+%ED%83%80%EB%9D%BC+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카오 응온 낙 전망대": {
        photos: ["/images/krabi/info/tourSpa/khao-ngon-nak-viewpoint-krabi.jpg"],
        summary: "탑켁 근처에서 트레킹을 통해 아름다운 풍경을 감상할 수 있는 전망대입니다.",
        updatedAt: "2026-07-21",
        highlights: ["트레킹 코스", "탁 트인 파노라마 뷰"],
        tips: ["편안한 운동화 착용 권장"],
        duration: "3~5시간",
        price: "입장 조건 확인",
        access: { area: "3QV8+J2V, Nong Thale, Mueang Krabi District, Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6874782678292374940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4+%EC%9D%91%EC%98%A8+%EB%82%99+%EC%A0%84%EB%A7%9D%EB%8C%80+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "끄라비 엘리펀트 생추어리": {
        photos: ["/images/krabi/info/tourSpa/krabi-elephant-sanctuary.jpg"],
        summary: "코끼리를 보호하고 교감하며 특별한 체험 프로그램을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["코끼리 보호구역 체험", "동물 교감 프로그램"],
        tips: ["사전 예약 필수"],
        duration: "반나절",
        price: "프로그램별 상이",
        access: { area: "165 หมู่4 หนองทะเล Tambon Nong Thale, เมือง Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://www.theelephantsanctuarykrabi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16057178747363833839", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%81%84%EB%9D%BC%EB%B9%84+%EC%97%98%EB%A6%AC%ED%8E%80%ED%8A%B8+%EC%83%9D%EC%B6%94%EC%96%B4%EB%A6%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "끄라비 선셋 크루즈": {
        photos: ["/images/krabi/info/tourSpa/krabi-sunset-cruise.jpg"],
        summary: "해 질 무렵 아름다운 바다 풍경을 감상하며 즐길 수 있는 크루즈 액티비티입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 일몰 전망", "바다 위 낭만적인 분위기"],
        tips: ["일몰 시간에 맞춰 미리 예약하는 것을 추천합니다."],
        duration: "3~5시간",
        price: "상품별 상이",
        access: { area: "282/19 5, T, ซอย กระบี่ 11 ตำบล ไสไทย อำเภอเมืองกระบี่ กระบี่ 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://krabisunsetcruises.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17035742537398663729", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%81%84%EB%9D%BC%EB%B9%84+%EC%84%A0%EC%85%8B+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파 끄라비": {
        photos: ["/images/krabi/info/tourSpa/let-s-relax-spa-krabi-ao-nang.jpg"],
        summary: "아오낭 해변에서 접근성이 매우 뛰어난 프리미엄 브랜드 스파입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전문적인 스파 서비스", "아오낭 중심가 위치"],
        tips: ["인기가 많으므로 사전 예약이 필수입니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "981 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://letsrelaxspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13449642187513000652", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0+%EB%A6%B4%EB%A0%89%EC%8A%A4+%EC%8A%A4%ED%8C%8C+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라다롬 스파 아오낭": {
        photos: ["/images/krabi/info/tourSpa/radarom-spa-ao-nang-krabi.png"],
        summary: "아오낭 마사지 및 스파 일정에 포함하기 좋은 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도", "아오낭 지역 추천 스파"],
        tips: ["스파 일정 계획 시 우선순위로 고려해보세요"],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "43, 2, Tambon Ao Nang, Amphoe Mueang, Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://radaromspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3500888404680754070", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%8B%A4%EB%A1%AC+%EC%8A%A4%ED%8C%8C+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "부사바콘 스파 끄라비": {
        photos: ["/images/krabi/info/tourSpa/boossabakorn-spa-krabi-ao-nang.jpg"],
        summary: "마사지와 전문적인 스파 케어를 동시에 즐길 수 있는 아오낭의 스파입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전문적인 마사지 서비스", "뷰티 및 스파 케어 제공"],
        tips: ["예약 후 방문하는 것을 권장합니다"],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "132 35, Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81000 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.boossabakornspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2908854925423843169", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EC%82%AC%EB%B0%94%EC%BD%98+%EC%8A%A4%ED%8C%8C+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아오낭 헤이븐 마사지": {
        photos: ["/images/krabi/info/tourSpa/aonang-haven-massage-krabi.jpg"],
        summary: "관광 후 쌓인 피로를 풀기에 적합한 마사지 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["피로 회복에 특화된 프로그램", "쾌적한 마사지 환경"],
        tips: ["여행 일정 중 휴식이 필요할 때 방문하기 좋습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "304, Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6657999170134247086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%98%A4%EB%82%AD+%ED%97%A4%EC%9D%B4%EB%B8%90+%EB%A7%88%EC%82%AC%EC%A7%80+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마사지 코너 아오낭": {
        photos: ["/images/krabi/info/tourSpa/massage-corner-ao-nang-krabi.jpg"],
        summary: "아오낭 중심부에 위치하여 접근성이 매우 뛰어난 마사지 숍입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도와 평점", "찾기 쉬운 편리한 위치"],
        tips: ["중심가 구경 중 가볍게 들르기 좋습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "155 17 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://www.massagecorneraonang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8121468282510220796", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%82%AC%EC%A7%80+%EC%BD%94%EB%84%88+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
