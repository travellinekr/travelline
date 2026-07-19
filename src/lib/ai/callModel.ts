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
}

const GEMINI_MODEL = 'gemini-flash-latest';

/**
 * 모델을 호출해 원문 텍스트를 반환한다. (JSON 파싱은 호출측 책임)
 * 실패 시 throw.
 */
export async function callModel({ system, messages, json = true, temperature = 0.5, maxOutputTokens = 2048 }: CallModelOpts): Promise<string> {
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

    const body: any = {
        contents,
        generationConfig: {
            temperature,
            maxOutputTokens,
            // 사고(thinking) 토큰 비활성화 → 응답이 곧바로 JSON, 잘림/지연 감소
            thinkingConfig: { thinkingBudget: 0 },
            ...(json ? { responseMimeType: 'application/json' } : {}),
        },
    };
    if (system) body.systemInstruction = { parts: [{ text: system }] };

    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }
    );

    if (!res.ok) {
        const detail = await res.text().catch(() => '');
        throw new Error(`Gemini ${res.status}: ${detail.slice(0, 300)}`);
    }

    const data = await res.json();
    let text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    // 혹시 남아있는 코드펜스 제거
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return text;
}
