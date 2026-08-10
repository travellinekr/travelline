import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '@/lib/admin/auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const BOARD_TYPES = new Set(['notice', 'info', 'review', 'qna', 'inquiry']);

function getAdmin() {
    if (!supabaseUrl || !supabaseServiceRoleKey) return null;
    return createClient(supabaseUrl, supabaseServiceRoleKey);
}

// GET /api/community?type=info&country=일본&city=도쿄&page=1&limit=20
export async function GET(request: NextRequest) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const country = url.searchParams.get('country');
    const city = url.searchParams.get('city');
    const q = (url.searchParams.get('q') || '').trim();
    const page = Math.max(1, Number(url.searchParams.get('page') || '1'));
    const limit = Math.min(50, Math.max(1, Number(url.searchParams.get('limit') || '20')));
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // 목록에는 content 제외 (본문은 상세에서만 로드) → 페이로드 대폭 축소
    // count: 'estimated' 로 별도 COUNT 쿼리 오버헤드 제거 (Load More 방식이라 근사치로 충분)
    let query = admin
        .from('community_posts')
        .select('id, post_number, board_type, country, city, title, author_id, author_email, view_count, reply_count, created_at, updated_at', { count: 'estimated' })
        .order('created_at', { ascending: false })
        .range(from, to);

    if (type && BOARD_TYPES.has(type)) query = query.eq('board_type', type);
    if (country) query = query.eq('country', country);
    if (city) query = query.eq('city', city);
    // 제목 검색 — ilike + % escape (사용자 입력에 %, _ 있어도 리터럴 매칭 되도록)
    if (q) {
        const escaped = q.replace(/[\\%_]/g, s => `\\${s}`);
        query = query.ilike('title', `%${escaped}%`);
    }

    // inquiry 는 비공개: 로그인 사용자 자신의 글만 조회 가능. 관리자는 전체 조회 가능(응대용).
    if (type === 'inquiry') {
        const auth = request.headers.get('Authorization') || '';
        const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
        if (!token) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
        const { data: { user }, error: userErr } = await admin.auth.getUser(token);
        if (userErr || !user) return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        if (!isAdminEmail(user.email)) {
            query = query.eq('author_id', user.id);
        }
    }

    const { data, error, count } = await query;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // stale-while-revalidate: 재진입 시 이전 응답 즉시 표시 + 백그라운드 갱신 (30초).
    // inquiry(비공개) 는 개인화 응답이라 private, 그 외는 캐시 공유 가능.
    const cacheHeader = type === 'inquiry'
        ? 'private, max-age=0, stale-while-revalidate=30'
        : 'public, max-age=0, stale-while-revalidate=30';

    return NextResponse.json(
        { posts: data ?? [], total: count ?? 0, page, limit },
        { headers: { 'Cache-Control': cacheHeader } }
    );
}

// POST /api/community { board_type, country?, city?, title, content }
export async function POST(request: NextRequest) {
    const admin = getAdmin();
    if (!admin) return NextResponse.json({ error: '환경 변수 미설정' }, { status: 500 });

    const auth = request.headers.get('Authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!token) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });

    const { data: { user }, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !user?.email) return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });

    const body = await request.json().catch(() => null);
    if (!body) return NextResponse.json({ error: '잘못된 요청 본문' }, { status: 400 });

    const { board_type, country, city, title, content } = body as {
        board_type?: string; country?: string; city?: string; title?: string; content?: string;
    };

    if (!board_type || !BOARD_TYPES.has(board_type)) {
        return NextResponse.json({ error: '게시판구분이 올바르지 않습니다.' }, { status: 400 });
    }
    if (!title?.trim() || !content?.trim()) {
        return NextResponse.json({ error: '제목과 내용을 입력해주세요.' }, { status: 400 });
    }
    if (board_type === 'notice' && !isAdminEmail(user.email)) {
        return NextResponse.json({ error: '해외안전정보는 관리자만 작성할 수 있어요.' }, { status: 403 });
    }

    const { data, error } = await admin
        .from('community_posts')
        .insert({
            board_type,
            country: country?.trim() || null,
            city: city?.trim() || null,
            title: title.trim().slice(0, 200),
            content: content.trim(),
            author_id: user.id,
            author_email: user.email,
        })
        .select('id, post_number, board_type, country, city, title, content, author_id, author_email, view_count, reply_count, created_at, updated_at')
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ post: data });
}
