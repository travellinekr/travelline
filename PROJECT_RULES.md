# Mindflows Project Rules & Requirements

이 문서는 프로젝트의 핵심 규칙, 디자인 가이드라인, 그리고 AI 에이전트가 반드시 따라야 할 요구사항을 정의합니다.
반복되는 요청사항을 줄이고, 일관성 있는 개발을 위해 **상세하게 작성**해 주세요.

## 0. 📝 AI 상호작용 규칙 (AI Interaction Rules)

**🔴 반드시 지켜야 할 규칙:**

1. **느낌표(!) 대화모드**: 사용자 요청이 느낌표(!)로 시작하면 → **대화모드로만 답변**, 코드 수정/실행 금지
2. **브라우저 테스트**: 사용자가 명시적으로 요청할 때만 수행
3. **실행 전 확인**: 
   - 요청을 받으면 → 실행계획을 보여주고
   - "할까요?" 라고 물어보고
   - 사용자가 "그래" 또는 허락하면 → 그때 수행
4. **Git 브랜치 사용**:
   - 큰 작업(새 기능 추가, 대규모 리팩토링 등) 시작 전 → "브랜치 만들까요?" 물어보기
   - 허락받으면 → `git checkout -b feature/작업명` 실행
   - 작업 완료 후 → 성공 시 main에 merge, 실패 시 브랜치 삭제
   - 목적: main 브랜치를 항상 안전하게 유지

**작업 기록 관리:**
- 구체적인 작업 내용은 `docs/implementation/` 폴더에 날짜별로 기록
- 아키텍처 결정은 `docs/decisions/` 폴더에 기록
- 이 파일(PROJECT_RULES.md)은 AI가 지켜야 할 **규칙과 가이드라인**만 포함

## 0-0. 📅 최근 업데이트 (2026-01-25)

### UI/UX 개선
- **Confirm 다이얼로그 재디자인**: 토스트 스타일 적용 (중앙 배치, 둥근 모서리, 그라데이션)
- **모바일 키보드 대응**: visualViewport API로 키보드 감지 시 하단 보관함 자동 숨김
- **타임라인 스크롤 개선**: 모바일에서 하단 패딩 추가로 보관함에 가려지는 문제 해결
- **PC 스크롤바 개선**: 더 얇고 연한 디자인 (8px→4px, 색상 연하게)
- **라벨 통일**: "항공" → "항공편"으로 일관성 개선 (사이드바, 타임라인 섹션)
- **항공편 확정 후 스크롤**: 타임라인 자동 스크롤 top (정확한 요소 타겟팅)

## 0-1. 📅 최근 업데이트 (2026-01-23)

### 항공 섹션 개선
- **색상 바 통일**: 항공 카드 왼쪽 바를 0일차와 동일 스타일로 변경
- **도착일자 자동 계산**: 출발/도착 시간 비교로 자정 넘김 자동 처리
- **UI 간소화**: 도착일자 수동 입력 제거
- **모바일 최적화**: TimeSelect padding 축소

### 날짜 선택기 (DateRangePicker)
- **구글 항공 스타일**: 2개월 캘린더 가로 배치
- **모바일/데스크톱 대응**: 하단 시트 vs 중앙 모달
- **크기 개선**: 데스크톱 max-w-4xl, 셀 크기 증가


## 0-1. 🖼️ 도시 이미지 구조 (City Images)

### 폴더 구조
```
public/images/cities/
├─ osaka/           (오사카)
│  ├─ jan/  (1.jpg ~ 10.jpg)
│  ├─ feb/
│  └─ ... (12개월)
├─ tokyo/           (도쿄)
├─ fukuoka/         (후쿠오카)
├─ sapporo/         (삿포로)
├─ okinawa/         (오키나와)
├─ taipei/          (타이베이)
├─ shanghai/        (상하이)
├─ dalian/          (다롄)
├─ da-nang/         (다낭)
├─ bangkok/         (방콕)
├─ nha-trang/       (나트랑)
├─ bali/            (발리)
├─ cebu/            (세부)
├─ chiang-mai/      (치앙마이)
├─ da-lat/          (달랏)
├─ guam/            (괌)
├─ ulaanbaatar/     (울란바토르)
├─ paris/           (파리)
└─ mallorca/        (마요르카)
```

