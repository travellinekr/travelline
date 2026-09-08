-- 021_member_display_name.sql
-- 여행보드별 별칭(display_name).
--
-- 같은 사람이 보드마다 다른 이름을 쓸 수 있게 한다.
-- 회사 동료와 가는 보드에서는 실명, 친구들과 가는 보드에서는 별명 같은 식.
--
-- 저장 위치가 auth.users 가 아니라 project_members 인 이유가 여기 있다.
-- 계정에 하나 두면 모든 보드에서 같은 이름이 된다.
--
-- 값이 없으면(NULL) 계정 이름으로 떨어진다. 아래 백필로 기존 멤버는 채워두지만,
-- 앞으로 새로 합류하는 사람은 NULL 로 들어와도 앱이 계정 이름을 쓴다.
-- 즉 NULL 은 "아직 안 바꿈" 이지 오류 상태가 아니다.

ALTER TABLE public.project_members
  ADD COLUMN IF NOT EXISTS display_name text;

COMMENT ON COLUMN public.project_members.display_name IS
  '이 보드에서 쓰는 별칭. NULL 이면 계정 이름(user_metadata.full_name 또는 이메일 앞부분)을 쓴다.';

-- ── 기존 멤버 백필 ────────────────────────────────────────
-- auth.users 의 메타데이터에서 이름을 가져온다.
-- 구글/카카오 로그인은 full_name 또는 name 에 들어오고, 둘 다 없으면 이메일 앞부분을 쓴다.
UPDATE public.project_members m
SET display_name = COALESCE(
      NULLIF(TRIM(u.raw_user_meta_data ->> 'full_name'), ''),
      NULLIF(TRIM(u.raw_user_meta_data ->> 'name'), ''),
      NULLIF(split_part(u.email, '@', 1), ''),
      '사용자'
    )
FROM auth.users u
WHERE m.user_id = u.id
  AND m.display_name IS NULL;

-- 확인용
--   SELECT count(*) FILTER (WHERE display_name IS NULL) AS 미설정,
--          count(*)                                     AS 전체
--   FROM public.project_members;
