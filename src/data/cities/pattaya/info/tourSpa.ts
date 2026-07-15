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
};

export default info;
