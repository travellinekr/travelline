// AI provider 호출 단일 래퍼.
// 지금은 Gemini(gemini-flash-latest)만 사용하지만, OpenAI 호환 API(OpenRouter 등)로
// 교체할 때 이 함수 한 곳만 바꾸면 되도록 provider 세부를 여기에 가둔다.
//
// 참고: 기존 /api/recommend/route.ts 의 raw fetch 패턴을 재사용·정리한 버전.

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface CallModelOpts {
    /** 시스템 지시(역할·출력형식). Gemini systemInstruction 으로 전달 */
    system?: string;
    /** 대화 턴 (user/assistant 교대). 첫 항목은 user 여야 함(아니면 앞의 model 턴 제거) */
    messages: ChatMessage[];
    /** JSON 강제 (responseMimeType: application/json) */
    json?: boolean;
    temperature?: number;
    maxOutputTokens?: number;
    /**
     * 사고(thinking) 토큰 예산. 0=비활성(빠름·저비용), >0=추론 활성(맥락·동선 품질↑).
     * 어려운 단계(generate/recommend/편집 의도 판단)에만 부여해 비용을 아낀다.
     */
    thinkingBudget?: number;
}

// 모델 폴백 체인: 앞에서부터 시도해 성공하는 첫 모델을 사용.
// Google이 특정 버전을 회수(404)/롤오버해도 다음 모델로 자동 대체 → AI 전체가 멈추지 않음.
//
// 순서 근거(2026-07 기준, 현재 키 실측):
//  - gemini-flash-latest : 유일하게 확실히 작동(현재 gemini-3.6-flash 로 해석) → 1순위
//  - gemini-2.5-flash    : 이 신규 프로젝트 키에선 '신규 사용자 제공 종료(404)'. 다른(구) 키/유료 키에선
//                          접근될 수 있어 폴백으로 남겨둠(되면 사용, 안 되면 자동 skip).
//  - gemini-2.0-flash    : 최후 폴백.
// 특정 버전으로 진짜 고정하고 싶으면 이 배열 맨 앞을 그 버전으로 바꾸면 됨(단, 그 버전이 키에서 404면 전멸).
const GEMINI_MODELS = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-2.0-flash'];

// gemini-3.x flash 는 사고(thinking)를 끌 수 없다(thinkingBudget:0 → 400).
// thinkingConfig 를 생략하면 '자동 사고'로 빠져 "안녕" 한 마디에도 사고 200토큰+ 를 낭비한다.
// → 저비용 경로(thinkingBudget<=0)는 이 낮은 캡으로 대체: 단순 요청은 사고 0, 필요 시 캡까지만 사용.
const MIN_THINKING_BUDGET = 128;

/**
 * 모델을 호출해 원문 텍스트를 반환한다. (JSON 파싱은 호출측 책임)
 * 실패 시 throw.
 */
export async function callModel({ system, messages, json = true, temperature = 0.5, maxOutputTokens = 2048, thinkingBudget = 0 }: CallModelOpts): Promise<string> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY 가 설정되지 않았습니다.');

    // Gemini는 contents가 role 'user'로 시작하고 user/model 교대를 기대.
    // 클라이언트 인사말(assistant) 등 앞쪽 model 턴은 제거.
    const trimmed = [...messages];
    while (trimmed.length && trimmed[0].role !== 'user') trimmed.shift();

    const contents = trimmed.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
    }));

    // 저비용 경로(0)는 낮은 캡으로 대체(생략 시 자동사고로 토큰 낭비). 어려운 단계(>0)는 요청값 그대로.
    const effThinkingBudget = thinkingBudget > 0 ? thinkingBudget : MIN_THINKING_BUDGET;
    const sys = system ? { systemInstruction: { parts: [{ text: system }] } } : {};
    const jsonCfg = json ? { responseMimeType: 'application/json' } : {};

    // 바디 단계적 축약(graceful degradation).
    // 신규 모델이 특정 인자(예: thinkingConfig)를 거부(400)해도, 문제 인자를 떼고 재시도 →
    // "파라미터 하나로 전 모델이 동시에 400" 나는 완전 먹통을 방지. (저번 thinkingBudget:0 사태 대응)
    //   L0 전체 → L1 thinkingConfig/temperature 제거(JSON 모드 유지) → L2 generationConfig 완전 제거(최후 보루)
    const bodyVariants: any[] = [
        {
            contents, ...sys,
            generationConfig: {
                temperature,
                maxOutputTokens: maxOutputTokens + effThinkingBudget,
                thinkingConfig: { thinkingBudget: effThinkingBudget },
                ...jsonCfg,
            },
        },
        { contents, ...sys, generationConfig: { ...jsonCfg } },
        { contents, ...sys },
    ];

    const parseText = (data: any): string => {
        // 방어적 파싱: 사고(thought) 파트를 제외하고 text 가 있는 파트만 이어붙임
        // (thinking 모델이 사고 파트를 parts[0] 에 넣어도 본문을 놓치지 않도록 — parts[0].text 직접 접근 지양)
        const parts: any[] = data?.candidates?.[0]?.content?.parts ?? [];
        return parts
            .filter((p) => typeof p?.text === 'string' && p?.thought !== true)
            .map((p) => p.text)
            .join('')
            .trim();
    };

    let lastErr: Error | null = null;
    for (const model of GEMINI_MODELS) {
        for (const body of bodyVariants) {
            try {
                const res = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(body),
                    }
                );

                if (res.status === 404) {
                    // 모델 자체가 없음 → 바디 축약해도 소용없음. 다음 모델로.
                    lastErr = new Error(`Gemini ${model} 404 (모델 없음)`);
                    break;
                }
                if (!res.ok) {
                    // 400(인자 거부) 등 → 더 축약한 바디로 재시도(다음 variant)
                    const detail = await res.text().catch(() => '');
                    lastErr = new Error(`Gemini ${model} ${res.status}: ${detail.slice(0, 160)}`);
                    continue;
                }

                const text = parseText(await res.json());
                if (!text) {
                    lastErr = new Error(`Gemini ${model}: 빈 응답`);
                    continue; // 축약 바디로 재시도
                }
                // 혹시 남아있는 코드펜스 제거
                return text.replace(/```json/g, '').replace(/```/g, '').trim();
            } catch (e: unknown) {
                lastErr = e instanceof Error ? e : new Error(String(e));
                continue; // 네트워크 오류 등 → 다음 variant
            }
        }
    }
    throw lastErr ?? new Error('Gemini 호출 실패 (모든 모델·바디 실패)');
}
