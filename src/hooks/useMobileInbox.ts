import { useEffect, useRef, useState } from 'react';

export type InboxStateType = 'closed' | 'open';

export function useMobileInbox() {
    const [inboxState, setInboxState] = useState<InboxStateType>('closed');
    const prevInboxStateRef = useRef<InboxStateType>('closed');
    const [isInboxLocked, setIsInboxLocked] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    // 인박스 닫힘 시 잠금 자동 해제
    useEffect(() => {
        if (inboxState === 'closed') setIsInboxLocked(false);
    }, [inboxState]);

    // 모바일 키보드 감지
    useEffect(() => {
        if (typeof window === 'undefined' || !window.visualViewport) return;

        const handleViewportChange = () => {
            const viewport = window.visualViewport;
            if (!viewport) return;

            const viewportHeight = viewport.height;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;

            // 높이 차이가 150px 이상이면 키보드가 올라온 것으로 판단
            setIsKeyboardVisible(heightDiff > 150);
        };

        window.visualViewport.addEventListener('resize', handleViewportChange);
        window.visualViewport.addEventListener('scroll', handleViewportChange);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleViewportChange);
            window.visualViewport?.removeEventListener('scroll', handleViewportChange);
        };
    }, []);

    const toggleInbox = () => {
        setInboxState(prev => prev === 'closed' ? 'open' : 'closed');
    };

    const getInboxSlideClass = () => {
        return inboxState === 'closed' ? 'translate-x-full' : 'translate-x-0';
    };

    return {
        inboxState,
        setInboxState,
        prevInboxStateRef,
        isInboxLocked,
        setIsInboxLocked,
        isKeyboardVisible,
        toggleInbox,
        getInboxSlideClass,
    };
}
