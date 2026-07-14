import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "간단테그친렌 사원": {
        photos: ["/images/ulaanbaatar/info/tourSpa/gandantegchinlen-monastery-ulaanbaatar.jpg"],
        summary: "울란바토르 도심에서 몽골 불교 문화를 만날 수 있는 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도심 속 평온한 사찰 분위기", "웅장한 불교 건축물"],
        tips: ["사원 관람 시 정숙을 유지해 주세요."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 16040 울란바토르", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17921711781084038005", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EB%8B%A8%ED%85%8C%EA%B7%B8%EC%B9%9C%EB%A0%8C+%EC%82%AC%EC%9B%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수흐바타르 광장": {
        photos: ["/images/ulaanbaatar/info/tourSpa/sukhbaatar-square-ulaanbaatar.jpg"],
        summary: "정부청사와 칭기즈칸 동상이 있는 울란바토르 여행의 중심지입니다.",
        updatedAt: "2026-07-14",
        highlights: ["거대한 칭기즈칸 동상", "시내 산책의 시작점"],
        tips: ["주변 주요 명소와 연결되어 도보 투어에 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 14201 울란바토르 WW99+C33", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1091615834424000219", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%9D%90%EB%B0%94%ED%83%80%EB%A5%B4+%EA%B4%91%EC%9E%A5+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽골 국립박물관": {
        photos: ["/images/ulaanbaatar/info/tourSpa/national-museum-of-mongolia-ulaanbaatar.jpg"],
        summary: "몽골의 역사와 유목 문화를 한눈에 이해할 수 있는 박물관입니다.",
        updatedAt: "2026-07-14",
        highlights: ["몽골 역사의 흐름을 담은 전시", "유목 문화 체험"],
        tips: ["역사 공부를 위해 꼭 들러야 할 필수 코스입니다."],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Travel St 1, CHD - 4 khoroo, Ulaanbaatar 15160 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.nationalmuseum.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=736205077874199705", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%EA%B3%A8+%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자이승 전망대": {
        photos: ["/images/ulaanbaatar/info/tourSpa/zaisan-memorial-ulaanbaatar.jpg"],
        summary: "울란바토르 시내 전경을 한눈에 내려다볼 수 있는 최고의 조망 포인트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["탁 트인 도시 파노라마 뷰", "아름다운 일몰 명소"],
        tips: ["해 질 녘에 맞춰 방문하면 멋진 야경까지 즐길 수 있어요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 17023 울란바토르 VWM8+J5C", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7888649678437182290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9D%B4%EC%8A%B9+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테를지 국립공원": {
        photos: ["/images/ulaanbaatar/info/tourSpa/terelj-national-park-mongolia.jpg"],
        summary: "광활한 초원과 기암괴석, 승마 체험을 한 번에 즐기는 근교 필수 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["대자연의 기암괴석", "이색적인 초원 승마"],
        tips: ["울란바토르에서 당일치기 여행지로 강력 추천해요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "하루",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Энхтайвны Өргөн Чөлөө 206, Улаанбаатар, 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5158142980233887019", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%A5%BC%EC%A7%80+%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
