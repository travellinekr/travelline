-- ============================================================
-- 프로젝트 생성 시 자동으로 owner를 project_members에 추가하는 트리거
-- Supabase SQL Editor에서 실행하세요
-- ============================================================

-- 1. 트리거 함수 생성
CREATE OR REPLACE FUNCTION public.add_project_owner()
RETURNS TRIGGER AS $$
BEGIN
  -- 프로젝트 생성자(user_id)를 owner로 자동 등록
  IF NEW.user_id IS NOT NULL THEN
    INSERT INTO public.project_members (project_id, user_id, role)
    VALUES (NEW.id, NEW.user_id, 'owner')
    ON CONFLICT (project_id, user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. 트리거 등록 (projects INSERT 시 자동 실행)
DROP TRIGGER IF EXISTS on_project_created ON public.projects;
CREATE TRIGGER on_project_created
  AFTER INSERT ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.add_project_owner();

-- 3. 확인 쿼리
-- SELECT * FROM project_members;
