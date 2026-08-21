-- 013_data_repair.sql
-- 스키마 변경이 아니라 이미 어긋난 데이터를 되돌리는 교정 스크립트다.
-- 두 건 모두 원인은 이미 코드에서 막았고, 여기서는 남은 값만 정리한다.

-- ────────────────────────────────────────────────────────────
-- ① 커뮤니티 글 26건의 작성자가 비어 있음
--
-- 증상: travelline.kr@gmail.com 계정은 살아 있는데 그 계정 글의 author_id 가 NULL 이라
--       [postId] 라우트의 `existing.author_id !== user.id` 검사에 걸려
--       작성자 본인도 수정·삭제를 할 수 없다. RLS 정책으로도 막힌다.
--
-- 원인: 계정 삭제가 아니다(삭제였다면 author_email 이 '탈퇴한 사용자'로 익명화되고
--       계정도 없어야 한다). community_posts 의 insert 정책이
--       `auth.uid() = author_id` 를 요구하므로 앱을 통해서도 들어올 수 없다.
--       → service role 로 도는 스크립트가 author_id 없이 밀어 넣은 것으로 보인다.
--       (2026-08-07 07:24 이후 작성분 전량, 그 이전 글은 정상)
--
-- 조치: author_email 이 남아 있으므로 그 이메일의 계정 uuid 로 되돌린다.
--       author_email 이 익명화된 행('탈퇴한 사용자')은 실제 탈퇴자이므로 건드리지 않는다.
UPDATE public.community_posts p
   SET author_id = u.id
  FROM auth.users u
 WHERE p.author_id IS NULL
   AND p.author_email = u.email;

-- 답글도 같은 방식으로 정리 (현재 대상 0건이지만 재발 시를 위해 함께 둔다)
UPDATE public.community_replies r
   SET author_id = u.id
  FROM auth.users u
 WHERE r.author_id IS NULL
   AND r.author_email = u.email;

-- ────────────────────────────────────────────────────────────
-- ② 소유자에게 project_members 행이 없는 프로젝트
--
-- 증상: projects.user_id 는 채워져 있는데 project_members 에 owner 행이 없다.
--       메인화면 목록에는 뜨지만, liveblocks-auth 가 project_members 로 역할을 판정하므로
--       보드에 들어가면 손님으로 취급된다(경비 버튼 비활성, 멤버 관리 403).
--
-- 원인: owner 자동 등록 트리거(002)가 INSERT 에만 걸려 있어서,
--       나중에 projects.user_id 를 직접 채운 행에는 멤버가 생기지 않는다.
--
-- 조치: 소유자가 있는데 owner 멤버 행이 없는 프로젝트를 바로잡는다.
--       두 가지 경우가 있다.
--         (a) 행이 아예 없음                    → 새로 넣는다
--         (b) 행은 있는데 역할이 viewer/editor  → owner 로 올린다
--       (b)는 소유자가 그 보드에 들어갔을 때 liveblocks-auth 의 자동 등록이
--       viewer 행을 먼저 만들어 버려서 생긴다. INSERT 만으로는 못 잡는다.

-- (a) 행이 없는 경우
INSERT INTO public.project_members (project_id, user_id, role)
SELECT p.id, p.user_id, 'owner'
  FROM public.projects p
 WHERE p.user_id IS NOT NULL
   AND NOT EXISTS (
        SELECT 1 FROM public.project_members m
         WHERE m.project_id = p.id
           AND m.user_id    = p.user_id
   )
ON CONFLICT (project_id, user_id) DO NOTHING;

-- (b) 행은 있는데 역할이 어긋난 경우
UPDATE public.project_members m
   SET role = 'owner'
  FROM public.projects p
 WHERE m.project_id = p.id
   AND m.user_id    = p.user_id
   AND m.role      <> 'owner';

-- ────────────────────────────────────────────────────────────
-- 확인용
-- SELECT count(*) FROM public.community_posts WHERE author_id IS NULL;   -- 기대: 0
-- SELECT p.name FROM public.projects p
--   LEFT JOIN public.project_members m
--     ON m.project_id = p.id AND m.role = 'owner'
--  WHERE p.user_id IS DISTINCT FROM m.user_id;                            -- 기대: 0 행
