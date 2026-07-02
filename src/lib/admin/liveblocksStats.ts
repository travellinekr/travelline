// Liveblocks REST API: 총 room 수 집계.
// MAU 는 REST 로 직접 조회 불가 → 대시보드 링크만 안내.

const LIVEBLOCKS_API = 'https://api.liveblocks.io/v2';

export interface LiveblocksStats {
    totalRooms: number;
    lastCheckedAt: number;
}

export async function getLiveblocksStats(): Promise<LiveblocksStats | null> {
    const secret = process.env.LIVEBLOCKS_SECRET_KEY;
    if (!secret) return null;

    try {
        let total = 0;
        let cursor: string | null = null;
        // 안전장치: 최대 20 페이지 (2000 rooms). 초과 시 total 은 근사값이지만 대시보드용으론 충분.
        for (let i = 0; i < 20; i++) {
            const url: string = cursor
                ? `${LIVEBLOCKS_API}/rooms?startingAfter=${encodeURIComponent(cursor)}&limit=100`
                : `${LIVEBLOCKS_API}/rooms?limit=100`;
            const res = await fetch(url, {
                headers: { Authorization: `Bearer ${secret}` },
                cache: 'no-store',
            });
            if (!res.ok) {
                console.error('[admin/liveblocksStats] fetch failed:', res.status, await res.text());
                break;
            }
            const json: any = await res.json();
            const rooms: any[] = json.data ?? [];
            total += rooms.length;
            if (!json.nextPage || rooms.length === 0) break;
            const last = rooms[rooms.length - 1];
            if (!last?.id) break;
            cursor = last.id;
        }
        return { totalRooms: total, lastCheckedAt: Date.now() };
    } catch (err) {
        console.error('[admin/liveblocksStats] error:', err);
        return null;
    }
}
