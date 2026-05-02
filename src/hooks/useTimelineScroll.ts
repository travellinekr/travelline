import { useEffect, useRef, useState, useCallback } from 'react';

export function useTimelineScroll({ flightInfo }: { flightInfo: any }) {
    const [activeDay, setActiveDay] = useState('day1');
    const timelineScrollRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    const autoScrolledRef = useRef(false);

    const scrollToDay = useCallback((dayId: string) => {
        setActiveDay(dayId);
        const element = document.getElementById(`${dayId}-section`);
        const container = timelineScrollRef.current;
        if (element && container) {
            const containerTop = container.getBoundingClientRect().top;
            const elementTop = element.getBoundingClientRect().top;
            const offset = elementTop - containerTop + container.scrollTop - 16;
            container.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
        }
    }, []);

    // 여행 중 현재 일차로 자동 스크롤 (최초 1회)
    useEffect(() => {
        if (autoScrolledRef.current || !flightInfo) return;

        const outboundDate = (flightInfo as any)?.outbound?.date;
        if (!outboundDate) return;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const departure = new Date(outboundDate);
        departure.setHours(0, 0, 0, 0);

        const diffDays = Math.round((today.getTime() - departure.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return; // 아직 출발 전

        const dayNumber = diffDays + 1;
        const dayId = `day${dayNumber}`;

        autoScrolledRef.current = true;

        // 화면이 다 그려진 후 사이드바 클릭과 동일하게 실행 (double RAF = paint 이후 보장)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToDay(dayId);
            });
        });
    }, [flightInfo]); // eslint-disable-line react-hooks/exhaustive-deps

    return {
        activeDay,
        setActiveDay,
        timelineScrollRef,
        autoScrollRef,
        scrollToDay,
    };
}
