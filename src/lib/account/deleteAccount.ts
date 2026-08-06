import { createClient } from '@supabase/supabase-js';

// 계정 삭제 프로세스 — 다른 로직 오염 없도록 이 파일 안에서만 완결.
// 스키마 FK 요약:
//   projects.user_id            → ON DELETE SET NULL (직접 삭제 필요, 그렇지 않으면 orphan 프로젝트로 남음)
//   project_members             → CASCADE (자동)
//   community_posts.author_id   → ON DELETE SET NULL (author_email 은 스냅샷이라 익명화 필요)
//   community_replies.author_id → ON DELETE SET NULL (동일)
//   push_tokens.user_id         → CASCADE (자동)
// 주의: Liveblocks room 은 이 스코프 밖 (별도 REST API). 소유자 삭제 후 접근 계정 없어져 실질적 orphan.

const ANONYMIZED_EMAIL = '탈퇴한 사용자';

export interface DeleteAccountResult {
    ok: boolean;
    error?: string;
}

function getAdminClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return null;
    return createClient(url, key);
}

export async function deleteAccountServerside(userId: string): Promise<DeleteAccountResult> {
    if (!userId) return { ok: false, error: '유효하지 않은 사용자' };

    const admin = getAdminClient();
    if (!admin) return { ok: false, error: '환경 변수 미설정' };

    // 1) 본인 소유 프로젝트 삭제 → project_members / (있다면) 카드/컬럼 도 CASCADE 정리.
    //    실패해도 계정 삭제는 계속 (부분 실패 허용, 다만 로그로 남김).
    const { error: projErr } = await admin
        .from('projects')
        .delete()
        .eq('user_id', userId);
    if (projErr) console.error('[deleteAccount] project delete error:', projErr.message);

    // 2) 커뮤니티 게시글/답변 익명화 — author_id 는 auth.users 삭제 시 SET NULL 되나
    //    author_email 스냅샷은 남아 있으므로 사전 익명화.
    const { error: postErr } = await admin
        .from('community_posts')
        .update({ author_email: ANONYMIZED_EMAIL })
        .eq('author_id', userId);
    if (postErr) console.error('[deleteAccount] post anonymize error:', postErr.message);

    const { error: replyErr } = await admin
        .from('community_replies')
        .update({ author_email: ANONYMIZED_EMAIL })
        .eq('author_id', userId);
    if (replyErr) console.error('[deleteAccount] reply anonymize error:', replyErr.message);

    // 3) auth.users 최종 삭제 — 이후 community.author_id 는 SET NULL, push_tokens 는 CASCADE 로 정리됨.
    const { error: authErr } = await admin.auth.admin.deleteUser(userId);
    if (authErr) return { ok: false, error: `계정 삭제 실패: ${authErr.message}` };

    return { ok: true };
}
