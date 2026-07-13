import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "아이콘시암": {
        photos: ["/images/bangkok/info/shopping/iconsiam-bangkok.jpg"],
        summary: "화려한 럭셔리 쇼핑과 실내 수상시장을 동시에 즐길 수 있는 방콕의 랜드마크",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드 스토어", "실내 수상시장 쑥시암", "다양한 테마 다이닝"],
        tips: ["쑥시암에서 태국 길거리 음식을 시원하게 맛보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.iconsiam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1612497051803357940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%BD%98%EC%8B%9C%EC%95%94+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시암 파라곤": {
        photos: ["/images/bangkok/info/shopping/siam-paragon-bangkok.jpg"],
        summary: "방콕 쇼핑의 중심지이자 프리미엄 브랜드가 모인 대표적인 백화점",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 명품관", "대규모 식당가", "다양한 플래그십 스토어"],
        tips: ["에어컨이 빵빵해서 더위를 피하기 가장 좋은 쇼핑 코스예요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.siamparagon.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11476178565854079331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%95%94+%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센트럴월드": {
        photos: ["/images/bangkok/info/shopping/centralworld-bangkok.jpg"],
        summary: "센트럴 월드 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 라이프스타일", "평점 4.5", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14171986354817230340", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4%EC%9B%94%EB%93%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "MBK 센터": {
        photos: ["/images/bangkok/info/shopping/mbk-center-bangkok.jpg"],
        summary: "MBK CENTER 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, 기념품, 캐주얼 쇼핑", "평점 4.5", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4638341614504662750", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MBK+%EC%84%BC%ED%84%B0+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "터미널21 아속": {
        photos: ["/images/bangkok/info/shopping/terminal-21-asok-bangkok.jpg"],
        summary: "터미널 21 아속 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 푸드코트, 역 연결", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3711935229154595705", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%84%B0%EB%AF%B8%EB%84%9021+%EC%95%84%EC%86%8D+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜뚜짝 주말시장": {
        photos: ["/images/bangkok/info/shopping/chatuchak-weekend-market-bangkok.jpg"],
        summary: "짜뚜짝 주말시장 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 의류, 인테리어 소품", "평점 4.4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 오전 5:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/p/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B8%B1%E0%B8%94%E0%B8%88%E0%B8%95%E0%B8%B8%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3-%E0%B8%AA%E0%B8%87%E0%B8%95%E0%B8%81%E0%B8%97%E0%B8%A1-Chatuchak-Weekend-Market-Jatujak-market-jjmarket-100075700702634/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10516346959717498187", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EB%9A%9C%EC%A7%9D+%EC%A3%BC%EB%A7%90%EC%8B%9C%EC%9E%A5+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "플래티넘 패션몰": {
        photos: ["/images/bangkok/info/shopping/platinum-fashion-mall-bangkok.jpg"],
        summary: "방콕 의류 쇼핑의 성지! 저렴한 가격에 트렌디한 옷을 득템할 수 있는 도매 시장이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 의류 및 액세서리", "합리적인 도매가"],
        tips: ["대량 구매 시 추가 할인 문의하기"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.platinumfashionmall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3722288289240081465", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9E%98%ED%8B%B0%EB%84%98+%ED%8C%A8%EC%85%98%EB%AA%B0+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅씨 라차담리": {
        photos: ["/images/bangkok/info/shopping/big-c-ratchadamri-bangkok.jpg"],
        summary: "태국 여행 기념품과 간식거리를 한 번에 해결하기 딱 좋은 필수 쇼핑 코스예요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 태국 과자 및 드라이 푸드", "가성비 좋은 생필품"],
        tips: ["무거운 짐은 호텔 배송 서비스 활용하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17406931750270071640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%94%A8+%EB%9D%BC%EC%B0%A8%EB%8B%B4%EB%A6%AC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엠쿼티어": {
        photos: ["/images/bangkok/info/shopping/emquartier-bangkok.jpg"],
        summary: "세련된 브랜드와 맛집이 모여 있어 쾌적하게 쇼핑과 식사를 즐기기 좋아요.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리 패션 브랜드", "프리미엄 다이닝"],
        tips: ["프롬퐁역과 연결되어 접근성 최고"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3680664228700598362", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0%EC%BF%BC%ED%8B%B0%EC%96%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아시아티크 더 리버프론트": {
        photos: ["/images/bangkok/info/shopping/asiatique-the-riverfront-bangkok.jpg"],
        summary: "아시아틱 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야시장, 강변 식사, 기념품", "평점 4.4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.asiatiquethailand.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14690685404681730134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8B%9C%EC%95%84%ED%8B%B0%ED%81%AC+%EB%8D%94+%EB%A6%AC%EB%B2%84%ED%94%84%EB%A1%A0%ED%8A%B8+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
