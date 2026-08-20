'use client';

import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown, Plus, Loader2 } from 'lucide-react';
import type { PaymentType } from '@/data/expenseCodes';
import { useExpenses } from '@/hooks/useExpenses';
import { ExpenseAssetPanel } from './ExpenseAssetPanel';
import { FlightExpenseModal } from './FlightExpenseModal';
import { findCountryByCity } from '@/data/destinations';
import {
    formatAmount, CURRENCY_MAP, PAYMENT_TYPE_LABEL,
    getCurrencyByCountry, type CurrencyCode,
} from '@/data/expenseCodes';

// 전체 경비 팝업 — 카드를 선택하지 않고 하단바/헤더의 "경비"를 눌렀을 때.
// 셸·여백·타이포는 카드 인포팝업(InfoModalShell)과 동일 규격을 따른다.
//
// 구성
//   ① 총 사용 경비 (원화)  — 환전·충전에 쓴 원화 + 신용카드 결제. 아래 줄은 남은 금액.
//                          신용카드 해외결제만 등록 시점 환율로 환산해 더한다(근사).
//   ② 남은 금액            — 통화가 같은 것끼리만 차감
//   ③ 상세보기(접힘)       — 총예상경비 · 환전/충전 입력
//   ④ 위치별 지출 목록      — 항공 → 0일차 → 1일차 … → 기타 → 삭제된 카드

const krw = (n: number) => `${Math.round(n).toLocaleString('ko-KR')}원`;

// 잔액 블록 구분 라벨. cash 는 이 화면에서 "환전"으로 부른다(돈이 들어온 경로 기준).
const BALANCE_SECTIONS = [
    { type: 'cash', label: '환전' },
    { type: 'travel_card', label: '트래블카드' },
] as const;

