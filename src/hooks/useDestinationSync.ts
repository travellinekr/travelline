import { useEffect, useRef } from 'react';

// 여행지 카드(destination-header)가 사라진 순간을 감지해 콜백을 한 번 호출.
// 호출 측은 콜백에서 cleanupFlightAndDays + 입국 카드 city 초기화 등 처리.
export function useDestinationSync({
    canEdit,
    roleLoading,
    destinationCard,
    onDestinationRemoved,
}: {
    canEdit: boolean;
    roleLoading: boolean;
    destinationCard: any;
    onDestinationRemoved: () => void;
}) {
    const prevDestinationCardId = useRef<string | null>(null);

    useEffect(() => {
        const currentId = destinationCard?.id || null;
        const prevId = prevDestinationCardId.current;

        // Detect removal: had a destination before, now it's gone
        if (prevId && !currentId && canEdit && !roleLoading) {
            onDestinationRemoved();
        }

        // Update ref for next render
        prevDestinationCardId.current = currentId;
    }, [destinationCard, onDestinationRemoved, canEdit, roleLoading]);
}
