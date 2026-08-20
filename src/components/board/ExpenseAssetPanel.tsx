'use client';

import { useState } from 'react';
import { Trash2, Check, Loader2, ArrowLeft, ArrowUp } from 'lucide-react';
import {
    CURRENCIES, CURRENCY_MAP, formatAmount,
    formatNumberInput, parseAmountInput,
    type CurrencyCode, type AssetType,
} from '@/data/expenseCodes';
import type { TripAsset } from '@/hooks/useExpenses';

// 경비 창 "상세보기" 패널 — 총예상경비 · 환전 · 트래블카드 충전을 입력한다.
//
// 환전/충전은 둘 다 trip_assets 이고 asset_type 만 다르다(cash / travel_card).
// 입력은 "받는 통화 ← 내는 통화" 두 쌍이다. 원화로 샀으면 그 금액이 krw_cost 가 되고,
// 이미 가진 외화로 샀으면(달러 → 루피아) 자산 간 이동이라 원화 총사용경비는 늘지 않는다.
// 그 판단은 useExpenses.addExchange 가 담당한다.
//
// 모든 금액 입력칸은 타이핑하는 동안 3자리 콤마로 마스킹된다(formatNumberInput).
// 소수를 쓰지 않는 통화(원·엔·동·루피아 등 decimals=0)는 소수점 입력 자체를 막는다.

export interface ExchangeInput {
    assetType: AssetType;
    toCurrency: CurrencyCode;
    toAmount: number;
    fromCurrency: CurrencyCode;
    fromAmount: number | null;
}

const krw = (n: number) => `${Math.round(n).toLocaleString('ko-KR')}원`;

const inputCls = 'px-2.5 py-1.5 border border-gray-200 rounded-lg text-sm tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 disabled:bg-gray-50';

interface Props {
    budget: number | null;
    assets: TripAsset[];
    canWrite: boolean;
    /** 여행지 기준 기본 통화 (없으면 KRW) */
    defaultCurrency: CurrencyCode;
    onSetBudget: (amountKrw: number) => Promise<void>;
    onExchange: (input: ExchangeInput) => Promise<void>;
    onDeleteAsset: (id: string) => Promise<void>;
}

export function ExpenseAssetPanel({
    budget, assets, canWrite, defaultCurrency,
    onSetBudget, onExchange, onDeleteAsset,
}: Props) {
    // 원화 예산은 소수를 쓰지 않으므로 정수 마스킹만
    const [budgetInput, setBudgetInput] = useState(budget === null ? '' : formatNumberInput(String(budget)));
    const [busy, setBusy] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);

    const run = async (key: string, fn: () => Promise<void>) => {
        setBusy(key);
        setErr(null);
        try {
            await fn();
        } catch (e: any) {
            setErr(e?.message || '저장하지 못했어요.');
        } finally {
            setBusy(null);
        }
    };

    const cash = assets.filter((a) => a.asset_type === 'cash');
    const cards = assets.filter((a) => a.asset_type === 'travel_card');

    return (
        <div className="pt-2.5 space-y-2.5">
            {err && <p className="text-xs text-rose-500">{err}</p>}

            {/* 총예상경비 */}
            <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">총예상경비</label>
                <div className="flex items-center gap-1.5">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={budgetInput}
                        onChange={(e) => setBudgetInput(formatNumberInput(e.target.value))}
                        placeholder="3,000,000"
                        disabled={!canWrite}
                        className={`${inputCls} flex-1 min-w-0 text-right`}
                    />
                    <span className="text-sm text-gray-500 shrink-0">원</span>
                    {canWrite && (
                        <button
                            type="button"
                            onClick={() => {
                                const n = parseAmountInput(budgetInput);
                                if (n === null) { setErr('예상 경비를 확인해주세요.'); return; }
                                run('budget', () => onSetBudget(n));
                            }}
                            disabled={busy === 'budget'}
                            className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50"
                            aria-label="예상 경비 저장"
                        >
                            {busy === 'budget' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                        </button>
                    )}
                </div>
            </div>

            <AssetSection
                title="환전"
                assetType="cash"
                rows={cash}
                canWrite={canWrite}
                defaultCurrency={defaultCurrency}
                busy={busy}
                onAdd={(p) => run('cash', () => onExchange(p))}
                onDelete={(id) => run(id, () => onDeleteAsset(id))}
            />

            <AssetSection
                title="트래블카드 충전"
                assetType="travel_card"
                rows={cards}
                canWrite={canWrite}
                defaultCurrency="KRW"
                krwOnly
                busy={busy}
                onAdd={(p) => run('travel_card', () => onExchange(p))}
                onDelete={(id) => run(id, () => onDeleteAsset(id))}
            />
        </div>
    );
}

