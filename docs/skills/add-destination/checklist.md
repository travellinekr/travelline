# 새 도시 추가 최종 검증 체크리스트

새 여행지 추가 커밋 전 순서대로 확인. 하나라도 실패하면 원인 해결 후 재검증.

---

## A. 파일 존재 여부

- [ ] `src/data/destinations.ts` 편집됨 (CityData 객체 1개 추가 + FALLBACK_IMAGES 항목 1개 추가)
- [ ] `src/data/cities/<slug>/` 폴더 생성됨
- [ ] 폴더 안에 4개 파일: `accommodations.ts`, `restaurants.ts`, `shopping.ts`, `transport.ts`
- [ ] `src/data/cities/index.ts` 편집됨 (import 4줄 + CITY_DATA 엔트리 1개 추가)

## B. 네이밍 일관성 (엄격)

아래 4개 값이 모두 서로 정확히 일치해야 함 (`<engName>` 은 새 도시의 영문명):

- [ ] `destinations.ts` CityData 의 `engName` 값
- [ ] `destinations.ts` FALLBACK_IMAGES 키 = `<engName>`
- [ ] `cities/index.ts` CITY_DATA 키 = `<engName>`
- [ ] `cities/<slug>/*.ts` 각 항목의 `city` 필드 = `<engName>`
- [ ] slug 폴더명 = `<engName>.toLowerCase().replace(/\s+/g, '-')`
- [ ] import alias 접두어 = slug 에서 하이픈 제거한 lowercase

**grep 검증 명령** (`<engName>`, `<slug>`, `<slugCamel>` 을 실제 값으로 치환):
```bash
grep -rn "<engName>\|<slug>\|<slugCamel>" src/data/
```

## C. 필드 유효성

- [ ] `airports[].code` 가 `src/data/airports.ts` 에 실제로 존재 (KOREAN_AIRPORTS 또는 MAJOR_AIRPORTS)
- [ ] `timezone` 이 실제 UTC 오프셋과 일치 (계절제 존재 여부 확인)
- [ ] `country` 필드가 한글 표기
- [ ] 남반구 도시일 때만 `hemisphere: 'south'` 명시 (기본값 north)
- [ ] `FALLBACK_IMAGES` URL 에 `?width=800` 파라미터 포함

## C-1. 프로젝트 디폴트값 정책 준수 (SKILL.md "디폴트값 정책" 표 참조)

- [ ] `showInInbox: true` 가 모든 카드에 설정됨 (누락된 항목 없음)
- [ ] `checkInTime` 실제 확인 못한 경우 `"15:00"` 사용
- [ ] `checkOutTime` 실제 확인 못한 경우 `"11:00"` 사용
- [ ] `reservation` / `taxRefund` / `appRequired` 확인 불가한 경우 필드 자체 생략 (false 로 채워넣지 않음)
- [ ] `type` 애매한 경우 프로젝트 fallback 사용 — 맛집 `local` · 쇼핑 `specialty` · 교통 `traditional`

## D. 데이터 좌표 유효성

`cities/<slug>/*.ts` 각 항목의 `coordinates`:
- [ ] lat: -90 ~ 90
- [ ] lng: -180 ~ 180
- [ ] 대상 도시의 실제 좌표 범위 내 (사전에 도시 중심 좌표 확인 후 항목이 그 근처인지 검증)
- [ ] 소수점 4자리 이상 (지도 정확도)

### D-1. 구글지도 원본 매칭 (필수 - SKILL.md "좌표 정확도" 섹션 참조)

- [ ] 좌표 수집 시 Google Maps 우클릭 → "이 위치의 좌표" 팝업 값을 그대로 복사·붙여넣기
- [ ] 소수점 자릿수 원본 그대로 유지 (반올림·절삭 금지)
- [ ] 각 카드 좌표 → Google Maps 검색창에 `<lat>, <lng>` 붙여넣기 → 원 장소 마커에 정확히 뜨는지 재확인
- [ ] AI 환각 좌표, Wikipedia/블로그 인용, 위성 이미지 대충 클릭한 좌표 없음

**참고**: TransportationData 는 coordinates 없음 (필드 자체 존재 X).

## E. 타입 체크

```bash
npx tsc --noEmit
```
- [ ] 에러 0건

## F. 로컬 런타임 검증

```bash
npm run dev
```

- [ ] 서버 정상 기동 (`http://localhost:3000` 접속 가능)
- [ ] 로그인 후 새 프로젝트 생성 → **여행지 픽커** 진입
- [ ] 해당 지역 탭 (japan / china_taiwan / se_asia / long_haul) 클릭
- [ ] 새 도시 카드 표시됨 (이미지 로드 실패 시 FALLBACK 표시 확인)
- [ ] 카드 클릭 → 인박스 열림 → 오류 없음
- [ ] **인박스 각 픽커** 열기:
  - [ ] 숙소 픽커 — 카드 목록 로드 (샘플 있으면 표시, 없으면 빈 상태)
  - [ ] 맛집 픽커 — 동일
  - [ ] 쇼핑 픽커 — 동일
  - [ ] 교통 픽커 — 동일

## G. 검색 흐름

- [ ] 여행지 픽커 검색창에 한글 도시명 입력 → 카드 노출
- [ ] 영문 도시명 입력 → 카드 노출

## H. 콘솔

- [ ] 브라우저 DevTools 콘솔에 새 도시 관련 오류 0건
- [ ] "카드가 useStorage 로 개별 조회..." 같은 성능 경고 없음

---

## 실패 시 트러블슈팅

| 증상 | 예상 원인 | 확인 |
|---|---|---|
| 지역 탭에 도시가 안 뜸 | destinations.ts 미편집 or 잘못된 region 배열에 push | `grep '<engName>' src/data/destinations.ts` |
| 카드에 이미지 회색 (fallback 로고) | FALLBACK_IMAGES 누락 or URL 오타 | 파일 하단 `FALLBACK_IMAGES` 재확인 |
| 픽커 진입 시 흰 화면·콘솔 `undefined` | cities/index.ts CITY_DATA 등록 누락 | `grep '"<engName>"' src/data/cities/index.ts` |
| 픽커에 목록이 나오지 않고 "카드 없음" | 각 데이터 항목의 `city` 필드 값이 engName 과 불일치 | `grep 'city:' src/data/cities/<slug>/*.ts` |
| 타입 에러 "XxxData 에 없는 속성" | 필드 오타 / 선택 필드를 필수처럼 사용 | cities/index.ts 상단 타입 정의 재확인 |
| 여러 도시가 겹쳐 표시 | slugCamel 별칭이 다른 도시와 충돌 | import alias 4개가 유일한지 grep |
