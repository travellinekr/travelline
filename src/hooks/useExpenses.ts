'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useStorage } from '@/liveblocks.config';
import { CURRENCY_MAP, type AssetType, type PaymentType, type CurrencyCode } from '@/data/expenseCodes';

// 경비 데이터 조회 + 집계.
//
// 저장은 Supabase(trip_budget/trip_assets/trip_expenses), 카드는 Liveblocks 에 있어
// "이 지출이 몇 일차 카드인지"는 조회 시점에 Liveblocks columns 를 훑어 계산한다.
// (일차를 DB 에 저장하지 않는 이유: 카드가 일차를 옮기면 값이 틀어지기 때문)

export interface TripAsset {
    id: string;
    currency: CurrencyCode;
    asset_type: AssetType;
    amount: number;
    krw_cost: number | null;
    created_at: string;
}

export interface TripExpense {
    id: string;
    card_id: string | null;
    card_name: string | null;
    card_category: string | null;
    currency: CurrencyCode;
    payment_type: PaymentType;
    amount: number;
    /** 신용카드 외화 결제의 원화 환산액(근사). 그 외 수단은 null */
    krw_amount: number | null;
    /** 환전으로 자동 생성된 지출의 출처 자산 id. 직접 등록한 지출은 null */
    source_asset_id: string | null;
    title: string | null;
    created_at: string;
}

/** 통화+수단별 잔액 한 줄 */
export interface BalanceRow {
    currency: CurrencyCode;
    type: AssetType;
    assetTotal: number;
    spentTotal: number;
    balance: number;
}

/** 지출 한 건 + 화면 표시용 위치 정보 */
export interface ExpenseRow extends TripExpense {
    /** 카드가 현재 속한 컬럼 id (없으면 null = 삭제된 카드) */
    columnId: string | null;
    /** "3일차" · "항공" · "보관함" · "삭제된 카드" */
    locationLabel: string;
    /** 일차 정렬용. day0=0, dayN=N, 그 외는 큰 수로 밀어냄 */
    sortKey: number;
}

/** 같은 카드에 달린 지출 묶음. 카드명을 한 번만 쓰고 세부 항목을 아래로 늘어놓는다 */
export interface ExpenseCardGroup {
    key: string;
    /** 카드명. 카드에 붙지 않은 지출은 '기타' */
    name: string;
    rows: ExpenseRow[];
}

/** 위치(일차) 묶음 → 그 안에서 다시 카드 묶음 */
export interface ExpenseLocationGroup {
    label: string;
    sortKey: number;
    cards: ExpenseCardGroup[];
}

const FLIGHT_SORT = -2;
const DAY0_SORT = -1;
const OTHER_SORT = 9000;
const DELETED_SORT = 9999;

/** 컬럼 id → 화면 라벨 + 정렬 키 */
function describeColumn(columnId: string | null): { label: string; sortKey: number } {
    if (!columnId) return { label: '삭제된 카드', sortKey: DELETED_SORT };
    if (columnId === 'flights') return { label: '항공', sortKey: FLIGHT_SORT };
    if (columnId === 'day0') return { label: '0일차 준비', sortKey: DAY0_SORT };
    const m = /^day([1-9]\d*)$/.exec(columnId);
    if (m) return { label: `${m[1]}일차`, sortKey: Number(m[1]) };
    if (columnId === 'inbox') return { label: '보관함', sortKey: OTHER_SORT };
    if (columnId === 'destination-header') return { label: '여행지', sortKey: OTHER_SORT };
    if (columnId === 'destination-candidates') return { label: '여행지 후보', sortKey: OTHER_SORT };
    return { label: columnId, sortKey: OTHER_SORT };
}

