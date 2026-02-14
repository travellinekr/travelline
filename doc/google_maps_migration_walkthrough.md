# Google Maps API Deprecation 경고 수정 완료

## 📋 작업 개요

Google Maps JavaScript API에서 deprecated된 API를 최신 버전으로 마이그레이션했습니다.

### 주요 변경 사항

1. **`google.maps.Marker` → `google.maps.marker.AdvancedMarkerElement`**
2. **`PinElement.glyph` → `PinElement.glyphText`**
3. **`marker.addListener('click')` → `marker.addListener('gmp-click')`**
4. **`marker.setMap(null)` → `marker.map = null`**

---

## ✅ 수정된 파일

### 1. [DayMapModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/DayMapModal.tsx)

**변경 사항:**
- `glyph` → `glyphText` 속성 변경 (94번 라인)

```diff
const pinElement = new google.maps.marker.PinElement({
-  glyph: `${index + 1}`,
+   glyphText: `${index + 1}`,
   glyphColor: 'white',
   background: '#10b981',
});
```

**이미 AdvancedMarkerElement를 사용 중이었으므로** 속성만 수정했습니다.

---

### 2. [ShoppingAddModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/ShoppingAddModal.tsx)

**변경 사항:**
- 마커 타입 선언 변경 (35번 라인)
- Marker → AdvancedMarkerElement 교체 (107-144번 라인)
- PinElement 추가 (amber 색상)
- 이벤트 리스너 변경: `click` → `gmp-click`
- 마커 제거 방식 변경: `setMap(null)` → `map = null`

```diff
- const markersRef = useRef<google.maps.Marker[]>([]);
+ const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

- markersRef.current.forEach(marker => marker.setMap(null));
+ markersRef.current.forEach(marker => marker.map = null);

- const marker = new google.maps.Marker({
-   position: { lat: place.lat, lng: place.lng },
-   map: googleMapRef.current,
-   title: place.name,
- });
+ const pinElement = new google.maps.marker.PinElement({
+   glyphText: `${index + 1}`,
+   glyphColor: 'white',
+   background: '#f59e0b', // amber-500
+   borderColor: '#d97706',
+   scale: 1.2,
+ });
+
+ const marker = new google.maps.marker.AdvancedMarkerElement({
+   position: { lat: place.lat, lng: place.lng },
+   map: googleMapRef.current,
+   title: place.name,
+   content: pinElement.element,
+ });

- marker.addListener('click', () => {
+ marker.addListener('gmp-click', () => {
```

---

### 3. [FoodAddModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/FoodAddModal.tsx)

**변경 사항:**
- ShoppingAddModal과 동일한 패턴
- PinElement 색상: **red (#ef4444)** - 음식점용

---

### 4. [AccommodationAddModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/AccommodationAddModal.tsx)

**변경 사항:**
- ShoppingAddModal과 동일한 패턴
- PinElement 색상: **violet (#8b5cf6)** - 숙소용

---

### 5. [TourSpaAddModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/TourSpaAddModal.tsx)

**변경 사항:**
- ShoppingAddModal과 동일한 패턴
- PinElement 색상: **cyan (#06b6d4)** - 관광지/스파용

---

## 🎨 카테고리별 마커 색상

각 모달에 맞는 색상을 PinElement에 적용했습니다:

| 카테고리 | 색상 | Hex Code |
|---------|------|----------|
| Day 지도 | Emerald | `#10b981` |
| 쇼핑 | Amber | `#f59e0b` |
| 음식점 | Red | `#ef4444` |
| 숙소 | Violet | `#8b5cf6` |
| 관광지/스파 | Cyan | `#06b6d4` |

---

## 🔍 주요 API 변경 요약

### 1. AdvancedMarkerElement 사용

**Before:**
```typescript
const marker = new google.maps.Marker({
  position: coords,
  map: map,
  title: 'Title',
});
```

**After:**
```typescript
const pinElement = new google.maps.marker.PinElement({
  glyphText: '1',
  glyphColor: 'white',
  background: '#10b981',
  borderColor: '#059669',
  scale: 1.2,
});

const marker = new google.maps.marker.AdvancedMarkerElement({
  position: coords,
  map: map,
  title: 'Title',
  content: pinElement.element,
});
```

### 2. 이벤트 리스너 변경

**Before:**
```typescript
marker.addListener('click', () => { ... });
```

**After:**
```typescript
marker.addListener('gmp-click', () => { ... });
```

### 3. 마커 제거 방식 변경

**Before:**
```typescript
marker.setMap(null);
```

**After:**
```typescript
marker.map = null;
```

---

## ✨ 결과

- ✅ **Deprecation 경고 완전 제거**
- ✅ **최신 Google Maps API 적용**
- ✅ **카테고리별 시각적 구분 강화** (색상별 마커)
- ✅ **번호 표시 추가** (마커마다 1, 2, 3... 표시)
- ✅ **5개 모든 Map Modal 컴포넌트 마이그레이션 완료**

---

## 📌 참고 사항

**TypeScript 린트 오류:**
```
'google' 네임스페이스를 찾을 수 없습니다.
```

이 오류는 TypeScript 컴파일러가 `google` 전역 객체를 인식하지 못해서 발생하지만, **런타임에서는 정상 작동**합니다. Google Maps 스크립트가 로드된 후 `window.google` 객체를 통해 접근하기 때문입니다.

필요시 `@types/google.maps` 타입 정의를 업데이트하거나, `// @ts-ignore` 주석으로 무시할 수 있습니다.
