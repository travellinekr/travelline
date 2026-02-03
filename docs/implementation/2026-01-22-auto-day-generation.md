# Auto Day Generation Implementation

**날짜:** 2026-01-22  
**작업자:** AI + User

---

## 📋 작업 내용

### 기능
항공 확정 시 자동으로 Day 1, Day 2, ... 컬럼 생성

### 구현 상세

#### FlightSection.tsx 수정

**1. createDayColumn mutation 추가**
```typescript
const createDayColumn = useMutation(({ storage }, dayNum: number) => {
    const columns = storage.get('columns');
    const columnOrder = storage.get('columnOrder');
    
    if (!columns || !columnOrder) return;
    
    const dayId = `day${dayNum}`;
    
    // 중복 생성 방지
    if (columns.get(dayId)) return;
    
    // 컬럼 생성
    columns.set(dayId, new LiveObject({
        id: dayId,
        title: `Day ${dayNum}`,
        cardIds: new LiveList([])
    }));
    
    // columnOrder에 추가
    const orderArray = columnOrder.toArray();
    const day0Index = orderArray.indexOf('day0');
    
    if (day0Index !== -1) {
        const insertIndex = day0Index + dayNum;
        columnOrder.insert(dayId, insertIndex);
    } else {
        columnOrder.push(dayId);
    }
}, []);
```

**2. handleConfirm에 Day 생성 로직 추가**
```typescript
// 날짜 계산
const dayCount = Math.ceil(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24)
) + 1;

// Day 1, Day 2, ... 생성
for (let i = 1; i < dayCount; i++) {
    createDayColumn(i);
}
```

---

## 🔧 동작 방식

### 예시: 3박 4일 여행

**입력:**
- 가는편: 2026-03-15
- 오는편: 2026-03-18
- 일수 계산: `dayCount = 4`

**생성:**
- Day 1 (3/15)
- Day 2 (3/16)
- Day 3 (3/17)

**Timeline 결과:**
```
📍 여행지 후보
✈️ 항공
📅 Day 0 (준비)
📅 Day 1
📅 Day 2
📅 Day 3
```

**Sidebar 결과:**
```
📍 여행지
✈️ 항공
───────
0 준비
1 일차
2 일차
3 일차
```

---

## ✅ 테스트 체크리스트

- [ ] 항공 확정 → Day 컬럼 생성 확인
- [ ] Timeline에 Day 섹션 표시 확인
- [ ] Sidebar에 Day 목록 표시 확인
- [ ] 페이지 새로고침 → Day 유지 확인 (Liveblocks 저장)
- [ ] 중복 생성 방지 확인
- [ ] Day 순서 확인 (Day 0 → Day 1 → Day 2...)

---

## 📝 참고사항

- Day 0는 초기화 시 이미 생성되어 있어야 함
- columnOrder 삽입 위치: `day0Index + dayNum`
- 중복 생성 방지: `columns.get(dayId)` 체크

---

## 🚧 향후 개선 사항

- [ ] 항공 날짜 수정 시 Day 재계산
- [ ] Day 삭제 기능 (필요 시)
