# Flight Card View Implementation

**날짜:** 2026-01-23  
**작업자:** AI + User

---

## 📋 작업 내용

### 기능
타임라인 항공 영역에서 항공 정보를 2개의 카드(가는편/오는편)로 표시하고, "변경" 버튼으로 입력 폼과 전환

---

## 🔧 구현 상세

### 1. 상태 관리

```typescript
// Liveblocks에서 항공 정보 읽기
const flightInfo = useStorage((root) => root.flightInfo);

// 편집 모드 토글
const [isEditMode, setIsEditMode] = useState(false);
```

### 2. UI 전환 로직

**조건별 화면:**
1. `flightInfo`가 없음 → 입력 폼 표시
2. `flightInfo` 있음 + `!isEditMode` → 2개 카드 + "변경" 버튼
3. `flightInfo` 있음 + `isEditMode` → 입력 폼 (기존 값 로드)

### 3. 항공 카드 UI

**가는편 카드:**
```tsx
<div className="flex items-center gap-3 p-4 bg-purple-50/50 border border-purple-100 rounded-lg h-[72px]">
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
        <Plane className="w-5 h-5 text-purple-600" />
    </div>
    <div className="flex-1">
        <span className="text-xs font-bold text-purple-600">🛫 가는편</span>
        <p className="text-sm font-medium">인천 → 오사카</p>
        <p className="text-xs text-slate-500">3/15 08:00</p>
    </div>
</div>
```

**오는편 카드:**
- 동일한 디자인, 비행기 아이콘 180도 회전
- `🛬 오는편` 라벨

### 4. "변경" 버튼

**위치:** 헤더 오른쪽  
**표시 조건:** `flightInfo && !isEditMode`  
**동작:** `setIsEditMode(true)` + 기존 데이터 로드

```tsx
{flightInfo && !isEditMode && (
    <button onClick={() => setIsEditMode(true)}>
        <Edit2 className="w-3.5 h-3.5" />
        변경
    </button>
)}
```

### 5. 데이터 로드

편집 모드 진입 시 기존 데이터를 폼에 로드:

```typescript
useEffect(() => {
    if (isEditMode && flightInfo) {
        // 가는편 데이터 로드
        setDepartureDate(new Date(flightInfo.outbound.date));
        setOutboundDepartureAirport(flightInfo.outbound.departureAirport);
        // ...

        // 오는편 데이터 로드
        setArrivalDate(new Date(flightInfo.return.date));
        setReturnDepartureAirport(flightInfo.return.departureAirport);
        // ...
    }
}, [isEditMode, flightInfo]);
```

### 6. 확정 후 전환

```typescript
const handleConfirm = () => {
    // ... 검증 및 저장
    saveFlightInfo(flightData);
    
    // 카드 뷰로 전환
    setIsEditMode(false);
    
    // Day 생성 등...
};
```

---

## 📐 UI 스펙

### 카드 디자인
- **높이**: 72px (도시 카드와 동일)
- **배경**: `bg-purple-50/50`
- **테두리**: `border-purple-100`
- **아이콘**: 왼쪽 원형 배경 (40px)
- **간격**: 카드 간격 12px (`space-y-3`)

### "변경" 버튼
- **색상**: `text-purple-600`
- **호버**: `bg-purple-50`
- **아이콘**: `Edit2` (Lucide)
- **크기**: `text-xs`

---

## 📝 수정된 파일

- `src/components/board/FlightSection.tsx`
  - `useStorage` hook 추가
  - `isEditMode` 상태 추가
  - 항공 카드 UI 추가
  - "변경" 버튼 추가
  - 데이터 로드 로직 추가

---

## ✅ 테스트 필요 항목

- [ ] 초기 상태: 입력 폼 표시
- [ ] 항공 확정: 2개 카드 표시
- [ ] "변경" 클릭: 입력 폼으로 전환
- [ ] 폼에 기존 값 로드 확인
- [ ] 재확정: 카드 뷰로 전환
- [ ] 업데이트된 정보 반영 확인
- [ ] 페이지 새로고침: 카드 유지 (Liveblocks)
