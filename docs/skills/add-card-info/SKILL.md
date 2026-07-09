# 스킬: 카드 인포 데이터 추가

카드 (숙소·맛집·쇼핑·교통) 별 상세 정보를 등록해 ⓘ 버튼 팝업으로 노출한다.

**최종 갱신**: 2026-07-05 (실제 코드 기준)

---

## 1. 언제 이 스킬을 쓰는가

- 이미 등록된 카드(예: cities/osaka/restaurants.ts 의 "이치란 라멘 도톤보리") 에 상세 정보 팝업을 붙일 때
- 대상: hotel · food · shopping · transport · tourspa (5 카테고리)
- 대상 아님: preparation(입국 카드) — 별도 스킬 `add-entry-info` 사용

---

## 2. 데이터 위치 (성능 최우선)

```
src/data/cities/<slug>/info/
├── accommodations.ts    ← Record<카드 name, AccommodationInfo>
├── restaurants.ts       ← Record<카드 name, RestaurantInfo>
├── shopping.ts          ← Record<카드 name, ShoppingInfo>
├── transport.ts         ← Record<카드 name, TransportInfo>
└── tourSpa.ts           ← Record<카드 name, TourSpaInfo>
```

**왜 이 위치**:
- ⓘ 클릭 시에만 dynamic import → 초기 번들 무영향
- Webpack code-splitting → 도시+카테고리 단위 청크 (수 KB)
- 도시 폴더 안에 응집 (add-destination 스킬과 자연스러운 확장)

**절대 이 위치가 아니면**: `useCardInfo` hook 의 import 경로가 `@/data/cities/${slug}/info/${categoryFile}` 로 하드코딩되어 있어 다른 위치는 매칭 실패 → 팝업에 "정보 없음" 표시.

---

## 3. 필수 작업 (2단계)

### Step 1 — 인포 파일에 항목 추가

파일 위치 예: `src/data/cities/osaka/info/restaurants.ts` (없으면 신규 생성).

```ts
import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "카드 name 과 정확 일치": {
        summary: "한 줄 소개",
        // ... 필드 상세는 §5 참조
    },
    // 더 많은 항목 추가...
};

export default info;
```

**중요**: 키는 `cities/osaka/restaurants.ts` 데이터 항목의 `name` 필드와 **문자 그대로 일치**. 오타·공백·전각/반각 모두 문제됨.

### Step 2 — 원본 데이터 항목에 `hasInfo: true` 세팅

파일 위치 예: `src/data/cities/osaka/restaurants.ts` 에서 해당 항목:

```ts
{
    name: "이치란 라멘 도톤보리",
    hasInfo: true,       // ← 이 줄 추가 (또는 기존 값 true 로)
    ...
}
```

**왜 필요**: CardShell 은 이 플래그로 ⓘ 버튼 표시 여부를 O(1) 로 판정. 없으면 인포 파일이 있어도 버튼 안 뜸.

---

## 4. 팝업 렌더 구조 (참고)

모든 카테고리 팝업이 공유하는 흐름:

```
┌────────────────────────────────────────┐
│ 헤더: <카테고리 라벨> · <카드명·도시> [읽기 전용] │
├────────────────────────────────────────┤
│ summary (한 줄 큰 텍스트)                │
│ warnings (노란 박스 배열)                │
│ highlights (핵심 포인트 ✓ 리스트)        │
│                                        │
│ [카테고리 특유 섹션 · §5 참조]            │
│                                        │
│ tips (💡 팁 리스트)                     │
│ photos (썸네일 갤러리 3열)              │
│ links (색상 3종 링크 카드)              │
├────────────────────────────────────────┤
│ 📅 실제 여행 전 최신 정보 확인 [닫기]     │
└────────────────────────────────────────┘
```

**빈 배열/undefined 필드**: 해당 섹션 자동 미표시 (렌더 안전).

---

## 5. 스키마 상세 (카테고리별)

`src/data/card-info-types.ts` 의 인터페이스 정의 참조. 각 카테고리 특유 필드:

### AccommodationInfo (숙소)

