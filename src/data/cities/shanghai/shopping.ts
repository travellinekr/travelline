import type { ShoppingData } from '../index';


const shopping: ShoppingData[] = [
    {
        name: "난징동루 보행가",
        showInInbox: true,
        hasInfo: true,
        type: "market",
        city: "Shanghai",
        coordinates: { lat: 31.23472099999999, lng: 121.474898 },
        category: "쇼핑 거리",
        specialItems: "대형 상점, 기념품, 야경 동선",
        priceRange: "¥300~8,000+",
        openingHours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        taxRefund: false,
        features: ["대형 상점, 기념품, 야경 동선", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        icon: "🛍️"
    },
    {
        name: "상하이 IFC 몰",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Shanghai",
        coordinates: { lat: 31.236862, lng: 121.501858 },
        category: "고급 쇼핑몰",
        specialItems: "명품, 레스토랑, 루자쭈이 쇼핑",
        priceRange: "¥300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        taxRefund: true,
        features: ["명품, 레스토랑, 루자쭈이 쇼핑", "평점 4.4", "상하이 여행 동선에 넣기 좋음"],
        icon: "🏙️"
    },
    {
        name: "IAPM 몰",
        showInInbox: true,
        hasInfo: true,
        type: "mall",
        city: "Shanghai",
        coordinates: { lat: 31.2164969, lng: 121.458587 },
        category: "쇼핑몰",
        specialItems: "패션, 뷰티, 늦은 시간 쇼핑",
        priceRange: "¥300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        taxRefund: true,
        features: ["패션, 뷰티, 늦은 시간 쇼핑", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        icon: "🏬"
    },
    {
        name: "신천지 스타일",
        showInInbox: true,
        hasInfo: true,
        type: "boutique",
        city: "Shanghai",
        coordinates: { lat: 31.21916, lng: 121.474878 },
        category: "라이프스타일 쇼핑",
        specialItems: "디자이너 브랜드, 카페, 레스토랑",
        priceRange: "¥300~8,000+",
        openingHours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        taxRefund: false,
        features: ["감각적인 디자이너 브랜드", "분위기 좋은 테라스 카페", "고급 레스토랑"],
        icon: "🧥"
    },
    {
        name: "톈즈팡",
        showInInbox: true,
        hasInfo: true,
        type: "souvenir",
        city: "Shanghai",
        coordinates: { lat: 31.2082573, lng: 121.4681133 },
        category: "골목 상점가",
        specialItems: "기념품, 공예품, 카페 골목",
        priceRange: "¥300~8,000+",
        openingHours: "방문 전 확인 권장",
        taxRefund: false,
        features: ["아기자기한 기념품 쇼핑", "감성적인 공예품 구경", "골목 속 숨은 카페 투어"],
        icon: "🏮"
    },
];

export default shopping;
