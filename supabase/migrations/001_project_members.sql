-- ============================================================
-- MindFlows - Supabase 마이그레이션
-- Supabase 대시보드 > SQL Editor에서 실행하세요
-- ============================================================

-- 1. projects 테이블에 user_id 컬럼 추가
ALTER TABLE projects ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- 2. project_members 테이블 생성 (프로젝트 공유 멤버 관리)
CREATE TABLE IF NOT EXISTS project_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'viewer' CHECK (role IN ('owner', 'editor', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);

-- 3. 인덱스 추가 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_project_members_project_id ON project_members(project_id);
CREATE INDEX IF NOT EXISTS idx_project_members_user_id ON project_members(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);

-- 4. RLS(Row Level Security) 활성화
ALTER TABLE project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- projects 테이블 RLS 정책
-- ============================================================

-- 누구나 프로젝트 목록 조회 가능 (비로그인 포함)
DROP POLICY IF EXISTS "projects_select" ON projects;
CREATE POLICY "projects_select" ON projects FOR SELECT USING (true);

-- 로그인한 사용자만 프로젝트 생성 가능 (본인 user_id로만)
DROP POLICY IF EXISTS "projects_insert" ON projects;
CREATE POLICY "projects_insert" ON projects FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 프로젝트 소유자 또는 editor 멤버만 수정 가능
DROP POLICY IF EXISTS "projects_update" ON projects;
CREATE POLICY "projects_update" ON projects FOR UPDATE USING (
  auth.uid() = user_id OR
  EXISTS (
    SELECT 1 FROM project_members
    WHERE project_id = projects.id
      AND user_id = auth.uid()
      AND role IN ('owner', 'editor')
  )
);

-- 프로젝트 소유자만 삭제 가능
DROP POLICY IF EXISTS "projects_delete" ON projects;
CREATE POLICY "projects_delete" ON projects FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- project_members 테이블 RLS 정책
-- ============================================================

-- 누구나 멤버 목록 조회 가능
DROP POLICY IF EXISTS "members_select" ON project_members;
CREATE POLICY "members_select" ON project_members FOR SELECT USING (true);

-- 로그인한 사용자만 멤버 추가 가능
DROP POLICY IF EXISTS "members_insert" ON project_members;
CREATE POLICY "members_insert" ON project_members FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- 본인 탈퇴 또는 owner가 멤버 제거 가능
DROP POLICY IF EXISTS "members_delete" ON project_members;
CREATE POLICY "members_delete" ON project_members FOR DELETE USING (
  auth.uid() = user_id OR
  EXISTS (
    SELECT 1 FROM project_members pm
    WHERE pm.project_id = project_members.project_id
      AND pm.user_id = auth.uid()
      AND pm.role = 'owner'
  )
);

-- ============================================================
-- 완료! 아래 쿼리로 테이블 확인
-- SELECT * FROM project_members LIMIT 10;
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'projects';
-- ============================================================
