'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelf, useUpdateMyPresence } from '@/liveblocks.config';
import { supabase } from '@/lib/supabaseClient';

// 이 보드에서 쓰는 내 별칭.
//
// 저장은 project_members.display_name(보드마다 따로), 표시는 presence.
//
// 왜 presence 를 화면의 기준으로 삼나:
//   1) userInfo.name 은 Liveblocks 세션 토큰에 박혀 나간다. 별칭을 바꿔도 토큰이
//      갱신될 때까지(최대 1시간) 남들 화면은 옛 이름 그대로다.
//   2) 이 훅은 뱃지(UserAvatarMenu)와 수정 팝업(NicknameEditModal)에서 각각 호출된다.
//      이름을 훅 안의 useState 에 두면 상태가 호출 수만큼 생겨, 팝업에서 저장해도
//      뱃지는 옛 이름을 계속 보여준다. presence 는 클라이언트당 한 벌이라
//      어디서 바꾸든 모든 호출부가 같은 값을 본다.
//
// 초기값은 별도로 읽지 않는다. liveblocks-auth 가 이미 display_name 을 우선해
// userInfo.name 으로 내려주므로, 그 값을 그대로 presence 에 실어 보내면 된다.
// (DB 를 한 번 더 읽으면 보드 진입이 그만큼 늦어진다)

export const MAX_DISPLAY_NAME = 20;

export function useMemberDisplayName(projectId: string) {
    const authName = useSelf((me) => me.info?.name) ?? '';
    const presenceName = useSelf(
        (me) => (me.presence as any)?.displayName as string | null | undefined,
    );
    const updateMyPresence = useUpdateMyPresence();
    const [saving, setSaving] = useState(false);

    // 이 훅은 뱃지와 수정 팝업에서 따로 호출되고, 팝업은 열 때마다 새로 마운트된다.
    // 즉 아래 seed 효과는 한 클라이언트에서 여러 번 실행된다.
    // 판단 기준을 "이 인스턴스가 처음인가"로 두면 팝업을 다시 열 때마다 저장해 둔
    // 별칭 위에 계정 이름을 덮어쓴다. 기준은 "presence 에 값이 있는가"여야 한다.
    const presenceNameRef = useRef(presenceName);
    presenceNameRef.current = presenceName;

    // 토큰에서 온 이름을 presence 에 올린다 — 비어 있을 때만.
    // 남들은 presence 를 먼저 보므로, 이걸 안 올리면 접속 직후 이름이 비어 보인다.
    useEffect(() => {
        if (!authName) return;
        if ((presenceNameRef.current ?? '').trim()) return; // 이미 있는 값은 손대지 않는다
        updateMyPresence({ displayName: authName });
    }, [authName, updateMyPresence]);

    const name = (presenceName ?? '').trim() || authName;

    /**
     * 별칭 저장. 빈 문자열이면 계정 이름으로 되돌린다(서버가 NULL 로 저장).
     *
     * 낙관적으로 처리한다 — 서버 왕복(토큰 검증 + update)이 수백 ms 걸리는데
     * 그동안 화면을 붙잡아 두면 "저장이 느리다" 로 읽힌다. 화면은 즉시 바꾸고,
     * 실패했을 때만 이전 값으로 되돌린 뒤 오류를 던진다.
     */
    const save = useCallback(async (next: string): Promise<string> => {
        const trimmed = next.trim();
        if (trimmed.length > MAX_DISPLAY_NAME) {
            throw new Error(`별칭은 ${MAX_DISPLAY_NAME}자까지 쓸 수 있어요.`);
        }

        const previous = (presenceName ?? '').trim() || authName;
        const optimistic = trimmed || authName;

        updateMyPresence({ displayName: optimistic });
        setSaving(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const token = session?.access_token;
            if (!token) throw new Error('로그인이 필요해요.');

            const res = await fetch(`/api/projects/${projectId}/members/me`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ display_name: trimmed }),
            });
            const body = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(body?.error || '별칭을 저장하지 못했어요.');

            // 비웠으면 서버가 NULL 을 돌려준다 → 계정 이름(토큰의 값)으로 되돌아간다.
            const saved: string = (body?.display_name ?? '').trim() || authName;
            if (saved !== optimistic) updateMyPresence({ displayName: saved });
            return saved;
        } catch (err) {
            // 저장이 안 됐으므로 화면도 되돌린다. 새로고침하면 사라질 이름을 남겨두면 안 된다.
            updateMyPresence({ displayName: previous });
            throw err;
        } finally {
            setSaving(false);
        }
    }, [projectId, authName, presenceName, updateMyPresence]);

    return { name, save, saving };
}
