-- 019_hide_author_email_fix.sql
-- 018 정정. 018 은 효과가 없었다.
--
-- 왜 안 먹혔나: PostgreSQL 에서 컬럼 단위 REVOKE 는 "테이블 전체 SELECT 권한이 없을 때"만
--   의미가 있다. Supabase 는 기본으로 GRANT SELECT ON <table> TO anon, authenticated 를
--   걸어두므로, 컬럼 하나만 REVOKE 해도 테이블 권한이 그대로 이겨서 계속 읽혔다.
--   (018 실행 후 anon 으로 author_email 조회 시 이메일이 그대로 나오는 것을 확인)
--
-- 올바른 방법: 테이블 SELECT 를 회수한 뒤, author_email 을 뺀 나머지 컬럼만 다시 부여한다.
--
-- 행 자체는 계속 보인다(공개 게시판이므로). author_email 컬럼만 못 읽는다.
-- 앱은 전부 service role 로 읽으므로 영향 없음.
--
-- 주의: 이후 새 컬럼을 추가하면 anon/authenticated 에게 자동으로 권한이 가지 않는다.
--       커뮤니티 테이블에 컬럼을 추가할 때는 이 파일도 같이 갱신할 것.

-- ── 게시글 ────────────────────────────────────────────────
REVOKE SELECT ON public.community_posts FROM anon;
REVOKE SELECT ON public.community_posts FROM authenticated;

GRANT SELECT (
  id, post_number, board_type, country, city, title, content,
  author_id, view_count, reply_count, created_at, updated_at
) ON public.community_posts TO anon;

GRANT SELECT (
  id, post_number, board_type, country, city, title, content,
  author_id, view_count, reply_count, created_at, updated_at
) ON public.community_posts TO authenticated;

-- ── 답변 ──────────────────────────────────────────────────
REVOKE SELECT ON public.community_replies FROM anon;
REVOKE SELECT ON public.community_replies FROM authenticated;

GRANT SELECT (
  id, post_id, content, author_id, created_at, updated_at
) ON public.community_replies TO anon;

GRANT SELECT (
  id, post_id, content, author_id, created_at, updated_at
) ON public.community_replies TO authenticated;

-- 확인용 (anon 키로 REST 호출)
--   막혀야 함  : GET /rest/v1/community_posts?select=author_email      → 42501
--   막혀야 함  : GET /rest/v1/community_posts?select=*                 → 42501
--   되어야 함  : GET /rest/v1/community_posts?select=id,title          → 정상
