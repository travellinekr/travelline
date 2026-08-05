-- ============================================================
-- community_posts.board_type CHECK 제약조건에 'qna' 추가
-- Supabase SQL Editor 에서 실행
-- ============================================================

ALTER TABLE public.community_posts
    DROP CONSTRAINT IF EXISTS community_posts_board_type_check;

ALTER TABLE public.community_posts
    ADD CONSTRAINT community_posts_board_type_check
    CHECK (board_type IN ('notice', 'info', 'review', 'qna', 'inquiry'));

-- 확인
-- SELECT constraint_name, check_clause FROM information_schema.check_constraints
-- WHERE constraint_name = 'community_posts_board_type_check';
