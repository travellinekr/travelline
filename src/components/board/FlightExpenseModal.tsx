'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2, Trash2 } from 'lucide-react';
import {
    PAYMENT_TYPES, formatNumberInput, parseAmountInput,
    type PaymentType,
} from '@/data/expenseCodes';
import type { TripExpense } from '@/hooks/useExpenses';
import { Confirm } from './Confirm';

// 항공권 지출 입력 — 경비 창 푸터의 "+ 항공권".
//
// 항공권만 따로 두는 이유
//   여행의 다른 지출은 특정 카드(맛집·숙소 등)에 붙는데, 항공권은 일차에 속하지 않고
//   가는편/오는편 두 건이 한 쌍으로 움직인다. 그래서 두 줄을 한 화면에서 같이 받는다.
//
// 저장 형태
//   card_category = 'flight', card_name = '항공권', title = '가는편' | '오는편'
//   card_id 는 없다(Liveblocks 카드에 붙지 않음). useExpenses 가 card_category 로
//   '항공' 그룹에 묶어 지출 내역 맨 앞에 보여준다.
//
// 통화는 원화 고정. 항공권은 국내에서 원화로 결제하는 것이 일반적이라 통화 선택을 두지 않았다.

/** 지출 한 건을 식별하는 구간 이름. title 에 그대로 저장된다. */
const LEGS = ['가는편', '오는편'] as const;
type Leg = typeof LEGS[number];

const inputCls = 'px-2.5 py-1.5 border border-gray-200 rounded-lg text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400';

/** 이미 등록된 항공권 지출 찾기 — 다시 열었을 때 값을 채워 넣기 위함 */
export function findFlightExpense(expenses: TripExpense[], leg: Leg): TripExpense | null {
    return expenses.find((e) => e.card_category === 'flight' && e.title === leg) ?? null;
}

interface Props {
    expenses: TripExpense[];
    /** 등록/수정 한 건. 기존 건이 있으면 id 가 넘어온다 */
    onSave: (input: {
        id: string | null;
        leg: Leg;
        amount: number;
        paymentType: PaymentType;
    }) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
    onClose: () => void;
}

export function FlightExpenseModal({ expenses, onSave, onDelete, onClose }: Props) {
    // 기존 값으로 초기화. 없으면 빈 칸 + 신용카드 기본.
    const [form, setForm] = useState<Record<Leg, { amount: string; payment: PaymentType }>>(() => {
        const build = (leg: Leg) => {
            const found = findFlightExpense(expenses, leg);
            return {
                amount: found ? formatNumberInput(String(found.amount)) : '',
                payment: (found?.payment_type ?? 'credit_card') as PaymentType,
            };
        };
        return { 가는편: build('가는편'), 오는편: build('오는편') };
    });

    const [busy, setBusy] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const setLeg = (leg: Leg, patch: Partial<{ amount: string; payment: PaymentType }>) =>
        setForm((prev) => ({ ...prev, [leg]: { ...prev[leg], ...patch } }));

    // 이미 등록된 편이 하나라도 있으면 일괄 삭제를 열어준다
    const registered = LEGS.map((leg) => findFlightExpense(expenses, leg)).filter(Boolean) as TripExpense[];

    // 지출 내역 목록에는 삭제 버튼을 두지 않는다(지우면 다시 들어올 길이 없어서).
    // 삭제는 이 팝업에서 가는편·오는편을 한 번에 처리한다.
    const handleDeleteAll = async () => {
        setConfirmOpen(false);
        setBusy(true);
        setErr(null);
        try {
            for (const e of registered) await onDelete(e.id);
            onClose();
        } catch (e: any) {
            setErr(e?.message || '삭제하지 못했어요.');
            setBusy(false);
        }
    };

    const handleSubmit = async () => {
        setBusy(true);
        setErr(null);
        try {
            for (const leg of LEGS) {
                const existing = findFlightExpense(expenses, leg);
                const amount = parseAmountInput(form[leg].amount);

                // 값을 비웠는데 기존 건이 있으면 삭제로 해석한다
                if (amount === null || amount === 0) {
                    if (existing) await onDelete(existing.id);
                    continue;
                }
                await onSave({ id: existing?.id ?? null, leg, amount, paymentType: form[leg].payment });
            }
            onClose();
        } catch (e: any) {
            setErr(e?.message || '저장하지 못했어요.');
        } finally {
            setBusy(false);
        }
    };

    const content = (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
                    <h2 className="text-base font-bold text-gray-800">항공권</h2>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors" aria-label="닫기">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="px-5 py-3.5 space-y-2.5">
                    {err && <p className="text-xs text-rose-500">{err}</p>}

                    {LEGS.map((leg) => (
                        <div key={leg} className="flex items-center gap-2">
                            <span className="w-[52px] shrink-0 text-sm font-medium text-gray-600">{leg}</span>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={form[leg].amount}
                                onChange={(e) => setLeg(leg, { amount: formatNumberInput(e.target.value) })}
                                placeholder="0"
                                className={`${inputCls} flex-1 min-w-0 text-right`}
                            />
                            <span className="text-sm text-gray-500 shrink-0">원</span>
                            <select
                                value={form[leg].payment}
                                onChange={(e) => setLeg(leg, { payment: e.target.value as PaymentType })}
                                className={`${inputCls} w-[96px] shrink-0`}
                            >
                                {PAYMENT_TYPES.map((t) => (
                                    <option key={t.code} value={t.code}>{t.label}</option>
                                ))}
                            </select>
                        </div>
                    ))}

                    <p className="text-[11px] text-gray-400 leading-relaxed">
                        한쪽만 비우고 저장하면 그 편만 삭제돼요.
                    </p>
                </div>

                <div className="flex items-center justify-between gap-2 px-5 py-2.5 border-t border-gray-200 bg-gray-50">
                    {registered.length > 0 ? (
                        <button
                            onClick={() => setConfirmOpen(true)}
                            disabled={busy}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-200 bg-white text-rose-500 text-sm font-medium hover:bg-rose-50 disabled:opacity-50 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" /> 삭제
                        </button>
                    ) : <span />}

                    <span className="flex items-center gap-2">
                    <button
                        onClick={onClose}
                        className="px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={busy}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50 transition-colors font-medium text-sm"
                    >
                        {busy && <Loader2 className="w-4 h-4 animate-spin" />}
                        저장
                    </button>
                    </span>
                </div>
            </div>

            {confirmOpen && (
                <div className="relative z-[10001]">
                    <Confirm onConfirm={handleDeleteAll} onCancel={() => setConfirmOpen(false)}>
                        등록된 항공권 지출을 모두 삭제할까요?
                    </Confirm>
                </div>
            )}
        </div>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(content, document.body);
}
