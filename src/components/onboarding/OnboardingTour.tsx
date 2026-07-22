"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";

export type OnboardingStep = {
    key: string;
    /** 상단 중앙에 크게 표시할 타이틀 (예: 첫 페이지 "사용 가이드 미리보기") */
    heading?: string;
    /** 손글씨로 보여줄 안내 문구 (짧게, \n 로 줄바꿈) */
    body: string;
    /** 강조할 실제 DOM 요소의 data-tour 값. 배열이면 모두 감싸는 합집합 영역을 스포트라이트. 없으면 화면 중앙. */
    target?: string | string[];
    /** 'mobile' | 'desktop' — 해당 플랫폼에서만 노출. 없으면 공통. */
    platform?: "mobile" | "desktop";
    placement?: "top" | "bottom" | "left" | "right" | "auto";
    /** 스텝 진입 시 실행할 부수효과 (예: 모바일 인박스 열기). 애니메이션 후 자동 재측정됨. */
    onEnter?: () => void;
    /** 마지막 스텝 완료 문구 (없으면 기본) */
    cta?: string;
};

type Rect = { top: number; left: number; width: number; height: number };

const SPOT_PAD = 10; // 스포트라이트 여백
const GAP = 40; // 타깃과 문구 간격 (화살표 공간)
const MARGIN = 16; // 화면 가장자리 여백
const Z = 2_000_000;

// 칠판 분필 색
const CHALK = "#ffffff"; // 흰 분필 (문구·테두리)
const CHALK_ARROW = "#fcd34d"; // 노란 분필 (화살표)
// 흰 배경 위에서도 읽히도록 글자에 검정 외곽선 (8방향) + 소프트 그림자
const TEXT_OUTLINE =
    "-1.5px -1.5px 0 #0f172a, 1.5px -1.5px 0 #0f172a, -1.5px 1.5px 0 #0f172a, 1.5px 1.5px 0 #0f172a, 0 0 3px #0f172a, 0 2px 5px rgba(0,0,0,0.55)";

function isVisible(el: Element): boolean {
    const cs = window.getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return false;
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return false;
    if (r.left >= window.innerWidth || r.right <= 0 || r.top >= window.innerHeight || r.bottom <= 0) return false;
    return true;
}

// 하나 이상의 data-tour 이름을 모두 감싸는 합집합 사각형 (보이는 것만)
function findTargetRect(target: string | string[]): Rect | null {
    const names = Array.isArray(target) ? target : [target];
    const rects: Rect[] = [];
    for (const name of names) {
        const el = Array.from(document.querySelectorAll(`[data-tour="${name}"]`)).find(isVisible);
        if (el) {
            const r = el.getBoundingClientRect();
            rects.push({ top: r.top, left: r.left, width: r.width, height: r.height });
        }
    }
    if (!rects.length) return null;
    const top = Math.min(...rects.map((r) => r.top));
    const left = Math.min(...rects.map((r) => r.left));
    const right = Math.max(...rects.map((r) => r.left + r.width));
    const bottom = Math.max(...rects.map((r) => r.top + r.height));
    return { top, left, width: right - left, height: bottom - top };
}

// 문구 위치 (타깃 기준 배치 + 화면 안 clamp). 타깃 없으면 중앙.
function computePos(rect: Rect | null, placement: OnboardingStep["placement"], tw: number, th: number) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (!rect) return { top: Math.max(MARGIN, (vh - th) / 2), left: Math.max(MARGIN, (vw - tw) / 2) };

    let place = placement ?? "auto";
    if (place === "auto") {
        const below = vh - (rect.top + rect.height);
        place = below > th + GAP + MARGIN ? "bottom" : rect.top > th + GAP + MARGIN ? "top" : below >= rect.top ? "bottom" : "top";
    }
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let top = 0;
    let left = 0;
    switch (place) {
        case "top": top = rect.top - th - GAP; left = cx - tw / 2; break;
        case "bottom": top = rect.top + rect.height + GAP; left = cx - tw / 2; break;
        case "left": left = rect.left - tw - GAP; top = cy - th / 2; break;
        case "right": left = rect.left + rect.width + GAP; top = cy - th / 2; break;
    }
    left = Math.max(MARGIN, Math.min(left, vw - tw - MARGIN));
    top = Math.max(MARGIN, Math.min(top, vh - th - MARGIN));
    return { top, left };
}

// 사각형 중심에서 (tx,ty) 방향의 테두리 교점
function edgePoint(r: Rect, tx: number, ty: number) {
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = tx - cx;
    const dy = ty - cy;
    if (dx === 0 && dy === 0) return { x: cx, y: cy };
    const scale = 1 / Math.max(Math.abs(dx) / (r.width / 2), Math.abs(dy) / (r.height / 2));
    return { x: cx + dx * scale, y: cy + dy * scale };
}

