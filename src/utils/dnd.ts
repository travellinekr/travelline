// 드래그한 카드의 source column 찾기.
// Liveblocks columns LiveMap을 순회하며 cardIds에서 활성 카드 ID를 검색.
// picker/sample 카드는 source column이 없으므로 호출 측에서 별도 처리 필요.
export function findSourceColumn(
    activeId: string,
    columns: any
): { sourceColumnId: string | null; oldIndex: number } {
    let sourceColumnId: string | null = null;
    let oldIndex = -1;
    for (const col of columns.values()) {
        const list = col.cardIds;
        const cardIdsArray = Array.isArray(list) ? list : (list?.toArray ? list.toArray() : []);
        const idx = cardIdsArray.indexOf(activeId);
        if (idx !== -1) {
            sourceColumnId = col.id;
            oldIndex = idx;
            break;
        }
    }
    return { sourceColumnId, oldIndex };
}

// 모바일 우측 삭제존 진입 여부.
// snapCenterToCursor로 오버레이 중심이 포인터에 위치한다고 가정 →
// 오버레이 우측 끝 = pointerX + overlayWidth/2.
// 오버레이의 40% 이상이 화면 우측 밖으로 벗어나면 true.
// 오버레이 폭은 화면 폭 - 32px (좌우 16px 패딩 가정).
export function isInRightDeleteZone(pointerX: number, viewportWidth: number): boolean {
    const overlayWidth = viewportWidth - 32;
    const overlayRight = pointerX + overlayWidth / 2;
    return (overlayRight - viewportWidth) > overlayWidth * 0.4;
}
