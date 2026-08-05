'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/nav/BottomNav';
import { BOARD_LABEL, BOARD_BADGE, formatDate, shortAuthor, type CommunityPost, type CommunityReply } from '@/components/community/types';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';
import dynamic from 'next/dynamic';

const ContentEditor = dynamic(() => import('@/components/community/ContentEditor'), {
    ssr: false,
    loading: () => <div className="text-sm text-slate-400 p-2">불러오는 중...</div>,
});

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

const CLIENT_ADMIN_EMAILS = ['hadesdos@gmail.com'];

export default function CommunityPostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = use(params);
    const router = useRouter();
    const { user } = useAuth();
    const isAdmin = !!user?.email && CLIENT_ADMIN_EMAILS.includes(user.email.toLowerCase());

    const [post, setPost] = useState<CommunityPost | null>(null);
    const [replies, setReplies] = useState<CommunityReply[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editingPost, setEditingPost] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const [replyContent, setReplyContent] = useState('');
    const [replySubmitting, setReplySubmitting] = useState(false);
    const [editingReplyId, setEditingReplyId] = useState<string | null>(null);
    const [editReplyContent, setEditReplyContent] = useState('');

    useEffect(() => {
        setLoading(true);
        setError(null);
        Promise.all([
            fetch(`/api/community/${postId}`).then(r => r.json()),
            fetch(`/api/community/${postId}/replies`).then(r => r.json()),
        ])
            .then(([postRes, repliesRes]) => {
                if (postRes.error) throw new Error(postRes.error);
                setPost(postRes.post);
                setReplies(repliesRes.replies ?? []);
            })
            .catch(e => setError(e?.message ?? '불러오지 못했어요.'))
            .finally(() => setLoading(false));
    }, [postId]);

    const getToken = async (): Promise<string | null> => {
        const { data: { session } } = await supabase.auth.getSession();
        return session?.access_token ?? null;
    };

    const startEditPost = () => {
        if (!post) return;
        setEditTitle(post.title);
        setEditContent(post.content);
        setEditingPost(true);
    };

    const savePost = async () => {
        if (!post || !editTitle.trim() || !editContent.trim()) return;
        const token = await getToken();
        if (!token) { alert('로그인이 만료되었어요.'); return; }
        const res = await fetch(`/api/community/${post.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ title: editTitle, content: editContent }),
        });
        const json = await res.json();
        if (!res.ok) { alert(json?.error ?? '수정 실패'); return; }
        setPost(json.post);
        setEditingPost(false);
    };

    const deletePost = async () => {
        if (!post) return;
        if (!confirm('정말 삭제할까요? 답변도 함께 삭제됩니다.')) return;
        const token = await getToken();
        if (!token) { alert('로그인이 만료되었어요.'); return; }
        const res = await fetch(`/api/community/${post.id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) { alert(json?.error ?? '삭제 실패'); return; }
        router.push('/community');
    };

    const submitReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyContent.trim()) return;
        if (!user) {
            router.push(`/login?redirect=/community/${postId}`);
            return;
        }
        setReplySubmitting(true);
        const token = await getToken();
        if (!token) { alert('로그인이 만료되었어요.'); setReplySubmitting(false); return; }
        try {
            const res = await fetch(`/api/community/${postId}/replies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ content: replyContent }),
            });
            const json = await res.json();
            if (!res.ok) { alert(json?.error ?? '등록 실패'); return; }
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
        if (!token) { alert('로그인이 만료되었어요.'); return; }
        const res = await fetch(`/api/community/replies/${replyId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ content: editReplyContent }),
        });
        const json = await res.json();
        if (!res.ok) { alert(json?.error ?? '수정 실패'); return; }
        setReplies(prev => prev.map(r => r.id === replyId ? json.reply : r));
        setEditingReplyId(null);
    };

    const deleteReply = async (replyId: string) => {
        if (!confirm('답변을 삭제할까요?')) return;
        const token = await getToken();
        if (!token) { alert('로그인이 만료되었어요.'); return; }
        const res = await fetch(`/api/community/replies/${replyId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) { alert(json?.error ?? '삭제 실패'); return; }
        setReplies(prev => prev.filter(r => r.id !== replyId));
        if (post) setPost({ ...post, reply_count: Math.max(0, post.reply_count - 1) });
    };

    const canEditPost = !!user && !!post && post.author_id === user.id;
    const canDeletePost = canEditPost || isAdmin;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <DashboardHeader title="커뮤니티" />
            <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8 pb-24 md:pb-8">
                <div className="mb-3">
                    <Link href="/community" className="text-xs md:text-sm text-slate-500 hover:text-slate-700">← 목록</Link>
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

                            {editingPost ? (
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={e => setEditTitle(e.target.value)}
                                        maxLength={200}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-base font-semibold focus:outline-none focus:border-emerald-500"
                                    />
                                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                                        <ContentEditor
                                            initialContent={isBlockJson(editContent) ? editContent : undefined}
                                            onChange={setEditContent}
                                        />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => setEditingPost(false)} className="px-3 py-1.5 rounded-lg text-sm text-slate-600 border border-slate-200 hover:bg-slate-50">취소</button>
                                        <button onClick={savePost} className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600">저장</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{post.title}</h1>
                                    <div className="text-xs text-slate-400 mb-4 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                        <span>{shortAuthor(post.author_email)}</span>
                                        <span>·</span>
                                        <span>{formatDate(post.created_at)}</span>
                                        {post.updated_at !== post.created_at && <span className="text-[10px]">(수정 {formatDate(post.updated_at)})</span>}
                                        <span>·</span>
                                        <span>조회 {post.view_count}</span>
                                    </div>
                                    {isBlockJson(post.content) ? (
                                        <div className="text-sm text-slate-700 leading-relaxed -mx-2">
                                            <ContentEditor initialContent={post.content} readonly />
                                        </div>
                                    ) : (
                                        <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{post.content}</div>
                                    )}
                                    {(canEditPost || canDeletePost) && (
                                        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-slate-100">
                                            {canEditPost && (
                                                <button onClick={startEditPost} className="text-xs text-slate-500 hover:text-slate-700 px-2 py-1">수정</button>
                                            )}
                                            {canDeletePost && (
                                                <button onClick={deletePost} className="text-xs text-red-500 hover:text-red-600 px-2 py-1">삭제</button>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </article>

                        {/* 답변 목록 */}
                        <section className="bg-white border border-slate-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-slate-700 mb-3">답변 {replies.length}개</h2>

                            <ul className="divide-y divide-slate-100 mb-4">
                                {replies.map(reply => {
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
                                                        <span className="font-medium text-slate-600">{shortAuthor(reply.author_email)}</span>
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
                                                                <button onClick={() => deleteReply(reply.id)} className="text-[11px] text-red-400 hover:text-red-600 px-1.5">삭제</button>
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
                    </>
                )}
            </main>
            <BottomNav />
        </div>
    );
}
