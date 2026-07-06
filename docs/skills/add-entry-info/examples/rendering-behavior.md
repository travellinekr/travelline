# 렌더링 동작: 어떤 필드를 넣으면 팝업이 어떻게 보이나

**목적**: 실제 데이터 값에 관심 없이, **구조**만 놓고 팝업이 어떤 조합으로 그려지는지 시각화. 데이터 채우기 전에 어떤 필드를 준비해야 할지 판단용.

---

## 필드 조합에 따른 렌더 결과

### 최소 (필수 5개만)

**입력 구조**:
```ts
{
    country: "...",
    status: "...",
    statusEmoji: "...",
    details: [{ label, value }, ...],
    warnings: [],
}
```

**팝업 렌더**:
```
헤더
─────────────────────
① 상태 배지 (country/status/statusEmoji)
─────────────────────
③ 입국 요건 (details 표)
─────────────────────
푸터
```

- ②경고, ④신청 절차, ⑤유용한 링크 섹션 모두 **미표시**
- warnings 는 빈 배열이므로 노란 박스 없음
- process, links 필드 자체를 안 넣었으므로 각 섹션 렌더 스킵

---

### 표준 (최소 + 링크 + 갱신일)

**입력 구조**:
```ts
{
    country: "...",
    status: "...",
    statusEmoji: "...",
    updatedAt: "YYYY-MM-DD",
    details: [...],
    warnings: [],
    links: [
        { label, url, type: 'official' },
    ],
}
```

**팝업 렌더**:
```
헤더
─────────────────────
① 상태 배지  ...  (updatedAt 기준)   ← 우측에 회색 작은 텍스트 추가
─────────────────────
③ 입국 요건 (details 표)
─────────────────────
⑤ 유용한 링크 (초록 뱃지 [공식])
─────────────────────
푸터
```

---

### 경고 있는 케이스

**입력 구조** (warnings 만 배열에 값 추가):
```ts
{
    ...,
    warnings: [
        "⚠️ 문장 1",
        "⚠️ 문장 2",
    ],
}
```

**팝업 렌더**:
```
① 상태 배지
─────────────────────
② 노란 경고 박스 (⚠️ 문장 1)
② 노란 경고 박스 (⚠️ 문장 2)      ← 배열 개수만큼 박스 반복
─────────────────────
③ 입국 요건 표
...
```

- warnings 배열 원소 하나가 노란 박스 하나
- 문장 앞에 `⚠️` 이모지를 붙이는 게 관례 (컴포넌트가 자동으로 붙이진 않음)

---

### 신청 절차 있는 케이스 (ETA/TDAC 등)

**입력 구조** (process 필드 추가):
```ts
{
    ...,
    process: [
        { step: 1, title: "...", description: "..." },
        { step: 2, title: "...", description: "..." },
        ...
    ],
}
```

**팝업 렌더**:
```
③ 입국 요건 표
─────────────────────
④ 신청 절차
    ①  Title              ← 초록 원형 번호 배지 (step)
       description         ← 회색 작은 설명
    ②  Title
       description
    ③  ...
─────────────────────
⑤ 유용한 링크
```

- step 은 정수, 1부터 순차 (중복 X)
- title 볼드, description 은 아래쪽에 회색

---

### 링크 3종류 섞은 케이스

**입력 구조**:
```ts
links: [
    { type: 'official', label: "...", url: "...", description: "..." },
    { type: 'blog',     label: "...", url: "...", description: "..." },
    { type: 'guide',    label: "...", url: "...", description: "..." },
]
```

**팝업 렌더** (색상/아이콘/뱃지 자동):
```
⑤ 유용한 링크
   🌐 label   [공식]     ← 초록 배경 (emerald-50)
      description
   📖 label   [블로그]   ← 주황 배경 (orange-50)
      description
   🔗 label   [가이드]   ← 남색 배경 (indigo-50)
      description
```

- `type` 값 하나가 색상 + 아이콘 + 뱃지 세 가지를 동시에 결정
- description 이 없으면 라벨만 표시 (설명 줄 생략)

---

### 완전체 (모든 섹션 사용)

**입력 구조**:
```ts
{
    country: "...",
    status: "...",
    statusEmoji: "...",
    updatedAt: "YYYY-MM-DD",
    source: "...",              // 렌더 안 됨 (내부 참조)
    details: [...],
    warnings: ["⚠️ ..."],
    process: [{step, title, description}, ...],
    links: [{label, url, type, description}, ...],
}
```

**팝업 렌더** (5개 섹션 모두):
```
헤더 · 도시명 · [읽기 전용]
─────────────────────
① statusEmoji  status                 (updatedAt 기준)
─────────────────────
② ⚠️ warnings 노란 박스 × N
─────────────────────
③ 입국 요건 (details 표)
─────────────────────
④ 신청 절차 (process 번호 리스트)
─────────────────────
⑤ 유용한 링크 (links 카드)
─────────────────────
📅 실제 여행 전 최신 정보 확인    [닫기]
```

---

## 요약: "이걸 보여주고 싶다 → 이 필드를 넣어라"

| 팝업에 보여주고 싶은 것 | 넣을 필드 |
|---|---|
| 상단 국가 + 한 줄 요약 | `country`, `status`, `statusEmoji` (필수) |
| "언제 기준 정보인지" 우측 표기 | `updatedAt: "YYYY-MM-DD"` |
| 여러 개의 노란 경고 박스 | `warnings: ["...", "..."]` |
| 라벨/값 형태의 요건 표 | `details: [{ label, value }, ...]` (필수) |
| 번호 매긴 신청 절차 | `process: [{ step, title, description }, ...]` |
| 외부 사이트 이동 카드 (색상 3종) | `links: [{ label, url, type, description? }, ...]` |
| **팝업에 안 보이는 내부 메모** | `source: "..."` |

**팝업 안 보이는 것**: `source` 는 렌더링에서 제외. 오직 데이터 파일 안에서 참조용.
