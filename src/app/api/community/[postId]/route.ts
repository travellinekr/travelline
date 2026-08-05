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

// GET /api/community/[postId] — 상세 + viewCount +1
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const { postId } = await params;

    const { data: post, error } = await admin
        .from('community_posts')
        .select('*')
        .eq('id', postId)
        .maybeSingle();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    if (!post) return NextResponse.json({ error: '게시글을 찾을 수 없어요.' }, { status: 404 });

    // inquiry(문의&요청) 는 작성자 본인 또는 관리자만 조회 가능
    if (post.board_type === 'inquiry') {
        const user = await getAuthedUser(request, admin);
        if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
        const isAuthor = post.author_id === user.id;
        const isAdmin = isAdminEmail(user.email);
        if (!isAuthor && !isAdmin) {
            return NextResponse.json({ error: '조회 권한이 없어요.' }, { status: 403 });
        }
    }

    // 조회수 증가 (실패해도 조회 자체는 성공)
    admin.from('community_posts')
        .update({ view_count: (post.view_count ?? 0) + 1 })
        .eq('id', postId)
        .then(() => {});

    return NextResponse.json({ post });
}

// PATCH /api/community/[postId] — 수정. 작성자만
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const user = await getAuthedUser(request, admin);
    if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { postId } = await params;
    const { data: existing } = await admin
        .from('community_posts')
        .select('author_id, board_type')
        .eq('id', postId)
        .maybeSingle();

    if (!existing) return NextResponse.json({ error: '게시글을 찾을 수 없어요.' }, { status: 404 });
    if (existing.author_id !== user.id) {
        return NextResponse.json({ error: '작성자만 수정할 수 있어요.' }, { status: 403 });
    }

    const body = await request.json().catch(() => null);
    if (!body) return NextResponse.json({ error: '잘못된 요청 본문' }, { status: 400 });

    const { country, city, title, content } = body as {
        country?: string; city?: string; title?: string; content?: string;
    };

    const patch: Record<string, unknown> = {};
    if (typeof country !== 'undefined') patch.country = country?.trim() || null;
    if (typeof city !== 'undefined') patch.city = city?.trim() || null;
    if (typeof title !== 'undefined') {
        if (!title.trim()) return NextResponse.json({ error: '제목을 입력해주세요.' }, { status: 400 });
        patch.title = title.trim().slice(0, 200);
    }
    if (typeof content !== 'undefined') {
        if (!content.trim()) return NextResponse.json({ error: '내용을 입력해주세요.' }, { status: 400 });
        patch.content = content.trim();
    }

    const { data, error } = await admin
        .from('community_posts')
        .update(patch)
        .eq('id', postId)
        .select('*')
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ post: data });
}

// DELETE /api/community/[postId] — 작성자 또는 관리자
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const user = await getAuthedUser(request, admin);
    if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { postId } = await params;
    const { data: existing } = await admin
        .from('community_posts')
        .select('author_id')
        .eq('id', postId)
        .maybeSingle();

    if (!existing) return NextResponse.json({ error: '게시글을 찾을 수 없어요.' }, { status: 404 });

    const isAuthor = existing.author_id === user.id;
    const isAdmin = isAdminEmail(user.email);
    if (!isAuthor && !isAdmin) {
        return NextResponse.json({ error: '삭제 권한이 없어요.' }, { status: 403 });
    }

    const { error } = await admin.from('community_posts').delete().eq('id', postId);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}
