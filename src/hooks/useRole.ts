'use client';

import { useSelf } from '@/liveblocks.config';

type Role = 'owner' | 'editor' | 'viewer' | null;

interface UseRoleResult {
    role: Role;
    loading: boolean;
    canEdit: boolean;
    isOwner: boolean;
    isViewer: boolean;
    /** project_members 에 등록된 참여자인지. 손님(비로그인·공유링크 방문자)이면 false. */
    isMember: boolean;
}

// liveblocks-auth가 prepareSession.userInfo.role로 권한을 내려주므로
// 별도 Supabase 쿼리 없이 useSelf에서 즉시 읽음. ClientSideSuspense 안에서
// 호출되므로 항상 동기적으로 값이 존재 → loading 항상 false.
//
// projectId 인자는 기존 시그니처 호환용. 실제로는 RoomProvider id로 결정됨.
export function useRole(_projectId: string | null): UseRoleResult {
    const self = useSelf();
    const role = (self?.info?.role as Role) ?? 'viewer';
    // isGuest 가 아직 안 내려온 토큰(갱신 전)에서는 undefined → 손님으로 간주하지 않고
    // 기존 동작(멤버)으로 둔다. 경비처럼 멤버 전용 기능은 이 값이 명시적으로 true 일 때만 막는다.
    const isGuest = self?.info?.isGuest === true;

    return {
        role,
        loading: false,
        canEdit: role === 'owner' || role === 'editor',
        isOwner: role === 'owner',
        isViewer: role === 'viewer',
        isMember: !isGuest,
    };
}
