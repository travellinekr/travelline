import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { SharedPlanSnapshot } from '@/utils/sharedPlanSnapshot';

// POST: 클라가 만든 snapshot 을 받아 shared_plans 에 upsert.
//   - source_project_id 별 1행. 재발행 시 UPDATE 로 스냅샷 갱신.
// GET: 공유플랜 목록 조회. ?city=<engName> 으로 도시 필터 (대소문자/공백 무시).

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET(request: NextRequest) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    try {
        const { searchParams } = new URL(request.url);
        const cityFilter = searchParams.get('city');
        const limit = Math.min(Math.max(parseInt(searchParams.get('limit') || '20'), 1), 100);

        let query = supabaseAdmin
            .from('shared_plans')
            .select('id, title, city, duration_nights, duration_days, created_at, owner_id')
            .order('created_at', { ascending: false })
            .limit(limit);

        if (cityFilter) {
            query = query.ilike('city', `%${cityFilter.toLowerCase().trim()}%`);
        }

        const { data, error } = await query;
        if (error) {
            console.error('[shared-plans GET] query error:', error);
            return NextResponse.json({ error: '조회 중 오류가 발생했어요.' }, { status: 500 });
        }
        return NextResponse.json(
            { items: data ?? [] },
            { headers: { 'Cache-Control': 'no-store' } },
        );
    } catch (err) {
        console.error('[shared-plans GET] 오류:', err);
        return NextResponse.json({ items: [] }, { status: 500 });
    }
}

interface PublishBody {
    projectId: string;
    title: string;
    city: string;
    durationNights: number;
    durationDays: number;
    snapshot: SharedPlanSnapshot;
}

export async function POST(request: NextRequest) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    try {
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
        }
        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) {
            return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        }

        const body = (await request.json()) as PublishBody;
        const { projectId, title, city, durationNights, durationDays, snapshot } = body;

        if (!projectId || !title || !city || !snapshot) {
            return NextResponse.json({ error: '필수 정보가 누락됐어요.' }, { status: 400 });
        }
        if (snapshot.schemaVersion !== 1) {
            return NextResponse.json({ error: '지원하지 않는 스냅샷 형식이에요.' }, { status: 400 });
        }
        if (!snapshot.destination || !Array.isArray(snapshot.days)) {
            return NextResponse.json({ error: '스냅샷 구조가 올바르지 않아요.' }, { status: 400 });
        }

        // 권한 — owner/editor 만 발행 가능
        const { data: member } = await supabaseAdmin
            .from('project_members')
            .select('role')
            .eq('project_id', projectId)
            .eq('user_id', user.id)
            .single();
        const isOwner = member?.role === 'owner';
        const isEditor = member?.role === 'editor';
        if (!isOwner && !isEditor) {
            const { data: project } = await supabaseAdmin
                .from('projects')
                .select('user_id')
                .eq('id', projectId)
                .single();
            if (project?.user_id !== user.id) {
                return NextResponse.json({ error: '발행 권한이 없어요.' }, { status: 403 });
            }
        }

        // upsert — source_project_id 기준 1행
        const { data: existing } = await supabaseAdmin
            .from('shared_plans')
            .select('id')
            .eq('source_project_id', projectId)
            .maybeSingle();

        if (existing) {
            const { data: updated, error: updateError } = await supabaseAdmin
                .from('shared_plans')
                .update({
                    title,
                    city,
                    duration_nights: durationNights,
                    duration_days: durationDays,
                    snapshot,
                })
                .eq('id', existing.id)
                .select('id')
                .single();
            if (updateError) {
                console.error('[shared-plans POST] update error:', updateError);
                return NextResponse.json({ error: `갱신 중 오류: ${updateError.message}` }, { status: 500 });
            }
            return NextResponse.json({ id: updated?.id, ok: true, updated: true });
        }

        const { data: inserted, error: insertError } = await supabaseAdmin
            .from('shared_plans')
            .insert({
                owner_id: user.id,
                source_project_id: projectId,
                title,
                city,
                duration_nights: durationNights,
                duration_days: durationDays,
                snapshot,
            })
            .select('id')
            .single();

        if (insertError) {
            console.error('[shared-plans POST] insert error:', insertError);
            return NextResponse.json({ error: `저장 중 오류: ${insertError.message}` }, { status: 500 });
        }

        return NextResponse.json({ id: inserted?.id, ok: true });

    } catch (err) {
        console.error('[shared-plans POST] 오류:', err);
        return NextResponse.json({ error: '발행 중 오류가 발생했어요.' }, { status: 500 });
    }
}
