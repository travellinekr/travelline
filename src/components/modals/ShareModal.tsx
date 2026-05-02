"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOthers, useSelf } from "@/liveblocks.config";
import { supabase } from "@/lib/supabaseClient";

export function ShareModal({ shareUrl, roomId, onClose, addToast }: { shareUrl: string; roomId: string; onClose: () => void; addToast: (msg: string, type?: 'info' | 'warning') => void }) {
    const others = useOthers();
    const self = useSelf();
    const [members, setMembers] = useState<any[]>([]);

    // Supabase에서 전체 멤버 목록 조회
    useEffect(() => {
        supabase
            .from('project_members')
            .select('user_id, role, users:user_id(email, raw_user_meta_data)')
            .eq('project_id', roomId)
            .then(({ data }) => {
                if (data) setMembers(data);
            });
    }, [roomId]);

    // Liveblocks에서 현재 접속 중인 userInfo 목록 (connectionId 기준)
    const onlineUserIds = new Set([
        ...(self ? [self.id] : []),
        ...others.map((o) => o.id),
    ]);

    const handleKakao = () => {
        const kakaoUrl = `kakaotalk://msg/send?text=${encodeURIComponent(shareUrl)}`;
        window.location.href = kakaoUrl;
        setTimeout(() => {
            // 앱이 없으면 클립보드에 복사 안내
        }, 1500);
    };

    const handleLine = () => {
        window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            addToast('링크가 복사되었습니다!', 'info');
            onClose();
        } catch {
            addToast('복사에 실패했습니다.', 'warning');
        }
    };

    // 역할 한글 라벨
    const roleLabel = (role: string) => {
        if (role === 'owner') return { text: '소유자', color: 'text-emerald-600 bg-emerald-50' };
        if (role === 'editor') return { text: '편집자', color: 'text-blue-600 bg-blue-50' };
        return { text: '뷰어', color: 'text-slate-500 bg-slate-100' };
    };

    return createPortal(
        <div
            style={{ position: 'fixed', inset: 0, zIndex: 9999999 }}
            className="flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="bg-white rounded-3xl shadow-2xl w-80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-slate-800">공유하기</h2>
                    <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-slate-400 hover:text-slate-600">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                </div>

                {/* 공유 버튼들 */}
                <div className="flex justify-center gap-8 py-6 px-4">
                    {/* 카카오톡 */}
                    <button onClick={handleKakao} className="flex flex-col items-center gap-2 group">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform" style={{ backgroundColor: '#FEE500' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.03 3 3 6.36 3 10.5c0 2.64 1.65 4.97 4.13 6.32l-1.05 3.87c-.08.3.25.54.5.36L11.1 18c.29.03.59.05.9.05 4.97 0 9-3.36 9-7.5S16.97 3 12 3z" fill="#3C1E1E" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">카카오톡</span>
                    </button>

                    {/* LINE */}
                    <button onClick={handleLine} className="flex flex-col items-center gap-2 group">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform" style={{ backgroundColor: '#06C755' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                <path d="M19.365 9.089c.19 0 .343.153.343.342v1.69a.342.342 0 01-.343.342h-2.55v1.066h2.55c.19 0 .343.153.343.342v1.69a.342.342 0 01-.343.342h-4.583a.342.342 0 01-.341-.342V9.431c0-.189.152-.342.341-.342h4.583zm-6.7 0c.189 0 .342.153.342.342v5.32a.342.342 0 01-.342.342h-1.69a.342.342 0 01-.342-.342V9.431c0-.189.153-.342.342-.342h1.69zm-3.404 0c.16 0 .302.106.337.264l1.26 5.32a.341.341 0 01-.337.42h-1.69a.342.342 0 01-.337-.264L7.23 11.44l-.745 3.389a.342.342 0 01-.337.264h-1.69a.341.341 0 01-.337-.42l1.26-5.32a.342.342 0 01.337-.264h3.543zM12 2C6.477 2 2 5.925 2 10.765c0 3.717 2.503 6.942 6.165 8.424l-.43 1.597a.465.465 0 00.683.524L11.9 19.5c.032.002.065.003.1.003 5.523 0 10-3.925 10-8.738C22 5.925 17.523 2 12 2z" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">LINE</span>
                    </button>

                    {/* 링크 복사 */}
                    <button onClick={handleCopy} className="flex flex-col items-center gap-2 group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">링크 복사</span>
                    </button>
                </div>

                {/* 멤버 목록 */}
                {members.length > 0 && (
                    <div className="mx-4 mb-3 border border-slate-100 rounded-2xl overflow-hidden">
                        <div className="px-3 py-2 bg-slate-50 border-b border-slate-100">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">멤버 {members.length}명</span>
                        </div>
                        <div className="max-h-40 overflow-y-auto divide-y divide-slate-50">
                            {members.map((m: any) => {
                                const isOnline = onlineUserIds.has(m.user_id);
                                const meta = m.users?.raw_user_meta_data;
                                const name = meta?.full_name || meta?.name || m.users?.email?.split('@')[0] || '사용자';
                                const avatar = meta?.avatar_url || meta?.picture || '';
                                const rl = roleLabel(m.role);
                                const colors = ['bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500'];
                                const avatarColor = colors[m.user_id.charCodeAt(0) % colors.length];
                                return (
                                    <div key={m.user_id} className="flex items-center gap-2.5 px-3 py-2">
                                        {/* 아바타 */}
                                        <div className="relative shrink-0">
                                            {avatar ? (
                                                <img src={avatar} alt={name} className="w-7 h-7 rounded-full object-cover" />
                                            ) : (
                                                <div className={`w-7 h-7 ${avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                                                    {name[0]?.toUpperCase()}
                                                </div>
                                            )}
                                            {/* 온/오프라인 뱃지 */}
                                            <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${isOnline ? 'bg-emerald-400' : 'bg-slate-300'}`} />
                                        </div>
                                        {/* 이름 */}
                                        <span className="flex-1 text-xs font-medium text-slate-700 truncate">{name}</span>
                                        {/* 역할 뱃지 */}
                                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${rl.color}`}>{rl.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* URL 표시 + 복사 */}
                <div className="mx-4 mb-4 flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
                    <span className="flex-1 text-xs text-slate-500 truncate font-mono">{shareUrl}</span>
                    <button
                        onClick={handleCopy}
                        className="shrink-0 text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-lg transition-colors"
                    >
                        복사
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
