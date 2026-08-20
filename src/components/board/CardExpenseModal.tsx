'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2, Trash2, Check } from 'lucide-react';
import { Confirm } from './Confirm';
import { useExpenses } from '@/hooks/useExpenses';
import { findCountryByCity } from '@/data/destinations';
import {
    CURRENCIES, CURRENCY_MAP, PAYMENT_TYPES, PAYMENT_TYPE_LABEL,
    formatAmount, formatNumberInput, parseAmountInput, getCurrencyByCountry,
    type CurrencyCode, type PaymentType,
} from '@/data/expenseCodes';

// 카드별 경비 입력 — 여행보드에서 카드를 선택한 뒤 "경비"를 눌렀을 때.
//
// 전체 경비 창(ExpenseModal)과 달리 선택한 카드 한 장에만 집중한다.
// 저장하면 card_id 가 함께 들어가서, 전체 경비 창의 지출 내역에
// 그 카드가 놓인 일차 아래로 묶여 나온다.
//
//   1일차
//     맛집명   루피아 350,000   현금
//
// card_id 는 Liveblocks 카드의 고유 id 라 카드를 다른 일차로 옮겨도 따라간다.
// card_name/card_category 는 카드가 지워진 뒤에도 내역이 읽히도록 남기는 스냅샷이다.

const inputCls = 'px-2.5 py-1.5 border border-gray-200 rounded-lg text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400';

interface Props {
    projectId: string;
    card: { id: string; text?: string; category?: string };
    /** 여행지 engName — 나라 → 기본 통화 추론용 */
    destinationCity?: string | null;
    onClose: () => void;
}

