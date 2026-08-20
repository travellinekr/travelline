-- ============================================================
-- 경비 관리 — 자산(trip_assets) + 지출(trip_expenses)
-- Supabase 대시보드 > SQL Editor 에서 실행하세요.
--
-- 설계 메모
--  - 자산 = 여행에 투입한 돈(환전 현금, 트래블카드 충전). 여러 번 환전하면 행이 여러 개.
--  - 지출 = 실제로 쓴 돈. 여행보드 카드에 붙을 수도(card_id) 안 붙을 수도(택시·편의점) 있음.
--  - 잔액 = 같은 (currency, asset_type) 자산 합계 − 같은 (currency, payment_type) 지출 합계.
--    credit_card 는 후불이라 자산이 없고, 따라서 잔액 계산에서 자연히 제외됨.
--  - card_id 는 Liveblocks Card.id (파일/JSON 측) 이라 FK 를 걸 수 없다. photos 테이블과 동일한 패턴.
--    카드가 삭제돼도 화면이 "금액만 있고 정체 불명"이 되지 않도록 card_name/card_category/day_no 를 스냅샷으로 함께 저장한다.
--  - 코드값(asset_type/payment_type)은 src/data/expenseCodes.ts 와 반드시 일치시킬 것.
-- ============================================================

-- ── 공통: updated_at 자동 갱신 함수 ─────────────────────────
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ============================================================
-- 1. trip_assets — 자산(환전·충전)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.trip_assets (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id  uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,

    currency    text NOT NULL CHECK (char_length(currency) = 3),   -- ISO 4217 (KRW, VND, JPY ...)
    asset_type  text NOT NULL CHECK (asset_type IN ('cash', 'travel_card')),
    amount      numeric(18, 4) NOT NULL CHECK (amount >= 0),       -- 해당 통화 기준 금액

    -- 환전 시 지불한 원화. 환율은 건마다 다르므로 행 단위로 보관해야 총경비를 원화로 낼 수 있다.
    -- currency 가 KRW 면 amount 와 같은 값이거나 NULL.
    krw_cost    numeric(18, 4) CHECK (krw_cost IS NULL OR krw_cost >= 0),

    memo        text,                                              -- "공항 환전소", "하나은행" 등
    created_by  uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at  timestamptz NOT NULL DEFAULT now(),
    updated_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_trip_assets_project
    ON public.trip_assets (project_id);

DROP TRIGGER IF EXISTS trg_trip_assets_updated_at ON public.trip_assets;
CREATE TRIGGER trg_trip_assets_updated_at
    BEFORE UPDATE ON public.trip_assets
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ============================================================
-- 2. trip_expenses — 지출
-- ============================================================
CREATE TABLE IF NOT EXISTS public.trip_expenses (
    id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id    uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,

    -- Liveblocks Card.id. FK 없음(카드는 DB 에 없음). 카드에 안 붙는 지출은 NULL.
    card_id       text,
    -- 스냅샷 — 카드가 삭제/변경돼도 지출 내역이 그대로 읽히도록 등록 시점 값을 복사해 둔다.
    card_name     text,
    card_category text,
    -- ⚠️ day_no 는 009 에서 제거됨. 카드가 일차를 옮기면 값이 틀어지기 때문.
    --    일차는 저장하지 않고 화면에서 Liveblocks columns 로 계산한다.
    day_no        integer CHECK (day_no IS NULL OR day_no >= 0),

    spent_on      date,                                            -- 실제 지출일 (선택)
    currency      text NOT NULL CHECK (char_length(currency) = 3),
    payment_type  text NOT NULL CHECK (payment_type IN ('cash', 'travel_card', 'credit_card')),
    amount        numeric(18, 4) NOT NULL CHECK (amount >= 0),

    title         text,                                            -- 카드가 없는 지출의 항목명 ("공항 택시")
    -- 결제자. 지금은 정산 기능이 없지만, 나중에 N빵을 붙일 때 과거 데이터가 비어 있으면
    -- 소급이 불가능하므로 자리만 미리 확보해 둔다.
    payer_id      uuid REFERENCES auth.users(id) ON DELETE SET NULL,

    created_by    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at    timestamptz NOT NULL DEFAULT now(),
    updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_trip_expenses_project
    ON public.trip_expenses (project_id);

-- 카드별 경비 조회 (카드 인포팝업에서 "이 카드에 쓴 돈" 표시용)
CREATE INDEX IF NOT EXISTS idx_trip_expenses_card
    ON public.trip_expenses (project_id, card_id)
    WHERE card_id IS NOT NULL;

DROP TRIGGER IF EXISTS trg_trip_expenses_updated_at ON public.trip_expenses;
CREATE TRIGGER trg_trip_expenses_updated_at
    BEFORE UPDATE ON public.trip_expenses
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ============================================================
-- 3. RLS — 프로젝트 소유자 + project_members 기준
--
--  주의: projects/community 는 SELECT 가 USING(true) 로 전체 공개지만,
--        경비는 금전 정보라 "해당 프로젝트 멤버"로 제한한다.
--        링크만 아는 비로그인 방문자는 보드는 봐도 경비는 볼 수 없음.
--        전체 공개로 바꾸려면 아래 select 정책을 USING (true) 로 교체.
-- ============================================================
ALTER TABLE public.trip_assets   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trip_expenses ENABLE ROW LEVEL SECURITY;

-- 읽기: 프로젝트 소유자 또는 멤버(role 무관 — viewer 도 조회 가능)
CREATE OR REPLACE FUNCTION public.can_read_project(p_project_id uuid)
RETURNS boolean AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.projects
         WHERE id = p_project_id AND user_id = auth.uid()
    ) OR EXISTS (
        SELECT 1 FROM public.project_members
         WHERE project_id = p_project_id AND user_id = auth.uid()
    );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- 쓰기: 프로젝트 소유자 또는 owner/editor 멤버 (viewer 는 불가)
CREATE OR REPLACE FUNCTION public.can_write_project(p_project_id uuid)
RETURNS boolean AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.projects
         WHERE id = p_project_id AND user_id = auth.uid()
    ) OR EXISTS (
        SELECT 1 FROM public.project_members
         WHERE project_id = p_project_id
           AND user_id = auth.uid()
           AND role IN ('owner', 'editor')
    );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ── trip_assets 정책 ────────────────────────────────────────
