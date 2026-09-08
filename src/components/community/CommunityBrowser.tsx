'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Search, ChevronDown, Check } from 'lucide-react';
import { BOARD_TABS, type BoardType, type CommunityPost, formatDate, shortAuthor } from './types';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';
import { getAllCityNames, getAllCountryNames } from '@/data/destinations';
import { BrandLoader } from '@/components/BrandLoader';

// 커뮤니티 목록(탭·필터·검색·더보기·글쓰기). 페이지 껍데기가 없는 순수 뷰라 두 곳에서 그대로 쓴다.
//  - /community 페이지 : 탭·필터를 URL 로 관리 (뒤로가기·공유 가능)
//  - 여행보드 안 모달   : 탭·필터를 로컬 state 로 관리 (라우팅 없음 → 보드가 살아 있음)

const PostEditorModal = dynamic(() => import('./PostEditorModal'), { ssr: false });

interface CommunityBrowserProps {
    activeTab: BoardType;
    cityFilter?: string;
    countryFilter?: string;
    /** 모달 안이면 여백을 줄이고 필터 뱃지를 생략한다(드롭다운이 이미 값을 보여줌) */
    embedded?: boolean;
    onTabChange: (tab: BoardType) => void;
    /** 나라/도시 드롭다운 선택. 빈 문자열이면 필터 해제 */
    onLocationChange: (value: string) => void;
    onClearFilter: () => void;
    /** 목록 항목을 링크로 렌더할 주소 (페이지 모드). 없으면 버튼으로 렌더 */
    postHref?: (postId: string) => string;
    /** 항목 클릭 (모달 모드) */
    onOpenPost?: (postId: string) => void;
    /** 비로그인 상태로 글쓰기를 누른 경우 (페이지 모드는 로그인으로 이동) */
    onRequireLogin?: () => void;
    /** 로그인 복귀 직후처럼 글쓰기 팝업을 바로 열어야 할 때 */
    autoOpenWrite?: boolean;
    /** 자동 오픈을 소비했음을 부모에 알림 (URL 파라미터 제거 등) */
    onWriteAutoOpened?: () => void;
}

