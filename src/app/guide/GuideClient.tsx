"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// 한 컷(캡처 1장 + 설명). src 는 public/images/guide/ 아래 경로.
type Shot = { src: string; cap: string; note?: string };
type Section = { id: string; title: string; lead: string; shots: Shot[] };

// 목차 + 각 컷. 캡처 파일을 아래 src 경로에 넣으면 자동 표시됨. (번호는 배열 순서로 자동 매김)
const SECTIONS: Section[] = [
    {
        id: "start",
        title: "시작하기",
        lead: "회원가입과 로그인이 따로 없어요. 소셜 계정으로 한 번에 시작하고, 이메일·이름 외에는 개인정보를 저장하지 않아요.",
        shots: [
            { src: "/images/guide/01-start-1.png", cap: "회원가입·로그인 구분 없이 '시작하기'", note: "메인 · 시작하기 버튼" },
            { src: "/images/guide/01-start-2.png", cap: "소셜 계정으로 간편하게 로그인", note: "로그인 창" },
            { src: "/images/guide/01-start-3.png", cap: "이메일·이름 외엔 개인정보를 저장하지 않아요", note: "우측 상단 내 정보 메뉴" },
        ],
    },
    {
        id: "destination",
        title: "여행지 정하기",
        lead: "온보딩 안내를 따라 여행 일정표·보관함부터 여행지 선택·일정 만들기까지 기본 흐름을 익혀요.",
        shots: [
            { src: "/images/guide/02-dest-1.png", cap: "여기가 여행 일정표 — 항공편만 넣으면 날짜가 쫙", note: "① 0일차 타임라인" },
            { src: "/images/guide/02-dest-2.png", cap: "핸들을 눌러 보관함(인박스) 열기", note: "② 인박스 열기" },
            { src: "/images/guide/02-dest-3.png", cap: "숙소·맛집·쇼핑·교통… 카테고리별 카드가 여기", note: "③ 인박스 카테고리" },
            { src: "/images/guide/02-dest-4.png", cap: "여행 시기·지역을 고르면 여행지 카드가 나와요", note: "④ 여행지 선택" },
            { src: "/images/guide/02-dest-5.png", cap: "마음에 드는 카드를 꾹 눌러 계획에 넣기", note: "⑤ 카드 담기" },
            { src: "/images/guide/02-dest-6.png", cap: "항공편 또는 미리 일정 만들기로 일정 생성", note: "⑥ 일정 만들기" },
        ],
    },
    {
        id: "vote",
        title: "여행지 후보 투표",
        lead: "여러 도시를 후보로 담아두고, 같이 가는 사람들이 하트로 투표해 최종 여행지를 함께 정해요.",
        shots: [
            { src: "/images/guide/03-vote-1.png", cap: "후보에 담아 하트로 투표 → 다 같이 결정", note: "여행지 후보 · 하트 투표" },
        ],
    },
    {
        id: "flight",
        title: "일정 만들기",
        lead: "항공편을 등록하거나 '미리 일정 만들기'로 박·일을 정하면 날짜별 일차가 자동으로 생겨요.",
        shots: [
            { src: "/images/guide/02-dest-6.png", cap: "항공편 또는 '미리 일정 만들기'로 일정 생성", note: "일정 만들기 진입" },
            { src: "/images/guide/04-preplan-2.png", cap: "항공편이나 미리 일정 만들기를 반영하면 일차가 생성돼요", note: "4박5일 → 일차 자동 생성" },
        ],
    },
    {
        id: "hotel",
        title: "숙박 체크인 / 체크아웃",
        lead: "숙소 카드를 체크인 일차와 체크아웃 일차에 각각 배치하면 머무는 기간이 표시돼요.",
        shots: [
            { src: "/images/guide/05-hotel-1.png", cap: "숙박 카드를 체크인·체크아웃으로 배치하세요", note: "HotelCard · 체크인/아웃" },
        ],
    },
];

function Shot({ shot }: { shot: Shot }) {
    const [err, setErr] = useState(false);
    return (
        <figure className="flex flex-col gap-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
                {err ? (
                    <div className="aspect-[16/10] w-full flex flex-col items-center justify-center gap-2 text-center px-4">
                        <span className="text-3xl">📸</span>
                        <p className="text-xs font-medium text-slate-400">여기에 캡처를 넣어주세요</p>
                        {shot.note && <p className="text-[11px] text-slate-400">{shot.note}</p>}
                        <code className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{shot.src}</code>
                    </div>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={shot.src}
                        alt={shot.cap}
                        className="w-full h-auto block"
                        loading="lazy"
                        onError={() => setErr(true)}
                    />
                )}
            </div>
            <figcaption className="text-sm text-slate-600 flex items-start gap-1.5 leading-snug">
                <span className="text-emerald-500 mt-0.5 shrink-0">✎</span>
                <span>{shot.cap}</span>
            </figcaption>
        </figure>
    );
}

function ScrollTopButton() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="맨 위로"
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 active:scale-95 transition-all duration-200 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}

export default function GuideClient() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
            <DashboardHeader title="사용 가이드" />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 md:flex md:gap-10">
                {/* 목차 (데스크탑: 좌측 sticky / 모바일: 상단 칩) */}
                <nav className="md:w-52 md:shrink-0 mb-6 md:mb-0">
                    <div className="md:sticky md:top-6">
                        <p className="hidden md:block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">목차</p>
                        <ul className="flex md:flex-col gap-2 overflow-x-auto no-scrollbar pb-1">
                            {SECTIONS.map((s, i) => (
                                <li key={s.id} className="shrink-0">
                                    <a
                                        href={`#${s.id}`}
                                        className="flex items-center gap-2 rounded-full md:rounded-lg border border-slate-200 md:border-0 bg-white md:bg-transparent px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-emerald-600 md:hover:bg-emerald-50 transition-colors whitespace-nowrap"
                                    >
                                        <span className="w-5 h-5 shrink-0 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* 본문 */}
                <div className="flex-1 min-w-0">
                    <header className="mb-8">
                        <h1
                            className="text-3xl font-bold text-slate-800 mb-2"
                            style={{ fontFamily: "var(--font-hand), inherit" }}
                        >
                            Travelline 사용 가이드
                        </h1>
                        <p className="text-sm text-slate-500">화면 캡처로 보는 핵심 사용법 — 여행지 정하기부터 함께 공유까지.</p>
                    </header>

                    <div className="flex flex-col gap-12">
                        {SECTIONS.map((s, i) => (
                            <section key={s.id} id={s.id} className="scroll-mt-6">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                                        {i + 1}
                                    </span>
                                    <h2 className="text-xl font-bold text-slate-800">{s.title}</h2>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 md:ml-10">{s.lead}</p>
                                <div className="grid sm:grid-cols-2 gap-5 md:ml-10">
                                    {s.shots.map((shot) => (
                                        <Shot key={shot.src} shot={shot} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <footer className="mt-16 pt-6 border-t border-slate-200 text-center">
                        <a
                            href="/"
                            className="inline-block text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-5 py-2 rounded-lg shadow-sm"
                        >
                            여행 계획 시작하기
                        </a>
                    </footer>
                </div>
            </main>

            <ScrollTopButton />
        </div>
    );
}
