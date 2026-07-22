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
    "막카 헬스 앤 스파": {
        photos: ["/images/chiang-mai/info/tourSpa/spa-qry-ppyq.jpg"],
        summary: "올드타운 내 위치한 깔끔하고 시설 좋은 고급 스파",
        updatedAt: "2026-07-20",
        highlights: ["아로마 오일 마사지 전문", "깔끔한 샤워 시설 완비", "올드타운 내 접근성 좋음"],
        tips: ["마이리얼트립 등 예약 사이트를 통해 할인 혜택 확인 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "38/1 Soi Ratchamanka 8 Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Makkha%20Health%20%26%20Spa%20Chiang%20Mai%20%28Ancient%20House%29&query_place_id=ChIJGV4FvZw62jARNmHqRY-PPyQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%89%EC%B9%B4%20%ED%97%AC%EC%8A%A4%20%EC%95%A4%20%EC%8A%A4%ED%8C%8C%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "치바 스파": {
        photos: ["/images/chiang-mai/info/tourSpa/spa--ewyrja0.jpg"],
        summary: "프라이빗하게 관리받을 수 있는 치앙마이 감성의 스파",
        updatedAt: "2026-07-20",
        highlights: ["프라이빗한 개별 룸 운영", "치앙마이 특유의 감성적인 인테리어", "120분 코스 추천"],
        tips: ["고와비로 할인 등을 활용해 예약하면 경제적임"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "4/2 ถนน หัสดิเสวี, Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cheeva%20Spa&query_place_id=ChIJcaa2GY462jAR1Wv-EwyRjA0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EB%B0%94%20%EC%8A%A4%ED%8C%8C%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "지라 스파": {
        photos: ["/images/chiang-mai/info/tourSpa/spa-ulomat4e.jpg"],
        summary: "시설, 실력, 서비스의 밸런스가 뛰어난 프리미엄 스파",
        updatedAt: "2026-07-20",
        highlights: ["공항 샌딩 서비스 가능", "캐리어 보관 서비스 제공", "친절한 직원 서비스"],
        tips: ["KKday 등을 통해 미리 예약하면 편리함"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "8, 1 Ratvithi Rd Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Zira%20Spa&query_place_id=ChIJyyGI5aI62jARNyUulomat4E", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%80%EB%9D%BC%20%EC%8A%A4%ED%8C%8C%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오아시스 스파 란나": {
        photos: ["/images/chiang-mai/info/tourSpa/oasis-spa-chiang-mai.jpg"],
        summary: "올드타운과 님만해민 근처에서 만날 수 있는 고품격 스파",
        updatedAt: "2026-07-20",
        highlights: ["픽업 및 공항 샌딩 서비스 제공", "가족 및 커플 여행객에게 인기", "고급스러운 분위기"],
        tips: ["위치에 맞춰 올드타운점 또는 님만해민점 선택 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "4 Samlarn Rd Old City Tambon Phra Sing, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Oasis%20Spa%20%28Lanna%2C%20Wat%20Prasing%29&query_place_id=ChIJsV6Ge5s62jAR7ibtBb29FeA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%9E%80%EB%82%98%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬스랜드 스파": {
        photos: ["/images/chiang-mai/info/tourSpa/health-land-spa-chiang-mai.jpg"],
        summary: "아이와 함께 방문하기 좋은 가족 친화적 고급 스파",
        updatedAt: "2026-07-20",
        highlights: ["프라이빗 룸 운영", "쾌적하고 넓은 시설", "가족 단위 여행객에게 적합"],
        tips: ["한 달 살기 등 장기 여행객들에게도 추천되는 곳"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "288, 55 Changklan Rd, Tambon Chang Khlan, อำเภอ เมือง, Chang Wat Chiang Mai 50100 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Health%20Land%20Chiang%20Mai&query_place_id=ChIJG8NTiEc72jARbmtmkD4ESyI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%20%EC%8A%A4%ED%8C%8C%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파란나 스파": {
        photos: ["/images/chiang-mai/info/tourSpa/spa-1iymwnvc.jpg"],
        summary: "님만해민 지역에서 높은 만족도를 자랑하는 스파",
        updatedAt: "2026-07-20",
        highlights: ["님만해민 위치", "전문적인 마사지 관리", "높은 재방문율"],
        tips: ["인기가 많아 사전 예약이 필수적임"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "57, 57/1 Wiang Kaew Rd Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%8C%8C%20%EB%9E%80%EB%82%98%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%98%AC%EB%93%9C%EC%8B%9C%ED%8B%B0%EC%A0%90&query_place_id=ChIJ6Te0WZc62jAR8zv1iYmwNvc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%9E%80%EB%82%98%20%EC%8A%A4%ED%8C%8C%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DN Wellness": {
        photos: ["/images/chiang-mai/info/tourSpa/dn-wellness-chiang-mai.jpg"],
        summary: "귀국 전 일정으로 이용하기 좋은 님만해민의 마사지 샵",
        updatedAt: "2026-07-20",
        highlights: ["님만해민 위치", "캐리어 보관 서비스 제공", "귀국 전 휴식에 최적화"],
        tips: ["여행 마지막 날 공항 가기 전 일정으로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "95/42 Nimmanhaemin Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=DN%20Wellness%20Massage&query_place_id=ChIJj8ocFKsj2jARvSPGwzTISuQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DN%20Wellness%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "NETNIMID MASSAGE": {
        photos: ["/images/chiang-mai/info/tourSpa/netnimid-massage-chiang-mai.jpg"],
        summary: "강한 압의 마사지를 선호하는 분들을 위한 스파",
        updatedAt: "2026-07-20",
        highlights: ["깔끔하고 쾌적한 시설", "압이 강한 전문적인 마사지", "시내 위치"],
        tips: ["강력한 전신 마사지를 찾는 여행객에게 강력 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "38/1 Rachadamnoen Rd Soi 1 Old City Tambon Si Phum, เมือง Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=NETNIMID%20MASSAGE&query_place_id=ChIJWbxGBv072jARnPWVe4IVC2Q", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=NETNIMID%20MASSAGE%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라차야마 마사지": {
        photos: ["/images/chiang-mai/info/tourSpa/massage-b5blf6he.jpg"],
        summary: "님만해민 근처에서 편하게 이용할 수 있는 마사지 샵",
        updatedAt: "2026-07-20",
        highlights: ["님만해민 지역 위치", "공항 이동 전 일정으로 적합", "주변 카페와 연계 가능"],
        tips: ["근처 바트커피 등과 함께 방문하기 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "177/1 Ratchamanka Rd Old City Tambon Phra Sing, Muang, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Rachamaya%20Retreat%20Massage%20%26%20Spa&query_place_id=ChIJpZrQzKc72jARZqgB5Blf6hE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%B0%A8%EC%95%BC%EB%A7%88%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "치놀라 마사지": {
        photos: ["/images/chiang-mai/info/tourSpa/massage-kc6ktfbi.jpg"],
        summary: "올드타운에서 즐길 수 있는 알찬 마사지 샵",
        updatedAt: "2026-07-20",
        highlights: ["올드타운 위치", "여행 마무리 일정으로 적합", "호텔 체크아웃 후 이용 용이"],
        tips: ["원님만 등 인근 호텔 투숙객에게 접근성 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "179/2 Ratchamanka Rd Old City Tambon Phra Sing, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Chinola%20Massage&query_place_id=ChIJtShuP4M62jARvldkC6ktFBI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EB%86%80%EB%9D%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반캉왓": {
        photos: ["/images/chiang-mai/info/tourSpa/baan-kang-wat-chiang-mai.jpg"],
        summary: "수공예 공방, 작은 갤러리, 카페가 모인 치앙마이 감성 예술 마을입니다.",
        updatedAt: "2026-07-22",
        highlights: ["공방·디자인숍 산책", "카페와 사진 스팟", "반나절 여유 코스"],
        tips: ["더운 시간대는 카페 휴식과 묶어 방문하세요.", "일부 매장은 휴무가 다를 수 있어 운영 확인이 필요합니다."],
        hours: "방문 전 운영시간 확인 권장",
        duration: "1~2시간",
        price: "입장 무료, 매장별 구매 별도",
        reservation: { required: false, method: "별도 예약 불필요" },
        access: { area: "191-197 ซอย วัดอุโมงค์ Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 늦게 또는 오후 카페 타임",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Baankangwat", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Baan%20Kang%20Wat&query_place_id=ChIJdxPPqzUx2jARn86GcuRsD1s", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%BA%89%EC%99%93%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
