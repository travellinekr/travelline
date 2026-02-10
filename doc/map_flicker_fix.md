# 지도 깜빡임 버그 수정 완료

## 문제 상황
사용자가 지도 버튼을 클릭하면 지도가 정상적으로 표시되지만, 마우스를 지도 위에서 움직일 때마다 깜빡거리는 문제가 발생했습니다.

## 원인 분석

### 1차 문제: 지도 인스턴스 재생성
- **문제**: `useEffect`의 의존성 배열에 `markers`가 포함되어 있어, 마커가 변경될 때마다 지도 인스턴스가 재생성됨
- **증상**: 지도 전체가 깜빡임

### 2차 문제: 마커 재생성
- **문제**: 마커를 cleanup 함수에서 제거하고 매번 새로 생성하여 마커가 깜빡임
- **증상**: 지도는 안정적이지만 마커가 깜빡임

### 3차 문제: 불필요한 재렌더링
- **문제**: Timeline에서 `markers` 배열이 매 렌더링마다 새로운 참조로 생성됨
- **증상**: 마커가 실제로 변경되지 않았는데도 재생성 트리거

## 해결 방법

### 1. DayMapModal 수정 ([DayMapModal.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/DayMapModal.tsx))

#### useEffect 분리
```typescript
// 지도 초기화 (한 번만 실행)
useEffect(() => {
  if (!isOpen || !mapRef.current) return;
  if (googleMapRef.current) return; // 이미 생성되어 있으면 스킵
  
  const map = new google.maps.Map(mapRef.current, {
    center: { lat: 37.5665, lng: 126.978 },
    zoom: 12,
  });
  
  googleMapRef.current = map;
}, [isOpen]);

// 마커 업데이트 (실제 변경 시에만)
useEffect(() => {
  // 마커 배열이 실제로 변경되었는지 확인
  const currentMarkersString = JSON.stringify(
    markers.map(m => ({ id: m.id, lat: m.coordinates.lat, lng: m.coordinates.lng }))
  );
  
  if (currentMarkersString === previousMarkersStringRef.current) {
    return; // 변경 없으면 아무것도 하지 않음
  }
  
  previousMarkersStringRef.current = currentMarkersString;
  
  // 기존 마커 제거
  markersRef.current.forEach(m => m.setMap(null));
  markersRef.current = [];
  
  // 새 마커 추가
  markers.forEach((marker, index) => {
    const mapMarker = new google.maps.Marker({...});
    markersRef.current.push(mapMarker);
  });
}, [isOpen, markers]);
```

#### Ref 활용
- `markersRef`: 생성된 마커 인스턴스를 저장하여 재사용
- `infoWindowsRef`: InfoWindow 인스턴스를 저장하여 관리
- `previousMarkersStringRef`: 이전 마커 상태를 문자열로 저장하여 비교

### 2. Timeline 수정 ([Timeline.tsx](file:///Users/hwang-gyuhyeog/mindflows/src/components/board/Timeline.tsx#L62-L95))

#### useMemo로 메모이제이션
```typescript
import { memo, useState, useMemo } from "react";

const markers = useMemo(() => {
  if (!allCards) return [];
  
  const result = cards
    .map((card: any) => {
      const fullCard = (allCards as any).get?.(card.id);
      if (!fullCard?.coordinates) return null;
      
      return {
        id: card.id,
        title: card.text || fullCard.route || '위치',
        coordinates: fullCard.coordinates,
        category: fullCard.category || 'unknown',
      };
    })
    .filter(marker => marker !== null);
  
  return result;
}, [allCards, cards, title]);
```

## 결과

### ✅ 해결된 사항
1. **지도 깜빡임 해결**: 지도 인스턴스는 한 번만 생성되어 재사용
2. **마커 깜빡임 해결**: 
   - 마커가 실제로 변경되었을 때만 업데이트
   - JSON 비교로 불필요한 재생성 방지
3. **성능 개선**: useMemo로 markers 배열 메모이제이션

### 🔍 빌드 테스트
```bash
npm run build
✓ Compiled successfully in 2.1s
✓ Generating static pages using 7 workers (5/5)
```

## 기술적 개선 사항

### Before (문제 상황)
```typescript
// 매번 새로운 지도 + 마커 생성
useEffect(() => {
  const map = new google.maps.Map(...);  // 🔴 매번 생성
  markers.forEach(m => new google.maps.Marker(...));  // 🔴 매번 생성
  
  return () => {
    // cleanup에서 마커 제거 → 깜빡임
  };
}, [isOpen, markers]);  // 🔴 markers 변경 시마다 실행
```

### After (해결)
```typescript
// 지도는 한 번만 생성
useEffect(() => {
  if (googleMapRef.current) return;  // ✅ 이미 있으면 스킵
  const map = new google.maps.Map(...);
}, [isOpen]);

// 마커는 변경되었을 때만 업데이트
useEffect(() => {
  const markersString = JSON.stringify(markers);
  if (markersString === previousMarkersStringRef.current) return;  // ✅ 변경 확인
  
  // 마커 업데이트
}, [isOpen, markers]);
```

## 사용자 경험 개선
- 🎯 **부드러운 상호작용**: 마우스 이동 시 깜빡임 없이 지도 사용 가능
- 🎯 **빠른 응답**: 불필요한 재렌더링 제거로 성능 향상
- 🎯 **안정적인 UI**: 마커와 지도 모두 안정적으로 표시
