'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';
import { Autocomplete } from '@/components/board/Autocomplete';
import { DESTINATION_DATA } from '@/data/destinations';
import { supabase } from '@/lib/supabaseClient';
import { BOARD_LABEL, type BoardType, type CommunityPost } from './types';

// 게시판 글쓰기 팝업.
// 카드 메모(CardEditorModal) 와 같은 껍데기·같은 에디터를 쓰되, 게시판 글은 항목이 더 많아
// (게시판구분·여행도시·제목) 별도 컴포넌트로 둔다. CardEditorModal 은 그대로 유지.
//
// 목록 위에서 팝업으로 열리므로 일반 진입이든 여행보드 팝업이든 화면이 바뀌지 않는다.
// (이전에는 /community/new 로 페이지 이동이라 여행보드 팝업이 닫히고 메인으로 튀었다)

const ContentEditor = dynamic(() => import('./ContentEditor'), {
    ssr: false,
    loading: () => <div className="text-sm text-slate-400 p-4">에디터 로딩...</div>,
});

// notice(해외안전정보) 는 운영 에이전트 전용이라 제외. inquiry 는 하단바 진입 전용이라 고정 노출.
const SELECTABLE_TYPES: BoardType[] = ['info', 'review', 'qna'];

interface PostEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    /** 열릴 때의 게시판구분 (현재 탭). inquiry 면 변경 불가로 고정 */
    initialBoardType: BoardType;
    /** 여행보드에서 진입 시 최종여행지 프리셋 */
    initialCity?: string;
    /** 등록 성공 → 부모(목록)가 새 글을 반영 */
    onCreated?: (post: CommunityPost) => void;
    /** 값이 있으면 수정 모드 — 이 글의 제목·도시·내용을 고쳐서 PATCH */
    editPost?: CommunityPost | null;
    /** 수정 성공 → 부모(상세)가 갱신된 글을 반영 */
    onUpdated?: (post: CommunityPost) => void;
}

// 내용이 BlockNote 블록 JSON 인지 판정. legacy(2026-08-03 이전) plaintext 는 에디터 초기값으로 넘기지 않는다.
function isBlockJson(text: string): boolean {
    if (!text?.trim().startsWith('[')) return false;
    try {
        const parsed = JSON.parse(text);
        return Array.isArray(parsed) && parsed.length > 0 && parsed.every((b: any) => b && b.type);
    } catch {
        return false;
    }
}

export default function PostEditorModal({
    isOpen,
    onClose,
    initialBoardType,
    initialCity = '',
    onCreated,
    editPost = null,
    onUpdated,
}: PostEditorModalProps) {
    const isEdit = !!editPost;
    // 수정 모드에서는 원본 글의 값이 기준.
    const baseBoardType = editPost ? editPost.board_type : initialBoardType;
    const baseCity = editPost ? (editPost.city ?? '') : initialCity;
    const isInquiry = baseBoardType === 'inquiry';
    // 에디터 초기값은 렌더 중 props 에서 바로 계산한다.
    //  - state(content) 를 넘기면 열린 직후 아직 비어 있어 빈 에디터가 만들어질 수 있다(effect 는 마운트 뒤 실행).
    //  - legacy plaintext 글은 블록 JSON 이 아니므로 넘기지 않는다(에디터가 깨짐).
    const editorInitial = isEdit && isBlockJson(editPost!.content ?? '') ? (editPost!.content as string) : undefined;

    const [boardType, setBoardType] = useState<BoardType>(baseBoardType);
    const [city, setCity] = useState(baseCity);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // destinations.ts 의 모든 한글 도시명 (자동완성 후보). 정적 데이터라 한 번만 계산.
    const cityOptions = useMemo(
        () => Object.values(DESTINATION_DATA).flatMap(region => region.cities.map(c => c.name)),
        [],
    );

    // 열릴 때마다 초기화 — 닫으면 언마운트되므로 에디터도 함께 새로 뜬다.
    useEffect(() => {
        if (!isOpen) return;
        setBoardType(isEdit || isInquiry || SELECTABLE_TYPES.includes(baseBoardType) ? baseBoardType : SELECTABLE_TYPES[0]);
        setCity(baseCity);
        setTitle(editPost ? editPost.title : '');
        // 원본 내용을 그대로 들고 시작 → 본문을 건드리지 않고 제목만 고쳐도 내용이 보존된다.
        setContent(editPost?.content ?? '');
        setError(null);
        setSubmitting(false);
    }, [isOpen, baseBoardType, baseCity, isInquiry, isEdit, editPost]);

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
                return;
            }
            // 수정은 PATCH — 게시판구분은 API 가 받지 않는다(글이 게시판을 옮겨다니지 않도록).
            const res = isEdit
                ? await fetch(`/api/community/${editPost!.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ city, title, content }),
                })
                : await fetch('/api/community', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ board_type: boardType, country: null, city, title, content }),
                });
            const json = await res.json();
            if (!res.ok) {
                setError(json?.error ?? (isEdit ? '수정에 실패했어요.' : '등록에 실패했어요.'));
                return;
            }
            if (isEdit) onUpdated?.(json.post);
            else onCreated?.(json.post);
            onClose();
        } catch (err: any) {
            setError(err?.message ?? (isEdit ? '수정 중 오류가 발생했어요.' : '등록 중 오류가 발생했어요.'));
        } finally {
            setSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const modalContent = (
        // 여행보드에서 열린 커뮤니티 팝업(z-9999) 위에 떠야 하므로 한 단계 위.
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0"
            >
                {/* 헤더 */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{isEdit ? '수정' : '글쓰기'}</h2>
                        <p className="text-sm text-gray-500 mt-1">{BOARD_LABEL[boardType]}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="닫기"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 상단 고정 입력 — 게시판구분 · 여행도시 · 제목 */}
                <div className="px-5 py-3 border-b border-gray-200 shrink-0 relative z-20 space-y-2">
                    <div className="flex gap-2">
                        {/* 문의&요청은 하단바 진입 전용이라 구분 고정(값 유지) */}
                        {!isInquiry && (
                            <select
                                value={boardType}
                                onChange={e => setBoardType(e.target.value as BoardType)}
                                disabled={isEdit}
                                aria-label="게시판구분"
                                className="w-[130px] shrink-0 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-500 disabled:bg-slate-50 disabled:text-slate-500"
                            >
                                {(SELECTABLE_TYPES.includes(boardType) ? SELECTABLE_TYPES : [boardType, ...SELECTABLE_TYPES]).map(t => (
                                    <option key={t} value={t}>{BOARD_LABEL[t]}</option>
                                ))}
                            </select>
                        )}
                        <div className="flex-1 min-w-0">
                            <Autocomplete
                                value={city}
                                onChange={setCity}
                                suggestions={cityOptions}
                                placeholder="여행도시 (선택)"
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        maxLength={200}
                        placeholder="제목"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
                    />
                </div>

                {/* 내용 — 카드 메모와 동일한 에디터 */}
                <div className="flex-1 overflow-y-auto">
                    <ContentEditor initialContent={editorInitial} onChange={setContent} />
                </div>

                {/* 푸터 */}
                <div className="flex items-center justify-end gap-2 px-5 py-3 pb-safe border-t border-gray-200 bg-gray-50 shrink-0">
                    {error && <p className="mr-auto text-xs text-red-500">{error}</p>}
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm disabled:opacity-60"
                    >
                        {submitting ? '저장 중...' : (isEdit ? '저장' : '등록')}
                    </button>
                </div>
            </form>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
