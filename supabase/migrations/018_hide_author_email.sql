-- 018_hide_author_email.sql
-- 커뮤니티 작성자 이메일을 DB 수준에서 가린다.
--
-- 문제: 게시글·답변 행에 author_email 이 스냅샷으로 저장돼 있고, 공개 게시판은
--       RLS SELECT 가 열려 있어 anon 키(클라이언트 번들에 노출됨)로 REST 를 직접
--       호출하면 회원 이메일을 통째로 수집할 수 있었다.
--       API 응답은 표시명만 내려보내도록 고쳤지만(withAuthorName), DB 는 그대로였다.
--
-- 조치: anon / authenticated 역할에서 author_email 컬럼 읽기 권한만 회수한다.
--       행 자체는 계속 보인다(게시판은 공개되어야 함). 이 컬럼만 못 읽는다.
--
-- 영향 없음: 앱은 커뮤니티를 전부 service role(API 라우트)로 읽고, service role 은
--            컬럼 권한 제약을 받지 않는다. 계정 삭제 시 이메일 익명화도 service role.
--
-- 주의: 이후 anon 으로 select=* 를 호출하면 컬럼 권한 오류가 난다(누락이 아니라 에러).
--       클라이언트에서 이 테이블을 직접 조회하는 코드는 현재 없다.

-- 게시글
REVOKE SELECT (author_email) ON public.community_posts FROM anon;
REVOKE SELECT (author_email) ON public.community_posts FROM authenticated;

-- 답변
REVOKE SELECT (author_email) ON public.community_replies FROM anon;
REVOKE SELECT (author_email) ON public.community_replies FROM authenticated;

-- 확인용
--   anon 으로 호출 시 아래는 42501(permission denied) 이어야 한다:
--     GET /rest/v1/community_posts?select=author_email
--   아래는 정상 동작해야 한다(공개 게시판 목록):
--     GET /rest/v1/community_posts?select=id,title&board_type=eq.notice
