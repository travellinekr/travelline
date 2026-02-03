# Trip Days Calculation Utility

**날짜:** 2026-01-23  
**목적:** 일차 계산 로직 중앙화 (DRY 원칙)

---

## 📋 배경

항공편 확정 후 일차를 생성하는 로직이 두 곳에 중복되어 있었습니다:
1. `FlightSection.tsx` - Day 컬럼 생성 시
2. `Sidebar.tsx` - Day 목록 표시 시

로직 불일치로 인한 버그를 방지하기 위해 유틸 함수로 분리했습니다.

---

## 🔧 구현

### 유틸 함수: `calculateTripDays.ts`

```typescript
// utils/calculateTripDays.ts

export function calculateTripDays(
    outboundDate: Date,
    returnDate: Date,
    returnTime: string
): number {
    const tripStartDate = new Date(outboundDate);
    tripStartDate.setHours(0, 0, 0, 0);
    
    const [returnHourStr] = returnTime.split(':');
    const returnHour = parseInt(returnHourStr);
    
    // 심야 귀국 고려: 23시 이후 출발 → 다음날 도착
    const tripEndDate = new Date(returnDate);
    if (returnHour >= 23) {
        tripEndDate.setDate(tripEndDate.getDate() + 1);
    }
    tripEndDate.setHours(0, 0, 0, 0);
    
    const dayCount = Math.ceil((tripEndDate.getTime() - tripStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    return dayCount;
}

export function calculateTripDaysFromFlightInfo(flightInfo: {
    outbound: { date: string };
    return: { date: string; time: string };
}): number {
    const outboundDate = new Date(flightInfo.outbound.date);
    const returnDate = new Date(flightInfo.return.date);
    const returnTime = flightInfo.return.time;
    
    return calculateTripDays(outboundDate, returnDate, returnTime);
}
```

### 사용 예시

**FlightSection.tsx:**
```typescript
import { calculateTripDays } from "@/utils/calculateTripDays";

const dayCount = calculateTripDays(
    departureDate, 
    arrivalDate, 
    `${returnHour}:${returnMinute}`
);
```

**Sidebar.tsx:**
```typescript
import { calculateTripDaysFromFlightInfo } from "@/utils/calculateTripDays";

const dayCount = calculateTripDaysFromFlightInfo(flightInfo);
```

---

## 🎯 심야 출발 로직

### 규칙
- **귀국편 출발 시간이 23:00 이상** → 다음날 도착으로 간주
- 예: `2.5. 23:10` 출발 → `2.6.` 도착

### 예시 계산

#### 3박 5일 (오사카)
- 가는편: `1.30.` 06:35 출발
- 오는편: `2.5.` 23:10 출발 (심야)
- **계산:**
  - 출발일: 1.30.
  - 귀국 도착일: 2.6. (심야 출발 +1일)
  - 일수: (2.6. - 1.30.) + 1 = **5일**
  - Day 생성: Day 0, Day 1, Day 2, Day 3, Day 4

#### 일반 케이스
- 가는편: `3.1.` 08:00 출발
- 오는편: `3.3.` 18:00 출발
- **계산:**
  - 출발일: 3.1.
  - 귀국 도착일: 3.3. (일반 출발)
  - 일수: (3.3. - 3.1.) + 1 = **3일**
  - Day 생성: Day 0, Day 1, Day 2

---

## ✅ 개선사항

### Before (중복 코드)
- FlightSection: 25줄 인라인 계산
- Sidebar: 다른 로직으로 계산 (버그 가능성)

### After (통합)
- 유틸 함수: 1개 소스
- 사용처: 간단한 함수 호출
- 심야 로직: 양쪽 모두 일관되게 적용

---

## 📝 수정된 파일

1. **[NEW]** `src/utils/calculateTripDays.ts` - 유틸 함수
2. `src/components/board/FlightSection.tsx` - import 및 호출
3. `src/components/board/Sidebar.tsx` - import 및 호출

---

## 🔗 관련 문서

- [Overnight Flight Logic](./2026-01-23-overnight-flight-logic.md)
- [Flight Card View](./2026-01-23-flight-card-view.md)
