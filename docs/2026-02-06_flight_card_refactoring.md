# 항공 카드 생성 로직 재작성

**날짜**: 2026-02-06  
**작업**: 항공 카드 표시 형식 및 순서 수정

## 📋 작업 내용

### 1. 기존 로직 삭제
기존의 복잡한 항공 카드 생성 로직(역순 생성, targetIndex 관리 등)을 모두 삭제하고 처음부터 새로 작성했습니다.

### 2. 새로운 카드 형식 정의

사용자 요구사항에 따라 각 카드는 다음 정보를 표시합니다:

- **title**: 항공사명 (예: 대한항공)
- **time**: 시간 (예: 22:45)
- **route**: 출발공항코드 - 도착공항코드 (예: ICN - CXR)
- **description**: 공항명 터미널 출발/도착 (예: ✈️ 인천국제공항 T2 출발)

### 3. 카드 생성 순서

**가는편:**
1. 출발 카드
2. 도착 카드  
3. 경유지1 출발 카드 (옵션)
4. 경유지1 도착 카드 (옵션)
5. 경유지2 출발 카드 (옵션)
6. 경유지2 도착 카드 (옵션)

**오는편:**
1. 출발 카드
2. 도착 카드
3. 경유지1 출발 카드 (옵션)
4. 경유지1 도착 카드 (옵션)
5. 경유지2 출발 카드 (옵션)
6. 경유지2 도착 카드 (옵션)

### 4. 구현 세부사항

#### Helper 함수
```typescript
// 날짜로부터 Day 번호 계산
const getDayNumber = (dateStr: string): number => { ... }

// 공항 코드 추출 (괄호 안)
const extractCode = (airport: string) => { ... }

// 공항명 추출 (코드 제거)
const extractName = (airport: string) => { ... }
```

#### createFlightCard 함수
```typescript
const createFlightCard = (
    type: 'departure' | 'arrival',
    airport: string,
    terminal: string | undefined,
    date: string,
    time: string,
    airline: string,
    destinationAirport: string
) => { ... }
```

- `type`: 출발/도착 구분
- `destinationAirport`: route 표시를 위한 목적지 공항
- `targetIndex: undefined`: 시간 순서대로 자동 추가

## 🎯 주요 변경사항

1. **route 필드 추가**: FlightCard에서 공항 코드를 올바르게 표시
2. **단순화된 로직**: 출발 → 도착 순서대로 카드 생성 (역순 로직 제거)
3. **경유지 처리**: forEach로 순차적으로 처리
4. **일차 자동 계산**: getDayNumber로 날짜에 따라 자동 배치

## 📝 수정 파일

- [useFlightForm.ts](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts)

## ✅ 다음 단계

사용자의 브라우저 테스트 요청 시:
1. 항공편 폼에 테스트 데이터 입력 (경유지 포함)
2. "확정하기" 클릭
3. 타임라인에 카드가 올바른 순서와 정보로 표시되는지 확인
