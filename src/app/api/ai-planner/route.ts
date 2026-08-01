import { NextResponse } from 'next/server';
import { callModel, type ChatMessage } from '@/lib/ai/callModel';
import { resolveCityKey, buildCatalogListing, findCatalogPlace, placeToCardPayload, listCatalogPlaces, SUBCAT_LABEL } from '@/lib/ai/catalog';
import type { CardCategory } from '@/lib/ai/catalog';
import { listRecommendableCities, buildDestinationListing, findRecommendableCity, cityImage } from '@/lib/ai/destinations';
import { loadReferenceItineraries, buildReferenceBlock } from '@/lib/ai/referenceItineraries';

// AI 여행 플래너 라우트 (무상태). 요청 본문의 phase 로 분기.
// - phase:"chat"                 → 요구사항 수집 대화 (여행지 유무로 모드 분기)
// - phase:"generate"             → 도시 카탈로그(실제 장소)에서 골라 일차별 일정 산출
// - phase:"recommend-destination"→ 여행지 미정 시 시기·취향으로 도시 3~5곳 추천

const CHAT_SYSTEM = `당신은 친근한 한국어 여행 일정 어시스턴트입니다.
사용자에게 어울리는 여행 일정을 짜기 위해 필요한 요구사항을 자연스러운 대화로 모읍니다.

[수집 항목 — 아래 "순서대로" 아직 안 받은 것을 물어보세요]
1. dayCount: 며칠 일정인지 = "일(day) 수" (필수·최우선. 모르면 가장 먼저 질문)
   - "N박M일"이면 dayCount = M (일 수). 예: "4박5일"→5, "3박4일"→4, "2박3일"→3.
   - "M일"만 말해도 dayCount = M. 박(night) 수가 아니라 반드시 "일" 수를 넣으세요.
2. companions: 누구와 가는지 ("solo"=혼자, "couple"=커플, "family"=가족, "friends"=친구)
3. budget: 예산대 ("budget"=가성비, "mid"=중간, "luxury"=고급). 숙소·식사 등급을 정하는 데 씁니다
4. pace: 여행 페이스 ("packed"=빡빡하게 많이, "relaxed"=여유롭게)
5. style: 선호 테마/키워드 배열 (예: ["미식","해변","쇼핑","스노클링","힐링"])
6. notes: 기타 요청(특정 날 특정 지역/활동 위주 등)

[대화 규칙]
- ★[한 답변에 여러 항목] 사용자는 한 번의 답에 여러 항목을 함께 말할 수 있습니다. 매 턴, "방금 물어본 항목"만 보지 말고 위 1~6번 "전체"를 훑어, 이번 답변(및 지금까지 대화 전체)에서 알 수 있는 값을 "모두" requirements 에 채우세요. 그런 뒤 아직 "비어 있는" 항목만 이어서 물어보세요. 예: "3박4일 커플이고 가성비로 짜줘" → 한 응답에서 dayCount=4, companions=couple, budget=budget 을 한꺼번에 채우고, 이 항목들은 다시 묻지 않습니다.
- 존댓말. 한 번에 1~2개만 질문. 위 순서를 따르되 사용자가 먼저 말한 항목은 채우고 건너뜁니다.
- 이미 답한(또는 이번 답변에서 방금 채운) 항목은 절대 다시 묻지 않습니다.
- 사용자가 질문/문의를 하면 먼저 친절하게 답한 뒤, 아직 못 받은 다음 항목을 이어서 물어보세요. (딱딱한 설문지처럼 굴지 말 것)
- ★[최우선 규칙] 사용자가 "짜줘/알아서/그냥/진행/네 좋아요" 등 "빨리 진행"을 원하는 신호를 조금이라도 보이면(예: "나머지는 알아서 짜줘"), 다른 어떤 규칙보다 우선해서 즉시 ready 를 true 로 하세요. 이때는 아래 구체화 질문도 하지 말 것.
- dayCount 만 정해지면 ready 를 true 로 할 수 있습니다(나머지는 선택). 다만 2~4번을 한두 개 더 받으면 더 좋은 일정이 되니, 급해 보이지 않으면 1~2개 더 물어보세요.
- [배치 직전 구체화 질문] 위 "빨리 진행" 신호가 없고, 기본 항목(2~5번)이 대체로 채워져 곧 일정을 만들 수 있게 되면, "곧바로 ready=true 하지 말고" 마지막에 딱 한 번 이렇게 물어보세요(이때 ready=false):
  "혹시 꼭 가보고 싶은 곳·특정 지역 위주·하고 싶은(또는 피하고 싶은) 활동 등, 더 구체적으로 원하시는 게 있으신가요? 없으면 이대로 짜드릴게요."
  · 사용자가 구체 요청을 주면 notes 에 담고 ready=true.
  · "없어요/그냥 짜줘/알아서 해줘" 라고 하면 그때 ready=true.
  · 이 구체화 질문은 "대화 전체에서 한 번만" — 직전에 이미 이 질문을 했거나 notes 가 이미 채워져 있으면 반복하지 말고 ready=true.
  · 아직 기본 항목이 많이 비어 있으면(예: dayCount·동행만 있음) 구체화 질문 대신 남은 기본 항목을 먼저 물어보세요.
- 값을 못 받은 항목은 비워둡니다(null 또는 빈 배열).
- ★매우 중요: 사용자가 말한 값은 "그 즉시" requirements 에 채우세요. 추가로 질문을 하더라도, 이미 파악한 값(특히 dayCount)은 "이번 응답의 requirements 에 반드시 포함"하세요. 질문만 하고 requirements 를 비워서 보내지 마세요. (예: "4박5일" 을 들으면 이번 응답에서 곧바로 dayCount=5 를 채운 뒤 다음 항목을 물어보세요.)

반드시 아래 JSON 형식으로만 응답하세요(그 외 텍스트 금지):
{
  "message": "사용자에게 보여줄 한국어 메시지",
  "requirements": {
    "dayCount": <number|null>,
    "companions": <"solo"|"couple"|"family"|"friends"|null>,
    "budget": <"budget"|"mid"|"luxury"|null>,
    "pace": <"packed"|"relaxed"|null>,
    "style": <string[]>,
    "notes": <string|null>,
    "intent": <"create"|"edit"|"swap"|null>,
    "swapFrom": <string|null>,
    "swapTo": <string|null>,
    "swapCategory": <"food"|"hotel"|"shopping"|"tourspa"|"transport"|null>
  },
  "ready": <boolean>
}`;

// 여행지가 아직 없을 때: 추천을 위한 정보(시기·취향)를 모으는 대화
const CHAT_SYSTEM_RECOMMEND = `당신은 친근한 한국어 여행 어시스턴트입니다.
아직 여행지가 정해지지 않았습니다. 어울리는 여행지를 추천하기 위해 필요한 정보를 자연스러운 대화로 모읍니다.

[수집 항목 — 아래 "순서대로" 아직 안 받은 것을 물어보세요]
1. month: 언제 떠나는지(여행 월, 1~12) — 시즌·날씨 기반 추천에 가장 중요. 모르면 가장 먼저 질문.
2. style: 원하는 여행 분위기/테마 배열 (예: ["해변","미식","쇼핑","힐링","자연","액티비티"])
3. companions: 누구와 ("solo"|"couple"|"family"|"friends")
4. budget: 예산대 ("budget"|"mid"|"luxury")

[매우 중요 — 사용자가 관심 도시를 언급하면]
- 사용자가 특정 도시를 말하면(예: "나트랑이나 다낭 생각중", "오사카 어때?") 그 도시들을 반드시 preferredCities 배열에 한글 도시명으로 담으세요. 예: "나트랑이나 다낭" → ["나트랑","다낭"].
- 이미 관심 도시를 말했더라도 시기/스타일은 계속 물어봐 추천 품질을 높이세요. 절대 언급한 도시를 잊지 말고 preferredCities 에 유지하세요.

[대화 규칙]
- ★[한 답변에 여러 항목] 사용자는 한 번의 답에 여러 항목(월·스타일·동행·예산·관심 도시)을 함께 말할 수 있습니다. 매 턴, "방금 물어본 항목"만 보지 말고 위 항목 "전체"를 훑어, 이번 답변에서 알 수 있는 값을 "모두" requirements 에 채운 뒤, 아직 "비어 있는" 항목만 이어서 물어보세요.
- 존댓말. 한 번에 1~2개만 질문. 이미 답한(또는 이번 답변에서 방금 채운) 항목은 다시 묻지 않습니다.
- 사용자가 질문/문의를 하면 먼저 친절히 답한 뒤, 아직 못 받은 다음 항목을 이어서 물어보세요.
- 사용자가 "그냥 추천해줘/알아서 해줘" 하면 더 묻지 말고 ready 를 true 로.
- month 만 정해지면 ready 를 true 로 할 수 있습니다(나머지 선택). style 을 한두 개 더 받으면 추천이 좋아지니, 급해 보이지 않으면 1개 더 물어보세요.
- 아직 여행지 자체를 추천하는 단계이므로 며칠 일정인지(기간)는 지금 묻지 마세요.

반드시 아래 JSON 형식으로만 응답하세요(그 외 텍스트 금지):
{
  "message": "사용자에게 보여줄 한국어 메시지",
  "requirements": {
    "month": <1~12 사이 number|null>,
    "preferredCities": <string[] — 사용자가 언급한 관심 도시(한글명), 없으면 빈 배열>,
    "style": <string[]>,
    "companions": <"solo"|"couple"|"family"|"friends"|null>,
    "budget": <"budget"|"mid"|"luxury"|null>
  },
  "ready": <boolean>
}`;

// 여행지 추천: 카탈로그가 있는 도시 목록에서만 3~5곳 추천
const RECOMMEND_SYSTEM = `당신은 한국인을 위한 여행지 추천 큐레이터입니다.
주어진 "추천 가능 도시 목록"과 사용자 조건(여행 시기·취향)을 보고, 목록에 있는 도시만 골라 추천하세요.

규칙:
- 반드시 목록에 있는 engName 을 "그대로(verbatim)" 사용하세요. 목록에 없는 도시는 절대 추천하지 마세요.
- [최우선] preferredCities 에는 사용자가 언급한 "도시" 또는 "나라"가 들어옵니다. 이걸 최우선으로 반영하세요:
  · 도시명이면(예: 나트랑, 오사카): 목록에 있는 한 그 도시들을 "반드시 먼저 포함"하고, 나머지는 시기·취향에 맞는 비슷한 도시로 채우세요.
  · 나라명이면(예: 베트남, 일본, 태국): 목록의 "국가" 열을 참고해 "그 나라에 속한 도시들로 추천 대부분을 채우세요"(가능하면 3곳 이상). 그 나라 도시가 부족할 때만 시기·취향이 비슷한 다른 나라 도시로 보충하세요.
  · 사용자가 콕 집은 도시/나라를 무시하고 엉뚱한 곳만 추천하면 절대 안 됩니다.
- month(여행 월)의 날씨·시즌을 고려하세요. 예: 동남아는 건기/우기, 일본은 벚꽃(3~4월)·단풍(10~11월)·설경(12~2월), 남반구(계절 반대) 등. 그 시기에 가기 안 좋은 곳은 피하세요.
- style/취향(해변·미식·쇼핑·힐링·자연 등)에 맞는 곳을 우선하세요.
- companions/budget 도 참고하세요(가족=편안, 커플=분위기, 예산대 등).
- 3곳 이상 5곳 이하로 추천하세요(preferredCities 포함).
- 각 도시마다 왜 추천하는지 reason 을 한국어 한 줄로(그 시기/취향에 맞는 구체적 근거).

반드시 아래 JSON 형식으로만 응답하세요(그 외 텍스트 금지):
{ "destinations": [ { "engName": "<목록의 engName 그대로>", "reason": "<한 줄 추천 이유>" } ] }`;

