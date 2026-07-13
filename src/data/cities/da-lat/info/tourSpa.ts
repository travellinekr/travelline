import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "다딴라 폭포": {
        photos: ["/images/da-lat/info/tourSpa/datanla-waterfall-da-lat.jpg"],
        summary: "알파인 코스터와 폭포를 함께 즐기는 달랏 대표 액티비티입니다.",
        updatedAt: "2026-07-13",
        highlights: ["알파인 코스터와 폭포를 함께 즐기는 달랏 대표 액티비티입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:30 ~ 오후 4:30; 화요일: 오전 7:30 ~ 오후 4:30",
        duration: "2~3시간",
        price: "입장/코스터 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "QL20 Đèo Prenn, Xuân Hương - Đà Lạt, Lâm Đồng 66000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://dalattourist.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17928424083927973989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%94%B4%EB%9D%BC+%ED%8F%AD%ED%8F%AC+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린푸옥 사원": {
        photos: ["/images/da-lat/info/tourSpa/linh-phuoc-pagoda-da-lat.jpg"],
        summary: "도자기 모자이크 장식으로 유명한 달랏 근교 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도자기 모자이크 장식으로 유명한 달랏 근교 사원입니다.", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "WFR5+57X, 120 Tự Phước, Trại Mát, Xuân Trường - Đà Lạt, Lâm Đồng 550000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2344460066184159003", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%ED%91%B8%EC%98%A5+%EC%82%AC%EC%9B%90+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레이지 하우스": {
        photos: ["/images/da-lat/info/tourSpa/crazy-house-da-lat.jpg"],
        summary: "독특한 건축물과 포토 스팟으로 유명한 달랏 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["독특한 건축물과 포토 스팟으로 유명한 달랏 명소입니다.", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:30; 화요일: 오전 8:30 ~ 오후 6:30",
        duration: "1시간 내외",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "03 Đ. Huỳnh Thúc Kháng, Xuân Hương - Đà Lạt, Lâm Đồng 66115 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://crazyhouse.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4572962021375949958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%9D%B4%EC%A7%80+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사랑의 계곡": {
        photos: ["/images/da-lat/info/tourSpa/valley-of-love-da-lat.jpg"],
        summary: "호수와 정원 산책, 사진 촬영에 좋은 테마 관광지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["호수와 정원 산책, 사진 촬영에 좋은 테마 관광지입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "3-5-7 Đường Mai Anh Đào, Lâm Viên - Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://ticketssee.com/thunglungtinhyeu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13350656737474802166", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%9E%91%EC%9D%98+%EA%B3%84%EA%B3%A1+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랑비앙산": {
        photos: ["/images/da-lat/info/tourSpa/lang-biang-mountain-da-lat.jpg"],
        summary: "달랏 전망을 보는 산악 드라이브와 트레킹 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["달랏 전망을 보는 산악 드라이브와 트레킹 코스입니다.", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        duration: "반나절",
        price: "지프/입장료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "305 Langbiang, Lang Biang - Đà Lạt, Lâm Đồng 672700 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://dalattourist.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=288633811461070287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%91%EB%B9%84%EC%95%99%EC%82%B0+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꺼우닷 차밭": {
        photos: ["/images/da-lat/info/tourSpa/cau-dat-tea-hill-da-lat.jpg"],
        summary: "차밭 풍경과 카페를 함께 즐기는 외곽 드라이브 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["차밭 풍경과 카페를 함께 즐기는 외곽 드라이브 코스입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        duration: "반나절",
        price: "카페/투어별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Xuan Truong - Da Lat, Lam Dong, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7295685080430411598", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BA%BC%EC%9A%B0%EB%8B%B7+%EC%B0%A8%EB%B0%AD+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뚜옌럼 호수": {
        photos: ["/images/da-lat/info/tourSpa/tuyen-lam-lake-da-lat.png"],
        summary: "호수 전망과 케이블카·사찰 동선을 묶기 좋은 휴식 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["호수 전망과 케이블카·사찰 동선을 묶기 좋은 휴식 코스입니다.", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "2~3시간",
        price: "이용 시설별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Số 1 đường Hoa Hoàng Anh, khu du lịch Hồ Tuyền Lâm, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17700110548276000991", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9A%9C%EC%98%8C%EB%9F%BC+%ED%98%B8%EC%88%98+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
