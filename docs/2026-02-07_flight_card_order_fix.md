# 항공 카드 순서 수정

**날짜**: 2026-02-07  
**작업**: 타임라인 항공 카드 순서 오류 수정

## 📋 문제 상황

1일차 타임라인에서 항공 카드 순서가 잘못 표시되는 문제 발생:
- **기대**: 출발 카드 → 도착 카드 (시간순)
- **실제**: 도착 카드 → 출발 카드 (역순)

## 🔍 원인 분석

### useFlightForm.ts의 카드 생성 로직

```typescript
// 기존 코드 (문제)
const createFlightCard = (..., isOutbound: boolean) => {
    // ...
    const targetIndex = isOutbound ? 0 : undefined; // 🚨 문제 지점
    
    createCardToColumn({
        // ...
        targetIndex
    });
};
```

**문제점:**
1. 가는편 카드는 `targetIndex: 0`으로 **컬럼 맨 위에 삽입**
2. 카드 생성 순서: 출발 → 도착 → 경유지 출발 → 경유지 도착
3. 하지만 맨 위(index 0)에 삽입되므로 **생성 순서와 반대로 표시**됨

**결과:**
```
생성 순서:
1. 출발 생성 → [0: 출발]
2. 도착 생성 → [0: 도착, 1: 출발]  ← 순서 뒤바뀜!
```

## ✅ 해결 방법

### 수정 내용

#### 1. targetIndex 통일
```typescript
// 수정 후
const createFlightCard = (...) => {
    // ...
    // 🎯 모든 항공 카드는 시간순으로 자동 배치 (targetIndex: undefined)
    const targetIndex = undefined;
    
    createCardToColumn({
        // ...
        targetIndex
    });
};
```

#### 2. isOutbound 파라미터 제거
- 더 이상 필요하지 않으므로 함수 시그니처에서 제거
- 모든 호출부 수정 (총 9곳)

## 🎯 주요 변경사항

### 수정 파일
- [useFlightForm.ts](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts)

### 변경 사항
1. **targetIndex 로직 수정** (라인 697-698)
   - 가는편/오는편 구분 없이 모두 `undefined`로 통일
   - 시간순 자동 배치 활성화

2. **isOutbound 파라미터 제거** (라인 674-682)
   - createFlightCard 함수에서 제거
   - 모든 호출부 수정 (라인 717, 723, 725, 730, 737, 743, 745, 750)

## 📝 예상 결과

수정 후 항공 카드는 **시간 순서대로** 자동 배치됩니다:

**1일차 타임라인:**
1. ✈️ 인천국제공항 출발 (10:00)
2. 🛬 인천국제공항 도착 (12:00)

**경유지가 있는 경우:**
1. ✈️ 인천국제공항 출발 (10:00)
2. 🛬 홍콩국제공항 도착 (14:00)
3. ✈️ 홍콩국제공항 출발 (16:00)
4. 🛬 캄라인국제공항 도착 (20:00)

## ✅ 다음 단계

1. **브라우저 테스트**: 사용자가 직접 확인
   - 기존 항공 정보 삭제
   - 새로운 항공 정보 입력 및 확정
   - 타임라인에서 카드 순서 확인