const GENERATE_SYSTEM = `당신은 여행 일정 큐레이터입니다.
주어진 도시의 "장소 카탈로그"와 여행 요구사항을 보고, 카탈로그에 있는 장소만 골라 dayCount일 일정을 구성하세요.

규칙:
- 반드시 카탈로그에 있는 name 을 "그대로(verbatim)" 사용하세요. 새 장소나 이름을 지어내지 마세요.
- category 는 그 장소가 속한 섹션(food/hotel/shopping/tourspa/transport)을 그대로 사용하세요.
- pace 가 "relaxed" 면 하루 2~3곳, "packed" 면 하루 4곳 이상 배치하세요.
- style/notes 선호를 최우선으로 반영하세요(예: 쇼핑·스노클링).
- companions(동행)를 고려하세요: family=가족 친화·이동 부담 적게, couple=스파·전망·로맨틱, friends=액티비티·나이트, solo=자유로운 동선.
- budget(예산)에 맞는 숙소 "등급"을 고르세요. 카탈로그의 hotel 항목에는 "tier:budget|value|upscale|luxury" 로 등급이 표시됩니다:
  · budget(가성비) → value·budget 우선
  · mid(중간) → value·upscale 우선
  · luxury(고급) → luxury·upscale 우선
  예산 정보가 없으면 value·upscale 중심으로 무난하게 고르세요.
- 하루 동선을 고려해 비슷한 지역끼리 묶으세요. 맛집은 식사 시간대에 두세요.
- 숙소(hotel)는 "체크인하는 일차"에 배치하고, 그 숙소에서 체크아웃하는 일차 번호를 checkOutDay 로 함께 지정하세요.
  · 여행 내내 숙소 1곳이면: 1일차 체크인 + checkOutDay = 마지막 일차(dayCount).
  · 숙소를 옮기면(중간 이동): 이전 숙소의 checkOutDay 와 다음 숙소의 "체크인 일차"를 반드시 "같은 날"로 맞추세요(그 날 아침 체크아웃 → 오후 체크인). 그래야 매일 밤 묵을 숙소가 비지 않습니다(빈 밤 절대 금지).
    예) 5일차부터 새 숙소로 옮기면 → 이전 숙소 checkOutDay=5, 새 숙소 체크인=5. (전날 4로 하지 말 것)
  · 첫 숙소는 1일차 체크인, 마지막 숙소의 checkOutDay 는 dayCount 로 하세요.
  · 같은 숙소를 여러 번 넣지 말고, 한 숙소당 한 번만 배치하세요(체크인/체크아웃 카드는 시스템이 자동 생성).
- ★서브카테고리 매칭: 카탈로그의 각 줄에는 "서브카테고리" 라벨이 표시됩니다(맛집=한식/일식/양식/카페/로컬·길거리, 숙소=호텔/리조트/에어비앤비/호스텔, 쇼핑=백화점·쇼핑몰/전통시장/마트·편의점/아울렛/면세점/기념품, 투어&스파=관광지/투어/스파·마사지/테마파크/액티비티/공연·체험). 사용자가 특정 서브카테고리를 원하면(예: "마사지"→스파·마사지, "면세점"→면세점, "한식"→한식) "반드시 그 서브카테고리 장소만" 고르고, 다른 서브카테고리(예: 마사지 요청에 투어)를 넣지 마세요.
- 각 날에 최소 2곳 이상 채우고, 하루 최대 8개까지.
- ★★절대 규칙: 신규 일정 생성 시 days 를 "절대로 비우지 마세요". 요구사항이 모호하거나 부족해도, 카탈로그에서 무난한 장소를 골라 "반드시" dayCount일 전체를 채운 완성된 일정을 반환하세요. 빈 일정/빈 배열 응답은 금지입니다.
- [부분 수정 모드] "이미 배치된 일정"이 함께 주어지면, 전체를 다시 만들지 말고 사용자 요청에 맞는 "추가/변경분만" 출력하세요. 이미 있는 장소는 다시 출력하지 마세요. 단, 사용자가 추가/보완을 요청했으면 "최소 1곳 이상"은 반드시 추가하세요(빈 배열 회피).

반드시 아래 JSON 형식으로만 응답하세요(그 외 텍스트 금지):
{
  "days": [ { "day": <1..dayCount>, "items": [ { "name": "<카탈로그 name 그대로>", "category": "<food|hotel|shopping|tourspa|transport>", "checkOutDay": <hotel 일 때만, 체크아웃 일차 번호>, "time": <"HH:MM"|null>, "note": <"짧은 한국어 메모"|null> } ] } ]
}`;

// 장소 교체 전용(focused) 시스템 — 계획 대화 오염 없이 교체만 처리 → 분류 신뢰도↑
const SWAP_FOCUS_SYSTEM = `당신은 여행 일정의 "장소 교체(swap)"만 처리하는 어시스턴트입니다. 사용자는 이미 배치된 장소를 카탈로그의 다른 장소로 바꾸려 합니다.
규칙:
- [지금까지 대화]의 마지막 사용자 요청을 보고 판단하세요.
- 아직 무엇으로 바꿀지 확정 안 됐으면: [장소 카탈로그]에서 "같은 카테고리"의 적절한 대안 1곳을 골라 "현재 '<현재 장소>' 대신 '<추천 장소>'는 어떠세요? <한 줄 이유>. 이걸로 바꿀까요?" 라고 제안하고 ready=false.
- 사용자가 확정("응/좋아/그걸로/바꿔줘" 등)했으면 같은 후보로 ready=true.
- swapFrom 은 [현재 일정]에 실제로 있는 정확한 이름, swapTo 는 [장소 카탈로그]에 있는 정확한 이름을 쓰세요(지어내지 말 것).
- 같은 카테고리끼리만 교체(숙소→숙소, 맛집→맛집). 예산/등급 요청이면 tier(budget<value<upscale<luxury)를 참고.
반드시 아래 JSON 만 응답: { "message": "<한국어>", "requirements": { "intent": "swap", "swapFrom": "<현재 장소명>", "swapTo": "<새 장소명>", "swapCategory": "<food|hotel|shopping|tourspa|transport>" }, "ready": <boolean> }`;

// 교체 요청 신호(사용자 메시지) / 직전 어시스턴트의 교체 제안 신호
const SWAP_KW = /바꿔|바꾸|변경|교체|다른\s*(곳|데|호텔|숙소|맛집|장소|리조트)|말고|대신|업그레이드|한\s*(단계|등급)|더\s*(좋은|저렴|높은|비싼|나은|가까운|고급)/;
// 교체 "제안"은 "대신/바꿀까요/교체" 같은 명시적 표현만 인정.
// (바 "어떠세요?/어떠신가요"는 일반 추천에도 흔해 → swap 오분류의 원인이었으므로 제외)
const SWAP_PROPOSAL = /대신[\s\S]{0,30}?(어떠|어때|추천|은|는|으로)|바꿀까요|바꿔\s*드릴까요|교체할까요|다른\s*(곳|것|데)으?로/;
const SWAP_CONFIRM = /^(응|어|네|예|그래|좋아|좋습니다|오케이|ok|그걸로|그거로?|그거|바꿔|변경|해줘|맞아|진행)/i;

// focused swap 처리 — 검증(현재일정 존재 이름 + 카탈로그 존재 이름)까지 마쳐 반환
async function focusedSwapChat(cityKey: string, currentPlan: CurrentPlan, messages: ChatMessage[]) {
    const listing = buildCatalogListing(cityKey, currentPlan.dayCount);
    const planText = buildCurrentPlanText(currentPlan);
    const convo = messages.map((m) => `${m.role === 'user' ? '사용자' : '어시스턴트'}: ${m.content}`).join('\n');
    const userPrompt = `[현재 일정]\n${planText}\n\n[장소 카탈로그] (# 는 카테고리)\n${listing}\n\n[지금까지 대화]\n${convo}\n\n위 대화의 마지막 사용자 요청(장소 교체)을 처리해줘.`;
    const parsed = await callModelJson({
        system: SWAP_FOCUS_SYSTEM,
        messages: [{ role: 'user', content: userPrompt }],
        json: true, temperature: 0.4, thinkingBudget: 512,
    });
    const r = parsed?.requirements ?? {};
    const cat = typeof r.swapCategory === 'string' ? r.swapCategory : null;

    // swapFrom 검증 — 현재 일정에 실제 있는 이름. 불일치 시 해당 카테고리 장소가 1곳뿐이면 그것으로 보정.
    const planItems = currentPlan.days.flatMap((d) => (Array.isArray(d.items) ? d.items : []));
    const planNames = new Set(planItems.map((i) => String(i.name ?? '').toLowerCase()));
    let swapFrom: string | null = typeof r.swapFrom === 'string' && r.swapFrom.trim() ? r.swapFrom.trim() : null;
    if (!swapFrom || !planNames.has(swapFrom.toLowerCase())) {
        const pool = planItems.filter((i) => !cat || i.category === cat);
        const distinct = [...new Set(pool.map((i) => i.name))];
        swapFrom = distinct.length === 1 ? distinct[0] : (swapFrom && planNames.has(swapFrom.toLowerCase()) ? swapFrom : null);
    }

    // swapTo 검증 — 카탈로그의 정식 이름으로 정규화, 없으면 null
    let swapTo: string | null = typeof r.swapTo === 'string' && r.swapTo.trim() ? r.swapTo.trim() : null;
    if (swapTo) {
        const match = findCatalogPlace(cityKey, swapTo, cat ?? undefined);
        swapTo = match ? match.place.name : null;
    }

    return {
        message: typeof parsed?.message === 'string' && parsed.message.trim() ? parsed.message : '어떤 곳으로 바꿔드릴까요?',
        requirements: { intent: 'swap' as const, swapFrom, swapTo, swapCategory: cat, dayCount: currentPlan.dayCount },
        ready: !!parsed?.ready && !!swapTo, // 유효한 새 장소가 있어야 확정
    };
}

const MAX_PER_DAY = 8;

// 현재 보드에 이미 배치된 일정 요약(일차별 카드 name/category). 대화·배치 모두에 컨텍스트로 주입.
interface LatLng { lat: number; lng: number }
interface CurrentPlan {
    dayCount: number;
    days: Array<{ day: number; items: Array<{ name: string; category?: string; coordinates?: LatLng; subType?: string }> }>;
}

interface ChatBody {
    phase: 'chat';
    messages: ChatMessage[];
    destinationName?: string;
    hasDestination?: boolean; // false 면 여행지 추천 모드로 대화
    currentPlan?: CurrentPlan; // 이미 짜인 일정(있으면 기간 재질문 금지 + 부분수정 인식)
    requirements?: Requirements; // 클라이언트가 지금까지 누적한 슬롯 — "확정된 항목 재질문 금지" 주입용
}

