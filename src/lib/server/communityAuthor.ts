// 커뮤니티 응답에서 작성자 표시명을 만든다.
//
// 배경: 화면은 이메일의 @ 앞부분만 쓰는데 API 는 전체 이메일을 그대로 내려보내고 있었다.
//       목록 API 는 인증도 필요 없어서 누구나 회원 이메일을 수집할 수 있었다.
//       → 서버 경계에서 잘라 보내고, author_email 은 응답에 아예 싣지 않는다.
//
// DB 쪽도 018 마이그레이션에서 anon/authenticated 의 author_email 컬럼 읽기 권한을 회수했다.
// (앱은 전부 service role 로 읽으므로 영향 없음)

export function toDisplayName(email: string | null | undefined): string {
    if (!email) return '사용자';
    const name = email.split('@')[0].trim();
    return name || '사용자';
}

// author_email 을 제거하고 author_name 을 붙인 객체를 반환한다.
export function withAuthorName<T extends Record<string, any>>(row: T) {
    const { author_email, ...rest } = row;
    return { ...rest, author_name: toDisplayName(author_email) };
}
