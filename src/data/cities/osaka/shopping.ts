import type { ShoppingData } from '../index';

const shopping: ShoppingData[] = [
    {
        name: "한큐 우메다 본점",
        showInInbox: true,
        type: "department-store",
        city: "Osaka",
        coordinates: { lat: 34.7024, lng: 135.4959 },
        category: "종합 백화점",
        specialItems: "명품, 화장품, 식품관",
        priceRange: "¥1,000~100,000+",
        openingHours: "10:00~20:00",
        taxRefund: true,
        features: ["택스 리펀드", "명품관", "식품관"],
        icon: "🏬"
    },
    {
        name: "도톤보리 쇼핑 거리",
        showInInbox: true,
        type: "market",
        city: "Osaka",
        coordinates: { lat: 34.6686, lng: 135.5010 },
        category: "쇼핑 거리",
        specialItems: "기념품, 의류, 잡화",
        priceRange: "¥500~10,000",
        openingHours: "10:00~22:00",
        taxRefund: false,
        features: ["관광 명소", "다양한 상점", "야간 쇼핑"],
        icon: "🛍️"
    },
    {
        name: "구로몬 시장",
        showInInbox: true,
        type: "market",
        city: "Osaka",
        coordinates: { lat: 34.6660, lng: 135.5065 },
        category: "전통 시장",
        specialItems: "신선 식품, 해산물, 과일",
        priceRange: "¥300~5,000",
        openingHours: "08:00~18:00",
        taxRefund: false,
        features: ["오사카 부엌", "신선 식품", "시식 가능"],
        icon: "🐟"
    },
    {
        name: "난바 파크스",
        showInInbox: false,
        type: "mall",
        city: "Osaka",
        coordinates: { lat: 34.6610, lng: 135.5020 },
        category: "복합 쇼핑몰",
        specialItems: "패션, 잡화, 레스토랑",
        priceRange: "¥1,000~30,000",
        openingHours: "11:00~21:00",
        taxRefund: true,
        features: ["옥상 정원", "영화관", "다양한 브랜드"],
        icon: "🏢"
    },
    {
        name: "돈키호테 도톤보리점",
        showInInbox: false,
        type: "specialty",
        city: "Osaka",
        coordinates: { lat: 34.6688, lng: 135.5015 },
        category: "종합 할인점",
        specialItems: "화장품, 과자, 전자제품",
        priceRange: "¥100~50,000",
        openingHours: "24/7",
        taxRefund: true,
        features: ["24시간 영업", "면세", "한국어 안내"],
        icon: "🎡"
    }
];

export default shopping;
