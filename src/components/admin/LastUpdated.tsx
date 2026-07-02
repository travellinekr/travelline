'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { RotateCw } from 'lucide-react';

interface LastUpdatedProps {
    timestamp: number; // ms
}

export function LastUpdated({ timestamp }: LastUpdatedProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 5_000);
        return () => clearInterval(id);
    }, []);

    const secondsAgo = Math.max(0, Math.round((now - timestamp) / 1000));

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <button
            type="button"
            onClick={handleRefresh}
            disabled={isPending}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 disabled:opacity-50 transition-colors"
            title="새로고침"
        >
            <RotateCw className={`w-3.5 h-3.5 ${isPending ? 'animate-spin' : ''}`} />
            <span>{secondsAgo}초 전 갱신</span>
        </button>
    );
}
