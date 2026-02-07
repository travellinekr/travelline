# 항공 카드 자동 생성 로직 제거

**날짜**: 2026-02-07  
**작업**: 확정하기 시 타임라인에 항공 카드 자동 생성하지 않도록 수정

## 📋 요구사항

사용자가 항공편 정보를 확정할 때 타임라인에 항공 카드가 자동으로 생성되지 않도록 해달라는 요청

## ✅ 수정 내용

### useFlightForm.ts에서 제거된 항목

1. **Import 제거**: `useCardMutations` import
2. **Mutation 제거**: `deleteAllFlightCards` 전체 로직
3. **Helper 함수 제거**: 
   - `getDayNumber` - 날짜로부터 Day 번호 계산
   - `createFlightCard` - 항공 카드 생성
4. **카드 생성 로직 제거** (약 100줄):
   - 가는편 카드 생성 코드
   - 오는편 카드 생성 코드
   - 경유지 카드 생성 코드

## 📝 현재 동작

**확정하기 클릭 시:**
- FlightInfo를 storage에 저장
- Day 컬럼 생성 (일차별 타임라인)
- ~~타임라인에 항공 카드 생성~~ (제거됨)

**항공편 정보는:**
- FlightSection의 FlightCardView에서만 표시
- 타임라인에 개별 카드로 표시되지 않음

## 📝 수정 파일

- [useFlightForm.ts](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts)
  - 총 약 140줄 제거 (import + mutations + card generation logic)
