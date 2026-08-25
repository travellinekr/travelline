'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { isClientAdmin } from '@/lib/admin/clientAdmin';

// 관리자 이메일 화이트리스트 (환경변수는 서버 전용이라 클라이언트에는 노출되지 않음).
// 이 컴포넌트는 UI 접근 자체를 가리는 1차 필터로만 동작 — 실제 데이터 인증은 /api/admin/* 서버 쪽에서 담당.
// (즉, 이 상수를 우회해도 서버가 email 재검증하므로 데이터 유출 없음)
// 관리자 목록은 clientAdmin 한 곳에서 관리 (서버는 ADMIN_EMAILS 로 재검증)

interface AdminGuardProps {
    children: ReactNode;
}

export function AdminGuard({ children }: AdminGuardProps) {
    const router = useRouter();
    const [state, setState] = useState<'loading' | 'ok' | 'denied'>('loading');

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const { data } = await supabase.auth.getSession();
            if (cancelled) return;
            const email = data.session?.user?.email?.toLowerCase() ?? null;
            if (!email) {
                router.replace('/login');
                setState('denied');
                return;
            }
            if (!isClientAdmin(email)) {
                router.replace('/');
                setState('denied');
                return;
            }
            setState('ok');
        })();
        return () => { cancelled = true; };
    }, [router]);

    if (state === 'loading') {
        return (
            <div className="min-h-dvh flex items-center justify-center bg-slate-50">
                <div className="text-sm text-slate-500">확인 중...</div>
            </div>
        );
    }
    if (state === 'denied') return null;
    return <>{children}</>;
}