interface Requirements {
    dayCount?: number | null;
    month?: number | null;      // 여행 월(1~12) — 추천 모드에서 사용
    preferredCities?: string[]; // 사용자가 직접 언급한 관심 도시 — 추천 모드에서 우선 반영
    companions?: string | null;
    budget?: string | null;
    pace?: string | null;
    style?: string[];
    notes?: string | null;
    intent?: 'create' | 'edit' | 'swap' | null; // edit=부분 추가, create=전체 새 일정, swap=장소 교체
    swapFrom?: string | null;     // swap: 현재 장소명(제거 대상)
    swapTo?: string | null;       // swap: 새 장소명(카탈로그)
    swapCategory?: string | null; // swap: 교체 카테고리(food|hotel|shopping|tourspa|transport)
}

const CATEGORY_LABEL: Record<string, string> = {
    food: '맛집', hotel: '숙소', shopping: '쇼핑', tourspa: '투어/스파',
    transport: '교통', destination: '여행지', flight: '항공', preparation: '준비', other: '기타',
};

// 현재 일정을 프롬프트용 텍스트로 ("1일차: 맛집:A, 숙소:B" 형태). 없으면 빈 문자열.
function buildCurrentPlanText(currentPlan?: CurrentPlan): string {
    const days = Array.isArray(currentPlan?.days) ? currentPlan!.days : [];
    if (!days.length) return '';
    return days
        .map((d) => {
            const items = Array.isArray(d.items) ? d.items : [];
            const names = items
                .map((it) => `${CATEGORY_LABEL[it.category ?? ''] ?? it.category ?? ''}:${it.name}`)
                .join(', ');
            return `${d.day}일차: ${names || '(비어있음)'}`;
        })
        .join('\n');
}

// 사용자 발화에서 여행 일수(dayCount)를 결정적으로 추출. (flash 가 requirements 에 자주 누락 → 서버 보정)
// 우선순위: "N박M일"→M(명확한 기간) > "M박"단독→M+1 > 날짜 제거 후 남은 "M일"→M. 가장 최근 언급 우선.
// ⚠️ 날짜("7월 10일", "이번달 15일")를 기간으로 오해하지 않도록, 날짜 표현을 먼저 제거한다.
function extractDayCount(messages: ChatMessage[]): number | null {
    const text = (messages || []).filter((m) => m.role === 'user').map((m) => m.content).join('\n');
    const lastNum = (re: RegExp, group: number, src: string, adj = 0): number | null => {
        const all = [...src.matchAll(re)];
        if (!all.length) return null;
        const n = parseInt(all[all.length - 1][group], 10);
        return Number.isFinite(n) ? n + adj : null;
    };
    // 1) "N박M일" (박+일 동시) → 일 수 (가장 명확한 기간 표현)
    const nm = lastNum(/(\d+)\s*박\s*(\d+)\s*일/g, 2, text);
    if (nm) return nm;
    // 2) "M박" 단독 → M+1 (박 = 숙박 수 = 기간)
    const n = lastNum(/(\d+)\s*박/g, 1, text, 1);
    if (n) return n;
    // 3) 날짜("N월 M일", "이번달/다음달 M일")를 제거한 뒤 남은 "M일"(일차 제외)을 기간으로.
    const noDates = text
        .replace(/\d+\s*월\s*\d+\s*일/g, ' ')
        .replace(/(?:이번|다음|담|이|저|매)\s*달\s*\d+\s*일/g, ' ');
    const d = lastNum(/(\d+)\s*일(?!\s*차)/g, 1, noDates);
    if (d) return d;
    return null;
}

// 현재 일정에 이미 배치된 장소 name 집합(소문자) — 배치 중복 방지용
function existingPlaceNames(currentPlan?: CurrentPlan): Set<string> {
    const set = new Set<string>();
    const days = Array.isArray(currentPlan?.days) ? currentPlan!.days : [];
    for (const d of days) {
        for (const it of Array.isArray(d.items) ? d.items : []) {
            const n = String(it?.name ?? '').trim().toLowerCase();
            if (n) set.add(n);
        }
    }
    return set;
}

// 추가 개수 파싱("하나/한 곳"=1, "두 곳/2개"=2 …). 기본 1, 최대 4.
function parseAddCount(text: string | undefined, max = 4): number {
    const t = String(text ?? '');
    const m = t.match(/(\d+)\s*(곳|개|군데)/);
    if (m) return Math.min(max, Math.max(1, parseInt(m[1], 10)));
    if (/두\s*(곳|개|군데)|둘/.test(t)) return 2;
    if (/세\s*(곳|개|군데)|셋/.test(t)) return 3;
    return 1;
}

// 텍스트에서 대상 일차 파싱. "1일차"→1, (없고) "마지막/막날"→dayCount. 못 찾으면 null.
function parseTargetDay(text: string | undefined, dayCount: number): number | null {
    const t = String(text ?? '');
    const m = t.match(/(\d+)\s*일\s*차/);
    if (m) { const n = parseInt(m[1], 10); if (n >= 1 && n <= dayCount) return n; }
    if (/마지막|막날|끝날|last\s*day/i.test(t)) return dayCount;
    return null;
}
// 여러 일차 파싱("2일차랑 3일차"→[2,3]). 없으면 "마지막"→[dayCount]. 하나도 없으면 [].
function parseTargetDays(text: string | undefined, dayCount: number): number[] {
    const t = String(text ?? '');
    const set = new Set<number>();
    for (const m of t.matchAll(/(\d+)\s*일\s*차/g)) { const n = parseInt(m[1], 10); if (n >= 1 && n <= dayCount) set.add(n); }
    if (!set.size && /마지막|막날|끝날/.test(t)) set.add(dayCount);
    return [...set].sort((a, b) => a - b);
}
// 삭제/제거 의도 (AI 는 추가만 지원 → 안내)
const REMOVE_SIGNAL = /빼줘|빼고|빼\s|빼주|삭제|제거|없애|지워|빼\s*달/;

// notes 에 "카탈로그 장소명이 그대로" 들어있으면 그 장소를 반환(특정 장소 지목 추가).
// AI 가 채팅에서 특정 장소를 추천·확정하면 notes 에 그 이름이 담기는데, 이를 결정적으로 추가하기 위함.
// (모델 generate 에 맡기면 빈 결과→폴백이 엉뚱한 장소를 골라 "추천과 다른 카드"가 들어가는 문제 해결)
// 이미 일정에 있는 장소는 제외(참조로 언급된 경우 오판 방지). 가장 긴 이름 우선(부분 오매칭 방지).
function findNamedPlaceInText(cityKey: string, text: string | undefined, exclude: Set<string>): { name: string; category: CardCategory; type: string } | null {
    const t = String(text ?? '');
    if (t.trim().length < 3) return null;
    const cats: CardCategory[] = ['tourspa', 'food', 'shopping', 'hotel'];
    let best: { name: string; category: CardCategory; type: string; len: number } | null = null;
    for (const cat of cats) {
        for (const p of listCatalogPlaces(cityKey, cat)) {
            const nm = String(p?.name ?? '').trim();
            if (nm.length < 3) continue;
            if (exclude.has(nm.toLowerCase())) continue;
            if (t.includes(nm) && (!best || nm.length > best.len)) best = { name: nm, category: cat, type: String(p?.type ?? ''), len: nm.length };
        }
    }
    return best ? { name: best.name, category: best.category, type: best.type } : null;
}

// "매일/날마다 <카테고리>" 처럼 "모든 날 반복 추가" 요청을 텍스트에서 결정적으로 감지.
// 모델이 이런 반복 요청에서 자주 빈 배열/환각 이름을 내므로, 서버가 직접 카탈로그로 펼치기 위한 감지기.
// 반환: 감지된 카테고리(그리고 그 요청이 반복인지). 반복 키워드 + 특정 카테고리 키워드가 "둘 다" 있어야 발동(오검출 최소화).
const RECUR_RE = /매일|날마다|매\s*일|하루에?\s*한\s*번|하루\s*한\s*번|일마다|each\s*day|every\s*day|daily/i;
// tourspa 는 서브카테고리(관광지/투어/스파·마사지/테마파크/액티비티/공연·체험)를 모두 포괄하도록 넓게 감지.
// 실제 어떤 서브카테고리인지는 detectTourSpaTypes 로 좁힌다.
const CATEGORY_KEYWORDS: Array<{ category: CardCategory; re: RegExp }> = [
    { category: 'tourspa', re: /마사지|맛사지|스파|사우나|온천|찜질방|한증막|massage|spa|테마\s*파크|놀이공원|액티비티|수상\s*스포츠|서핑|다이빙|스노클|래프팅|제트스키|관광지|명소|사원|랜드마크|시티\s*투어|투어|호핑|크루즈|공연|체험|워크샵/i },
    { category: 'food', re: /맛집|맛있는|맛난|식당|레스토랑|저녁\s*식사|점심\s*식사|디너|런치|미식|현지\s*음식|먹을\s*(거|것|데)|먹거리|먹방|밥집/i },
    { category: 'shopping', re: /쇼핑|면세|아울렛|쇼핑몰/i },
];
// 카테고리별 세부 니즈(서브카테고리) → 실제 데이터 type 값. (각 Picker 그룹과 동일)
// 순서 중요: 더 구체적인 것을 먼저(예: tourspa 는 "마사지/스파"를 "투어"보다 먼저 검사).
const SUBCAT_NEEDS: Partial<Record<CardCategory, Array<{ re: RegExp; types: string[] }>>> = {
    food: [
        { re: /한식|한국\s*음식|korean/i, types: ['korean'] },
        { re: /일식|스시|초밥|라멘|라면|우동|소바|돈코츠|규동|텐동|덮밥|오마카세|사시미|가라아게|이자카야|japanese|sushi|ramen/i, types: ['japanese'] },
        { re: /양식|이탈리안|파스타|피자|프렌치|스테이크|western|italian|french/i, types: ['western', 'italian', 'french'] },
        { re: /카페|커피|디저트|브런치|베이커리|cafe|coffee|dessert/i, types: ['cafe'] },
        { re: /로컬|길거리|현지\s*음식|노점|포장마차|street|local/i, types: ['local', 'street-food'] },
        { re: /중식|중국\s*음식|chinese/i, types: ['chinese'] },
    ],
    hotel: [
        { re: /리조트|resort/i, types: ['resort'] },
        { re: /에어비앤비|에어\s*비앤비|airbnb/i, types: ['airbnb'] },
        { re: /호스텔|게스트\s*하우스|게하|hostel|guest\s*house/i, types: ['hostel', 'guesthouse'] },
        { re: /호텔|hotel/i, types: ['hotel'] },
    ],
    shopping: [
        { re: /백화점|쇼핑몰|department|mall/i, types: ['department-store', 'mall'] },
        { re: /전통\s*시장|재래\s*시장|시장|market/i, types: ['market'] },
        { re: /마트|편의점|슈퍼|supermarket|convenience/i, types: ['supermarket', 'convenience'] },
        { re: /아울렛|outlet/i, types: ['outlet'] },
        { re: /면세점?|duty\s*free/i, types: ['duty-free'] },
        { re: /기념품|특산품|souvenir|specialty|부티크|boutique/i, types: ['souvenir', 'specialty', 'boutique'] },
    ],
    tourspa: [
        { re: /마사지|맛사지|스파|사우나|온천|찜질방|한증막|massage|spa/i, types: ['spa', 'massage'] },
        { re: /테마\s*파크|놀이공원|theme\s*park/i, types: ['theme-park'] },
        { re: /액티비티|수상\s*스포츠|서핑|다이빙|스노클|래프팅|제트스키|워터\s*스포츠|water\s*sport/i, types: ['water-sports'] },
        { re: /공연|쇼|체험|워크샵|클래스|show|workshop/i, types: ['show', 'workshop'] },
        { re: /관광지|명소|사원|랜드마크|시티\s*투어|sightsee/i, types: ['city-tour', 'cultural'] },
        { re: /투어|호핑|크루즈|island|cruise/i, types: ['island-hopping', 'adventure', 'cruise'] },
    ],
};
// 카테고리 → 인박스(보관함) 탭 이름 (직접 추가 안내용)
const INBOX_TAB_LABEL: Record<CardCategory, string> = {
    food: '맛집', hotel: '숙소', shopping: '쇼핑', tourspa: '투어&스파', transport: '교통',
};
// 요청 종류가 목록에 없을 때 "친절히 없다고 + 직접 추가 안내" 메시지.
function noMatchGuide(destName: string | undefined, category: CardCategory, types: string[] | null): string {
    const where = destName ? `${destName}에는` : '이 여행지에는';
    const sub = types && types.length ? (SUBCAT_LABEL[category]?.[types[0]] ?? '') : '';
    const tab = INBOX_TAB_LABEL[category] ?? '';
    const what = sub ? `'${sub}'` : (tab ? `'${tab}'` : '요청하신');
    return `${where} 아직 ${what} 관련 장소 정보가 없어요 😅\n대신 보관함(인박스)의 '${tab}' 탭에서 '직접 추가하기'로 원하는 곳을 직접 만들어 넣으실 수 있어요! 🙂`;
}

