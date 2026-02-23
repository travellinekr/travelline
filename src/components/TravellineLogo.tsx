interface TravellineLogoProps {
    size?: number;
}

/**
 * Travelline 로고 컴포넌트
 * - 상단: 오렌지 가로 바 (T의 가로획, 전체 너비)
 * - 하단 3줄: 오렌지(짧게, 좌) + 틸(길게, 우) — 지그재그 없음
 */
export default function TravellineLogo({ size = 32 }: TravellineLogoProps) {
    const orange = '#FF6B47';
    const teal = '#5BBFAD';

    return (
        <svg
            width={size}
            height={Math.round(size * 36 / 40)}
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Travelline 로고"
        >
            {/* 상단 가로 바 (T의 가로획) */}
            <rect x="0" y="0" width="40" height="8" rx="2" fill={orange} />

            {/* 행 1 */}
            <rect x="0" y="12" width="14" height="7" rx="1.5" fill={orange} />
            <rect x="16" y="12" width="24" height="7" rx="1.5" fill={teal} />

            {/* 행 2 */}
            <rect x="0" y="21" width="14" height="7" rx="1.5" fill={orange} />
            <rect x="16" y="21" width="24" height="7" rx="1.5" fill={teal} />

            {/* 행 3 */}
            <rect x="0" y="30" width="14" height="6" rx="1.5" fill={orange} />
            <rect x="16" y="30" width="24" height="6" rx="1.5" fill={teal} />
        </svg>
    );
}