export function ExpenseModal({
    projectId,
    destinationCity,
    onClose,
}: {
    projectId: string;
    /** 여행지 engName — 나라 → 기본 통화 추론용 */
    destinationCity?: string | null;
    onClose: () => void;
}) {
    const {
        loading, error, canWrite,
        budget, assets, totalSpentKrw,
        unconvertedCount, hasApproxKrw,
        balances, groups,
        expenses,
        addExpense, updateExpense, deleteExpense,
        deleteAsset, addExchange, setBudgetAmount,
    } = useExpenses(projectId, true);

    const [detailOpen, setDetailOpen] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [flightOpen, setFlightOpen] = useState(false);

    // 항공권은 Liveblocks 카드에 붙지 않는다(card_id 없음).
    // card_category='flight' 로 저장하면 useExpenses 가 '항공' 그룹으로 묶어준다.
    const handleSaveFlight = async ({ id, leg, amount, paymentType }: {
        id: string | null; leg: string; amount: number; paymentType: PaymentType;
    }) => {
        const payload = {
            card_category: 'flight',
            card_name: '항공권',
            title: leg,
            currency: 'KRW',
            payment_type: paymentType,
            amount,
        };
        if (id) await updateExpense(id, payload);
        else await addExpense(payload);
    };

    // 상세보기는 스크롤 영역 맨 위에 붙는다. 이전에 목록을 내려둔 상태였다면
    // 펼쳐도 화면에 안 보이므로 맨 위로 되돌린다.
    const toggleDetail = () => {
        setDetailOpen((v) => {
            if (!v) scrollRef.current?.scrollTo({ top: 0 });
            return !v;
        });
    };

    // 여행지 → 나라 → 기본 통화. 미등록 나라면 원화로 떨어진다.
    const defaultCurrency: CurrencyCode =
        getCurrencyByCountry(destinationCity ? findCountryByCity(destinationCity) : null) ?? 'KRW';

    const remaining = budget === null ? null : budget - totalSpentKrw;

    const content = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0">
                {/* 헤더 — 인포팝업과 동일 규격 */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 shrink-0">
                    <h2 className="text-lg font-bold text-gray-800">경비</h2>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors" aria-label="닫기">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {loading && (
                    <div className="flex-1 flex items-center justify-center text-gray-400">
                        <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                )}

                {!loading && error && (
                    <div className="flex-1 flex items-center justify-center px-6 text-center text-sm text-rose-500">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                  <>
                    {/* 고정 영역 — ①②③. 상세보기를 펼쳐도 높이가 변하지 않게
                        펼친 내용은 아래 스크롤 영역으로 넘긴다(작은 화면에서 목록이 찌그러지지 않도록) */}
                    <div className="shrink-0 px-5 pt-3 space-y-3">
                        {/* ① 총 사용 경비 */}
                        <section className="border border-emerald-100 bg-emerald-50/40 rounded-xl px-4 py-3">
                            {/* 라벨과 금액을 한 줄에 두고 금액은 오른쪽 정렬 */}
                            <div className="flex items-baseline justify-between gap-3">
                                <h3 className="text-sm font-bold text-gray-600 shrink-0">총 사용 경비</h3>
                                <p className="text-2xl font-bold text-gray-800 tabular-nums tracking-tight">
                                    {/* 해외 카드결제가 섞이면 정확한 값이 아니므로 "약"을 붙인다 */}
                                    {hasApproxKrw && <span className="text-base font-semibold text-gray-400 mr-0.5">약</span>}
                                    {krw(totalSpentKrw)}
                                </p>
                            </div>
                            {remaining !== null && (
                                <p className={`mt-0.5 text-sm font-semibold tabular-nums text-right ${remaining < 0 ? 'text-rose-500' : 'text-emerald-600'}`}>
                                    {remaining < 0
                                        ? `예상보다 ${krw(-remaining)} 초과`
                                        : `남은금액 ${krw(remaining)}`}
                                </p>
                            )}
                        </section>

                        {/* ② 남은 금액 + ③ 상세보기 */}
                        <section className={`border border-gray-100 overflow-hidden ${detailOpen ? 'rounded-t-xl border-b-0' : 'rounded-xl'}`}>
                            <div className="px-4 py-3">
                              {/* 제목을 별도 줄로 두지 않고 좌측 라벨 열로 붙여 한 줄을 아낀다 */}
                              <div className="flex items-start gap-3">
                                <h3 className="w-[68px] shrink-0 text-sm font-bold text-gray-800">남은 금액</h3>
                                <div className="flex-1 min-w-0">
                                {balances.length === 0 ? (
                                    <p className="text-sm text-gray-400">환전하거나 충전한 내역이 없어요.</p>
                                ) : (
                                    <div className="space-y-1.5">
                                        {BALANCE_SECTIONS.map(({ type, label }) => {
                                            const rows = balances.filter((b) => b.type === type);
                                            if (rows.length === 0) return null;
                                            return (
                                                <div key={type} className="flex items-start gap-3 text-sm">
                                                    {/* 구분 라벨은 첫 줄에만, 통화가 여러 개면 아래로 이어진다 */}
                                                    <span className="w-[76px] shrink-0 text-gray-500">{label}</span>
                                                    <div className="flex-1 min-w-0 space-y-0.5">
                                                        {rows.map((b) => (
                                                            <div key={b.currency} className="flex items-baseline justify-between gap-3">
                                                                <span className="text-gray-500 shrink-0">
                                                                    {CURRENCY_MAP[b.currency]?.name ?? b.currency}
                                                                </span>
                                                                <span className={`font-bold tabular-nums ${b.balance < 0 ? 'text-rose-500' : 'text-gray-800'}`}>
                                                                    {formatAmount(b.balance, b.currency, 'plain')}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                                </div>
                              </div>
                            </div>

                            {/* 상세보기 — 카드 하단 전체 폭 토글 */}
                            <button
                                type="button"
                                onClick={toggleDetail}
                                className="w-full flex items-center justify-center gap-1.5 py-2 border-t border-gray-100 bg-gray-50 text-sm font-medium text-gray-500 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
                            >
                                상세보기
                                <ChevronDown className={`w-4 h-4 transition-transform ${detailOpen ? 'rotate-180' : ''}`} />
                            </button>

                        </section>
                    </div>

                    {/* 스크롤 영역 — 상세보기(펼쳤을 때) + ④ 지출 내역
                        펼침 내용은 위 카드와 테두리를 이어 한 장처럼 보이게 한다 */}
                    <div
                        ref={scrollRef}
                        className={`flex-1 overflow-y-auto px-5 pb-3 space-y-3 ${detailOpen ? 'pt-0' : 'pt-3'}`}
                    >
                        {detailOpen && (
                            <div className="px-4 pb-3 border border-t-0 border-gray-100 rounded-b-xl">
                                <ExpenseAssetPanel
                                    budget={budget}
                                    assets={assets}
                                    canWrite={canWrite}
                                    defaultCurrency={defaultCurrency}
                                    onSetBudget={setBudgetAmount}
                                    onExchange={addExchange}
                                    onDeleteAsset={deleteAsset}
                                />
                            </div>
                        )}

                        {/* ④ 지출 내역 */}
                        <section>
                            <h3 className="text-sm font-bold text-gray-800 mb-2">지출 내역</h3>
                            {groups.length === 0 ? (
                                <div className="border border-gray-100 rounded-xl py-6 text-center">
                                    <p className="text-sm text-gray-400">아직 등록된 지출이 없어요.</p>
                                </div>
                            ) : (
                                <div className="space-y-2.5">
                                    {groups.map((g, gi) => (
                                        <div key={`${g.label}-${gi}`}>
                                            <div className="text-xs font-bold text-gray-500 mb-1 px-1">{g.label}</div>
                                            {/* 게시판 리스트와 동일한 방식 — table-fixed + colgroup.
                                                카드명만 나머지 폭을 전부 가져가고(가변),
                                                금액·화폐단위·지불방법은 고정 폭이라 줄이 달라도 세로로 맞는다. */}
                                            <table className="w-full table-fixed border border-gray-100 rounded-xl overflow-hidden">
                                                <colgroup>
                                                    <col />
                                                    <col className="w-[92px] sm:w-[112px]" />
                                                    <col className="w-[46px] sm:w-[80px]" />
                                                    <col className="w-[46px] sm:w-[56px]" />
                                                </colgroup>
                                                <tbody>
                                                    {g.cards.map((c, ci) => c.rows.map((r, ri) => (
                                                        <tr
                                                            key={r.id}
                                                            className={ri === 0 && ci > 0 ? 'border-t border-gray-100' : ''}
                                                        >
                                                            {/* 카드명 — 가변. 같은 카드의 둘째 줄부터는 비운다 */}
                                                            <td className="pl-3 pr-1 py-1.5 align-top">
                                                                <div className="flex items-baseline gap-1.5 min-w-0">
                                                                    <span className="truncate text-sm font-medium text-gray-700">
                                                                        {ri === 0 ? c.name : ''}
                                                                    </span>
                                                                    {r.title && (
                                                                        <span className="shrink-0 text-xs text-gray-500">{r.title}</span>
                                                                    )}
                                                                </div>
                                                            </td>

                                                            {/* 금액 — 오른쪽 정렬 */}
                                                            <td className="px-1 py-1.5 align-top text-right">
                                                                <span className="block text-sm font-bold text-gray-800 tabular-nums">
                                                                    {formatAmount(r.amount, r.currency, 'plain')}
                                                                </span>
                                                                {r.payment_type === 'credit_card' && r.currency !== 'KRW' && (
                                                                    <span className="block text-[11px] text-gray-400 tabular-nums">
                                                                        {r.krw_amount === null ? '환산 대기' : `≈ ${krw(r.krw_amount)}`}
                                                                    </span>
                                                                )}
                                                            </td>

                                                            {/* 화폐단위 — 왼쪽 정렬 */}
                                                            <td className="px-1 py-1.5 align-top text-left text-[11px] text-gray-500 truncate">
                                                                {CURRENCY_MAP[r.currency]?.unit ?? r.currency}
                                                            </td>

                                                            {/* 지불방법 — 오른쪽 정렬 */}
                                                            <td className="pl-1 pr-3 py-1.5 align-top text-right text-[11px] text-gray-400 truncate">
                                                                {PAYMENT_TYPE_LABEL[r.payment_type]}
                                                            </td>
                                                        </tr>
                                                    )))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* 총액이 근사값인 이유를 목록 바로 아래에서 한 줄로 알린다 */}
                            {(hasApproxKrw || unconvertedCount > 0) && (
                                <p className="mt-2 px-1 text-[11px] leading-relaxed text-gray-400">
                                    {hasApproxKrw && '신용카드 해외결제는 등록 시점 환율로 환산한 금액이라, 최종 승인 시 카드사 환율·수수료에 따라 달라질 수 있어요.'}
                                    {unconvertedCount > 0 && (
                                        <>
                                            {hasApproxKrw && ' '}
                                            환율을 불러오지 못한 {unconvertedCount}건은 총 사용 경비에 아직 반영되지 않았어요.
                                        </>
                                    )}
                                </p>
                            )}
                        </section>
                    </div>
                  </>
                )}

                {/* 푸터 — 인포팝업과 동일 규격 */}
                {!loading && !error && (
                    <div className="flex items-center justify-between gap-3 px-5 py-2.5 pb-safe border-t border-gray-200 bg-gray-50 shrink-0">
                        {canWrite ? (
                            <button
                                type="button"
                                onClick={() => setFlightOpen(true)}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors"
                            >
                                <Plus className="w-4 h-4" /> 항공권
                            </button>
                        ) : (
                            <p className="text-xs text-gray-400">보기 권한이라 등록·삭제는 할 수 없어요</p>
                        )}
                        <button
                            onClick={onClose}
                            className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                        >
                            닫기
                        </button>
                    </div>
                )}
            </div>

            {flightOpen && (
                <FlightExpenseModal
                    expenses={expenses}
                    onSave={handleSaveFlight}
                    onDelete={deleteExpense}
                    onClose={() => setFlightOpen(false)}
                />
            )}
        </div>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(content, document.body);
}
