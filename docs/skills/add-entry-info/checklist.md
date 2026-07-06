# 입국 정보 추가 검증 체크리스트

`entryCardGuide.ts` 에 새 국가 · 도시 매핑 추가 후 커밋 전 확인. 데이터 값이 아니라 **구조 유효성** 중심.

---

## A. 필수 필드 존재

`ENTRY_CARD_DATA["<countryCode>"]` 항목에:

- [ ] `country: string` — 국기 이모지 + 국명 형식
- [ ] `status: string` — 한 줄 요약
- [ ] `statusEmoji: string` — `✅` / `📱` / `✈️` / `📋` / `⚠️` 중 하나
- [ ] `details: Array<{ label, value }>` — 최소 1개 이상
- [ ] `warnings: string[]` — 값이 없어도 `[]` 로 유지 (필드는 필수)

## B. 선택 필드 (있을 때만)

- [ ] `updatedAt` — `"YYYY-MM-DD"` 형식 (하이픈)
- [ ] `source` — URL 문자열
- [ ] `process` — 배열 원소 수 ≥ 1, `step` 필드 1,2,3... 순차 (중복 없음)
- [ ] `links` — 각 원소에 `type: 'official' | 'guide' | 'blog'` 중 하나

## C. 도시 매핑

`CITY_TO_COUNTRY` 에:

- [ ] 새 국가의 주요 도시 최소 1개 등록
- [ ] 값이 `ENTRY_CARD_DATA` 의 `<countryCode>` 와 정확히 일치 (오타 시 부분 매칭 실패)
- [ ] 도시명 표기가 destinations.ts 의 CityData 한글명(`name`) 과 일치

## D. 타입 체크

```bash
npx tsc --noEmit
```
- [ ] 에러 0건 (특히 union type 위반, 필수 필드 누락 잡힘)

## E. 런타임 렌더 확인

```bash
npm run dev
```

- [ ] 여행지 픽커에서 새로 추가한 국가의 도시 선택
- [ ] 인박스 → 여행준비 탭 → "입국심사&필요사항" 카드 노출
- [ ] 카드에 `info` 버튼(ⓘ) 표시 → 클릭 → 팝업 오픈
- [ ] 팝업 헤더에 국명 · 도시 · [읽기 전용] 뱃지 정상
- [ ] `updatedAt` 있으면 우측 상단에 "YYYY-MM-DD 기준" 표기
- [ ] `warnings` 있으면 노란 박스, 없으면 미표시
- [ ] `details` 표에 라벨/값 쌍 정렬
- [ ] `process` 있으면 초록 원형 번호 순서대로
- [ ] `links` 있으면 type 별 색상/뱃지 정상 (공식=초록, 블로그=주황, 가이드=남색)
- [ ] 링크 클릭 시 새 탭 오픈

## F. 팝업 미표시 케이스

- [ ] 국가 매핑이 없는 도시 선택 시 팝업에 "입국 정보를 찾을 수 없습니다" 텍스트 렌더 (에러 아님)
- [ ] 매핑 있는 도시 선택 시 정상 렌더

---

## 자주 발생하는 실수

| 실수 | 증상 | 대응 |
|---|---|---|
| `warnings` 필드 자체 생략 | 타입 에러 (필수 필드) | `warnings: []` 최소 유지 |
| `link.type` 오타 (`"link"` 등) | 타입 에러 or 색상 fallback 실패 | union 3개 값만 |
| `process.step` 중복 | 렌더 정상이지만 시각적 혼동 | 1,2,3,... 순차 |
| 도시 매핑 국가 코드 오타 | 팝업에 "정보 없음" 표시 | grep 로 정확 일치 확인 |
| `country` 에 국기 없음 | 헤더에서 국가 식별 어려움 | 관례상 국기 이모지 포함 |
| `statusEmoji` 를 국기로 사용 | 상태 배지에 국기 뜸 (의도와 다름) | 국기는 `country`, 상태는 5개 관례 이모지 |
