# 스킬: 새 여행지 추가

Travelline `/src/data/` 에 **임의의 새 도시**를 추가하는 표준 절차. 에이전트(사람·AI 무관)가 이 문서를 읽고 그대로 따라 하면 실수 없이 완료 가능.

**최종 갱신**: 2026-07-05 (실제 코드 기준)

---

## 디폴트값 정책 (프로젝트 확정)

값을 확정할 수 없는 필드에 대한 프로젝트 표준. 개별 도시 데이터 채울 때 아래 정책 그대로 따름.

| 상황 | 정책 |
|---|---|
| `showInInbox` — 어떤 카드에 true 를 줄까? | **모든 카드에 `true`** (전부 인박스에 노출) |
| `checkInTime` 실제 시간 불명 | **`"15:00"`** (국제 관례) |
| `checkOutTime` 실제 시간 불명 | **`"11:00"`** (국제 관례) |
| `reservation` / `taxRefund` / `appRequired` 확인 불가 | **필드 자체 생략** (undefined) — 필요 시 담당자가 개별 판단 |
| `type` 이 애매한 맛집 | `local` (현지음식) |
| `type` 이 애매한 쇼핑 | `specialty` (전문점) |
| `type` 이 애매한 교통 | `traditional` (전통교통) |

정책 변경 시 이 표만 갱신하면 스킬 전체 방침 이동. 개별 파일마다 다르게 정하는 일 없음.

---

## 이 스킬의 사용 범위

- **어떤 도시든 적용 가능** (홍콩·런던·시드니·상관없음)
- 절차·규칙은 도시 무관 · 문서 안의 구체 값(도시명·좌표·이미지 URL)은 **입력 파라미터** 로 취급
- 필요한 입력 4개:
  1. `nameKo` — 한글 도시명 (예: `홍콩`, `런던`)
  2. `engName` — 영문 도시명 (공백 유지, 예: `Hong Kong`, `London`)
  3. `region` — 4개 지역 키 중 하나 (`japan` / `china_taiwan` / `se_asia` / `long_haul`)
  4. `country` — 한글 국가명 (예: `홍콩`, `영국`) — 홍콩은 도시=국가

문서 내 예시는 이해를 돕는 용도. **홍콩·오사카가 나온다고 그 도시 전용은 아님.**

---

## 1. 언제 이 스킬을 쓰는가

**사용**:
- 새로운 여행 도시를 `/src/data/` 에 추가할 때
- 기존 도시의 완전 재구축이 필요할 때

**사용 금지**:
- 기존 도시의 소소한 필드 수정 (그냥 해당 파일 직접 편집)
- 지역(RegionKey) 자체 추가 (별도 스킬 필요 — `destinations.ts` 의 union 타입 수정 + Inbox/Explore UI 지역 탭 확장)

---

## 2. 사전 확인 (3 분)

| 확인 항목 | 파일 / 근거 | 판단 |
|---|---|---|
| 도시명 (`nameKo` / `engName`) 결정 | — | 공백 포함 여부, 표기법 통일 |
| 어느 `region` ? | `src/data/destinations.ts` 의 `RegionKey` 타입 | `japan` / `china_taiwan` / `se_asia` / `long_haul` 중 하나 |
| 공항 코드가 있는가 | `src/data/airports.ts` | `KOREAN_AIRPORTS`, `MAJOR_AIRPORTS` 에서 IATA 코드 grep. 없으면 먼저 추가 |
| 입국 안내가 있는가 | `src/data/entryCardGuide.ts` | 국가 키 (`hongkong`, `japan`, `uk` 등) 검색. 있으면 재사용 |
| 대표 이미지 URL 확보 | Wikimedia Commons | Unsplash 실패 시 표시할 fallback. 없으면 앱은 회색 처리 |
| 국가·도시 좌표 대략 범위 | Google Maps | 이후 데이터 항목 좌표 유효성 검증용 |

---

## 3. 네이밍 규칙 (매우 중요)

**4 개 값이 반드시 서로 일치**해야 함. 일관성이 깨지면 카드가 안 뜨거나 픽커 필터 실패.

| 파생 값 | 정의 (파생 공식) | 사용처 |
|---|---|---|
| `engName` | 입력 그대로 (공백 포함) | `destinations.ts` CityData · `FALLBACK_IMAGES` 키 · `CITY_DATA` 키 · 각 data 항목 `city` 필드 |
| `slug` | `engName.toLowerCase().replace(/\s+/g, '-')` | `cities/<slug>/` 폴더명 |
| `slugCamel` | slug 에서 하이픈 제거한 lowercase | `cities/index.ts` 내부 import alias 접두어 |

