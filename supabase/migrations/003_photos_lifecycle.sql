-- 사진 원본 파일 라이프사이클 관리를 위한 테이블.
-- 여행 종료 + 14일 경과 원본만 크론이 자동 삭제 (썸네일은 영구 유지).
-- Liveblocks Storage 의 Card.photos 배열과 별개로, 서버 크론에서 조회할 수 있는 인덱스 용도.

CREATE TABLE IF NOT EXISTS public.photos (
    id text PRIMARY KEY,                                -- upload/route.ts 에서 발급한 photoId (Card.photos[].id 와 동일)
    project_id uuid NOT NULL,                           -- projects.id 참조
    card_id text NOT NULL,                              -- Liveblocks Card.id
    storage_path_original text NOT NULL,                -- Supabase Storage 'card-photos' bucket 내부 경로
    storage_path_thumb text NOT NULL,                   -- 썸네일 경로 (참고용, 삭제 대상 아님)
    trip_end_date date,                                 -- 업로드 시점의 여행 종료일 — 수정 반영 X (안전 설계)
    uploaded_at timestamptz NOT NULL DEFAULT now(),
    original_deleted boolean NOT NULL DEFAULT false,    -- 크론이 원본 삭제 완료 표시
    uploader_id uuid NOT NULL                           -- auth.users.id 참조
);

-- 크론 삭제 대상 조회 인덱스 — trip_end_date < 컷오프 AND original_deleted = false
CREATE INDEX IF NOT EXISTS idx_photos_cleanup
    ON public.photos (trip_end_date, original_deleted)
    WHERE original_deleted = false;

-- 프로젝트별 사진 조회 인덱스 (향후 필요 시)
CREATE INDEX IF NOT EXISTS idx_photos_project
    ON public.photos (project_id, card_id);

-- RLS: 서비스 롤(크론·업로드 API) 만 접근. 클라이언트는 Liveblocks Storage 의 Card.photos 만 씀.
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;

-- 어떤 사용자에게도 SELECT/INSERT/UPDATE/DELETE 를 부여하지 않음
-- → 서비스 롤(supabaseAdmin) 만 RLS 우회로 접근 가능
