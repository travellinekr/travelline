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

    return { applyPlan };
}
