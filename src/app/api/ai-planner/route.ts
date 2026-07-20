import { NextResponse } from 'next/server';
import { callModel, type ChatMessage } from '@/lib/ai/callModel';
import { resolveCityKey, buildCatalogListing, findCatalogPlace, placeToCardPayload } from '@/lib/ai/catalog';
import { listRecommendableCities, buildDestinationListing, findRecommendableCity, cityImage } from '@/lib/ai/destinations';

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
- 존댓말. 한 번에 1~2개만 질문. 위 순서를 따르되 사용자가 먼저 말한 항목은 채우고 건너뜁니다.
- 이미 답한 항목은 절대 다시 묻지 않습니다.
- 사용자가 질문/문의를 하면 먼저 친절하게 답한 뒤, 아직 못 받은 다음 항목을 이어서 물어보세요. (딱딱한 설문지처럼 굴지 말 것)
- 사용자가 "그냥 짜줘/알아서 해줘" 같이 진행을 원하면 더 묻지 말고 ready 를 true 로.
- dayCount 만 정해지면 ready 를 true 로 할 수 있습니다(나머지는 선택). 다만 2~4번을 한두 개 더 받으면 더 좋은 일정이 되니, 급해 보이지 않으면 1~2개 더 물어보세요.
- 값을 못 받은 항목은 비워둡니다(null 또는 빈 배열).

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
    "intent": <"create"|"edit"|null>
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
- 존댓말. 한 번에 1~2개만 질문. 이미 답한 항목은 다시 묻지 않습니다.
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
  · 여행 내내 숙소 1곳이면: 1일차에 배치 + checkOutDay 는 마지막 일차(dayCount).
  · 숙소를 옮기면: 각 숙소를 체크인 일차에 배치 + checkOutDay 는 다음 숙소 체크인 전날(마지막 숙소는 dayCount).
  · 같은 숙소를 여러 번 넣지 말고, 한 숙소당 한 번만 배치하세요(체크인/체크아웃 카드는 시스템이 자동 생성).
- 각 날에 최소 2곳 이상 채우고, 하루 최대 8개까지.
- [부분 수정 모드] "이미 배치된 일정"이 함께 주어지면, 전체를 다시 만들지 말고 사용자 요청에 맞는 "추가/변경분만" 출력하세요. 이미 있는 장소는 다시 출력하지 마세요.

