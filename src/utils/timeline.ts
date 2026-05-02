// 타임라인 day 컬럼이 출발일 기준 과거인지 판정.
// day0(준비 일차)는 패턴에서 제외 — 출발 전 준비는 날짜 제한 없음.
// flightInfo 없으면 (미등록) 항상 false → 제한 없음.
export function isPastDayColumn(columnId: string, flightInfo: any): boolean {
    const match = /^day([1-9]\d*)$/.exec(columnId);
    if (!match) return false;
    const dayNum = parseInt(match[1]);
    if (!flightInfo?.outbound?.date) return false;
    const dayDate = new Date(flightInfo.outbound.date);
    dayDate.setDate(dayDate.getDate() + (dayNum - 1));
    dayDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dayDate < today;
}
