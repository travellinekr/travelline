# 좌측바 일차 불일치 수정

**작업일**: 2026-02-07  
**카테고리**: 버그 수정

## 문제점

항공편 확정 시 좌측바에 표시되는 일차가 타임라인보다 하루 적게 나타남

**예시:**
- 3박 4일 여행
- 타임라인: Day 0, 1, 2, 3, 4 (5개) ✅
- 좌측바: Day 0, 1, 2, 3 (4개) ❌

## 원인 분석

### 좌측바 코드 문제
[Sidebar.tsx:69](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Sidebar.tsx#L69)

```typescript
for (let i = 1; i < dayCount; i++) {  // ❌ 미만 조건
```

### 타임라인 코드 (정상)
[useFlightForm.ts:683](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts#L683)

```typescript
for (let i = 1; i <= dayCount; i++) {  // ✅ 이하 조건
```

**문제:** 반복문 조건이 달라서 좌측바에서 마지막 날이 누락됨

## 수정 내용

### [Sidebar.tsx:69](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Sidebar.tsx#L69)

```diff
  if (flightInfo) {
      const dayCount = calculateTripDaysFromFlightInfo(flightInfo);
-     for (let i = 1; i < dayCount; i++) {
+     for (let i = 1; i <= dayCount; i++) {
          baseDays.push({ id: `day${i}`, label: `${i}`, sublabel: '일차' });
      }
  }
```

## 결과

- ✅ 좌측바와 타임라인의 일차 개수 일치
- ✅ 3박 4일 여행 시 Day 0, 1, 2, 3, 4 모두 표시
- ✅ 계산 로직 통일로 향후 유지보수성 향상

## 테스트 방법

1. 브라우저에서 항공편 등록
2. 좌측바와 타임라인의 일차 개수 비교
3. 마지막 날이 양쪽에 모두 표시되는지 확인
