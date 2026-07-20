/**
 * AI 플래너 테스트 케이스 — "여기만 편집해서 케이스를 계속 쌓으면 된다."
 * ------------------------------------------------------------------
 * 각 케이스 구조:
 *   {
 *     name:   '사람이 읽는 이름',
 *     phase:  'chat' | 'generate' | 'recommend-destination',   // 표시용
 *     repeat: 3,                        // (선택) 이 케이스만 N회 반복
 *     setup:  async (h) => ({ ... }),   // (선택) fixture 준비. h.planFor(dest,days) 로 현재일정 생성 가능
 *     request: (setup, h) => ({ ... }), // 서버로 보낼 body (객체 또는 async 함수)
 *     checks: [
 *       ['설명', (data, meta) => boolean|'실패이유문자열'],       // 하드 체크(실패 시 exit 1)
 *       ['설명', (data) => ..., { soft: true }],                 // 소프트 체크(경고만, 모델 판단성)
 *     ],
 *   }
 *
 * meta = { status, sent, setup }  (체크 두 번째 인자)
 * 하드 = 반드시 지켜야 할 구조/규칙,  소프트 = 모델 재량이라 "되면 좋음"
 */

// ── 작은 헬퍼 ─────────────────────────────────────
const days = (d) => d?.plan?.days || [];
const allItems = (d) => days(d).flatMap((x) => x.items || []);
const names = (d) => allItems(d).map((i) => (i.text || i.title || '').toLowerCase());
const has = (re) => (s) => re.test(String(s || ''));
// 클라이언트가 턴마다 requirements 를 "누적 병합(null/빈값은 기존 유지)"하므로, 확정 턴 검증도 동일하게 병합해서 본다.
const mergeIgnoreNull = (prev, next) => {
    const out = { ...(prev || {}) };
    for (const [k, v] of Object.entries(next || {})) {
        if (v === null || v === undefined) continue;
        if (Array.isArray(v) && v.length === 0) continue;
        out[k] = v;
    }
    return out;
};
const mergedReq = (d, m) => mergeIgnoreNull(m?.setup?.req1 || {}, d?.requirements || {});

// 오사카/나트랑은 카탈로그가 충분한 도시(고정 fixture 로 사용)
const OSAKA = 'Osaka';
const NHA_TRANG = 'Nha Trang';

