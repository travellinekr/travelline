# CLAUDE.md - 프로젝트 가이드

## 프로젝트 개요
**Travelline** - 실시간 협업 여행 계획 서비스 (Next.js App Router)
- 여러 사용자가 동시에 여행 보드를 편집할 수 있는 칸반 스타일 앱
- 현재 작업 브랜치: `refactor/collaborative-app`

---

## 기술 스택
| 역할 | 기술 |
|---|---|
| 프레임워크 | Next.js 14 (App Router) |
| 실시간 협업 | Liveblocks |
| 데이터베이스 | Supabase (PostgreSQL) |
| 스타일링 | Tailwind CSS |
| 드래그&드롭 | dnd-kit |
| AI | Gemini API |
| 이미지 | Unsplash API |
| 지도 | Google Maps API |

---

## 핵심 파일 구조

```
src/
├── app/
│   ├── page.tsx                        # 메인 페이지 (여행 계획 목록)
│   ├── Room.tsx                        # Liveblocks 룸 Provider
│   ├── CollaborativeApp.tsx            # 여행 보드 핵심 컴포넌트
│   ├── room/[roomId]/page.tsx          # 여행 보드 페이지
│   └── api/
│       ├── liveblocks-auth/route.ts    # Liveblocks Secret Key 인증 (중요!)
│       ├── projects/[projectId]/       # 프로젝트 CRUD
│       └── liveblocks/add-cards/       # 카드 추가 API
├── components/
│   ├── board/
│   │   ├── Inbox.tsx                   # 인박스 (카테고리 탭 + 카드 목록)
│   │   ├── Timeline.tsx                # 타임라인 (날짜별 컬럼)
│   │   ├── DraggableCard.tsx           # 드래그 가능한 카드 + renderCardInternal
│   │   └── FlightSection/              # 항공 섹션
│   └── cards/
│       ├── types.ts                    # CardVariant 타입 정의
│       ├── CardShell.tsx               # 모든 카드의 공통 껍데기
│       ├── HotelCard.tsx
│       ├── FoodCard.tsx
│       ├── ShoppingCard.tsx
│       ├── TransportCard.tsx
│       ├── TourSpaCard.tsx
│       ├── EtcCard.tsx
│       └── PreparationCard.tsx
└── liveblocks.config.ts                # Liveblocks 타입 및 클라이언트 설정
```

---

## Liveblocks 인증 구조 (중요)

**Secret Key 방식** 사용 - Public Key 방식으로 바꾸면 안 됨 (보안 취약)

```
Room.tsx
└── LiveblocksProvider (authEndpoint → /api/liveblocks-auth)
    └── RoomProvider
        └── CollaborativeApp
```

- `liveblocks-auth/route.ts`: Supabase 토큰 검증 → project_members role 조회 → 권한 부여
  - owner/editor → FULL_ACCESS
  - viewer / 비로그인 → READ_ACCESS

---

## 카드 시스템

### CardVariant
```ts
type CardVariant = 'inbox' | 'timeline' | 'explore' | 'compact';
```
- `inbox`: 인박스에서 표시 (h-[58px] md:h-[72px])
- `timeline`: 타임라인 드롭 후 표시
- `compact`: destination-candidates 드래그 오버레이
- `explore`: 익스플로러 보드 (정적)

### 카드 카테고리
`destination`, `preparation`, `hotel`, `food`, `shopping`, `transport`, `tourspa`, `other`, `flight`

### 카드 높이 규칙
- 모든 카드: `h-[58px] md:h-[72px]` (CardShell에서 관리)
- 모든 카드 내부: `flex flex-col justify-center w-full min-w-0 overflow-hidden`

### 카드 렌더링
`DraggableCard.tsx`의 `renderCardInternal(card, props, variant)` 함수로 category별 분기

---

## Liveblocks Storage 구조

