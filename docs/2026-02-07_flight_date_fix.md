# 항공편 날짜 저장 오류 수정

**날짜**: 2026-02-07  
**작업**: 항공편 날짜 저장 시 UTC 변환으로 인한 날짜 오류 수정

## 문제

- **증상**: 오는편 도착일을 4월 5일로 선택하면 4월 4일로 저장됨
- **원인**: `Date.toISOString()`이 UTC로 변환하면서 한국 시간대(UTC+9)에서 날짜가 하루 전으로 변경됨

## 해결 방법

### 1. `handleDateConfirm` 수정

[useFlightForm.ts:293-306](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts#L293-L306)

```typescript
const handleDateConfirm = (start: Date, end: Date) => {
    // Date를 로컬 날짜 문자열로 변환 (UTC 변환 없이)
    const formatLocalDateString = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    setDepartureDate(start);
    setArrivalDate(end);
    setOutboundDepartureDate(formatLocalDateString(start));
    setReturnDepartureDate(formatLocalDateString(end));
};
```

### 2. FlightInfo 저장 시 로컬 날짜 포맷 사용

[useFlightForm.ts:600-649](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts#L600-L649)

```typescript
// 날짜를 YYYY-MM-DD 형식으로 변환 (UTC 변환 없이 로컬 날짜 유지)
const formatLocalDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const flightData: FlightInfo = {
    outbound: {
        date: formatLocalDate(parsedDepartureDate),
        arrivalDate: formatLocalDate(calculatedOutboundArrivalDate),
        // ...
    },
    return: {
        date: formatLocalDate(parsedReturnDepartureDate),
        arrivalDate: formatLocalDate(calculatedReturnArrivalDate),
        // ...
    }
};
```

## 적용 범위

✅ **가는편 출발일**: `formatLocalDate` 적용  
✅ **가는편 도착일**: `formatLocalDate` 적용  
✅ **오는편 출발일**: `formatLocalDate` 적용  
✅ **오는편 도착일**: `formatLocalDate` 적용  
✅ **경유지 날짜**: 사용자 직접 입력 (별도 처리 불필요)

## 결과

- 4월 5일 선택 → 4월 5일로 정확히 저장
- 모든 날짜가 로컬 시간대 기준으로 저장됨
