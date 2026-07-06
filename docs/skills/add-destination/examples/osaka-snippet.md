# 오사카 실제 필드 예시 (필드별 값 참고용)

`src/data/cities/osaka/` 4개 파일에서 실제 항목을 발췌. 새 도시 추가 시 각 필드가 어떤 값 스타일로 채워지는지 참조.

**전문 복사 금지** — 오사카는 이미 등록된 도시이므로 그대로 붙여넣지 말고 새 도시에 맞게 재작성.

---

## destinations.ts CityData (japan.cities)

```ts
{
    name: "오사카",
    engName: "Osaka",
    country: "일본",
    desc: "식도락과 유니버설 스튜디오",
    tags: ["미식", "테마파크"],
    landmark: "Osaka Castle",
    airports: [{ name: "간사이국제공항", code: "KIX" }],
    timezone: 9
}
```

## destinations.ts FALLBACK_IMAGES

```ts
"Osaka": "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Castle_02bs3200.jpg?width=800",
```

---

## cities/osaka/accommodations.ts (호텔)

```ts
{
    name: "센타라 그랜드 호텔 오사카",
    showInInbox: true,                             // 인박스 픽커에 표시
    type: "hotel",
    coordinates: { lat: 34.660291, lng: 135.5022983 },
    checkInTime: "15:00",
    checkOutTime: "12:00",
    city: "Osaka",                                 // engName 정확 일치
    description: "난바역 도보 5분, 간사이공항 라피트 이용 편리",
    tags: ["난바", "공항접근성"]
}
```

**포인트**: `showInInbox: true` 는 인박스 픽커 상단에 눈에 띄게 보이는 카드용. 대량 데이터 중 대표 4~5개만 true.

---

## cities/osaka/restaurants.ts (라멘 · 로컬 요리)

```ts
{
    name: "이치란 라멘 도톤보리",
    showInInbox: true,
    type: "japanese",                              // korean/japanese/chinese/... 중
    city: "Osaka",
    coordinates: { lat: 34.6686, lng: 135.5014 },
    cuisine: "라멘",                               // 대표 요리
    specialty: "돈코츠 라멘",                       // 시그니처 메뉴
    priceRange: "¥1,000~1,500",                    // 통화 기호 유지
    openingHours: "24/7",
    features: ["1인 좌석", "영어 메뉴", "24시간"],
    icon: "🍜"
}
```

```ts
{
    name: "키지 오코노미야키",
    showInInbox: true,
    type: "local",
    city: "Osaka",
    coordinates: { lat: 34.6954, lng: 135.497 },
    cuisine: "오코노미야키",
    specialty: "모던야키",
    priceRange: "¥1,000~2,000",
    reservation: true,                             // 예약 필수
    openingHours: "11:30-22:00",
    features: ["현지인 추천", "긴 대기", "직접 조리"],
    icon: "🥞"
}
```

**포인트**:
- `michelin` 필드는 미슐랭 등급 있을 때만 (`"★"`, `"Bib Gourmand"` 등 문자열)
- `type: "local"` 은 그 지역 특유 요리
- `icon` 은 이모지 한 글자 (감성 표현)

---

## cities/osaka/shopping.ts (백화점 · 쇼핑거리)

```ts
{
    name: "한큐 우메다 본점",
    showInInbox: true,
    type: "department-store",
    city: "Osaka",
    coordinates: { lat: 34.7024, lng: 135.4959 },
    category: "종합 백화점",
    specialItems: "명품, 화장품, 식품관",
    priceRange: "¥1,000~100,000+",
    openingHours: "10:00~20:00",
    taxRefund: true,                               // 택스 리펀드 지원
    features: ["택스 리펀드", "명품관", "식품관"],
    icon: "🏬"
}
```

**포인트**:
- `taxRefund: true/false` — 외국인 관광객 세금 환급 지원 여부
- `type` 이 `market` 이면 재래시장/쇼핑거리에 가까움

---

## cities/osaka/transport.ts (지하철 · 버스 · 택시)

```ts
{
    name: "Osaka Metro",
    showInInbox: true,
    type: "subway",
    city: "Osaka",
    description: "8개 노선, 깨끗하고 편리",
    availability: "5:00AM - 12:00AM",
    features: ["에어컨", "IC카드"],
    icon: "🚇"
}
```

**포인트**:
- TransportationData 는 `coordinates` 필드 **없음** (특정 위치가 아닌 서비스 개념)
- 택시/승차호출 앱은 `appRequired: true`, `appName: "Uber"` 등으로 표기

---

## cities/index.ts 등록 방식

```ts
// 파일 상단
import osakaAccommodations from './osaka/accommodations';
import osakaRestaurants from './osaka/restaurants';
import osakaShopping from './osaka/shopping';
import osakaTransport from './osaka/transport';

// CITY_DATA 내
"Osaka": {
    accommodations: osakaAccommodations,
    restaurants: osakaRestaurants,
    shopping: osakaShopping,
    transport: osakaTransport,
},
```

**포인트**: 각 데이터 파일 내부 변수는 단순히 `accommodations`, `restaurants` 등으로 이름 짓고, cities/index.ts 에서 default import 하며 `osakaAccommodations` 같은 alias 부여. 도시별로 이름 안 겹치게.
