-- 012_projects_update_owner_only.sql
-- 여행 계획 이름 수정을 소유자로 제한한다.
--
-- 배경
--   메인화면의 이름 수정(page.tsx > handleEditProject)은 서버 라우트를 거치지 않고
--   supabase.from('projects').update(...) 로 클라이언트에서 바로 쏜다.
--   즉 이 RLS 정책이 유일한 방어선이다.
--
--   001 의 정책은 소유자 뿐 아니라 editor 멤버도 수정할 수 있게 열어 두었는데,
--   보드 이름은 소유자만 바꾸는 것으로 정리한다(카드 편집과 보드 자체 관리를 분리).
--
-- ⚠️ 이 정책은 클라이언트 직접 접근에만 적용된다.
--    service role 로 도는 서버 라우트(trip-start-date 등)는 RLS 를 우회하므로
--    각 라우트가 자체적으로 권한을 확인해야 한다. (삭제 라우트는 owner 확인을 넣어 둠)
--
-- 되돌리려면 001_project_members.sql 의 projects_update 정책을 다시 실행할 것.

DROP POLICY IF EXISTS "projects_update" ON public.projects;

CREATE POLICY "projects_update" ON public.projects
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