// 손으로 그린 듯한 화살표 path + 화살촉 lines
function buildArrow(textRect: Rect, target: Rect, curveSign: number) {
    const tCx = target.left + target.width / 2;
    const tCy = target.top + target.height / 2;
    const xCx = textRect.left + textRect.width / 2;
    const xCy = textRect.top + textRect.height / 2;

    const S = edgePoint(textRect, tCx, tCy); // 문구 쪽 시작점
    let E = edgePoint(target, xCx, xCy); // 타깃 테두리 끝점
    // 스포트라이트 바깥으로 살짝 물러나게
    const outLen = SPOT_PAD + 6;
    const ex = E.x - tCx, ey = E.y - tCy;
    const em = Math.hypot(ex, ey) || 1;
    E = { x: E.x + (ex / em) * outLen, y: E.y + (ey / em) * outLen };

    const mx = (S.x + E.x) / 2;
    const my = (S.y + E.y) / 2;
    const dx = E.x - S.x, dy = E.y - S.y;
    const dist = Math.hypot(dx, dy) || 1;
    // 수직 방향으로 곡률
    const px = -dy / dist, py = dx / dist;
    const k = Math.min(70, Math.max(24, dist * 0.22)) * curveSign;
    const cxp = mx + px * k;
    const cyp = my + py * k;

    const path = `M ${S.x} ${S.y} Q ${cxp} ${cyp} ${E.x} ${E.y}`;

    // 화살촉: 컨트롤점→E 진행방향 기준
    const hdx = E.x - cxp, hdy = E.y - cyp;
    const hm = Math.hypot(hdx, hdy) || 1;
    const ux = hdx / hm, uy = hdy / hm;
    const size = 14;
    const ang = 0.5; // rad
    const cos = Math.cos(ang), sin = Math.sin(ang);
    const b1x = E.x - size * (ux * cos + uy * sin);
    const b1y = E.y - size * (uy * cos - ux * sin);
    const b2x = E.x - size * (ux * cos - uy * sin);
    const b2y = E.y - size * (uy * cos + ux * sin);
    const head = `M ${b1x} ${b1y} L ${E.x} ${E.y} L ${b2x} ${b2y}`;

    return { path, head };
}

