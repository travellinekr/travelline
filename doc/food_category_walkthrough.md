# 교통카드 DragOverlay 버그 수정

## 🐛 문제 상황

inbox에서 교통카드를 드래그할 때와 타임라인에서 드래그할 때 **카드 모양이 달랐습니다**.

### 수정 전 동작
- **Inbox → 드래그**: destination 카드 스타일 (이미지가 있는 가로 배치)
- **타임라인 → 드래그**: TransportCard 스타일 (BaseCard 기반)

---

## 🔍 원인 분석

### 문제의 코드 (수정 전)

```tsx
// CollaborativeApp.tsx Line 870
String(activeDragItem.id).startsWith('picker-') ? (
    // Destination Picker 도시 카드: 타임라인 compact 스타일
    <div className="bg-white hover:bg-slate-50 ...">
```

**문제점**: 
- `picker-transport-osaka-0` 같은 교통카드 ID도 `picker-`로 시작하기 때문에 이 조건에 걸림
- destination 카드 스타일로 잘못 렌더링됨

---

## ✅ 수정 내용

### 1. Import 추가

```diff
// CollaborativeApp.tsx Line 8
- import { Link as LinkIcon, Mouse, ChevronUp, ChevronDown, MapPin, Hotel } from "lucide-react";
+ import { Link as LinkIcon, Mouse, ChevronUp, ChevronDown, MapPin, Hotel, Bus, Train, Car } from "lucide-react";
```

```diff
// CollaborativeApp.tsx Line 18-19
  import { BaseCard } from "../components/board/cards/BaseCard";
+ import { TransportCard } from "../components/board/cards/TransportCard";
```

### 2. DragOverlay에 교통카드 특별 처리 추가

```diff
// CollaborativeApp.tsx Line 834-911
  <DragOverlay dropAnimation={null}>
      {activeDragItem ? (
          String(activeDragItem.id).startsWith('picker-hotel-') ? (
              // Hotel Picker 카드
              ...
          )
+         : String(activeDragItem.id).startsWith('picker-transport-') ? (
+             // Transport Picker 카드: TransportCard 스타일
+             <div className="w-full max-w-md">
+                 <TransportCard card={activeDragItem} className="shadow-xl" />
+             </div>
+         )
          : String(activeDragItem.id).startsWith('picker-') ? (
              // Destination Picker 도시 카드
              ...
          )
```

---

## 🎯 수정 후 동작

### 조건 체크 순서 (우선순위)
1. ✅ `picker-hotel-` → HotelCard (BaseCard 스타일)
2. ✅ **`picker-transport-` → TransportCard** (새로 추가!)
3. ✅ `picker-` → Destination 카드 (이미지 있는 가로 배치)
4. ✅ 기타 → `renderCardInternal()` (일반 카드)

### 렌더링 결과
- **Inbox → 드래그**: TransportCard (BaseCard 기반) ✅
- **타임라인 → 드래그**: TransportCard (BaseCard 기반) ✅
- **일관성**: 양쪽 모두 동일한 스타일!

---

## 📦 변경된 파일

