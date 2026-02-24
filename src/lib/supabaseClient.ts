import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || !supabaseKey) {
  // 빌드 시에는 경고만 출력 (throw하면 Vercel 빌드 실패)
  console.warn('[Supabase] 환경변수가 없습니다. .env.local 또는 Vercel 환경변수를 확인해주세요.');
}

export const supabase = createBrowserClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);