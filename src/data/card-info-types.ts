// 카드 인포 팝업 타입 정의.
// 4개 카테고리(숙소·맛집·쇼핑·교통)가 공통 InfoBase 를 확장하고 카테고리별 특유 필드를 갖는다.
// preparation(입국심사) 카드는 별도의 entryCardGuide.ts 를 계속 사용 (마이그레이션 없음).

export interface InfoLink {
    label: string;
    url: string;
    type: 'official' | 'guide' | 'blog';
    description?: string;
}

// 모든 인포가 공유하는 기본 필드
export interface InfoBase {
    summary: string;
    highlights?: string[];
    tips?: string[];
    warnings?: string[];
    photos?: string[];
    links?: InfoLink[];
    updatedAt?: string;
}

// 숙소
export interface AccommodationInfo extends InfoBase {
    checkIn?: { time: string; note?: string };
    checkOut?: { time: string; note?: string };
    breakfast?: { included: boolean; price?: string; time?: string; menu?: string };
    amenities?: { icon: string; label: string; note?: string }[];
    roomTypes?: { name: string; price?: string; capacity?: string; note?: string }[];
    location?: { transit?: string; landmark?: string; airport?: string };
}

// 맛집
export interface RestaurantInfo extends InfoBase {
    reservation?: { required: boolean; method?: string; url?: string; note?: string };
    menu?: {
        signature?: string;
        items?: { name: string; price?: string; note?: string }[];
    };
    hours?: string;
    payment?: string[];
    dressCode?: string;
    waitTime?: string;
}

// 쇼핑
export interface ShoppingInfo extends InfoBase {
    hours?: string;
    closureDates?: string;
    taxRefund?: { available: boolean; minAmount?: string; method?: string; note?: string };
    payment?: string[];
    parking?: string;
    floors?: string;
}

// 교통
export interface TransportInfo extends InfoBase {
    fare?: { base: string; note?: string; ranges?: { from: string; to: string; price: string }[] };
    app?: { required: boolean; name?: string; url?: string; downloadUrl?: string };
    payment?: string[];
    hours?: string;
    frequency?: string;
    route?: { name: string; stations: string[] }[];
}

// 투어&스파 / 관광지
export interface TourSpaInfo extends InfoBase {
    hours?: string;
    duration?: string;
    price?: string;
    reservation?: { required: boolean; method?: string; url?: string; note?: string };
    access?: { station?: string; area?: string; note?: string };
    bestTime?: string;
}

// 카테고리 → 데이터 파일명 매핑 (dynamic import 경로 계산용)
// 카드의 category 필드는 'hotel' 등이지만 파일명은 'accommodations' 등이므로 매핑 필요
export const CATEGORY_TO_INFO_FILE: Record<string, string> = {
    hotel: 'accommodations',
    food: 'restaurants',
    shopping: 'shopping',
    transport: 'transport',
    tourspa: 'tourSpa',
};
