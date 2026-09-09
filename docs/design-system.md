# Travelline 디자인 시스템

> 이 문서는 **코드베이스에 이미 존재하는 관행**을 토큰·프리미티브로 추출한 것이다.
> 기존 컴포넌트를 강제로 바꾸지 않는다. **신규 코드부터 점진 적용**한다.
>
> 관련 파일
> - 토큰: [`src/app/globals.css`](../src/app/globals.css) `@theme` 블록
> - 카테고리 색: [`src/data/colors.ts`](../src/data/colors.ts) `CARD_CATEGORY_COLOR`
> - 프리미티브: [`src/components/ui/`](../src/components/ui) (`Button` · `Spinner` · `Badge` · `Skeleton`)
> - className 병합: [`src/lib/cn.ts`](../src/lib/cn.ts) `cn()`

---

## 1. 색상

### 1-1. 역할(role) 색

| 역할 | 값 | 용도 | 토큰 별칭 |
|---|---|---|---|
| **primary** | emerald (`#10b981` = 500) | 주요 액션 버튼 (저장·확인·완료), 진행 표시 | `--color-primary-*` → `bg-primary-500` … |
| **accent** | orange (`#f97316` = 500) | 여행쇼핑, AI 플래너 등 강조 진입점 | `--color-accent-*` |
| **danger** | red (`#ef4444` = 500) | 삭제·경고·파괴적 액션 | `--color-danger-*` |
| **neutral** | slate (기본) / gray (경계·배경) | 텍스트·보더·표면 | Tailwind 기본 유틸 유지 |

> ⚠️ **브랜드 마크 색과 UI primary 색은 다르다.**
> 로고([`BrandLoader`](../src/components/BrandLoader.tsx))는 주황 `#ff6b47` + 틸 `#5bbfad` 를 쓴다.
> 이건 **마크 전용**이고 버튼·링크 색으로 쓰지 않는다. 토큰: `--color-brand-orange`, `--color-brand-teal`.

중립색 관행 (사용 빈도 기준):

- 본문 텍스트 `text-slate-700` / 보조 `text-slate-500` / 흐린 `text-slate-400`
- 카드·패널 표면 `bg-white`, 배경 `bg-slate-50` / `bg-gray-50`
- 경계선 `border-gray-100` (카드 내부) / `border-gray-200` (구획)

### 1-2. 카드 카테고리 색

CardShell 좌측 컬러 바 + 아이콘. 단일 출처는 [`src/data/colors.ts`](../src/data/colors.ts)의 `CARD_CATEGORY_COLOR`.

| 카테고리 | 색 | bar | HEX |
|---|---|---|---|
| destination (여행지) | emerald | `bg-emerald-400` | `#34d399` |
| preparation (여행준비) | indigo | `bg-indigo-400` | `#818cf8` |
| hotel (숙소) | rose | `bg-rose-400` | `#fb7185` |
| food (맛집) | orange | `bg-orange-400` | `#fb923c` |
| shopping (쇼핑) | purple | `bg-purple-400` | `#c084fc` |
| transport (교통) | blue | `bg-blue-400` | `#60a5fa` |
| tourspa (투어&스파) | cyan | `bg-cyan-400` | `#22d3ee` |
| other (기타) | amber | `bg-amber-400` | `#fbbf24` |
| flight (항공) | sky | `bg-sky-400` | `#38bdf8` |

```ts
import { CARD_CATEGORY_COLOR } from '@/data/colors';

const c = CARD_CATEGORY_COLOR[card.category] ?? CARD_CATEGORY_COLOR.other;
<div className={c.bar} />       // 컬러 바
<Icon className={c.text} />     // 아이콘
<span className={c.soft} />     // 옅은 배경 칩
marker.color = c.hex;          // 지도 마커 등 클래스 안 통하는 곳
```

각 항목은 `{ bar, text, soft, border, ring, hex }` 를 제공한다.

---

## 2. 타이포그래피

| 폰트 | 변수 | 용도 |
|---|---|---|
| Geist Sans | `--font-geist-sans` (`font-sans`) | 기본 |
| Geist Mono | `--font-geist-mono` (`font-mono`) | 코드·수치 |
| Nanum Pen Script | `--font-hand` (`font-hand`) | 온보딩 코치마크 손글씨 |

크기 스케일 (실제 사용 빈도순):

| 클래스 | px | 용도 |
|---|---|---|
| `text-xs` | 12 | 메타·라벨·배지 (2번째로 많음) |
| `text-sm` | 14 | **기본 본문** (가장 많음) |
| `text-base` | 16 | 강조 본문 |
| `text-lg` | 18 | 카드 제목 |
| `text-xl`+ | 20+ | 페이지 헤딩 (드묾) |
| `text-[9px]` / `text-[10px]` | — | 카드 내부 카테고리 라벨 등 초소형 (관행적으로 존재) |

굵기: 본문 `font-medium`, 강조·버튼 `font-semibold`, 배지 `font-bold`.

---

## 3. 반경 · 그림자 · 간격

### 반경 (사용 빈도순)

