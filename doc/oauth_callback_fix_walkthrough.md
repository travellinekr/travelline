# Google OAuth 로그인 콜백 오류 수정 워크스루

## 수정 일시
2026-02-19

## 문제 요약

- **증상**: Google OAuth 로그인 후 콜백 처리 시 세션이 유지되지 않아 메인 페이지에서 로그인 안 된 상태로 보임
- **원인**: `auth/callback/route.ts`에서 브라우저용 `createClient`(supabase-js)를 서버 라우트에서 사용 → 세션 교환 후 쿠키에 저장이 안 됨

## 수정 내용

### 1. `@supabase/ssr` 패키지 설치
```bash
npm install @supabase/ssr
```

### 2. `src/app/auth/callback/route.ts` 수정

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| 클라이언트 | `createClient` (supabase-js) | `createServerClient` (@supabase/ssr) |
| 쿠키 처리 | ❌ 없음 | ✅ `cookies()` from next/headers |
| 세션 저장 | ❌ 쿠키에 저장 안 됨 | ✅ 쿠키에 자동 저장 |

## 검증 결과

- ✅ `npx tsc --noEmit` 타입 에러 없이 통과
- ✅ 서버 계속 정상 실행 중
