import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "비엔티안 메콩 야시장": {
        photos: ["/images/vientiane/info/shopping/vientiane-night-market.jpg"],
        summary: "메콩강변에서 즐기는 활기찬 분위기의 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 길거리 음식", "현지 기념품 쇼핑"],
        tips: ["해질녘에 방문하면 아름다운 노을을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11582317276719257002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%A9%94%EC%BD%A9+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탈랏 사오 아침시장": {
        photos: ["/images/vientiane/info/shopping/talat-sao-morning-market-vientiane.jpg"],
        summary: "라오스의 전통적인 삶을 엿볼 수 있는 활기찬 아침 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 현지 식재료", "전통 물품 판매"],
        tips: ["이른 아침에 방문해야 가장 활기찬 모습을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6158535597322888256", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%88%EB%9E%8F+%EC%82%AC%EC%98%A4+%EC%95%84%EC%B9%A8%EC%8B%9C%EC%9E%A5+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비엔티안 센터": {
        photos: ["/images/vientiane/info/shopping/vientiane-center-lao.jpg"],
        summary: "비엔나의 주요 쇼핑몰로 다양한 상점과 편의시설을 갖추고 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브랜드 입점", "쾌적한 쇼핑 환경"],
        tips: ["주말에는 방문객이 많으니 여유롭게 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.vclao.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3315638199660599338", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EC%84%BC%ED%84%B0+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "팍슨 라오스": {
        photos: ["/images/vientiane/info/shopping/parkson-laos-vientiane.jpg"],
        summary: "라오스 비엔티안에서 인기 있는 백화점 및 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 의류 및 잡화 판매", "현지 트렌드 반영"],
        tips: ["쇼핑 후 근처 맛집을 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/parksonlaos", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12596898496569893272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8D%EC%8A%A8+%EB%9D%BC%EC%98%A4%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아이텍 몰 비엔티안": {
        photos: ["/images/vientiane/info/shopping/itecc-mall-vientiane.jpg"],
        summary: "비엔티안에서 다양한 상품을 구매할 수 있는 대표적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 환경"],
        tips: ["주변 식당가와 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7219515259780905191", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%ED%85%8D+%EB%AA%B0+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "디마트 비엔티안": {
        photos: ["/images/vientiane/info/shopping/d-mart-vientiane-laos.jpg"],
        summary: "현지 식료품과 생필품을 저렴하게 구매할 수 있는 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 현지 식재료", "합리적인 가격"],
        tips: ["기념품용 간식거리를 사기에 적합합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9450087461229408545", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%A7%88%ED%8A%B8+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "홈 아이디얼 비엔티안": {
        photos: ["/images/vientiane/info/shopping/home-ideal-vientiane.jpg"],
        summary: "비엔티안에서 다양한 마트 제품과 생활용품을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 식료품 및 생필품 구비", "마트 및 생활용품 전문"],
        tips: ["현지 생활용품 쇼핑 시 유용합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6317768612062484597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%88+%EC%95%84%EC%9D%B4%EB%94%94%EC%96%BC+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "티샵 라이 갤러리": {
        photos: ["/images/vientiane/info/shopping/t-shop-lai-gallery-vientiane.jpg"],
        summary: "라오스 비엔티안에 위치한 아기자기한 기념품 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 기념품 판매", "감각적인 갤러리 분위기"],
        tips: ["여행 선물용 소품을 찾기에 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14883557615306524172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8B%B0%EC%83%B5+%EB%9D%BC%EC%9D%B4+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "허 웍스 비엔티안": {
        photos: ["/images/vientiane/info/shopping/her-works-vientiane.jpg"],
        summary: "다양하고 아름다운 수공예품을 만나볼 수 있는 부티크 샵입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정교한 디자인의 수공예 액세서리", "라오스 전통미가 담긴 소품"],
        tips: ["선물용 기념품을 찾기에 매우 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://herworks.la/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2566500751465919789", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%88+%EC%9B%8D%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "캐롤 캐시디 라오 텍스타일": {
        photos: ["/images/vientiane/info/shopping/carol-cassidy-lao-textiles-vientiane.jpg"],
        summary: "라오스 전통 직물의 매력을 느낄 수 있는 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고급스러운 품질의 라오스 전통 직물", "다양한 패턴과 색상의 섬유 제품"],
        tips: ["직물의 질감을 직접 확인하고 구매해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 9:00 ~ 오후 12:00, 오후 2:00~5:00; 화요일: 오전 9:00 ~ 오후 12:00, 오후 2:00~5:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8727141390027731990", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%A1%A4+%EC%BA%90%EC%8B%9C%EB%94%94+%EB%9D%BC%EC%98%A4+%ED%85%8D%EC%8A%A4%ED%83%80%EC%9D%BC+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
