-- 014_expense_source_asset.sql
-- 환전으로 자동 생성된 지출을 원본 자산과 묶는다.
--
-- 배경
--   외화로 다른 외화를 살 때(달러 → 루피아) 두 행이 생긴다.
--     자산  IDR 5,000,000  (krw_cost = null · 원화는 안 나갔으므로)
--     지출  USD 300        (달러 잔액을 깎기 위한 짝)
--
--   그런데 상세보기에서 루피아 자산만 지우면 달러 차감 지출이 그대로 남아
--   달러 잔액이 음수가 된다. 지출 목록은 읽기 전용이라 지울 방법도 없다.
--
-- 조치
--   지출에 출처 자산 id 를 달고 ON DELETE CASCADE 를 건다.
--   자산이 지워지면 짝 지출도 DB 가 알아서 지운다 → 삭제 경로 코드를 건드릴 필요가 없다.
--
--   사용자가 직접 등록한 지출(카드 경비·항공권)은 이 값이 NULL 이라 영향이 없다.

ALTER TABLE public.trip_expenses
    ADD COLUMN IF NOT EXISTS source_asset_id uuid
        REFERENCES public.trip_assets(id) ON DELETE CASCADE;

CREATE INDEX IF NOT EXISTS idx_trip_expenses_source_asset
    ON public.trip_expenses (source_asset_id)
    WHERE source_asset_id IS NOT NULL;

COMMENT ON COLUMN public.trip_expenses.source_asset_id IS
    '환전으로 자동 생성된 지출의 출처 자산. 자산 삭제 시 함께 삭제된다. 직접 등록한 지출은 NULL.';
