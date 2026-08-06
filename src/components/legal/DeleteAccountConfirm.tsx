'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

// 회원 탈퇴 컨펌 모달 — LegalModal privacy 안 "지금 탈퇴하기" 클릭 시 오버레이.
// 다른 로직과 격리: fetch → signOut → 홈 이동 만 담당.
export default function DeleteAccountConfirm({ onCancel }: { onCancel: () => void }) {
    const router = useRouter();
    const [confirmText, setConfirmText] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape' && !submitting) onCancel(); };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onCancel, submitting]);

    const canSubmit = confirmText.trim() === '탈퇴' && !submitting;

    const handleSubmit = async () => {
        setError(null);
        setSubmitting(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const token = session?.access_token;
            if (!token) {
                setError('세션이 만료되었어요. 다시 로그인 후 시도해주세요.');
                setSubmitting(false);
                return;
            }
            const res = await fetch('/api/account/delete', {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(json?.error ?? '탈퇴 처리에 실패했어요. 잠시 후 다시 시도해주세요.');
                setSubmitting(false);
                return;
            }
            // 클라이언트 세션 정리 후 홈 이동
            await supabase.auth.signOut().catch(() => { /* noop */ });
            router.replace('/');
        } catch (e: any) {
            setError(e?.message ?? '탈퇴 처리 중 오류가 발생했어요.');
            setSubmitting(false);
        }
    };

    const content = (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <h3 className="text-base font-bold text-slate-800">회원 탈퇴</h3>
                    </div>
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={submitting}
                        aria-label="닫기"
                        className="p-1.5 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-50"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <div className="px-5 py-5 text-sm text-slate-700 space-y-3">
                    <p>탈퇴하면 아래 데이터가 <span className="font-semibold text-red-600">모두 삭제되며 복구할 수 없어요</span>.</p>
                    <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                        <li>내가 만든 여행 계획 프로젝트 및 그 안의 모든 카드·컬럼·항공 정보</li>
                        <li>커뮤니티 게시글 · 답변의 작성자 표시 (본문은 남되 &quot;탈퇴한 사용자&quot; 로 익명화)</li>
                        <li>푸시 알림 등록 정보</li>
                    </ul>
                    <p className="text-xs text-slate-500">공유받아 참여 중이던 다른 사용자의 프로젝트에서 내 이름은 자동으로 제거됩니다.</p>

                    <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            진행하려면 <span className="text-red-600 font-bold">탈퇴</span> 를 입력하세요
                        </label>
                        <input
                            type="text"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            disabled={submitting}
                            autoFocus
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        />
                    </div>

                    {error && <p className="text-xs text-red-500">{error}</p>}
                </div>

                <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-slate-200 bg-slate-50">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={submitting}
                        className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? '처리 중...' : '탈퇴하기'}
                    </button>
                </div>
            </div>
        </div>
    );

    if (typeof window === 'undefined') return null;
    return createPortal(content, document.body);
}
