# Sidebar Progress Indicator Implementation

**날짜:** 2026-01-22  
**작업자:** AI + User

---

## 📋 작업 내용

### 1. 데이터 구조 개선

#### 항공사 데이터 분리
- **파일 생성**: `src/data/airlines.ts`
- **이유**: 공항 데이터와 항공사 데이터 도메인 분리
- **장점**: DB 마이그레이션 용이, 유지보수성 향상

---

### 2. 커스텀 Autocomplete 컴포넌트
- **파일**: `src/components/board/Autocomplete.tsx`
- **문제**: 브라우저 기본 `<datalist>` 클릭 시 전체 목록 표시
- **해결**: 
  - 텍스트 입력 시에만 목록 표시
  - 선택 시 자동 닫힘 (exact match 체크)
  - 키보드 내비게이션 (↑↓, Enter, Esc)

---

### 3. Liveblocks Storage - FlightInfo 타입 추가
- **파일**: `src/liveblocks.config.ts`
- **구조**:
  ```typescript
  FlightInfo {
    outbound: { date, time, airline, departureAirport, arrivalAirport }
    return: { date, time, airline, departureAirport, arrivalAirport }
  }
  ```
- **FlightSection** → 항공 확정 시 storage에 저장

---

### 4. Sidebar 컴포넌트 구현

#### 파일
- `src/components/board/Sidebar.tsx`

#### 기능

**항공 미등록 시:**
```
📍 여행지
✈️ 항공
📅 일정
```

**항공 등록 후:**
```
📍 여행지
✈️ 항공
───────
📅 Day 0 (준비)
📅 Day 1
📅 Day 2
...
```

#### 클릭 동작

| 섹션 | 상태 | 동작 |
|------|------|------|
| 📍 여행지 | 미선택 + 후보 없음 | "여행지를 선택해 주세요" |
| 📍 여행지 | 미선택 + 후보 있음 | "어디를 갈지 여행지 후보에서 고르세요" |
| 📍 여행지 | 선택됨 | "오사카! 즐거운 계획 세우세요^^" |
| ✈️ 항공 | 여행지 없음 | "여행지를 선택해 주세요" (warning) |
| ✈️ 항공 | 여행지 있음 + 항공 없음 | "항공편을 등록해 주세요" + 모달 열기 |
| ✈️ 항공 | 항공 있음 | 항공 섹션으로 스크롤 |
| 📅 일정 | 항공 없음 | "✈️ 항공편을 먼저 등록해주세요" |
| 📅 Day N | - | Day 섹션으로 스크롤 |

#### 스타일
- 폭: `w-14 md:w-20` (기존 유지)
- 항목 간격: `gap-2`
- 아이콘 기반 UI (좁은 폭에 최적화)

---

## 🔧 수정된 파일

### 생성
- `src/data/airlines.ts`
- `src/components/board/Sidebar.tsx`

### 수정
- `src/liveblocks.config.ts` - FlightInfo 타입 추가
- `src/data/airports.ts` - MAJOR_AIRLINES 제거
- `src/components/board/FlightSection.tsx` - 항공 데이터 저장 기능 추가
- `src/components/board/Autocomplete.tsx` - exact match 닫힘 로직
- `src/app/CollaborativeApp.tsx` - Sidebar 통합, destinationCard 계산

---

## ✅ 테스트 필요 항목

- [ ] 여행지 미선택 시 토스트 메시지
- [ ] 여행지 후보만 있을 때 토스트 메시지
- [ ] 여행지 선택 후 토스트 메시지
- [ ] 항공 등록 전 클릭 동작
- [ ] 항공 등록 후 Day 자동 생성
- [ ] Day 클릭 시 스크롤
- [ ] 반응형 (모바일)

---

## 📝 참고사항

- 사이드바 폭은 기존 유지 (`w-14 md:w-20`)
- 항목 간 간격으로 시각적 구분
- Toast 메시지는 상황별로 세분화
