// Firebase Cloud Messaging 서버 발송 wrapper (Phase 3).
// FIREBASE_SERVICE_ACCOUNT_JSON env 없으면 sendPushToUsers 를 no-op 처리 → placeholder 상태 안전.
// Env 등록 후 자동으로 실제 발송 활성.
//
// 서버 전용 파일. Next.js `serverExternalPackages` 에 'firebase-admin' 이 있어 클라 번들 미포함.

import { App, cert, getApps, initializeApp } from 'firebase-admin/app';
import { getMessaging, Message } from 'firebase-admin/messaging';
import { createClient } from '@supabase/supabase-js';

let cachedApp: App | null = null;
let initAttempted = false;

// 콜드 스타트마다 한 번만 초기화 시도 (성공/실패 모두 캐시).
function getFirebaseApp(): App | null {
    if (initAttempted) return cachedApp;
    initAttempted = true;

    const jsonRaw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    if (!jsonRaw) {
        console.warn('[fcm] FIREBASE_SERVICE_ACCOUNT_JSON env 미설정 — push 발송 skip.');
        return null;
    }

    try {
        // 기존 앱 인스턴스가 있으면 재사용 (같은 Lambda 컨테이너 안 재호출 대비).
        const existing = getApps()[0];
        if (existing) {
            cachedApp = existing;
            return cachedApp;
        }

        const serviceAccount = JSON.parse(jsonRaw);
        cachedApp = initializeApp({
            credential: cert(serviceAccount),
        });
        return cachedApp;
    } catch (e) {
        console.error('[fcm] initializeApp 실패:', e);
        return null;
    }
}

export type PushPayload = {
    title: string;
    body: string;
    data?: Record<string, string>;  // 딥링크 · 프로젝트 ID 등 클라 라우팅 데이터
};

// 대상 유저들의 모든 활성 토큰으로 발송. 개별 토큰 실패는 로그만.
// Firebase env 없으면 즉시 no-op (개발·placeholder 환경 안전).
export async function sendPushToUsers(userIds: string[], payload: PushPayload): Promise<{ sent: number; failed: number }> {
    if (userIds.length === 0) return { sent: 0, failed: 0 };

    const app = getFirebaseApp();
    if (!app) return { sent: 0, failed: 0 };

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
        console.warn('[fcm] Supabase env 미설정 — 토큰 조회 불가.');
        return { sent: 0, failed: 0 };
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const { data: tokens, error } = await supabaseAdmin
        .from('push_tokens')
        .select('token, platform')
        .in('user_id', userIds);

    if (error) {
        console.error('[fcm] push_tokens 조회 실패:', error.message);
        return { sent: 0, failed: 0 };
    }
    if (!tokens || tokens.length === 0) return { sent: 0, failed: 0 };

    const messaging = getMessaging(app);
    let sent = 0;
    let failed = 0;
    const invalidTokens: string[] = [];

    await Promise.all(tokens.map(async (t: { token: string; platform: string }) => {
        const message: Message = {
            token: t.token,
            notification: { title: payload.title, body: payload.body },
            data: payload.data ?? {},
            apns: {
                payload: {
                    aps: { sound: 'default', badge: 1 },
                },
            },
            android: {
                priority: 'high',
                notification: { sound: 'default' },
            },
        };
        try {
            await messaging.send(message);
            sent++;
        } catch (e: unknown) {
            failed++;
            const code = (e as { code?: string })?.code;
            // 만료·삭제된 토큰은 DB 에서 정리
            if (code === 'messaging/registration-token-not-registered' || code === 'messaging/invalid-registration-token') {
                invalidTokens.push(t.token);
            } else {
                console.error('[fcm] send 실패:', code || e);
            }
        }
    }));

    if (invalidTokens.length > 0) {
        await supabaseAdmin.from('push_tokens').delete().in('token', invalidTokens);
    }

    return { sent, failed };
}