```
storage
├── columns: LiveMap<string, LiveObject>
│   ├── destination-header   # 최종 여행지 (카드 최대 1개)
│   ├── destination-candidates # 여행지 후보
│   ├── flights              # 항공
│   ├── day0, day1, day2...  # 날짜별 컬럼
│   └── inbox                # 보관함
├── columnOrder: LiveList<string>
├── cards: LiveMap<string, LiveObject<Card>>
└── flightInfo: 항공 정보
```

### initialStorage 주의사항
- `destination-header`의 cardIds는 반드시 **빈 배열 []** 로 시작 (나트랑 하드코딩 금지)
- `dest1` 카드를 initialStorage에 넣으면 신규 프로젝트마다 나트랑이 자동 추가됨

---

## 알려진 이슈 및 주의사항

1. **autoRestore 로직** (`CollaborativeApp.tsx`): destination-header가 비어있으면 자동복구 시도하는 useEffect 존재. 카드를 드래그해서 빼면 불필요하게 트리거될 수 있음. 필요 없으면 제거 검토.

2. **중복 key 문제**: `destination-header` cardIds LiveList에 동일 카드 ID가 중복 삽입되면 React key 경고 발생. 카드 드롭 시 중복 체크 필요.

3. **autoRestore useEffect 의존성**: `useRef`로 감싸서 deps 배열 크기 고정 필요.

---

## Liveblocks Mutation 패턴 (중요)

### LiveObject 속성 접근
- **mutation 컨텍스트** (`useMutation` 내부): 반드시 `.get('propertyName')` 사용
  ```ts
  const col = columns.get(columnId);
  const list = col.get("cardIds"); // ✅ 올바름
  const list = col.cardIds;        // ❌ mutation 내에서 undefined 될 수 있음
  ```
- **React 렌더/이벤트 핸들러** (`useStorage` 값): 직접 접근 가능
  ```ts
  const list = col.cardIds; // ✅ useStorage로 가져온 값은 직접 접근 가능
  ```

### 카드 제거 뮤테이션 (`useCardMutations.ts`)
- `removeCardFromTimeline({ cardId, sourceColumnId })`: 카드를 컬럼 cardIds에서 제거 + `cards` LiveMap에서 완전 삭제
- `moveCard({ cardId, targetColumnId, targetIndex })`: 카드를 다른 컬럼으로 이동
- `copyCardToTimeline(...)`: 인박스→타임라인 복사 (원본 유지)

### cleanupFlightAndDays 동작
- `flightInfo` 삭제 + 모든 `day*` 컬럼 삭제
- **주의**: 카드 객체는 `cards` LiveMap에 고아(orphan) 상태로 남음 (컬럼만 삭제)
- `autoRestore`가 즉시 빈 day0 재생성

---

## 여행지 제거 시 day0 카드 정리 로직

**구현 위치**: `handleDragEnd` 내 `sourceColumnId === 'destination-header'` + `!flightInfo` 경로

**핵심 원칙**: useEffect 타이밍 의존 금지 → 드래그 이벤트에서 직접 처리

```ts
// handleDragEnd에서 destination-header → 외부로 드래그, 항공편 없을 때
const day0Col = (columns as any).get('day0');
if (day0Col) {
    const list = day0Col.cardIds;
    const day0CardIds: string[] = Array.isArray(list) ? list : (list?.toArray ? list.toArray() : []);
    [...day0CardIds].forEach((cardId: string) => {
        removeCardFromTimeline({ cardId, sourceColumnId: 'day0' });
    });
}
```

**실패했던 방법**: `cleanupFlightAndDays` useMutation 내부에서 카드 삭제 시도
- `col.get('cardIds')` 패턴을 사용해도 useEffect 타이밍 문제로 실제 동작 불안정
- useEffect는 렌더 이후 비동기 실행이라 storage 상태와 타이밍 불일치 가능

---

## 날씨 API 모델 선택 로직 (`/api/weather/route.ts`)

Open-Meteo 모델을 좌표 + 데이터 유무에 따라 선택:

