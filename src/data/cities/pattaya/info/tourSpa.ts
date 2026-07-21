import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "진리의 성전": {
        photos: ["/images/pattaya/info/tourSpa/sanctuary-of-truth-pattaya.jpg"],
        summary: "나무로만 만든 웅장한 건축물에 압도되는 파타야 필수 코스",
        updatedAt: "2026-07-15",
        highlights: ["정교한 목조 조각 예술", "바다와 어우러진 건축미"],
        tips: ["복장 규정이 있으니 가릴 옷을 준비하세요", "가이드 투어를 신청하면 더 깊이 있게 관람 가능해요"],
        hours: "방문 전 확인 권장",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "태국 20150 촌 부리 방라뭉 파타야 XVCR+539", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sanctuaryoftruthmuseum.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3685895507114622924", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%84%EB%A6%AC%EC%9D%98+%EC%84%B1%EC%A0%84+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "농눅 빌리지": {
        photos: ["/images/pattaya/info/tourSpa/nong-nooch-tropical-garden-pattaya.jpg"],
        summary: "거대한 규모에 눈이 즐거운 이국적인 열대 정원 테마파크",
        updatedAt: "2026-07-15",
        highlights: ["아름다운 식물원 산책로", "화려한 정원 풍경"],
        tips: ["셔틀버스를 이용하면 훨씬 편하게 둘러볼 수 있어요", "아이와 함께 가기 정말 좋아요"],
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Na Chom Thian, Sattahip District, Chon Buri 20250 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nongnoochpattaya.com/th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16118283404099683409", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%86%8D%EB%88%85+%EB%B9%8C%EB%A6%AC%EC%A7%80+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꼬란 섬": {
        photos: ["/images/pattaya/info/tourSpa/koh-larn-pattaya.jpg"],
        summary: "에메랄드빛 바다에서 즐기는 완벽한 섬 투어",
        updatedAt: "2026-07-15",
        highlights: ["투명한 바닷물과 화이트 샌드", "스노클링 및 해양 액티비티"],
        tips: ["스피드보트를 타면 이동 시간을 단축할 수 있어요", "자외선 차단제와 선글라스는 필수예요"],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "ชายหาดพัทยา ซอย 13 Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://tantulika12.wixsite.com/travel/28", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14597619678147989940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BC%AC%EB%9E%80+%EC%84%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파타야 비치": {
        photos: ["/images/pattaya/info/tourSpa/pattaya-beach.jpg"],
        summary: "파타야 대표 명소/액티비티",
        updatedAt: "2026-07-15",
        highlights: ["파타야 대표 명소/액티비티", "평점 4.4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Pattaya Beach, Chon Buri, 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3073134829242738776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%83%80%EC%95%BC+%EB%B9%84%EC%B9%98+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "좀티엔 비치": {
        photos: ["/images/pattaya/info/tourSpa/jomtien-beach-pattaya.jpg"],
        summary: "파타야 대표 명소/액티비티",
        updatedAt: "2026-07-15",
        highlights: ["파타야 대표 명소/액티비티", "평점 4.4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jomtien Beach, Chon Buri, 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16848140965859399055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A2%80%ED%8B%B0%EC%97%94+%EB%B9%84%EC%B9%98+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파타야 수상시장": {
        photos: ["/images/pattaya/info/tourSpa/pattaya-floating-market.jpg"],
        summary: "파타야 대표 명소/액티비티",
        updatedAt: "2026-07-15",
        highlights: ["파타야 대표 명소/액티비티", "평점 4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "VW95+RG4 Unnamed Road Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://pattayafloatingmarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17296574346285400555", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%83%80%EC%95%BC+%EC%88%98%EC%83%81%EC%8B%9C%EC%9E%A5+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "컬럼비아 픽처스 아쿠아버스": {
        photos: ["/images/pattaya/info/tourSpa/columbia-pictures-aquaverse-pattaya.jpg"],
        summary: "영화 속 주인공이 된 듯한 기분을 만끽할 수 있는 테마 워터파크",
        updatedAt: "2026-07-15",
        highlights: ["영화 캐릭터 테마의 스릴 넘치는 슬라이드", "가족, 친구와 함께 즐기기 좋은 다양한 풀장"],
        tips: ["선크림과 방수팩은 필수템", "인기 어트랙션은 오픈 직후 방문 추천"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "888 หมู่ 8 Sukhumvit Rd, Tambon Na Chom Thian, Amphoe Sattahip, Chang Wat Chon Buri 20250 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://columbiapicturesaquaverse.com/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17919788988521446030", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%AC%EB%9F%BC%EB%B9%84%EC%95%84+%ED%94%BD%EC%B2%98%EC%8A%A4+%EC%95%84%EC%BF%A0%EC%95%84%EB%B2%84%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라마야나 워터파크": {
        photos: ["/images/pattaya/info/tourSpa/ramayana-water-park-pattaya.jpg"],
        summary: "압도적인 규모와 짜릿한 슬라이드를 자랑하는 파타야 최대 워터파크",
        updatedAt: "2026-07-15",
        highlights: ["대형 파도풀과 스릴 만점의 다양한 슬라이드", "쾌적하고 넓은 시설로 여유로운 물놀이 가능"],
        tips: ["하루 종일 놀 계획이라면 충분한 간식 준비", "구명조끼 대여 비용 미리 확인"],
        hours: "월요일: 오전 11:00 ~ 오후 6:00; 화요일: 오전 11:00 ~ 오후 6:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "9 หมู่ที่ 7 Thanon Ban Yen, Tambon Na Chom Thian, Amphoe Sattahip, Chang Wat Chon Buri 20250 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ramayanawaterpark.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2443592039571291846", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%A7%88%EC%95%BC%EB%82%98+%EC%9B%8C%ED%84%B0%ED%8C%8C%ED%81%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이거 파크 파타야": {
        photos: ["/images/pattaya/info/tourSpa/tiger-park-pattaya.jpg"],
        summary: "호랑이를 가까이서 마주하며 특별한 추억을 남기는 이색 체험지",
        updatedAt: "2026-07-15",
        highlights: ["호랑이와 함께하는 짜릿한 사진 촬영", "가이드와 함께하는 안전한 호랑이 교감"],
        tips: ["현장 가이드의 지시사항 엄수 필수", "동물 컨디션에 따라 체험 내용이 달라질 수 있음"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "349 9 Sukhumvit Rd, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16944305323584580917", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EA%B1%B0+%ED%8C%8C%ED%81%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아트 인 파라다이스": {
        photos: ["/images/pattaya/info/tourSpa/art-in-paradise-pattaya.jpg"],
        summary: "파타야 대표 명소/액티비티",
        updatedAt: "2026-07-15",
        highlights: ["파타야 대표 명소/액티비티", "평점 4.4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        duration: "1~5시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "78/34 หมู่ที่ 9 Thanon Pattayasaisong, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Mymintzgallary", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8554458115344937119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8A%B8+%EC%9D%B8+%ED%8C%8C%EB%9D%BC%EB%8B%A4%EC%9D%B4%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그레이스 스파": {
        photos: ["/images/pattaya/info/tourSpa/spa-eczowoqs.jpg"],
        summary: "터미널21 픽업 및 샌딩이 가능한 프리미엄 데이 스파로, 티크우드 건물과 자연친화적인 정원이 특징인 곳입니다.",
        updatedAt: "2026-07-20",
        highlights: ["터미널21 픽업/샌딩 가능", "프라이빗한 15개의 개인룸", "태국 전통 하우스 스타일"],
        tips: ["가족 여행객에게 강력 추천", "사전 예약 권장"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "202 266 หมู่ที่ 9 Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJGYAEj_uVAjERhXQeczOwOQs", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬스랜드 스파": {
        photos: ["/images/pattaya/info/tourSpa/health-land-spa-pattaya.jpg"],
        summary: "방콕과 파타야에서 모두 유명하며, 여행객들이 자주 찾는 신뢰도 높은 대형 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["합리적인 가격", "친절한 서비스", "대규모 시설"],
        tips: ["가족이나 지인 선물용 패키지 활용 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "288, 55 Changklan Rd, Tambon Chang Khlan, อำเภอ เมือง, Chang Wat Chiang Mai 50100 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Health%20Land%20Chiang%20Mai&query_place_id=ChIJG8NTiEc72jARbmtmkD4ESyI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "암부라야 스파": {
        photos: ["/images/pattaya/info/tourSpa/spa-qcopgpwi.jpg"],
        summary: "파타야 인터컨티넨탈 리조트 내에 위치한 럭셔리하고 프라이빗한 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["인터컨티넨탈 리조트 내 위치", "프라이빗한 분위기", "고급스러운 서비스"],
        tips: ["리조트 숙박객에게 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "28/44 Tambon Na Chom Thian, Amphoe Sattahip, Chang Wat Chon Buri 20250 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=AMBASSY%20SPA&query_place_id=ChIJAR9HtFKTAjERJUTqCOpgPwI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%94%EB%B6%80%EB%9D%BC%EC%95%BC%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "청담 BK 스파": {
        photos: ["/images/pattaya/info/tourSpa/bk-spa-pattaya.jpg"],
        summary: "무료 픽업 서비스를 제공하는 럭셔리한 마사지샵으로 커플이나 골프 여행객에게 적합합니다.",
        updatedAt: "2026-07-20",
        highlights: ["무료 픽업 서비스", "럭셔리한 분위기", "커플 마사지 특화"],
        tips: ["여유로운 이용을 위해 사전 예약 필수"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "322 Thappraya Rd, ตำบล หนองปรือ Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC&query_place_id=ChIJm8-0LmeWAjER9jQ7CAiOtrM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%EB%8B%B4%20BK%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "팁부리 마사지": {
        photos: ["/images/pattaya/info/tourSpa/massage-22ka7rza.jpg"],
        summary: "얼굴 관리부터 오일 바디 마사지까지 다양한 프로그램을 제공하는 곳입니다.",
        updatedAt: "2026-07-20",
        highlights: ["얼굴 관리 및 매니큐어 서비스", "오일 바디 마사지 가능", "다양한 프로그램 구성"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "5 359 Beach Rd, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Thip%20Buri%20Massage&query_place_id=ChIJfb_WwQGWAjERNON22KA7rZA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%81%EB%B6%80%EB%A6%AC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "신디": {
        photos: ["/images/pattaya/info/tourSpa/place-7tpa_vcg.jpg"],
        summary: "마사지 퀄리티와 위생 상태가 매우 뛰어나며 친절한 응대가 돋보이는 곳입니다.",
        updatedAt: "2026-07-20",
        highlights: ["높은 마사지 퀄리티", "친절한 서비스", "완벽한 위생 상태"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "801 114 Soi Phahon Yothin 72, Tambon Khu Khot, Amphoe Lam Luk Ka, Chang Wat Pathum Thani 12130 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cindy%20Massage%20-%20%E0%B8%99%E0%B8%A7%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%20%28%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%20%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95%29&query_place_id=ChIJDS7GewB9HTERZLJ7TPa_VCg", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EB%94%94%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파타야헬스마사지": {
        photos: ["/images/pattaya/info/tourSpa/pattaya-massage-pattaya.jpg"],
        summary: "윈덤 좀티엔 호텔 인근에 위치하여 접근성이 매우 좋은 마사지샵입니다.",
        updatedAt: "2026-07-20",
        highlights: ["좋은 접근성", "호텔 인근 위치"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "3, 344 Soi Durian Pattaya Sai 3, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Pattaya%20Beach%20House%20Health%20Massage&query_place_id=ChIJVUyfCAC_AjERkNh3sZFgk-c", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%83%80%EC%95%BC%ED%97%AC%EC%8A%A4%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파": {
        photos: ["/images/pattaya/info/tourSpa/lets-relax-spa-pattaya.jpg"],
        summary: "파타야 터미널21 쇼핑몰 1층에 위치하여 쇼핑과 함께 이용하기 편리합니다.",
        updatedAt: "2026-07-20",
        highlights: ["터미널21 쇼핑몰 내 위치", "쇼핑 후 방문 용이"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "249, ซอย Chalermphrakiat 6, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Pattaya%2088%20Massage%20and%20Spa%2C%20%ED%8C%8C%ED%83%80%EC%95%BC%2088%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJ8_VjHBqVAjERHkKImDYCuQw", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0%20%EB%A6%B4%EB%A0%89%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "씨스파": {
        photos: ["/images/pattaya/info/tourSpa/spa-2tftdxxi.jpg"],
        summary: "터미널21 근처에 위치하여 수완나품 공항으로 이동하기 전 이용하기 좋습니다.",
        updatedAt: "2026-07-20",
        highlights: ["터미널21 인근", "공항 이동 스케줄 맞추기 용이"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Address 157/168-170 Soi 18, City,District, เมืองพัทยา อำเภอบางละมุง ชลบุรี 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20Sea.Spa%20Pattaya&query_place_id=ChIJ7TlB3wy9AjERiAE2TftDXXI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파라이소 스파": {
        photos: ["/images/pattaya/info/tourSpa/spa-3w2ezrpg.jpg"],
        summary: "리모델링을 통해 더욱 쾌적해진 가성비 좋은 마사지샵으로 단체 여행객에게 추천합니다.",
        updatedAt: "2026-07-20",
        highlights: ["가성비 우수", "리모델링 후 쾌적한 환경", "단체 및 가족 여행 적합"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "62, 200 Soi Thep Prasit 8, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Paraiso%20Massage%20%26%20Spa%20%ED%8C%8C%EB%9D%BC%EC%9D%B4%EC%86%8C%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJ3xqv392XAjERPbv3W2EZRPg", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%9D%BC%EC%9D%B4%EC%86%8C%20%EC%8A%A4%ED%8C%8C%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
