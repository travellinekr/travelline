import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "아오낭 랜드마크 나이트 마켓": {
        photos: ["/images/krabi/info/shopping/ao-nang-landmark-night-market-krabi.jpg"],
        summary: "아오낭 지역에서 다양한 먹거리와 볼거리를 즐길 수 있는 활기찬 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 태국 길거리 음식", "활기찬 시장 분위기"],
        tips: ["저녁 시간대에 방문하면 더욱 활기찬 분위기를 느낄 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.aonanglandmark.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2367171220277435299", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%98%A4%EB%82%AD+%EB%9E%9C%EB%93%9C%EB%A7%88%ED%81%AC+%EB%82%98%EC%9D%B4%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "끄라비 타운 워킹스트리트 야시장": {
        photos: ["/images/krabi/info/shopping/krabi-town-night-market-walking-street.jpg"],
        summary: "주말에 열리는 끄라비 타운의 대표적인 먹거리 중심 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["구운 감자 등 특색 있는 간식", "주말 한정 운영"],
        tips: ["주말 운영 여부를 미리 확인하고 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8066092763838497690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%81%84%EB%9D%BC%EB%B9%84+%ED%83%80%EC%9A%B4+%EC%9B%8C%ED%82%B9%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마하랏 마켓": {
        photos: ["/images/krabi/info/shopping/maharaj-market-krabi.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 활기찬 청과물 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 현지 과일 및 식재료", "다양한 길거리 음식"],
        tips: ["저녁 시간대에 방문하면 더욱 활기찬 분위기를 즐길 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 5:00 ~ 오후 12:00; 화요일: 오전 5:00 ~ 오후 12:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6025884828372339337", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%95%98%EB%9E%8F+%EB%A7%88%EC%BC%93+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보그 쇼핑센터 끄라비": {
        photos: ["/images/krabi/info/shopping/vogue-shopping-center-krabi.jpg"],
        summary: "쇼핑을 즐길 수 있는 깔끔한 시설의 쇼핑센터입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브랜드 매장", "편리한 쇼핑 환경"],
        tips: ["주변 맛집과 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/VOGUEKRABI/?ref=bookmarks", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7220638307474080491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EA%B7%B8+%EC%87%BC%ED%95%91%EC%84%BC%ED%84%B0+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아울렛 빌리지 끄라비": {
        photos: ["/images/krabi/info/shopping/outlet-village-krabi.jpg"],
        summary: "다양한 브랜드 제품을 저렴하게 구매할 수 있는 아울렛 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["브랜드 의류 및 잡화 할인", "합리적인 가격의 쇼핑"],
        tips: ["방문 전 운영 시간을 미리 확인하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.outletmallthailand.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5205237216750795195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9A%B8%EB%A0%9B+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노파랏 타라 플라자": {
        photos: ["/images/krabi/info/shopping/nopparat-thara-plaza-krabi.jpg"],
        summary: "태국 기념품을 구경하고 구매하기 좋은 상점가입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 태국 전통 기념품", "아오낭 비치 인근 위치"],
        tips: ["기념품 가격을 비교하며 쇼핑하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:25 ~ 오전 2:25; 화요일: 오전 10:25 ~ 오전 2:25",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9312564529255561164", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%ED%8C%8C%EB%9E%8F+%ED%83%80%EB%9D%BC+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "클롱무앙 플라자": {
        photos: ["/images/krabi/info/shopping/klong-muang-plaza-krabi.jpg"],
        summary: "다양한 상점들이 모여 있는 지역 쇼핑 센터입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 로컬 상점가", "편리한 접근성"],
        tips: ["현지 물가를 경험하기 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10196513122962210556", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%B4%EB%A1%B1%EB%AC%B4%EC%95%99+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "블루 마운틴 마켓 끄라비": {
        photos: ["/images/krabi/info/shopping/blue-mountain-market-krabi-ao-nang.jpg"],
        summary: "활기찬 분위기를 느낄 수 있는 끄라비의 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 길거리 음식", "활기찬 야시장 분위기"],
        tips: ["저녁 시간대에 방문하는 것을 추천합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/aonangbluemountainmarket/?locale=en_GB&_rdc=1&_rdr#", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5743000497896781051", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8+%EB%A7%88%EC%9A%B4%ED%8B%B4+%EB%A7%88%EC%BC%93+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "빅씨 끄라비": {
        photos: ["/images/krabi/info/shopping/big-c-krabi.jpg"],
        summary: "다양한 식료품과 기념품을 한 번에 구매할 수 있는 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 태국 과자와 간식류", "현지 식재료 및 생필품 구비"],
        tips: ["기념품 쇼핑을 위해 여유로운 시간을 갖고 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4516987134654669946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%94%A8+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "로터스 끄라비": {
        photos: ["/images/krabi/info/shopping/lotus-s-krabi.jpg"],
        summary: "지역 주민들이 자주 이용하는 깔끔하고 규모 있는 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 농수산물 판매", "합리적인 가격의 생필품"],
        tips: ["현지 물가를 체감하며 쇼핑하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lotuss.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9662932769353098861", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%ED%84%B0%EC%8A%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
