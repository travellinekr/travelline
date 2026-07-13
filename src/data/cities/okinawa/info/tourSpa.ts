import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "슈리성": {
        photos: ["/images/okinawa/info/tourSpa/shurijo-castle-okinawa.jpg"],
        summary: "류큐 왕국 역사를 대표하는 오키나와 핵심 문화 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["류큐 왕국 역사를 대표하는 오키나와 핵심 문화 명소입니다.", "평점 4.2", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 7:00; 화요일: 오전 8:30 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "3-chōme-1-2 Shurikinjōchō, Naha, Okinawa 903-0815 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://oki-park.jp/shurijo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13873795751300976523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%EB%A6%AC%EC%84%B1+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 츄라우미 수족관": {
        photos: ["/images/okinawa/info/tourSpa/okinawa-churaumi-aquarium.jpg"],
        summary: "대형 수조와 고래상어로 유명한 북부 대표 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 수조와 고래상어로 유명한 북부 대표 수족관입니다.", "평점 4.6", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:30; 화요일: 오전 8:30 ~ 오후 6:30",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://churaumi.okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16863911804921552894", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%B8%84%EB%9D%BC%EC%9A%B0%EB%AF%B8+%EC%88%98%EC%A1%B1%EA%B4%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코우리섬": {
        photos: ["/images/okinawa/info/tourSpa/kouri-island-okinawa.jpg"],
        summary: "드라이브와 바다 전망, 하트록 동선을 함께 즐기기 좋은 섬입니다.",
        updatedAt: "2026-07-13",
        highlights: ["드라이브와 바다 전망, 하트록 동선을 함께 즐기기 좋은 섬입니다.", "평점 4.6", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒905-0406 오키나와현 Kunigami District, 나키진손 고우리 고우리 섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18322415765771207538", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%9A%B0%EB%A6%AC%EC%84%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만좌모": {
        photos: ["/images/okinawa/info/tourSpa/cape-manzamo-okinawa.jpg"],
        summary: "코끼리 모양의 절벽과 탁 트인 해안 절경을 감상할 수 있는 오키나와의 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["코끼리 형상의 독특한 바위 절벽", "푸른 바다와 어우러진 환상적인 해안 전망"],
        tips: ["일몰 시간대에 맞춰 방문하면 더욱 아름다운 풍경을 볼 수 있어요."],
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        duration: "1시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒904-0411 오키나와현 Kunigami District, 온나손 온나", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.manzamo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16135339115350022424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%A2%8C%EB%AA%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 푸른동굴": {
        photos: ["/images/okinawa/info/tourSpa/blue-cave-okinawa-onna.jpg"],
        summary: "신비로운 푸른 빛이 감도는 동굴 속에서 해양 액티비티를 즐길 수 있는 스노클링 성지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["에메랄드빛 바다와 신비로운 동굴 내부", "스노클링 및 스쿠버 다이빙 명소"],
        tips: ["날씨와 물때의 영향을 받으므로 사전 예약 후 방문하는 것을 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "469-1 Maeda, Onna, Kunigami District, Okinawa 904-0417 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9828574069417643328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%91%B8%EB%A5%B8%EB%8F%99%EA%B5%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
