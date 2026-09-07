import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Vercel Cron: 매일 새벽 3시(UTC) 실행 — vercel.json 의 crons 설정 참고.
// 여행 종료일 + 14일 경과된 사진의 "원본 파일"만 Supabase Storage 에서 삭제.
// 썸네일은 영구 유지 → 카드에 사진 프리뷰는 계속 노출됨.
// 삭제 완료 후 photos 테이블의 original_deleted=true 로 표시하여 중복 처리 방지.
//
// 유료(1,990원) 프로젝트는 원본을 3년 보관한다(마이그레이션 020, projects.paid_until).
// 보관 기간을 14일/3년으로 분기하지 않고, 조건 하나를 더 얹는 방식으로 처리한다:
//
//     삭제 대상 = 여행종료 +14일 경과  AND  유료 기간이 끝난 프로젝트
//
// 유료 프로젝트는 조회에서 아예 빠지고, paid_until 이 지나는 순간 저절로 대상이 된다.
// (혜택이 끝났는데 여행은 이미 오래전이므로 그때 정리되는 게 맞다)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const BUCKET = 'card-photos';
const RETENTION_DAYS = 14;

// 한 번 실행에 처리할 최대 사진 수 (Supabase 요금·실행 시간 보호)
const BATCH_LIMIT = 500;

// 유료 프로젝트 id 를 in() 필터로 넘기므로, 개수가 지나치게 늘면 URL 길이가 문제가 된다.
// 이 선을 넘으면 조인 필터(FK 필요)로 전환해야 한다는 신호.
const PAID_IDS_WARN_THRESHOLD = 1000;

export async function GET(request: NextRequest) {
    // Vercel Cron 은 자동으로 Authorization: Bearer <CRON_SECRET> 헤더를 붙임.
    // 외부 임의 호출 방지.
    if (CRON_SECRET) {
        const auth = request.headers.get('Authorization');
        if (auth !== `Bearer ${CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    try {
        // cutoff: 오늘 - 14일. 그보다 trip_end_date 가 과거이면 삭제 대상.
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - RETENTION_DAYS);
        const cutoffIso = cutoff.toISOString().slice(0, 10); // YYYY-MM-DD

        // 지금 유료 혜택이 살아 있는 프로젝트 = 원본을 보존해야 하는 프로젝트.
        // 여기서 걸러내지 않고 나중에 JS 로 거르면, 배치 500건이 전부 유료일 때
        // 매 실행이 같은 500건만 집어 들고 아무것도 못 지우는 교착이 생긴다. → DB 에서 제외한다.
        let paidProjectIds: string[] = [];
        const { data: paidRows, error: paidErr } = await supabaseAdmin
            .from('projects')
            .select('id')
            .gt('paid_until', new Date().toISOString());

        if (paidErr) {
            // 마이그레이션 020 미적용 환경 — 유료 프로젝트가 존재할 수 없으므로
            // 기존 동작(전부 14일)으로 진행한다. 사진을 잘못 지우지는 않는다.
            console.warn('[cron/cleanup-photos] paid_until 조회 실패, 전체를 무료로 처리:', paidErr.message);
        } else {
            paidProjectIds = (paidRows ?? []).map(r => r.id);
            if (paidProjectIds.length > PAID_IDS_WARN_THRESHOLD) {
                // in() 필터가 URL 로 나가므로 무한정 늘릴 수 없다.
                // 이 경고가 보이면 photos.project_id 에 FK 를 걸고 조인 필터로 바꿔야 한다.
                console.warn(`[cron/cleanup-photos] 유료 프로젝트 ${paidProjectIds.length}건 — 조회 전략 재검토 필요`);
            }
        }

        let query = supabaseAdmin
            .from('photos')
            .select('id, storage_path_original')
            .lt('trip_end_date', cutoffIso)
            .eq('original_deleted', false)
            .not('trip_end_date', 'is', null); // 종료일 미기록 사진은 대상 제외

        if (paidProjectIds.length > 0) {
            query = query.not('project_id', 'in', `(${paidProjectIds.join(',')})`);
        }

        const { data: expired, error: selErr } = await query.limit(BATCH_LIMIT);

        if (selErr) {
            console.error('[cron/cleanup-photos] select error:', selErr);
            return NextResponse.json({ error: selErr.message }, { status: 500 });
        }
        if (!expired || expired.length === 0) {
            return NextResponse.json({ processed: 0, deletedFiles: 0, cutoff: cutoffIso, paidProjectsSkipped: paidProjectIds.length });
        }

        // Storage 원본 일괄 삭제
        const paths = expired.map(r => r.storage_path_original);
        const { data: removed, error: rmErr } = await supabaseAdmin.storage.from(BUCKET).remove(paths);
        if (rmErr) {
            console.error('[cron/cleanup-photos] storage remove error:', rmErr);
            // 부분 실패여도 계속 진행 (다음 실행에서 다시 시도)
        }

        // photos 테이블 상태 갱신
        const ids = expired.map(r => r.id);
        const { error: updErr } = await supabaseAdmin
            .from('photos')
            .update({ original_deleted: true })
            .in('id', ids);
        if (updErr) {
            console.error('[cron/cleanup-photos] update error:', updErr);
            return NextResponse.json({ error: updErr.message }, { status: 500 });
        }

        return NextResponse.json({
            processed: expired.length,
            deletedFiles: removed?.length ?? 0,
            cutoff: cutoffIso,
            paidProjectsSkipped: paidProjectIds.length,
        });
    } catch (err: any) {
        console.error('[cron/cleanup-photos] 예외:', err);
        return NextResponse.json({ error: err?.message || 'cleanup failed' }, { status: 500 });
    }
}
