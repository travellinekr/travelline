/**
 * 색상 데이터
 * 
 * 이 파일은 애플리케이션 전반에서 사용하는 색상 배열을 관리합니다.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 📝 데이터 업데이트 방법
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * 1. 새로운 색상 추가: 배열에 HEX 코드 추가
 * 2. 색상 변경: 해당 인덱스의 HEX 코드 수정
 * 3. 색상 제거: 배열에서 삭제
 * 
 * 💡 권장사항:
 * - Material Design 색상 팔레트 사용 (명도 400)
 * - 15개 정도가 적당 (더 많으면 색상이 중복되어 보일 수 있음)
 * - 너무 어둡거나 밝은 색은 피하기 (가독성 문제)
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 사용자 커서 색상
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 여러 사용자가 동시 접속 시 각 사용자의 커서에 할당되는 색상
// connectionId % CURSOR_COLORS.length 로 색상 선택
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const CURSOR_COLORS = [
    "#E57373", // Red 300
    "#F06292", // Pink 300
    "#BA68C8", // Purple 300
    "#9575CD", // Deep Purple 300
    "#7986CB", // Indigo 300
    "#64B5F6", // Blue 300
    "#4FC3F7", // Light Blue 300
    "#4DD0E1", // Cyan 300
    "#4DD0E1", // Cyan 300 (중복)
    "#81C784", // Green 300
    "#AED581", // Light Green 300
    "#DCE775", // Lime 300
    "#FFD54F", // Amber 300
    "#FFB74D", // Orange 300
    "#FF8A65", // Deep Orange 300
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🗂️ 카드 카테고리 색상 (design-system)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CardShell 좌측 컬러 바 / 아이콘 배경에 쓰는 카테고리 식별색.
// 지금까지 각 카드 컴포넌트(HotelCard 등)에 colorClass="bg-rose-400" 식으로
// 흩어져 있던 값을 한곳으로 모은 단일 출처(single source of truth).
//
// 사용 (신규 코드 권장):
//   import { CARD_CATEGORY_COLOR } from '@/data/colors';
//   const c = CARD_CATEGORY_COLOR[card.category] ?? CARD_CATEGORY_COLOR.other;
//   <div className={c.bar} />            // 컬러 바
//   <Icon className={c.text} />          // 아이콘 색
//
// ⚠️ 값 변경 시: globals.css 의 --color-cat-* 토큰과 docs/design-system.md 표도 함께 갱신.
// ⚠️ Tailwind JIT 가 클래스를 스캔할 수 있도록 문자열은 반드시 완전한 리터럴로 유지.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type CardCategoryKey =
    | 'destination'
    | 'preparation'
    | 'hotel'
    | 'food'
    | 'shopping'
    | 'transport'
    | 'tourspa'
    | 'other'
    | 'flight';

export interface CardCategoryColor {
    /** 좌측 컬러 바 배경 (bg-*-400) */
    bar: string;
    /** 아이콘/텍스트 색 (text-*-500) */
    text: string;
    /** 옅은 배경 (칩·hover 등, bg-*-50) */
    soft: string;
    /** 테두리 (border-*-200) */
    border: string;
    /** 링 (drag anchor 등, ring-*-400) */
    ring: string;
    /** HEX (지도 마커·SVG 등 클래스가 안 통하는 곳) */
    hex: string;
}

export const CARD_CATEGORY_COLOR: Record<CardCategoryKey, CardCategoryColor> = {
    destination: { bar: 'bg-emerald-400', text: 'text-emerald-500', soft: 'bg-emerald-50', border: 'border-emerald-200', ring: 'ring-emerald-400', hex: '#34d399' },
    preparation: { bar: 'bg-indigo-400',  text: 'text-indigo-500',  soft: 'bg-indigo-50',  border: 'border-indigo-200',  ring: 'ring-indigo-400',  hex: '#818cf8' },
    hotel:       { bar: 'bg-rose-400',    text: 'text-rose-500',     soft: 'bg-rose-50',    border: 'border-rose-200',    ring: 'ring-rose-400',    hex: '#fb7185' },
    food:        { bar: 'bg-orange-400',  text: 'text-orange-500',   soft: 'bg-orange-50',  border: 'border-orange-200',  ring: 'ring-orange-400',  hex: '#fb923c' },
    shopping:    { bar: 'bg-purple-400',  text: 'text-purple-500',   soft: 'bg-purple-50',  border: 'border-purple-200',  ring: 'ring-purple-400',  hex: '#c084fc' },
    transport:   { bar: 'bg-blue-400',    text: 'text-blue-500',     soft: 'bg-blue-50',    border: 'border-blue-200',    ring: 'ring-blue-400',    hex: '#60a5fa' },
    tourspa:     { bar: 'bg-cyan-400',    text: 'text-cyan-500',     soft: 'bg-cyan-50',    border: 'border-cyan-200',    ring: 'ring-cyan-400',    hex: '#22d3ee' },
    other:       { bar: 'bg-amber-400',   text: 'text-amber-500',    soft: 'bg-amber-50',   border: 'border-amber-200',   ring: 'ring-amber-400',   hex: '#fbbf24' },
    flight:      { bar: 'bg-sky-400',     text: 'text-sky-500',      soft: 'bg-sky-50',     border: 'border-sky-200',     ring: 'ring-sky-400',     hex: '#38bdf8' },
};

/** 카테고리 라벨 (한글) — 배지·툴팁용 */
export const CARD_CATEGORY_LABEL: Record<CardCategoryKey, string> = {
    destination: '여행지',
    preparation: '여행준비',
    hotel: '숙소',
    food: '맛집',
    shopping: '쇼핑',
    transport: '교통',
    tourspa: '투어&스파',
    other: '기타',
    flight: '항공',
};
