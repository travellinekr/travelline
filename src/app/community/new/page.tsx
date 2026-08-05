'use client';

import { useEffect, useMemo, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/nav/BottomNav';
import { BOARD_LABEL, type BoardType } from '@/components/community/types';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';
import { Autocomplete } from '@/components/board/Autocomplete';
import { DESTINATION_DATA } from '@/data/destinations';
import dynamic from 'next/dynamic';

// BlockNote 는 SSR 미지원 → dynamic import
const ContentEditor = dynamic(() => import('@/components/community/ContentEditor'), {
    ssr: false,
    loading: () => <div className="text-sm text-slate-400 p-4">에디터 로딩...</div>,
});

// 이메일 화이트리스트는 서버에서 최종 검증. 클라이언트는 UI 노출 여부만 결정.
const CLIENT_ADMIN_EMAILS = ['hadesdos@gmail.com'];

const ALL_BOARD_TYPES: BoardType[] = ['notice', 'info', 'review', 'qna', 'inquiry'];

function NewPostPageInner() {
    const router = useRouter();
    const search = useSearchParams();
    const { user, loading: authLoading } = useAuth();

    const isAdmin = !!user?.email && CLIENT_ADMIN_EMAILS.includes(user.email.toLowerCase());
    // notice(해외안전정보) 는 관리자만. 나머지는 전체 노출.
    const availableTypes: BoardType[] = isAdmin
        ? ALL_BOARD_TYPES
        : ALL_BOARD_TYPES.filter(t => t !== 'notice');

    // URL ?type= 이 유효하면 그걸로 프리셀렉트 (하단바 문의&요청 진입 시 등)
    const typeParam = search.get('type');
    const initialType: BoardType = (typeParam && availableTypes.includes(typeParam as BoardType))
        ? (typeParam as BoardType)
        : availableTypes[0];

    const [boardType, setBoardType] = useState<BoardType>(initialType);
    // URL ?country= 있으면 나라 자동 선택(여행보드에서 해외안전정보 진입 시 최종여행지의 국가 프리셋)
    const [country, setCountry] = useState(() => search.get('country')?.trim() || '');
    // URL ?city= 있으면 도시 자동 선택(여행보드 하단바 문의&요청 등 진입 시 최종여행지 프리셋)
    const [city, setCity] = useState(() => search.get('city')?.trim() || '');

    // destinations.ts 의 모든 한글 도시명 (자동완성 후보). 정적 데이터라 한 번만 계산.
    const cityOptions = useMemo(() => {
        return Object.values(DESTINATION_DATA).flatMap(region => region.cities.map(c => c.name));
    }, []);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login?redirect=/community/new');
        }
    }, [authLoading, user, router]);

    useEffect(() => {
        // 관리자 여부가 바뀌면 기본 게시판구분 재설정
        if (!availableTypes.includes(boardType)) {
            setBoardType(availableTypes[0]);
        }
    }, [availableTypes, boardType]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!title.trim() || !content.trim()) {
            setError('제목과 내용을 입력해주세요.');
            return;
        }
        setSubmitting(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const token = session?.access_token;
            if (!token) {
                setError('로그인이 만료되었어요. 다시 로그인해주세요.');
                setSubmitting(false);
                return;
            }
            const res = await fetch('/api/community', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({
                    board_type: boardType,
                    country: boardType === 'notice' ? country : null,
                    city: boardType !== 'notice' ? city : null,
                    title,
                    content,
                }),
            });
            const json = await res.json();
            if (!res.ok) {
                setError(json?.error ?? '등록에 실패했어요.');
                return;
            }
            router.push(`/community/${json.post.id}`);
        } catch (e: any) {
            setError(e?.message ?? '등록 중 오류가 발생했어요.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <DashboardHeader title="글쓰기" />
            <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8 pb-24 md:pb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* 게시판구분 — 문의&요청은 하단바 진입 전용이라 UI 숨김(값은 유지) */}
                    {boardType !== 'inquiry' && (
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1.5">게시판구분</label>
                            <select
                                value={boardType}
                                onChange={e => setBoardType(e.target.value as BoardType)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                            >
                                {availableTypes.filter(t => t !== 'inquiry').map(t => (
                                    <option key={t} value={t}>{BOARD_LABEL[t]}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {boardType === 'notice' && (
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1.5">나라</label>
                            <input
                                type="text"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                                placeholder="예: 일본"
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                    )}

                    {boardType !== 'notice' && (
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1.5">여행도시 (선택)</label>
                            <Autocomplete
                                value={city}
                                onChange={setCity}
                                suggestions={cityOptions}
                                placeholder="예: 도쿄 (등록된 도시가 없어도 직접 입력 가능)"
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">제목</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            maxLength={200}
                            required
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">내용</label>
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <ContentEditor onChange={setContent} />
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-4 py-2 rounded-lg text-sm text-slate-600 border border-slate-200 hover:bg-slate-50"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60"
                        >
                            {submitting ? '등록 중...' : '등록'}
                        </button>
                    </div>
                </form>
            </main>
            <BottomNav />
        </div>
    );
}

export default function NewPostPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-slate-400">불러오는 중...</div>}>
            <NewPostPageInner />
        </Suspense>
    );
}
