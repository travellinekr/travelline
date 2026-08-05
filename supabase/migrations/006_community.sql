-- ============================================================
-- 커뮤니티 게시판 (게시글 + 답변)
-- Supabase SQL Editor 에서 실행
-- ============================================================

-- 1. community_posts (본문)
CREATE TABLE IF NOT EXISTS public.community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_number BIGSERIAL UNIQUE,
  board_type TEXT NOT NULL CHECK (board_type IN ('notice', 'info', 'review', 'inquiry')),
  country TEXT,
  city TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_email TEXT NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  reply_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_community_posts_board_created ON public.community_posts (board_type, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_community_posts_country ON public.community_posts (country) WHERE country IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_community_posts_city ON public.community_posts (city) WHERE city IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_community_posts_author ON public.community_posts (author_id);

-- 2. community_replies (답변)
CREATE TABLE IF NOT EXISTS public.community_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_community_replies_post ON public.community_replies (post_id, created_at ASC);

-- 3. updated_at 자동 갱신 트리거 함수 (공용)
CREATE OR REPLACE FUNCTION public.set_community_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at_community_posts ON public.community_posts;
CREATE TRIGGER set_updated_at_community_posts
  BEFORE UPDATE ON public.community_posts
  FOR EACH ROW EXECUTE FUNCTION public.set_community_updated_at();

DROP TRIGGER IF EXISTS set_updated_at_community_replies ON public.community_replies;
CREATE TRIGGER set_updated_at_community_replies
  BEFORE UPDATE ON public.community_replies
  FOR EACH ROW EXECUTE FUNCTION public.set_community_updated_at();

-- 4. reply_count 자동 갱신 트리거
CREATE OR REPLACE FUNCTION public.bump_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.community_posts SET reply_count = reply_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.community_posts SET reply_count = GREATEST(reply_count - 1, 0) WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS bump_reply_count_on_insert ON public.community_replies;
CREATE TRIGGER bump_reply_count_on_insert
  AFTER INSERT ON public.community_replies
  FOR EACH ROW EXECUTE FUNCTION public.bump_reply_count();

DROP TRIGGER IF EXISTS bump_reply_count_on_delete ON public.community_replies;
CREATE TRIGGER bump_reply_count_on_delete
  AFTER DELETE ON public.community_replies
  FOR EACH ROW EXECUTE FUNCTION public.bump_reply_count();

-- 5. RLS 활성화
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_replies ENABLE ROW LEVEL SECURITY;

-- 6. community_posts 정책
DROP POLICY IF EXISTS "community_posts_select_all" ON public.community_posts;
CREATE POLICY "community_posts_select_all" ON public.community_posts
  FOR SELECT USING (true);

-- INSERT: 로그인 사용자만 (외교부공지 board_type=notice 는 API 레이어에서 ADMIN_EMAILS 검증)
DROP POLICY IF EXISTS "community_posts_insert_authenticated" ON public.community_posts;
CREATE POLICY "community_posts_insert_authenticated" ON public.community_posts
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = author_id);

DROP POLICY IF EXISTS "community_posts_update_author" ON public.community_posts;
CREATE POLICY "community_posts_update_author" ON public.community_posts
  FOR UPDATE USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);

DROP POLICY IF EXISTS "community_posts_delete_author" ON public.community_posts;
CREATE POLICY "community_posts_delete_author" ON public.community_posts
  FOR DELETE USING (auth.uid() = author_id);

-- 7. community_replies 정책
DROP POLICY IF EXISTS "community_replies_select_all" ON public.community_replies;
CREATE POLICY "community_replies_select_all" ON public.community_replies
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "community_replies_insert_authenticated" ON public.community_replies;
CREATE POLICY "community_replies_insert_authenticated" ON public.community_replies
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = author_id);

DROP POLICY IF EXISTS "community_replies_update_author" ON public.community_replies;
CREATE POLICY "community_replies_update_author" ON public.community_replies
  FOR UPDATE USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);

DROP POLICY IF EXISTS "community_replies_delete_author" ON public.community_replies;
CREATE POLICY "community_replies_delete_author" ON public.community_replies
  FOR DELETE USING (auth.uid() = author_id);

-- 8. 확인 쿼리
-- SELECT * FROM community_posts ORDER BY created_at DESC LIMIT 10;
-- SELECT * FROM community_replies WHERE post_id = '<uuid>';
