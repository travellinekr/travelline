'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/nav/BottomNav';
import PostDetailView from '@/components/community/PostDetailView';

// 게시글 상세 페이지 — 직접 진입·공유 링크용 껍데기.
// 본문·답변 UI 는 PostDetailView 가 담당하며, 여행보드 안 커뮤니티 모달도 같은 컴포넌트를 쓴다.
export default function CommunityPostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = use(params);
    const router = useRouter();
    const goList = () => router.push('/community');

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <DashboardHeader title="커뮤니티" />
            <PostDetailView postId={postId} onBack={goList} onDeleted={goList} />
            <BottomNav />
        </div>
    );
}
