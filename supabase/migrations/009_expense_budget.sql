-- ============================================================
-- 경비 2차 — 총예상경비 테이블 추가 + day_no 컬럼 제거
-- Supabase 대시보드 > SQL Editor 에서 실행하세요. (008 실행 이후)
-- ============================================================

-- ── 1. day_no 제거 ──────────────────────────────────────────
-- 카드는 일차 사이를 자유롭게 이동한다(moveCard 는 id 를 유지한 채 컬럼만 바꿈).
-- 등록 시점의 일차를 저장해 두면 카드를 옮긴 순간 틀린 값이 된다.
-- → 일차는 저장하지 않고, 화면에 그릴 때 Liveblocks columns 에서 card_id 위치를 읽어 계산한다.
--   (카드가 삭제된 경우에만 card_name 스냅샷으로 "삭제된 카드"로 표시)
ALTER TABLE public.trip_expenses DROP COLUMN IF EXISTS day_no;


-- ── 2. trip_budget — 프로젝트당 총예상경비(목표 예산) ───────
-- projects 테이블에 컬럼을 붙이지 않는 이유: projects 는 RLS SELECT 가 USING(true) 라
-- 전체 공개다. 예산 금액이 외부에 노출되므로 경비와 동일한 멤버 전용 RLS 를 태운다.
CREATE TABLE IF NOT EXISTS public.trip_budget (
    project_id  uuid PRIMARY KEY REFERENCES public.projects(id) ON DELETE CASCADE,
    amount_krw  numeric(18, 4) NOT NULL CHECK (amount_krw >= 0),  -- 총예상경비 (원화)
    updated_by  uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at  timestamptz NOT NULL DEFAULT now(),
    updated_at  timestamptz NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS trg_trip_budget_updated_at ON public.trip_budget;
CREATE TRIGGER trg_trip_budget_updated_at
    BEFORE UPDATE ON public.trip_budget
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.trip_budget ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "trip_budget_select" ON public.trip_budget;
CREATE POLICY "trip_budget_select" ON public.trip_budget
    FOR SELECT USING (public.can_read_project(project_id));

DROP POLICY IF EXISTS "trip_budget_insert" ON public.trip_budget;
CREATE POLICY "trip_budget_insert" ON public.trip_budget
    FOR INSERT WITH CHECK (public.can_write_project(project_id));

DROP POLICY IF EXISTS "trip_budget_update" ON public.trip_budget;
CREATE POLICY "trip_budget_update" ON public.trip_budget
    FOR UPDATE USING (public.can_write_project(project_id))
            WITH CHECK (public.can_write_project(project_id));

DROP POLICY IF EXISTS "trip_budget_delete" ON public.trip_budget;
CREATE POLICY "trip_budget_delete" ON public.trip_budget
    FOR DELETE USING (public.can_write_project(project_id));


-- ============================================================
-- 3. 집계 규칙 메모 — 화면 계산식 (환율 미사용)
-- ============================================================
--
-- ① 총사용한경비 (원화) — "원화가 지갑에서 나간 시점"만 센다.
--    = trip_assets.krw_cost 합계            (환전에 쓴 원화 + 트래블카드 충전액)
--    + currency='KRW' 인 trip_expenses 합계  (신용카드 등 원화 결제)
--    ※ 현지통화 지출은 환전 시점에 이미 원화로 계산되었으므로 제외(중복 방지).
--      따라서 환율 환산이 전혀 필요 없다.
--
-- ② 잔액 — 통화별로 각자 차감. 서로 다른 통화는 절대 섞지 않는다.
--    잔액(c, t) = SUM(trip_assets.amount   WHERE currency=c AND asset_type=t)
--               - SUM(trip_expenses.amount WHERE currency=c AND payment_type=t)
--    ※ credit_card 는 대응 자산이 없어 잔액에 나타나지 않는다(후불).
--
-- ③ 총예상경비 — trip_budget.amount_krw (프로젝트당 1행)
--
-- 확인 쿼리 ────────────────────────────────────────────────
-- 총사용한경비
-- SELECT
--   (SELECT COALESCE(SUM(krw_cost),0) FROM public.trip_assets   WHERE project_id = '<PID>')
-- + (SELECT COALESCE(SUM(amount),0)   FROM public.trip_expenses WHERE project_id = '<PID>' AND currency = 'KRW')
--   AS 총사용한경비_원화;
--
-- 통화·수단별 잔액
-- SELECT currency, asset_type,
--        SUM(amount) FILTER (WHERE src = 'asset')   AS 자산,
--        SUM(amount) FILTER (WHERE src = 'expense') AS 지출,
--        SUM(CASE WHEN src = 'asset' THEN amount ELSE -amount END) AS 잔액
--   FROM (
--     SELECT currency, asset_type,   amount, 'asset'   AS src FROM public.trip_assets   WHERE project_id = '<PID>'
--     UNION ALL
--     SELECT currency, payment_type, amount, 'expense' AS src FROM public.trip_expenses WHERE project_id = '<PID>'
--   ) u
--  GROUP BY currency, asset_type
--  ORDER BY currency;
