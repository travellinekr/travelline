# 스킬: 입국 정보 추가 (`entryCardGuide.ts`)

여행준비 인박스 → "입국심사&필요사항" 카드의 **입국정보보기 팝업** ([CardInfoModal.tsx](../../../src/components/cards/CardInfoModal.tsx))이 표시할 국가/도시별 정보를 `src/data/entryCardGuide.ts` 에 추가한다.

**최종 갱신**: 2026-07-05 (실제 코드 기준)

---

## 1. 팝업 구조 (에이전트 참고용)

팝업은 **BlockNote 같은 리치 에디터를 쓰지 않고**, 아래 5개 섹션을 순수 React 로 조립한다. 데이터에 어떤 필드가 있느냐에 따라 섹션이 자동으로 나타나거나 사라진다.

```
┌─────────────────────────────────────────┐
│ 입국 정보 · <카드 제목> · <도시>  [읽기 전용]│  헤더
├─────────────────────────────────────────┤
│ 🇭🇰 statusEmoji  status              (updatedAt 기준) │  ① 상태 배지
├─────────────────────────────────────────┤
│ ⚠️ warnings[0]                          │  ② 노란 경고 박스
│ ⚠️ warnings[1]                          │     (배열 개수만큼 반복, 없으면 섹션 자체 생략)
├─────────────────────────────────────────┤
│ 입국 요건                                │  ③ 상세 (details)
│ ┌────────┬──────────────────────────┐  │     라벨(왼쪽 24폭 볼드) · 값(오른쪽)
│ │ 라벨   │ 값                        │  │     항목 개수만큼 행 추가
│ └────────┴──────────────────────────┘  │
├─────────────────────────────────────────┤
│ 신청 절차                                │  ④ 프로세스 (process)
│ ①  Title                                │     초록색 원형 번호 + 제목 + 설명
│    description                          │     없으면 섹션 자체 생략
│ ②  Title                                │
├─────────────────────────────────────────┤
│ 유용한 링크                              │  ⑤ 링크 (links)
│ 🌐 라벨 [공식]                          │     type 별 색상/아이콘
│    description                          │     없으면 섹션 자체 생략
├─────────────────────────────────────────┤
│ 📅 실제 여행 전 최신 정보 확인    [닫기] │  푸터 고정
└─────────────────────────────────────────┘
```

**핵심**: 팝업이 "에디터에 맞게" 그리는 게 아니라, `EntryCardInfo` 정형 구조를 5개 컴포넌트 블록으로 렌더링. 즉 **데이터를 아래 스키마에 정확히 맞춰 채우면** 자동으로 예쁘게 나옴.

---

## 2. 데이터 스키마 (`EntryCardInfo`)