### 파생 예시

| engName | slug | slugCamel |
|---|---|---|
| `Osaka` | `osaka` | `osaka` |
| `Hong Kong` | `hong-kong` | `hongkong` |
| `Da Nang` | `da-nang` | `danang` |
| `New York` | `new-york` | `newyork` |
| `Kuala Lumpur` | `kuala-lumpur` | `kualalumpur` |

⚠️ 공백은 오직 slug 단계에서만 하이픈. `engName` 은 UI 그대로 노출되므로 표기 유지.

---

## 4. 필수 작업 (5 단계, 3 파일)

이하 코드 스니펫의 `<...>` 자리는 위 파생 값으로 **모두 치환**.

### Step 1 — `destinations.ts` 에 CityData 추가

`src/data/destinations.ts` 의 해당 `<region>.cities` 배열 끝에 push.

```ts
{
    name: "<nameKo>",                                       // 한글, UI 표시
    engName: "<engName>",                                   // 영문, 정확히
    country: "<country>",                                   // 한글 국가명
    desc: "<한 줄 설명>",                                    // (예: "야경과 딤섬의 도시")
    tags: ["<태그1>", "<태그2>"],                            // 최대 2 개 권장
    landmark: "<Landmark English Name>",                    // Unsplash 검색 키워드
    airports: [{ name: "<한글 공항명>", code: "<IATA>" }],   // airports.ts 에 존재해야 함
    timezone: <UTC 오프셋 정수>,                             // (예: 8, 9, 1)
    // hemisphere: 'south',                                 // 남반구면만 명시 (기본 north)
    // subCities: [...],                                    // 다중 도시 여행일 때만
}
```

**필드 상세** (왜 수집하는가 · 미제공 시 · 어떤 값을 넣나):

| 필드 | 어디에 뜨나 / 왜 | 미제공 시 | 어떤 값을 넣나 |
|---|---|---|---|
| `name` [필수] | DestinationPicker 카드 제목 (사용자가 보는 도시명) | 도시 식별 불가 | 한글 도시명 (예: `홍콩`) |
| `engName` [필수] | FALLBACK_IMAGES · CITY_DATA · Unsplash 검색 키. 시스템 정규 키 | 이미지·데이터 매칭 전부 실패 | 영문 (공백 유지, 예: `Hong Kong`) |
| `country` [필수] | Inbox 도시 카드 description, 컨텍스트 판단 | fallback 처리 (계절 판정) | 한글 국가명 (예: `홍콩`, `일본`) |
| `desc` [권장] | DestinationPicker 카드 하단 한 줄 설명 | 빈 줄로 렌더 (선택) | "야경과 딤섬의 도시" 같은 서정적 설명 |
| `tags` [권장] | 각 카드 하단 최대 3개 태그 표시 | 태그 영역 미표시 | 최대 2개 권장: `["미식", "야시장"]` |
| `hemisphere` [선택] | Unsplash 계절 검색 (봄/여름/가을/겨울 반전) | 기본값 `'north'` (북반구) | 남반구 도시만 `'south'` (발리·시드니 등) |
| `landmark` [권장] | Unsplash 대표 이미지 검색 시 우선 키워드 | engName 만으로 검색 (덜 정확) | 영문 (예: `Victoria Peak`, `Eiffel Tower`) |
| `airports` [권장] | FlightForm 자동완성 기본값. 여행지 드래그 시 함께 이동 | 사용자 수동 검색 | `[{ name: "홍콩국제공항", code: "HKG" }]` — 코드가 airports.ts 에 존재해야 함 |
| `timezone` [필수] | 다중 도시 여행 시차 계산, sharedPlanSnapshot 저장 | 계산 오류 → 항공편 시간 왜곡 | UTC 오프셋 정수 (홍콩 `8`, 파리 `1`, 시드니 `10`) |
| `subCities` [특수] | 다중 도시 여행에서 도시별 chip 필터 (호주=시드니/멜버른 같은 경우) | 단일 도시 모드 | 다중 도시 없으면 필드 자체 생략 |

### Step 2 — `destinations.ts` 의 `FALLBACK_IMAGES` 에 이미지 추가

동일 파일 하단 `FALLBACK_IMAGES` 객체:

