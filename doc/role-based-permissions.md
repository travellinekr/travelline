# 역할 기반 권한 시스템 구현 (RBAC)

## 개요
Liveblocks 인증을 `publicApiKey`에서 `authEndpoint` 방식으로 전환하고, Supabase `project_members` 테이블의 `role`을 기반으로 UI/서버 양측에서 권한을 제어합니다.

## 구현 날짜
2026-02-19

## 변경 파일 목록

| 파일 | 역할 |
|------|------|
| `src/app/api/liveblocks-auth/route.ts` | Liveblocks 서버 인증 API (신규) |
| `src/hooks/useRole.ts` | 현재 유저 role 조회 훅 (신규) |
| `src/app/Room.tsx` | `publicApiKey` → `authEndpoint` 전환 |
| `src/app/CollaborativeApp.tsx` | `useRole` 적용, DndContext/Timeline/Inbox에 `canEdit` 전달 |
| `src/components/board/Timeline.tsx` | `canEdit` prop 수신 및 하위 컴포넌트에 전파 |
| `src/components/board/DraggableCard.tsx` | `canEdit` 기반 드래그/삭제 비활성화 |
| `src/components/board/Inbox.tsx` | `canEdit` 기반 추가 버튼 숨김, Picker 쓰기 비활성화 |

---

## 권한 흐름

```
클라이언트 (Room.tsx)
  └→ Supabase 세션 토큰 추출
  └→ POST /api/liveblocks-auth { room, Authorization: Bearer <token> }
      └→ Supabase Admin으로 유저 확인
      └→ project_members에서 role 조회
      └→ owner/editor → FULL_ACCESS
         viewer → READ_ACCESS
```

## 역할 별 UI 제한

| 기능 | owner/editor | viewer |
|------|:---:|:---:|
| 카드 드래그 | ✅ | ❌ |
| 카드 삭제 | ✅ | ❌ |
| 카드 추가 버튼 | ✅ | ❌ |
| Picker 추가/삭제 | ✅ | ❌ |
| 데이터 조회 | ✅ | ✅ |

## 검증 결과
- `npx tsc --noEmit` → **오류 없음 (클린 통과)**
- `useSortable({ disabled: !canEdit })` 적용으로 viewer는 드래그 핸들 자체가 비활성화됨
- `DragListeners` 를 `canEdit ? listeners : {}` 로 조건 분기하여 touch/mouse event 차단

## useRole 훅 반환값

```typescript
{
  role: 'owner' | 'editor' | 'viewer' | null,
  loading: boolean,
  canEdit: boolean,    // owner || editor
  isOwner: boolean,
  isViewer: boolean,
}
```