// 요청 텍스트에서 그 카테고리의 서브카테고리 type 집합을 감지.
function detectSubcatTypes(category: CardCategory, text?: string): string[] | null {
    const needs = SUBCAT_NEEDS[category];
    if (!needs) return null;
    const t = String(text ?? '');
    for (const s of needs) if (s.re.test(t)) return s.types;
    return null;
}
// 풀을 요청 서브카테고리(type)로 좁힌다.
// 서브카테고리를 "명시"했으면 정확히 지킨다(결과가 비어도 원본으로 되돌리지 않음 → "한식" 요청에 일식 넣지 않음).
// 서브카테고리 언급이 없으면(types=null) 원본 그대로.
function narrowPoolBySubcat(pool: any[], category: CardCategory, notes?: string): any[] {
    const types = detectSubcatTypes(category, notes);
    if (!types) return pool;
    return pool.filter((p) => types.includes(String(p?.type)));
}
// 텍스트에서 카테고리 감지(반복 여부 무관). 편집 폴백에서 "무엇을 추가할지" 추정에 사용.
// 1) 카테고리 대표 키워드(맛집/쇼핑/마사지…) → 2) 서브카테고리 키워드(한식/면세점/리조트…)로도 카테고리 추정.
function detectCategory(text?: string): { category: CardCategory; re: RegExp } | null {
    const t = String(text ?? '');
    for (const c of CATEGORY_KEYWORDS) {
        if (c.re.test(t)) return { category: c.category, re: c.re };
    }
    for (const cat of ['food', 'shopping', 'tourspa', 'hotel'] as CardCategory[]) {
        const needs = SUBCAT_NEEDS[cat];
        if (needs) for (const s of needs) if (s.re.test(t)) return { category: cat, re: s.re };
    }
    return null;
}
function detectRecurringAdd(text?: string): { category: CardCategory; re: RegExp } | null {
    const t = String(text ?? '');
    if (!t.trim() || !RECUR_RE.test(t)) return null;
    return detectCategory(t);
}
// notes 에 등장하는 "모든" 카테고리(대표+서브카테고리 키워드 기준). 2개 이상이면 복합 요청.
function detectCategoriesAll(text?: string): Set<CardCategory> {
    const t = String(text ?? '');
    const s = new Set<CardCategory>();
    for (const c of CATEGORY_KEYWORDS) if (c.re.test(t)) s.add(c.category);
    for (const cat of Object.keys(SUBCAT_NEEDS) as CardCategory[]) {
        const needs = SUBCAT_NEEDS[cat];
        if (needs) for (const n of needs) if (n.re.test(t)) s.add(cat);
    }
    return s;
}

// 두 좌표 간 거리(m). Haversine. 좌표 없으면 Infinity(거리 비교에서 자연히 후순위).
function haversineM(a?: LatLng, b?: LatLng): number {
    if (!a || !b || typeof a.lat !== 'number' || typeof b.lat !== 'number') return Infinity;
    const R = 6371000, toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
    const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

// 각 일차의 "활성 숙소 좌표" — 그 날 묵는 숙소 기준으로 근처 장소를 고르기 위함.
// currentPlan 카드에 실린 coordinates 사용. 활성 숙소 = 그 일차 이하에서 마지막으로 체크인한 숙소.
function activeHotelCoordByDay(currentPlan: CurrentPlan, dayCount: number): Map<number, LatLng> {
    const stays: Array<{ day: number; coord: LatLng }> = [];
    for (const d of currentPlan.days) {
        for (const it of Array.isArray(d.items) ? d.items : []) {
            if (it?.category === 'hotel' && it.coordinates && typeof it.coordinates.lat === 'number') {
                stays.push({ day: Number(d.day), coord: it.coordinates });
            }
        }
    }
    stays.sort((a, b) => a.day - b.day);
    const map = new Map<number, LatLng>();
    if (!stays.length) return map;
    for (let day = 1; day <= dayCount; day++) {
        let coord = stays[0].coord; // 첫 숙소 체크인 전이면 첫 숙소로
        for (const s of stays) if (s.day <= day) coord = s.coord;
        map.set(day, coord);
    }
    return map;
}

// 기준 좌표(ref)에 가장 가까운 미사용 장소. 500m 이내 최우선 → 1km 이내 → 그래도 없으면 최근접.
// ref 가 없거나 좌표 있는 후보가 없으면 첫 미사용 장소(거리 무시).
function nearestUnused(pool: any[], ref: LatLng | undefined, used: Set<string>): any | null {
    const avail = pool.filter((p) => p?.name && !used.has(String(p.name).trim().toLowerCase()));
    if (!avail.length) return null;
    const withCoord = avail.filter((p) => p?.coordinates && typeof p.coordinates.lat === 'number');
    if (!ref || !withCoord.length) return avail[0];
    const scored = withCoord.map((p) => ({ p, d: haversineM(ref, p.coordinates) })).sort((a, b) => a.d - b.d);
    const w500 = scored.find((x) => x.d <= 500);
    const w1k = scored.find((x) => x.d <= 1000);
    return (w500 || w1k || scored[0]).p;
}

// 코드값 → 프롬프트용 한글 라벨
const COMPANION_LABEL: Record<string, string> = { solo: '혼자', couple: '커플', family: '가족', friends: '친구' };
const BUDGET_LABEL: Record<string, string> = { budget: '가성비', mid: '중간', luxury: '고급' };
const PACE_LABEL: Record<string, string> = { packed: '빡빡하게', relaxed: '여유롭게' };

// 클라이언트가 지금까지 누적한 슬롯을 "확정 슬롯" 프롬프트 텍스트로 (비어 있는 값은 제외).
// 서버는 무상태라 모델이 대화 이력에서 슬롯을 놓치면 이미 답한 걸 또 물을 수 있음.
// 누적 슬롯을 직접 주입해 "이 항목은 재질문 금지"로 결정적으로 고정한다. (dayCount 는 extractDayCount 로 별도 보정)
function buildKnownSlotsText(req: Requirements | undefined, recommendMode: boolean): string {
    if (!req || typeof req !== 'object') return '';
    const rows: string[] = [];
    if (recommendMode) {
        if (req.month) rows.push(`시기=${req.month}월`);
        if (Array.isArray(req.preferredCities) && req.preferredCities.length) rows.push(`관심도시=${req.preferredCities.join(', ')}`);
        if (req.companions) rows.push(`동행=${COMPANION_LABEL[req.companions] ?? req.companions}`);
        if (req.budget) rows.push(`예산=${BUDGET_LABEL[req.budget] ?? req.budget}`);
        if (Array.isArray(req.style) && req.style.length) rows.push(`스타일=${req.style.join(', ')}`);
    } else {
        if (req.dayCount) rows.push(`기간=${req.dayCount}일`);
        if (req.companions) rows.push(`동행=${COMPANION_LABEL[req.companions] ?? req.companions}`);
        if (req.budget) rows.push(`예산=${BUDGET_LABEL[req.budget] ?? req.budget}`);
        if (req.pace) rows.push(`페이스=${PACE_LABEL[req.pace] ?? req.pace}`);
        if (Array.isArray(req.style) && req.style.length) rows.push(`스타일=${req.style.join(', ')}`);
    }
    if (!rows.length) return '';
    return `\n\n[이미 확정된 슬롯] ${rows.join(' / ')}\n` +
        `- 위 항목들은 사용자가 이미 답한 값입니다. requirements 에 "그대로 유지"하고 "절대 다시 묻지 마세요". 아직 비어 있는 항목만 이어서 질문하세요.`;
}

interface GenerateBody {
    phase: 'generate';
    destinationEngName?: string; // destination 카드의 city (engName 소문자 등)
    destinationName?: string;    // 표시용 한글명(선택)
    requirements?: Requirements;
    currentPlan?: CurrentPlan;   // 있으면 "부분 수정(추가)" 모드 — 기존 장소는 유지, 추가분만 산출
}

// 모델의 chat 응답을 안전하게 파싱. 파싱 실패해도 "원본 JSON을 사용자에게 절대 노출하지 않음".
function parseChatEnvelope(raw: string): { message: string; requirements: any; ready: boolean } {
    const tryParse = (s: string): any => {
        try { return JSON.parse(s); } catch { return null; }
    };
    let obj = tryParse(raw);
    if (!obj) {
        const m = raw.match(/\{[\s\S]*\}/);
        if (m) obj = tryParse(m[0]);
    }
    if (obj && typeof obj === 'object') {
        return {
            message: typeof obj.message === 'string' ? obj.message : '조금 더 자세히 말씀해 주세요.',
            requirements: obj.requirements ?? {},
            ready: !!obj.ready,
        };
    }
    const msgMatch = raw.match(/"message"\s*:\s*"((?:[^"\\]|\\.)*)"/);
    const readyMatch = raw.match(/"ready"\s*:\s*(true|false)/);
    if (msgMatch) {
        let msg = msgMatch[1];
        try { msg = JSON.parse(`"${msgMatch[1]}"`); } catch { /* keep raw group */ }
        return { message: msg, requirements: {}, ready: readyMatch ? readyMatch[1] === 'true' : false };
    }
    return { message: '죄송해요, 한 번만 다시 말씀해 주시겠어요?', requirements: {}, ready: false };
}

