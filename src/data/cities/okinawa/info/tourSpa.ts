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
    "미하마 아메리칸 빌리지": {
        photos: ["/images/okinawa/info/tourSpa/mihama-american-village.jpg"],
        summary: "이국적인 거리 풍경과 아름다운 일몰을 즐기며 산책과 식사를 동시에 만끽할 수 있는 차탄 지역의 핫플레이스입니다.",
        updatedAt: "2026-07-23",
        highlights: ["미국식 감성의 이국적인 거리 산책", "바다를 배경으로 한 환상적인 일몰 감상", "다양한 테마의 맛집과 카페 탐방"],
        tips: ["일몰 시간에 맞춰 방문하면 인생 사진을 남기기 좋습니다.", "주변에 사진 찍기 좋은 포토존이 많으니 카메라를 준비하세요."],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "2~3시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "일본 〒904-0115 오키나와현 Nakagami District, 자탄조 미하마", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://www.okinawa-americanvillage.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2008179420793048012", type: "guide", description: "지도에서 위치 보기" }]
    },
    "오키나와 차탄 선셋비치": {
        photos: ["/images/okinawa/info/tourSpa/chatan-sunset-beach.jpg"],
        summary: "아름다운 낙조와 함께 낭만적인 분위기를 만끽할 수 있는 차탄의 명소",
        updatedAt: "2026-07-23",
        highlights: ["환상적인 일몰 감상 포인트", "미하마 선셋 문로드 인근 산책 가능", "로맨틱한 데이트 코스"],
        tips: ["일몰 시간 전 미리 도착하여 자리 잡기", "주변 아메리칸 빌리지와 연계하여 방문 추천"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "2 Mihama, Chatan, Nakagami District, Okinawa 904-0115 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://dormy-hotels.com/resort/hotels/okinawa/sunsetbeach/?utm_source=google&utm_medium=gbp&utm_campaign=gbpurl", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=3015535307302406064", type: "guide", description: "지도에서 위치 보기" }]
    },
    "비세후쿠길": {
        photos: ["/images/okinawa/info/tourSpa/bise-fukugi-tree-road.jpg"],
        summary: "울창한 후쿠기 나무 사이로 펼쳐지는 아름다운 산책길",
        updatedAt: "2026-07-23",
        highlights: ["후쿠기 나무 터널이 만드는 시원한 나무 그늘", "에메랄드빛 바다와 어우러진 이국적인 풍경", "마을의 정취를 느낄 수 있는 고즈넉한 산책로"],
        tips: ["자전거를 대여하여 해안가를 따라 여유롭게 둘러보는 것을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "389 Bise, Motobu, Kunigami District, Okinawa 905-0207 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.motobu-ka.com/tourist_info/tourist_info-post-687/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=11784430391842216502", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