export function OnboardingTour({ steps, onFinish }: { steps: OnboardingStep[]; onFinish: () => void }) {
    const filtered = useMemo(() => {
        const mobile = typeof window !== "undefined" && window.innerWidth < 768;
        const platform = mobile ? "mobile" : "desktop";
        return steps.filter((s) => !s.platform || s.platform === platform);
    }, [steps]);

    const [index, setIndex] = useState(0);
    const [rect, setRect] = useState<Rect | null>(null);
    const [ttSize, setTtSize] = useState({ w: 240, h: 90 });
    const textRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const step = filtered[index];
    const isLast = index === filtered.length - 1;

    const measure = useCallback(() => {
        if (!step || !step.target) {
            setRect(null);
            return;
        }
        const firstName = Array.isArray(step.target) ? step.target[0] : step.target;
        const el = Array.from(document.querySelectorAll(`[data-tour="${firstName}"]`)).find(isVisible);
        if (el) {
            const r = el.getBoundingClientRect();
            if (r.top < 0 || r.bottom > window.innerHeight) el.scrollIntoView({ block: "center", behavior: "smooth" });
        }
        setRect(findTargetRect(step.target));
    }, [step]);

    useLayoutEffect(() => {
        measure();
    }, [measure]);

    // 진입 부수효과(모바일 인박스 열기 등) 후 애니메이션 종료 즈음 재측정
    useEffect(() => {
        if (!step) return;
        step.onEnter?.();
        const timers = [320, 640, 980].map((ms) => setTimeout(measure, ms));
        return () => timers.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    // 대상이 아직 안 나타났으면(예: 시연 카드가 늦게 등장) 나타날 때까지 잠깐 폴링
    useEffect(() => {
        if (!step?.target || rect) return;
        let n = 0;
        const id = setInterval(() => {
            n += 1;
            measure();
            if (n > 12) clearInterval(id); // 최대 ~3.9초
        }, 300);
        return () => clearInterval(id);
    }, [step, rect, measure]);

    useEffect(() => {
        let raf = 0;
        const onChange = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(measure);
        };
        window.addEventListener("resize", onChange);
        window.addEventListener("scroll", onChange, true);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onChange);
            window.removeEventListener("scroll", onChange, true);
        };
    }, [measure]);

    // 문구 실제 크기 측정 → 위치·화살표 정확도
    useLayoutEffect(() => {
        const tt = textRef.current;
        if (!tt) return;
        const r = tt.getBoundingClientRect();
        if (Math.abs(r.width - ttSize.w) > 1 || Math.abs(r.height - ttSize.h) > 1) {
            setTtSize({ w: r.width, h: r.height });
        }
    });

    const goNext = useCallback(() => {
        if (isLast) onFinish();
        else setIndex((i) => Math.min(i + 1, filtered.length - 1));
    }, [isLast, onFinish, filtered.length]);

    const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onFinish();
            else if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") goNext();
            else if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev, onFinish]);

    if (!mounted || !step) return null;

    const pos = computePos(rect, step.placement, ttSize.w, ttSize.h);
    const textRect: Rect = { top: pos.top, left: pos.left, width: ttSize.w, height: ttSize.h };
    const spotlight: Rect | null = rect
        ? { top: rect.top - SPOT_PAD, left: rect.left - SPOT_PAD, width: rect.width + SPOT_PAD * 2, height: rect.height + SPOT_PAD * 2 }
        : null;
    const arrow = rect ? buildArrow(textRect, rect, index % 2 === 0 ? 1 : -1) : null;

    return createPortal(
        <div role="dialog" aria-modal="true" aria-label="사용 안내">
            <style>{`
                @keyframes onb-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
                @keyframes onb-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
                @media (prefers-reduced-motion: reduce) {
                    .onb-arrow { animation: none !important; stroke-dashoffset: 0 !important; }
                    .onb-text { animation: none !important; }
                }
            `}</style>

            {/* 클릭/터치 = 다음 (화면 아무 곳이나) */}
            <div
                onClick={goNext}
                style={{ position: "fixed", inset: 0, zIndex: Z, cursor: "pointer", background: spotlight ? "transparent" : "rgba(15,23,42,0.74)" }}
            />

            {/* 스포트라이트 (구멍) — 딤 + 대상 부각 */}
            {spotlight && (
                <div
                    style={{
                        position: "fixed",
                        top: spotlight.top,
                        left: spotlight.left,
                        width: spotlight.width,
                        height: spotlight.height,
                        borderRadius: 14,
                        boxShadow: "0 0 0 9999px rgba(15,23,42,0.74)",
                        zIndex: Z + 1,
                        pointerEvents: "none",
                        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    }}
                />
            )}

            {/* 손그림 오버레이: 대상 테두리 + 화살표 */}
            <svg
                width="100%"
                height="100%"
                style={{ position: "fixed", inset: 0, zIndex: Z + 2, pointerEvents: "none", overflow: "visible" }}
            >
                {spotlight && (
                    <rect
                        x={spotlight.left}
                        y={spotlight.top}
                        width={spotlight.width}
                        height={spotlight.height}
                        rx={14}
                        fill="none"
                        stroke={CHALK}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeDasharray="1 9"
                        opacity={0.85}
                        style={{ transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)" }}
                    />
                )}
                {arrow && (
                    <g key={index} style={{ filter: "drop-shadow(0 0 2px rgba(15,23,42,0.95)) drop-shadow(0 1px 2px rgba(15,23,42,0.6))" }}>
                        <path
                            className="onb-arrow"
                            d={arrow.path}
                            fill="none"
                            stroke={CHALK_ARROW}
                            strokeWidth={3}
                            strokeLinecap="round"
                            pathLength={1}
                            strokeDasharray={1}
                            style={{ animation: "onb-draw 0.5s ease-out forwards" }}
                        />
                        <path
                            className="onb-arrow"
                            d={arrow.head}
                            fill="none"
                            stroke={CHALK_ARROW}
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength={1}
                            strokeDasharray={1}
                            style={{ animation: "onb-draw 0.25s ease-out 0.45s forwards", strokeDashoffset: 1 }}
                        />
                    </g>
                )}
            </svg>

            {/* 손글씨 문구 */}
            <div
                ref={textRef}
                className="onb-text"
                key={`t-${index}`}
                style={{
                    position: "fixed",
                    top: pos.top,
                    left: pos.left,
                    zIndex: Z + 3,
                    maxWidth: "min(280px, calc(100vw - 32px))",
                    pointerEvents: "none",
                    fontFamily: "var(--font-hand), cursive",
                    color: CHALK,
                    animation: "onb-fade 0.4s ease-out both",
                }}
            >
                <p style={{ fontSize: 30, lineHeight: 1.15, whiteSpace: "pre-line", textShadow: TEXT_OUTLINE, margin: 0 }}>
                    {step.body}
                </p>
                <p style={{ fontSize: 19, opacity: 0.9, marginTop: 8, textShadow: TEXT_OUTLINE }}>
                    {isLast ? (step.cta ?? "탭하면 시작 →") : "탭하면 다음 →"}
                </p>
            </div>

            {/* 상단 타이틀 (예: 첫 페이지 "사용 가이드 미리보기") */}
            {step.heading && (
                <div
                    style={{
                        position: "fixed",
                        top: "calc(env(safe-area-inset-top) + 52px)",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: Z + 3,
                        pointerEvents: "none",
                        fontFamily: "var(--font-hand), cursive",
                        color: CHALK,
                        fontSize: 34,
                        textShadow: TEXT_OUTLINE,
                    }}
                >
                    {step.heading}
                </div>
            )}

            {/* 그만 보기 + 진행 표시 */}
            <div style={{ position: "fixed", top: "calc(env(safe-area-inset-top) + 14px)", right: 16, zIndex: Z + 4, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-hand), cursive", fontSize: 18, color: CHALK, opacity: 0.7 }}>
                    {index + 1} / {filtered.length}
                </span>
                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onFinish(); }}
                    style={{ fontFamily: "var(--font-hand), cursive", fontSize: 20, color: CHALK, opacity: 0.85, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: "2px 14px", cursor: "pointer" }}
                >
                    그만 보기
                </button>
            </div>
        </div>,
        document.body
    );
}
