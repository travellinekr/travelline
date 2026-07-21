# 참조 여행 일정 데이터 (Gemini 플래너용)

실제 사용자 여행기(네이버 블로그/카페, 유튜브 등)에서 **일정 뼈대**를 뽑아 모으는 곳.
Gemini 플래너가 이걸 참조해 **현실적인 동선·페이스·일자 구성**으로 계획을 짜게 하는 게 목적.

---

## 어디에 · 어떻게 저장하나

```
src/data/reference/
├── _types.ts          # 표준 스키마 (ReferenceItinerary)
├── README.md          # (이 파일)
├── nha-trang.json     # 도시별 파일 = ReferenceItinerary[]
├── osaka.json
└── ...
```

- **파일 1개 = 도시 1개.** 파일명 = `destinations.ts` 의 `engName` 을 소문자·하이픈으로 (`Nha Trang` → `nha-trang.json`).
- 파일 내용은 **배열** — 일정 1건씩 객체로 append.
- 스키마는 `_types.ts` 의 `ReferenceItinerary` 를 따른다. (TS 타입으로 검증됨)

## Gemini 가 읽는 방식 (위치)

수집만으로는 자동 반영 안 됨. `src/app/api/ai-planner/route.ts` 의 **generate 단계**에서
해당 도시 json 을 로드 → **압축 패턴**으로 요약해 프롬프트(GENERATE_SYSTEM)에 주입하는
배선이 필요하다. (배선은 별도 작업 — 데이터가 어느 정도 쌓이면 연결.)

즉 흐름:
```
reference/<city>.json  →  route.ts 가 로드·요약  →  Gemini 프롬프트에 "실제 패턴" 주입
```

---

## 작성 규칙 (중요)

1. **원문 문장·사진 저장 금지.** 장소명·일차·카테고리 같은 *사실*만. 링크는 `source.url` 에.
2. **category 는 앱 카테고리로** — `hotel / food / shopping / transport / tourspa / flight / other`. 모르면 `other`.
3. **시간은 오전/오후/저녁/밤** 4단계만. 정확한 시각 불필요.
4. **선택 필드는 애매하면 비워라.** 억지로 채우지 말 것 (`companion`, `month`, `area`, `note` 등).
5. **품질 > 수량.** 조회수·추천 많은, 동선이 뚜렷한 후기 위주로. 광고성/부실 일정은 제외.
6. `id` 는 겹치지 않게: `<city-slug>-<n>n<m>d-<companion>-<번호>` 예: `nha-trang-4n6d-couple-001`.

## 무엇을 남기면 Gemini 에게 도움이 되나

- **같은 날 묶이는 장소들** (동선) — 어떤 곳을 하루에 함께 도는지
- **당일치기 패턴** (호핑투어·근교 폭포 등이 며칠차에 오는지)
- **도착/출국일의 가벼움** — 첫날/마지막날 무엇까지 하는지
- **숙소 이동 시점** (시내→리조트 등)
- **카테고리 리듬** (마사지는 매일 저녁 등)

## 채우는 순서 (권장)

1. 후기 하나 고른다 → `source` 채움(link, platform, 대략 신뢰도)
2. 상단 메타: `city / nights / days / companion / month / pace / themes`
3. `plan[]` — 일차별로 방문 순서대로 `items` 나열 (name + category + timeOfDay + area)
4. `tips[]` — 도시 전반 요령 1~3줄 (원문 인용 말고 요지만)

> `nha-trang.json` 의 첫 항목이 **작성 예시**다. (source.url 이 EXAMPLE 이므로 실제 데이터로 교체/삭제)
