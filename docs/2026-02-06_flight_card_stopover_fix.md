# 가는편 항공 카드 경유지 표시 수정

**날짜**: 2026-02-06  
**작업자**: 혁 (Antigravity AI)

## 문제 상황

가는편에서 경유지가 있을 때 일차별 항공 카드가 잘못 표시되는 문제 발생:

**문제 예시:**
- 1일차: ICN → CXR (잘못됨)
- 2일차: ICN → CXR (잘못됨)

**원하는 결과:**
- 1일차: 인천국제공항(ICN) 출발 → 홍콩국제공항 도착
- 2일차: 홍콩국제공항 출발 → 캄라인국제공항(CXR) 도착

## 원인 분석

[useFlightForm.ts:724-729](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts#L724-L729)의 경유지 카드 생성 로직에서 문제 발견:

```typescript
// 기존 코드 (문제)
flightData.outbound.stopovers.forEach((stopover) => {
    // 도착 카드를 먼저 생성
    createFlightCard('arrival', stopover.arrivalAirport, ...);
    // 출발 카드를 나중에 생성
    createFlightCard('departure', stopover.departureAirport, ...);
});
```

**문제점:**
1. 각 경유지에 대해 도착 카드를 먼저, 출발 카드를 나중에 생성
2. 카드가 각 일차의 맨 위(index 0)에 삽입되므로 역순으로 쌓임
3. 경유지 배열을 순회하면서 잘못된 공항 정보로 카드 생성

## 구현 내용

### 수정된 로직

각 구간을 명확히 분리하여 카드를 생성:

```typescript
// 1-1. 첫 구간: 출발지 → 첫 번째 목적지(경유지 또는 최종 도착지)
const firstSegmentArrival = flightData.outbound.stopovers?.[0]
    ? flightData.outbound.stopovers[0].arrivalAirport
    : outboundArrivalAirport;
// ... 터미널, 날짜, 시간 정보도 동일하게 설정

createFlightCard('departure', outboundDepartureAirport, ...);
createFlightCard('arrival', firstSegmentArrival, ...);

// 1-2. 경유지 구간들
if (flightData.outbound.stopovers && flightData.outbound.stopovers.length > 0) {
    flightData.outbound.stopovers.forEach((stopover, index) => {
        // 다음 구간 정보 계산
        const isLastStopover = index === flightData.outbound.stopovers!.length - 1;
        const nextArrival = isLastStopover
            ? outboundArrivalAirport
            : flightData.outbound.stopovers![index + 1].arrivalAirport;
        // ... 터미널, 날짜, 시간 정보도 동일하게 설정
        
        // 경유지에서 출발
        createFlightCard('departure', stopover.departureAirport, ...);
        // 다음 목적지 도착
        createFlightCard('arrival', nextArrival, ...);
    });
}
```

### 주요 변경사항

1. **첫 구간 명확히 분리**: 출발지에서 첫 번째 목적지(경유지 또는 최종 도착지)까지의 구간을 별도로 처리
2. **다음 목적지 계산 로직**: 각 경유지에서 다음 목적지(다음 경유지 또는 최종 도착지)를 명확히 계산
3. **카드 삽입 순서 문제 해결**: `targetIndex: 0`으로 맨 위에 삽입되므로, **역순으로 카드 생성**하여 최종 순서 보장

### 추가 수정: 카드 삽입 순서

**문제**: `targetIndex: 0`으로 인해 모든 카드가 컬럼의 맨 위(index 0)에 삽입되면서 생성 순서와 반대로 표시됨

**해결**: 카드 생성 순서를 역순으로 변경
- 경유지 구간을 역순으로 순회 (`for (let i = length - 1; i >= 0; i--)`)
- 각 구간에서 도착 카드를 먼저, 출발 카드를 나중에 생성
- 첫 구간(ICN → 홍콩)을 마지막에 생성

**결과**:
```
생성 순서 (역순):
1. CXR 도착 생성 → index 0
2. 홍콩 출발 생성 → index 0 (CXR 도착이 밀려남)
3. 홍콩 도착 생성 → index 0
4. ICN 출발 생성 → index 0

최종 표시 순서:
1. ICN 출발
2. 홍콩 도착
3. 홍콩 출발
4. CXR 도착
```

## 영향 범위

### 수정된 파일

- [useFlightForm.ts](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FlightSection/FlightForm/useFlightForm.ts#L715-L763)

### 영향받는 기능

- **가는편(Outbound) 항공 카드 생성**: 경유지가 있을 때 일차별로 올바른 출발지/도착지 표시
- **오는편(Return)**: 변경 없음 (기존 로직 유지)

## 검증 방법

### 수동 테스트 (사용자 수행)

1. 항공편 입력 폼에서 가는편 경유지 추가
   - 출발: 인천국제공항
   - 경유: 홍콩국제공항
   - 도착: 캄라인국제공항
2. 저장 후 타임라인 확인
3. **예상 결과**:
   - 1일차: "인천국제공항 출발", "홍콩국제공항 도착" 카드
   - 2일차: "홍콩국제공항 출발", "캄라인국제공항 도착" 카드

## 추가 참고사항

- 경유지가 2개인 경우도 동일한 로직으로 처리됨
- 최대 경유지 개수: 2개 (시스템 제한)
- 오는편은 기존 로직과 동일하게 작동 (별도 수정 필요 시 동일 패턴 적용 가능)
