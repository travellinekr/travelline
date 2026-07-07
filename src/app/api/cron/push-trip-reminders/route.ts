import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendPushToUsers } from '@/lib/server/fcm';

// Vercel Cron 매일 UTC 21:00 (KST 06:00) 실행 — vercel.json 참조.
// projects.trip_start_date = 오늘 + 1 인 프로젝트의 모든 멤버에게 "내일 출발" 푸시 발송.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(request: NextRequest) {
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
        // 내일 날짜 (UTC 기준) — trip_start_date 는 date 타입이라 timezone 없음.
        // KST 기준으로 "내일" 이 정확히 맞으려면 클라가 저장 시 KST 기준으로 저장해야 함 (아웃바운드 date 는 사용자 로컬 시각).
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const targetDate = tomorrow.toISOString().slice(0, 10);

        const { data: projects, error: selErr } = await supabaseAdmin
            .from('projects')
            .select('id, name')
            .eq('trip_start_date', targetDate);

        if (selErr) {
            console.error('[cron/push-trip-reminders] projects 조회 실패:', selErr.message);
            return NextResponse.json({ error: selErr.message }, { status: 500 });
        }
        if (!projects || projects.length === 0) {
            return NextResponse.json({ ok: true, targetDate, projects: 0, sent: 0 });
        }

        let totalSent = 0;
        let totalFailed = 0;

        for (const proj of projects) {
            const { data: members, error: mErr } = await supabaseAdmin
                .from('project_members')
                .select('user_id')
                .eq('project_id', proj.id);

            if (mErr || !members || members.length === 0) continue;

            const userIds = members.map((m: { user_id: string }) => m.user_id);
            const projectTitle = proj.name || '여행';

            const result = await sendPushToUsers(userIds, {
                title: '내일 출발이에요!',
                body: `${projectTitle} 여행이 하루 앞으로 다가왔어요. 짐 챙기셨나요?`,
                data: { projectId: proj.id, kind: 'trip_d_minus_1' },
            });

            totalSent += result.sent;
            totalFailed += result.failed;
        }

        return NextResponse.json({
            ok: true,
            targetDate,
            projects: projects.length,
            sent: totalSent,
            failed: totalFailed,
        });
    } catch (err) {
        console.error('[cron/push-trip-reminders] 예외:', err);
        return NextResponse.json({ error: '서버 오류' }, { status: 500 });
    }
}
