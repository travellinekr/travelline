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
};

export default info;
