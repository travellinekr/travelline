// Phase 3 푸시 알림 초기화.
// window.Capacitor.Plugins.PushNotifications 런타임 접근 (Phase 2 useAppUrlOpen 패턴 동일).
// @capacitor/push-notifications import 없음 → Vercel 웹 bundle 무영향.
// 웹 브라우저 / 미네이티브 환경 → 즉시 no-op.

type PermissionState = 'granted' | 'denied' | 'prompt';
type PermissionStatus = { receive: PermissionState };
type RegistrationToken = { value: string };
type NotificationError = { error: unknown };

type PushNotificationsPlugin = {
    requestPermissions: () => Promise<PermissionStatus>;
    register: () => Promise<void>;
    addListener: (
        event: 'registration' | 'registrationError' | 'pushNotificationReceived' | 'pushNotificationActionPerformed',
        cb: (payload: RegistrationToken | NotificationError | unknown) => void,
    ) => Promise<{ remove: () => Promise<void> }>;
    removeAllListeners?: () => Promise<void>;
};

type CapacitorGlobal = {
    isNativePlatform?: () => boolean;
    getPlatform?: () => 'ios' | 'android' | 'web';
    Plugins?: { PushNotifications?: PushNotificationsPlugin };
};

function getPlugin(): PushNotificationsPlugin | null {
    if (typeof window === 'undefined') return null;
    const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
    if (!cap?.isNativePlatform?.()) return null;
    return cap.Plugins?.PushNotifications ?? null;
}

function getPlatform(): 'ios' | 'android' | null {
    if (typeof window === 'undefined') return null;
    const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
    const p = cap?.getPlatform?.();
    return p === 'ios' || p === 'android' ? p : null;
}

/**
 * 로그인 유저에 대해 푸시 등록 + 토큰 서버 저장.
 * accessToken: Supabase 세션 토큰 (Bearer 로 /api/push/register 에 전달).
 * 반복 호출 안전 — 기존 리스너 유지, 서버는 upsert 로 중복 안전.
 */
export async function initPushNotifications(accessToken: string): Promise<void> {
    const plugin = getPlugin();
    const platform = getPlatform();
    if (!plugin || !platform) return; // 웹·미네이티브 no-op

    try {
        const perm = await plugin.requestPermissions();
        if (perm.receive !== 'granted') return; // 유저 거부

        // registration 토큰 수신 리스너 → 서버 저장
        await plugin.addListener('registration', async (payload) => {
            const token = (payload as RegistrationToken)?.value;
            if (!token) return;
            try {
                await fetch('/api/push/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({ token, platform }),
                });
            } catch (e) {
                console.warn('[push] 서버 등록 실패:', e);
            }
        });

        await plugin.addListener('registrationError', (payload) => {
            // Firebase config (google-services.json / GoogleService-Info.plist) 없으면 여기 도달.
            // placeholder 상태에선 정상적으로 실패 — 무시.
            console.warn('[push] registrationError:', (payload as NotificationError)?.error);
        });

        await plugin.register();
    } catch (e) {
        console.warn('[push] 초기화 예외:', e);
    }
}
