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
    "라비앙로즈스파 달랏": {
        photos: ["/images/da-lat/info/tourSpa/spa-da-lat-zevvcxu0.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "21a Đặng Thái Thân, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=La%20Ros%C3%A9%20Head%20Spa&query_place_id=ChIJi1HpzKoTcTERqX6ZevVcXU0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B9%84%EC%95%99%EB%A1%9C%EC%A6%88%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아나만다라스파 달랏": {
        photos: ["/images/da-lat/info/tourSpa/mandalaspa-da-lat-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "18 Đoàn Thị Điểm, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Dalat%20hana%20spa%20-%20massage%20%28%EB%8B%AC%EB%9E%8F%20%ED%95%98%EB%82%98%20%EC%8A%A4%ED%8C%8C%20-%20%EB%A7%88%EC%82%AC%EC%A7%80%29&query_place_id=ChIJlfe7G0ATcTER8PIlNuMl5Hk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%98%EB%A7%8C%EB%8B%A4%EB%9D%BC%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 에덴스파": {
        photos: ["/images/da-lat/info/tourSpa/da-lat-spa-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "18 Đoàn Thị Điểm, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Dalat%20hana%20spa%20-%20massage%20%28%EB%8B%AC%EB%9E%8F%20%ED%95%98%EB%82%98%20%EC%8A%A4%ED%8C%8C%20-%20%EB%A7%88%EC%82%AC%EC%A7%80%29&query_place_id=ChIJlfe7G0ATcTER8PIlNuMl5Hk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EC%97%90%EB%8D%B4%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키드스파 달랏": {
        photos: ["/images/da-lat/info/tourSpa/spa-da-lat-hspkmoki.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "15 Mạc Đĩnh Chi, Hội An Tây, Đà Nẵng 56000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=White%20Orchids%20Spa%20Hoi%20an&query_place_id=ChIJwaVo_nYOQjERlXFHspkmOKI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%93%9C%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 센스파": {
        photos: ["/images/da-lat/info/tourSpa/da-lat-spa-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "70 Lê Quang Đạo, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%84%BC%20%EB%B6%80%ED%8B%B0%ED%81%AC%20%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD&query_place_id=ChIJYcaS_KMXQjERmonYGVvvyps", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EC%84%BC%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 풋마사지": {
        photos: ["/images/da-lat/info/tourSpa/da-lat-footmassage-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "27, 27/5 Đường Hai Bà Trưng, Cam Ly - Đà Lạt, Lâm Đồng 66108 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Clover%20Spa%20Massage%20Da%20Lat%20-%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80&query_place_id=ChIJbe8XABwTcTERwsJJN28GP4s", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%ED%92%8B%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라스파 달랏": {
        photos: ["/images/da-lat/info/tourSpa/spa-da-lat-urm1vr08.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "74/7 Đ. Nguyễn Đình Chiểu, Lâm Viên - Đà Lạt, Lâm Đồng 67000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=L%C3%A1%20Spa%20-%20G%E1%BB%99i%20%C4%90%E1%BA%A7u%20D%C6%B0%E1%BB%A1ng%20Sinh%2C%20Massge%20Body&query_place_id=ChIJxQ-TcQATcTER1kIuRM1vR08", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "허벌스파 달랏": {
        photos: ["/images/da-lat/info/tourSpa/spa-da-lat-ylzonhjw.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "54 Đ. Trịnh Hoài Đức, Xuân Trường - Đà Lạt, Lâm Đồng 66000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Herbal%20Spa-g%E1%BB%99i%20%C4%91%E1%BA%A7u-massage%20%C4%90%C3%A0%20L%E1%BA%A1t&query_place_id=ChIJmSWfB-cTcTERJWNyLZONHjw", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%88%EB%B2%8C%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 마사지샵": {
        photos: ["/images/da-lat/info/tourSpa/da-lat-massage-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "37 Đường Hai Bà Trưng, Cam Ly - Đà Lạt, Lâm Đồng 67000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Charm%20Spa%20Massage%20%C4%90%C3%A0%20L%E1%BA%A1t&query_place_id=ChIJy12obxUTcTERDGv36WrjF9A", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%EC%83%B5%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 스파": {
        photos: ["/images/da-lat/info/tourSpa/da-lat-spa-da-lat.jpg"],
        summary: "달랏 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "85C trên 1, Nguyễn Văn Trỗi, Xuân Hương - Đà Lạt, Lâm Đồng 67000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Spa%20massage%20%C4%91%C3%A0%20l%E1%BA%A1t%20Ngu%E1%BB%93n%20S%C3%A1ng%20-%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80&query_place_id=ChIJA-b4rykTcTERx_uBQ-9FHYQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EC%8A%A4%ED%8C%8C%20%EB%8B%AC%EB%9E%8F%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달랏 기차역": {
        photos: ["/images/da-lat/info/tourSpa/dalat-railway-station-da-lat.jpg"],
        summary: "프랑스풍 역사 건물과 빈티지 열차 포토존으로 유명한 달랏 대표 명소입니다.",
        updatedAt: "2026-07-22",
        highlights: ["Dalat Railway Station 기준 Google Places 검증", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1시간 내외",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "Quang Trung, Phường 9, Thành phố Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJjQ3XIBkTcTER3YL5ffLfru4", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EA%B8%B0%EC%B0%A8%EC%97%AD%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쑤언흐엉 호수": {
        photos: ["/images/da-lat/info/tourSpa/xuan-huong-lake-da-lat.jpg"],
        summary: "달랏 도심을 감싸는 호수 산책 코스로 카페·야시장 동선과 묶기 좋습니다.",
        updatedAt: "2026-07-22",
        highlights: ["Xuan Huong Lake 기준 Google Places 검증", "평점 4.7", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "Xuan Huong Lake, Lam Dong, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJL9Ajjd8ScTERNAPClxAZWEY", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%91%A4%EC%96%B8%ED%9D%90%EC%97%89%20%ED%98%B8%EC%88%98%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 메모리쇼": {
        photos: ["/images/da-lat/info/tourSpa/dalat-memory-show-da-lat.jpg"],
        summary: "달랏의 역사와 문화를 무대 연출로 보여주는 야간 공연 콘텐츠입니다.",
        updatedAt: "2026-07-22",
        highlights: ["달랏 메모리쇼 기준 Google Places 검증", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "티켓 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "1 Đ. Trần Quốc Toản, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJuUl1zH4TcTERyKAc4GoKEbI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EC%87%BC%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 꽃 정원": {
        photos: ["/images/da-lat/info/tourSpa/dalat-flower-garden-da-lat.jpg"],
        summary: "꽃의 도시 달랏 분위기를 가장 쉽게 느낄 수 있는 대형 정원 산책 코스입니다.",
        updatedAt: "2026-07-22",
        highlights: ["달랏 꽃밭 (꽃정원) 기준 Google Places 검증", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "02 Đ. Trần Nhân Tông, Lâm Viên - Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJZ0qug8wTcTER0m4S0SZkp2I", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%EA%BD%83%20%EC%A0%95%EC%9B%90%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "죽림 선원": {
        photos: ["/images/da-lat/info/tourSpa/truc-lam-zen-monastery-da-lat.jpg"],
        summary: "뚜옌럼 호수 인근의 선종 사원으로 케이블카·호수 코스와 함께 묶기 좋습니다.",
        updatedAt: "2026-07-22",
        highlights: ["Truc Lam Zen Buddhist Temple 기준 Google Places 검증", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 또는 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "WC3M+7MG, Trúc Lâm Yên Tử, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJkXq2pDgVcTERV-WGDk9NtRQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BD%EB%A6%BC%20%EC%84%A0%EC%9B%90%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 클레이 터널": {
        photos: ["/images/da-lat/info/tourSpa/clay-tunnel-da-lat.jpg"],
        summary: "점토 조형물과 포토존이 이어지는 달랏 근교 테마 관광지입니다.",
        updatedAt: "2026-07-22",
        highlights: ["KDL Duong Ham Dieu Khac 기준 Google Places 검증", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "Thành phố Đà Lạt, Lâm Đồng 66000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJv2dGwzhrcTERWbixSfB_mD0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F%20%ED%81%B4%EB%A0%88%EC%9D%B4%20%ED%84%B0%EB%84%90%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바오다이 여름궁전": {
        photos: ["/images/da-lat/info/tourSpa/bao-dai-summer-palace-da-lat.jpg"],
        summary: "베트남 마지막 황제의 별장으로 달랏의 근대사와 건축을 함께 볼 수 있습니다.",
        updatedAt: "2026-07-22",
        highlights: ["바오다이 황제 제 3궁 기준 Google Places 검증", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1시간 내외",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 확인 권장" },
        access: { area: "1 Đường Triệu Việt Vương, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJD6_GOjUTcTERT0qgP1esodo", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%98%A4%EB%8B%A4%EC%9D%B4%20%EC%97%AC%EB%A6%84%EA%B6%81%EC%A0%84%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    }
};

export default info;
