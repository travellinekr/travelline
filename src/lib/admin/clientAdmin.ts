// 클라이언트에서 "관리자 UI 를 보여줄지" 판단하는 용도.
//
// 실제 권한은 서버가 ADMIN_EMAILS(비공개 env)로 다시 검사한다(src/lib/admin/auth.ts).
// 여기 목록은 버튼·메뉴 노출만 결정하므로 공개돼도 무방하다.
//
// 이전에는 AdminGuard 와 커뮤니티 화면에 각각 하드코딩돼 있어, 관리자를 늘릴 때
// 한쪽만 고치면 어긋났다. 한 곳으로 모으고 env 로 덮어쓸 수 있게 한다.
//
// NEXT_PUBLIC_ADMIN_EMAILS 를 설정하지 않으면 아래 기본값을 쓴다.
// (Vercel 에 env 를 빠뜨려도 관리자 화면이 잠기지 않도록 하는 안전장치)
const FALLBACK_ADMIN_EMAILS = ['travelline.kr@gmail.com', 'hadesdos@gmail.com'];

const CLIENT_ADMIN_EMAILS = (() => {
    const raw = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.trim();
    if (!raw) return FALLBACK_ADMIN_EMAILS;
    const parsed = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    return parsed.length > 0 ? parsed : FALLBACK_ADMIN_EMAILS;
})();

export function isClientAdmin(email: string | null | undefined): boolean {
    if (!email) return false;
    return CLIENT_ADMIN_EMAILS.includes(email.toLowerCase());
}