| 조건 | 모델 |
|---|---|
| 한국 (lat 33~38°N, lng 124~132°E) | `kma_seamless` (기상청, 10일+) |
| 해외 예보 - `icon_seamless` 시도 후 데이터 있음 | `icon_seamless` (독일 DWD, 단기 고정밀) |
| 해외 예보 - `icon_seamless` noData | `gfs_seamless` (미국 NOAA, 16일 커버) 폴백 |
| 현재 날씨 (날짜 없음) | 한국 `kma_seamless`, 해외 `icon_seamless` |

**폴백 패턴**: `icon_seamless` 결과의 `weathercode[0] == null` 이면 `gfs_seamless`로 재시도
**이유**: ICON 모델은 약 7~8일 이후 데이터 없음 → 장거리 여행 일정 후반부 날씨 공백 발생

---

## 타임라인 날씨 표시 로직 (`Timeline.tsx` > `DaySection`)

각 일차(DaySection)에서 `weatherKey`(좌표)를 계산하여 날씨 fetch:

1. 마커(카드 좌표) 중 도착 공항 주변(1도 이내) 카드가 있으면 → 목적지 날씨
2. 목적지 카드가 없으면 → 첫 번째 마커 좌표 날씨
3. 빈 일차(카드 없음) + 2일차 이상 → 도착 공항(`arrCoords`) 날씨
4. 빈 일차 + 1일차 → 출발 공항(기본 ICN) 날씨

**주의**: `useEffect` deps가 `[flightInfo, dayNumber]`이므로 `weatherKey`가 deps에 없음. 마커 변화로 weatherKey가 바뀌어도 재fetch 안 됨 (현재 동작상 문제 없으나 향후 개선 가능)

---

## 세션 만료 처리

**파일**: `src/components/auth/SessionExpiredModal.tsx` (공통 모달)
**사용처**:
- `GlobalSessionWatcher.tsx`: Supabase `SIGNED_OUT` / `TOKEN_REFRESH_FAILED` 감지 시 모달 표시
- `CollaborativeApp.tsx`: `useErrorListener`에서 auth 관련 오류 감지 시 모달 표시

기존 브라우저 `alert()` → 커스텀 모달로 교체. 배경 블러 + 🔐 아이콘 + "로그인 페이지로 이동" 버튼

---

## 여행보드 로딩 속도 최적화

### 병목 분석 결과

| 병목 | 원인 | 조치 |
|---|---|---|
| `explore_queue` 강제 딜레이 | `CollaborativeApp`에 1200ms 하드코딩 | 500ms로 단축 (ClientSideSuspense 내부라 이미 연결됨) |
| `liveblocks-auth` 타임아웃 과대 | getUser 3s + memberQuery 3s + authorize 10s 순차 최대 16s | 각각 2s / 2s / 6s로 단축 |
| 서버 DB 쿼리 중 빈 화면 | `page.tsx` 서버 쿼리 동안 로딩 UI 없음 | `loading.tsx` 추가 (Next.js App Router) |

### Liveblocks 인증 타임아웃 폴백 구조
```
getUser(2s 타임아웃) → 실패 시 anon READ_ACCESS 즉시 반환
memberQuery(2s 타임아웃) → 실패 시 viewer 권한으로 처리
session.authorize(6s 타임아웃) → 실패 시 500 에러
```
폴백 시 Liveblocks가 빠르게 재인증 시도 → 정상 권한으로 복구됨

### 로딩 스켈레톤 (`LoadingSkeleton.tsx`)
- 상단 에메랄드 진행 바 애니메이션
- "여행 보드 불러오는 중..." 텍스트 + 바운싱 점
- 모바일: 하단 인박스 핸들 표시
- 데스크톱: 우측 인박스 카테고리 탭 + 카드 스켈레톤
- 카드 높이를 실제(`58px/72px`)와 동일하게 → 로딩 완료 시 레이아웃 점프 최소화

---

## 타임라인 일차 스크롤 (`scrollToDay`)

