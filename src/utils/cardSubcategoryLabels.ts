// 조회조건(PickerFilterBar)의 그룹명과 카드 상단 라벨을 동일하게 유지합니다.
export const FOOD_CARD_SUBCATEGORY_LABELS: Record<string, string> = {
    "korean": "한식",
    "japanese": "일식",
    "western": "양식",
    "italian": "양식",
    "french": "양식",
    "seafood": "해산물",
    "cafe": "카페",
    "local": "로컬·길거리",
    "street-food": "로컬·길거리",
    "chinese": "기타",
    "fusion": "기타",
};

export const ACCOMMODATION_CARD_SUBCATEGORY_LABELS: Record<string, string> = {
    "hotel": "호텔",
    "resort": "리조트",
    "airbnb": "에어비앤비",
    "hostel": "호스텔·게스트하우스",
    "guesthouse": "호스텔·게스트하우스",
};

export const SHOPPING_CARD_SUBCATEGORY_LABELS: Record<string, string> = {
    "department-store": "백화점·쇼핑몰",
    "mall": "백화점·쇼핑몰",
    "market": "전통시장",
    "supermarket": "마트·편의점",
    "convenience": "마트·편의점",
    "outlet": "아울렛",
    "duty-free": "면세점",
    "souvenir": "기념품·특산품",
    "specialty": "기념품·특산품",
    "boutique": "기념품·특산품",
};

export const TOUR_SPA_CARD_SUBCATEGORY_LABELS: Record<string, string> = {
    "city-tour": "관광지",
    "cultural": "관광지",
    "island-hopping": "투어",
    "adventure": "투어",
    "cruise": "투어",
    "spa": "스파·마사지",
    "massage": "스파·마사지",
    "theme-park": "테마파크",
    "water-sports": "액티비티",
    "show": "공연·체험",
    "workshop": "공연·체험",
};

export function getCardSubcategoryLabel(
    category: "food" | "accommodation" | "shopping" | "tourSpa",
    type?: string,
): string {
    if (!type) {
        return {
            food: "맛집",
            accommodation: "숙소",
            shopping: "쇼핑",
            tourSpa: "투어&스파",
        }[category];
    }

    const labels = {
        food: FOOD_CARD_SUBCATEGORY_LABELS,
        accommodation: ACCOMMODATION_CARD_SUBCATEGORY_LABELS,
        shopping: SHOPPING_CARD_SUBCATEGORY_LABELS,
        tourSpa: TOUR_SPA_CARD_SUBCATEGORY_LABELS,
    }[category];

    return labels[type] ?? type;
}