export default function CommunityBrowser({
    activeTab,
    cityFilter = '',
    countryFilter = '',
    embedded = false,
    onTabChange,
    onLocationChange,
    onClearFilter,
    postHref,
    onOpenPost,
    onRequireLogin,
    autoOpenWrite = false,
    onWriteAutoOpened,
}: CommunityBrowserProps) {
    const { user, loading: authLoading } = useAuth();

    const isInquiryTab = activeTab === 'inquiry';
    const isNoticeTab = activeTab === 'notice';
    // 활성 탭에 따라 실제 서버 필터 선택 — notice 는 나라, 그 외는 도시.
    const activeFilterLabel = isNoticeTab ? countryFilter : cityFilter;

    // Load More 방식 — page 는 로컬 state. 필터 변경 시 1로 리셋되며 posts 초기화.
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasFetchedOnce, setHasFetchedOnce] = useState(false); // 첫 fetch 후 true — 이후 재조회는 이전 목록 유지 (SWR 톤)
    const [error, setError] = useState<string | null>(null);
    // 검색어 — 로컬 state + debounce 300ms 로 서버 fetch 트리거
    const [searchText, setSearchText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const limit = 20;

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
                setHasFetchedOnce(true);
            }
        })();
    }, [activeTab, page, isInquiryTab, isNoticeTab, user, cityFilter, countryFilter, searchQuery]);

    // 드롭다운 옵션 — 정적 데이터라 한 번만 계산.
    const countryOptions = useMemo(() => getAllCountryNames(), []);
    const cityOptions = useMemo(() => getAllCityNames(), []);

    // 커스텀 드롭다운 — 네이티브 <select> 는 모바일에서 OS picker 로 뜨고 5줄 제한 불가. 커스텀으로 통일.
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

    // 글쓰기 — 페이지 이동 없이 목록 위 팝업
    const [writeOpen, setWriteOpen] = useState(false);

    const handleWriteClick = () => {
        if (!user) {
            onRequireLogin?.();
            return;
        }
        setWriteOpen(true);
    };

    // 로그인 복귀 등으로 부모가 요청하면 자동 오픈
    useEffect(() => {
        if (!autoOpenWrite || authLoading || !user || isNoticeTab) return;
        setWriteOpen(true);
        onWriteAutoOpened?.();
        // onWriteAutoOpened 는 부모의 URL 정리용 — 매 렌더 새 함수여도 autoOpenWrite 가 false 로 바뀌며 종료된다.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoOpenWrite, authLoading, user, isNoticeTab]);

    // 등록 완료 — 같은 탭이면 목록 맨 위에 바로 붙이고, 다른 게시판에 썼으면 그 탭으로 이동.
    const handleCreated = (post: CommunityPost) => {
        if (post.board_type === activeTab) {
            setPosts(prev => [post, ...prev]);
            setTotal(t => t + 1);
        } else {
            onTabChange(post.board_type);
        }
    };

    // 목록 한 줄의 내용 — 링크로 감싸든 버튼으로 감싸든 동일
    const rowInner = (post: CommunityPost) => (
        <>
            {(post.country || post.city) && (
                <span className="shrink-0 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    {post.country || post.city}
                </span>
            )}
            <div className="flex-1 min-w-0 md:flex md:items-center md:gap-3">
                <p className="text-sm font-medium text-slate-800 truncate md:flex-1 text-left">
                    {post.title}
                    {post.reply_count > 0 && (
                        <span className="ml-1.5 text-xs text-emerald-600">[{post.reply_count}]</span>
                    )}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 md:mt-0 md:shrink-0 md:whitespace-nowrap truncate text-left">
                    {shortAuthor(post.author_name)}
                    <span className="ml-2">· {formatDate(post.created_at)}</span>
                    <span className="ml-2">· 조회 {post.view_count}</span>
                </p>
            </div>
            <span className="shrink-0 text-[10px] text-slate-300 tabular-nums">#{post.post_number}</span>
        </>
    );

    const rowClass = 'w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors';

    return (
        <main className={`flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 ${embedded ? 'py-4' : 'py-6 md:py-8 pb-24 md:pb-8'}`}>
            {/* 탭 — inquiry 는 상단 nav 로만 진입하므로 탭에서 숨김 */}
            {!isInquiryTab && (
                <div className="flex gap-1.5 mb-4 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {BOARD_TABS.map(tab => {
                        const isActive = tab.key === activeTab;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => onTabChange(tab.key)}
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

            {/* 필터 상태 표기 — 모달에서는 드롭다운이 값을 이미 보여주므로 뱃지 생략 */}
            {!embedded && activeFilterLabel && (
                <div className="mb-3 flex items-center gap-2 text-[11px]">
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 inline-flex items-center gap-1 px-2 py-0.5 rounded-md">
                        <span className="font-semibold">{activeFilterLabel}</span>
                        <span>관련 글만 표시 중</span>
                    </span>
                    <button
                        type="button"
                        onClick={onClearFilter}
                        className="text-slate-500 hover:text-emerald-600 underline underline-offset-2"
                    >
                        전체 보기
                    </button>
                </div>
            )}

            {/* 필터바 — [나라/도시 드롭다운] + [제목 검색] */}
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
                            <li>
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={!currentLocation}
                                    onClick={() => { onLocationChange(''); setDropdownOpen(false); }}
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
                                            onClick={() => { onLocationChange(opt); setDropdownOpen(false); }}
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

            {/* 헤더 액션 — notice(해외안전정보) 는 운영자가 채우는 게시판이라 사용자 글쓰기 없음 */}
            <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-slate-500">총 {total.toLocaleString()}건</p>
                {!isNoticeTab && (
                    <button
                        onClick={handleWriteClick}
                        className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 rounded-lg shadow-sm"
                    >
                        글쓰기
                    </button>
                )}
            </div>

            {/* 목록 — 첫 로드 전에만 스피너, 이후 재조회는 이전 목록 유지 + opacity (SWR 톤) */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                {loading && !hasFetchedOnce ? (
                    <div className="p-8 flex justify-center">
                        <BrandLoader text="글을 불러오고 있습니다" size={48} topBar={false} />
                    </div>
                ) : error ? (
                    <div className="p-8 text-center text-sm text-red-500">{error}</div>
                ) : posts.length === 0 ? (
                    <div className="p-8 text-center text-sm text-slate-400">아직 등록된 글이 없어요.</div>
                ) : (
                    <ul className={`divide-y divide-slate-100 transition-opacity ${loading ? 'opacity-60' : 'opacity-100'}`}>
                        {posts.map(post => (
                            <li key={post.id}>
                                {postHref ? (
                                    <Link href={postHref(post.id)} className={rowClass}>
                                        {rowInner(post)}
                                    </Link>
                                ) : (
                                    <button type="button" onClick={() => onOpenPost?.(post.id)} className={rowClass}>
                                        {rowInner(post)}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Load More */}
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

            {/* 글쓰기 팝업 — createPortal 로 body 에 붙어서 목록/모달 위에 뜬다 */}
            <PostEditorModal
                isOpen={writeOpen}
                onClose={() => setWriteOpen(false)}
                initialBoardType={activeTab}
                initialCity={cityFilter}
                onCreated={handleCreated}
            />
        </main>
    );
}
