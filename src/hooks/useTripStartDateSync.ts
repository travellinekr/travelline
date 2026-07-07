import { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';

/**
 * Liveblocks flightInfo.outbound.date 변화를 Supabase projects.trip_start_date 로 동기화.
 * Phase 3 D-1 크론이 이 컬럼을 대상 선정 기준으로 사용.
 *
 * - canEdit=true 인 유저만 발송 (viewer 는 skip)
 * - 값이 바뀌었을 때만 POST (같은 값 재전송 방지)
 * - 실패는 조용히 무시 (사용자 UX 무영향)
 */
export function useTripStartDateSync({
    roomId,
    canEdit,
    roleLoading,
    outboundDate,
}: {
    roomId: string;
    canEdit: boolean;
    roleLoading: boolean;
    outboundDate: string | null | undefined;
}) {
    const prevRef = useRef<string | null | undefined>(undefined);

    useEffect(() => {
        if (roleLoading || !canEdit) return;

        const normalized: string | null = outboundDate ? outboundDate.slice(0, 10) : null;
        if (normalized === prevRef.current) return;
        prevRef.current = normalized;

        (async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                const token = session?.access_token;
                if (!token) return;
                await fetch(`/api/projects/${roomId}/trip-start-date`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ date: normalized }),
                });
            } catch (e) {
                console.warn('[trip-start-date sync] 실패 (무시):', e);
            }
        })();
    }, [roomId, canEdit, roleLoading, outboundDate]);
}