function buildGeneratePrompt(destinationName: string | undefined, req: Requirements | undefined, listing: string, dayCount: number, currentPlan?: CurrentPlan, referenceBlock?: string): string {
    const lines: string[] = [];
    if (destinationName) lines.push(`[여행지] ${destinationName}`);
    const reqParts: string[] = [`기간 ${dayCount}일`];
    if (req?.companions) reqParts.push(`동행 ${COMPANION_LABEL[req.companions] ?? req.companions}`);
    if (req?.budget) reqParts.push(`예산 ${BUDGET_LABEL[req.budget] ?? req.budget}`);
    if (req?.pace) reqParts.push(`페이스 ${req.pace}`);
    if (req?.style?.length) reqParts.push(`스타일 ${req.style.join(', ')}`);
    if (req?.notes) reqParts.push(`요청 "${req.notes}"`);
    lines.push(`[요구사항] ${reqParts.join(' / ')}`);
    lines.push('[장소 카탈로그] (# 는 카테고리, 각 줄: name | type | 설명)');
    lines.push(listing);

    const planText = buildCurrentPlanText(currentPlan);
    if (planText) {
        // 부분 수정(추가) 모드 — 기존 배치는 그대로 두고 "추가/변경할 장소만" 산출
        lines.push('\n[현재 이미 배치된 일정] (이 장소들은 그대로 유지됩니다 — 다시 출력하지 마세요)');
        lines.push(planText);
        lines.push(
            `\n사용자 요청: "${req?.notes || '일정 보완'}"\n` +
            `위 요청에 따라 "추가하거나 바꿀 장소만" 출력하세요. 전체 일정을 다시 만들지 마세요.\n` +
            `- 이미 배치된 장소는 절대 다시 출력하지 마세요(중복 금지).\n` +
            `- 요청이 특정 N일차에 관한 것이면 그 일차(day=N)에만 배치하세요.\n` +
            `- ★반복 요청 처리: "매일 / 하루에 한 번 / 매 저녁 / 날마다 / 각 일차마다" 처럼 "모든 날 반복" 요청이면 → 해당 카테고리 장소를 "1일차부터 ${dayCount}일차까지 각 일차에 1곳씩" 배치하세요. 이때 반드시 "매일 서로 다른" 카탈로그 장소를 고르세요(같은 장소명을 여러 날 반복하면 중복 제거되어 하루만 남습니다). 이미 그 카테고리가 있는 일차는 건너뛰어도 됩니다.\n` +
            `- 반복 요청이 아니면 명시된 개수만 추가하세요. "하나/맛집 하나"면 딱 1곳만. (특별한 수량 언급이 없으면 1~2곳)\n` +
            `- 추가할 게 정말 없을 때만 days 를 빈 배열로 두세요. (반복 요청인데 카탈로그에 해당 카테고리가 남아 있으면 절대 빈 배열로 두지 마세요.)`
        );
    } else {
        // 참조 사례(실제 여행자 동선)는 신규 생성 시에만 주입 — 패턴 참고용
        if (referenceBlock) {
            lines.push('\n' + referenceBlock);
        }
        lines.push(`\n위 카탈로그의 장소만 사용해 ${dayCount}일 일정을 구성해줘.`);
    }
    return lines.join('\n');
}

// 모델 산출물을 카탈로그 화이트리스트/일수 범위/상한으로 엄격 검증 → 카드 payload 로 변환
// 숙소(hotel)는 "체크인 카드 + 체크아웃 카드" 2장으로 전개(각 장소당 1박 스테이 기준).
function validateCatalogPlan(raw: any, cityKey: string, dayCount: number, existing?: Set<string>): { plan: any; warnings: string[] } {
    const warnings: string[] = [];
    // 이미 보드에 있는 장소는 재배치 금지 → used/usedHotel 을 기존 name 으로 미리 채움
    const used = new Set<string>(existing ?? []);      // 같은 장소 중복 방지 (name 기준, 비-숙소)
    const usedHotel = new Set<string>(existing ?? []); // 같은 숙소 스테이 중복 방지
    const byDay = new Map<number, any[]>();
    // 숙소 스테이: 체크인 일차 + 체크아웃 일차를 모아 마지막에 2장으로 전개
    const stays: Array<{ place: any; checkInDay: number; checkOutDay: number; time: any; note: any }> = [];

    const rawDays = Array.isArray(raw?.days) ? raw.days : [];
    for (const d of rawDays) {
        const dayNum = Number(d?.day);
        if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > dayCount) {
            warnings.push(`범위를 벗어난 ${d?.day}일차를 건너뜀`);
            continue;
        }
        const items = Array.isArray(d?.items) ? d.items : [];
        for (const it of items) {
            const name = String(it?.name ?? '').trim();
            if (!name) continue;
            const match = findCatalogPlace(cityKey, name, it?.category);
            if (!match) {
                warnings.push(`카탈로그에 없는 장소(${name})를 건너뜀`);
                continue;
            }
            const key = match.place.name.toLowerCase();
            const time = typeof it?.time === 'string' && it.time.trim() ? it.time.trim() : null;
            const note = typeof it?.note === 'string' && it.note.trim() ? it.note.trim() : null;

            // 숙소: 스테이로 수집(2장 전개는 후처리) — 하루 상한과 무관하게 우선 확보
            if (match.category === 'hotel') {
                if (usedHotel.has(key)) continue;
                usedHotel.add(key);
                let checkOutDay = Number(it?.checkOutDay);
                if (!Number.isInteger(checkOutDay) || checkOutDay <= dayNum || checkOutDay > dayCount) {
                    checkOutDay = dayCount; // 미지정/이상치 → 마지막 일차 체크아웃
                }
                stays.push({ place: match.place, checkInDay: dayNum, checkOutDay, time, note });
                continue;
            }

            if (used.has(key)) continue;
            const list = byDay.get(dayNum) ?? [];
            if (list.length >= MAX_PER_DAY) {
                warnings.push(`${dayNum}일차 상한(${MAX_PER_DAY}) 초과분 제외`);
                continue;
            }
            used.add(key);
            list.push({ ...placeToCardPayload(match.place, match.category), time, note });
            byDay.set(dayNum, list);
        }
    }

    // 숙소 스테이 정규화 — 모델의 checkOutDay 를 신뢰하지 않고 서버가 확정한다.
    // 체크인 일차 순 정렬 → 각 숙소의 체크아웃 = "다음 숙소의 체크인 일차"(같은 날 이동), 마지막 숙소 = dayCount.
    // → 숙소 없는 밤(빈 밤) 방지 + 마지막 체크아웃이 dayCount 보다 이른 오차 보정.
    stays.sort((a, b) => a.checkInDay - b.checkInDay);
    for (let i = 0; i < stays.length; i++) {
        const next = stays[i + 1];
        let co = next ? next.checkInDay : dayCount;
        if (co <= stays[i].checkInDay) co = dayCount; // 역전/동일 일차 방어
        stays[i].checkOutDay = Math.min(co, dayCount);
    }

    // 숙소 스테이 → 체크인 카드 + 체크아웃 카드 2장 전개
    // 같은 날 정렬: 체크아웃(아침, 최상단) → [도착 교통·공항픽업] → 체크인(오후) → 나머지 일정
    const prepend = (day: number, card: any) => {
        const list = byDay.get(day) ?? [];
        list.unshift(card);
        byDay.set(day, list);
    };
    // 체크인은 "맨 앞의 교통(공항 픽업 등) 카드 뒤"에 배치 → 1일차 공항픽업 → 체크인 순 유지
    const insertCheckIn = (day: number, card: any) => {
        const list = byDay.get(day) ?? [];
        let idx = 0;
        while (idx < list.length && list[idx]?.category === 'transport') idx++;
        list.splice(idx, 0, card);
        byDay.set(day, list);
    };
    // 1단계: 체크인 카드 전개 (도착 교통 뒤).
    for (const s of stays) {
        const base = placeToCardPayload(s.place, 'hotel');
        insertCheckIn(s.checkInDay, { ...base, showCheckOut: false, time: s.time, note: s.note });
    }
    // 2단계: 체크아웃 카드를 나중에 최상단으로 전개 → 이동일에 "체크아웃(아침) → … → 체크인(오후)" 순서.
    for (const s of stays) {
        if (s.checkOutDay === s.checkInDay) continue;
        const base = placeToCardPayload(s.place, 'hotel');
        prepend(s.checkOutDay, { ...base, showCheckOut: true, time: null, note: null });
    }

    const days = Array.from(byDay.keys())
        .sort((a, b) => a - b)
        .map((day) => ({ day, items: byDay.get(day)! }));

    return { plan: { days, dayCount }, warnings };
}

// 숙소 tier → 예산 매칭용 순위
const HOTEL_TIER_RANK: Record<string, number> = { budget: 0, value: 1, mid: 1, upscale: 2, luxury: 3 };

// ── 결정적 일정 폴백 ─────────────────────────────────────────────
// 모델이 실패/빈 결과를 내도 "무조건 카드가 나오도록" 카탈로그로 직접 일정을 구성한다.
// 완벽하지 않아도(대충이라도) 카드가 생기는 것이 오픈 서비스 신뢰도에 핵심. (사용자 요구)
function buildDeterministicPlan(cityKey: string, dayCount: number, req?: Requirements): { plan: any; warnings: string[] } {
    const hotels = listCatalogPlaces(cityKey, 'hotel').filter((p) => p?.name);
    const foods = listCatalogPlaces(cityKey, 'food').filter((p) => p?.name);
    const spas = listCatalogPlaces(cityKey, 'tourspa').filter((p) => p?.name);
    const shops = listCatalogPlaces(cityKey, 'shopping').filter((p) => p?.name);

    // 숙소: 예산 tier 에 가장 가까운 1곳을 전체 스테이로 (카탈로그 숙소 필드는 priceTier)
    const wantTier = req?.budget === 'luxury' ? 3 : req?.budget === 'budget' ? 0 : 1;
    let hotel = hotels[0];
    if (hotels.length > 1) {
        hotel = [...hotels].sort(
            (a, b) => Math.abs((HOTEL_TIER_RANK[a?.priceTier] ?? 1) - wantTier) - Math.abs((HOTEL_TIER_RANK[b?.priceTier] ?? 1) - wantTier)
        )[0];
    }

    // 숙소 좌표 기준으로 각 카테고리를 가까운 순으로 정렬 → 동선이 숙소 근처로 모이게(거리 반영).
    const ref: LatLng | undefined = hotel?.coordinates;
    const byNear = (arr: any[]) =>
        ref ? [...arr].sort((a, b) => haversineM(ref, a?.coordinates) - haversineM(ref, b?.coordinates)) : arr;
    const foodsN = byNear(foods), spasN = byNear(spas), shopsN = byNear(shops);

    const rawDays: Array<{ day: number; items: any[] }> = [];
    let fi = 0, si = 0, shi = 0;
    for (let day = 1; day <= dayCount; day++) {
        const items: any[] = [];
        if (day === 1 && hotel) items.push({ name: hotel.name, category: 'hotel', checkOutDay: dayCount });
        if (fi < foodsN.length) items.push({ name: foodsN[fi++].name, category: 'food' });          // 매일 식당 1
        if (fi < foodsN.length && dayCount <= Math.floor(foodsN.length / 2)) items.push({ name: foodsN[fi++].name, category: 'food' }); // 여유 있으면 2
        if (day % 2 === 1 && si < spasN.length) items.push({ name: spasN[si++].name, category: 'tourspa' });   // 홀수날 스파
        if (day % 2 === 0 && shi < shopsN.length) items.push({ name: shopsN[shi++].name, category: 'shopping' }); // 짝수날 쇼핑
        rawDays.push({ day, items });
    }
    return validateCatalogPlan({ days: rawDays }, cityKey, dayCount, undefined);
}

