// 외부 URL 열기 통합 유틸.
// - Capacitor 네이티브 앱: @capacitor/browser 의 Browser.open (시스템 브라우저 SFSafariView / Custom Tabs)
// - 웹: window.open 새 탭
//
// target="_blank" 만으로는 Capacitor WebView 에서 앱 이탈이 보장되지 않음 → 클릭 시 이 함수 호출 권장.
export async function openExternal(url: string): Promise<void> {
    if (!url) return;
    const cap = typeof window !== 'undefined' ? (window as any).Capacitor : undefined;
    const isNative = !!cap?.isNativePlatform?.();
    const Browser = cap?.Plugins?.Browser;
    if (isNative && Browser?.open) {
        try {
            await Browser.open({ url });
            return;
        } catch (e) {
            console.warn('[openExternal] Browser.open 실패, window.open 폴백', e);
        }
    }
    window.open(url, '_blank', 'noopener,noreferrer');
}
