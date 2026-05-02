'use client';

import { useSelf } from '@/liveblocks.config';

type Role = 'owner' | 'editor' | 'viewer' | null;

interface UseRoleResult {
    role: Role;
    loading: boolean;
    canEdit: boolean;
    isOwner: boolean;
    isViewer: boolean;
}

// liveblocks-auth가 prepareSession.userInfo.role로 권한을 내려주므로
// 별도 Supabase 쿼리 없이 useSelf에서 즉시 읽음. ClientSideSuspense 안에서
// 호출되므로 항상 동기적으로 값이 존재 → loading 항상 false.
//
// projectId 인자는 기존 시그니처 호환용. 실제로는 RoomProvider id로 결정됨.
export function useRole(_projectId: string | null): UseRoleResult {
    const self = useSelf();
    const role = (self?.info?.role as Role) ?? 'viewer';

    return {
        role,
        loading: false,
        canEdit: role === 'owner' || role === 'editor',
        isOwner: role === 'owner',
        isViewer: role === 'viewer',
    };
}
