import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// POST: 카드에 첨부할 사진(원본 + 썸네일)을 받아 Supabase Storage에 업로드.
//   - Authorization Bearer 토큰으로 사용자 검증
//   - project_members 테이블에서 owner/editor 권한 확인 (viewer는 차단)
//   - 경로: <projectId>/<cardId>/<photoId>.jpg (원본), _thumb.jpg (썸네일)
//   - 7일 signed URL 반환 → 카드 photos 필드에 저장

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'card-photos';
const SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7일

export async function POST(request: NextRequest) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    try {
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ error: '로그인이 필요해요.' }, { status: 401 });
        }
        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) {
            return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        }

        const form = await request.formData();
        const projectId = form.get('projectId');
        const cardId = form.get('cardId');
        const original = form.get('original');
        const thumbnail = form.get('thumbnail');

        if (typeof projectId !== 'string' || typeof cardId !== 'string') {
            return NextResponse.json({ error: 'projectId / cardId 누락' }, { status: 400 });
        }
        if (!(original instanceof Blob) || !(thumbnail instanceof Blob)) {
            return NextResponse.json({ error: 'original / thumbnail 파일이 필요해요.' }, { status: 400 });
        }
        if (original.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: '5MB 이하 파일만 업로드할 수 있어요.' }, { status: 400 });
        }

        // 권한 — owner/editor 만 업로드 가능 (project_members 또는 projects.user_id 기반)
        const { data: member } = await supabaseAdmin
            .from('project_members')
            .select('role')
            .eq('project_id', projectId)
            .eq('user_id', user.id)
            .maybeSingle();
        const isOwner = member?.role === 'owner';
        const isEditor = member?.role === 'editor';
        if (!isOwner && !isEditor) {
            const { data: project } = await supabaseAdmin
                .from('projects')
                .select('user_id')
                .eq('id', projectId)
                .maybeSingle();
            if (!project || project.user_id !== user.id) {
                return NextResponse.json({ error: '업로드 권한이 없어요.' }, { status: 403 });
            }
        }

        // 사진 ID — 클라가 보내지 않으면 서버 생성
        const photoId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        const originalPath = `${projectId}/${cardId}/${photoId}.jpg`;
        const thumbnailPath = `${projectId}/${cardId}/${photoId}_thumb.jpg`;

        // 업로드
        const originalBytes = new Uint8Array(await original.arrayBuffer());
        const thumbnailBytes = new Uint8Array(await thumbnail.arrayBuffer());

        const [{ error: upErr1 }, { error: upErr2 }] = await Promise.all([
            supabaseAdmin.storage.from(BUCKET).upload(originalPath, originalBytes, {
                contentType: original.type || 'image/jpeg',
                upsert: false,
            }),
            supabaseAdmin.storage.from(BUCKET).upload(thumbnailPath, thumbnailBytes, {
                contentType: thumbnail.type || 'image/jpeg',
                upsert: false,
            }),
        ]);
        if (upErr1 || upErr2) {
            console.error('[photos/upload] storage upload error:', upErr1, upErr2);
            return NextResponse.json({ error: `업로드 실패: ${upErr1?.message || upErr2?.message}` }, { status: 500 });
        }

        // signed URL 발급
        const [{ data: urlOrig, error: signErr1 }, { data: urlThumb, error: signErr2 }] = await Promise.all([
            supabaseAdmin.storage.from(BUCKET).createSignedUrl(originalPath, SIGNED_URL_TTL),
            supabaseAdmin.storage.from(BUCKET).createSignedUrl(thumbnailPath, SIGNED_URL_TTL),
        ]);
        if (signErr1 || signErr2 || !urlOrig || !urlThumb) {
            console.error('[photos/upload] sign url error:', signErr1, signErr2);
            return NextResponse.json({ error: 'URL 발급 실패' }, { status: 500 });
        }

        return NextResponse.json({
            id: photoId,
            originalUrl: urlOrig.signedUrl,
            thumbnailUrl: urlThumb.signedUrl,
            capturedAt: Date.now(),
            uploaderId: user.id,
        });
    } catch (err: any) {
        console.error('[photos/upload] 오류:', err);
        return NextResponse.json({ error: err?.message || '업로드 중 오류가 발생했어요.' }, { status: 500 });
    }
}
