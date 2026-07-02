import { createClient, SupabaseClient } from '@supabase/supabase-js';

// service role 을 쓰는 서버 전용 클라이언트. Admin 유틸에서만 import.
let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
    if (_client) return _client;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return null;
    _client = createClient(url, key);
    return _client;
}
