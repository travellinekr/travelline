// 드래그 종료 시 source/target 조합과 draggedCard 카테고리가 유효한지 검증.
//
// 반환값:
// - { ok: true }: 진행 가능
// - { ok: false, reason: '...' }: 거절 + 사용자에게 토스트 표시
// - { ok: false, silent: true }: 거절 + 토스트 없음 (예: self-drop, 부적절한 destination 이동)
export type DragValidationResult =
    | { ok: true }
    | { ok: false; reason: string }
    | { ok: false; silent: true };

export function validateDragDrop({
    draggedCard,
    targetColumnId,
    sourceColumnId,
    flightInfo,
}: {
    draggedCard: any;
    targetColumnId: string;
    sourceColumnId: string | null;
    flightInfo: any;
}): DragValidationResult {
    // ── 최종 여행지(destination-header) 제약 ─────────────────────────
    if (targetColumnId === 'destination-header') {
        // 항공편이 이미 등록된 경우 여행지 변경 불가
        if (flightInfo) {
            return { ok: false, reason: '항공편이 등록된 경우 여행지를 변경할 수 없습니다.' };
        }
        if (draggedCard?.category !== 'destination') {
            return { ok: false, reason: '여행지 카드만 넣을 수 있습니다.' };
        }
        // self-drop (같은 위치에 드롭)
        if (sourceColumnId === 'destination-header') {
            return { ok: false, silent: true };
        }
    }

    // ── 0일차(준비) ─────────────────────────────────────────────────
    if (targetColumnId === 'day0' && draggedCard?.category !== 'preparation') {
        return { ok: false, reason: '여행준비에는 여행준비 카드만 들어갑니다.' };
    }

    // ── 항공 섹션 ───────────────────────────────────────────────────
    if (targetColumnId === 'flights' && draggedCard?.category !== 'flight') {
        return { ok: false, reason: '항공에는 항공 카드만 들어걡니다.' };
    }

    // ── 여행지 후보 ─────────────────────────────────────────────────
    if (targetColumnId === 'destination-candidates' && draggedCard?.category !== 'destination') {
        return { ok: false, reason: '여행지 후보에는 여행지 카드만 들어갑니다.' };
    }

    // ── 도시(destination) 카드 이동 가능 영역 제한 ──────────────────
    if (
        draggedCard?.category === 'destination' &&
        targetColumnId !== 'destination-candidates' &&
        targetColumnId !== 'destination-header' &&
        targetColumnId !== 'inbox'
    ) {
        return { ok: false, silent: true };
    }

    // ── 항공 카드는 원래 일차에만 머물러야 함 ───────────────────────
    if (draggedCard?.category === 'flight') {
        const isDayColumn = sourceColumnId && /^day[1-9]\d*$/.test(sourceColumnId);
        if (isDayColumn && targetColumnId !== sourceColumnId) {
            return { ok: false, reason: '항공카드는 다른 위치로 이동할 수 없습니다.' };
        }
    }

    return { ok: true };
}
