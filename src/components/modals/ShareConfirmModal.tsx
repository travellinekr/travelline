"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Share2, Trash2, RefreshCw, Info, X } from "lucide-react";

interface ShareConfirmModalProps {
    roomId: string;
    onPublish: () => Promise<void>;
    onDelete: () => Promise<void>;
    onClose: () => void;
    getToken: () => Promise<string | null>;
}

interface Existing {
    id: string;
    title: string;
    created_at: string;
}

export function ShareConfirmModal({ roomId, onPublish, onDelete, onClose, getToken }: ShareConfirmModalProps) {
    const [loading, setLoading] = useState(true);
    const [existing, setExisting] = useState<Existing | null>(null);
    const [pending, setPending] = useState<'publish' | 'delete' | null>(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch(`/api/shared-plans?sourceProjectId=${encodeURIComponent(roomId)}`);
                const data = await res.json().catch(() => ({}));
                if (!cancelled) {
                    setExisting(data?.item ?? null);
                    setLoading(false);
                }
            } catch {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, [roomId, getToken]);

    const handlePublish = async () => {
        setPending('publish');
        try {
            await onPublish();
        } finally {
            setPending(null);
        }
    };

    const handleDelete = async () => {
        if (!confirm('공유된 여행계획을 삭제할까요?')) return;
        setPending('delete');
        try {
            await onDelete();
        } finally {
            setPending(null);
        }
    };

    return createPortal(
        <div
            style={{ position: 'fixed', inset: 0, zIndex: 9999999 }}
            className="flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={(e) => { if (e.target === e.currentTarget && !pending) onClose(); }}
        >
            <div className="bg-white rounded-3xl shadow-2xl w-80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                            <Share2 className="w-4 h-4 text-orange-500" />
                        </div>
                        <h2 className="text-base font-bold text-slate-800">여행계획 공유</h2>
                    </div>
                    <button
                        onClick={onClose}
                        disabled={!!pending}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-slate-400 hover:text-slate-600 disabled:opacity-50"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* 안내 */}
                <div className="mx-5 my-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100 flex gap-2">
                    <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                        공유된 내용중 <span className="font-semibold text-slate-800">메모와 사진</span>은 공개되지 않습니다.
                    </p>
                </div>

                {/* 상태 */}
                {loading ? (
                    <div className="px-5 py-6 text-center text-xs text-slate-400">발행 상태 확인 중...</div>
                ) : existing ? (
                    <div className="mx-5 mb-3 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-100">
                        <p className="text-[11px] text-emerald-700">이미 공유중인 여행계획이 있습니다.</p>
                        <p className="text-xs font-semibold text-emerald-800 truncate mt-0.5">{existing.title}</p>
                        <p className="text-[10px] text-emerald-600 mt-0.5">공유일: {new Date(existing.created_at).toLocaleDateString('ko-KR')}</p>
                    </div>
                ) : (
                    <div className="mx-5 mb-3 px-3 py-2 rounded-xl bg-blue-50 border border-blue-100">
                        <p className="text-[11px] text-blue-700">아직 공유되지 않은 여행계획입니다.</p>
                    </div>
                )}

                {/* 액션 버튼 */}
                {!loading && (
                    <div className="border-t border-gray-100 flex">
                        {existing ? (
                            <>
                                <button
                                    onClick={handleDelete}
                                    disabled={!!pending}
                                    className="flex-1 py-3.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    {pending === 'delete' ? '삭제 중...' : '삭제'}
                                </button>
                                <div className="w-px bg-gray-100" />
                                <button
                                    onClick={handlePublish}
                                    disabled={!!pending}
                                    className="flex-1 py-3.5 text-sm font-semibold text-orange-500 hover:bg-orange-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    {pending === 'publish' ? '재게시 중...' : '재게시'}
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handlePublish}
                                disabled={!!pending}
                                className="flex-1 py-3.5 text-sm font-semibold text-orange-500 hover:bg-orange-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                            >
                                <Share2 className="w-4 h-4" />
                                {pending === 'publish' ? '등록 중...' : '등록'}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body,
    );
}
