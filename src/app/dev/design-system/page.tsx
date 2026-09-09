"use client";

/**
 * /dev/design-system — 디자인 시스템 라이브 프리뷰 (개발 전용).
 *
 * 실제 @/components/ui 프리미티브 + 실제 Tailwind 빌드로 렌더한다.
 * 프로덕션에서는 404 (아래 NODE_ENV 가드). 네비게이션 어디에도 링크 없음.
 * 문서: docs/design-system.md
 */

import { useState } from "react";
import { notFound } from "next/navigation";
import { Plus, Trash2, Check } from "lucide-react";
import { Button, Spinner, SpinnerBlock, Badge, Skeleton, SkeletonText } from "@/components/ui";
import {
    CARD_CATEGORY_COLOR,
    CARD_CATEGORY_LABEL,
    type CardCategoryKey,
} from "@/data/colors";

// Tailwind JIT 는 런타임 조합 문자열을 스캔하지 못하므로 클래스는 완전한 리터럴로 나열한다.
const ROLE_SCALES: { name: string; swatches: { step: number; cls: string }[] }[] = [
    {
        name: "primary (emerald)",
        swatches: [
            { step: 50, cls: "bg-primary-50" }, { step: 100, cls: "bg-primary-100" }, { step: 200, cls: "bg-primary-200" },
            { step: 300, cls: "bg-primary-300" }, { step: 400, cls: "bg-primary-400" }, { step: 500, cls: "bg-primary-500" },
            { step: 600, cls: "bg-primary-600" }, { step: 700, cls: "bg-primary-700" }, { step: 800, cls: "bg-primary-800" },
            { step: 900, cls: "bg-primary-900" },
        ],
    },
    {
        name: "accent (orange)",
        swatches: [
            { step: 50, cls: "bg-accent-50" }, { step: 100, cls: "bg-accent-100" }, { step: 200, cls: "bg-accent-200" },
            { step: 300, cls: "bg-accent-300" }, { step: 400, cls: "bg-accent-400" }, { step: 500, cls: "bg-accent-500" },
            { step: 600, cls: "bg-accent-600" }, { step: 700, cls: "bg-accent-700" },
        ],
    },
    {
        name: "danger (red)",
        swatches: [
            { step: 50, cls: "bg-danger-50" }, { step: 100, cls: "bg-danger-100" }, { step: 500, cls: "bg-danger-500" },
            { step: 600, cls: "bg-danger-600" }, { step: 700, cls: "bg-danger-700" },
        ],
    },
];

const RADII = [
    { cls: "rounded-lg", label: "rounded-lg · 8px · 버튼/인풋" },
    { cls: "rounded-xl", label: "rounded-xl · 12px · 카드 (--radius-card)" },
    { cls: "rounded-2xl", label: "rounded-2xl · 16px · 패널/모달 (--radius-panel)" },
    { cls: "rounded-full", label: "rounded-full · 배지/아바타" },
];

const SHADOWS = [
    { cls: "shadow-sm", label: "shadow-sm · 카드 (--shadow-card)" },
    { cls: "shadow-md", label: "shadow-md · 팝오버" },
    { cls: "shadow-xl", label: "shadow-xl · 드롭다운" },
    { cls: "shadow-2xl", label: "shadow-2xl · 모달 (--shadow-modal)" },
];

const TYPE_SCALE = [
    { cls: "text-xs", label: "text-xs · 12px · 메타/라벨/배지" },
    { cls: "text-sm", label: "text-sm · 14px · 기본 본문 (가장 많이 씀)" },
    { cls: "text-base", label: "text-base · 16px · 강조 본문" },
    { cls: "text-lg", label: "text-lg · 18px · 카드 제목" },
    { cls: "text-xl", label: "text-xl · 20px · 페이지 헤딩" },
    { cls: "text-2xl", label: "text-2xl · 24px" },
];

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
    return (
        <section className="mb-14">
            <h2 className="text-lg font-bold text-slate-800">{title}</h2>
            {note && <p className="mt-1 text-sm text-slate-500">{note}</p>}
            <div className="mt-4">{children}</div>
        </section>
    );
}

