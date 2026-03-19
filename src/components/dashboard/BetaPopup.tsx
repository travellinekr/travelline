"use client";

import { useState, useEffect, useRef } from "react";

const PASSWORD = "12346";
const SESSION_KEY = "travelline_beta_unlocked";

export default function BetaPopup() {
    const [visible, setVisible] = useState(false);
    const [input, setInput] = useState("");
    const [shake, setShake] = useState(false);
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // 세션 동안 한 번 입력하면 다시 안 뜸
        const unlocked = sessionStorage.getItem(SESSION_KEY);
        if (!unlocked) setVisible(true);
    }, []);

    useEffect(() => {
        if (visible) setTimeout(() => inputRef.current?.focus(), 100);
    }, [visible]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input === PASSWORD) {
            sessionStorage.setItem(SESSION_KEY, "1");
            setVisible(false);
        } else {
            setShake(true);
            setError(true);
            setInput("");
            setTimeout(() => { setShake(false); setError(false); }, 600);
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div
                className={`relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}
            >
                {/* 상단 그라디언트 배너 */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 px-8 pt-10 pb-8 text-center">
                    {/* 플로팅 이모지 */}
                    <div className="text-4xl mb-3 animate-bounce select-none">✈️</div>

                    {/* 배지 */}
                    <div className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                        🚀 Coming Soon
                    </div>

                    <h2 className="text-2xl font-black text-white leading-tight mb-2">
                        6월 그랜드 오픈
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        현재 내부 테스트 중입니다.<br />
                        베타 접근 코드를 입력해주세요.
                    </p>
                </div>

                {/* 비밀번호 입력 */}
                <div className="px-8 py-7">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            접근 코드
                        </label>
                        <input
                            ref={inputRef}
                            type="password"
                            value={input}
                            onChange={(e) => { setInput(e.target.value); setError(false); }}
                            placeholder="코드를 입력하세요"
                            className={`w-full px-4 py-3 rounded-xl border-2 text-center text-lg tracking-[0.3em] font-bold outline-none transition-all ${
                                error
                                    ? "border-red-400 bg-red-50 text-red-600 placeholder:text-red-300"
                                    : "border-slate-200 focus:border-orange-400 bg-slate-50 focus:bg-white text-slate-800"
                            }`}
                            autoComplete="off"
                        />
                        {error && (
                            <p className="text-center text-xs text-red-500 font-semibold -mt-1">
                                올바르지 않은 코드입니다
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all hover:shadow-lg active:scale-95 mt-1"
                        >
                            입장하기
                        </button>
                    </form>

                    <p className="text-center text-slate-400 text-xs mt-5 leading-relaxed">
                        © 2026 YoonTech (윤테크)
                    </p>
                </div>
            </div>

            {/* shake 키프레임 */}
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-8px); }
                    40% { transform: translateX(8px); }
                    60% { transform: translateX(-6px); }
                    80% { transform: translateX(6px); }
                }
            `}</style>
        </div>
    );
}
