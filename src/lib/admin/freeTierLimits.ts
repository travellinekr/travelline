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
    liveblocks: {
        mau: 100,          // Starter free plan
        connections: 10,   // 동시 연결
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
