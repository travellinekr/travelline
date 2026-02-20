'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from './useAuth';

type Role = 'owner' | 'editor' | 'viewer' | null;

interface UseRoleResult {
    role: Role;
    loading: boolean;
    canEdit: boolean;   // owner 또는 editor
    isOwner: boolean;
    isViewer: boolean;
}

export function useRole(projectId: string | null): UseRoleResult {
    const { user, loading: authLoading } = useAuth();
    const [role, setRole] = useState<Role>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authLoading) return;

        // 로그인 안 되어 있으면 viewer 처리
        if (!user || !projectId) {
            setRole('viewer');
            setLoading(false);
            return;
        }

        const fetchRole = async () => {
            setLoading(true);
            const { data } = await supabase
                .from('project_members')
                .select('role')
                .eq('project_id', projectId)
                .eq('user_id', user.id)
                .single();

            if (data?.role) {
                // 이미 등록된 멤버
                setRole(data.role as Role);
            } else {
                // 미등록 사용자 → viewer로 자동 등록 (공유 링크 진입)
                try {
                    await fetch(`/api/projects/${projectId}/join`, { method: 'POST' });
                } catch {
                    // 등록 실패해도 viewer로 처리 (보드 조회는 허용)
                }
                setRole('viewer');
            }
            setLoading(false);
        };

        fetchRole();
    }, [user, authLoading, projectId]);

    return {
        role,
        loading,
        canEdit: role === 'owner' || role === 'editor',
        isOwner: role === 'owner',
        isViewer: role === 'viewer',
    };
}
