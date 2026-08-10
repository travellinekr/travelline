import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('[Supabase] 환경변수가 없습니다. .env.local 또는 Vercel 환경변수를 확인해주세요.');
}

// createBrowserClient(@supabase/ssr) 대신 createClient 사용
// → @supabase/ssr은 내부적으로 useSearchParams를 호출해 Vercel 빌드 오류 발생

// -------------------------------------------------------------------------
// Refresh-token 자체 백오프
// -------------------------------------------------------------------------
// 배경: navigator.onLine=true 인데 특정 도메인(supabase.co) DNS/네트워크만 실패하는
// 상황(회사 방화벽/VPN/일시적 DNS 장애 등)에서, Supabase 라이브러리 스케줄러가
// 계속 refresh_token 을 재시도하여 콘솔·네트워크 로그가 폭발.
// useOnlineStatus 기반 stopAutoRefresh 는 이 케이스를 감지 못 함.
//
// 해결: createClient({ global: { fetch } }) 로 커스텀 fetch 주입.
//   - refresh_token URL 요청만 fail streak 카운트
//   - 3회 연속 실패 → 이후 30초간 실제 fetch 스킵 (즉시 reject)
//   - 성공 응답 오면 streak 리셋
// SSR 은 auto-refresh 스케줄러가 fire 하지 않아 mute 로직은 브라우저에서만 실제 트리거됨.
const REFRESH_URL_KEY = '/auth/v1/token';
const FAIL_THRESHOLD = 3;
const MUTE_MS = 30_000;
let refreshFailStreak = 0;
let refreshMuteUntil = 0;

const requestUrl = (input: RequestInfo | URL): string => {
  if (typeof input === 'string') return input;
  if (input instanceof URL) return input.href;
  return input.url;
};

const customFetch: typeof fetch = async (input, init) => {
  const url = requestUrl(input);
  const isRefresh = url.includes(REFRESH_URL_KEY);
  if (isRefresh && Date.now() < refreshMuteUntil) {
    // Mute 중 → 실제 네트워크 요청 안 나감. Supabase 는 이 실패를 짧게 로깅만 하고 다음 스케줄 대기.
    throw new TypeError('Supabase refresh temporarily muted (network backoff)');
  }
  try {
    const res = await fetch(input, init);
    if (isRefresh && res.ok) refreshFailStreak = 0;
    return res;
  } catch (e) {
    if (isRefresh) {
      refreshFailStreak++;
      if (refreshFailStreak >= FAIL_THRESHOLD) {
        refreshMuteUntil = Date.now() + MUTE_MS;
        // eslint-disable-next-line no-console
        console.warn(`[Supabase] refresh 연속 ${refreshFailStreak}회 실패 → ${MUTE_MS / 1000}초간 자동 재시도 중단`);
      }
    }
    throw e;
  }
};

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key',
  { global: { fetch: customFetch } }
);
