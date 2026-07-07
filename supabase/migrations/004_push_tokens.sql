-- Phase 3 푸시 알림 — FCM 토큰 저장 테이블.
-- Capacitor 네이티브 앱이 registrationToken 이벤트로 받은 FCM 토큰을
-- POST /api/push/register 로 전송하면 여기 upsert.
-- 알림 발송 시 user_id → tokens 조회 → firebase-admin SDK 로 다중 발송.

CREATE TABLE IF NOT EXISTS public.push_tokens (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    token text UNIQUE NOT NULL,                       -- FCM registration token
    platform text NOT NULL CHECK (platform IN ('ios', 'android')),
    device_id text,                                    -- Capacitor Device.getId() (선택, 재발급 감지)
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_push_tokens_user ON public.push_tokens (user_id);
CREATE INDEX IF NOT EXISTS idx_push_tokens_platform ON public.push_tokens (platform);

-- 사용자 face 코드는 접근 불가 (RLS 서비스 롤 온리).
-- 클라이언트는 POST /api/push/register 만 사용, 서버는 SUPABASE_SERVICE_ROLE_KEY 로 접근.
ALTER TABLE public.push_tokens ENABLE ROW LEVEL SECURITY;
