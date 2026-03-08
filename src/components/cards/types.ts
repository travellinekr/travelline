/**
 * 카드 variant 타입
 * - inbox: 여행보드 인박스 (드래그 가능, 투표 버튼)
 * - timeline: 여행보드 타임라인 (드래그 가능, 날짜 표시)
 * - explore: 익스플로러 보드 (정적, 체크박스 포함)
 */
export type CardVariant = 'inbox' | 'timeline' | 'explore';

/**
 * 모든 카드가 공통으로 받는 props
 */
export interface CommonCardProps {
    card: any;
    variant?: CardVariant;
    className?: string;

    // inbox / timeline 드래그 관련
    onRef?: any;
    style?: any;
    listeners?: any;
    attributes?: any;

    // inbox / timeline 액션
    onRemove?: () => void;
    onVoteToggle?: (id: string) => void;
    onUpdateCard?: (updates: Record<string, any>) => void;
    onOpenNotes?: () => void;
    hasNotes?: boolean;
    canEdit?: boolean;
    isHeader?: boolean;

    // explore 전용
    isSelected?: boolean;
    isChecked?: boolean;
    onToggleCheck?: (e: React.MouseEvent) => void;
    onClick?: () => void;
}
