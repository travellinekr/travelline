import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "올드 마켓",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Siem Reap",
        coordinates: { lat: 13.3537824, lng: 103.8551924 },
        category: "전통시장",
        specialItems: "기념품, 향신료, 의류, 로컬 식재료",
        priceRange: "흥정 필수",
        openingHours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        taxRefund: false,
        features: ["다양한 종류의 의류 및 액세서리 판매", "현지 분위기를 느낄 수 있는 활기찬 시장"],
        icon: "🛒"
    },
    {
        name: "메이드 인 캄보디아 마켓",
        showInInbox: true,
        hasInfo: true,
        type: "souvenir",
        city: "Siem Reap",
        coordinates: { lat: 13.3599631, lng: 103.8568943 },
        category: "수공예 마켓",
        specialItems: "캄보디아 수공예품, 아트, 기념품",
        priceRange: "매장별 상이",
        openingHours: "월요일: 오후 12:00~9:00; 화요일: 오후 12:00~9:00",
        taxRefund: false,
        features: ["현지 제작 수공예품 전문", "윤리적 소비를 지원하는 마켓"],
        icon: "🎁"
    },
    {
        name: "아티산 앙코르",
        showInInbox: true,
        hasInfo: true,
        type: "specialty",
        city: "Siem Reap",
        coordinates: { lat: 13.3524786, lng: 103.8521176 },
        category: "공예품",
        specialItems: "실크, 목각, 석조 공예품",
        priceRange: "정찰가 중심",
        openingHours: "월요일: 오전 7:30 ~ 오후 6:00; 화요일: 오전 7:30 ~ 오후 6:00",
        taxRefund: false,
        features: ["정교한 실크 제품", "전통 방식의 공예품"],
        icon: "🎨"
    },
    {
        name: "럭키 몰 씨엠립",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Siem Reap",
        coordinates: { lat: 13.3620328, lng: 103.8554908 },
        category: "쇼핑몰",
        specialItems: "마트, 생활용품, 식음료",
        priceRange: "정찰가",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["다양한 잡화 판매", "편리한 접근성"],
        icon: "🛍️"
    },
    {
        name: "앙코르 트레이드 센터",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Siem Reap",
        coordinates: { lat: 13.354185, lng: 103.8556847 },
        category: "시내 쇼핑센터",
        specialItems: "마트, ATM, 간단 쇼핑",
        priceRange: "정찰가",
        openingHours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        taxRefund: false,
        features: ["다양한 기념품 및 특산물 판매", "올드 마켓 인근의 편리한 접근성"],
        icon: "🏬"
    },
    {
        name: "앙코르 나이트 마켓",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Siem Reap",
        coordinates: { lat: 13.355357, lng: 103.8519752 },
        category: "야시장",
        specialItems: "기념품, 의류, 길거리 간식",
        priceRange: "매장별 상이",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["씨엠립 대표 야시장", "가벼운 산책과 쇼핑에 적합"],
        icon: "🌙"
    },
];

export default shopping;
