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
 * 아바타는 네 곳(메인·보드 × 헤더 뱃지·팝업)에 있고 전부 32px · 14px 로 같다.
 * 헤더 뱃지를 옆의 로고(32px)에 맞춘 크기이고, 팝업도 같은 사람의 같은 원이라 맞춘다.
 *
 * 한글은 전각이라 두 글자면 14px × 2 = 28px — 32px 안에서 좌우 2px 씩만 남는다.
 * 더 키우면 원 밖으로 나가고 더 줄이면 읽기 나빠져, 32px 에서는 이 조합이 한계다.
 * 테두리를 두르면 안쪽이 그만큼 더 좁아지므로 두지 않는다.
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
