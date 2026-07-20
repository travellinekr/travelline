'use client';

import { useRef, useEffect } from 'react';
import { Send, Loader2, SlidersHorizontal, MessageCircle, Check, RotateCcw } from 'lucide-react';
import { AiPlannerForm, type AiRequirements } from './AiPlannerForm';
import type { AiChatController, ChatMsg } from './useAiPlannerChat';

interface AiChatProps {
    /** 상위에서 공유되는 대화 컨트롤러(패널 개폐와 무관하게 유지) */
    controller: AiChatController;
    /** (배치 모드) 요약 확인 후 "이 내용으로 배치" 클릭 시 호출 */
    onGenerate?: (req: AiRequirements) => void;
    /** (추천 모드) "여행지 추천받기" 클릭 시 호출 */
    onRecommend?: (req: AiRequirements) => void;
    /** 실행 중 — 버튼 비활성 */
    busy?: boolean;
}

function Bubble({ role, content }: ChatMsg) {
    const isUser = role === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    isUser
                        ? 'bg-emerald-500 text-white rounded-br-md'
                        : 'bg-slate-100 text-slate-700 rounded-bl-md'
                }`}
            >
                {content}
            </div>
        </div>
    );
}

const PACE_LABEL: Record<string, string> = { packed: '빡빡하게', relaxed: '여유롭게' };
const COMPANION_LABEL: Record<string, string> = { solo: '혼자', couple: '커플', family: '가족', friends: '친구' };
const BUDGET_LABEL: Record<string, string> = { budget: '가성비', mid: '중간', luxury: '고급' };

function RequirementSummary({ req }: { req: AiRequirements }) {
    const rows: Array<[string, string]> = [];
    if (req.dayCount) rows.push(['기간', `${req.dayCount}일`]);
    if (req.month) rows.push(['시기', `${req.month}월`]);
    if (req.preferredCities && req.preferredCities.length) rows.push(['관심', req.preferredCities.join(', ')]);
    if (req.companions) rows.push(['동행', COMPANION_LABEL[req.companions] ?? req.companions]);
    if (req.budget) rows.push(['예산', BUDGET_LABEL[req.budget] ?? req.budget]);
    if (req.pace) rows.push(['페이스', PACE_LABEL[req.pace] ?? req.pace]);
    if (req.style && req.style.length) rows.push(['스타일', req.style.join(', ')]);
    if (req.notes) rows.push(['요청', req.notes]);
    if (!rows.length) return null;
    return (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 flex flex-col gap-1.5">
            {rows.map(([k, v]) => (
                <div key={k} className="flex gap-2 text-sm">
                    <span className="w-12 shrink-0 text-emerald-600 font-semibold">{k}</span>
                    <span className="text-slate-700 min-w-0">{v}</span>
                </div>
            ))}
        </div>
    );
}

export function AiChat({ controller, onGenerate, onRecommend, busy }: AiChatProps) {
    const { mode, messages, input, setInput, loading, requirements, ready, view, setView, send, reset } = controller;
    const isRecommend = mode === 'recommend';
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages, loading, ready, view]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // 한글 등 IME 조합 중(isComposing)에는 Enter 를 전송으로 처리하지 않음
        // → 조합 마무리용 Enter 가 전송을 유발해 마지막 글자가 남는 문제 방지
        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            send();
        }
    };

    // ── 빠른 폼 뷰 ────────────────────────────────
    if (view === 'form') {
        return (
            <div className="flex-1 min-h-0 flex flex-col">
                <div className="shrink-0 px-4 pt-3">
                    <button
                        type="button"
                        onClick={() => setView('chat')}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        대화로 짜기
                    </button>
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                    <AiPlannerForm onSubmit={(req) => onGenerate?.(req)} busy={busy} />
                </div>
            </div>
        );
    }

    // ── 대화 뷰 ──────────────────────────────────
    return (
        <div className="flex-1 min-h-0 flex flex-col">
            {/* 상단 도구: 새 대화 / 빠른 폼 */}
            <div className="shrink-0 flex items-center justify-between px-4 pt-2.5">
                <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600 transition"
                >
                    <RotateCcw className="w-3.5 h-3.5" />
                    새 대화
                </button>
                {/* 빠른 폼은 일정 배치(plan) 모드에서만 — 추천 모드는 기간 입력이 없음 */}
                {!isRecommend && (
                    <button
                        type="button"
                        onClick={() => setView('form')}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
                    >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        빠른 폼
                    </button>
                )}
            </div>

            {/* 메시지 목록 */}
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-4 py-3 flex flex-col gap-2.5">
                {messages.map((m, i) => (
                    <Bubble key={i} role={m.role} content={m.content} />
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-100 text-slate-400 rounded-2xl rounded-bl-md px-3.5 py-2.5">
                            <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                    </div>
                )}

                {/* 요약 + 실행 버튼 (모드별) */}
                {ready && requirements && !loading && (() => {
                    const intent = (requirements as any)?.intent;
                    // 요청 유형 구분:
                    //  - swap: 특정 장소 교체 → 로즈 "이 장소로 변경"
                    //  - edit: 기존 일정에 부분 수정/추가(계획 있음 + create 아님) → 인디고 "요청 반영"
                    //  - place: 초기 전체 일정 배치(또는 처음부터 새로) → 에메랄드 "이 내용으로 배치"
                    const isSwapReady = !isRecommend && intent === 'swap' && !!(requirements as any)?.swapTo;
                    const isEdit = !isRecommend && !isSwapReady && controller.hasPlan && intent !== 'create';
                    const kind = isRecommend ? 'recommend' : isSwapReady ? 'swap' : isEdit ? 'edit' : 'place';
                    const btnCls =
                        kind === 'swap' ? 'bg-rose-500 hover:bg-rose-600'
                        : kind === 'edit' ? 'bg-indigo-500 hover:bg-indigo-600'
                        : 'bg-emerald-500 hover:bg-emerald-600';
                    const btnLabel =
                        kind === 'recommend' ? '여행지 추천받기'
                        : kind === 'swap' ? '이 장소로 변경'
                        : kind === 'edit' ? '요청 반영'
                        : '이 내용으로 배치';
                    return (
                        <div className="mt-1 flex flex-col gap-2">
                            {isSwapReady ? (
                                <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 text-sm">
                                    <div className="text-[12px] font-bold text-rose-600 mb-1.5">장소 변경</div>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="line-through text-slate-400">{(requirements as any).swapFrom || '현재 장소'}</span>
                                        <span className="text-slate-400">→</span>
                                        <span className="font-bold text-slate-800">{(requirements as any).swapTo}</span>
                                    </div>
                                </div>
                            ) : isEdit ? (
                                <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3 text-sm">
                                    <div className="text-[12px] font-bold text-indigo-600 mb-1.5">일정 수정 요청</div>
                                    <div className="text-slate-700">{(requirements as any).notes || '현재 일정에 요청하신 내용을 반영해요.'}</div>
                                </div>
                            ) : (
                                <RequirementSummary req={requirements} />
                            )}
                            <button
                                type="button"
                                onClick={() => (isRecommend ? onRecommend?.(requirements) : onGenerate?.(requirements))}
                                disabled={busy}
                                className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl disabled:opacity-60 text-white font-bold text-sm shadow-sm transition ${btnCls}`}
                            >
                                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                {btnLabel}
                            </button>
                        </div>
                    );
                })()}
            </div>

            {/* 입력 */}
            <div className="shrink-0 border-t border-slate-100 p-3 flex items-end gap-2">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    rows={1}
                    placeholder="메시지를 입력하세요…"
                    className="flex-1 resize-none max-h-24 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400"
                />
                <button
                    type="button"
                    onClick={send}
                    disabled={!input.trim() || loading}
                    aria-label="보내기"
                    className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white flex items-center justify-center transition active:scale-95"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
