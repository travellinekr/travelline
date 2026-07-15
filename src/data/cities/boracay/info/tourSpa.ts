import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "화이트 비치": {
        photos: ["/images/boracay/info/tourSpa/white-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.6", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "White Beach, Boracay, Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.whitebeachboracay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4917457344593196210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%94%EC%9D%B4%ED%8A%B8+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸카 쉘 비치": {
        photos: ["/images/boracay/info/tourSpa/puka-shell-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 푸카 셸 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3341578129462757940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EC%B9%B4+%EC%89%98+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디니위드 비치": {
        photos: ["/images/boracay/info/tourSpa/diniwid-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "950 Din-Iwid Rd, Malay, 5608 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11338223564412897110", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%8B%88%EC%9C%84%EB%93%9C+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "불라복 비치": {
        photos: ["/images/boracay/info/tourSpa/bulabog-beach-boracay.jpg"],
        summary: "보라카이의 역동적인 에너지를 느낄 수 있는 수상 스포츠의 천국",
        updatedAt: "2026-07-15",
        highlights: ["윈드서핑과 카이트서핑 성지", "활기찬 해변 분위기"],
        tips: ["바람이 강한 시즌에 방문하면 더 다양한 액티비티를 즐길 수 있어요"],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 불라복 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3064532139371220294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%88%EB%9D%BC%EB%B3%B5+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루호산 전망대": {
        photos: ["/images/boracay/info/tourSpa/mount-luho-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 3.4", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 말레이 루호 산", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9461910832689008899", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%ED%98%B8%EC%82%B0+%EC%A0%84%EB%A7%9D%EB%8C%80+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윌리스 록": {
        photos: ["/images/boracay/info/tourSpa/willys-rock-boracay.jpg"],
        summary: "보라카이의 상징적인 바위와 성모 마리아상이 있는 아름다운 명소",
        updatedAt: "2026-07-15",
        highlights: ["에메랄드빛 바다와 조화로운 바위", "인생샷 스팟"],
        tips: ["물때를 확인하고 방문하면 더 선명한 사진을 찍을 수 있어요"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 말레이 XW99+7FW", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11756540478453161572", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%8C%EB%A6%AC%EC%8A%A4+%EB%A1%9D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "보라카이 호핑투어": {
        photos: ["/images/boracay/info/tourSpa/boracay-island-hopping.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bolabog St, Bolabog St, Boracay, Malay, 5608 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/BoracayToursbyKuyaAldrien/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6471424279346418103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%98%B8%ED%95%91%ED%88%AC%EC%96%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아리엘스 포인트": {
        photos: ["/images/boracay/info/tourSpa/ariel-s-point-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.7", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Batason, Buruanga, 5609 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://arielspoint.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6238193883404939443", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%97%98%EC%8A%A4+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크리스탈 코브 아일랜드": {
        photos: ["/images/boracay/info/tourSpa/crystal-cove-island-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.3", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "WXV5+R64 Tabon Point, Nabas, 5618 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18020685935505333525", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88+%EC%BD%94%EB%B8%8C+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매직 아일랜드": {
        photos: ["/images/boracay/info/tourSpa/magic-island-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 나바스 WXR4+RR9", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2225556105038621646", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EC%A7%81+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
