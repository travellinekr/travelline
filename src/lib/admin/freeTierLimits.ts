// 5개 API 무료 tier 한도 상수. 2026-07 기준 공개 문서 확인 값.
// 유료 전환 시 이 파일만 갱신하면 대시보드 임계값 계산 자동 반영.

export const FREE_TIER = {
    supabase: {
        db_mb: 500,        // Database size
        storage_gb: 1,     // Storage bucket total
        mau: 50_000,       // Monthly active users
        egress_gb: 5,      // 월 egress
    },
    gemini: {
        rpm: 15,           // requests per minute (gemini-2.0-flash free)
        rpd: 1_500,        // requests per day
    },
    unsplash: {
        hourly: 50,        // Developer plan
    },
    googleMaps: {
        monthly_credit_usd: 200, // $200 free credit / month (모든 Google Maps Platform 공통)
    },
    codex: {
        // Codex CLI / ChatGPT 계정 한도는 공개 사용량 API가 없어 실측 불가.
        usage_api_available: false,
    },
    liveblocks: {
        // 2026 기준 실제 무료 플랜 한도 (MAU 개념 폐기 · 총 room 수 무제한).
        // 아래 값들은 Liveblocks REST 로 실측 불가 — Dashboard 만 가능.
        anonymous_connections_monthly: 3_000, // 월별 리셋
        connections_per_room: 10,             // 실시간 상한
        storage_mb_per_room: 10,              // 누적
    },
} as const;

// 임계값 판정: 0.80 이상 경고, 0.95 이상 위험
export type UsageStatus = 'normal' | 'warning' | 'danger';

export function computeStatus(used: number, limit: number): UsageStatus {
    if (limit <= 0) return 'normal';
    const ratio = used / limit;
    if (ratio >= 0.95) return 'danger';
    if (ratio >= 0.80) return 'warning';
    return 'normal';
}
