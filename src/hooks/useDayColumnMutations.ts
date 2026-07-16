import { useMutation } from "@liveblocks/react/suspense";
import { LiveObject, LiveList } from "@liveblocks/client";

/**
 * 일차(day) 컬럼 생성/정리 뮤테이션 모음.
 *
 * 항공편(flightInfo)과 독립적으로 day 컬럼을 만들 수 있게 하는 Phase 0의 핵심 훅.
 * - "미리 일정 만들기" 영역(몇박몇일 드롭다운 + 반영)
 * - AI 플래너 적용 훅
 * 이 공유해서 사용한다.
 *
 * 주의: Timeline 의 dayColumns 는 처음 없는 day 에서 break 하므로(day 중간이 비면 이후 day 미표시),
 * 컬럼 축소는 반드시 "상단(큰 번호)부터" 트림해야 갭이 생기지 않는다. → applyDayCount 사용.
 *
 * 컬럼 구조(title/columnOrder 위치)는 useFlightForm.createDayColumn 과 동일하게 맞춰
 * 항공편 등록 흐름과 상호 호환되도록 한다.
 */
export function useDayColumnMutations() {
    // day1..dayCount 로 "정확히" 맞춤: 부족분 추가 + 초과분(day > dayCount) 카드 inbox 이동 후 삭제.
    // 반환값: inbox 로 이동된 카드 개수 (토스트 안내용)
    const applyDayCount = useMutation(({ storage }, dayCount: number): number => {
        const columns = storage.get("columns") as any;
        const columnOrder = storage.get("columnOrder") as any;
        if (!columns || !columnOrder) return 0;

        // 1) 부족분 생성 (멱등: 이미 있으면 skip)
        for (let dayNum = 1; dayNum <= dayCount; dayNum++) {
            const dayId = `day${dayNum}`;
            if (columns.get(dayId)) continue;

            columns.set(dayId, new LiveObject({
                id: dayId,
                title: `${dayNum}일차`,
                cardIds: new LiveList<string>([]),
            }));

            const orderArray = columnOrder.toArray();
            const day0Index = orderArray.indexOf("day0");
            if (day0Index !== -1) {
                columnOrder.insert(dayId, day0Index + dayNum);
            } else {
                columnOrder.push(dayId);
            }
        }

        // 2) 초과분(day > dayCount) 정리 — 카드는 "확정되지 않은 일정"(unconfirmed) 으로 이동(cards LiveMap 유지), 컬럼만 삭제
        const toRemove: string[] = [];
        let moved = 0;
        const pending: string[] = []; // 먼저 수집 후 이동 (순회 중 컬럼 추가 방지)

        for (const [colId, col] of columns.entries()) {
            const match = /^day([1-9]\d*)$/.exec(colId);
            if (!match) continue;
            const num = parseInt(match[1]);
            if (num <= dayCount) continue;

            const list = col.get("cardIds");
            const cardIds: string[] = list?.toArray ? list.toArray() : [];
            pending.push(...cardIds);
            toRemove.push(colId);
        }

        if (pending.length > 0) {
            let unconfirmedCol = columns.get("unconfirmed");
            if (!unconfirmedCol) {
                columns.set("unconfirmed", new LiveObject({
                    id: "unconfirmed",
                    title: "확정되지 않은 일정",
                    cardIds: new LiveList<string>([]),
                }));
                unconfirmedCol = columns.get("unconfirmed");
            }
            const unconfirmedList = (unconfirmedCol as any).get("cardIds");
            for (const cardId of pending) {
                unconfirmedList.push(cardId);
                moved++;
            }
        }

        for (const colId of toRemove) {
            const orderArray = columnOrder.toArray();
            const idx = orderArray.indexOf(colId);
            if (idx !== -1) columnOrder.delete(idx);
            columns.delete(colId);
        }

        return moved;
    }, []);

    // day1..count 보장(존재하면 skip) — 초과분은 건드리지 않음(append 전용, AI 어시스턴트 이어붙이기용)
    const ensureDayColumns = useMutation(({ storage }, count: number): void => {
        const columns = storage.get("columns") as any;
        const columnOrder = storage.get("columnOrder") as any;
        if (!columns || !columnOrder) return;

        for (let dayNum = 1; dayNum <= count; dayNum++) {
            const dayId = `day${dayNum}`;
            if (columns.get(dayId)) continue;

            columns.set(dayId, new LiveObject({
                id: dayId,
                title: `${dayNum}일차`,
                cardIds: new LiveList<string>([]),
            }));

            const orderArray = columnOrder.toArray();
            const day0Index = orderArray.indexOf("day0");
            if (day0Index !== -1) {
                columnOrder.insert(dayId, day0Index + dayNum);
            } else {
                columnOrder.push(dayId);
            }
        }
    }, []);

    // 현재 존재하는 최대 day 다음 번호 1개 추가
    const addDayColumn = useMutation(({ storage }): void => {
        const columns = storage.get("columns") as any;
        const columnOrder = storage.get("columnOrder") as any;
        if (!columns || !columnOrder) return;

        let maxDay = 0;
        for (const [colId] of columns.entries()) {
            const m = /^day([1-9]\d*)$/.exec(colId);
            if (m) maxDay = Math.max(maxDay, parseInt(m[1]));
        }

        const dayNum = maxDay + 1;
        const dayId = `day${dayNum}`;
        if (columns.get(dayId)) return;

        columns.set(dayId, new LiveObject({
            id: dayId,
            title: `${dayNum}일차`,
            cardIds: new LiveList<string>([]),
        }));

        const orderArray = columnOrder.toArray();
        const day0Index = orderArray.indexOf("day0");
        if (day0Index !== -1) {
            columnOrder.insert(dayId, day0Index + dayNum);
        } else {
            columnOrder.push(dayId);
        }
    }, []);

    return { applyDayCount, ensureDayColumns, addDayColumn };
}