// 편집 폴백: 모델이 빈 결과를 내도 요청 취지에 맞는 카드를 "최소 1개" 추가한다.
// notes 에서 카테고리를 추정(없으면 food) → 이미 없는 일차에 미사용 장소를 1곳 배치.
function buildDeterministicEditAdd(cityKey: string, dayCount: number, currentPlan: CurrentPlan, req?: Requirements, count = 1): { plan: any; warnings: string[] } {
    const existing = existingPlaceNames(currentPlan);
    const detected = detectCategory(req?.notes ?? undefined);
    const category: CardCategory = detected?.category ?? 'food';
    let pool = listCatalogPlaces(cityKey, category).filter((p) => p?.name && !existing.has(String(p.name).trim().toLowerCase()));
    pool = narrowPoolBySubcat(pool, category, req?.notes ?? undefined); // 요청 서브카테고리로 좁힘
    if (!pool.length) return { plan: { days: [], dayCount }, warnings: [] };

    // 대상 일차: 그 카테고리가 아직 없는 첫 일차 → 없으면 카드 수가 가장 적은 일차
    const dayItemCount = new Map<number, number>();
    const dayHasCat = new Map<number, boolean>();
    for (const d of currentPlan.days) {
        const items = Array.isArray(d.items) ? d.items : [];
        dayItemCount.set(Number(d.day), items.length);
        dayHasCat.set(Number(d.day), items.some((it) => it?.category === category));
    }
    // "1일차/마지막" 처럼 대상 일차를 명시했으면 그 일차를 우선.
    let targetDay = parseTargetDay(req?.notes ?? undefined, dayCount) ?? 1;
    if (parseTargetDay(req?.notes ?? undefined, dayCount) == null) {
        for (let day = 1; day <= dayCount; day++) {
            if (!dayHasCat.get(day)) { targetDay = day; break; }
            if (day === dayCount) {
                // 모든 날에 이미 있으면 카드 수가 가장 적은 날
                let min = Infinity;
                for (let d = 1; d <= dayCount; d++) { const c = dayItemCount.get(d) ?? 0; if (c < min) { min = c; targetDay = d; } }
            }
        }
    }
    // 대상 일차의 숙소 좌표 기준 근처 장소 count 곳(거리 반영, 서로 다르게).
    const ref = activeHotelCoordByDay(currentPlan, dayCount).get(targetDay);
    const used = new Set<string>();
    const items: any[] = [];
    for (let k = 0; k < Math.max(1, count); k++) {
        const chosen = nearestUnused(pool, ref, used) ?? (k === 0 ? pool[0] : null);
        if (!chosen) break;
        used.add(String(chosen.name).trim().toLowerCase());
        items.push({ name: chosen.name, category, time: null, note: null });
    }
    if (!items.length) return { plan: { days: [], dayCount }, warnings: [] };
    return validateCatalogPlan({ days: [{ day: targetDay, items }] }, cityKey, dayCount, existing);
}

const MONTH_LABEL = (m?: number | null) => (m && m >= 1 && m <= 12 ? `${m}월` : null);

function buildRecommendPrompt(req: Requirements | undefined, listing: string): string {
    const lines: string[] = [];
    const parts: string[] = [];
    const month = MONTH_LABEL(req?.month);
    if (month) parts.push(`여행 시기 ${month}`);
    if (req?.style?.length) parts.push(`취향 ${req.style.join(', ')}`);
    if (req?.companions) parts.push(`동행 ${COMPANION_LABEL[req.companions] ?? req.companions}`);
    if (req?.budget) parts.push(`예산 ${BUDGET_LABEL[req.budget] ?? req.budget}`);
    lines.push(`[조건] ${parts.length ? parts.join(' / ') : '특별한 조건 없음'}`);
    if (req?.preferredCities?.length) {
        lines.push(`[사용자가 언급한 관심 도시 — 목록에 있으면 반드시 우선 포함] ${req.preferredCities.join(', ')}`);
    }
    lines.push('[추천 가능 도시 목록] (각 줄: engName | 한글명 | 지역/국가 | 태그 | 설명)');
    lines.push(listing);
    lines.push(`\n위 목록의 도시만 사용해 조건(특히 시기)에 맞는 곳 3~5곳을 추천해줘.`);
    return lines.join('\n');
}

// 모델 추천을 도시 화이트리스트로 검증 → 후보 카드 생성용 형태로 변환
function validateRecommendations(raw: any): { destinations: any[]; warnings: string[] } {
    const warnings: string[] = [];
    const out: any[] = [];
    const used = new Set<string>();

    const rawList = Array.isArray(raw?.destinations) ? raw.destinations : [];
    for (const d of rawList) {
        const name = String(d?.engName ?? '').trim();
        if (!name) continue;
        const city = findRecommendableCity(name);
        if (!city) {
            warnings.push(`목록에 없는 도시(${name})를 건너뜀`);
            continue;
        }
        if (used.has(city.engName)) continue;
        used.add(city.engName);
        out.push({
            engName: city.engName,
            name: city.name,
            country: city.country,
            desc: city.desc,
            timezone: city.timezone,
            reason: typeof d?.reason === 'string' && d.reason.trim() ? d.reason.trim() : '',
            imageUrl: cityImage(city.engName) ?? undefined,
        });
        if (out.length >= 5) break;
    }
    return { destinations: out, warnings };
}

// 느슨한 JSON 파싱: 직접 파싱 → 실패 시 { } 블록만 추출해 재시도
function parseJsonLoose(raw: string): any {
    try { return JSON.parse(raw); } catch { /* fallthrough */ }
    const m = raw.match(/\{[\s\S]*\}/);
    if (m) { try { return JSON.parse(m[0]); } catch { /* fallthrough */ } }
    return null;
}

// 전송 실패(throw) 시 조용히 재시도하는 래퍼 (chat 등 원문 텍스트가 필요할 때)
async function callModelRetry(opts: Parameters<typeof callModel>[0], retries = 1): Promise<string> {
    let lastErr: unknown;
    for (let i = 0; i <= retries; i++) {
        try { return await callModel(opts); }
        catch (e) { lastErr = e; }
    }
    throw lastErr;
}

// JSON 응답 전용: 파싱 실패 또는 전송 실패 시 재시도. 재시도 후에도 파싱 실패면 null.
async function callModelJson(opts: Parameters<typeof callModel>[0], retries = 1): Promise<any> {
    let lastErr: unknown;
    for (let i = 0; i <= retries; i++) {
        try {
            const raw = await callModel(opts);
            const parsed = parseJsonLoose(raw);
            if (parsed) return parsed;
            // 파싱 실패 → 다음 시도
        } catch (e) {
            lastErr = e; // 전송 실패 → 다음 시도
        }
    }
    if (lastErr) throw lastErr; // 마지막까지 전송 실패면 상위(500)에서 처리
    return null;                // 재시도 후에도 파싱만 실패 → 상위(502)에서 처리
}