| 필드 | 팝업 표시 |
|---|---|
| `checkIn` / `checkOut` `{time, note?}` | 카드 형태 그리드 2열 |
| `breakfast` `{included, price?, time?, menu?}` | "조식" 박스 |
| `amenities` `[{icon, label, note?}]` | 뱃지 칩 그룹 |
| `roomTypes` `[{name, price?, capacity?, note?}]` | 표 (이름/가격/설명) |
| `location` `{transit?, landmark?, airport?}` | 라벨/값 표 |

### RestaurantInfo (맛집)

| 필드 | 팝업 표시 |
|---|---|
| `reservation` `{required, method?, url?, note?}` | "예약" 박스 + URL 링크 |
| `menu` `{signature?, items?[{name, price?, note?}]}` | 시그니처 강조 + 항목 리스트 |
| `hours`, `waitTime`, `dressCode`, `payment[]` | "기본 정보" 라벨/값 표 |

### ShoppingInfo (쇼핑)

| 필드 | 팝업 표시 |
|---|---|
| `taxRefund` `{available, minAmount?, method?, note?}` | "택스 리펀드" 박스 |
| `hours`, `closureDates`, `floors`, `parking`, `payment[]` | "기본 정보" 라벨/값 표 |

### TransportInfo (교통)

| 필드 | 팝업 표시 |
|---|---|
| `fare` `{base, note?, ranges?[]}` | "요금" 박스 (구간별 요금 리스트) |
| `app` `{required, name?, url?, downloadUrl?}` | "앱" 박스 + 링크 |
| `route` `[{name, stations[]}]` | 노선별 역 칩 리스트 |
| `hours`, `frequency`, `payment[]` | "기본 정보" 라벨/값 표 |

### 공통 (모든 카테고리, InfoBase)

| 필드 | 팝업 표시 |
|---|---|
| `summary: string` [필수] | 헤더 아래 큰 텍스트 (한 줄 요약) |
| `highlights?: string[]` | ✓ 초록 체크 불릿 |
| `tips?: string[]` | 💡 인디고 불릿 |
| `warnings?: string[]` | 노란 경고 박스 (배열 개수만큼) |
| `photos?: string[]` | 3열 썸네일 (클릭 → 새 탭 원본). 숙소·맛집·tourspa 인포 팝업은 첫 번째 이미지를 상단 대표 hero 이미지로 사용하고, 두 번째 이미지부터 하단 갤러리에 표시 |
| `links?: InfoLink[]` | 색상 3종 (`official` 초록 · `blog` 주황 · `guide` 남색) |
| `updatedAt?: string` | 우측 회색 작은 텍스트 "YYYY-MM-DD 기준" |

---

## 6. 디폴트값 정책

값 확정 못할 때:

| 상황 | 정책 |
|---|---|
| 정보 부족한 필드 | **필드 자체 생략** (undefined) — 팝업이 해당 섹션 자동 숨김 |
| boolean (예약필수/면세지원/앱필수) 확인 불가 | 부모 객체 자체 생략 (예: `reservation` 필드 빼기) |
| `photos` 확인 불가 | 필드 생략 (갤러리 미표시) |
| `links` 최소 1개 | 공식 URL 하나는 강력 권장 (`type: 'official'`) |
| `updatedAt` | 스킬 실행일 (예: `"2026-07-05"`) |

---

## 7. 검증

- [ ] `npx tsc --noEmit` 에러 0
- [ ] `npm run dev` → 해당 도시 선택 → 인박스 → 대상 픽커에서 카드 확인
- [ ] 카드에 ⓘ 버튼 표시됨 (`hasInfo:true` 세팅 안 됐으면 버튼 미표시)
- [ ] ⓘ 클릭 → 팝업 로딩 → 스키마대로 렌더
- [ ] 이름이 매칭 안 되면 "정보가 아직 등록되지 않았습니다" (매칭 문자열 재확인)
- [ ] preparation 입국 카드 팝업은 100% 그대로

---

## 8. 커밋

```
feat(card-info): <도시> <카테고리> N개 카드 인포 추가

- cities/<slug>/info/<category>.ts 신규/추가
- cities/<slug>/<category>.ts 해당 항목에 hasInfo: true 세팅

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

푸시·머지는 사용자 결정.

---

## 참고 파일

- 카테고리별 스켈레톤: [templates/](./templates/)
- 필드 조합 → 팝업 렌더 시각화: [examples/rendering-behavior.md](./examples/rendering-behavior.md)
- 검증 체크리스트: [checklist.md](./checklist.md)