반드시 아래 JSON 형식으로만 응답하세요(그 외 텍스트 금지):
{
  "days": [ { "day": <1..dayCount>, "items": [ { "name": "<카탈로그 name 그대로>", "category": "<food|hotel|shopping|tourspa|transport>", "checkOutDay": <hotel 일 때만, 체크아웃 일차 번호>, "time": <"HH:MM"|null>, "note": <"짧은 한국어 메모"|null> } ] } ]
}`;

const MAX_PER_DAY = 8;

// 현재 보드에 이미 배치된 일정 요약(일차별 카드 name/category). 대화·배치 모두에 컨텍스트로 주입.
interface CurrentPlan {
    dayCount: number;
    days: Array<{ day: number; items: Array<{ name: string; category?: string }> }>;
}

interface ChatBody {
    phase: 'chat';
    messages: ChatMessage[];
    destinationName?: string;
    hasDestination?: boolean; // false 면 여행지 추천 모드로 대화
    currentPlan?: CurrentPlan; // 이미 짜인 일정(있으면 기간 재질문 금지 + 부분수정 인식)
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
    intent?: 'create' | 'edit' | null; // edit=기존 일정에 부분 추가/수정, create=전체 새 일정
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

// 코드값 → 프롬프트용 한글 라벨
const COMPANION_LABEL: Record<string, string> = { solo: '혼자', couple: '커플', family: '가족', friends: '친구' };
const BUDGET_LABEL: Record<string, string> = { budget: '가성비', mid: '중간', luxury: '고급' };

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

function buildGeneratePrompt(destinationName: string | undefined, req: Requirements | undefined, listing: string, dayCount: number, currentPlan?: CurrentPlan): string {
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
            `- 요청에 명시된 개수만 추가하세요. "하나/맛집 하나"면 딱 1곳만. (특별한 수량 언급이 없으면 1~2곳)\n` +
            `- 추가할 게 없으면 days 를 빈 배열로 두세요.`
        );
    } else {
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

    // 숙소 스테이 → 체크인 카드(해당 일차 앞) + 체크아웃 카드(체크아웃 일차 앞) 2장 전개
    // 같은 날의 정렬: 체크아웃(아침) → 체크인(오후) → 나머지 일정 순으로 상단 고정
    const prepend = (day: number, card: any) => {
        const list = byDay.get(day) ?? [];
        list.unshift(card);
        byDay.set(day, list);
    };
    for (const s of stays) {
        const base = placeToCardPayload(s.place, 'hotel');
        // 체크인 카드
        prepend(s.checkInDay, { ...base, showCheckOut: false, time: s.time, note: s.note });
        // 체크아웃 카드 (체크인 일차와 다를 때만)
        if (s.checkOutDay !== s.checkInDay) {
            prepend(s.checkOutDay, { ...base, showCheckOut: true, time: null, note: null });
        }
    }

    const days = Array.from(byDay.keys())
        .sort((a, b) => a - b)
        .map((day) => ({ day, items: byDay.get(day)! }));

    return { plan: { days, dayCount }, warnings };
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
            const { messages = [], destinationName, hasDestination, currentPlan } = body as ChatBody;
            // 여행지 유무로 모드 분기: 있으면 일정 요구사항 수집, 없으면 여행지 추천 정보 수집
            const recommendMode = hasDestination === false || (!destinationName && hasDestination !== true);
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
                    system +=
                        `\n\n[현재 저장된 일정] 총 ${dc}일 일정이 이미 있습니다:\n${planText}\n\n` +
                        `[매우 중요 — 이미 일정이 있을 때의 규칙]\n` +
                        `- 기간은 이미 ${dc}일로 정해져 있습니다. "며칠/몇박몇일"을 절대 다시 묻지 말고 requirements.dayCount 를 ${dc} 로 채우세요.\n` +
                        `- 사용자가 "N일차에 ~ 추가/빼줘/바꿔줘/더 넣어줘/근처 맛집" 처럼 부분 수정을 요청하면: 되묻지 말고 그 요청을 requirements.notes 에 구체적으로 담고, requirements.intent="edit", ready=true 로 즉시 응답하세요.\n` +
                        `- 사용자가 "처음부터 새로/전체 다시 짜줘"라고 명시할 때만 requirements.intent="create" 로 두고 새로 구성하세요.\n` +
                        `- 이미 배치된 장소나 일정에 대해 물어보면 위 현재 일정을 참고해 친절히 답하세요.`;
                }
            }

            const raw = await callModelRetry({ system, messages, json: true, temperature: 0.5, thinkingBudget: chatThinking });
            const parsed = parseChatEnvelope(raw);

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

            const listing = buildCatalogListing(cityKey, dayCount);
            const userPrompt = buildGeneratePrompt(destinationName || cityKey, requirements, listing, dayCount, editMode ? currentPlan : undefined);

            const parsed = await callModelJson({
                system: GENERATE_SYSTEM,
                messages: [{ role: 'user', content: userPrompt }],
                json: true,
                temperature: 0.5,
                maxOutputTokens: 4096,
                thinkingBudget: 1024, // 동선·카테고리 균형·예산 매칭 등 다단계 추론 필요
            });
            if (!parsed) {
                return NextResponse.json({ error: 'AI 응답을 이해하지 못했어요. 다시 시도해 주세요.' }, { status: 502 });
            }

            const { plan, warnings } = validateCatalogPlan(parsed, cityKey, dayCount, editMode ? existingPlaceNames(currentPlan) : undefined);
            if (!plan.days.length) {
                // 편집 모드에서 추가분이 없으면 에러가 아니라 "추가할 게 없음" 안내
                if (editMode) {
                    return NextResponse.json({ plan, warnings, edit: true, empty: true });
                }
                return NextResponse.json({ error: '일정을 만들지 못했어요. 조건을 바꿔 다시 시도해 주세요.' }, { status: 502 });
            }
            return NextResponse.json({ plan, warnings, edit: editMode });
        }

        return NextResponse.json({ error: '알 수 없는 요청이에요.' }, { status: 400 });
    } catch (e) {
        console.error('[ai-planner]', e);
        return NextResponse.json({ error: 'AI 응답 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.' }, { status: 500 });
    }
}