export async function POST(req: Request) {
    let body: any;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청이에요.' }, { status: 400 });
    }

    const phase = body?.phase;

    try {
        if (phase === 'chat') {
            const { messages = [], destinationName, hasDestination, currentPlan, requirements: knownSlots } = body as ChatBody;
            // 여행지 유무로 모드 분기: 있으면 일정 요구사항 수집, 없으면 여행지 추천 정보 수집
            const recommendMode = hasDestination === false || (!destinationName && hasDestination !== true);

            // ── 결정적 스왑 라우팅 ──────────────────────────────────
            // 배치 모드 + 일정 있음 + (사용자 교체 키워드 OR 직전 어시스턴트 교체 제안에 대한 확정)이면
            // 계획 대화 오염이 없는 "전용 swap 핸들러"로 보내 매 턴 swap 필드를 확실히 산출.
            if (!recommendMode && currentPlan && Array.isArray(currentPlan.days) && currentPlan.days.length) {
                const swapCityKey = resolveCityKey(destinationName);
                const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';
                const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant')?.content ?? '';
                const swapSignal =
                    SWAP_KW.test(lastUser) ||
                    (SWAP_PROPOSAL.test(lastAssistant) && SWAP_CONFIRM.test(lastUser.trim()));
                if (swapCityKey && swapSignal) {
                    const parsed = await focusedSwapChat(swapCityKey, currentPlan, messages);
                    return NextResponse.json({ mode: 'ask', ...parsed });
                }
            }
            let system = recommendMode
                ? CHAT_SYSTEM_RECOMMEND
                : CHAT_SYSTEM +
                  (destinationName
                      ? `\n\n[여행지] ${destinationName} — 여행지는 이미 정해졌으니 목적지는 묻지 마세요.`
                      : '');

            // 이미 짜인 일정이 있으면: 기간 재질문 금지 + 부분수정 인식 (배치 모드에서만)
            let chatThinking = 0; // 단순 수집 대화는 0(저비용), 편집 의도 판단이 필요할 때만 추론 활성
            if (!recommendMode) {
                const planText = buildCurrentPlanText(currentPlan);
                if (planText) {
                    chatThinking = 512; // 부분수정/추가 의도 파악엔 약간의 추론이 큰 도움
                    const dc = currentPlan!.dayCount;
                    const cityKey = resolveCityKey(destinationName);
                    const placeList = cityKey ? buildCatalogListing(cityKey, dc) : '';
                    system +=
                        `\n\n[현재 저장된 일정] 총 ${dc}일 일정이 이미 있습니다:\n${planText}\n\n` +
                        `[매우 중요 — 이미 일정이 있을 때는 "요청 분류"를 아래 우선순위로 먼저 판단하세요]\n` +
                        `(A) 이미 배치된 특정 장소를 "다른 것으로 바꿔/교체/변경" 요청 → intent="swap" (교체 규칙 따름). 트리거 키워드: 바꿔, 변경, 교체, 다른 곳, ○○ 말고, 대신, 한 등급/단계, 더 좋은/저렴한/높은, 업그레이드. ★ 계획을 짜던 중이라도 이 신호가 있으면 "절대 create/edit 로 두지 말고 반드시 intent=swap" 으로 분류하세요.\n` +
                        `(B) 장소를 "추가/더 넣어"(특정 일차 또는 "매일/날마다" 반복 포함) → intent="edit", ready=true. ★notes 에는 "이번에 추가할 내용만 간결히"(예: "매일 저녁 마사지 추가", "3일차에 맛집 하나 추가") 담으세요. 전체 여행 요약(예: "우붓 3박+시내 4박...")을 notes 에 넣지 마세요 — 요약을 넣으면 '이미 다 배치됨'으로 오해해 아무것도 추가하지 못합니다.\n` +
                        `   ★★특정 장소를 추천/확정했다면 그 장소의 "정확한 카탈로그 이름"을 notes 에 반드시 포함하세요(예: "1일차 마지막에 카르사 스파 우붓 추가"). 이름을 빼면 엉뚱한 장소가 들어갑니다. 위 [장소 카탈로그]에 있는 이름을 그대로 쓰세요.\n` +
                        `   ★★사용자가 특정 종류(마사지/스파·맛집·카페·쇼핑·관광지 등)를 원하면 "반드시 그 종류의 장소만" 추천하세요. 예: "스파/마사지 추천"에 관광지·투어(예: 원숭이 숲)를 추천하지 마세요. 카탈로그에서 그 종류(서브카테고리)에 맞는 이름만 고르세요.\n` +
                        `(C) "처음부터/전체 새로 짜줘" 명시 → intent="create".\n` +
                        `그 외 단순 문의는 현재 일정을 참고해 친절히 답만 하세요.\n` +
                        `- 기간은 이미 ${dc}일로 정해져 있습니다. "며칠/몇박몇일"을 다시 묻지 말고 requirements.dayCount=${dc} 로 채우세요.`;

                    if (placeList) {
                        system +=
                            `\n\n[이 도시의 장소 카탈로그] (# 는 카테고리 food/hotel/shopping/tourspa/transport. 교체는 반드시 이 목록에서만 대안을 고르세요. 숙소 tier=budget<value<upscale<luxury)\n${placeList}\n\n` +
                            `[장소 교체(swap) 대화 규칙 — 숙소·맛집·쇼핑·투어 등 모든 카테고리]\n` +
                            `- 사용자가 "그 호텔/맛집/장소를 ~하게 바꿔줘/변경/다른 곳/○○ 말고 다른 걸/더 저렴/더 좋은" 처럼 "이미 배치된 특정 장소를 다른 것으로 교체"해달라고 하면:\n` +
                            `  1) 현재 일정에서 대상 장소가 무엇인지(그리고 몇 일차인지) 파악하고,\n` +
                            `  2) 위 카탈로그에서 "같은 카테고리"의 대안 1곳을 요청(예산·위치·분위기·취향)에 맞게 골라 "현재 '<지금 장소>' 대신 '<추천 장소>'는 어떠세요? <한 줄 이유>. 이걸로 바꿀까요?" 라고 물어보세요.\n` +
                            `     ★ 이 제안 단계에서 이미 requirements.intent="swap", requirements.swapFrom="<현재 장소명 그대로>", requirements.swapTo="<추천 장소명, 카탈로그 name 그대로>", requirements.swapCategory="<food|hotel|shopping|tourspa|transport>" 를 반드시 채우세요. 단 ready=false (아직 사용자 확정 전).\n` +
                            `  3) 사용자가 확정("응/좋아/그걸로/바꿔줘")하면: 위 swap 필드를 그대로 유지한 채 ready=true 로만 바꿔 응답하세요. (자연어로만 답하지 말고 requirements 를 반드시 채울 것)\n` +
                            `  4) 사용자가 마음에 안 들어 하면 requirements.swapTo 를 다른 후보로 바꿔 다시 제시하세요(ready=false).\n` +
                            `  - 교체는 "같은 카테고리"끼리만(맛집→맛집, 숙소→숙소). swapFrom/swapTo 이름은 반드시 목록/현재 일정에 있는 정확한 이름을 사용하세요(지어내지 말 것).\n` +
                            `  - "추가"가 아니라 "교체/바꿔"인 점에 유의: 새로 더하는 게 아니라 기존 것을 대체하는 것이면 swap 입니다.`;
                    }
                }
            }

            // 클라이언트가 누적한 슬롯을 "확정 항목 재질문 금지"로 주입 (모델의 이력 재도출 누락 보완).
            system += buildKnownSlotsText(knownSlots, recommendMode);

            const raw = await callModelRetry({ system, messages, json: true, temperature: 0.5, thinkingBudget: chatThinking });
            const parsed = parseChatEnvelope(raw);

            // dayCount 결정적 보정 (배치 모드) — flash 누락에 의존하지 않도록 서버가 확정.
            if (!recommendMode) {
                if (currentPlan && Array.isArray(currentPlan.days) && currentPlan.days.length) {
                    // 편집 문맥: 기간은 기존 일수로 고정
                    parsed.requirements = { ...(parsed.requirements || {}), dayCount: currentPlan.dayCount };
                } else {
                    const dc = extractDayCount(messages);
                    if (dc && dc >= 1 && dc <= 30) {
                        parsed.requirements = { ...(parsed.requirements || {}), dayCount: dc };
                    }
                }
            }

            return NextResponse.json({ mode: recommendMode ? 'recommend' : 'ask', ...parsed });
        }

        if (phase === 'recommend-destination') {
            const { requirements } = body as { requirements?: Requirements };

            const cities = listRecommendableCities();
            const listing = buildDestinationListing(cities);
            const userPrompt = buildRecommendPrompt(requirements, listing);

            const parsed = await callModelJson({
                system: RECOMMEND_SYSTEM,
                messages: [{ role: 'user', content: userPrompt }],
                json: true,
                temperature: 0.6,
                maxOutputTokens: 1024,
                thinkingBudget: 768, // 시기·취향에 맞는 도시 선별엔 추론이 필요
            });
            if (!parsed) {
                return NextResponse.json({ error: 'AI 응답을 이해하지 못했어요. 다시 시도해 주세요.' }, { status: 502 });
            }

            const { destinations, warnings } = validateRecommendations(parsed);
            if (!destinations.length) {
                return NextResponse.json({ error: '추천할 여행지를 찾지 못했어요. 조건을 바꿔 다시 시도해 주세요.' }, { status: 502 });
            }
            return NextResponse.json({ destinations, warnings });
        }

        if (phase === 'generate') {
            const { requirements, destinationEngName, destinationName, currentPlan } = body as GenerateBody;

            const cityKey = resolveCityKey(destinationEngName) || resolveCityKey(destinationName);
            if (!cityKey) {
                return NextResponse.json(
                    { error: '이 여행지는 아직 AI 추천을 지원하지 않아요. (등록된 도시만 가능)' },
                    { status: 400 }
                );
            }

            // 부분 수정 모드: currentPlan 이 오면 기존 일정 유지 + 추가분만 산출
            const editMode = !!(currentPlan && Array.isArray(currentPlan.days) && currentPlan.days.length);

            // 일수: 편집 모드면 기존 일수 우선, 아니면 요구사항 → 없으면 3일. 1~14 클램프.
            let dayCount = Number(editMode ? currentPlan!.dayCount : requirements?.dayCount);
            if (!Number.isInteger(dayCount) || dayCount < 1) dayCount = Number(requirements?.dayCount) || 3;
            dayCount = Math.min(14, Math.max(1, dayCount));

            // "다시 짜/처음부터" 같은 명시적 재생성 요청인가 (편집 상한 예외)
            const isReplanReq = /다시\s*짜|재구성|새로\s*짜|처음부터|전부\s*다시/.test(String(requirements?.notes ?? ''));

            // [DEBUG] 실제 클라이언트 요청 진단 — 문제 재현 후 devserver.log 확인용

            // ── 삭제/제거 요청: AI 는 추가만 지원 → 잘못 추가하지 말고 친절히 안내 ─────
            if (editMode && REMOVE_SIGNAL.test(String(requirements?.notes ?? '')) && !SWAP_KW.test(String(requirements?.notes ?? ''))) {
                return NextResponse.json({
                    plan: { days: [], dayCount }, warnings: [], edit: true, empty: true,
                    message: '카드를 빼시려면 타임라인에서 그 카드를 길게 눌러 보관함(인박스)으로 드래그하거나 삭제해 주세요 🙂 (AI로는 일정 추가·추천을 도와드려요)',
                });
            }

            // ── (0) 특정 장소 지목 추가(편집 모드) ──────────────────────
            // AI 가 채팅에서 "카르사 스파 우붓" 처럼 특정 장소를 추천·확정하면 notes 에 그 이름이 담긴다.
            // 이때 모델 generate 에 맡기면 빈 결과→폴백이 "다른 스파"를 골라 넣는 문제가 있으므로,
            // notes 에 카탈로그 이름이 그대로 있으면 그 장소를 "그대로" 결정적으로 추가한다.
            if (editMode && !detectRecurringAdd(requirements?.notes ?? undefined)) {
                const existing0 = existingPlaceNames(currentPlan);
                const named = findNamedPlaceInText(cityKey, requirements?.notes ?? undefined, existing0);
                // 지목한 장소가 "요청 서브카테고리"와 맞을 때만 신뢰(예: 마사지 요청인데 이름은 '원숭이 숲'(액티비티) → 거부).
                const namedWantSub = named ? detectSubcatTypes(named.category, requirements?.notes ?? undefined) : null;
                const namedOk = named && (!namedWantSub || namedWantSub.includes(String(named.type)));
                if (named && namedOk) {
                    const day = parseTargetDay(requirements?.notes ?? undefined, dayCount) ?? 1;
                    const { plan, warnings } = validateCatalogPlan(
                        { days: [{ day, items: [{ name: named.name, category: named.category, time: null, note: null }] }] },
                        cityKey, dayCount, existing0
                    );
                    if (plan.days.length) return NextResponse.json({ plan, warnings, edit: true });
                }

                // ── (0.5) 카테고리 단건 추가 → 결정적 처리 ──────────────────
                // "1일차에 마사지 하나 / 2일차에 맛집 추천" 처럼 "특정 카테고리를 소수 추가"면 서버가 직접 배치.
                // (모델 편집에 맡기면 ①엉뚱한 서브카테고리 ②요청과 달리 전체 일정을 다시 짜 9장씩 폭발 → 방지)
                const notesText = requirements?.notes ?? undefined;
                const det = detectCategory(notesText);
                // 편집 모드에서 카테고리가 언급되면 기본적으로 "그 카테고리를 소수 추가"로 본다.
                // 단 ①"다시 짜/재구성/처음부터"(재생성) ②"바꿔/교체/대신"(swap)은 제외 → 모델/스왑 경로로.
                const isSwapish = SWAP_KW.test(String(notesText ?? ''));
                // 카테고리가 2개 이상이면(예: "1일차 마사지, 2일차 맛집") 복합 요청 → 단일 결정적 처리하지 말고
                // 모델이 일차별로 다르게 배치하도록 넘긴다(상한 4장으로 폭발 방지).
                const compound = detectCategoriesAll(notesText).size > 1;
                if (det && !isReplanReq && !isSwapish && !compound) {
                    const count = parseAddCount(notesText);
                    // "2일차랑 3일차에" 처럼 여러 일차를 명시하면 각 일차에 count 개씩 배치.
                    const targetDays = parseTargetDays(notesText, dayCount);
                    if (targetDays.length > 1) {
                        const existing0 = existingPlaceNames(currentPlan);
                        let pool = listCatalogPlaces(cityKey, det.category).filter((p) => p?.name && !existing0.has(String(p.name).trim().toLowerCase()));
                        pool = narrowPoolBySubcat(pool, det.category, notesText);
                        if (pool.length) {
                            const hotelCoord = activeHotelCoordByDay(currentPlan!, dayCount);
                            const used = new Set<string>();
                            const mdays: Array<{ day: number; items: any[] }> = [];
                            for (const day of targetDays) {
                                const items: any[] = [];
                                for (let k = 0; k < count; k++) {
                                    const ch = nearestUnused(pool, hotelCoord.get(day), used) ?? pool[0];
                                    if (!ch) break;
                                    used.add(String(ch.name).trim().toLowerCase());
                                    items.push({ ...placeToCardPayload(ch, det.category), time: null, note: null });
                                }
                                if (items.length) mdays.push({ day, items });
                            }
                            if (mdays.length) return NextResponse.json({ plan: { days: mdays, dayCount }, warnings: [], edit: true });
                        }
                        const types0 = detectSubcatTypes(det.category, notesText);
                        return NextResponse.json({ plan: { days: [], dayCount }, warnings: [], edit: true, empty: true, message: noMatchGuide(destinationName, det.category, types0) });
                    }
                    const fb = buildDeterministicEditAdd(cityKey, dayCount, currentPlan!, requirements, count);
                    if (fb.plan.days.length) {
                        return NextResponse.json({ plan: fb.plan, warnings: fb.warnings, edit: true });
                    }
                    // 요청 서브카테고리가 목록에 없음 → 친절히 없다고 + 직접 추가 안내.
                    const types = detectSubcatTypes(det.category, notesText);
                    return NextResponse.json({
                        plan: { days: [], dayCount }, warnings: [], edit: true, empty: true,
                        message: noMatchGuide(destinationName, det.category, types),
                    });
                }
            }

            // ── 결정적 반복 추가(편집 모드) ─────────────────────────────
            // "매일 마사지 / 날마다 맛집" 처럼 "모든 날 반복 추가" 요청은 모델이 자주 빈 배열/환각 이름을 내
            // 반영 실패한다. → 서버가 직접 카탈로그에서 미사용 장소를 골라 각 일차에 1곳씩 결정적으로 배치.
            if (editMode) {
                const recur = detectRecurringAdd(requirements?.notes ?? undefined);
                if (recur) {
                    const existing = existingPlaceNames(currentPlan);
                    const wantTypes = detectSubcatTypes(recur.category, requirements?.notes ?? undefined); // 요청 서브카테고리
                    // 이미 "요청 서브카테고리에 해당하는 카드"가 있는 일차만 건너뜀.
                    // 존재 카드의 subType 으로 정확 판정(없으면 같은 카테고리면 있음으로 간주).
                    const daysSatisfied = new Set<number>();
                    for (const d of currentPlan!.days) {
                        for (const it of Array.isArray(d.items) ? d.items : []) {
                            if (it?.category !== recur.category) continue;
                            if (wantTypes && it?.subType && !wantTypes.includes(String(it.subType))) continue;
                            daysSatisfied.add(Number(d.day));
                        }
                    }
                    let pool = listCatalogPlaces(cityKey, recur.category)
                        .filter((p) => p?.name && !existing.has(String(p.name).trim().toLowerCase()));
                    // 요청 서브카테고리(예: 스파·마사지/한식/면세점)로 정확히 좁힘 → "마사지 요청에 투어" 방지.
                    pool = narrowPoolBySubcat(pool, recur.category, requirements?.notes ?? undefined);
                    // 매일 배치 전략(거리 vs 다양성 균형):
                    //  1) "적당히 가까운(≤15km) 미사용" 장소가 있으면 그걸 → 매일 서로 다른 곳(다양성)
                    //  2) 미사용이 너무 멀면(>15km), 먼 곳 대신 "근처(≤8km) 장소를 번갈아 반복"(우붓 마사지 2곳 교대)
                    //  3) 근처가 전무하면 가장 가까운 미사용(멀어도) → 4) 다 쓰면 최근접 반복
                    const hotelCoord = activeHotelCoordByDay(currentPlan!, dayCount);
                    const R = 15000; // 반경 15km 를 "그 날 다닐 만한 거리"로 봄
                    const usedCount = new Map<string, number>();
                    const dist = (ref: LatLng | undefined, p: any) => (ref ? haversineM(ref, p?.coordinates) : 0);
                    const days: Array<{ day: number; items: any[] }> = [];
                    for (let day = 1; day <= dayCount; day++) {
                        if (daysSatisfied.has(day)) continue;
                        if (!pool.length) break;
                        const ref = hotelCoord.get(day);
                        const sorted = ref ? [...pool].sort((a, b) => dist(ref, a) - dist(ref, b)) : pool;
                        const unusedNearest = sorted.find((p) => (usedCount.get(p.name) ?? 0) === 0);
                        let best;
                        if (unusedNearest && dist(ref, unusedNearest) <= R) {
                            best = unusedNearest; // 15km 이내 미사용 우선 → 매일 서로 다른 곳(다양성)
                        } else {
                            // 미사용이 너무 멀면 먼 곳 대신 "15km 이내 장소를 번갈아 반복"(가장 적게 쓴 것, 동률이면 최근접)
                            const within = sorted.filter((p) => dist(ref, p) <= R);
                            if (within.length) {
                                best = within[0]; let bu = Infinity;
                                for (const p of within) { const u = usedCount.get(p.name) ?? 0; if (u < bu) { bu = u; best = p; } }
                            } else best = unusedNearest ?? sorted[0]; // 15km 내 전무 → 먼 미사용 or 최근접 반복
                        }
                        usedCount.set(best.name, (usedCount.get(best.name) ?? 0) + 1);
                        days.push({ day, items: [{ ...placeToCardPayload(best, recur.category), time: null, note: null }] });
                    }
                    if (!days.length) {
                        const message = daysSatisfied.size >= dayCount
                            ? '이미 모든 일정에 요청하신 종류가 들어가 있어요 🙂'
                            : noMatchGuide(destinationName, recur.category, wantTypes);
                        return NextResponse.json({ plan: { days: [], dayCount }, warnings: [], edit: true, empty: true, message });
                    }
                    return NextResponse.json({ plan: { days, dayCount }, warnings: [], edit: true });
                }
            }

            const listing = buildCatalogListing(cityKey, dayCount);

            // 실제 여행 사례 주입(신규 생성 시에만). harness A/B 용 disableReference 토글.
            let referenceBlock = '';
            if (!editMode && !(body as any).disableReference) {
                const refs = await loadReferenceItineraries(destinationEngName || destinationName || undefined);
                referenceBlock = buildReferenceBlock(refs, dayCount, requirements?.companions ?? undefined);
            }

            const userPrompt = buildGeneratePrompt(destinationName || cityKey, requirements, listing, dayCount, editMode ? currentPlan : undefined, referenceBlock);

            const parsed = await callModelJson({
                system: GENERATE_SYSTEM,
                messages: [{ role: 'user', content: userPrompt }],
                json: true,
                temperature: 0.5,
                maxOutputTokens: 4096,
                thinkingBudget: 1024, // 동선·카테고리 균형·예산 매칭 등 다단계 추론 필요
            });
            // 모델 응답 검증. 실패(!parsed)여도 에러로 끝내지 않고 아래 결정적 폴백으로 넘긴다.
            const validated = parsed
                ? validateCatalogPlan(parsed, cityKey, dayCount, editMode ? existingPlaceNames(currentPlan) : undefined)
                : { plan: { days: [], dayCount }, warnings: ['모델 응답 파싱 실패 → 폴백'] };
            let { plan, warnings } = validated;

            // ★카드 보장: 모델이 빈 결과를 내면 서버가 카탈로그로 직접 채운다(대충이라도 카드가 나오게).
            if (!plan.days.length) {
                if (editMode) {
                    const fb = buildDeterministicEditAdd(cityKey, dayCount, currentPlan!, requirements);
                    if (fb.plan.days.length) {
                        return NextResponse.json({ plan: fb.plan, warnings: [...warnings, ...fb.warnings], edit: true });
                    }
                    // 정말 추가할 게 없으면 empty + 친절한 안내(없다고 + 직접 추가 방법).
                    const det = detectCategory(requirements?.notes ?? undefined);
                    const message = det
                        ? noMatchGuide(destinationName, det.category, detectSubcatTypes(det.category, requirements?.notes ?? undefined))
                        : '요청하신 장소를 목록에서 찾지 못했어요 😅 보관함(인박스)에서 원하는 카테고리 탭의 \'직접 추가하기\'로 직접 만들어 넣으실 수 있어요! 🙂';
                    return NextResponse.json({ plan, warnings, edit: true, empty: true, message });
                }
                const fb = buildDeterministicPlan(cityKey, dayCount, requirements);
                if (fb.plan.days.length) {
                    return NextResponse.json({ plan: fb.plan, warnings: [...warnings, ...fb.warnings], fallback: true });
                }
                return NextResponse.json({ error: '일정을 만들지 못했어요. 조건을 바꿔 다시 시도해 주세요.' }, { status: 502 });
            }

            // 편집 폭발 방지: 명시적 재생성이 아닌 편집인데 모델이 과다 추가하면 상한(4장)으로 자른다.
            // (모호한 요청에 Gemini 가 전체 일정을 다시 짜 카드가 쏟아지는 것을 막음)
            if (editMode && !isReplanReq) {
                const CAP = 4;
                let total = plan.days.reduce((a: number, d: any) => a + (d.items?.length ?? 0), 0);
                if (total > CAP) {
                    let remain = CAP;
                    plan.days = plan.days
                        .map((d: any) => {
                            const take = Math.max(0, Math.min(remain, d.items.length));
                            remain -= take;
                            return { ...d, items: d.items.slice(0, take) };
                        })
                        .filter((d: any) => d.items.length > 0);
                    warnings = [...warnings, `편집 상한(${CAP}) 초과분 제외`];
                }
            }
            return NextResponse.json({ plan, warnings, edit: editMode });
        }

        if (phase === 'swap') {
            // 장소 교체: swapTo(새 장소명)를 카탈로그에서 찾아 카드 payload 로 반환. (모든 카테고리)
            // 실제 제거/삽입은 클라이언트(swapPlace)에서 기존 장소 위치에 맞춰 처리.
            const { destinationEngName, destinationName, swapTo, swapCategory } = body as {
                destinationEngName?: string; destinationName?: string; swapTo?: string; swapCategory?: string;
            };
            const cityKey = resolveCityKey(destinationEngName) || resolveCityKey(destinationName);
            if (!cityKey) {
                return NextResponse.json({ error: '이 여행지는 아직 지원하지 않아요.' }, { status: 400 });
            }
            const name = String(swapTo ?? '').trim();
            // swapCategory 가 있으면 그 카테고리 우선, 없으면 전체 탐색
            const match = name ? findCatalogPlace(cityKey, name, swapCategory) : null;
            if (!match) {
                return NextResponse.json({ error: '바꿀 장소를 목록에서 찾지 못했어요.' }, { status: 502 });
            }
            return NextResponse.json({ place: placeToCardPayload(match.place, match.category), category: match.category });
        }

        return NextResponse.json({ error: '알 수 없는 요청이에요.' }, { status: 400 });
    } catch (e) {
        console.error('[ai-planner]', e);
        return NextResponse.json({ error: 'AI 응답 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.' }, { status: 500 });
    }
}
