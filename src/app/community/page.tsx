'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/nav/BottomNav';
import CommunityBrowser from '@/components/community/CommunityBrowser';
import { ALL_BOARD_TYPES, type BoardType } from '@/components/community/types';
import { useAuth } from '@/hooks/useAuth';

// 커뮤니티 목록 페이지 — 탭·필터를 URL 로 관리하는 껍데기.
// 목록 UI 는 CommunityBrowser 가 담당하며, 여행보드 안 커뮤니티 모달도 같은 컴포넌트를 쓴다.
function CommunityPageInner() {
    const router = useRouter();
    const search = useSearchParams();
    const { user, loading: authLoading } = useAuth();
    const typeParam = search.get('type');
    const cityFilter = search.get('city') || '';
    const countryFilter = search.get('country') || '';

    // ?type 없거나 유효하지 않으면 기본 탭(해외안전정보) 로 URL 교체 — city/country 는 유지
    useEffect(() => {
        if (!typeParam || !ALL_BOARD_TYPES.includes(typeParam as BoardType)) {
            const qs = new URLSearchParams({ type: 'notice' });
            if (cityFilter) qs.set('city', cityFilter);
            if (countryFilter) qs.set('country', countryFilter);
            router.replace(`/community?${qs.toString()}`);
        }
    }, [typeParam, router, cityFilter, countryFilter]);

    const activeTab: BoardType = (typeParam && ALL_BOARD_TYPES.includes(typeParam as BoardType)) ? (typeParam as BoardType) : 'notice';
    const isInquiryTab = activeTab === 'inquiry';

    // inquiry 는 로그인 필수 — 비로그인 시 로그인 페이지로 유도
    useEffect(() => {
        if (isInquiryTab && !authLoading && !user) {
            router.push('/login?redirect=' + encodeURIComponent('/community?type=inquiry'));
        }
    }, [isInquiryTab, authLoading, user, router]);

    const buildUrl = (tab: BoardType, city: string, country: string) => {
        const qs = new URLSearchParams({ type: tab });
        if (city) qs.set('city', city);
        if (country) qs.set('country', country);
        return `/community?${qs.toString()}`;
    };

    // 드롭다운 — notice 는 나라, 그 외는 도시
    const handleLocationChange = (value: string) => {
        router.push(activeTab === 'notice'
            ? buildUrl(activeTab, '', value)
            : buildUrl(activeTab, value, ''));
    };

    // 비로그인 상태로 글쓰기 → 로그인 후 이 목록으로 돌아와 팝업이 다시 열리도록 write=1 부착
    const handleRequireLogin = () => {
        const qs = new URLSearchParams({ type: activeTab, write: '1' });
        if (cityFilter) qs.set('city', cityFilter);
        router.push('/login?redirect=' + encodeURIComponent(`/community?${qs.toString()}`));
    };

    // ?write=1 로 들어오면 글쓰기 팝업 자동 오픈 → 파라미터 제거
    const wantWrite = search.get('write') === '1';
    const clearWriteParam = () => {
        const qs = new URLSearchParams(search.toString());
        qs.delete('write');
        router.replace(`/community?${qs.toString()}`, { scroll: false });
    };

    const pageTitle = isInquiryTab ? '문의&요청' : '커뮤니티';

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <DashboardHeader title={pageTitle} />
            <CommunityBrowser
                activeTab={activeTab}
                cityFilter={cityFilter}
                countryFilter={countryFilter}
                onTabChange={(tab) => router.push(buildUrl(tab, cityFilter, countryFilter))}
                onLocationChange={handleLocationChange}
                onClearFilter={() => router.push(buildUrl(activeTab, '', ''))}
                postHref={(postId) => `/community/${postId}`}
                onRequireLogin={handleRequireLogin}
                autoOpenWrite={wantWrite}
                onWriteAutoOpened={clearWriteParam}
            />
            <BottomNav />
        </div>
    );
}

export default function CommunityPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-slate-400">불러오는 중...</div>}>
            <CommunityPageInner />
        </Suspense>
    );
}
