-- 011_expense_drop_unused.sql
-- 경비 기능 구현이 끝난 뒤, 실제로 쓰이지 않는 컬럼을 정리한다.
--
-- ⚠️ 실행 전에 코드가 먼저 배포되어 있어야 한다.
--    PostgREST 의 select 목록에 컬럼명이 남아 있으면 42703 으로 API 전체가 실패한다.
--    (해당 코드는 이미 제거됨 — expenses/assets 라우트의 select·insert 목록, useExpenses 타입)
--
-- 지우는 것
--   trip_expenses.spent_on — 실제 지출일. UI 에 입력 자리를 두지 않았고 API 도 항상 null 을 넣었다.
--                            지출 시점은 카드가 놓인 일차로 표현하므로 별도 날짜가 필요 없었다.
--   trip_assets.memo       — "공항 환전소" 같은 메모. 상세보기 폼에 자리를 만들지 않아 항상 null.
--
-- 남기는 것 (지우지 말 것)
--   trip_expenses.payer_id — N빵 정산용. 지금은 안 쓰지만 나중에 붙일 때 과거 데이터가
--                            비어 있으면 소급이 불가능하므로 자리를 유지한다.
--   created_by / updated_by — 누가 넣고 고쳤는지에 대한 추적. 화면에 안 띄울 뿐 값은 쌓인다.
--
-- 되돌리려면
--   ALTER TABLE public.trip_expenses ADD COLUMN spent_on date;
--   ALTER TABLE public.trip_assets   ADD COLUMN memo text;
--   (값은 복구되지 않는다. 현재 두 컬럼 모두 전 행이 null 이라 손실은 없다)

ALTER TABLE public.trip_expenses DROP COLUMN IF EXISTS spent_on;
ALTER TABLE public.trip_assets   DROP COLUMN IF EXISTS memo;