export default [
    // ─────────────────────────────────────────────
    // CHAT — 요구사항 수집 규칙
    // ─────────────────────────────────────────────
    {
        name: '"4박5일" → dayCount=5 (박이 아니라 일 수)',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            // 값을 말하면 즉시 requirements 에 반영해야 함(질문을 이어가더라도)
            messages: [{ role: 'user', content: '오사카 4박5일로 갈거야' }],
        },
        checks: [
            ['dayCount=5 로 즉시 반영', (d) => d.requirements?.dayCount === 5 || `dayCount=${d.requirements?.dayCount}`],
        ],
    },
    {
        name: '"3박4일 그냥 짜줘" → dayCount=4 + ready',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            messages: [{ role: 'user', content: '오사카 3박4일, 나머지는 그냥 알아서 짜줘' }],
        },
        checks: [
            ['dayCount=4 로 파싱', (d) => d.requirements?.dayCount === 4 || `dayCount=${d.requirements?.dayCount}`],
            ['바로 배치 준비(ready=true)', (d) => d.ready === true, { soft: true }],
        ],
    },
    {
        name: '"5일 일정" → dayCount=5 (기간 표현)',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            messages: [{ role: 'user', content: '오사카 5일 일정으로 짜줘' }],
        },
        checks: [
            ['dayCount=5 로 파싱', (d) => d.requirements?.dayCount === 5 || `dayCount=${d.requirements?.dayCount}`],
        ],
    },
    {
        name: '날짜 오탐 방지: "7월 10일에 갈래"를 dayCount=10 으로 오해하지 않음',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            messages: [{ role: 'user', content: '오사카 7월 10일에 갈래' }],
        },
        checks: [
            // 날짜일 뿐 기간이 아니므로 서버가 dayCount=10 으로 강제하면 안 됨
            ['dayCount 을 10 으로 오설정하지 않음', (d) => d.requirements?.dayCount !== 10 || `dayCount=${d.requirements?.dayCount} (날짜 오탐)`],
        ],
    },
    {
        name: '날짜+기간 혼합: "7월 10일부터 4박5일" → dayCount=5',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            messages: [{ role: 'user', content: '오사카 7월 10일부터 4박5일로 갈래' }],
        },
        checks: [
            ['dayCount=5 (날짜 아닌 기간을 사용)', (d) => d.requirements?.dayCount === 5 || `dayCount=${d.requirements?.dayCount}`],
        ],
    },
    {
        name: '문의 먼저 답하기 — 질문하면 되묻기 전에 응답',
        phase: 'chat',
        request: {
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            messages: [{ role: 'user', content: '오사카는 7월에 많이 더워?' }],
        },
        checks: [
            ['빈 응답 아님', (d) => (d.message || '').length > 5],
            ['아직 배치 준비 안 됨(수집 계속)', (d) => d.ready === false, { soft: true }],
        ],
    },

    // ─────────────────────────────────────────────
    // CHAT — 이미 일정이 있을 때(편집 문맥)
    // ─────────────────────────────────────────────
    {
        name: '기존 일정 있으면 "몇박몇일" 재질문 안 함 + 기간 유지',
        phase: 'chat',
        setup: async (h) => ({ currentPlan: await h.planFor(OSAKA, 5) }),
        request: (s) => ({
            phase: 'chat', destinationName: '오사카', hasDestination: true,
            currentPlan: s.currentPlan,
            messages: [{ role: 'user', content: '3일차에 맛집 하나만 더 추가해줘' }],
        }),
        checks: [
            ['며칠/몇박 재질문 안 함', (d) => !has(/몇박|며칠|기간.*(얼마|며칠)/)(d.message) || `message="${d.message}"`],
            ['dayCount=5 유지', (d) => d.requirements?.dayCount === 5 || `dayCount=${d.requirements?.dayCount}`],
            ['바로 배치 준비(ready=true)', (d) => d.ready === true, { soft: true }],
            ['intent=edit 로 표시', (d) => d.requirements?.intent === 'edit', { soft: true }],
        ],
    },

    // ─────────────────────────────────────────────
    // RECOMMEND — 여행지 추천 (시기/취향/선호도시·나라)
    // ─────────────────────────────────────────────
    {
        name: '나라 언급(베트남) → 결과 대부분 베트남',
        phase: 'recommend-destination',
        request: {
            phase: 'recommend-destination',
            requirements: { month: 7, preferredCities: ['베트남'], style: ['해변'] },
        },
        checks: [
            ['추천 3곳 이상', (d) => (d.destinations || []).length >= 3 || `len=${(d.destinations || []).length}`],
            ['베트남 도시 ≥1', (d) => (d.destinations || []).some((x) => has(/vietnam|베트남/i)(x.country))],
            ['베트남 도시 ≥2', (d) => (d.destinations || []).filter((x) => has(/vietnam|베트남/i)(x.country)).length >= 2, { soft: true }],
        ],
    },
    {
        name: '도시 언급(나트랑·다낭) → 그 도시 우선 포함',
        phase: 'recommend-destination',
        request: {
            phase: 'recommend-destination',
            requirements: { month: 6, preferredCities: ['나트랑', '다낭'] },
        },
        checks: [
            ['나트랑 또는 다낭 포함', (d) => (d.destinations || []).some((x) => has(/nha trang|da nang/i)(x.engName))],
            ['나트랑 & 다낭 둘 다', (d) => {
                const es = (d.destinations || []).map((x) => (x.engName || '').toLowerCase());
                return es.some((e) => e.includes('nha trang')) && es.some((e) => e.includes('da nang'));
            }, { soft: true }],
        ],
    },
    {
        name: '시기(1월) 취향(설경) → 일본 포함',
        phase: 'recommend-destination',
        request: {
            phase: 'recommend-destination',
            requirements: { month: 1, style: ['설경', '온천'] },
        },
        checks: [
            ['일본 도시 포함', (d) => (d.destinations || []).some((x) => has(/japan|일본/i)(x.country)), { soft: true }],
        ],
    },

    // ─────────────────────────────────────────────
    // GENERATE — 처음부터 일정 배치
    // ─────────────────────────────────────────────
    {
        name: '오사카 5일 배치 — 5일 채우고 각 일차 ≥2곳, 하루 ≤8',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: OSAKA,
            requirements: { dayCount: 5, pace: 'relaxed' },
        },
        checks: [
            ['일차 생성됨', (d) => days(d).length >= 1 || 'days 비어있음'],
            ['최대 5일 범위', (d) => days(d).every((x) => x.day >= 1 && x.day <= 5)],
            ['각 일차 최소 1곳(빈 일차 없음)', (d) => days(d).every((x) => (x.items || []).length >= 1), { soft: true }],
            ['하루 8개 이하', (d) => days(d).every((x) => (x.items || []).length <= 8)],
            ['모든 카드에 category 있음', (d) => allItems(d).every((i) => !!i.category)],
        ],
    },
    {
        name: '숙소는 체크인 + 체크아웃 2장으로 전개',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: NHA_TRANG,
            requirements: { dayCount: 4, budget: 'mid' },
        },
        checks: [
            ['숙소(hotel) 카드 존재', (d) => allItems(d).some((i) => i.category === 'hotel'), { soft: true }],
            ['체크인 카드(showCheckOut=false) 존재', (d) => allItems(d).some((i) => i.category === 'hotel' && !i.showCheckOut), { soft: true }],
            ['체크아웃 카드(showCheckOut=true) 존재', (d) => allItems(d).some((i) => i.category === 'hotel' && i.showCheckOut === true), { soft: true }],
        ],
    },
    {
        name: '예산 luxury → 고급/럭셔리 숙소 선택',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: NHA_TRANG,
            requirements: { dayCount: 4, budget: 'luxury' },
        },
        checks: [
            ['숙소 tier 가 luxury/upscale', (d) => {
                const hotels = allItems(d).filter((i) => i.category === 'hotel');
                return hotels.length === 0 ? '숙소 없음' : hotels.some((h) => ['luxury', 'upscale'].includes(h.priceTier));
            }, { soft: true }],
        ],
    },
    {
        name: '예산 budget → 가성비/저가 숙소 선택',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: NHA_TRANG,
            requirements: { dayCount: 4, budget: 'budget' },
        },
        checks: [
            ['숙소 tier 가 value/budget', (d) => {
                const hotels = allItems(d).filter((i) => i.category === 'hotel');
                return hotels.length === 0 ? '숙소 없음' : hotels.some((h) => ['value', 'budget'].includes(h.priceTier));
            }, { soft: true }],
        ],
    },
    {
        name: '한글 여행지명("나트랑")도 해석됨',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: '나트랑',
            requirements: { dayCount: 3 },
        },
        checks: [
            ['에러 없이 일정 생성', (d, m) => m.status === 200 && days(d).length >= 1 || `status=${m.status}`],
        ],
    },

    // ─────────────────────────────────────────────
    // GENERATE — 편집 모드(부분 추가) : 카드 두 배·일수 변경 방지
    // ─────────────────────────────────────────────
    {
        name: '편집: "3일차에 맛집 하나 추가" → 추가분만, 3일차에만',
        phase: 'generate',
        setup: async (h) => ({ currentPlan: await h.planFor(OSAKA, 5) }),
        request: (s) => ({
            phase: 'generate', destinationEngName: OSAKA,
            requirements: { dayCount: 5, intent: 'edit', notes: '3일차에 맛집 하나 추가' },
            currentPlan: s.currentPlan,
        }),
        checks: [
            ['편집 모드로 처리(edit=true)', (d) => d.edit === true || `edit=${d.edit}`],
            ['추가분 있음(비어있지 않음)', (d) => allItems(d).length >= 1 || '추가분 없음'],
            ['3일차에만 배치', (d) => days(d).every((x) => x.day === 3) || `days=${JSON.stringify(days(d).map((x) => x.day))}`],
            ['1~2곳만 추가(전체 재생성 아님)', (d) => allItems(d).length <= 2 || `추가 ${allItems(d).length}곳`],
            ['맛집(food) 포함', (d) => allItems(d).some((i) => i.category === 'food'), { soft: true }],
        ],
    },
    {
        name: '중간 숙박 이동: 빈 밤 없이 체인 연결 + 마지막 체크아웃=dayCount',
        phase: 'generate',
        request: {
            phase: 'generate', destinationEngName: NHA_TRANG,
            requirements: { dayCount: 6, notes: '앞 3일은 시내 호텔, 뒤 3일은 해변 리조트로 숙소를 나눠줘' },
        },
        checks: [
            ['숙소 있음', (d) => allItems(d).some((i) => i.category === 'hotel') || '숙소 없음'],
            ['숙박 체인 연결(빈 밤 없음) + 마지막 체크아웃=dayCount', (d) => {
                const hotels = {};
                for (const day of (d.plan?.days || [])) {
                    for (const it of (day.items || [])) {
                        if (it.category !== 'hotel') continue;
                        const k = it.text || it.title;
                        (hotels[k] ??= { inn: 99, out: 0 });
                        hotels[k].inn = Math.min(hotels[k].inn, day.day);
                        hotels[k].out = Math.max(hotels[k].out, day.day);
                    }
                }
                const stays = Object.values(hotels).sort((a, b) => a.inn - b.inn);
                if (!stays.length) return '숙소 없음';
                const dc = d.plan?.dayCount || 6;
                for (let i = 0; i < stays.length - 1; i++) {
                    if (stays[i].out !== stays[i + 1].inn) return `체인 끊김(빈 밤): ${stays[i].out} ≠ ${stays[i + 1].inn}`;
                }
                if (stays[stays.length - 1].out !== dc) return `마지막 체크아웃 ${stays[stays.length - 1].out} ≠ dayCount ${dc}`;
                return true;
            }],
            ['서로 다른 숙소 2곳 이상(요청상 분리)', (d) => {
                const names = new Set(allItems(d).filter((i) => i.category === 'hotel').map((i) => i.text || i.title));
                return names.size >= 2;
            }, { soft: true }],
            ['이동일 순서: 체크아웃이 체크인보다 위', (d) => {
                for (const day of (d.plan?.days || [])) {
                    const items = day.items || [];
                    const outIdx = items.findIndex((i) => i.category === 'hotel' && i.showCheckOut === true);
                    const inIdx = items.findIndex((i) => i.category === 'hotel' && !i.showCheckOut);
                    // 같은 날에 체크아웃+체크인이 모두 있으면(이동일) 체크아웃이 위(작은 index)여야 함
                    if (outIdx >= 0 && inIdx >= 0 && outIdx > inIdx) return `Day${day.day}: 체크인(#${inIdx})이 체크아웃(#${outIdx})보다 위`;
                }
                return true;
            }],
        ],
    },

    // ─────────────────────────────────────────────
    // SWAP — 장소 교체 (모든 카테고리: 대안 제시 → 확인 → 교체)
    // ─────────────────────────────────────────────
    {
        name: 'swap phase(숙소): 새 숙소명 → 카드 payload 로 해석',
        phase: 'swap',
        setup: async (h) => {
            const cp = await h.planFor(NHA_TRANG, 4);
            const hotel = cp.days.flatMap((d) => d.items).find((i) => i.category === 'hotel');
            return { name: hotel?.name };
        },
        request: (s) => ({ phase: 'swap', destinationEngName: NHA_TRANG, swapTo: s.name, swapCategory: 'hotel' }),
        checks: [
            ['숙소 payload 반환', (d) => !!d.place && d.category === 'hotel' || `place=${JSON.stringify(d.place)}`],
            ['tier 포함', (d) => !!d.place?.priceTier, { soft: true }],
        ],
    },
    {
        name: 'swap phase(맛집): 카테고리 무관하게 교체 대상 해석',
        phase: 'swap',
        setup: async (h) => {
            const cp = await h.planFor(OSAKA, 4);
            const food = cp.days.flatMap((d) => d.items).find((i) => i.category === 'food');
            return { name: food?.name };
        },
        request: (s) => ({ phase: 'swap', destinationEngName: OSAKA, swapTo: s.name, swapCategory: 'food' }),
        checks: [
            ['맛집 payload 반환', (d) => !!d.place && d.category === 'food' || `place=${JSON.stringify(d.place)}, cat=${d.category}`],
        ],
    },
    {
        name: 'swap phase: 목록에 없는 이름 → 거부(502)',
        phase: 'swap',
        request: { phase: 'swap', destinationEngName: NHA_TRANG, swapTo: '존재하지않는가짜장소ZZZ' },
        checks: [
            ['목록에 없으면 거부', (d, m) => m.status === 502 || `status=${m.status}`],
        ],
    },
    {
        name: '장소 변경 요청 → 대안 제시(확정 전, ready=false)',
        phase: 'chat',
        setup: async (h) => ({ currentPlan: await h.planFor(NHA_TRANG, 4, { budget: 'luxury' }) }),
        request: (s) => ({
            phase: 'chat', destinationName: '나트랑', hasDestination: true,
            currentPlan: s.currentPlan,
            messages: [{ role: 'user', content: '숙소를 더 가성비 좋은 곳으로 바꿔줘' }],
        }),
        checks: [
            ['빈 응답 아님', (d) => (d.message || '').length > 5],
            ['확정 전(ready=false)이거나 바로 swap', (d) => d.ready === false || d.requirements?.intent === 'swap', { soft: true }],
        ],
    },
    {
        name: '숙소 변경 확인 → intent=swap + swapTo 지정',
        phase: 'chat',
        setup: async (h) => {
            const currentPlan = await h.planFor(NHA_TRANG, 4, { budget: 'luxury' });
            const first = {
                phase: 'chat', destinationName: '나트랑', hasDestination: true, currentPlan,
                messages: [{ role: 'user', content: '숙소를 더 가성비 좋은 곳으로 바꿔줘' }],
            };
            const { data } = await h.post(first);
            return { currentPlan, suggestion: data.message || '추천 숙소는 어떠세요?', req1: data.requirements || {} };
        },
        request: (s) => ({
            phase: 'chat', destinationName: '나트랑', hasDestination: true, currentPlan: s.currentPlan,
            messages: [
                { role: 'user', content: '숙소를 더 가성비 좋은 곳으로 바꿔줘' },
                { role: 'assistant', content: s.suggestion },
                { role: 'user', content: '응 그걸로 바꿔줘' },
            ],
        }),
        // 클라이언트 병합 기준(제안 턴 + 확정 턴)으로 검증 — 실제 앱 동작과 동일
        checks: [
            ['intent=swap (병합)', (d, m) => mergedReq(d, m).intent === 'swap' || `intent=${mergedReq(d, m).intent}`],
            ['swapTo 지정됨 (병합)', (d, m) => !!mergedReq(d, m).swapTo || 'swapTo 없음'],
            ['ready=true', (d) => d.ready === true],
            ['swapCategory=hotel (병합)', (d, m) => mergedReq(d, m).swapCategory === 'hotel', { soft: true }],
            ['swapFrom 지정됨 (병합)', (d, m) => !!mergedReq(d, m).swapFrom, { soft: true }],
        ],
    },
    {
        name: '긴 계획 대화 후 숙소 교체 확인 → intent=swap 유지(전체배치로 안 샘)',
        phase: 'chat',
        setup: async (h) => {
            const currentPlan = await h.planFor(OSAKA, 8);
            // 1) 계획 요구사항이 쌓인 대화 문맥(오염) 재현
            const planMsgs = [{ role: 'user', content: '오사카 8일 커플 여행, 예산 중간, 쇼핑·온천·힐링 위주로 그냥 짜줘' }];
            const p = await h.post({ phase: 'chat', destinationName: '오사카', hasDestination: true, currentPlan, messages: planMsgs });
            const planAssistant = p.data.message || '알겠습니다!';
            let req1 = p.data.requirements || {};
            // 2) 숙소 교체 제안 턴
            const sugMsgs = [...planMsgs, { role: 'assistant', content: planAssistant }, { role: 'user', content: '숙소를 한 등급 높은 곳으로 바꿔줘' }];
            const s = await h.post({ phase: 'chat', destinationName: '오사카', hasDestination: true, currentPlan, messages: sugMsgs });
            req1 = mergeIgnoreNull(req1, s.data.requirements || {}); // 클라 누적 병합 재현
            return { currentPlan, planAssistant, sug: s.data.message || '이 숙소는 어떠세요?', req1, sugMsgs };
        },
        request: (s) => ({
            phase: 'chat', destinationName: '오사카', hasDestination: true, currentPlan: s.currentPlan,
            messages: [...s.sugMsgs, { role: 'assistant', content: s.sug }, { role: 'user', content: '응 그걸로 변경해줘' }],
        }),
        checks: [
            // 병합 결과가 여전히 swap 이어야 함(전체배치로 안 새는 핵심 불변식)
            ['병합 intent=swap 유지', (d, m) => mergedReq(d, m).intent === 'swap' || `intent=${mergedReq(d, m).intent}`],
            ['swapTo 유지', (d, m) => !!mergedReq(d, m).swapTo || 'swapTo 없음'],
            ['swapCategory=hotel', (d, m) => mergedReq(d, m).swapCategory === 'hotel', { soft: true }],
        ],
    },
    {
        name: '맛집 교체 확인 → intent=swap (호텔 아님)',
        phase: 'chat',
        setup: async (h) => {
            const currentPlan = await h.planFor(OSAKA, 4);
            const first = {
                phase: 'chat', destinationName: '오사카', hasDestination: true, currentPlan,
                messages: [{ role: 'user', content: '2일차 맛집 말고 다른 맛집으로 바꿔줘' }],
            };
            const { data } = await h.post(first);
            return { currentPlan, suggestion: data.message || '이 맛집은 어떠세요?', req1: data.requirements || {} };
        },
        request: (s) => ({
            phase: 'chat', destinationName: '오사카', hasDestination: true, currentPlan: s.currentPlan,
            messages: [
                { role: 'user', content: '2일차 맛집 말고 다른 맛집으로 바꿔줘' },
                { role: 'assistant', content: s.suggestion },
                { role: 'user', content: '응 그걸로 바꿔줘' },
            ],
        }),
        checks: [
            ['intent=swap (병합)', (d, m) => mergedReq(d, m).intent === 'swap' || `intent=${mergedReq(d, m).intent}`],
            ['swapCategory=food (병합)', (d, m) => mergedReq(d, m).swapCategory === 'food' || `cat=${mergedReq(d, m).swapCategory}`],
            ['swapTo 지정됨 (병합)', (d, m) => !!mergedReq(d, m).swapTo, { soft: true }],
        ],
    },

    {
        name: '편집: 기존 장소 중복 배치 안 함(dedup)',
        phase: 'generate',
        setup: async (h) => ({ currentPlan: await h.planFor(OSAKA, 5) }),
        request: (s) => ({
            phase: 'generate', destinationEngName: OSAKA,
            requirements: { dayCount: 5, intent: 'edit', notes: '2일차에 맛집 한 곳 더 추가' },
            currentPlan: s.currentPlan,
        }),
        checks: [
            ['기존에 있던 장소를 다시 넣지 않음', (d, m) => {
                const existing = new Set(
                    (m.setup.currentPlan.days || []).flatMap((x) => x.items).map((i) => (i.name || '').toLowerCase())
                );
                const dup = names(d).filter((n) => existing.has(n));
                return dup.length === 0 || `중복: ${dup.join(', ')}`;
            }],
        ],
    },
];
