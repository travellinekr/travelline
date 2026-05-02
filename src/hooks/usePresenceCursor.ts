import { useMemo } from 'react';
import { throttle } from 'lodash';
import { useMyPresence } from '../liveblocks.config';

export function usePresenceCursor({
    containerRef,
    isMobileDragging,
    activeDragItem,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
    isMobileDragging: boolean;
    activeDragItem: any;
}) {
    const [myPresence, updateMyPresence] = useMyPresence();

    const throttledUpdateMyPresence = useMemo(
        () => throttle((cursor: { x: number, y: number }) => {
            updateMyPresence({ cursor });
        }, 50),
        [updateMyPresence]
    );

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isMobileDragging) return;
        e.preventDefault();

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            // 드래그 중일 때는 cursor 업데이트 스킵 (draggingCardId 보존)
            if (!activeDragItem) {
                throttledUpdateMyPresence({ x, y });
            }
        }
    };

    const handlePointerLeave = () => {
        if (isMobileDragging) return;
        updateMyPresence({ cursor: null });
    };

    return {
        updateMyPresence,
        throttledUpdateMyPresence,
        handlePointerMove,
        handlePointerLeave,
    };
}
