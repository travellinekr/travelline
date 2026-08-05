'use client';

import { useEffect, useState, useMemo, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ChevronDown, Check } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/nav/BottomNav';
import { BOARD_TABS, ALL_BOARD_TYPES, type BoardType, type CommunityPost, formatDate, shortAuthor } from '@/components/community/types';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';
import { getAllCityNames, getAllCountryNames } from '@/data/destinations';

function CommunityPageInner() {
    const router = useRouter();
    const search = useSearchParams();
    const { user, loading: authLoading } = useAuth();
    const typeParam = search.get('type');
    // 여행보드(BottomNav) 에서 진입한 경우에만 글쓰기 버튼 노출 + 도시/나라 필터 자동 적용.
    const fromBoard = search.get('from') === 'board';
    const cityFilter = search.get('city') || '';
    const countryFilter = search.get('country') || '';

    // ?type 없거나 유효하지 않으면 기본 탭(해외안전정보) 로 URL 교체 — city/country/from 파라미터는 유지
    useEffect(() => {
        if (!typeParam || !ALL_BOARD_TYPES.includes(typeParam as BoardType)) {
            const qs = new URLSearchParams({ type: 'notice' });
            if (cityFilter) qs.set('city', cityFilter);
            if (countryFilter) qs.set('country', countryFilter);
            if (fromBoard) qs.set('from', 'board');
            router.replace(`/community?${qs.toString()}`);
        }
    }, [typeParam, router, cityFilter, countryFilter, fromBoard]);

    const activeTab: BoardType = (typeParam && ALL_BOARD_TYPES.includes(typeParam as BoardType)) ? (typeParam as BoardType) : 'notice';
    const isInquiryTab = activeTab === 'inquiry';
    const isNoticeTab = activeTab === 'notice';
    // 활성 탭에 따라 실제 서버 필터 선택 — notice 는 나라, 그 외는 도시.
    const activeFilterLabel = isNoticeTab ? countryFilter : cityFilter;

    // Load More 방식 — page 는 로컬 state (URL 미반영). 필터 변경 시 1로 리셋되며 posts 초기화.
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // 검색어 — 로컬 state + debounce 300ms 로 서버 fetch 트리거
    const [searchText, setSearchText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const limit = 20;

    // debounce
    useEffect(() => {
        const t = setTimeout(() => setSearchQuery(searchText.trim()), 300);
        return () => clearTimeout(t);
    }, [searchText]);

    // 탭 전환 시 검색어 초기화 (다른 탭 검색 결과가 남지 않도록)
    useEffect(() => {
        setSearchText('');
        setSearchQuery('');
    }, [activeTab]);

    // 필터/탭/검색어 변경 시 page 를 1 로 리셋 → 아래 fetch useEffect 가 replace 모드로 재실행
    useEffect(() => {
        setPage(1);
    }, [activeTab, cityFilter, countryFilter, searchQuery]);

    // inquiry 는 로그인 필수 — 비로그인 시 로그인 페이지로 유도
    useEffect(() => {
        if (isInquiryTab && !authLoading && !user) {
            router.push('/login?redirect=' + encodeURIComponent('/community?type=inquiry'));
        }
    }, [isInquiryTab, authLoading, user, router]);

    useEffect(() => {
        if (isInquiryTab && !user) return; // 로그인 대기 중 fetch 스킵
        setLoading(true);
        setError(null);
        const qs = new URLSearchParams();
        qs.set('type', activeTab);
        qs.set('page', String(page));
        qs.set('limit', String(limit));
        // notice(해외안전정보) 는 나라 단위 필터, 그 외 탭은 도시 단위.
        if (isNoticeTab) {
            if (countryFilter) qs.set('country', countryFilter);
        } else {
            if (cityFilter) qs.set('city', cityFilter);
        }
        if (searchQuery) qs.set('q', searchQuery);

        (async () => {
            const headers: Record<string, string> = {};
            if (isInquiryTab) {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.access_token) headers.Authorization = `Bearer ${session.access_token}`;
            }
            try {
                const r = await fetch(`/api/community?${qs.toString()}`, { headers });
                const { posts: newPosts, total, error } = await r.json();
                if (error) throw new Error(error);
                setTotal(total ?? 0);
                // Load More: page===1 은 새 필터라 replace, page>1 은 다음 페이지 append
                if (page === 1) {
                    setPosts(newPosts ?? []);
                } else {
                    setPosts(prev => [...prev, ...(newPosts ?? [])]);
                }
            } catch (e: any) {
                setError(e?.message ?? '목록을 불러오지 못했어요.');
            } finally {
                setLoading(false);
            }
        })();
    }, [activeTab, page, isInquiryTab, isNoticeTab, user, cityFilter, countryFilter, searchQuery]);


    // 팝업 모드(fromBoard) 안에서의 탭/필터 조작은 replace 로 히스토리 오염 방지 → "닫기" 한 번에 여행보드 복귀.
    // 일반 모드는 push 로 브라우저 뒤로가기 UX 유지.
    const navigateInternal = (path: string) => fromBoard ? router.replace(path) : router.push(path);

    const handleTabClick = (key: BoardType) => {
        const qs = new URLSearchParams({ type: key });
        if (cityFilter) qs.set('city', cityFilter);
        if (countryFilter) qs.set('country', countryFilter);
        if (fromBoard) qs.set('from', 'board');
        navigateInternal(`/community?${qs.toString()}`);
    };

    // 필터 해제 — 현재 탭 유지, city/country 제거. from=board 는 팝업 모드 유지 위해 보존.
    const handleClearFilter = () => {
        const qs = new URLSearchParams({ type: activeTab });
        if (fromBoard) qs.set('from', 'board');
        navigateInternal(`/community?${qs.toString()}`);
    };

    // 드롭다운 옵션 — 정적 데이터라 한 번만 계산.
    const countryOptions = useMemo(() => getAllCountryNames(), []);
    const cityOptions = useMemo(() => getAllCityNames(), []);

    // 드롭다운 변경 → URL 파라미터 업데이트 (빈 값은 필터 해제)
    const handleLocationChange = (value: string) => {
        const qs = new URLSearchParams({ type: activeTab });
        if (isNoticeTab) {
            if (value) qs.set('country', value);
        } else {
            if (value) qs.set('city', value);
        }
        if (fromBoard) qs.set('from', 'board'); // 팝업 모드 유지
        navigateInternal(`/community?${qs.toString()}`);
    };

    // 커스텀 드롭다운 상태 — 네이티브 <select> 는 모바일에서 OS picker 로 뜨고 5줄 제한 불가. 커스텀으로 통일.
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!dropdownOpen) return;
        const handleOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
        };
        const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setDropdownOpen(false); };
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [dropdownOpen]);
    // 탭 전환 시 열려있는 드롭다운은 닫기
    useEffect(() => { setDropdownOpen(false); }, [activeTab]);

    const currentLocation = isNoticeTab ? countryFilter : cityFilter;
    const currentOptions = isNoticeTab ? countryOptions : cityOptions;
    const dropdownLabel = currentLocation || (isNoticeTab ? '전체 나라' : '전체 도시');

    const handleWriteClick = () => {
        const qs = new URLSearchParams({ type: activeTab });
        // 글쓰기 폼 초기값 — notice 는 나라, 그 외는 도시
        if (isNoticeTab) {
            if (countryFilter) qs.set('country', countryFilter);
        } else {
            if (cityFilter) qs.set('city', cityFilter);
        }
        if (fromBoard) qs.set('from', 'board'); // 팝업 컨텍스트 유지 (뒤로가기 시 팝업 목록 복귀)
        const newPath = `/community/new?${qs.toString()}`;
        if (!user) {
            router.push('/login?redirect=' + encodeURIComponent(newPath));
            return;
        }
        router.push(newPath);
    };

    const pageTitle = isInquiryTab ? '문의&요청' : '커뮤니티';

    const mainContent = (
        <main className={`flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 ${fromBoard ? 'py-4' : 'py-6 md:py-8 pb-24 md:pb-8'}`}>
                {/* 탭 — inquiry 는 상단 nav 로만 진입하므로 탭에서 숨김. 페이지 타이틀은 로고 옆 DashboardHeader title 로 노출 */}
                {!isInquiryTab && (
                    <div className="flex gap-1.5 mb-4 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {BOARD_TABS.map(tab => {
                            const isActive = tab.key === activeTab;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => handleTabClick(tab.key)}
                                    className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* 문의&요청 안내 문구 */}
                {isInquiryTab && (
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        여행 일정에 필요한 숙소·맛집·쇼핑·투어&amp;스파 정보를 문의하거나, 새 카드 등록을 요청하는 게시판이에요.
                    </p>
                )}

                {/* 필터 상태 표기 — notice 는 나라, 그 외는 도시. 여행보드(fromBoard) 진입 시에는 드롭다운이 값을 이미 보여주므로 뱃지 생략 */}
                {!fromBoard && activeFilterLabel && (
                    <div className="mb-3 flex items-center gap-2 text-[11px]">
                        <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 inline-flex items-center gap-1 px-2 py-0.5 rounded-md">
                            <span className="font-semibold">{activeFilterLabel}</span>
                            <span>관련 글만 표시 중</span>
                        </span>
                        <button
                            type="button"
                            onClick={handleClearFilter}
                            className="text-slate-500 hover:text-emerald-600 underline underline-offset-2"
                        >
                            전체 보기
                        </button>
                    </div>
                )}

                {/* 필터바 — [나라/도시 커스텀 드롭다운] + [제목 검색]. 커스텀인 이유: 모바일 앱 네이티브 picker 회피 + 5줄 제한 */}
                <div className="flex items-center gap-2 mb-3">
                    <div ref={dropdownRef} className="shrink-0 relative w-[130px]">
                        <button
                            type="button"
                            onClick={() => setDropdownOpen(o => !o)}
                            aria-haspopup="listbox"
                            aria-expanded={dropdownOpen}
                            aria-label={isNoticeTab ? '나라 필터' : '여행도시 필터'}
                            className="w-full flex items-center justify-between text-sm py-2 pl-2.5 pr-2 border border-slate-200 rounded-lg bg-white outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300 transition-shadow"
                        >
                            <span className={`truncate ${currentLocation ? 'text-slate-700' : 'text-slate-400'}`}>{dropdownLabel}</span>
                            <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {dropdownOpen && (
                            <ul
                                role="listbox"
                                className="absolute z-30 left-0 right-0 top-full mt-1 max-h-[200px] overflow-y-auto bg-white border border-slate-200 rounded-lg shadow-lg py-1"
                            >
                                {/* 전체 옵션 */}
                                <li>
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={!currentLocation}
                                        onClick={() => { handleLocationChange(''); setDropdownOpen(false); }}
                                        className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-slate-50 ${!currentLocation ? 'text-emerald-600 font-medium' : 'text-slate-700'}`}
                                    >
                                        <span>{isNoticeTab ? '전체 나라' : '전체 도시'}</span>
                                        {!currentLocation && <Check className="w-3.5 h-3.5" />}
                                    </button>
                                </li>
                                {/* 현재 필터값이 옵션에 없으면(수동 URL) 상단에 별도 노출해 선택 유지 */}
                                {currentLocation && !currentOptions.includes(currentLocation) && (
                                    <li>
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={true}
                                            onClick={() => setDropdownOpen(false)}
                                            className="w-full flex items-center justify-between px-3 py-2 text-sm text-emerald-600 font-medium bg-emerald-50/60"
                                        >
                                            <span>{currentLocation}</span>
                                            <Check className="w-3.5 h-3.5" />
                                        </button>
                                    </li>
                                )}
                                {currentOptions.map(opt => {
                                    const selected = opt === currentLocation;
                                    return (
                                        <li key={opt}>
                                            <button
                                                type="button"
                                                role="option"
                                                aria-selected={selected}
                                                onClick={() => { handleLocationChange(opt); setDropdownOpen(false); }}
                                                className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-slate-50 ${selected ? 'text-emerald-600 font-medium bg-emerald-50/60' : 'text-slate-700'}`}
                                            >
                                                <span>{opt}</span>
                                                {selected && <Check className="w-3.5 h-3.5" />}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <div className="flex-1 relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="제목으로 검색"
                            aria-label="게시글 제목 검색"
                            className="w-full text-sm py-2 pl-8 pr-2.5 border border-slate-200 rounded-lg bg-white outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300 transition-shadow"
                        />
                    </div>
                </div>

                {/* 헤더 액션 — 글쓰기 버튼은 비-inquiry 이거나, 여행보드에서 진입한 경우에만 노출 */}
                <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-500">총 {total.toLocaleString()}건</p>
                    {(!isInquiryTab || fromBoard) && (
                        <button
                            onClick={handleWriteClick}
                            className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 rounded-lg shadow-sm"
                        >
                            글쓰기
                        </button>
                    )}
                </div>

                {/* 목록 */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    {loading ? (
                        <div className="p-8 text-center text-sm text-slate-400">불러오는 중...</div>
                    ) : error ? (
                        <div className="p-8 text-center text-sm text-red-500">{error}</div>
                    ) : posts.length === 0 ? (
                        <div className="p-8 text-center text-sm text-slate-400">아직 등록된 글이 없어요.</div>
                    ) : (
                        <ul className="divide-y divide-slate-100">
                            {posts.map(post => (
                                <li key={post.id}>
                                    <Link
                                        href={fromBoard ? `/community/${post.id}?from=board` : `/community/${post.id}`}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                                    >
                                        {(post.country || post.city) && (
                                            <span className="shrink-0 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                                {post.country || post.city}
                                            </span>
                                        )}
                                        <div className="flex-1 min-w-0 md:flex md:items-center md:gap-3">
                                            <p className="text-sm font-medium text-slate-800 truncate md:flex-1">
                                                {post.title}
                                                {post.reply_count > 0 && (
                                                    <span className="ml-1.5 text-xs text-emerald-600">[{post.reply_count}]</span>
                                                )}
                                            </p>
                                            <p className="text-[11px] text-slate-400 mt-0.5 md:mt-0 md:shrink-0 md:whitespace-nowrap truncate">
                                                {shortAuthor(post.author_email)}
                                                <span className="ml-2">· {formatDate(post.created_at)}</span>
                                                <span className="ml-2">· 조회 {post.view_count}</span>
                                            </p>
                                        </div>
                                        <span className="shrink-0 text-[10px] text-slate-300 tabular-nums">#{post.post_number}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Load More — 남은 게시글이 있고, 로딩 중이 아닐 때 노출. 클릭 시 다음 페이지 fetch → append */}
                {posts.length > 0 && posts.length < total && (
                    <div className="flex flex-col items-center gap-2 mt-6">
                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => setPage(p => p + 1)}
                            className="px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? '불러오는 중...' : `더 보기 (${(total - posts.length).toLocaleString()}건 남음)`}
                        </button>
                        <p className="text-[11px] text-slate-400 tabular-nums">{posts.length.toLocaleString()} / {total.toLocaleString()}</p>
                    </div>
                )}
            </main>
    );

    // 여행보드에서 진입 시 (fromBoard) → 카드 메모/지도 팝업과 동일한 풀스크린 모달 스타일. 하단 닫기 버튼으로 여행보드 복귀.
    if (fromBoard) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-white w-full h-full md:w-[95vw] md:h-[90vh] md:max-w-4xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0">
                    {/* 헤더 — 타이틀만. 닫기는 하단에서만 (사용자 지시) */}
                    <div className="px-5 py-4 border-b border-slate-200 shrink-0">
                        <h2 className="text-lg font-bold text-slate-800">{pageTitle}</h2>
                    </div>
                    {/* 본문 — 스크롤 */}
                    <div className="flex-1 overflow-y-auto">
                        {mainContent}
                    </div>
                    {/* 푸터 — 닫기 (하단) */}
                    <div className="flex items-center justify-end gap-3 px-5 py-3 pb-safe border-t border-slate-200 bg-slate-50 shrink-0">
                        <button
                            onClick={() => router.back()}
                            className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <DashboardHeader title={pageTitle} />
            {mainContent}
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
