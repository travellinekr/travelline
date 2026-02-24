import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('[Supabase] 환경변수가 없습니다. .env.local 또는 Vercel 환경변수를 확인해주세요.');
}

// createBrowserClient(@supabase/ssr) 대신 createClient 사용
// → @supabase/ssr은 내부적으로 useSearchParams를 호출해 Vercel 빌드 오류 발생
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);