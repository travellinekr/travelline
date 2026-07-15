import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "전쟁박물관": {
        photos: ["/images/ho-chi-minh/info/tourSpa/war-remnants-museum-ho-chi-minh-city.jpg"],
        summary: "베트남 전쟁의 역사를 생생하게 마주할 수 있는 호치민 필수 코스입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전쟁 당시의 기록과 유물 전시", "베트남 현대사의 아픔을 담은 공간"],
        tips: ["역사적 내용이 깊어 천천히 둘러보는 것을 추천해요."],
        hours: "월요일: 오전 7:30 ~ 오후 5:30; 화요일: 오전 7:30 ~ 오후 5:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Phường 6, Quận 3, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://baotangchungtichchientranh.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8996304053010199722", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%84%EC%9F%81%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "통일궁": {
        photos: ["/images/ho-chi-minh/info/tourSpa/independence-palace-ho-chi-minh-city.jpg"],
        summary: "베트남 통일의 역사를 상징하는 웅장한 건축물입니다.",
        updatedAt: "2026-07-15",
        highlights: ["프랑스식 건축 양식의 아름다움", "베트남 현대사의 주요 현장"],
        tips: ["주변 정원이 넓어 산책하며 둘러보기 좋아요."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ben Thanh, Ho Chi Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.dinhdoclap.gov.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1695404177673260394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5%EC%9D%BC%EA%B6%81+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 노트르담 대성당": {
        photos: ["/images/ho-chi-minh/info/tourSpa/notre-dame-cathedral-of-saigon.jpg"],
        summary: "호치민 시내를 상징하는 이국적인 분위기의 랜드마크입니다.",
        updatedAt: "2026-07-15",
        highlights: ["붉은 벽돌의 고딕 양식 성당", "호치민 여행의 대표 포토존"],
        tips: ["보수 공사 여부를 미리 확인하고 방문하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "01 Công trường Công xã Paris, Quận 1, Hồ Chí Minh 70000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16739696829681982277", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EB%85%B8%ED%8A%B8%EB%A5%B4%EB%8B%B4+%EB%8C%80%EC%84%B1%EB%8B%B9+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 중앙우체국": {
        photos: ["/images/ho-chi-minh/info/tourSpa/saigon-central-post-office-ho-chi-minh-city.jpg"],
        summary: "프랑스 식민지 시절의 아름다운 건축미를 간직한 호치민의 상징적인 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고전적인 프랑스식 건축 양식", "빈티지한 분위기의 내부 인테리어"],
        tips: ["근처 노트르담 성당과 함께 둘러보는 코스를 추천합니다."],
        hours: "월요일: 오전 7:30 ~ 오후 6:00; 화요일: 오전 7:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "02 Công trường Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh 70000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12752177036863445938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%A4%91%EC%95%99%EC%9A%B0%EC%B2%B4%EA%B5%AD+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벤탄 시장": {
        photos: ["/images/ho-chi-minh/info/tourSpa/ben-thanh-market-ho-chi-minh-city.jpg"],
        summary: "호치민의 활기찬 에너지를 느낄 수 있는 대표적인 전통 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 기념품 쇼핑", "로컬 길거리 음식 체험"],
        tips: ["물건을 구매할 때는 적절한 흥정이 필수이며 소지품 관리에 유의하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ben Thanh, Ho Chi Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10190288580948819760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A4%ED%83%84+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비텍스코 사이공 스카이덱": {
        photos: ["/images/ho-chi-minh/info/tourSpa/bitexco-financial-tower-saigon-skydeck.jpg"],
        summary: "호치민 시내 전경을 한눈에 내려다볼 수 있는 탁 트인 전망대입니다.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 파노라마 시티 뷰", "아름다운 도시 야경"],
        tips: ["일몰 시간에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2 Đ. Hải Triều, Sài Gòn, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14513308945688027946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%ED%85%8D%EC%8A%A4%EC%BD%94+%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%8D%B1+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응우옌후에 워킹스트리트": {
        photos: ["/images/ho-chi-minh/info/tourSpa/nguyen-hue-walking-street-ho-chi-minh-city.jpg"],
        summary: "호치민의 밤을 제대로 즐기고 싶다면 꼭 들러야 할 핫플이에요.",
        updatedAt: "2026-07-15",
        highlights: ["화려한 야경", "길거리 먹거리"],
        tips: ["주말 저녁엔 사람이 정말 많으니 참고하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4 Bùng binh Cây Liễu, Sài Gòn, Hồ Chí Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7167868849551227662", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%9A%B0%EC%98%8C%ED%9B%84%EC%97%90+%EC%9B%8C%ED%82%B9%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호치민 오페라하우스": {
        photos: ["/images/ho-chi-minh/info/tourSpa/ho-chi-minh-city-opera-house.jpg"],
        summary: "프랑스풍의 우아한 건축미가 돋보이는 호치민의 상징적인 곳이에요.",
        updatedAt: "2026-07-15",
        highlights: ["클래식한 외관", "근처 카페 투어"],
        tips: ["공연 관람 전 사진 찍기 정말 좋아요."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "07 Công trường Lam Sơn, Sài Gòn, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6193911520574615099", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%B9%98%EB%AF%BC+%EC%98%A4%ED%8E%98%EB%9D%BC%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥황사": {
        photos: ["/images/ho-chi-minh/info/tourSpa/jade-emperor-pagoda-ho-chi-minh-city.jpg"],
        summary: "도심 속에서 고즈넉하게 마음을 달랠 수 있는 아름다운 사찰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["정교한 불상", "평화로운 분위기"],
        tips: ["조용한 산책과 힐링이 필요할 때 추천해요."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "73 Mai Thị Lựu, Tân Định, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4102120846024444045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%ED%99%A9%EC%82%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구찌 터널 투어": {
        photos: ["/images/ho-chi-minh/info/tourSpa/cu-chi-tunnels-tour-from-ho-chi-minh-city.png"],
        summary: "호치민 대표 명소",
        updatedAt: "2026-07-15",
        highlights: ["호치민 대표 명소", "평점 5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "151 Đồng Khởi, Ward, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://cuchitours.com/?utm_source=google_maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15964373104012371593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EC%B0%8C+%ED%84%B0%EB%84%90+%ED%88%AC%EC%96%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
