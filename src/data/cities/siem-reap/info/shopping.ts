import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "올드 마켓": {
        photos: ["/images/siem-reap/info/shopping/old-market-siem-reap-psar-chas.jpg"],
        summary: "씨엠립에서 가장 유명한 전통 시장으로 다양한 기념품과 현지 물건을 구경할 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 의류 및 액세서리 판매", "현지 분위기를 느낄 수 있는 활기찬 시장"],
        tips: ["흥정을 통해 더 저렴하게 구매해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://krukhmer.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5624422209340810269", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC%EB%93%9C+%EB%A7%88%EC%BC%93+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "메이드 인 캄보디아 마켓": {
        photos: ["/images/siem-reap/info/shopping/made-in-cambodia-market-siem-reap.jpg"],
        summary: "캄보디아 현지 예술가들의 정성이 담긴 고품질 수공예품을 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 제작 수공예품 전문", "윤리적 소비를 지원하는 마켓"],
        tips: ["퀄리티 높은 기념품을 찾는 분들께 추천합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오후 12:00~9:00; 화요일: 오후 12:00~9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MadeinCambodiaMarket/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13232011585309506872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4%EB%93%9C+%EC%9D%B8+%EC%BA%84%EB%B3%B4%EB%94%94%EC%95%84+%EB%A7%88%EC%BC%93+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아티산 앙코르": {
        photos: ["/images/siem-reap/info/shopping/artisans-angkor-siem-reap.jpg"],
        summary: "현지 장인들이 직접 만든 고품질의 수공예품을 만나볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정교한 실크 제품", "전통 방식의 공예품"],
        tips: ["장인들의 작업 과정을 직접 관람할 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:30 ~ 오후 6:00; 화요일: 오전 7:30 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://artisansangkor.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1709863523004106601", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8B%B0%EC%82%B0+%EC%95%99%EC%BD%94%EB%A5%B4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "럭키 몰 씨엠립": {
        photos: ["/images/siem-reap/info/shopping/lucky-mall-siem-reap.jpg"],
        summary: "다양한 물건을 구매할 수 있는 씨엠립의 대표적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 잡화 판매", "편리한 접근성"],
        tips: ["가벼운 기념품 쇼핑에 적합합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/LuckyMallSR/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17057545577864151365", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AD%ED%82%A4+%EB%AA%B0+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "앙코르 트레이드 센터": {
        photos: ["/images/siem-reap/info/shopping/angkor-trade-center-siem-reap.jpg"],
        summary: "시내 중심에 위치하여 다양한 상품을 만나볼 수 있는 쇼핑센터입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 기념품 및 특산물 판매", "올드 마켓 인근의 편리한 접근성"],
        tips: ["주변 시장과 함께 둘러보며 구경하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.senteursdangkor.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12060095358465235519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%99%EC%BD%94%EB%A5%B4+%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%93%9C+%EC%84%BC%ED%84%B0+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
