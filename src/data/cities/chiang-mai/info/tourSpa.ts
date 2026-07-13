import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "도이수텝 사원": {
        photos: ["/images/chiang-mai/info/tourSpa/wat-phra-that-doi-suthep-chiang-mai.jpg"],
        summary: "치앙마이를 대표하는 산 위 사원과 전망 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["치앙마이를 대표하는 산 위 사원과 전망 명소입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 9:00; 화요일: 오전 5:00 ~ 오후 9:00",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Suthep, Mueang Chiang Mai District, Chiang Mai 50200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11350843871786794529", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%9D%B4%EC%88%98%ED%85%9D+%EC%82%AC%EC%9B%90+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 체디루앙": {
        photos: ["/images/chiang-mai/info/tourSpa/wat-chedi-luang-chiang-mai.jpg"],
        summary: "올드타운 중심의 대표 고대 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운 중심의 대표 고대 사원입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 10:30; 화요일: 오전 5:00 ~ 오후 10:30",
        duration: "1시간 내외",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "QXPP+QCQ, 103 Prapokklao Road Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6698946777536243898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%EC%B2%B4%EB%94%94%EB%A3%A8%EC%95%99+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 프라싱": {
        photos: ["/images/chiang-mai/info/tourSpa/wat-phra-singh-chiang-mai.jpg"],
        summary: "올드타운에서 접근성이 좋은 치앙마이 핵심 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운에서 접근성이 좋은 치앙마이 핵심 사원입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 5:30 ~ 오후 7:30; 화요일: 오전 5:30 ~ 오후 7:30",
        duration: "1시간 내외",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2 Samlarn Rd Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10833085540246312169", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%ED%94%84%EB%9D%BC%EC%8B%B1+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도이인타논 국립공원": {
        photos: ["/images/chiang-mai/info/tourSpa/doi-inthanon-national-park-chiang-mai.jpg"],
        summary: "태국 최고봉과 폭포, 왕실탑을 둘러보는 당일치기 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국 최고봉과 폭포, 왕실탑을 둘러보는 당일치기 코스입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 6:00; 화요일: 오전 5:00 ~ 오후 6:00",
        duration: "1일",
        price: "투어/입장료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "119, Tambon Ban Luang, Amphoe Chom Thong, Chang Wat Chiang Mai 50160 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/DoiInthanonNationalPark?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6116807232189601627", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%9D%B4%EC%9D%B8%ED%83%80%EB%85%BC+%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘리펀트 네이처 파크": {
        photos: ["/images/chiang-mai/info/tourSpa/elephant-nature-park-chiang-mai.jpg"],
        summary: "구조 코끼리를 가까이 보는 윤리적 코끼리 보호구역입니다.",
        updatedAt: "2026-07-13",
        highlights: ["구조 코끼리를 가까이 보는 윤리적 코끼리 보호구역입니다.", "평점 4.9", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        duration: "반나절~1일",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "136, Tambon Mae Win, Amphoe Mae Wang, Chang Wat Chiang Mai 50360 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6779660577412095628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98%EB%A6%AC%ED%8E%80%ED%8A%B8+%EB%84%A4%EC%9D%B4%EC%B2%98+%ED%8C%8C%ED%81%AC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 캐니언 워터파크": {
        photos: ["/images/chiang-mai/info/tourSpa/grand-canyon-water-park-chiang-mai.jpg"],
        summary: "수상 액티비티와 물놀이를 즐기는 야외 워터파크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수상 액티비티와 물놀이를 즐기는 야외 워터파크입니다.", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        duration: "반나절",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "202 ถนนเลียบคลองชลประทาน Tambon Nam Phrae, Amphoe Hang Dong, Chang Wat Chiang Mai 50230 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://grandcanyon-waterpark.com/en/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3649004428173663549", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%BA%90%EB%8B%88%EC%96%B8+%EC%9B%8C%ED%84%B0%ED%8C%8C%ED%81%AC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "란나 민속 박물관": {
        photos: ["/images/chiang-mai/info/tourSpa/lanna-folklife-museum-chiang-mai.jpg"],
        summary: "란나 문화와 치앙마이 역사를 가볍게 보기 좋은 박물관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["란나 문화와 치앙마이 역사를 가볍게 보기 좋은 박물관입니다.", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 휴무일",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "QXQQ+X87, Prapokklao Road Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.cmocity.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10897577201691353678", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%EB%82%98+%EB%AF%BC%EC%86%8D+%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
