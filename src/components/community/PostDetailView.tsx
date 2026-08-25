'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BOARD_LABEL, BOARD_BADGE, formatDate, shortAuthor, type CommunityPost, type CommunityReply } from './types';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';
import { Confirm } from '@/components/board/Confirm';
import { ToastContainer } from '@/components/common/ToastContainer';
import { useToast } from '@/hooks/useToast';
import { isClientAdmin } from '@/lib/admin/clientAdmin';

// 게시글 본문 + 답변. 페이지 껍데기가 없는 순수 뷰라 두 곳에서 그대로 쓴다.
//  - /community/[postId] 페이지 (직접 진입·공유 링크)
//  - 여행보드 안 커뮤니티 모달 (라우팅 없이 상태로 전환 → 보드가 언마운트되지 않음)

const ContentEditor = dynamic(() => import('./ContentEditor'), {
    ssr: false,
    loading: () => <div className="text-sm text-slate-400 p-2">불러오는 중...</div>,
});

// 수정도 글쓰기와 같은 팝업에서 (수정 모드)
const PostEditorModal = dynamic(() => import('./PostEditorModal'), { ssr: false });

// content 가 BlockNote JSON 블록 배열인지 판정. legacy(2026-08-03 이전) plaintext 는 폴백 렌더.
function isBlockJson(text: string): boolean {
    if (!text?.trim().startsWith('[')) return false;
    try {
        const parsed = JSON.parse(text);
        return Array.isArray(parsed) && parsed.length > 0 && parsed.every((b: any) => b && b.type);
    } catch {
        return false;
    }
}

interface PostDetailViewProps {
    postId: string;
    /** "← 목록" 클릭 */
    onBack: () => void;
    /** 삭제 완료 후 (보통 목록으로 복귀) */
    onDeleted?: () => void;
    /** 팝업/모달 안이면 상하 여백을 줄인다 */
    embedded?: boolean;
}