```ts
"<engName>": "https://commons.wikimedia.org/wiki/Special:FilePath/<파일명>?width=800",
```

**왜**: Unsplash API 는 7일 캐시 만료 시 재요청되지만 rate limit 초과나 네트워크 오류로 실패할 수 있음. 이 fallback 이 없으면 DestinationPicker 카드 배경이 회색(gray-200)으로만 표시됨.

**어떤 이미지**: Wikimedia Commons 에서 도시 대표 이미지 검색 → 파일 URL 뒤에 `?width=800` 파라미터로 리사이즈 서빙.

### Step 3 — `cities/<slug>/` 폴더 생성

```bash
mkdir -p src/data/cities/<slug>
```

### Step 4 — 폴더 안에 4 개 파일 생성

`templates/` 의 4 개 `.ts.tmpl` 을 복사하고 `.tmpl` 확장자 제거, 파일 안 `<engName>` 자리 치환:

```
src/data/cities/<slug>/
├── accommodations.ts
├── restaurants.ts
├── shopping.ts
└── transport.ts
```

배열은 처음엔 빈 `[]` 로 시작 가능 (샘플 없어도 앱 동작). 나중에 실제 데이터 채움.

### Step 5 — `cities/index.ts` 에 등록

`templates/city-index-entry.txt` 참조. 두 곳 편집.

**5-1. 파일 상단 import 블록** (기존 import 들 아래 이어붙임):
```ts
import <slugCamel>Accommodations from './<slug>/accommodations';
import <slugCamel>Restaurants from './<slug>/restaurants';
import <slugCamel>Shopping from './<slug>/shopping';
import <slugCamel>Transport from './<slug>/transport';
```

**5-2. `CITY_DATA` 객체 안에 엔트리 추가** (기존 도시들 사이 아무 위치):
```ts
"<engName>": {
    accommodations: <slugCamel>Accommodations,
    restaurants: <slugCamel>Restaurants,
    shopping: <slugCamel>Shopping,
    transport: <slugCamel>Transport,
},
```

---

## 필드 상세 요약 (cities/<slug>/*.ts)

각 데이터 파일의 필드별 상세 설명(왜 수집·미제공 시·유효값) 은 **각 템플릿(.ts.tmpl) 상단 주석**에 담아뒀다. 아래는 카테고리별 요약.

### AccommodationData 요약

| 필드 | 왜 | 유효값 |
|---|---|---|
| `type` | 카드 좌측 이모지 fallback | `hotel` 🏨 / `resort` 🏖️ / `airbnb` 🏠 / `hostel` 🛏️ / `guesthouse` 🏡 |
| `checkInTime` / `checkOutTime` | 카드 하단 토글 표시 | `"HH:MM"` 24시간제 (관례 15:00 / 11:00) |
| `showInInbox` | Picker 목록 노출 여부 | **모든 카드에 `true`** (프로젝트 정책, 상단 참조) |
| `coordinates` | 지도 마커 · 거리 계산 | 없으면 지도·정렬 미참여 |

### RestaurantData 요약

| 필드 | 왜 | 유효값 |
|---|---|---|
| `type` | 이모지 fallback + 카테고리 라벨 | `korean` 🍚 / `japanese` 🍣 / `chinese` 🥡 / `western` 🍴 / `italian` 🍝 / `french` 🥐 / `cafe` ☕ / `street-food` 🌭 / `fusion` 🍽️ / `local` 🥘 |
| `michelin` | 카드에 ⭐ 아이콘과 함께 표시 | `"★"` / `"★★"` / `"★★★"` / `"Bib Gourmand"` (없으면 필드 생략) |
| `reservation` | 예약 필수 플래그 | `true` = 예약 필수 / `false` = 워크인 (확인 불가 → 필드 생략) |
| `priceRange` | 카드 하단 가격대 | 현지 통화 기호 포함 (`"¥1,000~2,000"`) |
| `icon` | 카드 커스텀 이모지 | 없으면 type 기반 fallback 이모지 사용 |
| `showInInbox` | Picker 노출 | **모든 카드에 `true`** (프로젝트 정책) |

### ShoppingData 요약

