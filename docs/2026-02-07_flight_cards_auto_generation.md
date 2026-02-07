# 항공 카드 타임라인 자동 생성 기능 구현

**날짜**: 2026-02-07  
**작업자**: 혁 (AI)

---

## 📋 작업 개요

항공편 확정 시 타임라인에 항공 카드를 자동으로 생성하는 기능을 구현했습니다.

### 핵심 기능
- ✈️ **출발/도착 카드 분리**: 각 비행 구간마다 출발 카드 + 도착 카드 생성
- 📅 **날짜별 자동 배치**: 출발일/도착일 기준으로 해당 Day 컬럼에 배치
- 📍 **위치 우선순위**: 가는편 계열은 맨 위, 오는편 계열은 맨 아래
- 🎯 **최대 12개 카드**: 가는편, 경유지1~2, 오는편, 경유지1~2 총 6개 구간

---

## 🔨 수정된 파일

### 1. `src/liveblocks.config.ts`
**Card 타입에 항공편 필드 추가**

```diff
export type Card = {
  id: string;
  text: string;
  category: 'destination' | 'flight' | 'accommodation' | 'restaurant' | 'preparation';
  votes?: string[];
  month?: number;
  city?: string;
  imageUrl?: string;
  timezone?: number;
  airports?: Array<{ name: string; code: string }>;
+ time?: string;      // 항공편 시간 (예: "21:50")
+ route?: string;     // 항공편 경로 (예: "🛫 ICN")
};
```

---

### 2. `src/hooks/useCardMutations.ts`
**createCardToColumn mutation 확장**

#### 파라미터 추가
```diff
- const createCardToColumn = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, targetColumnId, targetIndex = 0 }) => {
+ const createCardToColumn = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, time, route, targetColumnId, targetIndex = 0 }) => {
```

#### LiveObject에 필드 추가
```diff
const newCard = new LiveObject({
  id: newCardId,
  text: title,
  category,
  type: type as "travel" | "work",
  description,
  date,
  imageUrl,
  airports,
  month,
  city,
  timezone,
+ time,
+ route
});
```

---

### 3. `src/components/board/FlightSection/FlightForm/useFlightForm.ts`
**항공 카드 자동 생성 로직 구현**

#### Import 추가
```typescript
import { useCardMutations } from "@/hooks/useCardMutations";
import { useStorage } from "@liveblocks/react/suspense";
```

#### 헬퍼 함수 추가
```typescript
// 공항 코드 추출: "인천국제공항 1 (ICN)" → "ICN"
function extractAirportCode(airportString: string): string {
    const match = airportString.match(/\(([A-Z]{3})\)/);
    return match ? match[1] : airportString.split('(')[0].trim();
}

// 터미널 정보 포맷팅
function formatTerminal(terminal: string | undefined, prefix: string): string {
    if (!terminal) return '';
    return `${terminal} ${prefix}`;
}
```

#### handleConfirm에 카드 생성 로직 추가

```typescript
// 날짜로 Day 컬럼 ID 찾기
const findDayColumnByDate = (dateStr: string): string | null => {
    const targetDate = new Date(dateStr);
    const startDate = new Date(flightData.outbound.date);
    
    const diffTime = targetDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const dayNum = diffDays + 1; // Day 1부터 시작
    return dayNum >= 0 && dayNum <= dayCount ? `day${dayNum}` : null;
};

// 항공 카드 생성 함수
const createFlightCard = (params: {
    airline: string;
    time: string;
    airport: string;
    terminal: string | undefined;
    isDeparture: boolean;
    date: string;
    isOutbound: boolean;
}) => {
    const { airline, time, airport, terminal, isDeparture, date, isOutbound } = params;
    
    const airportCode = extractAirportCode(airport);
    const terminalStr = formatTerminal(terminal, isDeparture ? '출발' : '도착');
    
    const dayColumnId = findDayColumnByDate(date);
    if (!dayColumnId) return;

    // 가는편: 맨 위 (0), 오는편: 맨 아래 (undefined)
    const targetIndex = isOutbound ? 0 : undefined;

    createCardToColumn({
        title: airline,
        time: time,
        route: `${isDeparture ? '🛫' : '🛬'} ${airportCode}`,
        description: terminalStr,
        category: 'flight',
        type: 'travel',
        date: date,
        targetColumnId: dayColumnId,
        targetIndex: targetIndex
    });
};
```

#### 카드 생성 순서
1. **가는편 출발 카드**
2. **가는편 도착 카드**
3. **가는편 경유지 출발/도착 카드** (0~2개)
4. **오는편 출발 카드**
5. **오는편 도착 카드**
6. **오는편 경유지 출발/도착 카드** (0~2개)

---

## 📊 배치 로직

### 예시 시나리오
```
여행: 3박 4일 (3/29 ~ 4/1)

항공편:
- 가는편: ICN 21:50 → HKG 23:50 (3/29)
- 경유1: HKG 23:50 → CXR 02:00 (3/29 → 3/30)
- 오는편: CXR 02:00 → ICN 08:05 (4/1)
```

### 결과 배치
```
📍 Day 1 (3/29)
  ① 🛫 대한항공 21:50 | ICN | T1 출발     ← 가는편 (맨 위)
  ② 🛬 대한항공 23:50 | HKG              ← 가는편 (맨 위)
  ③ 🛫 중국동방 23:50 | HKG              ← 경유1 (맨 위)
  ④ 🏨 호텔 체크인                       ← 기존 카드
  ⑤ 🍜 저녁 식사                         ← 기존 카드

📍 Day 2 (3/30)
  ① 🛬 중국동방 02:00 | CXR              ← 경유1 (맨 위)
  ② 🗺️ 관광지 방문                       ← 기존 카드

📍 Day 4 (4/1)
  ① 🍳 아침 식사                         ← 기존 카드
  ② 🚕 공항 이동                         ← 기존 카드
  ③ 🛫 대한항공 02:00 | CXR              ← 오는편 (맨 아래)
  ④ 🛬 대한항공 08:05 | ICN | T1 도착    ← 오는편 (맨 아래)
```

---

## ✅ 검증 상태

- ✅ 빌드 성공 (`✓ Compiled in 695ms`)
- ✅ 타입 정의 완료
- ✅ 서버 정상 실행 중
- ⏳ 브라우저 테스트 대기

---

## 🎯 다음 단계

사용자가 브라우저에서 테스트를 진행합니다:
1. 항공편 정보 입력
2. "확정하기" 버튼 클릭
3. 타임라인에 항공 카드 자동 생성 확인
