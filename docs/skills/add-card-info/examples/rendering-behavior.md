# 렌더링 동작: 필드 조합 → 팝업 결과

**목적**: 실제 값 예시 아닌 **구조**만 놓고 팝업이 어떤 조합으로 그려지는지 시각화.

---

## 최소 (summary 만)

**입력**:
```ts
{ summary: "..." }
```

**팝업**:
```
헤더
─────────────────────
summary                              (updatedAt 없음)
─────────────────────
푸터
```

warnings, highlights, tips, photos, links, 카테고리 특유 섹션 모두 미표시.

---

## 공통 섹션 추가

**입력**:
```ts
{
    summary: "...",
    highlights: [...],
    warnings: ["..."],
    tips: ["..."],
    photos: ["..."],
    links: [{ type: 'official', ... }],
    updatedAt: "YYYY-MM-DD",
}
```

**팝업**:
```
summary        (updatedAt 기준)  ← 우측
warnings 노란 박스 × N
highlights ✓ 리스트
[카테고리 특유 섹션 없음]
tips 💡 리스트
photos 3열 갤러리
links 카드 (색상 3종)
```

---

## AccommodationInfoView — checkIn/checkOut 만

**입력**:
```ts
{
    summary: "...",
    checkIn: { time: "15:00" },
    checkOut: { time: "11:00" },
}
```

**팝업**:
```
summary
─────────────────────
체크인/아웃
┌──────────┬──────────┐
│Check-in  │Check-out │
│15:00     │11:00     │
└──────────┴──────────┘
```

---

## AccommodationInfoView — 완전체

**입력**: `checkIn`, `checkOut`, `breakfast`, `amenities`, `roomTypes`, `location` 모두 있음

**팝업**:
```
summary
warnings
highlights
─────────────────────
체크인/아웃 (그리드 2)
─────────────────────
조식 (포함/가격/시간/메뉴)
─────────────────────
부대시설 (뱃지 칩 그룹)
─────────────────────
객실 타입 (표)
─────────────────────
위치 (교통/랜드마크/공항 라벨/값)
─────────────────────
tips · photos · links
```

---

## RestaurantInfoView — 예약 + 메뉴

**입력**:
```ts
{
    summary: "...",
    reservation: { required: true, method: "네이버", url: "..." },
    menu: {
        signature: "돈코츠 라멘",
        items: [{ name: "...", price: "..." }, ...],
    },
    hours: "11:30-22:00",
}
```

**팝업**:
```
summary
─────────────────────
예약 (필수 여부 + URL 링크)
─────────────────────
메뉴
  시그니처 · 돈코츠 라멘
  ┌───────┬─────┐
  │ 항목1 │가격 │
  │ 항목2 │가격 │
  └───────┴─────┘
─────────────────────
기본 정보
  영업시간 · 11:30-22:00
```

- `reservation.url` 있으면 "예약 페이지 열기 ↗" 링크 자동
- `hours`, `waitTime`, `dressCode`, `payment` 는 "기본 정보" 표에 통합

---

## ShoppingInfoView — 택스 리펀드 강조

**입력**:
```ts
{
    summary: "...",
    taxRefund: { available: true, minAmount: "¥5,001 이상", method: "즉시 환급" },
    hours: "10:00-20:00",
    floors: "B2~10F",
}
```

**팝업**:
```
summary
─────────────────────
택스 리펀드
  ✓ 지원
  최소 금액 · ¥5,001 이상
  방법 · 즉시 환급
─────────────────────
기본 정보
  영업시간 · 10:00-20:00
  규모 · B2~10F
```

---

## TransportInfoView — 노선 + 앱

**입력**:
```ts
{
    summary: "...",
    fare: { base: "¥180~", ranges: [{ from: "A", to: "B", price: "¥240" }] },
    app: { required: false, name: "...", url: "..." },
    route: [{ name: "미도스지선", stations: ["A", "B", "C"] }],
    payment: ["ICOCA"],
}
```

**팝업**:
```
summary
─────────────────────
요금
  기본 · ¥180~
  A → B    ¥240        ← ranges 배열
─────────────────────
앱
  📱 앱 있음 (선택) · <앱명>
  [앱 페이지 열기 ↗]
─────────────────────
노선
  미도스지선
  [A] [B] [C]           ← 역 이름 뱃지
─────────────────────
기본 정보
  결제 · ICOCA
```

---

## 요약: 어떤 필드를 넣어야 어떤 섹션이 뜨나

| 팝업에 보이고 싶은 것 | 넣을 필드 |
|---|---|
| 큰 요약 텍스트 (필수) | `summary` |
| "언제 기준" 우측 표기 | `updatedAt` |
| 노란 경고 박스 여러 개 | `warnings: [...]` |
| ✓ 체크 불릿 리스트 | `highlights: [...]` |
| 💡 팁 불릿 | `tips: [...]` |
| 3열 썸네일 (클릭 → 새 탭) | `photos: [...]` |
| 색상 3종 링크 카드 | `links: [{type, ...}]` |
| **카테고리 특유 섹션** | 각 스키마 참조 |
