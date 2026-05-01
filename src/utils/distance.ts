/**
 * 두 좌표 간 거리(미터) — Haversine 공식
 */
export function haversineMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 6371000; // earth radius (m)
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}

/**
 * 거리 포맷 — 1km 미만 'Nm', 이상 'N.Nkm'
 */
export function formatDistance(meters: number): string {
  if (meters < 1000) return `${Math.round(meters)}m`;
  return `${(meters / 1000).toFixed(1)}km`;
}

/**
 * anchor 좌표 기준 거리순 정렬 (좌표 없는 항목은 끝으로)
 */
export function sortByAnchorDistance<T extends { coordinates?: { lat: number; lng: number } | null }>(
  items: T[],
  anchor: { lat: number; lng: number } | null | undefined
): T[] {
  if (!anchor) return items;
  return [...items].sort((a, b) => {
    const aD = a.coordinates ? haversineMeters(anchor, a.coordinates) : Infinity;
    const bD = b.coordinates ? haversineMeters(anchor, b.coordinates) : Infinity;
    return aD - bD;
  });
}

/**
 * 거리 단계별 원색 구분
 *  0~500m: 초록 (가까움)
 *  500m~2km: 주황 (보통)
 *  2km+: 빨강 (멀음)
 */
export function getDistanceColorClass(meters: number): string {
  if (meters < 500) return 'text-emerald-600 font-bold';
  if (meters < 2000) return 'text-orange-500 font-semibold';
  return 'text-red-500 font-semibold';
}