| 필드 | 왜 | 유효값 |
|---|---|---|
| `type` | 이모지 fallback + 라벨 | `department-store` 🏬 / `mall` 🛍️ / `market` 🛒 / `outlet` 🏷️ / `duty-free` 🛂 / `convenience` 🏪 / `supermarket` 🥫 / `specialty` 🎁 / `boutique` 👗 / `souvenir` 🧸 |
| `taxRefund` | 카드에 "면세" 라벨 표시 | `true` = 관광객 세금 환급 지원 / `false` = 미지원 (확인 불가 → 필드 생략) |
| `specialItems` | 카드 하단 자유 텍스트 | 콤마 구분 (`"명품, 화장품, 식품관"`) |
| `showInInbox` | Picker 노출 | **모든 카드에 `true`** (프로젝트 정책) |

### TransportationData 요약

| 필드 | 왜 | 유효값 |
|---|---|---|
| `type` | lucide-react 아이콘 + 라벨 (지하철=Train / 버스=Bus / 택시=Car) | `subway` / `bus` / `tram` / `taxi` / `ride-hailing` / `rental-car` / `shuttle` / `airport-transfer` / `traditional` / `micromobility` |
| `appRequired` + `appName` | 카드에 📱 아이콘 + 앱 이름 조합 표시 | `true`+`"Uber"`처럼 함께 사용 (확인 불가 → 필드 생략) |
| `priceRange` | 카드 하단 emerald 강조 | 현지 통화 (`"HK$5~40"`) |
| `paymentMethods` | 현재 미렌더 (예약 필드) | `["교통카드명", "현금", "신용카드"]` |
| `showInInbox` | Picker 노출 | **모든 카드에 `true`** (프로젝트 정책) |
| **coordinates 없음** | 교통수단은 위치 아닌 서비스 개념 | — |

---

## 5. 선택 작업 (데이터 채우기)

앱은 빈 배열이어도 정상 동작 (Picker 에 "카드 없음" 표시). 실제 샘플 채우려면:

- **좌표**: 아래 "좌표 정확도" 섹션 규칙 준수 (구글지도 원본 값 그대로)
- **각 타입별 필드**: `examples/osaka-snippet.md` 를 열어 각 데이터 타입의 실제 필드 값 스타일 참고 (오사카는 참조 예시일 뿐, 값은 새 도시에 맞게 재작성)
- **권장 개수**: 카테고리별 5~10개
- **`showInInbox`**: **모든 카드에 `true`** (프로젝트 정책 — 상단 "디폴트값 정책" 표 참조)
- **`checkInTime` / `checkOutTime`**: 시설별 실제 시간 확인. 불명이면 `"15:00"` / `"11:00"` 사용
- **`type` 애매**: 맛집 → `local` / 쇼핑 → `specialty` / 교통 → `traditional`
- **boolean 필드 (`reservation`/`taxRefund`/`appRequired`)**: 확인 불가 시 **필드 자체 생략**

### 좌표 정확도 (필수)

`coordinates` 는 **구글지도 표시 값과 정확히 일치** 해야 지도 마커·거리정렬이 실제 위치와 맞는다. 대상: 숙소·맛집·쇼핑 (교통은 좌표 없음).

**표준 수집 절차**:

1. Google Maps 에서 대상 장소 검색 (예: `이치란 라멘 도톤보리`)
2. 지도 뷰(위성 아님) 에서 정확한 마커 지점 → **우클릭**
3. 팝업 최상단 좌표 (예: `34.6686, 135.5014`) → **클릭 = 클립보드 복사**
4. 데이터 파일에 그대로 붙여넣기:
    ```ts
    coordinates: { lat: 34.6686, lng: 135.5014 },
    ```
    (콤마 앞이 lat, 뒤가 lng — 순서 바꾸지 말 것)

**정확도 규칙**:

- Google Maps 가 표시한 **소수점 자릿수 그대로 유지** (반올림·절삭 금지)
- 4자리든 7자리든 원본 그대로: `34.6686` OR `12.2941855`
- 소수점 반올림하면 실제 위치에서 최대 수십 m 벗어나 마커가 옆 건물에 찍힘
- 자릿수 통일하려고 임의로 늘리거나 줄이지 말 것 (`34.6686` 을 `34.668600` 으로 늘려도 무의미하고, `34.6686000` 을 `34.6686` 으로 줄이면 정보 손실)

**금지 사항**:

- ❌ 위성 이미지 대충 클릭 → 실제 건물 위치와 다를 수 있음
- ❌ AI 에게 좌표 물어보기 → 환각 좌표 매우 흔함 (도시 중심 좌표를 특정 장소 좌표로 답변)
- ❌ 근처 랜드마크 좌표 대체 → 호텔이 랜드마크에서 100m 떨어져 있으면 100m 오차
- ❌ Wikipedia · 여행 블로그 인용 → 오래된 좌표·오탈자 흔함

