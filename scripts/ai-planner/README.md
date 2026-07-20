# AI 플래너 테스트 하니스

실행 중인 dev 서버의 `/api/ai-planner` 에 시나리오를 던지고 결과를 자동 검증한다.
**Gemini 실호출**이라 "모델이 실제로 어디서 어긋나는지"까지 드러난다 → 브라우저에서 손으로 발견하기 전에 회귀를 잡는다.

## 실행

먼저 dev 서버가 켜져 있어야 한다 (`npm run dev`).

```bash
npm run test:ai                  # 전체 케이스 1회
npm run test:ai -- --repeat=3    # 각 케이스 3회 → 통과율(비결정성 확인)
npm run test:ai -- --filter=편집  # 이름에 '편집' 들어간 케이스만
npm run test:ai -- --list        # 케이스 목록만
AI_HARNESS_URL=http://localhost:3001 npm run test:ai   # 다른 포트
```

- `✓` 하드 체크 통과 · `✗` 하드 실패(→ exit 1) · `⚠` 소프트 경고(모델 재량, exit 0)
- **하드** = 반드시 지켜야 할 구조·규칙(일수 범위, 카테고리, 중복 방지, 편집 모드 등)
- **소프트** = 모델 판단이라 "되면 좋음"(동선 품질, tier 매칭, 일본 추천 등). `--repeat=5` 로 통과율을 보면 체감이 정확하다.

## 케이스 추가 (여기가 핵심)

`cases.mjs` 배열에 객체 하나 추가하면 끝. 이 파일(runner)은 건드릴 필요 없다.

```js
{
  name: '편집: 4일차 카페 추가',
  phase: 'generate',
  setup: async (h) => ({ currentPlan: await h.planFor('Osaka', 5) }), // 현재 일정 fixture
  request: (s) => ({
    phase: 'generate', destinationEngName: 'Osaka',
    requirements: { dayCount: 5, intent: 'edit', notes: '4일차에 카페 하나 추가' },
    currentPlan: s.currentPlan,
  }),
  checks: [
    ['4일차에만',   (d) => (d.plan?.days || []).every((x) => x.day === 4)],
    ['1곳만 추가',  (d) => (d.plan?.days || []).flatMap((x) => x.items).length <= 1],
  ],
}
```

- `checks` 항목: `['설명', (data, meta) => true|false|'실패이유']` — 문자열을 반환하면 그 이유와 함께 실패로 표시된다.
- 모델 재량 항목은 `{ soft: true }` 를 세 번째 요소로.
- `meta = { status, sent, setup }` — `setup` 으로 fixture(현재 일정 등)를 체크에서 다시 참조할 수 있다.
- `h.planFor(dest, days)` 는 generate 를 한 번 호출해 `currentPlan` 형태로 변환하고 **캐시**한다(크레딧 절약).

## 새 버그를 발견하면

1. 재현하는 케이스를 `cases.mjs` 에 추가한다 (실패하는 걸 먼저 확인).
2. 로직/프롬프트를 고친다.
3. `npm run test:ai -- --filter=<그 케이스>` 로 통과 확인.
4. 나머지 전체 돌려 회귀 없는지 확인.

→ 케이스가 쌓일수록 "발견될 때마다 대응"에서 "고칠 때마다 자동 검증"으로 바뀐다.
