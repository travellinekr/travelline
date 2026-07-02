import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { timingSafeEqual } from 'crypto';

// ADMIN_EMAILS: 콤마 구분 (예: "hadesdos@gmail.com,other@example.com")
// ADMIN_API_TOKEN: 서버간 통신용 Bearer 토큰. AI 에이전트가 브리핑용으로 사용.
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN || '';

export function isAdminEmail(email: string | null | undefined): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}

// 타이밍 공격 방지 비교
function safeCompare(a: string, b: string): boolean {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return timingSafeEqual(bufA, bufB);
}

function extractBearer(request: NextRequest): string | null {
    const auth = request.headers.get('Authorization') || '';
    const prefix = 'Bearer ';
    if (!auth.startsWith(prefix)) return null;
    return auth.slice(prefix.length);
}

// AI 전용: ADMIN_API_TOKEN 과 일치 여부만 검증.
export function verifyBearerToken(request: NextRequest): boolean {
    if (!ADMIN_API_TOKEN) return false;
    const token = extractBearer(request);
    if (!token) return false;
    return safeCompare(token, ADMIN_API_TOKEN);
}

// UI 세션 전용: Supabase access token → 사용자 → email 관리자 확인.
export async function verifyAdminSessionByToken(accessToken: string | undefined | null): Promise<{ email: string } | null> {
    if (!accessToken) return null;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return null;
    const admin = createClient(url, key);
    const { data, error } = await admin.auth.getUser(accessToken);
    if (error || !data.user?.email) return null;
    if (!isAdminEmail(data.user.email)) return null;
    return { email: data.user.email };
}

// UI + AI 통합 검증. AI 토큰이 먼저 시도되고, 실패 시 사용자 세션 검증.
// 반환: { source: 'ai' | 'user', email?: string } | null
export async function verifyAdminAccess(request: NextRequest): Promise<{ source: 'ai' | 'user'; email?: string } | null> {
    if (verifyBearerToken(request)) {
        return { source: 'ai' };
    }
    const token = extractBearer(request);
    const session = await verifyAdminSessionByToken(token);
    if (session) return { source: 'user', email: session.email };
    return null;
}
