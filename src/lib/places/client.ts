'use client';

import { supabase } from '@/lib/supabaseClient';

// 구글 Places 프록시(/api/places/nearby·search) 호출부.
//
// 두 라우트는 우리 키로 구글에 과금되므로 로그인 필수다. 세션 토큰을 실어야 한다.
// 호출부가 네 모달(숙소·맛집·쇼핑·투어스파)에 걸쳐 아홉 군데라, 각자 헤더를 붙이면
// 한 곳을 빠뜨렸을 때 그 모달의 그 버튼만 조용히 401 이 된다. 여기 한 곳에 둔다.
//
// 사진 라우트(places/photo·photos)는 손님도 봐야 해서 열려 있다 — 여기를 쓰지 않는다.
// 특히 photo 는 <img src> 로 렌더돼 애초에 헤더를 붙일 수 없다.
//
// 반환값은 fetch 의 Response 그대로 — 호출부의 기존 처리(response.json())를 바꾸지 않는다.

export async function fetchPlaces(url: string): Promise<Response> {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;

    return fetch(url, {
        // 토큰이 없으면 헤더를 빼고 보낸다 → 서버가 401 로 "로그인 후 이용" 안내.
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
}
