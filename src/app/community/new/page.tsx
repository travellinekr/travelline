'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// 글쓰기는 목록 위 팝업(PostEditorModal) 으로 통합됐다.
// 이 경로는 예전 링크(로그인 복귀 주소, 즐겨찾기) 를 위해 남겨둔 리다이렉트 전용 페이지.
// → /community?type=...&write=1 로 보내면 목록이 뜨면서 글쓰기 팝업이 열린다.
function NewPostRedirect() {
    const router = useRouter();
    const search = useSearchParams();

    useEffect(() => {
        const qs = new URLSearchParams({ write: '1' });
        const type = search.get('type');
        const city = search.get('city');
        const from = search.get('from');
        if (type) qs.set('type', type);
        if (city) qs.set('city', city);
        if (from) qs.set('from', from);
        router.replace(`/community?${qs.toString()}`);
    }, [router, search]);

    return <div className="min-h-screen flex items-center justify-center text-sm text-slate-400">이동 중...</div>;
}

export default function NewPostPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-slate-400">불러오는 중...</div>}>
            <NewPostRedirect />
        </Suspense>
    );
}
