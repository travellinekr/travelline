import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { deleteAccountServerside } from '@/lib/account/deleteAccount';

// POST /api/account/delete
// 셀프 회원 탈퇴 엔드포인트. Bearer 토큰으로 요청자 확인 후 본인 계정만 삭제.
export async function POST(request: NextRequest) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const auth = request.headers.get('Authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!token) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const admin = createClient(url, key);
    const { data: { user }, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !user) return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });

    const result = await deleteAccountServerside(user.id);
    if (!result.ok) return NextResponse.json({ error: result.error ?? '삭제 실패' }, { status: 500 });

    return NextResponse.json({ success: true });
}
