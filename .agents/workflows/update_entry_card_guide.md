---
description: 여행 입국 가이드 데이터 자동 업데이트 (OpenClaw + Ollama + Naver Search MCP)
---

# 입국 가이드 자동 업데이트 워크플로우

## 목적
`/src/data/entryCardGuide.ts`의 국가별 입국 요건 정보를 최신 상태로 자동 업데이트한다.

## 사전 요건
- OpenClaw (웹 크롤링)
- Ollama + LLM (데이터 정형화)
- Naver Search MCP (한국어 블로그 검색)
- Node.js 파일 쓰기 권한

---

## 출력 데이터 스키마 (반드시 이 형식으로 출력)

```typescript
// LLM이 출력해야 할 TypeScript 데이터 구조

{
  countryKey: string,          // 예: "thailand", "japan"
  country: string,             // 이모지 + 국가명: "🇹🇭 태국"
  status: string,              // 한 줄 요약: "전자입국신고서 필수 (2025.5.1~)"
  statusEmoji: string,         // ✅ 무비자 | 📱 전자신고 | ✈️ 전자여행허가 | 📋 비자필수
  updatedAt: string,           // "YYYY-MM-DD" 형식
  source: string,              // 참조한 공식 URL

  details: [
    { label: string, value: string }   // 비자, 신청방법, 비용, 여권 유효기간 등
  ],

  warnings: string[],          // "⚠️ " 접두사 포함

  process: [                   // 신청이 필요한 경우만
    { step: number, title: string, description: string }
  ],

  links: [
    {
      label: string,
      url: string,
      type: "official" | "guide" | "blog",
      description: string      // 링크 한 줄 설명
    }
  ]
}
```

---

## 단계별 실행

### STEP 1: 수집 대상 국가 선정
업데이트할 국가를 결정한다. 기준:
- `updatedAt`이 6개월 이상 된 국가 우선
- 최근 입국 정책 변경이 있는 국가

### STEP 2: 공식 정보 수집 (OpenClaw)
다음 소스에서 크롤링:
- 대한민국 외교부: `https://www.mofa.go.kr` (국가별 안전정보 → 입국정보)
- 각국 이민국 공식 사이트 (아래 예시 참조)
- 대한항공/아시아나 여행정보 페이지
- 해당 국가 주한대사관 공식 사이트

| 국가 | 공식 URL |
|------|---------|
| 태국 | https://tdac.immigration.go.th |
| 일본 | https://vjw-lp.digital.go.jp/ko/ |
| 싱가포르 | https://www.ica.gov.sg |
| 필리핀 | https://etravel.gov.ph |
| 미국 | https://esta.cbp.dhs.gov |
| 호주 | https://immi.homeaffairs.gov.au |
| 인도 | https://indianvisaonline.gov.in |

### STEP 3: 블로그 가이드 링크 검색 (Naver Search MCP + OpenClaw 검증)

#### 3-1. 검색 쿼리
```
기본 쿼리: "[국가명] [시스템명] 신청방법 사진"

날짜 필터: 검색 시 "최근 6개월" 필터 적용

예시:
  "태국 TDAC 신청방법 사진"
  "싱가포르 SGAC 작성 방법 스크린샷"
  "일본 Visit Japan Web 등록 화면 캡처"
  "필리핀 eTravel 작성 가이드 사진"
```

#### 3-2. 링크 품질 기준 (반드시 모두 충족해야 함)

| 기준 | 필수 여부 | 설명 |
|------|---------|------|
| **화면 캡처/스크린샷 포함** | ✅ 필수 | 실제 신청 화면 사진이 있어야 함 (텍스트만 있으면 탈락) |
| **현재 기준 6개월 이내 작성** | ✅ 필수 | 작성일이 오늘 날짜 기준 6개월 이내인 글만 선택 |
| **실제 포스트 URL** | ✅ 필수 | 검색 결과 URL이 아닌 개별 포스트 직접 링크 |
| **항목별 입력 방법 포함** | 권장 | "여권번호 입력 시 이렇게 쓰세요" 같은 구체적 안내 |
| **현지 거주자 or 직접 경험** | 권장 | 실제 해본 사람이 쓴 글이 더 정확 |

