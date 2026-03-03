# 스크롤 레이아웃 개선 작업

작업일: 2026-03-03

## 작업 내용

### 1. 카테고리 탭 삭제
- `explore/page.tsx`, `explore/[city]/page.tsx`에서 `교통(transport)`, `기타(other)` 카테고리 제거
- 관련 아이콘 import (`Bus`, `MoreHorizontal`) 삭제

### 2. 여행보드 (CollaborativeApp) 스크롤 구조 개선
| 파일 | 변경 내용 |
|---|---|
| `src/app/CollaborativeApp.tsx` | Timeline 스크롤 div에 `min-h-0` 추가 |
| `src/app/CollaborativeApp.tsx` | Inbox 래퍼를 `flex-1 flex flex-col min-h-0`으로 변경 |
| `src/app/CollaborativeApp.tsx` | `body { overflow: hidden }` 추가 → 여행보드 페이지 메인 스크롤 차단 |
| `src/components/board/Inbox.tsx` | 스크롤 div에 `min-h-0` + `custom-scrollbar` 유지 |

**결과**: 타임라인, Inbox 각자 독립 스크롤. 메인 페이지 스크롤 없음.

### 3. Explore 페이지 스크롤 구조 개선

#### `explore/layout.tsx`
```
before: min-h-screen flex flex-col
after:  h-screen overflow-hidden flex flex-col
        children: flex-1 min-h-0 flex flex-col overflow-hidden
```

#### `explore/page.tsx` 구조 재설계
```
div.flex.flex-col.h-full.overflow-hidden
  ├── 지역 탭 (shrink-0, 고정)
  ├── [도시 미선택] flex-1 overflow-y-auto always-scrollbar
  │     └── 도시 그리드 (스크롤 가능)
  └── [도시 선택 후] flex-1 min-h-0 flex flex-col overflow-hidden
        ├── 도시 헤더 + 카테고리 탭 (shrink-0, 고정)
        └── 카드+지도 영역 flex-1 min-h-0 flex gap-4
              ├── 좌: 검색바(고정) + 카드리스트(always-scrollbar, pr-3)
              └── 우: 단일 스크롤 프레임(always-scrollbar)
                    ├── 지도 (mx-3 mt-3 rounded-xl)
                    └── 설명 (px-4 pr-6 py-4)
```

**결과**:
- 메인 페이지 스크롤 없음 (우측 브라우저 스크롤바 제거)
- 좌측 카드 리스트 독립 스크롤
- 우측 지도+설명 단일 스크롤 프레임

### 4. CSS 추가 (`globals.css`)
```css
/* 항상 보이는 스크롤바 */
.always-scrollbar::-webkit-scrollbar { width: 4px; }
.always-scrollbar::-webkit-scrollbar-track { background: transparent; }
.always-scrollbar::-webkit-scrollbar-thumb { background: rgba(156,163,175,0.4); border-radius: 20px; }
```

## 수정 파일 목록
- `src/app/CollaborativeApp.tsx`
- `src/components/board/Inbox.tsx`
- `src/app/explore/layout.tsx`
- `src/app/explore/page.tsx`
- `src/app/explore/[city]/page.tsx`
- `src/app/globals.css`
