'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';

// /api/admin/<endpoint> 를 사용자 세션 토큰으로 호출.
// 서버가 email 재검증하므로 이 훅은 UI 로딩 상태만 담당.
export function useAdminData<T>(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [reloadKey, setReloadKey] = useState(0);

    const reload = useCallback(() => setReloadKey(k => k + 1), []);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
        (async () => {
            try {
                const { data: session } = await supabase.auth.getSession();
                const token = session.session?.access_token;
                if (!token) {
                    if (!cancelled) setError('로그인이 필요합니다.');
                    return;
                }
                const res = await fetch(`/api/admin/${endpoint}`, {
                    headers: { Authorization: `Bearer ${token}` },
                    cache: 'no-store',
                });
                if (!res.ok) {
                    const body = await res.json().catch(() => ({}));
                    if (!cancelled) setError(body?.error || `HTTP ${res.status}`);
                    return;
                }
                const json = await res.json();
                if (!cancelled) setData(json);
            } catch (err: any) {
                if (!cancelled) setError(err?.message || '조회 실패');
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, [endpoint, reloadKey]);

    return { data, error, loading, reload };
}
