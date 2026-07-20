import { useCallback } from 'react';
import { useMutation } from '@liveblocks/react/suspense';
import { LiveObject, LiveList } from '@liveblocks/client';

// AI 배치 plan(카탈로그 장소)을 실제 타임라인 일차에 "새 카드"로 생성하는 훅 (RoomProvider 안에서만).
// - plan.days[].items[] 는 서버가 카탈로그에서 만든 카드 payload(+time/note).
// - ⚠️ 반드시 "단일 mutation(한 배치)" 안에서 일차 컬럼 확보 + 카드 삽입을 모두 처리한다.
//   (예전엔 applyDayCount/ensureDayColumns/createCardToColumn 을 async 안에서 각각 따로 호출 →
//    delete-후-recreate 가 여러 배치로 쪼개져 fetch await 이후 microtask 에서 useStorage 리렌더가
//    누락되는 문제가 있었음: 서버엔 반영돼 새로고침하면 보이지만 화면엔 즉시 안 뜸. 단일 배치로 해결.)

export type AiApplyMode = 'replace' | 'append';

export interface AiPlan {
    days: Array<{ day: number; items: any[] }>;
    dayCount?: number;
}

export function useApplyAiPlan() {
    // 전체 배치(일차 정리 → 일차 생성 → 카드 삽입)를 한 트랜잭션으로 커밋.
    const applyPlanMutation = useMutation(
        ({ storage }, plan: AiPlan, mode: AiApplyMode): number => {
            const columns = storage.get('columns') as any;
            const columnOrder = storage.get('columnOrder') as any;
            const cards = storage.get('cards') as any;
            if (!columns || !columnOrder || !cards) return 0;

            const days = plan?.days ?? [];
            const dayCount =
                plan?.dayCount || (days.length ? Math.max(...days.map((d) => Number(d.day) || 0)) : 0);
            if (dayCount < 1) return 0;

            // ── 1) replace: 기존 day1+ 컬럼 제거(카드는 '확정되지 않은 일정'으로 이동) ──
            if (mode === 'replace') {
                const toRemove: string[] = [];
                const pending: string[] = [];
                for (const [colId, col] of columns.entries()) {
                    if (!/^day([1-9]\d*)$/.test(colId)) continue;
                    const list = col.get('cardIds');
                    const cardIds: string[] = list?.toArray ? list.toArray() : [];
                    pending.push(...cardIds);
                    toRemove.push(colId);
                }
                if (pending.length > 0) {
                    let unconfirmedCol = columns.get('unconfirmed');
                    if (!unconfirmedCol) {
                        columns.set(
                            'unconfirmed',
                            new LiveObject({ id: 'unconfirmed', title: '확정되지 않은 일정', cardIds: new LiveList<string>([]) })
                        );
                        unconfirmedCol = columns.get('unconfirmed');
                    }
                    const unconfirmedList = (unconfirmedCol as any).get('cardIds');
                    for (const cardId of pending) unconfirmedList.push(cardId);
                }
                for (const colId of toRemove) {
                    const idx = columnOrder.toArray().indexOf(colId);
                    if (idx !== -1) columnOrder.delete(idx);
                    columns.delete(colId);
                }
            }

            // ── 2) day1..dayCount 컬럼 보장(멱등) ──
            for (let dayNum = 1; dayNum <= dayCount; dayNum++) {
                const dayId = `day${dayNum}`;
                if (columns.get(dayId)) continue;
                columns.set(
                    dayId,
                    new LiveObject({ id: dayId, title: `${dayNum}일차`, cardIds: new LiveList<string>([]) })
                );
                const orderArray = columnOrder.toArray();
                const day0Index = orderArray.indexOf('day0');
                if (day0Index !== -1) columnOrder.insert(dayId, day0Index + dayNum);
                else columnOrder.push(dayId);
            }

            // ── 3) 카드 삽입 ──
            let created = 0;
            let seq = 0;
            for (const day of days) {
                const dayNum = Number(day?.day);
                if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > dayCount) continue;
                const targetCol = columns.get(`day${dayNum}`);
                if (!targetCol) continue;
                const targetList = targetCol.get('cardIds');
                const items = Array.isArray(day.items) ? day.items : [];
                items.forEach((item) => {
                    // time/note 는 타임라인 카드 필드가 아니므로 제외하고 생성
                    const { time, note, ...payload } = item || {};
                    if (!payload?.category) return;
                    const newCardId = `card-${Date.now()}-${seq++}-${Math.random().toString(36).slice(2, 8)}`;
                    cards.set(
                        newCardId,
                        new LiveObject({
                            ...payload,
                            id: newCardId,
                            text: payload.text || payload.title,
                            type: payload.type || 'place',
                        })
                    );
                    // 배치 순서대로 컬럼 끝에 추가(replace=빈 컬럼→순차, append=기존 뒤에 추가)
                    targetList.insert(newCardId, targetList.length);
                    created++;
                });
            }
            return created;
        },
        []
    );

    const applyPlan = useCallback(
        (plan: AiPlan, { mode }: { mode: AiApplyMode }): number => applyPlanMutation(plan, mode),
        [applyPlanMutation]
    );

    // 장소 교체(모든 카테고리): fromName 과 일치하는 기존 카드를 제거하고 새 place 카드를 같은 위치에 삽입.
    // - 숙소(hotel)이고 체크인/아웃이 서로 다른 일차에 걸쳐 있으면 → 체크인/체크아웃 2장으로 전개
    // - 그 외(맛집·쇼핑·투어 등)는 → 기존 카드가 있던 자리(같은 일차·같은 위치)에 1장 교체
    // (단일 원자 mutation)
    const swapPlaceMutation = useMutation(
        ({ storage }, fromName: string, place: any): number => {
            const columns = storage.get('columns') as any;
            const cards = storage.get('cards') as any;
            if (!columns || !cards || !place) return 0;
            const target = String(fromName ?? '').trim().toLowerCase();
            if (!target) return 0;

            // 1) 기존 장소 카드 위치 수집 (day 컬럼에서 같은 이름). 카테고리 무관하게 이름으로 매칭.
            const matches: Array<{ colId: string; cardId: string; dayNum: number; index: number }> = [];
            for (const [colId, col] of columns.entries()) {
                const m = /^day(\d+)$/.exec(colId);
                if (!m) continue;
                const list = col.get('cardIds');
                const ids: string[] = list?.toArray ? list.toArray() : [];
                ids.forEach((cardId, index) => {
                    const c = cards.get(cardId);
                    if (!c) return;
                    const text = String(c.get('text') ?? c.get('title') ?? '').trim().toLowerCase();
                    if (text === target) matches.push({ colId, cardId, dayNum: parseInt(m[1]), index });
                });
            }
            if (matches.length === 0) return 0;

            // 교체 삽입 기준: 가장 앞선(일차·위치) 매칭 카드 자리
            const primary = matches.slice().sort((a, b) => a.dayNum - b.dayNum || a.index - b.index)[0];
            const dayNums = matches.map((mt) => mt.dayNum);
            const checkInDay = Math.min(...dayNums);
            const checkOutDay = Math.max(...dayNums);
            const isHotelStay = String(place.category) === 'hotel' && checkOutDay !== checkInDay;

            // 2) 기존 카드 제거
            for (const mt of matches) {
                const col = columns.get(mt.colId);
                if (!col) continue;
                const list = col.get('cardIds');
                const idx = list.indexOf(mt.cardId);
                if (idx !== -1) list.delete(idx);
                cards.delete(mt.cardId);
            }

            const makeCard = (extra: any) => {
                const newId = `card-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
                cards.set(newId, new LiveObject({ ...place, ...extra, id: newId, text: place.text || place.title, type: place.type || 'place' }));
                return newId;
            };

            // 3) 새 카드 삽입
            if (isHotelStay) {
                // 숙소: 체크인(min일차) + 체크아웃(max일차) 2장, 각 일차 상단
                const inCol = columns.get(`day${checkInDay}`);
                if (inCol) inCol.get('cardIds').insert(makeCard({ showCheckOut: false }), 0);
                const outCol = columns.get(`day${checkOutDay}`);
                if (outCol) outCol.get('cardIds').insert(makeCard({ showCheckOut: true, time: null, note: null }), 0);
            } else {
                // 그 외: 기존 자리(primary)에 1장 교체
                const col = columns.get(primary.colId);
                if (col) {
                    const list = col.get('cardIds');
                    list.insert(makeCard({}), Math.min(primary.index, list.length));
                }
            }

            return matches.length;
        },
        []
    );

    const swapPlace = useCallback(
        (fromName: string, place: any): number => swapPlaceMutation(fromName, place),
        [swapPlaceMutation]
    );

    return { applyPlan, swapPlace };
}