export default function DesignSystemPreview() {
    const [loading, setLoading] = useState(false);

    // 개발 전용 — 프로덕션 빌드에서는 노출하지 않는다.
    if (process.env.NODE_ENV === "production") notFound();

    return (
        <div className="min-h-dvh bg-slate-50 text-slate-700">
            <div className="mx-auto max-w-4xl px-5 py-10">
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
                        DEV ONLY · 프로덕션 404
                    </div>
                    <h1 className="mt-3 text-2xl font-bold text-slate-900">Travelline 디자인 시스템</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        실제 <code className="rounded bg-slate-200 px-1">@/components/ui</code> 프리미티브 + 토큰 렌더.
                        상세는 <code className="rounded bg-slate-200 px-1">docs/design-system.md</code>.
                    </p>
                </header>

                {/* ── 역할 색 ── */}
                <Section title="1. 역할(role) 색" note="globals.css @theme 별칭. bg-primary-500 처럼 사용 (아직 신규 코드 전용).">
                    <div className="space-y-4">
                        {ROLE_SCALES.map((scale) => (
                            <div key={scale.name}>
                                <div className="mb-1.5 text-xs font-semibold text-slate-500">{scale.name}</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {scale.swatches.map(({ step, cls }) => (
                                        <div key={step} className="text-center">
                                            <div className={`h-12 w-14 rounded-md border border-black/5 ${cls}`} />
                                            <div className="mt-1 text-[10px] text-slate-400">{step}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div>
                            <div className="mb-1.5 text-xs font-semibold text-slate-500">brand mark (로고 전용 — UI 색 아님)</div>
                            <div className="flex gap-1.5">
                                <div className="h-12 w-14 rounded-md border border-black/5" style={{ background: "var(--color-brand-orange)" }} />
                                <div className="h-12 w-14 rounded-md border border-black/5" style={{ background: "var(--color-brand-teal)" }} />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* ── 카테고리 색 ── */}
                <Section title="2. 카드 카테고리 색" note="단일 출처: src/data/colors.ts · CARD_CATEGORY_COLOR">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {(Object.keys(CARD_CATEGORY_COLOR) as CardCategoryKey[]).map((key) => {
                            const c = CARD_CATEGORY_COLOR[key];
                            return (
                                <div key={key} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm">
                                    <div className={`h-9 w-1.5 rounded-full ${c.bar}`} />
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-slate-700">{CARD_CATEGORY_LABEL[key]}</div>
                                        <div className="text-[10px] text-slate-400">{key} · {c.hex}</div>
                                    </div>
                                    <span className={`ml-auto rounded px-1.5 py-0.5 text-[10px] font-bold ${c.soft} ${c.text}`}>칩</span>
                                </div>
                            );
                        })}
                    </div>
                </Section>

                {/* ── 타이포 ── */}
                <Section title="3. 타이포그래피" note="Geist Sans 기본. 크기는 사용 빈도순.">
                    <div className="space-y-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        {TYPE_SCALE.map((t) => (
                            <div key={t.cls} className="flex items-baseline gap-4">
                                <span className={`${t.cls} font-semibold text-slate-800`}>여행 타임라인 Travelline</span>
                                <span className="text-[11px] text-slate-400">{t.label}</span>
                            </div>
                        ))}
                        <div className="flex items-baseline gap-4 pt-1">
                            <span className="text-lg text-slate-800" style={{ fontFamily: "var(--font-hand), cursive" }}>여기를 눌러보세요</span>
                            <span className="text-[11px] text-slate-400">font-hand · Nanum Pen · 온보딩 코치마크</span>
                        </div>
                    </div>
                </Section>

                {/* ── 반경 · 그림자 ── */}
                <Section title="4. 반경 · 그림자">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <div className="mb-2 text-xs font-semibold text-slate-500">radius</div>
                            <div className="flex flex-wrap gap-3">
                                {RADII.map((r) => (
                                    <div key={r.cls} className="text-center">
                                        <div className={`h-16 w-16 border border-slate-300 bg-white ${r.cls}`} />
                                        <div className="mt-1 max-w-16 text-[10px] leading-tight text-slate-400">{r.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-xs font-semibold text-slate-500">shadow</div>
                            <div className="flex flex-wrap gap-4">
                                {SHADOWS.map((s) => (
                                    <div key={s.cls} className="text-center">
                                        <div className={`h-16 w-16 rounded-xl bg-white ${s.cls}`} />
                                        <div className="mt-1.5 max-w-16 text-[10px] leading-tight text-slate-400">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* ── Button ── */}
                <Section title="5. Button" note="import { Button } from '@/components/ui'">
                    <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex flex-wrap items-center gap-2">
                            <Button variant="primary">저장</Button>
                            <Button variant="secondary">취소</Button>
                            <Button variant="outline">보조</Button>
                            <Button variant="ghost">고스트</Button>
                            <Button variant="danger">삭제</Button>
                            <Button variant="accent">여행쇼핑</Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button size="sm">sm</Button>
                            <Button size="md">md</Button>
                            <Button size="lg">lg</Button>
                            <Button disabled>disabled</Button>
                            <Button iconOnly variant="outline" aria-label="추가"><Plus className="h-4 w-4" /></Button>
                            <Button iconOnly variant="ghost" aria-label="삭제"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button loading={loading} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); }}>
                                <Check className="h-4 w-4" /> {loading ? "저장 중" : "loading 토글"}
                            </Button>
                            <Button variant="outline" loading>불러오는 중</Button>
                        </div>
                        <Button fullWidth variant="primary">fullWidth</Button>
                    </div>
                </Section>

                {/* ── Spinner ── */}
                <Section title="6. Spinner" note="인라인 로딩 전용. 전체/섹션 로딩은 @/components/BrandLoader.">
                    <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-5">
                            <Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" />
                            <span className="text-[11px] text-slate-400">xs / sm / md / lg</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <Spinner tone="primary" size="md" />
                            <Spinner tone="muted" size="md" />
                            <span className="rounded bg-slate-700 p-1.5"><Spinner tone="white" size="md" /></span>
                            <span className="text-[11px] text-slate-400">primary / muted / white</span>
                        </div>
                        <div className="rounded-lg border border-dashed border-slate-200">
                            <SpinnerBlock label="불러오는 중" />
                        </div>
                    </div>
                </Section>

                {/* ── Badge ── */}
                <Section title="7. Badge">
                    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <Badge tone="neutral">기본</Badge>
                        <Badge tone="primary">완료</Badge>
                        <Badge tone="accent">추천</Badge>
                        <Badge tone="danger" square>지연</Badge>
                        <Badge tone="success">확정</Badge>
                        <span className="mx-2 h-4 w-px bg-slate-200" />
                        {(Object.keys(CARD_CATEGORY_LABEL) as CardCategoryKey[]).map((k) => (
                            <Badge key={k} category={k} />
                        ))}
                    </div>
                </Section>

                {/* ── Skeleton ── */}
                <Section title="8. Skeleton" note="작은 조각용. 화면 전체 골격은 @/components/board/LoadingSkeleton.">
                    <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <Skeleton circle className="h-10 w-10" />
                            <div className="flex-1">
                                <SkeletonText lines={2} />
                            </div>
                        </div>
                        <div className="h-[72px] rounded-xl border border-gray-100 px-3 flex items-center gap-3">
                            <Skeleton className="h-8 w-1 rounded-r-full" />
                            <Skeleton circle className="h-8 w-8" />
                            <div className="flex-1 space-y-1.5">
                                <Skeleton className="h-3 w-1/3" />
                                <Skeleton className="h-2.5 w-1/2" />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}
