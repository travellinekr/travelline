'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BOARD_LABEL, BOARD_BADGE, type CommunityPost, formatDate, shortAuthor } from './types';

export default function CommunityHomeSection() {
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/community?limit=6')
            .then(r => r.json())
            .then(({ posts }) => setPosts(posts ?? []))
            .catch(() => setPosts([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="w-full bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-4 md:pt-4 md:pb-5">
                <div className="flex items-end justify-between mb-3">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">커뮤니티</h2>
                        <p className="text-xs md:text-sm text-slate-400">여행정보를 서로 나눠보세요</p>
                    </div>
                    <Link
                        href="/community"
                        className="text-xs md:text-sm text-slate-500 hover:text-emerald-600 whitespace-nowrap"
                    >
                        전체보기 →
                    </Link>
                </div>

                {loading ? (
                    <div className="py-6 text-center text-sm text-slate-300">불러오는 중...</div>
                ) : posts.length === 0 ? (
                    <div className="py-6 text-center text-sm text-slate-400">
                        아직 등록된 글이 없어요. <Link href="/community/new" className="text-emerald-600 hover:underline ml-1">첫 글 쓰기</Link>
                    </div>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {posts.map(post => (
                            <li key={post.id}>
                                <Link
                                    href={`/community/${post.id}`}
                                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-colors"
                                >
                                    <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-md border ${BOARD_BADGE[post.board_type]}`}>
                                        {BOARD_LABEL[post.board_type]}
                                    </span>
                                    {(post.country || post.city) && (
                                        <span className="shrink-0 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                            {post.country || post.city}
                                        </span>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-800 truncate">
                                            {post.title}
                                            {post.reply_count > 0 && (
                                                <span className="ml-1.5 text-xs text-emerald-600">[{post.reply_count}]</span>
                                            )}
                                        </p>
                                        <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                                            {shortAuthor(post.author_email)} · {formatDate(post.created_at)}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
