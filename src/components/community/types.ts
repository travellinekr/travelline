export type BoardType = 'notice' | 'info' | 'review' | 'qna' | 'inquiry';

// 런타임 검증용 전체 목록 (inquiry 포함 — URL 파라미터 유효성 체크에 사용)
export const ALL_BOARD_TYPES: BoardType[] = ['notice', 'info', 'review', 'qna', 'inquiry'];

export const BOARD_LABEL: Record<BoardType, string> = {
    notice: '해외안전정보',
    info: '여행정보공유',
    review: '여행후기',
    qna: 'Q&A',
    inquiry: '문의&요청',
};

// 게시판구분 뱃지 색상 — 미니멀 톤(홈 페이지 팔레트와 어울리도록)
export const BOARD_BADGE: Record<BoardType, string> = {
    notice: 'bg-rose-50 text-rose-600 border-rose-100',
    info: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    review: 'bg-violet-50 text-violet-600 border-violet-100',
    qna: 'bg-sky-50 text-sky-600 border-sky-100',
    inquiry: 'bg-amber-50 text-amber-700 border-amber-100',
};

// 커뮤니티 페이지 상단 탭. 'inquiry' 는 여행보드 하단바에서만 진입 → 여기서 숨김.
export const BOARD_TABS: Array<{ key: BoardType; label: string }> = [
    { key: 'notice', label: '해외안전정보' },
    { key: 'info', label: '여행정보공유' },
    { key: 'review', label: '여행후기' },
    { key: 'qna', label: 'Q&A' },
];

export interface CommunityPost {
    id: string;
    post_number: number;
    board_type: BoardType;
    country: string | null;
    city: string | null;
    title: string;
    content?: string; // 목록 API 응답에서는 미포함 (상세 API 에서만 반환)
    author_id: string | null;
    author_email: string;
    view_count: number;
    reply_count: number;
    created_at: string;
    updated_at: string;
}

export interface CommunityReply {
    id: string;
    post_id: string;
    content: string;
    author_id: string | null;
    author_email: string;
    created_at: string;
    updated_at: string;
}

// yyyy-mm-dd (오늘/어제/이후 상대시간 없이 명확 표시)
export function formatDate(iso: string): string {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

// 이메일에서 표시명 추출 (앞부분만)
export function shortAuthor(email: string): string {
    if (!email) return '사용자';
    return email.split('@')[0];
}
