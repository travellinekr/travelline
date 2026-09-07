-- 020_project_paid_plan.sql
-- 여행계획(프로젝트) 단위 유료 상태.
--
-- 상품: 1,990원 결제 시 ①광고 제거 ②사진 원본 3년 보관 (무료는 여행종료 +14일)
--
-- 판정은 단 한 줄이다:
--     now() > paid_until  →  무료 (광고 노출)
--
-- 왜 boolean 플래그가 아니라 시각인가:
--   혜택이 3년짜리라 만료가 있다. 플래그면 3년 뒤 누가 꺼줘야 하는데 그 시점을 놓치면
--   무료 사용자가 계속 혜택을 받는다. 시각이면 아무도 안 건드려도 만료가 저절로 온다.
--
-- 왜 NULL 이 아니라 센티널(2000-01-01) 인가:
--   NULL 이면 `paid_until < now()` 같은 조건에서 그 행이 통째로 빠진다(SQL 3값 논리).
--   무료 프로젝트를 찾는 배치가 "결제한 적 없는 프로젝트"를 놓치는 사고가 난다.
--   NOT NULL + 과거 기본값으로 두면 모든 행이 같은 규칙 하나로 판정된다.
--
-- DEFAULT 를 걸어두므로 신규 프로젝트는 애플리케이션이 아무것도 하지 않아도 무료로 시작한다.
-- (기존 행도 이 ALTER 로 한꺼번에 채워진다)

ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS paid_until timestamptz NOT NULL
  DEFAULT '2000-01-01T00:00:00Z';

COMMENT ON COLUMN public.projects.paid_until IS
  '유료 혜택 만료 시각. 기본값 2000-01-01(무료). now() > paid_until 이면 광고 노출 + 사진은 여행종료+14일 보관.';

-- 유효한 유료 프로젝트만 담는 부분 인덱스.
-- 대부분의 행이 센티널이라 인덱스가 작게 유지된다.
CREATE INDEX IF NOT EXISTS idx_projects_paid_until_active
  ON public.projects (paid_until)
  WHERE paid_until > '2000-01-01T00:00:00Z';

-- 결제가 붙기 전까지는 수동으로 켠다:
--   UPDATE public.projects SET paid_until = now() + interval '3 years' WHERE id = '<project-id>';
-- 무료로 되돌리기:
--   UPDATE public.projects SET paid_until = '2000-01-01T00:00:00Z' WHERE id = '<project-id>';
