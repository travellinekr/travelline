// Phase 4 네이티브 카메라 wrapper.
// window.Capacitor.Plugins.Camera 런타임 접근 (Phase 2 useAppUrlOpen · Phase 3 pushNotifications 와 동일 패턴).
// @capacitor/camera import 없음 → Vercel 웹 bundle 무영향.
// 웹 브라우저 · 미네이티브 환경 → isNativeCameraAvailable() 이 false → 호출부는 기존 <input> 폴백.
//
// 기존 웹 로직·기능 100% 유지 — 이 파일은 순수 additive.

type CameraSource = 'CAMERA' | 'PHOTOS' | 'PROMPT';
type CameraResultType = 'base64' | 'uri' | 'dataUrl';

type CameraPhoto = {
    base64String?: string;
    format: string;      // 'jpeg' | 'png' | ...
    exif?: unknown;
};

type CameraPlugin = {
    getPhoto: (opts: {
        quality?: number;
        allowEditing?: boolean;
        source?: CameraSource;
        resultType: CameraResultType;
        saveToGallery?: boolean;
        width?: number;
        height?: number;
    }) => Promise<CameraPhoto>;
};

type CapacitorGlobal = {
    isNativePlatform?: () => boolean;
    Plugins?: { Camera?: CameraPlugin };
};

function getPlugin(): CameraPlugin | null {
    if (typeof window === 'undefined') return null;
    const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
    if (!cap?.isNativePlatform?.()) return null;
    return cap.Plugins?.Camera ?? null;
}

export function isNativeCameraAvailable(): boolean {
    return getPlugin() !== null;
}

// base64 → Blob → File 변환 (기존 uploadPhoto 로직 재사용).
function base64ToFile(base64: string, mimeType: string, filename: string): File {
    const byteChars = atob(base64);
    const byteNums = new Array<number>(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteNums[i] = byteChars.charCodeAt(i);
    const byteArr = new Uint8Array(byteNums);
    return new File([byteArr], filename, { type: mimeType });
}

/**
 * 네이티브 카메라·갤러리 실행.
 * - mode='camera': 카메라 촬영
 * - mode='library': 사진 라이브러리 선택
 * 성공 시 File 반환. 유저 취소·권한 거부·플러그인 미존재 시 null → 호출부가 기존 <input> 폴백 처리 (또는 no-op).
 */
export async function captureNativePhoto(mode: 'camera' | 'library'): Promise<File | null> {
    const plugin = getPlugin();
    if (!plugin) return null;

    try {
        const result = await plugin.getPhoto({
            source: mode === 'camera' ? 'CAMERA' : 'PHOTOS',
            resultType: 'base64',
            quality: 90,
            allowEditing: false,
            saveToGallery: false,
        });
        if (!result?.base64String) return null;

        const format = (result.format || 'jpeg').toLowerCase();
        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const ext = format === 'png' ? 'png' : 'jpg';
        return base64ToFile(result.base64String, mimeType, `photo.${ext}`);
    } catch (e) {
        // 유저 취소 · 권한 거부 · Capacitor 오류 모두 여기로. 조용히 null.
        console.warn('[camera] captureNativePhoto:', e);
        return null;
    }
}
