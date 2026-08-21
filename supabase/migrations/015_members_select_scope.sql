-- 015_members_select_scope.sql
-- project_members 조회를 "내가 속한 보드"로 제한한다.
--
-- 배경
--   members_select 가 USING (true) 라 anon 키(브라우저 번들에 공개)만으로
--   전체 멤버십이 읽혔다. 누가 어느 보드에 무슨 권한으로 있는지가 전부 노출된다.
--
-- 영향 범위 (클라이언트에서 이 테이블을 직접 읽는 두 곳 모두 로그인 상태다)
--   page.tsx          — .eq('user_id', 내 id) 로 내 행만 조회      → 정책 1항으로 통과
--   ShareModal.tsx    — 지금 보고 있는 보드의 멤버 조회            → 정책 2항으로 통과
--                       (보드에 들어오면 liveblocks-auth 가 viewer 로 자동 등록한다)
--   서버 라우트들     — service role 이라 RLS 를 우회, 영향 없음
--
-- ⚠️ 정책 안에서 project_members 를 직접 다시 조회하면 무한 재귀가 난다.
--    008 에서 만든 can_read_project() 가 SECURITY DEFINER 라 재귀 없이 판정한다.
--
-- 되돌리려면: CREATE POLICY "members_select" ON project_members FOR SELECT USING (true);

DROP POLICY IF EXISTS "members_select" ON public.project_members;

CREATE POLICY "members_select" ON public.project_members
  FOR SELECT USING (
    auth.uid() = user_id                      -- 내 멤버십 행
    OR public.can_read_project(project_id)    -- 내가 속한 보드의 멤버들
  );

-- ────────────────────────────────────────────────────────────
-- projects 의 SELECT 는 열어 둔다 (USING true 유지)
--
-- room/[roomId]/page.tsx 가 서버 컴포넌트에서 anon 키로 프로젝트 존재 여부를 확인하고,
-- 없으면 메인으로 리다이렉트한다. 여기를 막으면 공유 링크로 들어온 손님은 물론
-- 정상 사용자까지 모든 보드가 리다이렉트된다.
--
-- 지금 노출되는 값은 보드 이름과 소유자 uuid 다. 이메일 같은 식별 정보는 없다.
-- 더 조이려면 그 페이지를 service role 로 바꾸는 선행 작업이 필요하므로,
-- 별도 작업으로 남긴다.