export default function PostDetailView({ postId, onBack, onDeleted, embedded = false }: PostDetailViewProps) {
    const { user } = useAuth();
    // 관리자는 신고 대응용으로 남의 글·답변을 삭제할 수 있다(수정은 불가). 서버·RLS 규칙과 동일.
    const isAdmin = isClientAdmin(user?.email);

    const [post, setPost] = useState<CommunityPost | null>(null);
    const [replies, setReplies] = useState<CommunityReply[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editOpen, setEditOpen] = useState(false);
    // 브라우저 confirm()/alert() 대신 공용 Confirm · 토스트 사용
    const { toasts, addToast, removeToast } = useToast();
    const [confirmDeletePost, setConfirmDeletePost] = useState(false);
    const [confirmDeleteReplyId, setConfirmDeleteReplyId] = useState<string | null>(null);

    const [replyContent, setReplyContent] = useState('');
    const [replySubmitting, setReplySubmitting] = useState(false);
    const [editingReplyId, setEditingReplyId] = useState<string | null>(null);
    const [editReplyContent, setEditReplyContent] = useState('');

    // 본문과 답변을 병렬로 시작하되 각각 독립 렌더 — 본문이 먼저 오면 즉시 표시, 답변은 나중에 붙음.
    // 문의&요청(inquiry) 은 작성자 본인·관리자만 볼 수 있어 서버가 토큰을 요구한다 → 항상 붙여서 보낸다.
    // (공개 게시판은 서버가 토큰을 무시하므로 비로그인도 그대로 조회된다)
    useEffect(() => {
        let alive = true;
        setLoading(true);
        setError(null);
        (async () => {
            const { data: { session } } = await supabase.auth.getSession();
            const headers: Record<string, string> = {};
            if (session?.access_token) headers.Authorization = `Bearer ${session.access_token}`;
            if (!alive) return;

            // 본문 fetch — 오면 즉시 loading=false
            fetch(`/api/community/${postId}`, { headers })
                .then(r => r.json())
                .then(postRes => {
                    if (!alive) return;
                    if (postRes.error) throw new Error(postRes.error);
                    setPost(postRes.post);
                })
                .catch(e => { if (alive) setError(e?.message ?? '불러오지 못했어요.'); })
                .finally(() => { if (alive) setLoading(false); });

            // 답변 fetch — 별도 진행. 실패해도 본문 표시엔 영향 없음.
            fetch(`/api/community/${postId}/replies`, { headers })
                .then(r => r.json())
                .then(repliesRes => { if (alive) setReplies(repliesRes.replies ?? []); })
                .catch(() => { if (alive) setReplies([]); });
        })();
        return () => { alive = false; };
    }, [postId]);

    const getToken = async (): Promise<string | null> => {
        const { data: { session } } = await supabase.auth.getSession();
        return session?.access_token ?? null;
    };

    const runDeletePost = async () => {
        setConfirmDeletePost(false);
        if (!post) return;
        const token = await getToken();
        if (!token) { addToast('로그인이 만료되었어요.', 'warning'); return; }
        const res = await fetch(`/api/community/${post.id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) { addToast(json?.error ?? '삭제하지 못했어요.', 'warning'); return; }
        (onDeleted ?? onBack)();
    };

    const submitReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyContent.trim() || !user) return;
        setReplySubmitting(true);
        const token = await getToken();
        if (!token) { addToast('로그인이 만료되었어요.', 'warning'); setReplySubmitting(false); return; }
        try {
            const res = await fetch(`/api/community/${postId}/replies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ content: replyContent }),
            });
            const json = await res.json();
            if (!res.ok) { addToast(json?.error ?? '등록하지 못했어요.', 'warning'); return; }
            setReplies(prev => [...prev, json.reply]);
            setReplyContent('');
            if (post) setPost({ ...post, reply_count: post.reply_count + 1 });
        } finally {
            setReplySubmitting(false);
        }
    };

    const saveReply = async (replyId: string) => {
        if (!editReplyContent.trim()) return;
        const token = await getToken();
        if (!token) { addToast('로그인이 만료되었어요.', 'warning'); return; }
        const res = await fetch(`/api/community/replies/${replyId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ content: editReplyContent }),
        });
        const json = await res.json();
        if (!res.ok) { addToast(json?.error ?? '수정하지 못했어요.', 'warning'); return; }
        setReplies(prev => prev.map(r => r.id === replyId ? json.reply : r));
        setEditingReplyId(null);
    };

    const runDeleteReply = async (replyId: string) => {
        setConfirmDeleteReplyId(null);
        const token = await getToken();
        if (!token) { addToast('로그인이 만료되었어요.', 'warning'); return; }
        const res = await fetch(`/api/community/replies/${replyId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) { addToast(json?.error ?? '삭제하지 못했어요.', 'warning'); return; }
        setReplies(prev => prev.filter(r => r.id !== replyId));
        if (post) setPost({ ...post, reply_count: Math.max(0, post.reply_count - 1) });
    };

    // notice(해외안전정보) 는 운영 에이전트가 채우는 게시판 → 화면에서는 읽기 전용.
    // 수정·삭제 버튼과 답변 영역을 모두 감춘다(작성자·관리자도 동일).
    const isNotice = post?.board_type === 'notice';
    // 수정은 작성자 본인만. 삭제는 작성자 또는 관리자(신고 대응).
    // 서버(API)와 DB(RLS)에서도 같은 규칙으로 막고 있으므로 화면은 노출 제어만 담당한다.
    const canEditPost = !isNotice && !!user && !!post && post.author_id === user.id;
    const canDeletePost = !isNotice && (canEditPost || isAdmin);

    return (
        <main className={`flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 ${embedded ? 'py-4' : 'py-6 md:py-8 pb-24 md:pb-8'}`}>
            <div className="mb-3">
                <button type="button" onClick={onBack} className="text-xs md:text-sm text-slate-500 hover:text-slate-700">← 목록</button>
            </div>

            {loading ? (
                <div className="p-8 text-center text-sm text-slate-400">불러오는 중...</div>
            ) : error || !post ? (
                <div className="p-8 text-center text-sm text-red-500">{error ?? '게시글을 찾을 수 없어요.'}</div>
            ) : (
                <>
                    {/* 본문 */}
                    <article className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${BOARD_BADGE[post.board_type]}`}>
                                {BOARD_LABEL[post.board_type]}
                            </span>
                            {(post.country || post.city) && (
                                <span className="text-[11px] text-slate-500">
                                    {[post.country, post.city].filter(Boolean).join(' · ')}
                                </span>
                            )}
                            <span className="ml-auto text-[10px] text-slate-300 tabular-nums">#{post.post_number}</span>
                        </div>

                        <h1 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{post.title}</h1>
                        <div className="text-xs text-slate-400 mb-4 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                            <span>{shortAuthor(post.author_name)}</span>
                            <span>·</span>
                            <span>{formatDate(post.created_at)}</span>
                            {post.updated_at !== post.created_at && <span className="text-[10px]">(수정 {formatDate(post.updated_at)})</span>}
                            <span>·</span>
                            <span>조회 {post.view_count}</span>
                        </div>
                        {isBlockJson(post.content ?? '') ? (
                            <div className="text-sm text-slate-700 leading-relaxed -mx-2">
                                <ContentEditor initialContent={post.content ?? ''} readonly />
                            </div>
                        ) : (
                            <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{post.content ?? ''}</div>
                        )}
                        {(canEditPost || canDeletePost) && (
                            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-slate-100">
                                {canEditPost && (
                                    <button onClick={() => setEditOpen(true)} className="text-xs text-slate-500 hover:text-slate-700 px-2 py-1">수정</button>
                                )}
                                {canDeletePost && (
                                    <button onClick={() => setConfirmDeletePost(true)} className="text-xs text-red-500 hover:text-red-600 px-2 py-1">삭제</button>
                                )}
                            </div>
                        )}
                    </article>

                    {/* 답변 목록 — notice(해외안전정보) 는 답변 기능 없음 */}
                    {!isNotice && (
                        <section className="bg-white border border-slate-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-slate-700 mb-3">답변 {replies.length}개</h2>

                            <ul className="divide-y divide-slate-100 mb-4">
                                {replies.map(reply => {
                                    // 답변도 동일 — 수정은 작성자만, 삭제는 작성자 또는 관리자
                                    const canEditReply = !!user && reply.author_id === user.id;
                                    const canDeleteReply = canEditReply || isAdmin;
                                    return (
                                        <li key={reply.id} className="py-3 first:pt-0 last:pb-0">
                                            {editingReplyId === reply.id ? (
                                                <div className="space-y-2">
                                                    <textarea
                                                        value={editReplyContent}
                                                        onChange={e => setEditReplyContent(e.target.value)}
                                                        rows={3}
                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 resize-y"
                                                    />
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => setEditingReplyId(null)} className="text-xs text-slate-500 px-2 py-1">취소</button>
                                                        <button onClick={() => saveReply(reply.id)} className="text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-2 py-1 rounded">저장</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                                                        <span className="font-medium text-slate-600">{shortAuthor(reply.author_name)}</span>
                                                        <span>·</span>
                                                        <span>{formatDate(reply.created_at)}</span>
                                                        {reply.updated_at !== reply.created_at && <span className="text-[10px]">(수정)</span>}
                                                    </div>
                                                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{reply.content}</p>
                                                    {(canEditReply || canDeleteReply) && (
                                                        <div className="flex justify-end gap-1 mt-1">
                                                            {canEditReply && (
                                                                <button
                                                                    onClick={() => { setEditingReplyId(reply.id); setEditReplyContent(reply.content); }}
                                                                    className="text-[11px] text-slate-400 hover:text-slate-600 px-1.5"
                                                                >
                                                                    수정
                                                                </button>
                                                            )}
                                                            {canDeleteReply && (
                                                                <button onClick={() => setConfirmDeleteReplyId(reply.id)} className="text-[11px] text-red-400 hover:text-red-600 px-1.5">삭제</button>
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* 답변 폼 */}
                            {user ? (
                                <form onSubmit={submitReply} className="pt-3 border-t border-slate-100">
                                    <textarea
                                        value={replyContent}
                                        onChange={e => setReplyContent(e.target.value)}
                                        rows={3}
                                        placeholder="답변을 입력하세요"
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 resize-y"
                                    />
                                    <div className="flex justify-end mt-2">
                                        <button
                                            type="submit"
                                            disabled={replySubmitting || !replyContent.trim()}
                                            className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60"
                                        >
                                            {replySubmitting ? '등록 중...' : '답변 등록'}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="pt-3 border-t border-slate-100 text-center">
                                    <Link
                                        href={`/login?redirect=/community/${postId}`}
                                        className="text-sm text-emerald-600 hover:text-emerald-700"
                                    >
                                        답변하려면 로그인해주세요 →
                                    </Link>
                                </div>
                            )}
                        </section>
                    )}
                </>
            )}

            {/* 삭제 확인 — 브라우저 confirm 대신 공용 Confirm. 모달(z-9999) 위에 떠야 해서 z 를 한 단계 올린다 */}
            {confirmDeletePost && (
                <div className="relative z-[10001]">
                    <Confirm onConfirm={runDeletePost} onCancel={() => setConfirmDeletePost(false)}>
                        정말 삭제할까요? 답변도 함께 삭제됩니다.
                    </Confirm>
                </div>
            )}
            {confirmDeleteReplyId && (
                <div className="relative z-[10001]">
                    <Confirm
                        onConfirm={() => runDeleteReply(confirmDeleteReplyId)}
                        onCancel={() => setConfirmDeleteReplyId(null)}
                    >
                        답변을 삭제할까요?
                    </Confirm>
                </div>
            )}

            <ToastContainer toasts={toasts} onClose={removeToast} />

            {/* 수정 — 글쓰기와 같은 팝업(수정 모드). createPortal 이라 모달 위에도 뜬다 */}
            {post && (
                <PostEditorModal
                    isOpen={editOpen}
                    onClose={() => setEditOpen(false)}
                    initialBoardType={post.board_type}
                    editPost={post}
                    onUpdated={(updated) => setPost(updated)}
                />
            )}
        </main>
    );
}
