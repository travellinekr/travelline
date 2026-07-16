import { useEffect, useRef } from 'react';
import { LiveList, LiveObject } from '@liveblocks/client';
import { useMutation } from '@/liveblocks.config';

// Liveblocks 스토리지의 보드 구조 관리:
// - cleanupFlightAndDays: 여행지 제거 시 항공편 + day 컬럼 일괄 삭제 (외부 노출)
// - autoRestore: 필수 컬럼이 비었을 때 자동 복구 (내부 effect로 트리거)
//
// columns가 비었거나 필수 컬럼이 누락되면 마운트 시 자동으로 복구함.
export function useBoardStorage({
    columns,
    addToast,
}: {
    columns: any;
    addToast: (msg: string, type?: 'info' | 'warning') => void;
}) {
    // Cleanup mutation: removes flight info and all Day 1+ columns when destination is removed
    const cleanupFlightAndDays = useMutation(({ storage }) => {
        // Delete flight info
        storage.delete('flightInfo');

        // Get columns and columnOrder
        // 로컬/Vercel 타입 추론 차이 회피 위해 any 로 캐스팅 (memory: feedback_vercel_local_build_drift)
        const columnsMap = storage.get('columns') as any;
        const columnOrderList = storage.get('columnOrder') as any;

        if (!columnsMap || !columnOrderList) return;

        // Find and remove all Day 1+ columns (day1, day2, day3, etc.)
        const orderArray: string[] = columnOrderList.toArray();
        const dayColumnsToRemove: string[] = [];

        for (let i = 0; i < orderArray.length; i++) {
            const colId = orderArray[i];
            // Match day0, day1, day2, day3, etc. (여행준비 포함 전체 초기화)
            if (/^day\d+$/.test(colId)) {
                dayColumnsToRemove.push(colId);
            }
        }

        // Remove from columns map
        dayColumnsToRemove.forEach(colId => {
            columnsMap.delete(colId);
        });

        // Remove from columnOrder (in reverse to maintain indices)
        for (let i = orderArray.length - 1; i >= 0; i--) {
            const colId = orderArray[i];
            if (dayColumnsToRemove.includes(colId)) {
                columnOrderList.delete(i);
            }
        }

        // "확정되지 않은 일정"(unconfirmed) 도 전체 리셋에 포함 — 컬럼 + 카드 객체까지 삭제
        // (columnOrder 에는 없지만 방어적으로 함께 제거)
        const unconfirmedCol = columnsMap.get('unconfirmed');
        if (unconfirmedCol) {
            const cardsMap = storage.get('cards') as any;
            const list = unconfirmedCol.get('cardIds');
            const ids: string[] = list?.toArray ? list.toArray() : [];
            if (cardsMap) ids.forEach((id: string) => cardsMap.delete(id));
            columnsMap.delete('unconfirmed');
            const uIdx = columnOrderList.toArray().indexOf('unconfirmed');
            if (uIdx !== -1) columnOrderList.delete(uIdx);
        }
    }, []);

    // [긴급 복구] 데이터가 로드되었으나 필수 컬럼이 비어있을 경우 자동 초기화
    const autoRestore = useMutation(({ storage }) => {
        const columnsMap = storage.get('columns') as any;
        const cardsMap = storage.get('cards') as any;
        const columnOrder = storage.get('columnOrder') as any;

        if (!columnsMap || !cardsMap) return;

        // 1. 기본 컬럼 확인 및 생성
        const requiredCols = [
            { id: "destination-header", title: "최종 여행지" },
            { id: "destination-candidates", title: "여행지 후보" },
            { id: "flights", title: "항공" },
            { id: "day0", title: "0일차 (준비)" },
            { id: "inbox", title: "보관함" }
        ];

        requiredCols.forEach(col => {
            if (!columnsMap.has(col.id)) {
                columnsMap.set(col.id, new LiveObject({ id: col.id, title: col.title, cardIds: new LiveList([]) }));
            }
        });

        // 2. 컬럼 순서 복구
        if (columnOrder.length === 0) {
            requiredCols.forEach(col => columnOrder.push(col.id));
        }

        // 4. 나머지 샘플 카드 복구 (인박스가 비었을 경우만)
        const inbox = columnsMap.get("inbox");
        if (inbox && inbox.get("cardIds").length === 0) {
            const samples = [
                { id: "p1", text: "입국심사&필요사항", type: "travel", category: "preparation" },
                { id: "f1", text: "대한항공 KE467 (09:00)", type: "travel", category: "flight" },
                { id: "h1", text: "아미아나 리조트 (오션뷰)", type: "travel", category: "hotel" }
            ];
            samples.forEach(s => {
                if (!cardsMap.has(s.id)) {
                    cardsMap.set(s.id, new LiveObject(s));
                    inbox.get("cardIds").push(s.id);
                }
            });
        }
        addToast("기본 여행 데이터를 복구했습니다.", "info");
    }, []);

    const autoRestoreRef = useRef(autoRestore);
    autoRestoreRef.current = autoRestore;

    useEffect(() => {
        if (columns && columns.size > 0) {
            const requiredCols = ["destination-header", "destination-candidates", "flights", "day0", "inbox"];
            const missingCol = requiredCols.some(id => !(columns as any).get(id));
            if (missingCol) {
                autoRestoreRef.current();
            }
        }
    }, [columns]);

    return { cleanupFlightAndDays };
}
