-- 017_inquiry_private.sql
-- 문의&요청(inquiry) 게시판을 DB 수준에서 비공개로 전환.
--
-- 문제: community_posts / community_replies 의 SELECT 정책이 USING (true) 라
--       anon 키(클라이언트 번들에 노출됨)로 REST 를 직접 호출하면 남의 문의 글과
--       답변이 그대로 읽혔다. API 라우트는 막고 있었지만 DB 는 열려 있었다.
--
-- 조치: inquiry 글은 작성자 본인에게만 보이도록 SELECT 정책을 좁힌다.
--       답변은 부모 글의 공개 여부를 따른다.
--
-- 영향 없음: 앱은 커뮤니티 데이터를 전부 service role(API 라우트)로 읽으며
--            service role 은 RLS 를 우회한다. 관리자 응대 화면도 동일 경로.

-- 1) 게시글 — inquiry 가 아니면 공개, inquiry 면 작성자 본인만
DROP POLICY IF EXISTS "community_posts_select_all" ON public.community_posts;
DROP POLICY IF EXISTS "community_posts_select_scoped" ON public.community_posts;
CREATE POLICY "community_posts_select_scoped" ON public.community_posts
  FOR SELECT USING (
    board_type <> 'inquiry' OR auth.uid() = author_id
  );

-- 2) 답변 — 부모 글이 보이면 답변도 보인다
--    (하위 질의도 community_posts 의 RLS 를 그대로 타므로 위 정책과 항상 일치)
DROP POLICY IF EXISTS "community_replies_select_all" ON public.community_replies;
DROP POLICY IF EXISTS "community_replies_select_scoped" ON public.community_replies;
CREATE POLICY "community_replies_select_scoped" ON public.community_replies
  FOR SELECT USING (
    EXISTS (
      SELECT 1
      FROM public.community_posts p
      WHERE p.id = community_replies.post_id
        AND (p.board_type <> 'inquiry' OR auth.uid() = p.author_id)
    )
  );

-- 확인용
--   anon 으로 조회 시 inquiry 0건이어야 한다:
--   SELECT count(*) FROM public.community_posts WHERE board_type = 'inquiry';