#### 3-3. 블로그 탐색 절차

```
1. 검색 쿼리로 후보 5~10개 수집 ("최근 6개월" 필터 적용)
2. 각 URL 오픈 후 확인:
   a. 실제 화면 캡처 이미지가 있는가?
   b. 항목별로 어떻게 입력하는지 설명하는가?
   c. 작성일이 오늘 기준 6개월 이내인가? → 넘으면 탈락
   d. 최신 정책과 일치하는가? (공식 정보와 교차 검증)
3. 기준 충족 시 → 실제 포스트 URL 저장
4. 기준 미충족 시 → 다음 후보로 이동
5. 최대 2개 블로그 링크만 선택 (공식 링크와 합쳐 총 3개 이하)
   - 동일 기간 내 여러 후보 중 가장 **최신 날짜** 우선 선택
```

#### 3-4. label 명명 규칙 (중요!)

```
❌ 나쁜 예:
   "TDAC 가이드 (티스토리)"        ← 사이트 종류만 명시
   "블로그 가이드"                 ← 내용 불명확
   "신청방법 블로그"               ← 사이트명 없음

✅ 좋은 예:
   "[블로그명] - [내용 요약]"
   "조이의 태국 라이프 - TDAC 작성 완벽 가이드"
   "triple.guide - TDAC 단계별 신청 안내"
   "니코니코 태국 블로그 - SGAC 화면 캡처 가이드"

규칙:
- 블로그/사이트 이름을 앞에 명시
- 내용을 구체적으로 설명
- "(티스토리)", "(블로그)" 같은 플랫폼 표시 금지
```

#### 3-5. description 작성 규칙
```
description은 클릭 전에 어떤 도움이 되는지 알려줘야 함

❌ "단계별 신청 안내"    ← 너무 일반적
✅ "태국 거주자가 사진과 함께 단계별로 설명한 실전 가이드"
✅ "항공편·숙소 정보 입력 화면 캡처 포함"
✅ "부모님 대신 직접 작성한 후기 포함"
```

### STEP 4: LLM 정형화 (Ollama)
수집한 정보를 위의 스키마에 맞게 변환하는 프롬프트:

```
다음 여행 입국 정보를 아래 TypeScript 인터페이스 형식의 JSON으로 변환해줘.

[스키마 붙여넣기]

수집된 원본 정보:
[크롤링 결과 붙여넣기]

규칙:
1. details의 label은 10자 이내 한국어
2. warnings는 반드시 "⚠️ "로 시작
3. process는 신청이 필요한 경우에만 추가 (최대 8단계)
4. links.type: 공식사이트=official, 가이드=guide, 네이버블로그=blog
5. updatedAt은 오늘 날짜 (YYYY-MM-DD)
6. JSON만 출력, 설명 없이
```

### STEP 5: entryCardGuide.ts 업데이트
LLM 출력 JSON을 `ENTRY_CARD_DATA` 객체에 병합:

```javascript
// 업데이트 스크립트 예시 (Node.js)
const fs = require('fs');
const filePath = './src/data/entryCardGuide.ts';

// 기존 파일에서 countryKey 항목 찾아서 교체
// 없으면 ENTRY_CARD_DATA 객체 끝에 추가
// CITY_TO_COUNTRY도 새 도시명 추가
```

### STEP 6: 타입 검증
```bash
npx tsc --noEmit
```
에러 없으면 완료.

### STEP 7: Git 커밋
```bash
git add src/data/entryCardGuide.ts
git commit -m "data: [국가명] 입국 가이드 업데이트 (YYYY-MM-DD 기준)"
```

---

## 주의사항
- `links` 배열의 blog 타입 URL은 네이버 검색 쿼리 URL이 아닌 **실제 블로그 포스트 URL**을 사용해야 함
- 공식 정보와 블로그 정보가 다를 경우 **공식 정보 우선**
- `process`는 실제 신청이 필요한 국가만 추가 (무비자 무신청 국가는 생략)
- 정책 변경 예정 정보는 `warnings`에 명시, `details`에는 현재 유효한 정보만 기재
