import { useEffect } from 'react';
import { applyExploreCards, toastForApplyResult, type ExploreQueueCard } from '@/utils/applyExploreCards';

// /explore 페이지(스탠드얼론)에서 쌓인 카드 큐(localStorage `explore_queue_<roomId>`)를
// 룸 진입 시 보관함으로 자동 추가. 중복 카드는 스킵.
// 모달 오버레이 모드(룸 안에서 ExploreContent 렌더)는 localStorage 우회 → CollaborativeApp이
// applyExploreCards를 직접 호출. 이 hook은 스탠드얼론 진입 fallback 호환을 위해 유지.
export function useExploreQueue({
    roomId,
    cardsRef,
    handleCreateCard,
    addToast,
}: {
    roomId: string;
    cardsRef: React.MutableRefObject<any>;
    handleCreateCard: (data: any) => void;
    addToast: (msg: string, type?: 'info' | 'warning') => void;
}) {
    useEffect(() => {
        const queueKey = `explore_queue_${roomId}`;
        const raw = localStorage.getItem(queueKey);
        if (!raw) return;

        let queued: ExploreQueueCard[] = [];
        try { queued = JSON.parse(raw); } catch { return; }
        if (!queued.length) return;

        // 딜레이 후 처리 (Liveblocks 스토리지 준비 대기)
        const timer = setTimeout(() => {
            const result = applyExploreCards(queued, { cardsRef, handleCreateCard });
            toastForApplyResult(result, addToast);
            localStorage.removeItem(queueKey);
        }, 500);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);
}
