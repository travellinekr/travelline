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
        photos: ["/images/bangkok/info/tourSpa/let-s-relax-spa-thonglor-bangkok.jpg"],
        summary: "여행자 이용이 많은 방콕 스파 체인 지점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여행자 이용이 많은 방콕 스파 체인 지점입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~2시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "27 Soi Sukhumvit55, Thonglor, ถ. สุขุมวิท Klongton, เขตวัฒนา กรุงเทพมหานคร 10110 태국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://letsrelaxspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11704493004637818830", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0+%EB%A6%B4%EB%A0%89%EC%8A%A4+%EC%8A%A4%ED%8C%8C+%ED%86%B5%EB%A1%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
