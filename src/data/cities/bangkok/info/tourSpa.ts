import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "방콕 왕궁": {
        photos: ["/images/bangkok/info/tourSpa/the-grand-palace-bangkok.jpg"],
        summary: "방콕 대표 왕실 건축과 사원을 함께 보는 핵심 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방콕 대표 왕실 건축과 사원을 함께 보는 핵심 명소입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 3:30; 화요일: 오전 8:30 ~ 오후 3:30",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.royalgrandpalace.th/th/home", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3056950040631135297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%BD%95+%EC%99%95%EA%B6%81+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 포": {
        photos: ["/images/bangkok/info/tourSpa/wat-pho-bangkok.jpg"],
        summary: "와불상과 전통 마사지로 유명한 방콕 대표 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["와불상과 전통 마사지로 유명한 방콕 대표 사원입니다.", "평점 4.8", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 7:30; 화요일: 오전 8:00 ~ 오후 7:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2 Thanon Sanam Chai, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.watpho.com/en", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1664761078418654335", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%ED%8F%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "왓 아룬": {
        photos: ["/images/bangkok/info/tourSpa/wat-arun-bangkok.jpg"],
        summary: "짜오프라야 강변 전망과 야경으로 유명한 방콕 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짜오프라야 강변 전망과 야경으로 유명한 방콕 랜드마크입니다.", "평점 4.8", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "158 Thanon Wang Doem, Khwaeng Wat Arun, Khet Bangkok Yai, Krung Thep Maha Nakhon 10600 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/watarunofficial?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=617771626444791750", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%93+%EC%95%84%EB%A3%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마하나콘 스카이워크": {
        photos: ["/images/bangkok/info/tourSpa/mahanakhon-skywalk-bangkok.jpg"],
        summary: "방콕에서 가장 높은 곳에서 아찔한 유리 바닥을 통해 도심 전경을 감상할 수 있는 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방콕 시내를 한눈에 담는 파노라마 뷰", "스릴 넘치는 투명 유리 스카이워크"],
        tips: ["일몰 시간대에 맞춰 방문하면 환상적인 노을과 야경을 모두 즐길 수 있어요."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "114 Thanon Naradhiwat Rajanagarindra, Si Lom, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kingpowermahanakhon.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5665740806921291380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%95%98%EB%82%98%EC%BD%98+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%9B%8C%ED%81%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜오프라야 프린세스 크루즈": {
        photos: ["/images/bangkok/info/tourSpa/chao-phraya-princess-cruise-bangkok.jpg"],
        summary: "짜오프라야 강 위에서 화려한 야경과 함께 맛있는 식사를 즐기는 낭만적인 디너 크루즈입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 사원과 도심의 반짝이는 야경", "선상에서 즐기는 풍성한 뷔페 식사"],
        tips: ["창가 쪽 자리를 미리 예약하면 더 멋진 강변 뷰를 감상할 수 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        duration: "2시간 내외",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "ICONSIAM (Piers, 2 & 4, 299 ถ. เจริญนคร แขวงคลองต้นไทร คลองสาน กรุงเทพมหานคร 10600 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.chaophrayaprincess.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8677010492152050287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EC%98%A4%ED%94%84%EB%9D%BC%EC%95%BC+%ED%94%84%EB%A6%B0%EC%84%B8%EC%8A%A4+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짐 톰슨 하우스": {
        photos: ["/images/bangkok/info/tourSpa/jim-thompson-house-museum-bangkok.jpg"],
        summary: "태국 전통 가옥의 아름다움과 화려한 실크 문화를 만날 수 있는 도심 속 문화 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전통 양식의 고즈넉한 목조 주택", "아름다운 정원과 태국 실크 전시"],
        tips: ["도심 속 조용한 휴식을 원할 때 가볍게 산책하며 사진 찍기 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "6 Soi Kasem San 2, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://jimthompsonhouse.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16826663638430487320", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%90+%ED%86%B0%EC%8A%A8+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파 통로": {
        photos: ["/images/bangkok/info/tourSpa/relax-spa-bangkok.jpg"],
        summary: "여행자 이용이 많은 방콕 스파 체인 지점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여행자 이용이 많은 방콕 스파 체인 지점입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "27 Soi Sukhumvit55, Thonglor, ถ. สุขุมวิท Klongton, เขตวัฒนา กรุงเทพมหานคร 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://letsrelaxspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Let%27s%20Relax%20Spa%20-%20Ginza%20Thonglor&query_place_id=ChIJXfVlTHOf4jARzk976V-2bqI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0+%EB%A6%B4%EB%A0%89%EC%8A%A4+%EC%8A%A4%ED%8C%8C+%ED%86%B5%EB%A1%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렛츠 릴렉스 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/lets-relax-spa-bangkok-bangkok.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "300 Soi Thong Lo, Khwaeng Khlong Tan Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%A0%9B%EC%B8%A0%EB%A6%B4%EB%9E%99%EC%8A%A4%20%EC%98%A8%EC%B2%9C%EA%B3%BC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJx1Gw3Kyf4jARbN6fGLcSEyE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0%20%EB%A6%B4%EB%A0%89%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬스랜드 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/health-land-spa-bangkok-bangkok.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "55, Sukhumvit 21 Soi 1, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%EC%95%84%EC%86%8D&query_place_id=ChIJNz1Q9OSe4jARTFpSkCWBabw", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EC%8A%A4%EB%9E%9C%EB%93%9C%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디바나 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-z4y3ojwa.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "16, 15 Soi Somkid, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%94%94%EB%B0%94%EB%82%98%20%EC%84%BC%EC%B8%84%EC%95%84%EB%9D%BC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJHbMoLP2e4jARUM_z4y3OjWA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%B0%94%EB%82%98%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오아시스 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/oasis-spa-bangkok-bangkok.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "64 Sukhumvit 31 Yaek 4, Khwaeng Khlong Tan Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Oasis%20Spa%20%28Bangkok%2C%20Sukhumvit%2031%29&query_place_id=ChIJx_Ufxfue4jARAqAsjT-w07w", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바와 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-mfv16_z8.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "34/1 Soi Sukhumvit 8, Khwaeng Khlong Toei, Khet Khlong Toei, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B0%94%EC%99%80%EC%8A%A4%ED%8C%8C&query_place_id=ChIJr33MEgmf4jAR3hXmfv16_z8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%99%80%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "판퓨리 웰니스 방콕": {
        photos: ["/images/bangkok/info/tourSpa/bangkok-bangkok.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "12nd floor, Gaysorn Urban Resort, 127 Thanon Ratchadamri, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=PA%C3%91PURI%20WELLNESS%20Gaysorn%20Tower&query_place_id=ChIJ54pGWVKf4jARB9CilWy5VJc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%90%ED%93%A8%EB%A6%AC%20%EC%9B%B0%EB%8B%88%EC%8A%A4%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어반 리트리트 스파 방콕": {
        photos: ["/images/bangkok/info/tourSpa/spa-bangkok-cguluzzu.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "348, 1 Sukhumvit Rd, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Urban%20Retreat&query_place_id=ChIJC8cLAeOe4jARwoXcgulUZZU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%B0%98%20%EB%A6%AC%ED%8A%B8%EB%A6%AC%ED%8A%B8%20%EC%8A%A4%ED%8C%8C%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아시아 허브 어소시에이션 방콕": {
        photos: ["/images/bangkok/info/tourSpa/bangkok-bangkok.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Soi Sukhumvit 24, Klongton-Nua, Watthana, Krung Thep Maha Nakhon 10110 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%8B%9C%EC%95%84%20%ED%97%88%EB%B8%8C%20%EC%96%B4%EC%8F%98%EC%8B%9C%EC%97%90%EC%9D%B4%EC%85%98&query_place_id=ChIJOwsnQASf4jAR_no5JyVXV1s", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8B%9C%EC%95%84%20%ED%97%88%EB%B8%8C%20%EC%96%B4%EC%86%8C%EC%8B%9C%EC%97%90%EC%9D%B4%EC%85%98%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카오산 마사지 방콕": {
        photos: ["/images/bangkok/info/tourSpa/massage-bangkok-4koogx2m.jpg"],
        summary: "방콕 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "110 Tani, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200 태국", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Thailanta%20massage&query_place_id=ChIJkaeHwtqZ4jARDEo4kOOgx2M", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%82%B0%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%B0%A9%EC%BD%95%20%EB%B0%A9%EC%BD%95%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "매끌렁 철길시장": {
        photos: ["/images/bangkok/info/tourSpa/maeklong-railway-market.jpg"],
        summary: "철로 바로 옆에서 상인들이 장사를 하는 독특한 풍경을 볼 수 있는 신비로운 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["기차 통과 시 펼쳐지는 놀라운 상점 정리 퍼포먼스", "신선한 해산물과 농산물을 직접 구경하는 재미"],
        tips: ["기차 시간표를 미리 확인하고 방문해야 퍼포먼스를 놓치지 않습니다.", "방콕 시내에서 거리가 있으므로 투어 상품 이용을 추천합니다."],
        warnings: [],
        hours: "Monday: 7:00 AM – 4:00 PM; Tuesday: 7:00 AM – 4:00 PM",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "공식 사이트/투어 예약처 확인", note: "근교 투어는 이동 시간을 고려해 예약 권장" },
        access: { area: "Mae Klong, Mueang Samut Songkhram District, Samut Songkhram 75000, Thailand", note: "Google Maps 위치 기준" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=13.4074289,99.9985032&query_place_id=ChIJ10pbl47T4jAR7qFFA1HY2Ds", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%81%8C%EB%A0%81%20%EC%B2%A0%EA%B8%B8%EC%8B%9C%EC%9E%A5%20%EB%B0%A9%EC%BD%95%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카오산로드": {
        photos: ["/images/bangkok/info/tourSpa/khaosan-road.jpg"],
        summary: "낮보다 밤이 더 화려한 곳으로, 활기찬 음악과 길거리 음식이 가득한 여행자의 중심지입니다.",
        updatedAt: "2026-07-21",
        highlights: ["길거리에서 즐기는 팟타이와 맥주 한 잔", "전 세계 여행자들과 교류할 수 있는 자유로운 분위기"],
        tips: ["소음과 인파가 많으므로 소지품 관리에 유의하세요.", "마사지를 받고 휴식을 취하기에도 좋습니다."],
        warnings: [],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "무료",
        reservation: { required: false, method: "공식 사이트/투어 예약처 확인", note: "근교 투어는 이동 시간을 고려해 예약 권장" },
        access: { area: "Thanon Khao San, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand", note: "Google Maps 위치 기준" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=13.7589206,100.4972578&query_place_id=ChIJDR23yhKZ4jARdqd5AHsct0A", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%82%B0%EB%A1%9C%EB%93%9C%20%EB%B0%A9%EC%BD%95%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    }
};

export default info;
