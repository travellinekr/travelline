import { useEffect, useRef } from 'react';

// 모바일 플로팅 버튼(가짜 마우스 커서) 드래그 처리.
// - 마운트 시 우측 하단 근처로 초기 위치 세팅
// - touch 이벤트로 위치 이동 + Liveblocks 커서 동기화
//
// 인박스가 열려있을 때는 좌표를 보정 (모바일 인박스 슬라이드로 화면이 분할되므로
// 우측 절반에서의 상대 위치를 컨테이너 우측 절반에 매핑)
export function useFloatingButton({
    containerRef,
    inboxState,
    throttledUpdateMyPresence,
    setIsMobileDragging,
    setMobileCursorPos,
    onTap,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
    inboxState: 'closed' | 'open';
    throttledUpdateMyPresence: (cursor: { x: number; y: number }) => void;
    setIsMobileDragging: (v: boolean) => void;
    setMobileCursorPos: (pos: { x: number; y: number }) => void;
    // 드래그가 아닌 "탭"(짧게 터치했다 뗌)일 때 호출 — AI 팝업 오픈용
    onTap?: () => void;
}) {
    const floatingBtnRef = useRef<HTMLDivElement>(null);
    const cachedContainerRect = useRef<DOMRect | null>(null);
    // 탭/드래그 구분용: 터치 시작 지점 + 이동 임계 초과 여부
    const touchStartPos = useRef<{ x: number; y: number } | null>(null);
    const movedBeyondThreshold = useRef(false);
    const TAP_MOVE_THRESHOLD = 8; // px

    // 마운트 시 초기 위치 세팅
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const containerWidth = Math.min(window.innerWidth, 1152);
            const initX = containerWidth - 80;
            const initY = window.innerHeight - 200;

            setMobileCursorPos({ x: initX, y: initY });

            if (floatingBtnRef.current) {
                floatingBtnRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0)`;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(true);
        // 탭 판정 초기화
        const t = e.touches[0];
        touchStartPos.current = { x: t.clientX, y: t.clientY };
        movedBeyondThreshold.current = false;
        if (containerRef.current) {
            cachedContainerRect.current = containerRef.current.getBoundingClientRect();
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.stopPropagation();

        const touch = e.touches[0];
        // 시작 지점에서 임계 이상 벗어나면 드래그로 간주(탭 아님)
        if (touchStartPos.current) {
            const dx = touch.clientX - touchStartPos.current.x;
            const dy = touch.clientY - touchStartPos.current.y;
            if (Math.hypot(dx, dy) > TAP_MOVE_THRESHOLD) movedBeyondThreshold.current = true;
        }
        const newX = touch.clientX - 28;
        const newY = touch.clientY - 28;

        if (floatingBtnRef.current) {
            floatingBtnRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        }

        if (containerRef.current) {
            // Use cached rect if available, otherwise fallback
            const rect = cachedContainerRect.current || containerRef.current.getBoundingClientRect();
            const containerWidth = rect.width;
            const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
            const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

            let relativeX = touch.clientX - rect.left;
            const relativeY = touch.clientY - rect.top;

            const isMobile = windowWidth < 768;
            const inboxTopThreshold = inboxState === 'open' ? 0 : windowHeight;
            const isOverMobileInbox = isMobile && inboxState === 'open' && touch.clientY > inboxTopThreshold;

            if (isOverMobileInbox) {
                const normalizedX = touch.clientX / windowWidth;
                relativeX = (containerWidth / 2) + (normalizedX * (containerWidth / 2));
            }

            throttledUpdateMyPresence({ x: Math.round(relativeX), y: Math.round(relativeY) });
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(false);
        cachedContainerRect.current = null;

        if (floatingBtnRef.current) {
            const transform = floatingBtnRef.current.style.transform;
            const match = transform.match(/translate3d\(([^p]+)px,\s*([^p]+)px/);
            if (match) {
                setMobileCursorPos({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
            }
        }

        // 이동이 거의 없었으면 탭 → AI 팝업 오픈 (드래그면 무시)
        if (!movedBeyondThreshold.current) {
            onTap?.();
        }
        touchStartPos.current = null;
        movedBeyondThreshold.current = false;
    };

    return {
        floatingBtnRef,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
}
