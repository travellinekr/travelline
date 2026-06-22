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

// 여행이 시작됐는지 판정 — 출발일이 오늘 이하이면 true.
// 일정 시작 후에는 최종여행지 변경이 데이터 불일치를 일으키므로 잠금에 사용.
// flightInfo 미등록이면 false (제한 없음).
export function isTripStarted(flightInfo: any): boolean {
    if (!flightInfo?.outbound?.date) return false;
    const depDate = new Date(flightInfo.outbound.date);
    depDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return depDate.getTime() <= today.getTime();
}

// 여행이 종료됐는지 판정 — 귀국 도착일(없으면 출발일)이 오늘보다 과거이면 true.
// 종료 후에는 항공편 변경이 의미 없으므로 잠금에 사용.
// flightInfo 미등록이면 false (제한 없음).
export function isTripEnded(flightInfo: any): boolean {
    const endStr = flightInfo?.return?.arrivalDate || flightInfo?.return?.date;
    if (!endStr) return false;
    const endDate = new Date(endStr);
    endDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate.getTime() < today.getTime();
}
