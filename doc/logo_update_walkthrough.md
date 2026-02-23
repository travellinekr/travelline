# 로고 업데이트 작업 내역

**작업일**: 2026-02-23

## 변경 내용

기존의 초록(emerald) 배경에 흰색 "T" 텍스트 로고를 새 SVG 로고로 교체.

### 새 로고 디자인
- **상단 가로 바**: 오렌지색(`#FF6B47`) — T자 가로획
- **타임라인 바 (4단)**: 오렌지 + 틸(`#5BBFAD`) 조합으로 간트차트/타임라인을 시각적으로 표현

## 수정 파일

| 파일 | 변경 내용 |
|---|---|
| `src/components/TravellineLogo.tsx` | [NEW] SVG 로고 컴포넌트 생성 |
| `src/components/dashboard/DashboardHeader.tsx` | 초록 T → TravellineLogo(size=32) 교체 (2곳) |
| `src/app/login/page.tsx` | 초록 T → TravellineLogo(size=56) 교체 (1곳) |

## 검증

- TypeScript 컴파일 오류 없음 (`npx tsc --noEmit` 통과)
- Hot Reload로 브라우저 즉시 반영
