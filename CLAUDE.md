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
