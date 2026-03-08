/**
 * 맛집 카드 여행 정보 가이드
 * 추후 업데이트 예정
 */

export interface GuideItem {
    emoji: string;
    title: string;
    content: string;
}

// 맛집 여행 정보 (빈 배열 = "자료 준비중" 표시)
export const FOOD_GUIDE: GuideItem[] = [];
