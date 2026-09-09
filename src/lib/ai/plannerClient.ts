'use client';

import { supabase } from '@/lib/supabaseClient';

// AI 플래너 라우트 호출부.
//
// 라우트가 로그인 필수라 세션 토큰을 실어 보내야 한다. 호출부가 네 군데(대화·생성·
// 도시추천·카드교체)라 각자 헤더를 붙이면 한 곳을 빠뜨렸을 때 그 기능만 조용히
// 401 이 된다. 여기 한 곳에 둔다.
//
// 반환값은 fetch 의 Response 그대로 — 호출부의 기존 에러 처리(res.ok / res.json)를
// 바꾸지 않기 위해서다.

export async function fetchAiPlanner(body: unknown): Promise<Response> {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;

    return fetch('/api/ai-planner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 토큰이 없으면 헤더를 빼고 보낸다 → 서버가 401 로 "로그인 후 이용" 안내.
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
    });
}