**검증 (필수)**:

1. 좌표 붙여넣은 후 → Google Maps 검색창에 `<lat>, <lng>` (예: `34.6686, 135.5014`) 그대로 붙여넣기
2. 마커가 원래 의도한 장소에 뜨는지 확인
3. 위치 다르면 → 위 절차 1-4 재수행

**빠른 수집 워크플로 (여러 장소 한 번에)**:

여러 카드를 채워야 할 땐 Google Maps 를 한 번만 열고 순차 처리:
- 장소 A 검색 → 우클릭 → 좌표 복사 → 파일에 붙여넣기
- 다시 지도로 → 장소 B 검색 (검색창 재사용) → 우클릭 → 복사 → 붙여넣기
- 완료 후 마지막에 한꺼번에 검증 단계 실행

---

## 6. 검증

`checklist.md` 순서대로 확인.

**즉시 확인**:
1. `npx tsc --noEmit` — 타입 에러 0건
2. `npm run dev` → `http://localhost:3000` → 로그인 → 새 프로젝트 → **여행지 픽커** 진입 → 해당 region 탭 → 새 도시 카드 표시
3. 카드 클릭 → 인박스 열림 → **숙소/맛집/쇼핑/교통 픽커** 진입 시 오류 없이 로드

---

## 7. 커밋

한 번에 커밋 (파일 3+ 개 변경이지만 논리적으로 하나의 작업):

```
feat(data): <nameKo> 여행지 추가 — <region>

- destinations.ts 에 CityData + FALLBACK_IMAGES 추가
- cities/<slug>/ 폴더 4 개 파일 생성 (샘플 N개)
- cities/index.ts 에 import + CITY_DATA 등록

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

푸시·머지는 사용자 결정 대기.

---

## 참고 파일

- 절차 검증 리스트: [checklist.md](./checklist.md)
- 실제 데이터 필드 예시 (오사카 참조용): [examples/osaka-snippet.md](./examples/osaka-snippet.md)
- 스켈레톤 템플릿: [templates/](./templates/)

---

## 자주 발생하는 실수

| 실수 | 증상 | 대응 |
|---|---|---|
| `engName` 대소문자·공백 불일치 (`"hong kong"` vs `"Hong Kong"`) | 픽커에서 카드 안 뜸 | 4곳 (destinations · FALLBACK · CITY_DATA · data.city) 검색해서 정확히 일치시킴 |
| `cities/index.ts` 등록 누락 | 픽커 진입 시 `undefined` 참조 | Step 5 재확인 |
| 각 data 항목 `city` 필드 값이 engName 과 다름 (`"HongKong"` 등) | 픽커 필터 실패 → 목록에서 빠짐 | `grep 'city:' src/data/cities/<slug>/*.ts` |
| 공항 코드가 airports.ts 에 없음 | FlightForm 자동완성 실패 | airports.ts 에 먼저 추가 후 destinations.ts 편집 |
| `FALLBACK_IMAGES` 누락 | Unsplash 실패 시 회색 fallback | Wikimedia 파일 URL 추가 |
| `hemisphere: 'south'` 누락 (남반구 도시) | 계절 안내 반대로 표시 | 오세아니아·남미 등 남반구 도시는 반드시 명시 |

---

## 부록: 홍콩 사례 값 (참고)

에이전트가 홍콩을 실제 추가한다면 아래 값을 넣게 됨. **다른 도시는 값만 대체**하면 됨.

| 파라미터 | 값 |
|---|---|
| `nameKo` | `홍콩` |
| `engName` | `Hong Kong` |
| `slug` | `hong-kong` |
| `slugCamel` | `hongkong` |
| `region` | `china_taiwan` |
| `country` | `홍콩` |
| `timezone` | `8` |
| `airports` | `[{ name: "홍콩국제공항", code: "HKG" }]` (이미 airports.ts:96 존재) |
| 입국 안내 국가 키 | `hongkong` (이미 entryCardGuide.ts:25 존재) |

같은 방식으로 런던(`London` / `long_haul` / `LHR`·`LGW`), 시드니(`Sydney` / `long_haul` / `SYD`, hemisphere: south) 등 어떤 도시든 채워 넣기만 하면 동작.
