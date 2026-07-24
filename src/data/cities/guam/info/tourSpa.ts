import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "사랑의 절벽": {
        photos: ["/images/guam/info/tourSpa/two-lovers-point-guam.jpg"],
        summary: "투몬 북쪽 절벽에서 바다 전망과 사진 포인트를 즐기는 괌 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 북쪽 절벽에서 바다 전망과 사진 포인트를 즐기는 괌 대표 명소입니다.", "평점 4.3", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 타무닝 GRM2+XXQ", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12962477496772517759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%9E%91%EC%9D%98+%EC%A0%88%EB%B2%BD+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "투몬 비치": {
        photos: ["/images/guam/info/tourSpa/tumon-beach-guam.jpg"],
        summary: "호텔 접근성이 좋고 해변 산책, 스노클링, 선셋 감상에 적합한 중심 해변입니다.",
        updatedAt: "2026-07-14",
        highlights: ["호텔 접근성이 좋고 해변 산책, 스노클링, 선셋 감상에 적합한 중심 해변입니다.", "평점 4.6", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절",
        price: "무료·액티비티 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 96913 타무닝 투몬 해변", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=417884184141687006", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%AC%EB%AA%AC+%EB%B9%84%EC%B9%98+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피시 아이 마린 파크": {
        photos: ["/images/guam/info/tourSpa/fish-eye-marine-park-guam.jpg"],
        summary: "해중 전망대와 스노클링, 디너쇼를 결합하기 좋은 해양 액티비티 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["해중 전망대와 스노클링, 디너쇼를 결합하기 좋은 해양 액티비티 명소입니다.", "평점 4.2", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "2~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "818 North, Marine Corps Dr, Piti, 96915 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fisheyeguamtours.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4151361400670965917", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%8B%9C+%EC%95%84%EC%9D%B4+%EB%A7%88%EB%A6%B0+%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "밸리 오브 더 라테 어드벤처 파크": {
        photos: ["/images/guam/info/tourSpa/valley-of-the-latte-adventure-park-guam.jpg"],
        summary: "강 보트와 차모로 문화 체험을 묶어 가족 여행에 좋은 투어 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["강 보트와 차모로 문화 체험을 묶어 가족 여행에 좋은 투어 코스입니다.", "평점 4.7", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 오전 8:30 ~ 오후 1:30",
        duration: "반나절",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4, Talo'fo'fo, 96915 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://valleyofthelatte.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5824941139918152828", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%B8%EB%A6%AC+%EC%98%A4%EB%B8%8C+%EB%8D%94+%EB%9D%BC%ED%85%8C+%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98+%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코코스 아일랜드": {
        photos: ["/images/guam/info/tourSpa/cocos-island-guam.jpg"],
        summary: "괌 남쪽의 작은 섬에서 해양 액티비티와 휴양을 즐기는 하루 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["괌 남쪽의 작은 섬에서 해양 액티비티와 휴양을 즐기는 하루 코스입니다.", "평점 4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "하루",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 코코스 섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17031183950375466341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%94%EC%8A%A4+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에메랄드 밸리": {
        photos: ["/images/guam/info/tourSpa/emerald-valley.jpg"],
        summary: "신비로운 에메랄드빛 수로와 푸른 숲이 어우러진 괌 남부의 인생샷 명소",
        updatedAt: "2026-07-23",
        highlights: ["에메랄드 빛깔의 투명하고 아름다운 수로 감상", "열대 우림 속에서 즐기는 평화로운 산책 코스", "SNS를 장식할 환상적인 자연 풍경과 포토존"],
        tips: ["물 색깔이 가장 선명하게 보이는 맑은 날 방문하는 것을 추천하며, 주변에 편의시설이 부족하니 미리 준비해 가세요."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "30분~1시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "괌 피티", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://jw.org/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=17268866398988886604", type: "guide", description: "지도에서 위치 보기" }]
    },
    "돌핀 크루즈": {
        photos: ["/images/guam/info/tourSpa/dolphin-cruise.jpg"],
        summary: "야생 돌고래 관찰과 스노클링을 한 번에 즐기는 괌 필수 액티비티",
        updatedAt: "2026-07-23",
        highlights: ["자연 그대로의 야생 돌고래 가족 관찰", "맑은 바다 속을 탐험하는 스노클링 체험", "크루즈 위에서 만끽하는 여유로운 휴식"],
        tips: ["돌고래를 더 잘 보기 위해 선글라스와 선크림을 꼭 준비하세요. 멀미가 걱정된다면 탑승 전 미리 상비약을 챙기는 것이 좋습니다."],
        hours: "월요일: 오전 8:25 ~ 오후 2:30; 화요일: 오전 8:25 ~ 오후 2:30",
        duration: "2~3시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "9M92+H7V, Hågat, 96910 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://mkt.shopping.naver.com/link/68255b2c815d2663a4632fca", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=5845362531315295302", type: "guide", description: "지도에서 위치 보기" }]
    },
    "괌 남부투어": {
        photos: ["/images/guam/info/tourSpa/guam-southern-tour.jpg"],
        summary: "괌 남부의 주요 명소를 효율적으로 둘러보는 테마별 옵션 투어 서비스",
        updatedAt: "2026-07-23",
        highlights: ["괌 남부의 아름다운 해변과 자연 경관 감상", "해중 전망대 등 놓치기 아쉬운 핵심 스팟 방문", "여행 스타일에 맞춘 다양한 테마별 투어 프로그램"],
        tips: ["인기 있는 투어 코스는 사전 예약이 필수이며, 남부 지역의 특성상 햇빛이 강하므로 선크림과 모자를 꼭 준비하세요."],
        hours: "월요일: 오전 6:00 ~ 오후 4:00; 화요일: 오전 6:00 ~ 오후 4:00",
        duration: "4~6시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "674A S Marine Corps Dr, Apotgan, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://turtletoursguam.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=6772819386362287956", type: "guide", description: "지도에서 위치 보기" }]
    },
    "리티디안 비치": {
        photos: ["/images/guam/info/tourSpa/ritidian-beach.jpg"],
        summary: "에메랄드빛 바다와 산호초가 매력적인 괌 북부의 숨겨진 보석, 리티디안 비치",
        updatedAt: "2026-07-23",
        highlights: ["투명도가 높은 에메랄드빛 바다에서의 스노클링", "아름다운 산호초와 다양한 열대어 관찰 가능", "사람의 손길이 닿지 않은 깨끗하고 평화로운 자연 경관"],
        tips: ["국립공원 구역이므로 쓰레기 배출 금지 및 환경 보호 필수", "편의시설이 부족하므로 간단한 간식과 식수를 미리 준비하세요"],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Ritidian Beach, Yigo, 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12671301257475471887", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12671301257475471887", type: "guide", description: "지도에서 위치 보기" }]
    },
    "괌 별빛투어": {
        photos: ["/images/guam/info/tourSpa/guam-stargazing-tour.jpg"],
        summary: "괌 남부의 아름다운 밤하늘과 바다 전망을 한눈에 담을 수 있는 야간 명소",
        updatedAt: "2026-07-23",
        highlights: ["쏟아지는 별빛 아래 즐기는 로맨틱한 밤하늘 감상", "잔잔한 아산 만의 파도와 어우러진 환상적인 야경", "인생 사진을 남길 수 있는 최고의 별빛 촬영 스팟"],
        tips: ["밤에는 기온이 떨어질 수 있으니 가벼운 외투를 준비하세요.", "별빛을 선명하게 담고 싶다면 삼각대를 지참하는 것을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "FP68+35G, 6, Maina, 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.nps.gov/wapa/planyourvisit/asan-bay-overlook.htm", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2735500620441454953", type: "guide", description: "지도에서 위치 보기" }]
    },
    "이파오 비치": {
        photos: ["/images/guam/info/tourSpa/ypao-beach.jpg"],
        summary: "알록달록한 물고기와 산호초를 가까이서 관찰할 수 있는 괌 투몬 지역의 대표적인 스노클링 포인트입니다.",
        updatedAt: "2026-07-23",
        highlights: ["다채로운 열대어와 산호초를 볼 수 있는 스노클링 성지", "파도가 잔잔하여 아이들과 함께 즐기기 좋은 안전한 해변", "투몬 시내와 인접해 접근성이 뛰어난 위치"],
        tips: ["물고기가 많은 구역을 찾으려면 산호초 근처를 천천히 유영하세요.", "스노클링 장비는 현지에서 대여하거나 미리 준비해 오시는 것을 추천합니다."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "429 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=6145990144336252374", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=6145990144336252374", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