[entryCardGuide.ts:742](../../../src/data/entryCardGuide.ts#L742) 정의 그대로:

```ts
interface EntryCardInfo {
    country: string;                             // ① 상단 국가 (국기 이모지 + 국명)
    status: string;                              // ① 상태 한 줄 요약
    statusEmoji: string;                         // ① 상태 이모지 (아래 관례 참조)
    details: { label: string; value: string }[]; // ③ 표 형태 (라벨/값 쌍)
    warnings: string[];                          // ② 노란 경고 (빈 배열이어도 필드 필요)
    links?: EntryLink[];                         // ⑤ 유용한 링크 (선택)
    process?: ProcessStep[];                     // ④ 신청 절차 (선택)
    updatedAt?: string;                          // ① 우측 "YYYY-MM-DD 기준"
    source?: string;                             // 렌더 안 됨 (내부 출처 메모)
}

interface EntryLink {
    label: string;
    url: string;
    type: 'official' | 'guide' | 'blog';         // 색상/뱃지 결정
    description?: string;
}

interface ProcessStep {
    step: number;                                 // 1, 2, 3, ...
    title: string;
    description: string;
}
```

---

## 3. 각 필드가 어디에 · 왜 · 어떤 값

### ① country [필수]

- **어디에**: 팝업 상단 우측 헤더 라인의 "카드제목 · <city>" 부분 (city 는 카드에서 옴). country 는 사실상 데이터 식별용.
- **왜**: 시각적으로 국기 + 국명 = 즉시 어느 나라인지 인지
- **형식**: `"<국기 이모지> <한글 국명>"` — 필요 시 괄호로 부가 (`"🇫🇷 프랑스 (솅겐 지역)"`)
- **국기 이모지**: `🇻🇳 🇭🇰 🇫🇷 🇬🇧 🇹🇭 🇯🇵 🇸🇬 🇹🇼 🇲🇾 🇮🇩 🇺🇸 🇨🇦 🇦🇺 🇳🇿 🇪🇬 🇲🇦 🇰🇪` 등

### ② status [필수]

- **어디에**: 상태 배지 큰 볼드 텍스트 (statusEmoji 옆)
- **왜**: 한 눈에 상황 파악 (비자·신고서 요건)
- **어떤 값 (관례)**:
    - `"입국신고서 불필요 · 90일 무비자"` — 완전 자유
    - `"전자입국신고서 필수 (TDAC)"` — 도착 카드 시스템명 병기
    - `"전자여행허가 ETA 필수 (2025.1.8~)"` — 시행일 병기
    - `"90일 무비자 (ETIAS 2026년 예정)"` — 예정 사항 병기

### ③ statusEmoji [필수]

- **어디에**: 상태 배지 왼쪽 큰 이모지
- **관례 (프로젝트 확정, 아래 정책 표 참조)**:

| 이모지 | 의미 | 사례 |
|---|---|---|
| ✅ | 완전 무비자 + 신고서 불필요 | 베트남, 홍콩 |
| 📱 | 전자입국신고서/도착카드 필수 | 태국 TDAC, 일본 VJW, 싱가포르 SGAC, 말레이시아 MDAC, 인도네시아 |
| ✈️ | 전자여행허가(ETA/ESTA/eTA/NZeTA) | 미국, 캐나다, 호주, 뉴질랜드, 영국 |
| 📋 | e-Visa / 도착비자 필요 | 이집트, 인도, 케냐 |
| ⚠️ | 조건부 · 곧 변경 예정 | 프랑스(ETIAS 2026 예정) |

### ④ updatedAt [권장]

- **어디에**: 상태 배지 우측 회색 작은 텍스트 `"YYYY-MM-DD 기준"`
- **왜**: 사용자가 정보 신선도 판단
- **형식**: `"2026-07-05"` (하이픈 구분, 스킬 실행일 or 실제 정보 수집일)
- **미제공 시**: 우측 라벨 자체 생략

### ⑤ source [선택]

- **어디에**: **렌더 안 됨** (팝업에 안 보임)
- **왜**: 데이터 소스 추적용 내부 주석. 어느 사이트를 참조해 값을 채웠는지 미래 담당자를 위한 힌트
- **형식**: 대표 공식 사이트 URL

### ⑥ details [필수]

- **어디에**: "입국 요건" 섹션 표. `label` 24폭 볼드, `value` 나머지
- **왜**: 핵심 요건을 라벨-값 쌍으로 즉시 스캔
- **관례 라벨** (일관성 유지 위해 아래 목록 우선 사용):
    - `"입국신고서"` — 필요/불필요 명시 (`"❌ 불필요"`, `"📱 전자 (TDAC)"`)
    - `"비자"` — 무비자 일수 or 비자 종류
    - `"여권 유효기간"` — 예: `"6개월 이상"`, `"체류기간 + 1개월"`
    - `"시스템"` — TDAC / TDAC / ESTA / SGAC 등 공식 명칭
    - `"시행"` — `"2025.1.8부터 의무 적용"`
    - `"비용"` — `"£10"`, `"무료"`
    - `"유효기간"` — 허가 유효기간
    - `"처리기간"` — 신청 후 승인까지
    - `"필요 정보"` — 신청 시 준비물 (여권·항공권·숙소 등)
    - `"결과"` — `"QR 코드 이메일 발급"`
    - `"준비물"` — 왕복 항공권·숙소 예약 등
    - `"참고"` — 그 외 자유

### ⑦ warnings [필수 — 빈 배열이라도]

- **어디에**: 상태 배지 아래 노란 박스 (`bg-amber-50 border-amber-200`). 개수만큼 반복 표시. 배열이 비었으면 섹션 자체 미표시
- **왜**: 놓치면 탑승 거부·입국 지연 등 위험 사항 강조
- **형식**: 앞에 `⚠️` 이모지 붙여 시각 강조 (관례). 한 줄 문장 권장
- **미제공 시**: 필드가 `[]` (빈 배열)이어도 무방. 섹션이 사라짐

### ⑧ process [선택 — 신청 절차 있을 때만]

- **어디에**: "신청 절차" 섹션. 각 step 은 초록 원형 번호 배지 + 볼드 title + 회색 설명
- **왜**: 사용자가 실제로 손 움직여야 하는 절차 (ETA, TDAC 등) 안내
- **형식**:
    ```ts
    process: [
        { step: 1, title: "공식 사이트 접속", description: "tdac.immigration.go.th 접속" },
        { step: 2, title: "언어 선택", description: "한국어 선택 가능" },
        ...
    ]
    ```
- **미제공 시**: 신고서/허가 없는 국가(무비자·현장 스탬프)는 필드 자체 생략

### ⑨ links [권장]

- **어디에**: "유용한 링크" 섹션. 클릭 시 새 탭 열림
- **왜**: 사용자가 실제 신청·상세 확인하러 이동
- **형식**:
    ```ts
    links: [
        { label: "링크 텍스트", url: "https://...", type: "official", description: "선택" }
    ]
    ```
- **`type` 유효값 · 시각 결과**:

| type | 배지 | 색상 | 아이콘 | 언제 |
|---|---|---|---|---|
| `official` | 공식 | 초록 (emerald) | 🌐 지구본 | 정부·대사관·이민국 등 공식 사이트 |
| `blog` | 블로그 | 주황 (orange) | 📖 책 | 개인/커뮤니티 후기·팁 |
| `guide` | 가이드 | 남색 (indigo) | 🔗 링크 | 여행사·가이드 사이트 |

- **미제공 시**: 링크 섹션 자체 생략. 관례상 최소 공식 URL 1개는 권장.

---

## 4. 도시 → 국가 매핑 (`CITY_TO_COUNTRY`)

`entryCardGuide.ts:649` 의 `CITY_TO_COUNTRY` 는 **도시명(한글)** 을 국가 키에 매핑.

- 사용자는 여행지 선택 시 도시명이 카드 `city` 필드에 저장됨
- 팝업 진입 시 `getEntryCardInfo(city)` → `CITY_TO_COUNTRY[city]` → `ENTRY_CARD_DATA[countryCode]` 순 조회
- **부분 매칭**: 예를 들어 `"도쿄 (일본)"` 처럼 도시명이 포함되면 매칭됨 ([entryCardGuide.ts:767](../../../src/data/entryCardGuide.ts#L767))

새 국가 추가 시 매핑에 그 나라의 주요 도시들을 함께 등록해야 팝업이 뜬다.

---

## 5. 디폴트값 정책 (프로젝트 확정)

값을 확정할 수 없을 때 아래 정책 그대로 따름:

| 상황 | 정책 |
|---|---|
| `warnings` 배열 값 없음 | **`[]` (빈 배열)** — 필드는 유지 |
| `updatedAt` 값 불명 | **스킬 실행일** (예: `"2026-07-05"`) |
| `source` 값 확실치 않음 | **필드 생략** (팝업 미표시라 무해) |
| `process` 절차가 없는 국가 (무비자 자유) | **필드 생략** — 섹션 자동 숨김 |
| `links` 최소 1개 | 공식 사이트 URL 하나는 반드시 (`type: 'official'`) |
| `statusEmoji` | 위 §3 관례 표에서 매칭되는 것 하나 선택 |
| 상태 애매하면 | `⚠️` 이모지 + status 에 조건 명시 |

---

## 6. 필수 작업 (2 파일 위치, 2 단계)

### Step 1 — `ENTRY_CARD_DATA` 에 국가 항목 추가

`src/data/entryCardGuide.ts:7` 의 `ENTRY_CARD_DATA` 객체에 새 키(국가 코드, 영문 소문자)로 항목 추가.

**국가 코드 관례**: `vietnam`, `hongkong`, `france`, `uk`, `thailand` 등 영문 lowercase 표기. 두 단어면 붙임 (`southkorea`, `newzealand` 등).

`templates/country-entry.ts.tmpl` 복사해서 값 채움.

### Step 2 — `CITY_TO_COUNTRY` 에 도시 매핑 추가

`entryCardGuide.ts:649` 의 `CITY_TO_COUNTRY` 객체에, 해당 국가의 주요 관광 도시를 한글로 등록.

`templates/city-mapping.txt` 참조.

---

## 7. 검증

- [ ] TypeScript: `npx tsc --noEmit` 통과
- [ ] 로컬 검증: 여행지 선택 → 인박스 → "입국심사&필요사항" 카드 → **입국정보보기** 클릭 → 팝업 렌더링
    - country/status/statusEmoji 헤더 뜸
    - warnings 노란 박스 뜸 (없으면 미표시)
    - details 표 뜸
    - process 있으면 신청 절차 뜸
    - links 클릭 시 새 탭 이동
- [ ] 모바일: 팝업이 전체 화면 (`w-full h-full`), 스크롤 정상

세부 항목은 [checklist.md](./checklist.md) 참조.

---

## 8. 커밋

```
feat(entry-guide): <국가명> 입국 정보 추가

- ENTRY_CARD_DATA.<국가코드> 항목 추가 (status/details/warnings/process/links)
- CITY_TO_COUNTRY 에 주요 도시 N개 매핑

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

---

## 참고 파일

- 렌더링 동작 (필드 조합별 팝업 결과): [examples/rendering-behavior.md](./examples/rendering-behavior.md)
- 국가 항목 스켈레톤: [templates/country-entry.ts.tmpl](./templates/country-entry.ts.tmpl)
- 도시 매핑 스니펫: [templates/city-mapping.txt](./templates/city-mapping.txt)
- 검증 체크리스트: [checklist.md](./checklist.md)

---

## 자주 발생하는 실수

| 실수 | 증상 | 대응 |
|---|---|---|
| 국가 코드 중복 (`japan` 이미 있음) | TypeScript 에러 or 기존 항목 덮어씀 | grep 로 사전 확인 |
| `warnings: []` 대신 생략 | 타입 에러 (필수 필드) | 빈 배열이어도 반드시 필드 유지 |
| `type: 'guide'` / `'blog'` 대신 오타 (`'link'`) | TypeScript 에러 | union 3개 값만 |
| 도시명 오타 (`도쿄` vs `동경`) | 매핑 실패 → 팝업 "정보 없음" | 사용자가 실제 입력할 표기 우선 |
| `process` 있는데 step 번호 중복 | 렌더 이상 (같은 번호 두 개) | 1,2,3,... 순차 유지 |
| statusEmoji 를 국기로 오해 (`"🇹🇭"` 사용) | 상태 배지에 국기 뜸 (의도와 다름) | 국기는 country 에, 상태는 `✅📱✈️📋⚠️` |
