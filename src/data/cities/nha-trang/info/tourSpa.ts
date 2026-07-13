import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "빈원더스 나트랑": {
        photos: ["/images/nha-trang/info/tourSpa/vinwonders-nha-trang.jpg"],
        summary: "혼쩨섬의 테마파크와 케이블카를 함께 즐기는 대표 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["혼쩨섬의 테마파크와 케이블카를 함께 즐기는 대표 코스입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        duration: "반나절~1일",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Đảo Hòn Tre, Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://booking.vinwonders.com/en-USD/search?code=NTVW1&usingDate=31-10-2025&style=b&VinWonderTagGroupCode=all&utm_source=GG_Business_SEO&utm_medium=&utm_campaign=En__VW_NhaTrang__booking_Website_yennt90&utm_id=&utm_content=", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9397716162511889699", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%9B%90%EB%8D%94%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포나가르 참탑": {
        photos: ["/images/nha-trang/info/tourSpa/po-nagar-cham-towers-nha-trang.jpg"],
        summary: "참파 유적과 시내 전망을 함께 볼 수 있는 나트랑 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["참파 유적과 시내 전망을 함께 볼 수 있는 나트랑 대표 명소입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 6:00 ~ 오후 5:30; 화요일: 오전 6:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "61 Hai Tháng Tư, Bắc Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1251841919817817468", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%82%98%EA%B0%80%EB%A5%B4+%EC%B0%B8%ED%83%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱선사": {
        photos: ["/images/nha-trang/info/tourSpa/long-son-pagoda-nha-trang.jpg"],
        summary: "대형 불상과 시내 전망이 있는 나트랑 사찰 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 불상과 시내 전망이 있는 나트랑 사찰 명소입니다.", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간 내외",
        price: "무료 또는 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "22 Đ. 23 Tháng 10, Tây Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1964151982017053726", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EC%84%A0%EC%82%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "혼문섬 투어": {
        photos: ["/images/nha-trang/info/tourSpa/hon-mun-island-nha-trang.jpg"],
        summary: "스노클링하며 물고기를 구경하기 좋은 나트랑 대표 섬 투어예요.",
        updatedAt: "2026-07-13",
        highlights: ["에메랄드빛 바다 스노클링", "아름다운 섬 풍경"],
        tips: ["자외선 차단제와 래쉬가드는 꼭 챙기세요."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Hòn Mun, Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12870535570708157359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%AC%B8%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아이리조트 머드온천": {
        photos: ["/images/nha-trang/info/tourSpa/i-resort-nha-trang.jpg"],
        summary: "따뜻한 머드 스파로 여행 피로를 싹 풀 수 있는 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["프라이빗 머드탕 체험", "쾌적한 온천 시설"],
        tips: ["수영복이나 래쉬가드를 미리 준비하면 편해요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:30; 화요일: 오전 8:00 ~ 오후 5:30",
        duration: "2~4시간",
        price: "패키지별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "75CG+X3W, Tổ 19 thôn Xuân Ngọc, Tây Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.i-resort.vn/main.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16225829871338576213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A8%B8%EB%93%9C%EC%98%A8%EC%B2%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탑바 머드온천": {
        photos: ["/images/nha-trang/info/tourSpa/thap-ba-mud-bath-nha-trang.jpg"],
        summary: "나트랑에서 유명한 가성비 좋은 머드 온천 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 넘치는 머드 체험", "로컬 분위기 물씬"],
        tips: ["아이리조트보다 조금 더 캐주얼한 느낌이에요."],
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        duration: "2~4시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "438 Ngô Đến, Tây Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://tambunthapba.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10245478832122355109", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%91%EB%B0%94+%EB%A8%B8%EB%93%9C%EC%98%A8%EC%B2%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바호 폭포": {
        photos: ["/images/nha-trang/info/tourSpa/ba-ho-waterfalls-nha-trang.jpg"],
        summary: "트레킹과 물놀이를 함께 즐기는 나트랑 근교 자연 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트레킹과 물놀이를 함께 즐기는 나트랑 근교 자연 코스입니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "7688+9XC, Phạm Văn Đồng, Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10576392866681117825", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%ED%98%B8+%ED%8F%AD%ED%8F%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
