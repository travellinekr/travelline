-- 010_expense_krw_amount.sql
-- 신용카드 해외결제의 원화 환산액을 지출 등록 시점에 박제한다.
--
-- 배경
--   해외 카드결제의 최종 청구액은 브랜드사(비자/마스터) 수수료 + 카드사 해외이용
--   수수료 + 매입 시점 환율이 겹쳐 결제 순간에는 알 수 없다. 정확한 값을 좇는 대신
--   등록 시점의 당일 환율 + 고정 수수료율로 한 번 환산해 저장하고, 화면에서 "약"으로
--   표시한다(정확도보다 총사용경비를 즉시 볼 수 있는 쪽을 택함).
--
--   조회할 때마다 오늘 환율로 환산하지 않는 이유: 어제 쓴 300바트가 오늘 다른 금액이
--   되어 총사용경비가 매일 흔들린다. 그래서 값을 컬럼에 고정한다.
--
--   적용 환율은 krw_amount / amount 로 역산되므로 따로 저장하지 않는다.
--
-- 채워지는 조건 (src/app/api/projects/[projectId]/expenses/route.ts)
--   payment_type = 'credit_card' AND currency <> 'KRW'  → 환산값
--   그 외                                                → NULL
--   환율 조회 실패                                        → NULL (등록은 그대로 성공)
--
-- 총사용한경비 = trip_assets.krw_cost 합               (환전·충전에 쓴 원화)
--              + 신용카드 원화 지출 amount 합           (항공·호텔 등)
--              + 신용카드 외화 지출 krw_amount 합       (이 컬럼)
--   현금·트래블카드 지출은 제외한다. 환전 시점에 이미 원화가 나간 것으로 셌기 때문.

ALTER TABLE public.trip_expenses
    ADD COLUMN IF NOT EXISTS krw_amount numeric(18,4);

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'trip_expenses_krw_amount_check'
    ) THEN
        ALTER TABLE public.trip_expenses
            ADD CONSTRAINT trip_expenses_krw_amount_check
            CHECK (krw_amount IS NULL OR krw_amount >= 0);
    END IF;
END $$;

COMMENT ON COLUMN public.trip_expenses.krw_amount IS
    '신용카드 외화 결제의 원화 환산액(등록 시점 당일환율 + 카드 수수료율 반영, 근사값). 그 외 수단은 NULL.';
