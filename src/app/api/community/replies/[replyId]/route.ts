import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '@/lib/admin/auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getAdmin() {
    if (!supabaseUrl || !supabaseServiceRoleKey) return null;
    return createClient(supabaseUrl, supabaseServiceRoleKey);
}

async function getAuthedUser(request: NextRequest, admin: any) {
    const auth = request.headers.get('Authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!token) return null;
    const { data: { user } } = await admin.auth.getUser(token);
    return user ?? null;
}

// PATCH /api/community/replies/[replyId] { content }
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ replyId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const user = await getAuthedUser(request, admin);
    if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { replyId } = await params;
    const { data: existing } = await admin
        .from('community_replies')
        .select('author_id')
        .eq('id', replyId)
        .maybeSingle();

    if (!existing) return NextResponse.json({ error: '답변을 찾을 수 없어요.' }, { status: 404 });
    if (existing.author_id !== user.id) {
        return NextResponse.json({ error: '작성자만 수정할 수 있어요.' }, { status: 403 });
    }

    const body = await request.json().catch(() => null);
    const content = body?.content?.toString().trim();
    if (!content) return NextResponse.json({ error: '내용을 입력해주세요.' }, { status: 400 });

    const { data, error } = await admin
        .from('community_replies')
        .update({ content })
        .eq('id', replyId)
        .select('id, post_id, content, author_id, author_email, created_at, updated_at')
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ reply: data });
}

// DELETE /api/community/replies/[replyId] — 작성자 또는 관리자
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ replyId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const user = await getAuthedUser(request, admin);
    if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { replyId } = await params;
    const { data: existing } = await admin
        .from('community_replies')
        .select('author_id')
        .eq('id', replyId)
        .maybeSingle();

    if (!existing) return NextResponse.json({ error: '답변을 찾을 수 없어요.' }, { status: 404 });

    const isAuthor = existing.author_id === user.id;
    const isAdmin = isAdminEmail(user.email);
    if (!isAuthor && !isAdmin) {
        return NextResponse.json({ error: '삭제 권한이 없어요.' }, { status: 403 });
    }

    const { error } = await admin.from('community_replies').delete().eq('id', replyId);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}
