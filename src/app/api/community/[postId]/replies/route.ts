import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '@/lib/admin/auth';
import { withAuthorName } from '@/lib/server/communityAuthor';

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

// GET /api/community/[postId]/replies — 답변 목록 (오래된순)
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const { postId } = await params;

    // inquiry(문의&요청) 는 비공개 게시판 — 답변에도 문의 내용이 담기므로 본문과 같은 기준으로 막는다.
    // (작성자 본인 또는 관리자만)
    const { data: post } = await admin
        .from('community_posts')
        .select('board_type, author_id')
        .eq('id', postId)
        .maybeSingle();
    if (post?.board_type === 'inquiry') {
        const user = await getAuthedUser(request, admin);
        if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
        if (post.author_id !== user.id && !isAdminEmail(user.email)) {
            return NextResponse.json({ error: '조회 권한이 없어요.' }, { status: 403 });
        }
    }

    const { data, error } = await admin
        .from('community_replies')
        .select('id, post_id, content, author_id, author_email, created_at, updated_at')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ replies: (data ?? []).map(withAuthorName) });
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
    const { data: post } = await admin.from('community_posts').select('id, board_type').eq('id', postId).maybeSingle();
    if (!post) return NextResponse.json({ error: '게시글을 찾을 수 없어요.' }, { status: 404 });
    // notice(해외안전정보) 는 운영 게시판 — 답변 기능 없음. 화면에서 폼을 감췄어도 API 로는 열려 있으므로 여기서 막는다.
    if (post.board_type === 'notice') {
        return NextResponse.json({ error: '해외안전정보에는 답변을 달 수 없어요.' }, { status: 403 });
    }

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
    return NextResponse.json({ reply: withAuthorName(data) });
}
