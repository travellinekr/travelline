-- 016_projects_updated_at.sql
-- projects.updated_at 이 갱신되지 않는 문제.
--
-- 증상
--   컬럼은 있는데 갱신 트리거가 없어서 생성 시각에 멈춰 있다.
--   실제로 trip_start_date 가 설정된 프로젝트도 updated_at == created_at 이다.
--
-- 왜 문제인가
--   관리자 대시보드(src/lib/admin/supabaseStats.ts)가 이 값으로
--   "최근 7일 활성 프로젝트" 수를 센다. 지금은 활동이 아니라 생성일을 세고 있어
--   최근 7일 안에 만들어진 프로젝트만 잡히고, 매일 쓰는 오래된 보드는 빠진다.
--
-- 조치
--   008 에서 만든 set_updated_at() 트리거 함수를 그대로 재사용한다.
--   지금부터 projects 행이 UPDATE 될 때마다 값이 따라간다.
--
-- ⚠️ 카드 편집은 Liveblocks 에 저장되므로 projects 행을 건드리지 않는다.
--    즉 이 지표는 "보드 이름·출발일 변경, 소유권 위임" 같은 프로젝트 단위 변경만 잡는다.
--    카드 활동까지 반영하려면 별도 설계가 필요하다(이 마이그레이션 범위 밖).
--
-- 과거 데이터는 손대지 않는다. created_at 과 같은 값이라 손실될 정보가 없다.

DROP TRIGGER IF EXISTS trg_projects_updated_at ON public.projects;
CREATE TRIGGER trg_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