| 클래스 | 용도 |
|---|---|
| `rounded-lg` (8px) | 버튼, 인풋, 작은 요소 |
| `rounded-xl` (12px) | **카드** — 토큰 `--radius-card` |
| `rounded-full` | 배지, 아바타, 아이콘 버튼, 컬러 바 끝 |
| `rounded-2xl` (16px) | 패널, 모달, 큰 컨테이너 — 토큰 `--radius-panel` |

### 그림자

| 클래스 | 용도 | 토큰 |
|---|---|---|
| `shadow-sm` | 카드, 살짝 뜬 요소 | `--shadow-card` |
| `shadow-2xl` | 모달, 오버레이 | `--shadow-modal` |
| `shadow-md` / `shadow-xl` | 팝오버, 드롭다운 (중간) | — |

### 간격

Tailwind 기본 4px 스케일. 관행:

- 카드 내부 좌우 패딩 `px-3`, 요소 간격 `gap-3`
- 리스트 항목 세로 간격 `space-y-2`
- 섹션 패딩 `p-4` (모바일) / `p-6` (데스크톱)
- 카드 높이는 고정 규칙: `h-[58px] md:h-[72px]` (CardShell 관리, CLAUDE.md 참고)

---

## 4. 공통 프리미티브 (`@/components/ui`)

```ts
import { Button, Spinner, SpinnerBlock, Badge, Skeleton, SkeletonText } from '@/components/ui';
```

### Button

| variant | 용도 |
|---|---|
| `primary` | 저장 / 확인 / 완료 (emerald) |
| `secondary` | 취소 / 닫기 (slate 채움) |
| `outline` | 밝은 배경 위 보조 액션 |
| `ghost` | 아이콘 버튼 / 툴바 |
| `danger` | 삭제 (red) |
| `accent` | 여행쇼핑 / AI (orange) |

props: `size`(`sm`·`md`·`lg`), `loading`(스피너 + 비활성), `iconOnly`(정사각), `fullWidth`.
그 외 표준 `<button>` 속성 전부 통과. 포커스 링·`disabled` 처리 내장.

```tsx
<Button onClick={save} loading={saving}>저장</Button>
<Button variant="secondary" onClick={close}>취소</Button>
<Button variant="danger" size="sm" onClick={remove}>삭제</Button>
```

### Spinner

**인라인** 로딩만. (버튼 안, 인풋 우측, 리스트 하단)

```tsx
<Spinner />                       // sm, 현재 텍스트 색
<Spinner size="md" tone="muted" />
<SpinnerBlock label="불러오는 중" /> // 패널 영역 가운데
```

> 전체 화면 / 섹션 로딩은 Spinner 를 쓰지 말고
> [`@/components/BrandLoader`](../src/components/BrandLoader.tsx) 의
> `<BrandLoader>` · `<ModalLoader>` · `<TopProgressBar>` 를 쓴다. (브랜드 인상 통일)

기존 코드에 흩어진 `<Loader2 className="w-4 h-4 animate-spin" />` 패턴(약 20곳)이
이 컴포넌트로 대체 대상이다. 급하지 않게, 파일 손볼 때 같이 교체.

### Badge

```tsx
<Badge tone="primary">완료</Badge>
<Badge category="hotel" />        {/* 카테고리 색 + "숙소" 라벨 자동 */}
<Badge tone="danger" square>지연</Badge>
```

### Skeleton

작은 조각 조립용. 화면 전체 골격은
[`@/components/board/LoadingSkeleton`](../src/components/board/LoadingSkeleton.tsx) 사용.

```tsx
<Skeleton className="h-4 w-32" />
<Skeleton circle className="w-8 h-8" />
<SkeletonText lines={3} />
```

---

## 5. 적용 가이드 (do / don't)

**Do**

- 새 버튼·스피너·배지는 `@/components/ui` 프리미티브로.
- 카테고리 색이 필요하면 `CARD_CATEGORY_COLOR` 에서 가져온다. 하드코딩 금지.
- 조건부 className 은 `cn()` 으로 병합.
- 전체/섹션 로딩은 `BrandLoader`, 인라인 로딩만 `Spinner`.

**Don't**

- 기존 컴포넌트를 이 PR 범위에서 일괄 리팩터링하지 않는다. (별도 작업)
- 로고 브랜드색(`#ff6b47` / `#5bbfad`)을 버튼·링크에 쓰지 않는다.
- 새 회색조를 임의 도입하지 않는다. slate(텍스트) / gray(경계·배경) 관행 유지.
- `@theme` 토큰 값을 바꿀 때 문서·`colors.ts` 갱신 없이 넘어가지 않는다.

---

## 6. 앞으로 (범위 밖, 후속 논의)

- `Loader2` 산재 사용처 → `Spinner` 점진 교체
- 모달/인풋/탭도 프리미티브화 검토
- 다크 모드: 현재 `prefers-color-scheme` 블록만 있고 실사용 없음 → 도입 시 토큰 재정의로 대응
- role 별칭(`bg-primary-*`) 실채택 여부 팀 합의
