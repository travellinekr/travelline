# 공유 링크 뷰어 자동 등록 구현 완료

## 날짜
2026-02-20

## 변경 파일 요약

| 파일 | 변경 내용 |
|---|---|
| `src/app/api/projects/[projectId]/join/route.ts` | 🆕 신규 생성 |
| `src/app/auth/callback/route.ts` | ➕ 3줄 추가 |
| `src/hooks/useRole.ts` | ➕ 10줄 추가 |

## 동작 방식

### 시나리오 A: 비로그인 → 로그인 후
```
공유링크 → /login?redirect=/room/[roomId]
→ OAuth 인증 → /auth/callback?next=/room/[roomId]
→ callback에서 roomId 추출 → POST /api/projects/[roomId]/join
→ project_members에 viewer 등록
→ /room/[roomId] 리다이렉트
```

### 시나리오 B: 이미 로그인 상태에서 접속
```
공유링크 → /room/[roomId] → useRole 실행
→ project_members에 없음 → POST /api/projects/[roomId]/join
→ viewer 자동 등록
```

## 핵심 로직

### join/route.ts (신규)
- `POST /api/projects/[projectId]/join`
- 인증 쿠키로 로그인 사용자 확인
- Service Role로 `upsert + ignoreDuplicates` → 중복 방지

### auth/callback/route.ts (최소 수정)
```typescript
const roomMatch = next?.match(/^\/room\/([^/?]+)/);
if (roomMatch) {
    await fetch(new URL(`/api/projects/${roomId}/join`, origin), { method: 'POST' });
}
```

### useRole.ts (최소 수정)
- 기존 `data?.role ?? 'viewer'` → 미등록 시 join API 호출 후 `viewer` 설정
