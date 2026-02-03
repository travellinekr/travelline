// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 🛑 디버깅용 로그 (확인 후 지울 겁니다)
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key Exists:", !!supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase 환경변수가 없습니다! .env.local 파일을 확인해주세요.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);