import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getAdmin() {
    if (!supabaseUrl || !supabaseServiceRoleKey) return null;
    return createClient(supabaseUrl, supabaseServiceRoleKey);
}

// GET /api/community/[postId]/replies — 답변 목록 (오래된순)
export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const { postId } = await params;
    const { data, error } = await admin
        .from('community_replies')
        .select('id, post_id, content, author_id, author_email, created_at, updated_at')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ replies: data ?? [] });
}

// POST /api/community/[postId]/replies { content }
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const auth = request.headers.get('Authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!token) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { data: { user }, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !user?.email) return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });

    const { postId } = await params;
    const body = await request.json().catch(() => null);
    const content = body?.content?.toString().trim();
    if (!content) return NextResponse.json({ error: '답변 내용을 입력해주세요.' }, { status: 400 });

    // 게시글 존재 확인
    const { data: post } = await admin.from('community_posts').select('id').eq('id', postId).maybeSingle();
    if (!post) return NextResponse.json({ error: '게시글을 찾을 수 없어요.' }, { status: 404 });

    const { data, error } = await admin
        .from('community_replies')
        .insert({
            post_id: postId,
            content,
            author_id: user.id,
            author_email: user.email,
        })
        .select('id, post_id, content, author_id, author_email, created_at, updated_at')
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ reply: data });
}
