import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Vercel Cron: 매일 새벽 3시(UTC) 실행 — vercel.json 의 crons 설정 참고.
// 여행 종료일 + 14일 경과된 사진의 "원본 파일"만 Supabase Storage 에서 삭제.
// 썸네일은 영구 유지 → 카드에 사진 프리뷰는 계속 노출됨.
// 삭제 완료 후 photos 테이블의 original_deleted=true 로 표시하여 중복 처리 방지.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const BUCKET = 'card-photos';
const RETENTION_DAYS = 14;

// 한 번 실행에 처리할 최대 사진 수 (Supabase 요금·실행 시간 보호)
const BATCH_LIMIT = 500;

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

        const { data: expired, error: selErr } = await supabaseAdmin
            .from('photos')
            .select('id, storage_path_original')
            .lt('trip_end_date', cutoffIso)
            .eq('original_deleted', false)
            .not('trip_end_date', 'is', null) // 종료일 미기록 사진은 대상 제외
            .limit(BATCH_LIMIT);

        if (selErr) {
            console.error('[cron/cleanup-photos] select error:', selErr);
            return NextResponse.json({ error: selErr.message }, { status: 500 });
        }
        if (!expired || expired.length === 0) {
            return NextResponse.json({ processed: 0, deletedFiles: 0, cutoff: cutoffIso });
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
        });
    } catch (err: any) {
        console.error('[cron/cleanup-photos] 예외:', err);
        return NextResponse.json({ error: err?.message || 'cleanup failed' }, { status: 500 });
    }
}