function AssetSection({
    title, assetType, rows, canWrite, defaultCurrency, krwOnly = false, busy, onAdd, onDelete,
}: {
    title: string;
    assetType: AssetType;
    rows: TripAsset[];
    canWrite: boolean;
    defaultCurrency: CurrencyCode;
    /** 원화로만 충전하는 섹션(트래블카드) — 통화 선택 없이 금액 한 칸만 받는다 */
    krwOnly?: boolean;
    busy: string | null;
    onAdd: (input: ExchangeInput) => void;
    onDelete: (id: string) => void;
}) {
    // 받는 쪽(현지 통화) / 내는 쪽(원화 또는 이미 가진 외화)
    const [toCurrency, setToCurrency] = useState<CurrencyCode>(defaultCurrency);
    const [toAmount, setToAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState<CurrencyCode>('KRW');
    const [fromAmount, setFromAmount] = useState('');

    const sameCurrency = toCurrency === fromCurrency;
    const decimalsOf = (c: CurrencyCode) => (CURRENCY_MAP[c]?.decimals ?? 0) > 0;

    // 통화를 바꾸면 이미 찍힌 소수점이 무효가 될 수 있으므로 새 규칙으로 다시 마스킹
    const changeToCurrency = (next: CurrencyCode) => {
        setToCurrency(next);
        setToAmount((v) => formatNumberInput(v, decimalsOf(next)));
    };
    const changeFromCurrency = (next: CurrencyCode) => {
        setFromCurrency(next);
        setFromAmount((v) => formatNumberInput(v, decimalsOf(next)));
    };

    const submit = () => {
        const amt = parseAmountInput(toAmount);
        if (amt === null || amt === 0) return;
        onAdd(krwOnly
            ? { assetType, toCurrency: 'KRW', toAmount: amt, fromCurrency: 'KRW', fromAmount: amt }
            : {
                assetType,
                toCurrency,
                toAmount: amt,
                fromCurrency,
                // 통화가 같으면 낸 돈이 곧 금액
                fromAmount: sameCurrency ? amt : parseAmountInput(fromAmount),
            });
        setToAmount('');
        setFromAmount('');
    };

    return (
        <div className="border-t border-gray-100 pt-2.5">
            <div className="text-xs font-bold text-gray-600 mb-1.5">{title}</div>

            {rows.length > 0 && (
                <ul className="space-y-1 mb-1.5">
                    {rows.map((a) => (
                        <li key={a.id} className="flex items-center justify-between gap-2 text-sm">
                            <span className="min-w-0 truncate text-gray-700 font-semibold tabular-nums">
                                {formatAmount(a.amount, a.currency)}
                            </span>
                            <span className="flex items-center gap-1.5 shrink-0">
                                {a.krw_cost !== null && a.currency !== 'KRW' && (
                                    <span className="text-xs text-gray-500 tabular-nums">← {krw(a.krw_cost)}</span>
                                )}
                                {canWrite && (
                                    <button
                                        type="button"
                                        onClick={() => onDelete(a.id)}
                                        disabled={busy === a.id}
                                        className="p-1 rounded text-gray-300 hover:text-rose-500 hover:bg-rose-50 disabled:opacity-40"
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

            {canWrite && krwOnly && (
                /* 트래블카드는 원화로만 충전 → 금액 한 칸 */
                <div className="flex items-center gap-1.5">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={toAmount}
                        onChange={(e) => setToAmount(formatNumberInput(e.target.value))}
                        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                        placeholder="200,000"
                        className={`${inputCls} flex-1 min-w-0 text-right`}
                    />
                    <span className="text-sm text-gray-500 shrink-0">원</span>
                    <button
                        type="button"
                        onClick={submit}
                        disabled={busy === assetType || !toAmount.trim()}
                        className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-40"
                        aria-label={`${title} 추가`}
                    >
                        {busy === assetType ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                    </button>
                </div>
            )}

            {canWrite && !krwOnly && (
                /* 받는 통화 ← 내는 통화. 좌우 그룹을 flex-1 로 같은 비율로 두고,
                   좁은 화면에서는 두 줄로 접힌다. 달러로 루피아를 환전하는 경우까지 커버. */
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <select
                            value={toCurrency}
                            onChange={(e) => changeToCurrency(e.target.value as CurrencyCode)}
                            className={`${inputCls} w-[84px] shrink-0`}
                        >
                            {CURRENCIES.map((c) => (
                                <option key={c.code} value={c.code}>{c.name}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            inputMode="numeric"
                            value={toAmount}
                            onChange={(e) => setToAmount(formatNumberInput(e.target.value, decimalsOf(toCurrency)))}
                            onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                            placeholder="금액"
                            className={`${inputCls} flex-1 min-w-0 text-right`}
                        />
                    </div>

                    {/* 좌우 배치일 땐 왼쪽으로, 모바일에서 위아래로 접히면 위쪽으로 향한다
                        (돈이 "내는 쪽 → 받는 쪽"으로 흐르는 방향과 일치시킴) */}
                    <span className="shrink-0 flex justify-center text-gray-300 sm:px-0.5">
                        <ArrowUp className="w-3.5 h-3.5 sm:hidden" />
                        <ArrowLeft className="w-3.5 h-3.5 hidden sm:block" />
                    </span>

                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <select
                            value={fromCurrency}
                            onChange={(e) => changeFromCurrency(e.target.value as CurrencyCode)}
                            className={`${inputCls} w-[84px] shrink-0`}
                        >
                            {CURRENCIES.map((c) => (
                                <option key={c.code} value={c.code}>{c.name}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            inputMode="numeric"
                            value={sameCurrency ? toAmount : fromAmount}
                            onChange={(e) => setFromAmount(formatNumberInput(e.target.value, decimalsOf(fromCurrency)))}
                            onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                            placeholder="금액"
                            disabled={sameCurrency}
                            className={`${inputCls} flex-1 min-w-0 text-right`}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={submit}
                        disabled={busy === assetType || !toAmount.trim()}
                        className="shrink-0 self-end sm:self-auto px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-40"
                        aria-label={`${title} 추가`}
                    >
                        {busy === assetType ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                    </button>
                </div>
            )}
        </div>
    );
}