### 스크롤 방식
`scrollIntoView` 대신 `timelineScrollRef` 직접 제어:
```ts
const containerTop = container.getBoundingClientRect().top;
const elementTop = element.getBoundingClientRect().top;
const offset = elementTop - containerTop + container.scrollTop - 16; // 16px 상단 여백
container.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
```
**이유**: `scrollIntoView`는 스크롤 컨테이너를 정확히 제어하지 못함

### 여행 중 현재 일차 자동 스크롤
`CollaborativeApp.tsx`의 `autoScrolledRef` useEffect:
- `flightInfo.outbound.date`와 오늘 날짜 비교 → 현재 일차 계산
- `diffDays < 0` 이면 출발 전 → 스크롤 안 함
- **double requestAnimationFrame** 으로 React 페인트 완료 후 실행
- `autoScrolledRef.current = true`로 최초 1회만 실행

```ts
// 핵심 패턴
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        scrollToDay(dayId); // 사이드바 클릭과 동일한 함수 호출
    });
});
```

**실패했던 방법들**:
- `setTimeout(600ms)` + `columns.get(dayId)` 체크 → flightInfo 레퍼런스 변경 시 cleanup이 타이머 취소
- retry 루프 → 타이머 배열 cleanup 복잡, 첫 타이머만 정리되는 버그
- `[flightInfo, columns]` 의존성 → columns 변경 시 effect 재실행, autoScrolledRef 설정 후 타이머 취소 경합

---

## Liveblocks WebSocket 연결 오류 코드

- **1006**: 비정상 종료 (네트워크 불안정). 자동 재연결되므로 정상 동작
- **4100 Expired**: 토큰 만료. SDK가 자동으로 `/api/liveblocks-auth` 재호출 → 정상 사이클
- **4100 Timed out**: auth 엔드포인트 10초 초과. Supabase 느릴 때 발생. 재시도로 복구

---

## 인박스 카테고리 탭 구조 (`Inbox.tsx`)

**1단** (topTabs): 여행지, 여행준비, 숙소 + **여행쇼핑 버튼** (주황색, `/explore` 이동)
**2단** (bottomTabs): 맛집, 쇼핑, 교통, 투어&스파, 기타

여행쇼핑 버튼은 `ml-auto`로 1단 오른쪽 끝 고정. 탭이 많아져도 버튼은 항상 우측 고정.

---

## 여행보드 에러 경계 (`src/app/room/[roomId]/error.tsx`)

Next.js `error.tsx` 파일로 room 라우트 에러 바운더리 구현.
네트워크/서버 오류 시 오류 페이지 대신 "연결에 문제가 생겼어요" 안내 UI + 다시 시도/메인으로 이동 버튼 표시.

---

## 모바일 인박스(Inbox) 슬라이드 동작

**상태**: `inboxState: 'closed' | 'half' | 'full'`
- `closed` → h-[58px] (핸들바만 표시)
- `half` → h-[50vh]
- `full` → h-[100dvh]

**드래그 중 동작**:
- 드래그 시작: `prevInboxStateRef.current = inboxState` 저장 후 `setInboxState('closed')` (즉시, transition 없음)
- 드래그 종료: 500ms 딜레이 후 `setInboxState(prevInboxStateRef.current)` (부드럽게 올라옴)
- transition 클래스: `activeDragItem` 있으면 제거 → 드래그 중 즉시 닫힘, 드래그 후 슬라이드업

**도시카드 → destination-header 드롭 시 예외**:
- 인박스 다시 열리지 않음
- `prevInboxStateRef.current = 'closed'` 로 덮어씌워 timeout 복원 차단
- 토스트: "항공편을 등록하세요."

**항공편 섹션 표시 조건**:
- `Timeline.tsx`: `destHeaderCards.length > 0` 일 때만 FlightSection 렌더

---

## API 키 (.env.local)
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`
- `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` / `LIVEBLOCKS_SECRET_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

---

## 개발 서버
```bash
npm run dev   # http://localhost:3000
```