DROP POLICY IF EXISTS "trip_assets_select" ON public.trip_assets;
CREATE POLICY "trip_assets_select" ON public.trip_assets
    FOR SELECT USING (public.can_read_project(project_id));

DROP POLICY IF EXISTS "trip_assets_insert" ON public.trip_assets;
CREATE POLICY "trip_assets_insert" ON public.trip_assets
    FOR INSERT WITH CHECK (public.can_write_project(project_id) AND auth.uid() = created_by);

DROP POLICY IF EXISTS "trip_assets_update" ON public.trip_assets;
CREATE POLICY "trip_assets_update" ON public.trip_assets
    FOR UPDATE USING (public.can_write_project(project_id))
            WITH CHECK (public.can_write_project(project_id));

DROP POLICY IF EXISTS "trip_assets_delete" ON public.trip_assets;
CREATE POLICY "trip_assets_delete" ON public.trip_assets
    FOR DELETE USING (public.can_write_project(project_id));

-- ── trip_expenses 정책 ──────────────────────────────────────
DROP POLICY IF EXISTS "trip_expenses_select" ON public.trip_expenses;
CREATE POLICY "trip_expenses_select" ON public.trip_expenses
    FOR SELECT USING (public.can_read_project(project_id));

DROP POLICY IF EXISTS "trip_expenses_insert" ON public.trip_expenses;
CREATE POLICY "trip_expenses_insert" ON public.trip_expenses
    FOR INSERT WITH CHECK (public.can_write_project(project_id) AND auth.uid() = created_by);

DROP POLICY IF EXISTS "trip_expenses_update" ON public.trip_expenses;
CREATE POLICY "trip_expenses_update" ON public.trip_expenses
    FOR UPDATE USING (public.can_write_project(project_id))
            WITH CHECK (public.can_write_project(project_id));

DROP POLICY IF EXISTS "trip_expenses_delete" ON public.trip_expenses;
CREATE POLICY "trip_expenses_delete" ON public.trip_expenses
    FOR DELETE USING (public.can_write_project(project_id));


-- ============================================================
-- 4. 확인 쿼리 (실행 후 붙여넣어 검증)
-- ============================================================
-- 통화·수단별 잔액
-- SELECT a.currency, a.asset_type,
--        SUM(a.amount)                                  AS 자산,
--        COALESCE(e.spent, 0)                           AS 지출,
--        SUM(a.amount) - COALESCE(e.spent, 0)           AS 잔액
--   FROM public.trip_assets a
--   LEFT JOIN (
--        SELECT project_id, currency, payment_type, SUM(amount) AS spent
--          FROM public.trip_expenses GROUP BY 1, 2, 3
--   ) e ON e.project_id = a.project_id
--      AND e.currency = a.currency
--      AND e.payment_type = a.asset_type
--  WHERE a.project_id = '<PROJECT_ID>'
--  GROUP BY a.currency, a.asset_type, e.spent;

-- 총 여행경비(원화) — 환전 원가 기준
-- SELECT SUM(COALESCE(krw_cost, CASE WHEN currency = 'KRW' THEN amount ELSE 0 END)) AS 원화_총투입
--   FROM public.trip_assets WHERE project_id = '<PROJECT_ID>';
