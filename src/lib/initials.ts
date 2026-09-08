/**
 * 아바타 원 안에 넣을 이니셜.
 *
 * 헤더 뱃지는 메인·가이드·커뮤니티(DashboardHeader)와 여행보드(UserAvatarMenu)
 * 두 곳에서 그려진다. 같은 로직을 각자 들고 있으면 한쪽만 고쳤을 때 어긋나므로
 * 여기 한 곳에 둔다.
 *
 * 한글을 두 글자로 뽑는 이유:
 *   영문 이름은 띄어쓰기가 있어 "John Smith" → "JS" 로 두 글자가 나오는데,
 *   한글 이름은 붙여 쓰므로 "홍길동" → "홍" 한 글자만 나왔다. 같은 뱃지 안에서
 *   글자 수가 들쭉날쭉해 보였다.
 *
 * 한글은 전각이라 두 글자면 글자 크기의 두 배를 차지한다. 자리가 빠듯한 쪽은 한글이다.
 *
 *   헤더 뱃지  32px · 14px → 28px  (로고 32px 에 맞춘 크기라 여유가 2px 씩뿐)
 *   팝업 아바타 40px · 16px → 32px
 *
 * 테두리를 두르면 안쪽이 그만큼 더 좁아지므로 헤더 뱃지에는 두지 않는다.
 */
export function getAvatarInitials(name?: string | null, email?: string | null): string {
    const n = (name ?? '').trim();
    if (n) {
        if (/^[가-힣]/.test(n)) return n.slice(0, 2);
        const parts = n.split(' ').filter(Boolean);
        if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
        return n[0].toUpperCase();
    }
    const e = (email ?? '').trim();
    return e ? e[0].toUpperCase() : '?';
}
