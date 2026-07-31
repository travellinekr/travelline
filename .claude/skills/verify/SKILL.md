---
name: verify
description: 배포 전 수정사항 검증. 커밋 안 된 변경(diff)이 기존 로직·기능·전역 CSS를 깨지 않는지 tsc·build·grep으로 확정하고 위험도를 표로 보고한다. "배포 전 확인", "수정한 거 문제없는지 검증", "커밋/배포해도 되는지" 요청 시 실행.
---

# 배포 전 수정사항 검증 (verify)

목적: 커밋 안 된 변경분이 **기존 로직·기능·전역 스타일을 깨지 않는지** 확정한 뒤에만 배포하도록. "괜히 잘못 고쳐서 전체가 깨지는" 사고 방지.

아래 절차를 **순서대로** 실행하고, 마지막에 판정 표를 보고한다. 사용자가 "배포까지"라고 명시하지 않았으면 커밋/푸시는 하지 말고 검증 결과만 보고한 뒤 배포 여부를 물어본다.

## 1. 변경 범위 파악
- `git status --short` — 변경/미추적 파일 목록
- `git diff` 로 tracked 변경 리뷰. 미추적(신규) 파일은 `Read` 로 내용 확인
- 판단: 각 변경이 **추가(additive)** 인가, **기존 코드 수정/삭제** 인가 구분.
  기존 로직을 바꿨다면 그 이유·영향 범위를 반드시 명시.

## 2. 스코프 오염 점검
- 새로 도입한 CSS 클래스/유틸/함수/전역 값이 **의도한 곳에만** 쓰였는지 grep
  (예: 새 클래스면 `grep -rn "<새클래스>" src/` → 딱 의도한 위치들 + 정의부만 나와야 함)
- 전역 파일(`src/app/globals.css`, `src/app/layout.tsx`, tailwind 설정 등) 변경 시:
  기존 규칙을 건드렸는지 vs **append-only** 인지 확인. 기존 규칙 수정이면 강하게 의심.

## 3. 타입 검사
- `npx tsc --noEmit` 실행 → **실코드 오류 0** 확인.
- 되돌린 라우트 등의 `.next/types/**` stale 오류(`Cannot find module '.../page.js'`)는
  실제 오류 아님 → `grep -v "\.next/types"` 로 걸러서 판단. 필요시 `rm -rf .next/types/app/<route>` 후 재확인.

## 4. 빌드 검증 (전역 안 깨짐 확정 — 핵심 단계)
- dev 서버가 떠 있으면 잠깐 중지(`pkill -f "next dev"`; `.next` 충돌 방지).
- `npm run build` 실행 →
  - 전체 페이지 빌드 **성공**(에러 0)
  - **CSS/Tailwind 컴파일 에러 0** (globals.css 문법 오류가 있으면 여기서 터짐)
  - 주요 라우트(특히 `/room/[roomId]`) **번들 크기 급증 없음**(변경 전과 비교)
  - 신규/삭제한 라우트가 목록에 올바르게 반영됐는지
- 검증 후 필요하면 dev 서버 재시작(`rm -rf .next && npm run dev` 백그라운드).

## 5. 이 프로젝트 특유 회귀 점검
CLAUDE.md 규칙 + 이 앱의 알려진 리스크를 기준으로 점검:
- **안전영역(pt-safe/pb-safe/env)**: 앱 전용 스코프(`html.cap-native`) 유지되어 **웹/데스크톱 영향 0** 인지.
  웹에 영향 주는 변경이면 "모바일 웹 절대 영향 없게" 원칙 위반 → 사용자에게 경고.
- **네이티브 설정**(`capacitor.config.ts`, Info.plist 등) 변경이면: 웹 배포로는 반영 안 됨 →
  `npx cap sync/copy` + 앱 재빌드 필요함을 명시(docs/ios-build-and-test.md 참고).
- **Liveblocks mutation 패턴**(mutation 내부는 `.get('prop')`), **dnd-kit 드래그**, **모달 z-index 충돌**.
- **useEffect 의존성/타이밍**으로 인한 기존 동작 변화(예: 스크롤 위치 리셋 등)는
  "의도된 동작 변화"로 사용자에게 **명시적으로** 보고.

## 6. 판정 보고
아래 형태의 표로 요약하고 결론을 분명히:

| 검증 | 결과 |
|---|---|
| diff 성격 | additive / 기존수정 (수정이면 무엇을) |
| 스코프 | 의도한 곳에만 / 오염 |
| tsc | 통과 / 오류 |
| build | 성공(번들 동일) / 실패 |
| 웹·데스크톱 영향 | 0 / 있음(무엇) |
| 의도된 동작 변화 | 없음 / 있음(무엇) |

- 결론: **"기존 로직·기능 깨짐 없음"** 또는 **"주의 필요 항목: …"** 을 한 줄로.
- 배포(커밋/푸시/머지)는 사용자 승인 후 진행. 이 프로젝트 배포 흐름:
  feature 브랜치 → 커밋 → `git checkout main` → `git merge --no-ff` → `git push origin main`(Vercel 자동 배포).
  커밋 메시지 끝에 `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
