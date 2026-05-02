import { useState } from 'react';
import { useSensors, useSensor, MouseSensor, TouchSensor, pointerWithin, closestCenter } from '@dnd-kit/core';
import { isInRightDeleteZone } from '@/utils/dnd';

// DnD 상태(activeDragItem 등) + dragStart/dragMove/customCollisionDetection 핸들러 통합.
// handleDragEnd는 비즈니스 로직이 너무 커서 호출 측에 남겨둠 (다음 PR에서 분해 예정).
// handleDragEnd가 setter를 사용해야 하므로 setActiveDragItem 등을 노출.
export function useDragDrop<TCategory extends string>({
    canEdit,
    columns,
    isInboxLocked,
    inboxState,
    setInboxState,
    prevInboxStateRef,
    setActiveCategory,
    timelineScrollRef,
    autoScrollRef,
}: {
    canEdit: boolean;
    columns: any;
    isInboxLocked: boolean;
    inboxState: 'closed' | 'open';
    setInboxState: (state: 'closed' | 'open') => void;
    prevInboxStateRef: React.MutableRefObject<'closed' | 'open'>;
    setActiveCategory: (cat: TCategory) => void;
    timelineScrollRef: React.RefObject<HTMLDivElement | null>;
    autoScrollRef: React.MutableRefObject<NodeJS.Timeout | null>;
}) {
    const [activeDragItem, setActiveDragItem] = useState<any>(null);
    const [activeDragSourceColumn, setActiveDragSourceColumn] = useState<string | null>(null);
    const [dragOverlayWidth, setDragOverlayWidth] = useState<number | undefined>(undefined);
    const [isDeleteZoneActive, setIsDeleteZoneActive] = useState(false);

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: canEdit ? { distance: 15 } : { distance: 999999 } }),
        useSensor(TouchSensor, { activationConstraint: canEdit ? { delay: 250, tolerance: 5 } : { distance: 999999 } })
    );

    const handleDragStart = (event: any) => {
        const card = event.active.data.current;
        setActiveDragItem(card);
        // 🚫 [항공카드 드래그 차단] flight 카드는 FlightSection에서만 관리되므로
        // 드래그 시 Inbox 카테고리를 flight으로 전환하지 않음
        if (card && card.category && card.category !== 'flight') setActiveCategory(card.category as TCategory);

        // 드래그 출발 컬럼 추적: 고스트 카드 variant 결정에 사용
        if (columns && card) {
            let foundCol: string | null = null;
            for (const col of (columns as any).values()) {
                const cardIds = Array.isArray(col.cardIds) ? col.cardIds : (col.cardIds?.toArray?.() ?? []);
                if (cardIds.includes(String(card.id))) {
                    foundCol = col.id;
                    break;
                }
            }
            setActiveDragSourceColumn(foundCol);
        } else {
            setActiveDragSourceColumn(null);
        }
        // 드래그 시작 시 원본 카드 폭 캡처 (DragOverlay 크기 동기화용)
        const initialWidth = event.active.rect.current?.initial?.width;
        if (initialWidth) {
            setDragOverlayWidth(initialWidth);
        } else if (typeof window !== 'undefined') {
            // 모바일 TouchSensor에서 rect 측정 실패 시 폴백: 뷰포트 기반 기본값
            setDragOverlayWidth(window.innerWidth < 768 ? window.innerWidth - 32 : 448);
        }

        // 📱 모바일: 드래그 시작 시 인박스 자동 숨김 → 타임라인 풀스크린
        // (인박스 잠금 상태면 유지하여 AddOrDeleteButton 등 인박스 내부 드롭존 사용 가능)
        if (typeof window !== 'undefined' && window.innerWidth < 768 && !isInboxLocked) {
            prevInboxStateRef.current = inboxState;
            setInboxState('closed');
        }
    };

    // 커스텀 충돌 감지: destination-header 중앙만 + 모바일 우측 삭제존 + 기본 fallback
    const customCollisionDetection = (args: any) => {
        // 🎯 PRIORITY 1: destination-header - 중앙 영역만 감지
        const pointerCoords = args.pointerCoordinates;
        if (pointerCoords) {
            const destHeaderContainer = args.droppableContainers.find(
                (container: any) => container.id === 'destination-header'
            );
            if (destHeaderContainer && destHeaderContainer.rect.current) {
                const rect = destHeaderContainer.rect.current;

                // 중앙 80% 영역만 드롭존으로 인정 (좌우 10%씩 여백)
                const margin = (rect.right - rect.left) * 0.1;
                const centerLeft = rect.left + margin;
                const centerRight = rect.right - margin;

                if (
                    pointerCoords.x >= centerLeft &&
                    pointerCoords.x <= centerRight &&
                    pointerCoords.y >= rect.top &&
                    pointerCoords.y <= rect.bottom
                ) {
                    return [{ id: destHeaderContainer.id, data: destHeaderContainer.data }];
                }
            }
        }

        // 📱 모바일: 드래그 오버레이의 40% 이상이 화면 우측 밖으로 벗어나면 right-delete-zone으로 처리
        if (typeof window !== 'undefined' && window.innerWidth < 768 && pointerCoords) {
            if (isInRightDeleteZone(pointerCoords.x, window.innerWidth)) {
                const deleteZone = args.droppableContainers.find(
                    (container: any) => container.id === 'right-delete-zone'
                );
                if (deleteZone) {
                    return [{ id: deleteZone.id, data: deleteZone.data }];
                }
            }
        }

        const pointerCollisions = pointerWithin(args);
        if (pointerCollisions.length > 0) {
            return pointerCollisions;
        }
        return closestCenter(args);
    };

    // 📱 모바일 드래그 중: 하단 자동 스크롤 + 우측 삭제존 시각 강조 동기화
    const handleDragMove = (event: any) => {
        if (typeof window === 'undefined' || window.innerWidth >= 768) return;

        const active = event.over?.id === 'right-delete-zone';
        setIsDeleteZoneActive(prev => (prev === active ? prev : active));

        if (!timelineScrollRef.current) return;

        const pointerY = event.activatorEvent?.clientY
            ?? (event.activatorEvent as TouchEvent)?.touches?.[0]?.clientY
            ?? 0;

        const windowHeight = window.innerHeight;
        const scrollThreshold = windowHeight - 80; // 하단 80px = 스크롤 트리거 존

        if (pointerY > scrollThreshold) {
            // 하단에 가까울수록 스크롤 빠르게
            const speed = Math.min(20, Math.round((pointerY - scrollThreshold) / 3) + 5);
            if (!autoScrollRef.current) {
                autoScrollRef.current = setInterval(() => {
                    timelineScrollRef.current?.scrollBy({ top: speed, behavior: 'instant' });
                }, 40);
            }
        } else {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
                autoScrollRef.current = null;
            }
        }
    };

    return {
        activeDragItem,
        setActiveDragItem,
        activeDragSourceColumn,
        setActiveDragSourceColumn,
        dragOverlayWidth,
        isDeleteZoneActive,
        setIsDeleteZoneActive,
        sensors,
        handleDragStart,
        handleDragMove,
        customCollisionDetection,
    };
}
