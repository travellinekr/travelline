import { useCallback } from 'react';
import { useDayColumnMutations } from './useDayColumnMutations';
import { useCardMutations } from './useCardMutations';

// AI 배치 plan(카탈로그 장소)을 실제 타임라인 일차에 "새 카드"로 생성하는 훅 (RoomProvider 안에서만).
// - plan.days[].items[] 는 서버가 카탈로그에서 만든 카드 payload(+time/note).
// - 일차 컬럼 확보는 Phase 0 의 useDayColumnMutations(applyDayCount/ensureDayColumns) 재사용.
// - 카드 생성은 기존 createCardToColumn 재사용 → 좌표·정보팝업·카테고리 필드 그대로.

export type AiApplyMode = 'replace' | 'append';

export interface AiPlan {
    days: Array<{ day: number; items: any[] }>;
    dayCount?: number;
}

export function useApplyAiPlan() {
    const { applyDayCount, ensureDayColumns } = useDayColumnMutations();
    const { createCardToColumn } = useCardMutations();

    const applyPlan = useCallback(
        (plan: AiPlan, { mode }: { mode: AiApplyMode }): number => {
            const days = plan?.days ?? [];
            const dayCount =
                plan?.dayCount || (days.length ? Math.max(...days.map((d) => Number(d.day) || 0)) : 0);
            if (dayCount < 1) return 0;

            if (mode === 'replace') {
                // 기존 day1+ 카드는 '확정되지 않은 일정'으로 이동(메모 보존) 후 빈 일차 재생성
                applyDayCount(0);
                ensureDayColumns(dayCount);
            } else {
                ensureDayColumns(dayCount);
            }

            let created = 0;
            for (const day of days) {
                const targetColumnId = `day${day.day}`;
                const items = Array.isArray(day.items) ? day.items : [];
                items.forEach((item, i) => {
                    // time/note 는 카드 필드가 아니므로 제외하고 생성
                    const { time, note, ...payload } = item || {};
                    if (!payload?.category) return;
                    createCardToColumn({ ...payload, targetColumnId, targetIndex: i });
                    created++;
                });
            }
            return created;
        },
        [applyDayCount, ensureDayColumns, createCardToColumn]
    );

    return { applyPlan };
}
