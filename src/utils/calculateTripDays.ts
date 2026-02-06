/**
 * 항공편 정보를 기반으로 여행 일수를 계산합니다.
 * 심야 출발/도착을 고려하여 정확한 일수를 산출합니다.
 * 
 * @param outboundDate - 가는편 출발 날짜
 * @param returnDate - 오는편 출발 날짜
 * @param returnTime - 오는편 출발 시간 (HH:mm 형식)
 * @returns 전체 여행 일수
 */
export function calculateTripDays(
    outboundDate: Date,
    returnDate: Date,
    returnTime: string
): number {
    // 출발일 (가는편 출발 날짜)
    const tripStartDate = new Date(outboundDate);
    tripStartDate.setHours(0, 0, 0, 0);

    // 귀국일 (오는편 출발 날짜에 시간 고려)
    const [returnHourStr] = returnTime.split(':');
    const returnHour = parseInt(returnHourStr);

    // 귀국 도착일 계산 (심야 귀국 고려)
    // 귀국편이 23:00 이후 출발하면 다음날 도착으로 간주
    const tripEndDate = new Date(returnDate);
    if (returnHour >= 23) {
        // 심야 출발 → 다음날 도착
        tripEndDate.setDate(tripEndDate.getDate() + 1);
    }
    tripEndDate.setHours(0, 0, 0, 0);

    // 전체 일수 계산 (출발일부터 도착일까지)
    // 날짜 차이를 일 단위로 계산하고 +1 (출발일 포함)
    const diffInMs = tripEndDate.getTime() - tripStartDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const dayCount = diffInDays + 1;

    return dayCount;
}

/**
 * FlightInfo 타입에서 직접 일수를 계산합니다.
 * 오는편 도착 날짜까지 포함하여 정확한 일수를 산출합니다.
 */
export function calculateTripDaysFromFlightInfo(flightInfo: {
    outbound: { date: string };
    return: { arrivalDate: string }; // 도착 날짜 사용
}): number {
    const outboundDate = new Date(flightInfo.outbound.date);
    const returnArrivalDate = new Date(flightInfo.return.arrivalDate);

    // 출발일
    const tripStartDate = new Date(outboundDate);
    tripStartDate.setHours(0, 0, 0, 0);

    // 귀국 도착일
    const tripEndDate = new Date(returnArrivalDate);
    tripEndDate.setHours(0, 0, 0, 0);

    // 전체 일수 계산 (출발일부터 도착일까지)
    const diffInMs = tripEndDate.getTime() - tripStartDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const dayCount = diffInDays + 1;

    return dayCount;
}