### 이미지 사양
- **사이즈**: 256 x 256 px (display)
- **해상도**: 512 x 512 px (actual)
- **포맷**: JPG or PNG
- **네이밍**: 1.jpg ~ 10.jpg (도시별/월별 10개)

### TODO: 이미지 생성 작업
- [ ] 나노바나나(Naver Cloud AI)에 이미지 생성 요청
- [ ] 각 도시별 12개월 × 10개 = 120개 이미지 생성
- [ ] public/images/cities/ 폴더에 저장
- [ ] getCityImage() 함수 구현하여 랜덤 로드

> 상세 내용: `public/images/cities/README.md` 참고




## 1. 📐 페이지 레이아웃 (Page Layout)

### 타임라인 & 보관함 영역 규칙

![페이지 영역 정의](file:///Users/hwang-gyuhyeog/.gemini/antigravity/brain/9b7b1cea-544e-455b-a216-faae286626c2/uploaded_image_1768976170687.png)

**핵심 규칙**:
- **destination-header에 카드 있음** → destination-candidates **숨김**
- **destination-header 비어있음** → destination-candidates **표시**
- 각 섹션은 지정된 카테고리 카드만 드롭 허용

---

## 2. 🎨 디자인 & UI 가이드라인 (Design & UI)
> 반응형 사이트 이기때문에 언제나 모바일을 고려한 UI를 감안해야 함
  메인페이지, 여행페이지, 투두리스트 페이지로 구성됨
  여행페이지는 좌측바, 타임라인, 보관함으로 구성 됨
  좌측바는 일정을 정의하고
  타임라인은 상단에 최종 결정된 여행지 카드가 들어가고
  아래 여행 후보지, 항공, 0일차, 1일차등 일정으로 구성됨
  보관함은 카테고리 영역과 카드로 구성된 보관함이 구성됨
  보관함에는 여행지, 항공, 숙소, 맛집 등이 구성됨 
  보관함은 좌측바의 일정을 정의하는 영역으로 구성됨
  보관함의 카드로 드래그하여 타임라인에 추가할 수 있음
  타임라인의 카드로 드래그하여 보관함으로 이동하면 타임라인에서는 삭제되고 보관함은 해당 카테고리를 선택된 것 처럼 보여 준다
  타임라인의 각 영역에서 카드를 드래그하여 순서를 바꿀수 있다
  0일차(준비)에는 여행일정 카드만 들어간다
  여행 후보지 영역에는 여행지 카드만 들어간다
  모바일은 사용성으로 우측 보관함을 아래에 배치해서 화면의 반을 올리고 전에를 올리고 내릴수 있는 구성으로 한다
  모바일에서는 플로팅 마우스를 만들어 사용자가 들어왔다는 마우스 위치를 나타내준다


## 2. 🏗️ 아키텍처 (Architecture)

### Dual Timeline 구조

**해결한 문제**: Sticky 헤더를 스크롤 가능한 컨테이너 내부에 넣으면 스크롤바가 헤더 영역에도 나타남

**솔루션**: Timeline을 두 개의 인스턴스로 분리, 각각 다른 스크롤 동작:

```
CollaborativeApp
└─ Left Section (Timeline 영역)
   ├─ 고정 컨테이너 (h-[100px])
   │  └─ Timeline sections={['destination-header']}
   │     └─ 최종 여행지 카드 (스크롤 없음)
   └─ 스크롤 컨테이너 (flex-1, overflow-y-auto)
      └─ Timeline sections={['candidates', 'days']}
         └─ 후보지 + 일정 섹션 (스크롤 가능)
```

**핵심 스펙**:
- destination-header 컨테이너: **정확히 100px** (`h-[100px]`)
- Inbox 카테고리 영역: **100px** (`min-h-[100px]`)
- 두 영역 높이 완벽 일치

**스크롤바 동작** (`custom-scrollbar` 클래스):
- **PC**: 기본 투명 → hover 시 회색 스크롤바 (6px)
- **모바일**: 완전 숨김 (`@media (pointer: fine)`)
- **헤더 영역**: 스크롤바 안 보임 (별도 고정 컨테이너)

**디자인**:
- destination-header: 분홍/rose 테마 (`bg-rose-50`, `border-rose-100`)
- 빈 상태: 50px placeholder
- 드래그 하이라이트: rose 색상 (emerald 아님)
- 배경: 불투명 흰색


### A. 도시 카드 (City Card) 규칙 - "Diet"
- **목표**: 도시카드는 이미지가 왼쪽에 구성되어야 하고 텍스트는 AI로 달에 맞는 정보를 나타내야 함
- **크기**: 높이 72px 고정, 폭(width)은 가변(100%)
- **레이아웃**:
    - 이미지: 왼쪽 배치, 너비 80px, 꽉 찬 이미지, Unsplash에서 가져온 이미지로 달에 맞는 이미지로 구성
    - 텍스트: 우측 정렬, 폰트 크기 16px
    - 드래그 앤 드롭 : 다른 카드와 동일한 사이즈를 유지한다.
    - 높이 : h-[72px] (border-slate-300)
    - 너비 : 최소 min-w-[320px]
- **비고**: 어떤 요청이 있을때도 위에 레이아웃을 유지 해야 함

### B. 공통 컴포넌트 규칙
- 다른 카드(숙소, 맛집 등)와의 통일성 유지 방안 등

---


---

## 3. 🔔 토스트 알림 시스템 (Toast Notifications)

### 스택 방식 토스트

- 여러 개의 토스트 동시 표시 가능
- 오른쪽 하단에 세로 스택 (flex-col-reverse)
- 새 메시지는 위쪽에 추가
- 각 토스트 3초 후 자동 제거
- X 버튼으로 수동 닫기

### 검증 실패 메시지 (warning)

- "여행준비에는 여행준비 카드만 들어갑니다."
- "항공에는 항공 카드만 들어갑니다."
- "여행지 후보에는 여행지 카드만 들어갑니다."

### 상태 변경 메시지 (info)

- "여행지가 등록되어 여행지 후보는 사라집니다."
- "여행지 후보가 나타납니다."

---


## 4. 🏗️ 기능 요구사항 (Feature Requirements)
> 특정 기능의 작동 방식이나 제약 조건을 정의합니다.

### A. 투표 시스템 (Voting System)

**위치**: 여행지 후보 카드 오른쪽 하단 (Row 3)

**UI 구조** (3단 레이아웃):
- Row 1: 도시명 (`flex-1 min-w-0`) + 여행지 배지 (`shrink-0`) - `justify-between`
- Row 2: 설명 텍스트
- Row 3: 🤍 하트 아이콘 + 투표 수 - `justify-end`

**레이아웃 최적화**:
- 컨텐츠 패딩: `pl-3 pr-1` (오른쪽 최소화)
- 삭제 버튼 영역: `w-6` (컴팩트)
- Row 1 gap: `gap-2`

**스타일**:
- 배경: `bg-pink-50` → 호버: `bg-pink-100`
- 테두리: `border-pink-200`
- 폰트: 10px, 세미볼드, `text-pink-600`

**투표 규칙** (중요!):
- ✅ **사용자당 1표**: 여행지 후보 전체에서 하나만 선택 가능
- 다른 카드 클릭 시 기존 투표 자동 제거
- 같은 카드 다시 클릭 시 투표 취소

**동작**:
- 투표 수 실시간 업데이트 (Liveblocks)
- 드래그와 독립적으로 작동 (stopPropagation)

**구현**:
- `toggleVote` mutation (useCardMutations)
- 투표 시 모든 다른 카드에서 userId 제거
- `card.votes` 배열에 user ID 저장
- 임시 user ID: localStorage 기반 (브라우저별 고유)

**이벤트 처리**:
```typescript
// 투표 버튼 영역: onPointerDown/Up에서 stopPropagation
// 버튼 클릭: onClick에서 stopPropagation + preventDefault
// 전체 카드: 드래그 리스너 적용
```

> [!CAUTION]
> **🔴 사용자 인증 구현 필요**
> 
> 투표 기능 사용 전 사용자 등록/로그인 시스템 구현이 반드시 필요합니다.
> - 투표자 식별을 위한 user ID 필요
> - 중복 투표 방지 (단일 투표 시스템)
> - 투표자 목록 표시
> - 현재: `getTempUserId()` 사용 (localStorage 기반)

### B. 드래그 앤 드롭 (Drag & Drop)

**드래그 활성화 거리**:
- MouseSensor: `distance: 15px` (실수 방지)
- TouchSensor: `delay: 250ms, tolerance: 5px`

**destination-header 드롭존**:
- 중앙 80% 영역만 인정 (좌우 10%씩 여백)
- customCollisionDetection에서 엄격하게 체크

**destination-candidates 가시성**:
- destination-header에 카드 있음 → **hidden**
- destination-header에서 드래그 시작 → 즉시 **show** (effectiveHeaderCount 계산)
- 드롭 후 상태에 따라 자동 업데이트

**충돌 방지**:
- inbox-dropzone: 자동 리디렉션 제거 (모든 카드 inbox로)
- 각 섹션 카테고리 검증 유지

### C. 여행지 선택 (Destination Picker)
- 

### B. 드래그 앤 드롭 (Drag & Drop)
- 

---

## 3. 🚫 금지 사항 (Anti-Patterns)
> 절대 변경하거나 구현하면 안 되는 사항들입니다.
- 예: "기존의 Board 레이아웃 구조는 변경 금지"
- 예: "Tailwind CSS 외의 다른 스타일링 라이브러리 사용 금지"

---

## 4. 📝 프롬프트 메모 (Prompt Memo)
> 잊지 말아야 할 대화 내용이나 문맥을 자유롭게 적어주세요.
- 

---

## 5. ✈️ 항공 프로세스 (Flight Process)

### 사용자 플로우

**1. 항공 영역 클릭** (Timeline 상단, Day 0 위)
```
사용자: 타임라인에서 "✈️ 항공" 클릭
→ 항공 모달 열림
```

**2. 항공 모달 UI**
```
┌─────────────────────────────┐
│ ✈️ 항공권 찾기              │
├─────────────────────────────┤
│ 출발: 인천                  │
│ 도착: 오사카 (자동)         │
│ 날짜: (여행지에서 자동)     │
│                             │
│ [💰 최저가 항공권 찾기]     │ ← 트립/아고다 이동
│                             │
│ ─ 또는 ─                    │
│                             │
│ [📝 예약한 항공편 등록]     │
└─────────────────────────────┘
```

**3. 항공편 정보 입력**
```
┌─────────────────────────────┐
│ ✈️ 항공편 정보              │
├─────────────────────────────┤
│ 🛫 가는 편                  │
│  출발: 2026.03.15 08:00     │
│  도착: 2026.03.15 10:00     │
│  항공사: 대한항공           │
│  편명: KE123 (선택사항)     │
│                             │
│ 🛬 오는 편                  │
│  출발: 2026.03.18 18:00     │
│  도착: 2026.03.18 20:00     │
│  항공사: 대한항공           │
│  편명: KE124 (선택사항)     │
│                             │
│      [저장하기]             │
└─────────────────────────────┘
```

### 자동 일정 계산 로직

**입력 예시**:
- 🛫 **가는편**: 2026.03.15 08:00 (출발) → 10:00 (도착)
- 🛬 **오는편**: 2026.03.18 18:00 (출발) → 20:00 (도착)

**계산 공식**:
```
몇일 = 가는편 출발일 ~ 오는편 도착일
     = 2026.03.15 ~ 2026.03.18
     = 4일

몇박 = 가는편 도착일 ~ 오는편 출발일
     = 2026.03.15 (10:00) ~ 2026.03.18 (18:00)
     = 3박

→ 3박 4일 여행
```

**Timeline 자동 생성**:
```
✈️ 항공
├─ 가는편: KE123 인천→오사카 3/15 08:00-10:00
└─ 오는편: KE124 오사카→인천 3/18 18:00-20:00

📍 여행지: 오사카

Day 0 (준비) - ~ 2026.03.14 (출발 전일)
Day 1 - 2026.03.15 (가는편 출발일)
Day 2 - 2026.03.16 (자동 생성)
Day 3 - 2026.03.17 (자동 생성)
Day 4 - 2026.03.18 (오는편 도착일)
```

### 동작 순서

1. **초기 상태**: Day 1만 존재
2. **항공편 입력**: 가는편/오는편 정보 입력
3. **자동 계산**: 몇박몇일 계산
4. **Day 생성**: Day 0, 2, 3, 4 자동 생성
5. **항공 배치**: 
   - Day 0: (준비 일정만)
   - Day 1: 가는편 정보 표시
   - Day 4: 오는편 정보 표시

### 제휴 링크 (Affiliate Links)

**현재 (Phase 1)**:
```
일반 링크로 트립닷컴/아고다 이동
https://trip.com/flights?from=ICN&to=KIX&date=2026-03-15
```

**나중 (Phase 2 - 사용자 100명+)**:
```
제휴 링크로 변경 (affiliate_id만 추가)
https://trip.com/flights?from=ICN&to=KIX&date=2026-03-15&affiliate_id=YOUR_ID

예상 커미션:
- 항공: 예약 금액의 3-5%
- 호텔: 예약 금액의 4-8%
```

### TODO:

- [ ] 항공 섹션 UI 구현 (Timeline 상단)
- [ ] 항공 모달 컴포넌트
- [ ] 항공편 입력 폼
- [ ] 몇박몇일 자동 계산 로직
- [ ] Day 자동 생성 기능
- [ ] 트립닷컴/아고다 링크 생성 함수
- [ ] (나중) 제휴 프로그램 신청 & affiliate_id 추가

---

## 6. 📂 데이터 관리 (Data Management)

### 데이터 파일 구조

```
src/data/
├─ airports.ts     (공항 데이터)
│  ├─ KOREAN_AIRPORTS (8개)
│  └─ MAJOR_AIRPORTS (70개)
│
└─ airlines.ts     (항공사 데이터)
   └─ MAJOR_AIRLINES (50개)
```

**분리 이유:**
- 명확한 도메인 분리
- DB 마이그레이션 시 용이
- 유지보수성 향상

**향후 계획:**
- MVP 단계: 로컬 `.ts` 파일 사용 (빠르고 간단)
- 확장 단계: Supabase DB로 마이그레이션
- 관리자 페이지에서 데이터 수정 가능

---

## 7. 🎯 커스텀 Autocomplete 컴포넌트

### 파일 위치
`src/components/board/Autocomplete.tsx`

### 문제점
브라우저 기본 `<datalist>`의 동작:
- 입력 필드 클릭 시 전체 목록 표시 (dropdown 화살표 ▼)
- 사용자 경험 저하

### 해결 방법
커스텀 Autocomplete 컴포넌트 구현

### 주요 기능

#### 1. 텍스트 입력 시에만 목록 표시
```typescript
if (value.length >= minChars) {
    const filtered = suggestions.filter(...)
    // 최소 1글자 이상 입력해야 목록 표시
}
```

#### 2. 선택 시 자동 닫힘
```typescript
// 입력값이 필터 결과와 정확히 일치하면 리스트 닫기
const exactMatch = filtered.length === 1 && filtered[0] === value;
setIsOpen(filtered.length > 0 && !exactMatch);
```

#### 3. 키보드 내비게이션
- **↑ / ↓**: 항목 이동
- **Enter**: 선택
- **Escape**: 목록 닫기

#### 4. 외부 클릭 감지
외부 클릭 시 자동으로 목록 닫힘

### 사용 예시

```tsx
<Autocomplete
    value={outboundAirline}
    onChange={setOutboundAirline}
    suggestions={MAJOR_AIRLINES}
    placeholder="대한항공"
    className="..."
    autoFocus={false}
    minChars={1}  // 최소 입력 글자 수
/>
```

### 적용 위치
- 가는편 항공사 입력
- 오는편 항공사 입력
- 직접입력 공항 입력

### Props

| 속성 | 타입 | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `value` | `string` | ✅ | - | 입력값 |
| `onChange` | `(value: string) => void` | ✅ | - | 값 변경 핸들러 |
| `suggestions` | `string[]` | ✅ | - | 자동완성 목록 |
| `placeholder` | `string` | ❌ | `""` | placeholder |
| `className` | `string` | ❌ | `""` | CSS 클래스 |
| `autoFocus` | `boolean` | ❌ | `false` | 자동 포커스 |
| `minChars` | `number` | ❌ | `1` | 최소 입력 글자 수 |



---

## 8. 📅 최근 업데이트 이력 (2026-01-24)

### UI/UX 개선

#### 1. 사이드바 아이콘 업데이트
- **여행지**: `MapPin` 아이콘 + 연한 emerald 배경 (`bg-emerald-100`)
- **항공**: `Plane` 아이콘 + 연한 purple 배경 (`bg-purple-100`)
- Lucide React 아이콘으로 통일, 타임라인 스타일과 일관성 유지

#### 2. 스크롤바 너비 최적화
- PC 환경 스크롤바를 4px로 축소
  - `globals.css`: 6px → 4px
  - `CollaborativeApp.tsx`: 8px → 4px

---

### 데이터 관리 구조 개선

#### TSX에서 데이터 분리
컴포넌트 코드와 정적 데이터 분리로 유지보수성 향상

**생성된 파일:**

1. **`src/data/destinations.ts`** (250줄)
   - `DESTINATION_DATA`: 19개 도시 정보
   - `FALLBACK_IMAGES`: Wikimedia 이미지 URL
   - 타입: RegionKey, CityData, RegionData
   - 상세한 업데이트 가이드 포함

2. **`src/data/colors.ts`** (40줄)
   - `CURSOR_COLORS`: 15개 Material Design 색상
   - 색상 팔레트 업데이트 가이드

3. **`src/data/airlines.ts`** (225줄)
   - `KOREAN_AIRLINES`: 한국 항공사 9개
   - `MAJOR_AIRLINES`: 해외 항공사 41개
   - 타입: Airline, AirlineCategory (FSC/LCC)
   - 문자열 배열: ALL_AIRLINE_NAMES, MAJOR_AIRLINE_NAMES
   - 헬퍼: getAirlineByCode, getAirlineByName

4. **`src/data/airports.ts`** (업데이트)
   - 상세한 주석 추가
   - 지역별 그룹화, IATA 코드 검색 링크

**수정된 컴포넌트:**
- `DestinationPicker.tsx`: 111줄 감소
- `Cursor.tsx`: 5줄 감소
- `FlightSegmentForm.tsx`: ALL_AIRLINE_NAMES import

**이점:**
- 데이터 업데이트 시 별도 파일만 수정
- 컴포넌트 가독성 향상
- JSON/DB 이전 용이

---

### 기능 개선

#### 1. 항공사 자동완성 수정
- MAJOR_AIRLINE_NAMES → ALL_AIRLINE_NAMES 사용
- 한국 항공사 포함하여 정상 작동

#### 2. 최종 여행지 변경 시 항공 정보 초기화
**문제:** 여행지 변경 시 항공편 정보가 남아있음  
**해결:** deleteFlightInfo mutation 추가

**수정 위치 (`CollaborativeApp.tsx`):**
- Line 105-109: deleteFlightInfo mutation 정의
- Line 335: 새 여행지로 교체 시
- Line 436: destination-header로 이동 시
- Line 443: destination-header에서 드래그 아웃 시

**동작:**
1. 여행지 교체 → 항공 정보 리셋
2. 여행지 제거 → 항공 정보 리셋
3. 여행지 드래그 아웃 → 항공 정보 리셋

---

### 통계
- 제거된 코드: 약 116줄 (tsx)
- 생성된 데이터 파일: 4개 (약 515줄)
- 빌드 상태: ✅ Compiled successfully

