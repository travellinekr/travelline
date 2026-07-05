# 카드 인포 추가 검증 체크리스트

## A. 파일 구조

- [ ] `src/data/cities/<slug>/info/<category>.ts` 존재 (없으면 신규 생성)
- [ ] 파일이 `Record<string, XxxInfo>` 형태로 export default
- [ ] `import type { XxxInfo } from '@/data/card-info-types'` import 문 존재

## B. 키 정확 일치

- [ ] 각 인포 항목의 키가 원본 데이터 파일 (`cities/<slug>/<category>.ts`) 의 `name` 필드와 **글자 그대로 일치**
- [ ] 오타·공백·전각/반각 확인

## C. hasInfo 플래그

- [ ] 원본 데이터 항목에 `hasInfo: true` 세팅됨
- [ ] 인포 데이터 없는 카드는 `hasInfo` 미세팅 (undefined)
- [ ] **Picker `cardData` 에서 `hasInfo: card.hasInfo` (또는 `restaurant.hasInfo` 등 원본 필드) 전파 확인**
    - `src/components/board/{Accommodation,Food,Shopping,Transportation}Picker.tsx`
    - 샘플 카드 구성 객체 + `DraggableXxxCard` 내부 `cardData` **두 곳 모두**
    - 누락 시 팝업 dispatcher 가 `card?.hasInfo !== true` 로 판정 → **버튼은 뜨지만 클릭해도 팝업 안 뜸** (silent failure)

## D. 필수 필드

- [ ] 각 인포 객체에 `summary: string` 반드시 존재
- [ ] 나머지 필드는 값 없으면 필드 자체 생략 (undefined)

## E. 타입 유효성

- [ ] `npx tsc --noEmit` 에러 0
- [ ] `link.type` 이 `'official' | 'guide' | 'blog'` 중 하나
- [ ] `photos` URL 접근 가능 여부 (실제 로드 실패는 UI 에서 자동 숨김)

## F. 런타임 검증

- [ ] `npm run dev` → 해당 도시 선택
- [ ] 인박스 → 대상 카테고리 픽커 진입
- [ ] 대상 카드에 ⓘ 버튼 표시됨
- [ ] ⓘ 클릭 → 팝업 로딩 → 스키마 필드가 정확히 렌더

## G. 회귀 (매우 중요)

- [ ] preparation "입국심사&필요사항" 카드 → ⓘ → 팝업이 이전과 완전 동일
- [ ] 인포 데이터 없는 카드 → ⓘ 버튼 미표시 (기존 동작)
- [ ] tourspa 카드 → ⓘ 버튼 (있으면) 클릭 시 아무 반응 없음 (기존 동작)
- [ ] 카드 드래그·삭제·복사 정상
- [ ] 초기 진입 속도 회귀 0

---

## 자주 발생하는 실수

| 실수 | 증상 | 대응 |
|---|---|---|
| 키 이름 오타 (원본 name 과 불일치) | 팝업에 "정보 아직 등록 안 됨" | 원본 데이터 name 그대로 복붙 |
| `hasInfo: true` 누락 | 버튼 아예 안 뜸 | 원본 데이터에 추가 |
| Picker `cardData` 에 `hasInfo` 미전파 | 버튼은 뜨지만 팝업 안 뜸 | Picker 샘플 구성 + DraggableXxxCard 두 곳에 `hasInfo` 필드 추가 |
| 파일을 다른 경로에 배치 | 팝업 empty | `cities/<slug>/info/<category>.ts` 강제 |
| `link.type` 오타 | 타입 에러 | union 3개 값 |
| `summary` 누락 | 타입 에러 (필수) | 반드시 채움 |
| tourspa 카테고리에 등록 시도 | 반응 없음 | 이번 스코프 외 (add-card-info 미지원) |