export function useExpenses(projectId: string, enabled: boolean) {
    const [budget, setBudget] = useState<number | null>(null);
    const [assets, setAssets] = useState<TripAsset[]>([]);
    const [expenses, setExpenses] = useState<TripExpense[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [canWrite, setCanWrite] = useState(false);

    // ⚠️ selector 안에서 새 Map 을 만들어 반환하면 매 렌더마다 참조가 바뀌어 재렌더 루프가 난다.
    //    CollaborativeApp 과 동일하게 원본만 꺼내고(참조 안정), Map 빌드는 useMemo 로 분리한다.
    const columns = useStorage((root) => root.columns);

    // cardId → columnId. 전체를 1회 순회해 Map 을 만든다.
    // (카드마다 개별 조회하면 O(cards) 재계산이 카드 수만큼 발생)
    const cardLocationMap = useMemo(() => {
        const map = new Map<string, string>();
        const cols = columns as any;
        if (!cols?.forEach) return map;
        cols.forEach((col: any, colId: string) => {
            const ids = col?.cardIds;
            const list: string[] = Array.isArray(ids) ? ids : (ids?.toArray?.() ?? []);
            for (const cardId of list) map.set(cardId, colId);
        });
        return map;
    }, [columns]);

    const authFetch = useCallback(async (path: string, init?: RequestInit) => {
        const { data: { session } } = await supabase.auth.getSession();
        const token = session?.access_token;
        if (!token) throw new Error('로그인이 필요해요.');
        const res = await fetch(`/api/projects/${projectId}${path}`, {
            ...init,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...(init?.headers ?? {}) },
        });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(body?.error || '요청에 실패했어요.');
        return body;
    }, [projectId]);

    const reload = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await authFetch('/expenses');
            setBudget(data.budget ?? null);
            setAssets(data.assets ?? []);
            setExpenses(data.expenses ?? []);
            setCanWrite(data.role === 'owner' || data.role === 'editor');
        } catch (e: any) {
            setError(e?.message || '경비 정보를 불러오지 못했어요.');
        } finally {
            setLoading(false);
        }
    }, [authFetch]);

    useEffect(() => {
        if (enabled) reload();
    }, [enabled, reload]);

    // ── 집계 ────────────────────────────────────────────────
    // 총사용한경비 = 환전·충전에 쓴 원화 + "따로 지갑에서 나간" 원화 지출
    //
    //   기본 원칙은 원화가 실제로 나간 시점을 한 번만 세는 것이다.
    //
    //   ▸ 신용카드 : 대응하는 자산이 없는 후불이라 지출 자체를 센다.
    //                외화 결제는 등록 시점에 서버가 환산해 둔 krw_amount 를 쓴다(근사값).
    //                환율 조회 실패로 null 인 건은 빠지고 화면에서 따로 알린다.
    //
    //   ▸ 현금·트래블카드 : 환전·충전해 둔 자산에서 나가는 돈이라 원칙적으로 세지 않는다.
    //                그 원화는 이미 자산의 krw_cost 로 셌기 때문.
    //                단 대응 자산이 없는 원화 지출(원화 현금으로 항공권 결제 등)은
    //                어디에도 안 잡혀 그대로 증발한다 → 이 경우에만 지출을 센다.
    const krwFromAssets = useMemo(
        () => assets.reduce((s, a) => s + (a.krw_cost ?? 0), 0),
        [assets],
    );

    // "통화|수단" 조합으로 등록된 자산이 있는지. 있으면 그 지출은 자산에서 빠져나간 것.
    const assetKeys = useMemo(
        () => new Set(assets.map((a) => `${a.currency}|${a.asset_type}`)),
        [assets],
    );

    const krwFromExpenses = useMemo(
        () => expenses
            .filter((e) =>
                e.payment_type === 'credit_card'
                // 대응 자산이 없는 원화 지출만 추가로 센다(이중 계산 방지)
                || (e.currency === 'KRW' && !assetKeys.has(`KRW|${e.payment_type}`)),
            )
            .reduce((s, e) => s + (e.currency === 'KRW' ? e.amount : (e.krw_amount ?? 0)), 0),
        [expenses, assetKeys],
    );
    const totalSpentKrw = krwFromAssets + krwFromExpenses;

    // 환산되지 않은 신용카드 외화 건 수. 0 보다 크면 총액이 실제보다 적다는 뜻이라
    // 화면에서 안내가 필요하다.
    const unconvertedCount = useMemo(
        () => expenses.filter(
            (e) => e.payment_type === 'credit_card' && e.currency !== 'KRW' && e.krw_amount === null,
        ).length,
        [expenses],
    );

    // 근사 환산된 신용카드 외화 건이 하나라도 있으면 총액에 "약" 성격이 섞인다.
    const hasApproxKrw = useMemo(
        () => expenses.some(
            (e) => e.payment_type === 'credit_card' && e.currency !== 'KRW' && e.krw_amount !== null,
        ),
        [expenses],
    );

    // 잔액: 통화+수단이 정확히 일치할 때만 차감. 서로 다른 통화는 절대 섞지 않는다.
    // 신용카드는 대응 자산이 없어 여기 나타나지 않는다(후불).
    const balances = useMemo<BalanceRow[]>(() => {
        const map = new Map<string, BalanceRow>();
        for (const a of assets) {
            const key = `${a.currency}|${a.asset_type}`;
            const row = map.get(key) ?? { currency: a.currency, type: a.asset_type, assetTotal: 0, spentTotal: 0, balance: 0 };
            row.assetTotal += a.amount;
            map.set(key, row);
        }
        for (const e of expenses) {
            const key = `${e.currency}|${e.payment_type}`;
            const row = map.get(key);
            if (row) row.spentTotal += e.amount;   // 자산이 없는 조합(신용카드 등)은 무시
        }
        for (const row of map.values()) row.balance = row.assetTotal - row.spentTotal;
        // 다 쓴 통화(달러를 전부 루피아로 환전한 경우 등)는 목록에서 뺀다.
        // 0 을 계속 들고 있으면 남은 금액 블록이 지난 통화로 계속 길어진다.
        return [...map.values()].filter((row) => row.balance !== 0);
    }, [assets, expenses]);

    // 지출 + 현재 위치 라벨. 카드가 옮겨지면 다음 렌더에 자동 반영된다.
    const rows = useMemo<ExpenseRow[]>(() => {
        return expenses
            .map((e) => {
                const columnId = e.card_id ? (cardLocationMap?.get(e.card_id) ?? null) : null;
                // 카드에 붙지 않은 지출(card_id 없음)은 "기타"로 묶는다.
                // 단 항공권은 특정 일차의 카드가 아니라 여행 전체에 걸리는 비용이므로
                // 카드가 없어도 "항공"으로 묶어 맨 앞에 둔다.
                const desc = e.card_id
                    ? describeColumn(columnId)
                    : e.card_category === 'flight'
                        ? { label: '항공', sortKey: FLIGHT_SORT }
                        : { label: '기타', sortKey: OTHER_SORT };
                return { ...e, columnId, locationLabel: desc.label, sortKey: desc.sortKey };
            })
            .sort((a, b) => a.sortKey - b.sortKey || a.created_at.localeCompare(b.created_at));
    }, [expenses, cardLocationMap]);

    /**
     * 화면 표시용 2단 그룹.
     *   [{ label: '항공', cards: [{ name: '항공권', rows: [출발, 도착] }] }, ...]
     *
     * 같은 카드에 지출이 여러 건이면(항공권의 출발/도착 등) 카드명을 한 번만 쓰고
     * 세부 항목(title)을 아래로 늘어놓는다.
     *
     * 카드 묶음 키는 card_id 우선. card_id 가 없는 옛 기록이나 환전 지출은 card_name 으로,
     * 그것도 없으면 전부 '기타' 하나로 모은다.
     * rows 가 이미 정렬돼 있으므로 Map 의 삽입 순서가 곧 표시 순서가 된다.
     */
    const groups = useMemo<ExpenseLocationGroup[]>(() => {
        const out: ExpenseLocationGroup[] = [];

        for (const r of rows) {
            let loc = out[out.length - 1];
            if (!loc || loc.label !== r.locationLabel) {
                loc = { label: r.locationLabel, sortKey: r.sortKey, cards: [] };
                out.push(loc);
            }

            const key = r.card_id ?? (r.card_name ? `name:${r.card_name}` : 'etc');
            const existing = loc.cards.find((c) => c.key === key);
            if (existing) existing.rows.push(r);
            else loc.cards.push({ key, name: r.card_name || '기타', rows: [r] });
        }

        return out;
    }, [rows]);

    // ── 변경 ────────────────────────────────────────────────
    // 등록·삭제 후 전체를 다시 불러오면(reload) 화면이 통째로 깜빡인다.
    // 서버 응답으로 로컬 state 만 갱신해 해당 줄만 바뀌게 한다.
    // 집계(총사용·잔액)는 useMemo 라 state 가 바뀌면 자동으로 다시 계산된다.
    const addExpense = useCallback(async (payload: Record<string, unknown>) => {
        const { expense } = await authFetch('/expenses', { method: 'POST', body: JSON.stringify(payload) });
        setExpenses((prev) => [...prev, expense]);
    }, [authFetch]);

    const updateExpense = useCallback(async (id: string, payload: Record<string, unknown>) => {
        const { expense } = await authFetch(`/expenses/${id}`, { method: 'PATCH', body: JSON.stringify(payload) });
        setExpenses((prev) => prev.map((e) => (e.id === id ? expense : e)));
    }, [authFetch]);

    const deleteExpense = useCallback(async (id: string) => {
        await authFetch(`/expenses/${id}`, { method: 'DELETE' });
        setExpenses((prev) => prev.filter((e) => e.id !== id));
    }, [authFetch]);

    const addAsset = useCallback(async (payload: Record<string, unknown>) => {
        const { asset } = await authFetch('/assets', { method: 'POST', body: JSON.stringify(payload) });
        setAssets((prev) => [...prev, asset]);
    }, [authFetch]);

    /**
     * 환전·충전 등록. "무엇으로 샀는지"(fromCurrency)에 따라 처리가 갈린다.
     *
     *  원화로 샀으면      → 새 자산 + krw_cost. 그만큼 원화가 나갔으므로 총사용경비 증가.
     *  외화로 샀으면      → 자산 간 이동일 뿐 원화는 안 나갔다(그 외화를 살 때 이미 셈).
     *                       새 자산은 krw_cost=null 로 넣고, 출발 통화 잔액만 지출로 차감한다.
     *                       그 지출은 KRW 가 아니라 총사용경비 계산에 잡히지 않는다 → 이중 계산 방지.
     *  통화가 같으면      → 단순 충전. 출발 차감 없음.
     */
    const addExchange = useCallback(async (input: {
        assetType: AssetType;
        toCurrency: CurrencyCode;
        toAmount: number;
        fromCurrency: CurrencyCode;
        fromAmount: number | null;
    }) => {
        const { assetType, toCurrency, toAmount, fromCurrency, fromAmount } = input;
        const sameCurrency = fromCurrency === toCurrency;
        const paidWithKrw = fromCurrency === 'KRW';

        const { asset } = await authFetch('/assets', {
            method: 'POST',
            body: JSON.stringify({
                currency: toCurrency,
                asset_type: assetType,
                amount: toAmount,
                krw_cost: paidWithKrw ? (fromAmount ?? toAmount) : null,
            }),
        });
        setAssets((prev) => [...prev, asset]);

        if (!paidWithKrw && !sameCurrency && fromAmount) {
            const { expense } = await authFetch('/expenses', {
                method: 'POST',
                body: JSON.stringify({
                    currency: fromCurrency,
                    payment_type: assetType,
                    amount: fromAmount,
                    // 방금 만든 자산에 묶어 둔다. 그 자산을 지우면 이 지출도 DB 에서 함께 지워져
                    // 출발 통화 잔액이 깎인 채로 남는 일이 없다.
                    source_asset_id: asset.id,
                    title: `${CURRENCY_MAP[toCurrency]?.name ?? toCurrency} 환전`,
                }),
            });
            setExpenses((prev) => [...prev, expense]);
        }
    }, [authFetch]);

    const deleteAsset = useCallback(async (id: string) => {
        await authFetch(`/assets/${id}`, { method: 'DELETE' });
        setAssets((prev) => prev.filter((a) => a.id !== id));
        // 환전 짝 지출은 DB 에서 FK CASCADE 로 이미 지워졌다.
        // 전체를 다시 불러오면 화면이 깜빡이므로 로컬 state 에서도 같은 기준으로 걷어낸다.
        setExpenses((prev) => prev.filter((e) => e.source_asset_id !== id));
    }, [authFetch]);

    const setBudgetAmount = useCallback(async (amountKrw: number) => {
        const res = await authFetch('/budget', { method: 'PUT', body: JSON.stringify({ amount_krw: amountKrw }) });
        setBudget(res.budget ?? amountKrw);
    }, [authFetch]);

    return {
        loading, error, canWrite, reload,
        budget, assets, expenses,
        totalSpentKrw, krwFromAssets, krwFromExpenses,
        unconvertedCount, hasApproxKrw,
        balances, groups,
        addExpense, updateExpense, deleteExpense, addAsset, addExchange, deleteAsset, setBudgetAmount,
    };
}
