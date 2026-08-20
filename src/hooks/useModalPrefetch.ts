import { useEffect } from "react";

// 도시간 항공편/이동 모달 청크 idle prefetch — 첫 클릭 지연 해소.
// 진입 후 브라우저가 idle 상태가 되면 두 모달 청크를 백그라운드 로드.
export function useModalPrefetch() {
    useEffect(() => {
        const win = window as any;
        const idle = (cb: () => void) =>
            win.requestIdleCallback?.(cb, { timeout: 3000 }) ?? setTimeout(cb, 1500);
        const handle = idle(() => {
            import("@/components/board/IntercityFlightModal");
            import("@/components/board/IntercityMoveModal");
            // 경비 모달도 dynamic 이라 버튼을 누른 뒤에야 청크를 받아온다.
            // 유휴 시간에 미리 당겨두면 클릭 → 표시 사이의 대기가 사라진다.
            import("@/components/board/ExpenseModal");
            import("@/components/board/CardExpenseModal");
        });
        return () => {
            if (typeof handle === 'number' && win.cancelIdleCallback) win.cancelIdleCallback(handle);
            else clearTimeout(handle as any);
        };
    }, []);
}
