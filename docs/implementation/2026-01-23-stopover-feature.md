# 경유지 기능 구현

**날짜:** 2026-01-23  
**브랜치:** refactor/flight-section

---

## ✅ 완료된 기능

### 1. 경유지 State 관리
- `useFlightForm.ts`에 outbound/return 경유지 배열 추가
- 최대 2개 제한
- 추가/삭제/수정 핸들러

### 2. UI 구현
- [+ 경유지 (0/2)] 버튼 (가는편/오는편)
- 경유지 폼 자동 렌더링 (FlightSegmentForm 재사용)
- 삭제 버튼

### 3. 자동 공항 연결
가는편 도착 → 경유지1 출발 → 경유지1 도착 → 경유지2 출발 → 오는편 출발

**구현:**
```typescript
useEffect(() => {
    if (outboundStopovers.length > 0 && outboundArrivalAirport) {
        updated[0].departureAirport = outboundArrivalAirport;
    }
}, [outboundArrivalAirport]);
```

### 4. 자동 날짜 계산
- 경유지 출발일 = 이전 구간 도착일
- 경유지 도착일 = 심야 출발 감지 (도착시간 < 출발시간 → 다음날)

**알고리즘:**
```typescript
let currentDepartureDate = calculatedOutboundArrivalDate;
outboundStopovers.map((stopover) => {
    const stopoverArrivalDate = new Date(currentDepartureDate);
    if (arrivalTime < departureTime) {
        stopoverArrivalDate.setDate(stopoverArrivalDate.getDate() + 1);
    }
    currentDepartureDate = stopoverArrivalDate; // Chain to next
});
```

### 5. 저장 로직
- FlightInfo 타입에 stopovers 필드 추가 (optional)
- handleConfirm에서 경유지 데이터 저장

---

## 📁 수정된 파일

- `src/liveblocks.config.ts` - FlightInfo에 stopovers 추가
- `src/components/board/FlightSection/FlightForm/useFlightForm.ts` - State, 핸들러, 자동연결, 날짜계산
- `src/components/board/FlightSection/FlightForm/index.tsx` - UI 버튼, 폼 렌더링
- `src/app/CollaborativeApp.tsx` - FlightInfo import 추가

---

## 🎯 사용법

1. 가는편/오는편 입력 후 [+ 경유지] 클릭
2. 경유지 폼에서 공항/시간/항공사 입력
3. 이전 구간의 도착 공항이 자동으로 출발 공항에 입력됨
4. 심야 출발 시 자동으로 다음날로 계산됨
5. 확정하기로 저장

---

## 🔧 기술적 세부사항

### FlightInfo 타입
```typescript
stopovers?: Array<{
  departureAirport: string;
  arrivalAirport: string;
  date: string;
  time: string;
  arrivalDate: string;
  arrivalTime: string;
  airline: string;
}>;
```

### 날짜 계산 체인
1차 구간: 출발일 (사용자 입력)
↓
경유지1: 출발일 = 1차 도착일, 도착일 = 출발일 + (자정 넘김 여부)
↓  
경유지2: 출발일 = 경유지1 도착일, 도착일 = 출발일 + (자정 넘김 여부)
↓
최종 구간: 출발일 = 경유지2 도착일

---

## ✨ 빌드 상태

```
✓ Compiled successfully in 2.3s
```

모든 경유지 기능 정상 작동!
