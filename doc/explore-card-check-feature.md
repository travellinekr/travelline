# Explore 카드 체크 → 여행계획 추가 기능

작업일: 2026-03-03

## 기능 개요

Explore 페이지에서 맛집/숙소 카드를 체크하고, 원하는 여행계획의 보관함(Inbox)에 바로 추가할 수 있는 기능.

## 구현 흐름

```
1. 카드 오른쪽 ○ 체크버튼 클릭
   → 주황색 ✓ 으로 변경 (복수 선택 가능)

2. 검색바 오른쪽 [+ 내 여행계획] 버튼 활성화
   → 체크된 카드 수 뱃지 표시

3. 버튼 클릭 → 플로팅 드롭다운
   → Supabase에서 내 여행계획 목록 표시

4. 여행계획 선택
   → localStorage에 explore_queue_{projectId} 저장
   → 토스트: "✓ N개 카드를 「프로젝트명」에 추가했어요!"
   → 체크 초기화

5. 해당 여행보드 접속 시
   → CollaborativeApp 마운트 후 1.2초 딜레이
   → createCard mutation으로 inbox에 카드 추가
   → localStorage 큐 삭제
   → 토스트: "✈️ Explore에서 N개 카드가 보관함에 추가됐어요!"
```

## 수정 파일

| 파일 | 변경 내용 |
|---|---|
| `src/app/explore/page.tsx` | 체크버튼, 플로팅 메뉴, 토스트, localStorage 저장 |
| `src/app/CollaborativeApp.tsx` | explore_queue 처리 useEffect (마운트 시 inbox 추가) |
| `src/app/globals.css` | always-scrollbar 클래스 추가 |

## 빌드 결과

빌드 성공 (Exit code: 0)
- /explore 페이지: 7.69 kB
- /room/[roomId]: 562 kB

## 주요 구현 세부사항

- **체크 상태**: `Map<string, ExploreCardQueue>` — 카드 key(food-이름-도시)로 관리
- **플로팅 메뉴**: `useRef + mousedown 외부 클릭` 감지로 닫기
- **localStorage 키**: `explore_queue_{projectId}` — 누적 추가 가능
- **딜레이 1200ms**: Liveblocks 스토리지 준비 대기 후 카드 생성
- **food 카드**: `category: 'food'`, **hotel 카드**: `category: 'hotel'`

