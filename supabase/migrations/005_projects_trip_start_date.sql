-- Phase 3 D-1 알림 크론이 조회할 여행 시작일 컬럼.
-- Liveblocks Storage 의 flightInfo.outbound.date 를 CollaborativeApp 이 감지해
-- POST /api/projects/[projectId]/trip-start-date 로 동기화.
-- 여행지 제거 · 항공편 삭제 시 null 로 초기화.

ALTER TABLE public.projects
    ADD COLUMN IF NOT EXISTS trip_start_date date;

-- 크론이 CURRENT_DATE + 1 로 필터 → 부분 인덱스로 데이터 있는 행만 스캔.
CREATE INDEX IF NOT EXISTS idx_projects_trip_start ON public.projects (trip_start_date)
    WHERE trip_start_date IS NOT NULL;