export function CardExpenseModal({ projectId, card, destinationCity, onClose }: Props) {
    const {
        loading, error, canWrite, expenses,
        addExpense, deleteExpense,
    } = useExpenses(projectId, true);

    // 여행지 나라의 통화를 기본값으로. 미등록 나라면 원화.
    const defaultCurrency: CurrencyCode =
        getCurrencyByCountry(destinationCity ? findCountryByCity(destinationCity) : null) ?? 'KRW';

    const [currency, setCurrency] = useState<CurrencyCode>(defaultCurrency);
    const [amount, setAmount] = useState('');
    const [payment, setPayment] = useState<PaymentType>('cash');
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const [confirmId, setConfirmId] = useState<string | null>(null);

    const cardName = card.text || '카드';
    const rows = expenses.filter((e) => e.card_id === card.id);
    const decimals = (CURRENCY_MAP[currency]?.decimals ?? 0) > 0;

    // 통화를 바꾸면 이미 찍힌 소수점이 무효가 될 수 있어 새 규칙으로 다시 마스킹
    const changeCurrency = (next: CurrencyCode) => {
        setCurrency(next);
        setAmount((v) => formatNumberInput(v, (CURRENCY_MAP[next]?.decimals ?? 0) > 0));
    };

    // 트래블카드는 원화로만 충전하므로(잔액이 KRW 로 잡힘) 지출도 원화로 받아야
    // 잔액에서 차감된다. 현지 통화로 넣으면 대응 자산이 없어 조용히 누락된다.
    // 카드 앱에 찍히는 원화 차감액을 그대로 넣도록 통화를 고정하고 아래에 안내한다.
    const isTravelCard = payment === 'travel_card';

    const changePayment = (next: PaymentType) => {
        setPayment(next);
        if (next === 'travel_card' && currency !== 'KRW') changeCurrency('KRW');
    };

    const handleSave = async () => {
        const value = parseAmountInput(amount);
        if (value === null || value === 0) { setErr('금액을 입력해주세요.'); return; }
        setBusy(true);
        setErr(null);
        try {
            await addExpense({
                card_id: card.id,
                card_name: cardName,
                card_category: card.category ?? null,
                // 표시와 저장이 어긋나지 않도록 저장 시점에도 한 번 더 고정
                currency: isTravelCard ? 'KRW' : currency,
                payment_type: payment,
                amount: value,
            });
            setAmount('');   // 연달아 입력할 수 있게 창은 닫지 않는다
        } catch (e: any) {
            setErr(e?.message || '저장하지 못했어요.');
        } finally {
            setBusy(false);
        }
    };

    const handleDelete = async (id: string) => {
        setConfirmId(null);
        setBusy(true);
        setErr(null);
        try {
            await deleteExpense(id);
        } catch (e: any) {
            setErr(e?.message || '삭제하지 못했어요.');
        } finally {
            setBusy(false);
        }
    };

    const content = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
                    <div className="min-w-0">
                        <h2 className="text-base font-bold text-gray-800">경비 입력</h2>
                        <p className="text-xs text-gray-400 truncate">{cardName}</p>
                    </div>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors shrink-0" aria-label="닫기">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {loading ? (
                    <div className="py-10 flex items-center justify-center text-gray-400">
                        <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="py-10 px-6 text-center text-sm text-rose-500">{error}</div>
                ) : (
                    <div className="px-5 py-3.5 space-y-2.5">
                        {err && <p className="text-xs text-rose-500">{err}</p>}

                        {/* 이미 등록된 내역 — 삭제는 여기서만 (목록 화면은 읽기 전용) */}
                        {rows.length > 0 && (
                            <ul className="space-y-1">
                                {rows.map((r) => (
                                    <li key={r.id} className="flex items-center gap-1.5 text-sm">
                                        {/* 경비 창의 지출 내역과 같은 열 구성:
                                            금액(오른쪽) · 화폐단위(왼쪽) · 지불방법(오른쪽) */}
                                        <span className="w-[104px] shrink-0 overflow-hidden text-right font-semibold text-gray-700 tabular-nums whitespace-nowrap">
                                            {formatAmount(r.amount, r.currency, 'plain')}
                                        </span>
                                        <span className="w-[76px] shrink-0 text-left text-xs text-gray-500 truncate">
                                            {CURRENCY_MAP[r.currency]?.unit ?? r.currency}
                                        </span>
                                        <span className="flex items-center gap-2 shrink-0 ml-auto">
                                            <span className="w-[52px] shrink-0 text-right text-xs text-gray-400 whitespace-nowrap">{PAYMENT_TYPE_LABEL[r.payment_type]}</span>
                                            {canWrite && (
                                                <button
                                                    type="button"
                                                    onClick={() => setConfirmId(r.id)}
                                                    disabled={busy}
                                                    className="p-1 rounded text-gray-300 hover:text-rose-500 hover:bg-rose-50 disabled:opacity-40 transition-colors"
                                                    aria-label="삭제"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {canWrite ? (
                            <div className="flex items-center gap-1.5 pt-0.5">
                                <select
                                    value={isTravelCard ? 'KRW' : currency}
                                    onChange={(e) => changeCurrency(e.target.value as CurrencyCode)}
                                    disabled={isTravelCard}
                                    className={`${inputCls} w-[92px] shrink-0 disabled:bg-gray-50 disabled:text-gray-500`}
                                >
                                    {CURRENCIES.map((c) => (
                                        <option key={c.code} value={c.code}>{c.name}</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={amount}
                                    onChange={(e) => setAmount(formatNumberInput(e.target.value, decimals))}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
                                    placeholder="금액"
                                    className={`${inputCls} flex-1 min-w-0 text-right`}
                                />
                                <select
                                    value={payment}
                                    onChange={(e) => changePayment(e.target.value as PaymentType)}
                                    className={`${inputCls} w-[88px] shrink-0`}
                                >
                                    {PAYMENT_TYPES.map((t) => (
                                        <option key={t.code} value={t.code}>{t.label}</option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    disabled={busy || !amount.trim()}
                                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-40 transition-colors"
                                    aria-label="저장"
                                >
                                    {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                </button>
                            </div>
                        ) : (
                            <p className="text-xs text-gray-400">보기 권한이라 등록할 수 없어요.</p>
                        )}

                        {canWrite && isTravelCard && (
                            <p className="text-[11px] text-amber-600 leading-relaxed">
                                트래블카드 결제시 원화 차감분을 입력하세요.
                            </p>
                        )}
                    </div>
                )}

                <div className="flex justify-end px-5 py-2.5 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                    >
                        닫기
                    </button>
                </div>
            </div>

            {confirmId && (
                <div className="relative z-[10001]">
                    <Confirm onConfirm={() => handleDelete(confirmId)} onCancel={() => setConfirmId(null)}>
                        이 지출을 삭제할까요?
                    </Confirm>
                </div>
            )}
        </div>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(content, document.body);
}