- [CollaborativeApp.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/app/CollaborativeApp.tsx#L8) - Import 추가
- [CollaborativeApp.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/app/CollaborativeApp.tsx#L868-L872) - DragOverlay 로직 수정

---

## 🧪 검증 방법

1. 브라우저에서 inbox의 "교통" 탭 열기
2. 교통카드를 드래그 시작
3. **확인사항**:
   - 드래그 중 마우스를 따라다니는 카드가 TransportCard 스타일인지 (왼쪽에 색상 아이콘, 교통 타입 레이블)
   - 이미지가 없고 BaseCard 기반 레이아웃인지
4. 타임라인의 교통카드를 드래그
5. **확인사항**:
   - inbox와 동일한 스타일로 표시되는지

---

## 📝 기술 노트

### TransportCard 컴포넌트 구조
```tsx
<BaseCard 
    colorClass={교통타입별 색상}  // bg-blue-400, bg-green-400 등
    icon={교통타입별 아이콘}        // Train, Bus, Car
    category={교통타입 레이블}      // "지하철", "버스", "라이드셰어" 등
>
    <교통수단 이름>           // "Tokyo Metro", "Grab" 등  
    <설명 + 앱이름 + 가격대>  // description, appName, priceRange
</BaseCard>
```

### Picker ID 패턴
- 호텔: `picker-hotel-{city}-{index}`
- 교통: `picker-transport-{city}-{index}`
- 여행지: `picker-destination-{index}`

이 패턴을 기반으로 DragOverlay에서 올바른 컴포넌트를 선택합니다.

---

# 숙소/교통 카테고리에 직접 추가 버튼 추가

## 📋 작업 내용

숙소(AccommodationPicker)와 교통(TransportationPicker) 카테고리에도 "+ 직접 추가하기" 버튼을 추가했습니다.

---

## ✅ 수정된 파일

### 1. AccommodationPicker.tsx

#### Import 추가
```diff
- import { Hotel } from 'lucide-react';
+ import { Hotel, Plus } from 'lucide-react';
```

#### 버튼 추가
```tsx
{/* 직접 추가하기 버튼 */}
<button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50 transition-all gap-2 mt-2">
    <Plus className="w-5 h-5" />
    <span className="font-medium text-sm">직접 추가하기</span>
</button>
```

**위치**: 숙소 목록 맨 아래 (Line 145-149)  
**테마**: Rose (분홍색) - 숙소 카테고리 색상과 매칭

---

### 2. TransportationPicker.tsx

#### Import 추가
```diff
- import { Bus, Train, Car } from 'lucide-react';
+ import { Bus, Train, Car, Plus } from 'lucide-react';
```

#### 버튼 추가
```tsx
{/* 직접 추가하기 버튼 */}
<button className="h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all gap-2 mt-2">
    <Plus className="w-5 h-5" />
    <span className="font-medium text-sm">직접 추가하기</span>
</button>
```

**위치**: 교통 수단 목록 맨 아래 (Line 220-224)  
**테마**: Blue (파란색) - 교통 카테고리 색상과 매칭

---

## 🎨 디자인 특징

### 공통 스타일
- **높이**: 64px (h-16)
- **테두리**: 점선 (border-dashed)
- **기본 색상**: 회색 (border-gray-200, text-gray-400)
- **레이아웃**: Flex center 정렬
- **아이콘**: Plus 아이콘 (20px)

### 카테고리별 Hover 효과

| 카테고리 | 테두리 색상 | 텍스트 색상 | 배경 색상 |
|----------|------------|------------|-----------|
| **숙소** | `border-rose-400` | `text-rose-500` | `bg-rose-50` |
| **교통** | `border-blue-400` | `text-blue-500` | `bg-blue-50` |
| **쇼핑** | `border-emerald-400` | `text-emerald-500` | `bg-emerald-50` |

---

## 📝 현재 상태

### 버튼 표시 카테고리
- ✅ **여행준비** (preparation)
- ✅ **맛집** (food)
- ✅ **쇼핑** (shopping)
- ✅ **숙소** (hotel) - 새로 추가!
- ✅ **교통** (transport) - 새로 추가!

### 버튼 미표시 카테고리
- ❌ **여행지** (destination) - DestinationPicker 사용

### 기능 상태
- ⚠️ **onClick 핸들러 미구현** - 현재는 디자인만 존재
- 클릭 시 카드 생성 모달/폼을 열어야 함 (향후 구현 필요)

---

## 🔧 변경된 파일

- [AccommodationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/AccommodationPicker.tsx#L5) - Plus import
- [AccommodationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/AccommodationPicker.tsx#L145-L149) - 버튼 추가
- [TransportationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TransportationPicker.tsx#L5) - Plus import
- [TransportationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TransportationPicker.tsx#L220-L224) - 버튼 추가

---

# 교통 카테고리 색상띠 통일

## 🎨 문제 상황

다른 카테고리들은 고유의 색상띠를 가지고 있었지만, **교통 카테고리만 교통 타입별로 10가지 다른 색상**을 사용하고 있었습니다.

### 기존 카테고리별 색상
| 카테고리 | 색상 |
|----------|------|
| 항공 (Flight) | `bg-sky-400` (하늘색) |
| 숙소 (Hotel) | `bg-rose-400` (분홍색) |
| 맛집 (Food) | `bg-orange-400` (주황색) |
| 쇼핑 (Shopping) | `bg-purple-400` (보라색) |
| 여행준비 (Preparation) | `bg-indigo-400` (인디고) |

### 기존 교통 타입별 색상 (문제)
- 지하철: `bg-blue-400`
- 버스: `bg-green-400`
- 트램: `bg-cyan-400`
- 택시: `bg-yellow-400`
- 라이드셰어: `bg-orange-400`
- 렌터카: `bg-purple-400`
- 셔틀: `bg-teal-400`
- 공항픽업: `bg-indigo-400`
- 전통교통: `bg-amber-400`
- 킥보드: `bg-lime-400`

---

## ✅ 해결 방법

교통 카테고리를 **단일 `bg-teal-500` 색상**으로 통일했습니다.

---

## 🔧 수정된 파일

### 1. TransportCard.tsx

#### 수정 전
```typescript
const TRANSPORT_COLORS: Record<TransportationType, string> = {
    subway: 'bg-blue-400',
    bus: 'bg-green-400',
    // ... 10가지 타입별 색상
};
const colorClass = TRANSPORT_COLORS[transportType] || 'bg-gray-400';
```

#### 수정 후
```typescript
// 교통 카테고리 고유 색상 (통일)
const TRANSPORT_COLOR = 'bg-teal-500';
const colorClass = TRANSPORT_COLOR;
```

**변경사항**:
- `TRANSPORT_COLORS` 매핑 삭제
- 단일 상수 `TRANSPORT_COLOR` 사용

---

### 2. TransportationPicker.tsx

#### 수정 전
```typescript
const TRANSPORT_COLORS: Record<TransportationType, string> = { /* ... */ };
const TRANSPORT_LABEL_COLORS: Record<TransportationType, string> = { /* ... */ };

const colorClass = TRANSPORT_COLORS[transportType] || 'bg-gray-400';
const labelColorClass = TRANSPORT_LABEL_COLORS[transportType] || 'text-gray-600 bg-gray-50 border-gray-100';
```

#### 수정 후
```typescript
// 교통 카테고리 고유 색상 (통일)
const TRANSPORT_COLOR = 'bg-teal-500';
const TRANSPORT_LABEL_COLOR = 'text-teal-600 bg-teal-50 border-teal-100';

const colorClass = TRANSPORT_COLOR;
const labelColorClass = TRANSPORT_LABEL_COLOR;
```

**변경사항**:
- 타입별 색상 매핑 삭제
- 단일 상수 사용
- Placeholder 색상: `border-teal-300 bg-teal-50/50`
- 직접 추가 버튼 hover: `border-teal-400 text-teal-500 bg-teal-50`

---

### 3. CollaborativeApp.tsx (DragOverlay)

이미 `TransportCard` 컴포넌트를 사용하고 있어 **자동으로 teal 색상 적용**됩니다.

```tsx
) : String(activeDragItem.id).startsWith('picker-transport-') ? (
    <div className="w-full max-w-md">
        <TransportCard card={activeDragItem} className="shadow-xl" />
    </div>
```

---

## 🎯 적용 위치

교통 카드가 표시되는 모든 위치에 통일된 teal-500 색상이 적용됩니다:

1. ✅ **Inbox** - TransportationPicker의 카드 목록
2. ✅ **타임라인** - DraggableCard로 렌더링된 교통 카드
3. ✅ **드래그 중** - DragOverlay의 TransportCard

---

## 📊 결과

### 색상 일관성
이제 모든 카테고리가 고유의 **단일 색상띠**를 가집니다:

| 카테고리 | 색상 | 비고 |
|----------|------|------|
| 항공 | `bg-sky-400` | 하늘색 |
| 숙소 | `bg-rose-400` | 분홍색 |
| 맛집 | `bg-orange-400` | 주황색 |
| 쇼핑 | `bg-purple-400` | 보라색 |
| **교통** | **`bg-teal-500`** | **청록색 (새로 통일)** |
| 여행준비 | `bg-indigo-400` | 인디고 |

---

## 🔗 변경된 파일

- [TransportCard.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/cards/TransportCard.tsx#L19-L20) - 단일 색상 상수로 변경
- [TransportationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TransportationPicker.tsx#L23-L25) - 색상 매핑 제거 및 통일
- [TransportationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TransportationPicker.tsx#L88) - Placeholder 색상 변경
- [TransportationPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TransportationPicker.tsx#L198) - 버튼 hover 색상 변경


---

# Food 카테고리 구현 완료

Food 카테고리를 Transport 카테고리와 동일한 방식으로 구현하고, 19개 도시 전체의 맛집 데이터를 완성했습니다.

## 🔧 구현 내용

### 1. restaurants.ts - 맛집 데이터

#### [restaurants.ts](file:///Users/hwang-gyuhyeog/mindflows/src/data/restaurants.ts)

**타입 정의**:
```typescript
export type RestaurantType =
    | "korean"      // 한식
    | "japanese"    // 일식
    | "chinese"     // 중식
    | "western"     // 양식
    | "italian"     // 이탈리안
    | "french"      // 프렌치
    | "cafe"        // 카페/디저트
    | "street-food" // 길거리 음식
    | "fusion"      // 퓨전
    | "local";      // 현지 음식

export interface RestaurantData {
    name: string;              // 식당 이름
    type: RestaurantType;      // 음식 타입
    city: string;              // 도시
    coordinates: {             // GPS 좌표 (NEW!)
        lat: number;
        lng: number;
    };
    cuisine?: string;          // 요리 종류 상세
    specialty?: string;        // 대표 메뉴
    priceRange?: string;       // 가격대
    michelin?: string;         // 미슐랭 등급
    reservation?: boolean;     // 예약 필요 여부
    openingHours?: string;     // 영업 시간
    features?: string[];       // 특징
    icon?: string;             // 이모지
}
```

**도시별 데이터** (총 1,169줄, 19개 도시 완성):
- **✅ 일본 (5개)**: Osaka (6개), Tokyo (6개), Fukuoka (5개), Sapporo (5개), Okinawa (5개)
- **✅ 대만 (1개)**: Taipei (5개)
- **✅ 중국 (2개)**: Shanghai (5개), Dalian (4개)
- **✅ 베트남 (2개)**: Da Nang (5개), Nha Trang (5개)
- **✅ 동남아 (4개)**: Bangkok (5개), Bali (5개), Cebu (5개), Chiang Mai (5개)
- **✅ 기타 (5개)**: Da Lat (4개), Guam (4개), Ulaanbaatar (4개), Paris (5개), Mallorca (4개)

**주요 특징**:
- 🌏 **모든 맛집명 한글로 작성** ("이치란 라멘 도톤보리", "스키야바시 지로")
- 📍 **GPS 좌표 포함** - 지도에 맛집 위치 표시 가능
- ⭐ **미슐랭 등급 포함** (스키야바시 지로 3스타, 제이 파이 1스타 등)
- 💰 **현지 통화 가격대** (¥, NT$, ₫, ฿, Rp, ₱, €, $ 등)
- 🎯 **현지 맛집 정보** (영업 시간, 예약 필요 여부, 특징)

---

### 2. FoodPicker.tsx - 맛집 선택 UI

#### [FoodPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FoodPicker.tsx)

**주요 기능**:
1. **DraggableFoodCard**:
   - BaseCard 기반 (`orange-400` 색상)
   - 식당 이모지, 이름, 대표 메뉴 표시
   - 가격대, 미슐랭 등급 배지
   - 드래그 중 `orange-300` placeholder

2. **도시별 필터링**:
   ```typescript
   const restaurants = getRestaurantsByCity(destinationCity);
   ```

3. **직접 추가하기 버튼**:
   - `orange` hover 효과
   - 아직 동작 미구현 (향후 추가 예정)

---

### 3. FoodCard.tsx - 상세 정보 표시

#### [FoodCard.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/cards/FoodCard.tsx)

**개선 사항**:
```tsx
// 이전: 단순 description만 표시
<p>{card.description || "대표 메뉴 및 메모"}</p>

// 현재: 아이콘, 대표 메뉴, 가격대, 미슐랭 등급 표시
<div>
  {card.icon && <span>{card.icon}</span>}
  <h4>{card.title}</h4>
</div>
<div>
  {card.specialty && <span>{card.specialty}</span>}
  {card.priceRange && <span>{card.priceRange}</span>}
  {card.michelin && <span>⭐ {card.michelin}</span>}
</div>
```

---

### 4. Inbox 연결

#### [Inbox.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Inbox.tsx#L8)

**변경사항**:
```tsx
import { FoodPicker } from "./FoodPicker";

// ...

) : activeCategory === 'food' ? (
    <>
      <FoodPicker destinationCity={destinationCard?.city} />
    </>
```

---

### 5. DragOverlay 처리

#### CollaborativeApp.tsx

`picker-food-` ID는 **추가 처리 불필요**합니다.
- 기존 `renderCardInternal` 함수가 `category: 'food'`를 감지
- 자동으로 `FoodCard` 컴포넌트 렌더링
- `orange-400` 색상띠 자동 적용

---

## 🎯 적용 위치

1. ✅ **Inbox** - FoodPicker의 드래그 가능한 맛집 카드 목록
2. ✅ **타임라인** - DraggableCard로 렌더링된 맛집 카드
3. ✅ **드래그 중** - DragOverlay의 FoodCard

---

## 📊 카테고리별 색상 일관성

| 카테고리 | 색상 | 예시 |
|----------|------|------|
| 항공 | `bg-sky-400` | 하늘색 |
| 숙소 | `bg-rose-400` | 분홍색 |
| **맛집** | **`bg-orange-400`** | **주황색** ✨ |
| 쇼핑 | `bg-purple-400` | 보라색 |
| 교통 | `bg-teal-500` | 청록색 |
| 여행준비 | `bg-indigo-400` | 인디고 |

---

## 🔗 생성/수정된 파일

- [restaurants.ts](file:///Users/hwang-gyuhyeog/mindflows/src/data/restaurants.ts) - 새 파일, 맛집 데이터
- [FoodPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FoodPicker.tsx) - 새 파일, Picker 컴포넌트
- [FoodCard.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/cards/FoodCard.tsx#L8-L39) - 상세 정보 표시 개선
- [Inbox.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Inbox.tsx#L8) - FoodPicker import 추가
- [Inbox.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Inbox.tsx#L91-L95) - food 카테고리 조건 추가

---

## 🧪 테스트 항목

다음 시나리오를 테스트해야 합니다:

1. **Inbox 표시**:
   - Destination Header에 도시 추가 (Tokyo, Osaka, Paris)
   - Inbox "맛집" 탭 클릭
   - 맛집 목록이 표시되는지 확인

2. **드래그 앤 드롭**:
   - Inbox의 맛집 카드를 타임라인으로 드래그
   - 드래그 중 `orange-400` 색상띠 확인
   - 타임라인에 드롭 후 정보 표시 확인

3. **색상 일관성**:
   - 모든 맛집 카드가 `orange-400` 색상띠를 가지는지 확인


