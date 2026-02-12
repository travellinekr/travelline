# 쇼핑 카테고리 구현 완료

## 📋 작업 개요

쇼핑 카테고리를 맛집/숙소/교통 카드와 **동일한 패턴**으로 완전하게 구현했습니다.

---

## ✅ 구현된 기능

### 1. shopping.ts 데이터 파일

**위치**: [shopping.ts](file:///Users/hwang-gyuhyeog/mindflows/src/data/shopping.ts)

#### 쇼핑 타입 (10가지)
```typescript
export type ShoppingType =
    | "department-store"  // 백화점
    | "mall"             // 쇼핑몰
    | "market"           // 재래시장
    | "outlet"           // 아울렛
    | "duty-free"        // 면세점
    | "convenience"      // 편의점
    | "supermarket"      // 슈퍼마켓
    | "specialty"        // 전문점
    | "boutique"         // 부티크
    | "souvenir";        // 기념품점
```

#### 데이터 구조
```typescript
export interface ShoppingData {
    name: string;
    type: ShoppingType;
    city: string;
    coordinates: { lat: number; lng: number };
    category?: string;        // 판매 카테고리
    specialItems?: string;    // 특산품/인기 상품
    priceRange?: string;      // 가격대
    openingHours?: string;    // 영업 시간
    taxRefund?: boolean;      // 택스 리펀드 가능 여부
    features?: string[];      // 특징
    icon?: string;           // 이모지
}
```

#### 도시별 데이터
- **19개 도시** × 각 4-6개 = **약 80개 쇼핑 장소**
- 모든 데이터에 GPS 좌표 포함
- 각 도시의 대표 쇼핑 장소 큐레이션:
  - Osaka: 한큐 백화점, 도톤보리, 구로몬 시장 등
  - Tokyo: 긴자 미츠코시, 시부야 109, 아메요코 등
  - Bangkok: 씨엠 파라곤, 짜뚜짝 주말시장 등
  - Paris: 갤러리 라파예트, 샹젤리제 거리 등

---

### 2. ShoppingPicker 컴포넌트

**위치**: [ShoppingPicker.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/ShoppingPicker.tsx)

#### 주요 기능
- ✅ **도시별 필터링**: 선택된 여행지의 쇼핑 장소만 표시
- ✅ **DraggableShoppingCard**: 드래그 가능한 쇼핑 카드
- ✅ **상세 정보 표시**:
  - 이모지 아이콘
  - 쇼핑 타입 (백화점, 면세점 등)
  - 특산품/인기 상품
  - 가격대
  - 면세 배지 (taxRefund가 true일 때)
- ✅ **purple 테마**: `bg-purple-400` 배경색
- ✅ **"직접 추가하기" 버튼**

#### 코드 구조
```typescript
function DraggableShoppingCard({ shopping, index }) {
    const cardData = {
        id: `picker-shopping-${shopping.city}-${index}`,
        title: shopping.name,
        category: 'shopping',
        shoppingType: shopping.type,
        city: shopping.city,
        coordinates: shopping.coordinates,
        shoppingCategory: shopping.category,
        specialItems: shopping.specialItems,
        priceRange: shopping.priceRange,
        taxRefund: shopping.taxRefund,
        // ... 기타 필드
    };
    // ... 드래그 로직
}
```

---

### 3. ShoppingCard 개선

**위치**: [ShoppingCard.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/cards/ShoppingCard.tsx)

**이전**: 간단한 title + description만 표시  
**현재**: 맛집카드와 동일한 상세 정보 표시

#### 표시 정보
- ✅ **이모지** (`card.icon`)
- ✅ **쇼핑 장소 이름** (`card.title`)
- ✅ **특산품/인기 상품** (`card.specialItems`)
- ✅ **가격대** (`card.priceRange`)
- ✅ **면세 배지** (`card.taxRefund`)

```typescript
<div className="flex items-center gap-2">
  {card.icon && <span>{card.icon}</span>}
  <h4>{card.title}</h4>
</div>
<div className="flex items-center gap-2">
  {card.specialItems && <span>{card.specialItems}</span>}
  {card.priceRange && <span>{card.priceRange}</span>}
  {card.taxRefund && (
    <span className="text-purple-600 bg-purple-50">면세</span>
  )}
</div>
```

---

### 4. Inbox 연결

**위치**: [Inbox.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Inbox.tsx)

**수정 사항**:
- ✅ `ShoppingPicker` import 추가
- ✅ `activeCategory === 'shopping'` 조건 추가

```typescript
import { ShoppingPicker } from "./ShoppingPicker";

// ...

) : activeCategory === 'shopping' ? (
    <ShoppingPicker destinationCity={destinationCard?.city} />
) : null
```

---

### 5. CollaborativeApp 연결

**위치**: [CollaborativeApp.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/app/CollaborativeApp.tsx)

#### 수정 사항

##### (1) ShoppingCard import
```typescript
import { ShoppingCard } from "../components/board/cards/ShoppingCard";
```

##### (2) DragOverlay 처리 (Line 911-915)
```typescript
) : String(activeDragItem.id).startsWith('picker-shopping-') ? (
    // Shopping Picker 카드: ShoppingCard 스타일
    <div className="w-full max-w-md">
        <ShoppingCard card={activeDragItem} className="shadow-xl" />
    </div>
```

##### (3) handleDragEnd 처리 (Line 534-560)
```typescript
// Shopping Picker 카드 → Day 컬럼 (day1, day2, ...)
if (draggedCard?.category === 'shopping' && /^day[1-9]\d*$/.test(targetColumnId)) {
    const targetCol = (columns as any).get(targetColumnId);
    const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

    createCardToColumn({
        title: draggedCard.title,
        category: draggedCard.category,
        shoppingType: draggedCard.shoppingType,
        city: draggedCard.city,
        coordinates: draggedCard.coordinates,
        shoppingCategory: draggedCard.shoppingCategory,
        specialItems: draggedCard.specialItems,
        priceRange: draggedCard.priceRange,
        openingHours: draggedCard.openingHours,
        taxRefund: draggedCard.taxRefund,
        features: draggedCard.features,
        icon: draggedCard.icon,
        description: draggedCard.description,
        targetColumnId: targetColumnId,
        targetIndex: finalTargetIndex
    });

    return;
}
```

---

### 6. useCardMutations 수정

**위치**: [useCardMutations.ts](file:///Users/hwang-gyuhyeog/mindflows/src/hooks/useCardMutations.ts)

#### 수정 사항

##### (1) createCardToColumn 파라미터 추가 (Line 103)
```typescript
shoppingType,
shoppingCategory,
specialItems,
taxRefund,
```

##### (2) newCard 객체에 쇼핑 필드 추가 (Line 157-162)
```typescript
// 쇼핑 관련 필드
shoppingType,
shoppingCategory,
specialItems,
taxRefund
```

---

### 7. DraggableCard 확인

**위치**: [DraggableCard.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/DraggableCard.tsx)

✅ **renderCardInternal에 shopping 케이스 이미 존재** (Line 227)
```typescript
case 'shopping': return <ShoppingCard key={card.id} card={card} {...props} />;
```

---

## 🎨 디자인 일관성

| 요소 | 색상/스타일 |
|------|------------|
| 배경색 | `bg-purple-400` |
| 아이콘 | `ShoppingBag` (lucide-react) |
| 카테고리 레이블 | "Shopping" |
| 면세 배지 | `text-purple-600 bg-purple-50` |
| Placeholder | `border-purple-300 bg-purple-50/50` |
| 직접 추가 버튼 | `hover:border-purple-400` |

---

## 📊 데이터 통계

- **총 도시**: 19개
- **총 쇼핑 장소**: 약 80개
- **평균 장소 수/도시**: 4-5개
- **GPS 좌표 포함**: 100%
- **면세점 비율**: 약 20-30% (주요 관광지)

---

## 🔄 드래그 앤 드롭 플로우

### Inbox → 드래그 시
1. `picker-shopping-` ID 감지
2. **DragOverlay**에서 `ShoppingCard` 렌더링
3. Purple 배경, ShoppingBag 아이콘 표시

### Day 컬럼에 드롭 시
1. `handleDragEnd`에서 `category === 'shopping'` 감지
2. `createCardToColumn` 호출 (모든 쇼핑 필드 전달)
3. LiveObject로 카드 생성
4. 타임라인에 추가

### 타임라인 → 드래그 시
1. `renderCardInternal`에서 `shopping` 케이스 매칭
2. `ShoppingCard` 컴포넌트 렌더링
3. 기존 정보 유지 (이모지, 특산품, 가격, 면세 등)

---

## ✅ 체크리스트

- [x] shopping.ts 데이터 파일 생성
- [x] ShoppingPicker.tsx 구현
- [x] ShoppingCard.tsx 개선
- [x] Inbox 연결
- [x] CollaborativeApp DragOverlay 추가
- [x] CollaborativeApp handleDragEnd 추가
- [x] useCardMutations 쇼핑 필드 추가
- [x] DraggableCard 확인

---

## 🧪 추천 테스트 시나리오

1. **Inbox 표시 테스트**
   - 여행지 선택 (예: Osaka)
   - 쇼핑 탭 클릭
   - 5개 쇼핑 장소 표시 확인

2. **드래그 테스트**
   - 쇼핑 카드 드래그
   - Purple ShoppingCard 표시 확인
   - 이모지, 특산품, 가격, 면세 배지 확인

3. **드롭 테스트**
   - Day1 컬럼에 드롭
   - 카드 정상 생성 확인
   - GPS 좌표 저장 확인

4. **타임라인 드래그 테스트**
   - 타임라인 카드 드래그
   - 동일한 ShoppingCard 표시 확인
   - 모든 정보 유지 확인

---

## 🎯 다음 단계

쇼핑 카테고리 구현이 완료되었습니다. 이제 브라우저에서 실제 테스트를 진행하여 모든 기능이 정상 작동하는지 확인할 수 있습니다.
