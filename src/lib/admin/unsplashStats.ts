// Unsplash 는 별도 quota API 가 없어 test 호출 응답 헤더로 잔여 확인.
// 호출 1회는 사용량 소진에 포함되지만 정보 획득이 목적이므로 감수.
// 대시보드 조회마다 소진되지 않도록 60초 in-memory 캐시.

export interface UnsplashStats {
    limit: number;
    remaining: number;
    lastCheckedAt: number;
}

let _cache: UnsplashStats | null = null;
const CACHE_TTL_MS = 60_000;

export async function getUnsplashStats(force = false): Promise<UnsplashStats | null> {
    const now = Date.now();
    if (!force && _cache && now - _cache.lastCheckedAt < CACHE_TTL_MS) {
        return _cache;
    }
    const key = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    if (!key) return null;
    try {
        // 사용량 최소화를 위해 head-like: 리스트 첫 페이지 1건만 요청
        const res = await fetch('https://api.unsplash.com/photos?per_page=1', {
            headers: { Authorization: `Client-ID ${key}` },
            cache: 'no-store',
        });
        if (!res.ok) {
            console.error('[admin/unsplashStats] fetch failed:', res.status);
            return null;
        }
        const limit = parseInt(res.headers.get('X-Ratelimit-Limit') || '0', 10);
        const remaining = parseInt(res.headers.get('X-Ratelimit-Remaining') || '0', 10);
        const stats: UnsplashStats = { limit, remaining, lastCheckedAt: now };
        _cache = stats;
        return stats;
    } catch (err) {
        console.error('[admin/unsplashStats] error:', err);
        return null;
    }
}
