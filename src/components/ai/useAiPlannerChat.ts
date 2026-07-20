'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { AiRequirements } from './AiPlannerForm';

export interface ChatMsg {
    role: 'user' | 'assistant';
    content: string;
}

export type AiChatMode = 'plan' | 'recommend';

const PLAN_GREETING =
    '안녕하세요! 여행지에 맞춰 일정을 짜드릴게요. 🙂\n며칠 일정인지, 어떤 스타일을 원하시는지 알려주세요.';
const PLAN_EDIT_GREETING =
    '이미 짜인 일정이 있네요! ✏️\n수정하거나 추가할 내용을 말씀해 주세요. (예: "3일차에 맛집 하나 더 추가해줘")';
const RECOMMEND_GREETING =
    '안녕하세요! 어디로 떠날지 함께 정해볼까요? 🌏\n언제쯤 여행을 계획하고 계세요? (여행 시기를 알려주시면 딱 맞는 곳을 추천해드려요)';

const hasPlanDays = (plan?: any) => !!(plan && Array.isArray(plan.days) && plan.days.some((d: any) => (d?.items?.length ?? 0) > 0));
const greetingFor = (mode: AiChatMode, plan?: any) =>
    mode === 'recommend' ? RECOMMEND_GREETING : hasPlanDays(plan) ? PLAN_EDIT_GREETING : PLAN_GREETING;

/**
 * AI 플래너 대화 상태 + 로직.
 * CollaborativeApp 에서 한 번만 인스턴스화해 모바일/데스크톱 패널이 공유 → 패널 개폐와 무관하게 대화 유지.
 * - 여행지가 있으면 'plan'(일정 배치), 없으면 'recommend'(여행지 추천) 모드로 자동 분기.
 */
export interface AiChatController {
    mode: AiChatMode;
    messages: ChatMsg[];
    input: string;
    setInput: (v: string) => void;
    loading: boolean;
    requirements: AiRequirements | null;
    ready: boolean;
    view: 'chat' | 'form';
    setView: (v: 'chat' | 'form') => void;
    send: () => Promise<void>;
    reset: () => void;
}

export function useAiPlannerChat({ destinationName, currentPlan }: { destinationName?: string; currentPlan?: any }): AiChatController {
    const mode: AiChatMode = destinationName ? 'plan' : 'recommend';

    const [messages, setMessages] = useState<ChatMsg[]>([{ role: 'assistant', content: greetingFor(mode, currentPlan) }]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [requirements, setRequirements] = useState<AiRequirements | null>(null);
    const [ready, setReady] = useState(false);
    const [view, setView] = useState<'chat' | 'form'>('chat');

    // 최신 destinationName 참조(stale closure 방지)
    const destRef = useRef(destinationName);
    destRef.current = destinationName;

    // 최신 현재 일정 참조(대화 중 보드가 바뀌어도 최신값 전송)
    const planRef = useRef(currentPlan);
    planRef.current = currentPlan;

    const reset = useCallback(() => {
        setMessages([{ role: 'assistant', content: greetingFor(destRef.current ? 'plan' : 'recommend', planRef.current) }]);
        setInput('');
        setLoading(false);
        setRequirements(null);
        setReady(false);
        setView('chat');
    }, []);

    // 모드 전환(여행지 확정/해제) 시 대화 초기화 → 알맞은 인사말/흐름으로 재시작
    const prevMode = useRef(mode);
    useEffect(() => {
        if (prevMode.current !== mode) {
            prevMode.current = mode;
            reset();
        }
    }, [mode, reset]);

    const send = useCallback(async () => {
        const text = input.trim();
        if (!text || loading) return;
        const next: ChatMsg[] = [...messages, { role: 'user', content: text }];
        setMessages(next);
        setInput('');
        setLoading(true);
        try {
            const res = await fetch('/api/ai-planner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phase: 'chat',
                    destinationName: destRef.current,
                    hasDestination: !!destRef.current,
                    currentPlan: planRef.current ?? undefined,
                    messages: next,
                }),
            });
            const data = await res.json();
            if (!res.ok || data.error) {
                setMessages((m) => [...m, { role: 'assistant', content: data.error || '문제가 생겼어요. 다시 시도해 주세요.' }]);
            } else {
                setMessages((m) => [...m, { role: 'assistant', content: data.message || '...' }]);
                // 턴마다 "누적 병합" — 모델이 일부 필드만 돌려줘도 앞서 모은 값(예: swap 후보)을 잃지 않음.
                // (교체하면 확정 턴에서 requirements={} 가 오면 후보가 날아가는 문제가 있었음)
                if (data.requirements && typeof data.requirements === 'object') {
                    setRequirements((prev) => ({ ...(prev || {}), ...data.requirements }));
                }
                setReady(!!data.ready);
            }
        } catch {
            setMessages((m) => [...m, { role: 'assistant', content: '연결에 문제가 있었어요. 다시 시도해 주세요.' }]);
        } finally {
            setLoading(false);
        }
    }, [input, loading, messages]);

    return { mode, messages, input, setInput, loading, requirements, ready, view, setView, send, reset };
}
