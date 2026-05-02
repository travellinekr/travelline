"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut } from "lucide-react";
import { useOthers, useSelf } from "@/liveblocks.config";
import { useAuth } from "@/hooks/useAuth";
import { ShareModal } from "@/components/modals/ShareModal";

export function UserAvatarMenu({ shareUrl, roomId, addToast }: { shareUrl: string; roomId: string; addToast: (msg: string, type?: 'info' | 'warning') => void }) {
    const { user, signOut } = useAuth();
    const router = useRouter();
    const others = useOthers();
    const self = useSelf();
    const [open, setOpen] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [popupPos, setPopupPos] = useState({ top: 0, right: 0 });
    const [members, setMembers] = useState<any[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const email = user?.email || '';
    const displayName = user?.user_metadata?.full_name || email.split('@')[0] || '사용자';

    // roomId가 있을 때 멤버 목록 로드 (이름/이메일/아바타 포함)
    useEffect(() => {
        if (!roomId) return;
        fetch(`/api/projects/${roomId}/members`)
            .then((res) => res.json())
            .then(({ members: data }) => {
                if (data) setMembers(data);
            })
            .catch((err) => console.error('[UserAvatarMenu] members fetch error:', err));
    }, [roomId]);

    // 현재 Liveblocks 접속 중인 user_id 목록
    const onlineIds = new Set([
        ...(self ? [self.id] : []),
        ...others.map((o) => o.id),
    ]);
    // project_members에 등록된 user_id 목록
    const memberIds = new Set(members.map((m) => m.user_id));

    // 이니셜 추출
    const getInitials = () => {
        const name = user?.user_metadata?.full_name;
        if (name) {
            const parts = name.trim().split(' ');
            if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
            return name[0].toUpperCase();
        }
        return email ? email[0].toUpperCase() : '?';
    };

    // 이메일 기반 고정 색상
    const colors = ['bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'];
    const avatarColor = email ? colors[email.charCodeAt(0) % colors.length] : 'bg-slate-400';

    // 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!open && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPopupPos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
        }
        setOpen(!open);
    };

    const handleSignOut = async () => {
        await signOut();
        router.push('/');
    };

    // ─── 비로그인 사용자: 회원가입 버튼 표시 ───
    if (!user) {
        // shareUrl에서 경로만 추출 (예: /room/abc-123)
        const boardPath = (() => {
            try { return new URL(shareUrl).pathname; } catch { return '/'; }
        })();
        const loginUrl = `/login?redirect=${encodeURIComponent(boardPath)}`;

        return (
            <div className="flex items-center gap-2">
                <button
                    onClick={() => router.push(loginUrl)}
                    className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-1.5"
                >
                    로그인
                </button>
                <button
                    onClick={() => router.push(loginUrl)}
                    className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-1.5 rounded-lg shadow-sm"
                >
                    회원가입
                </button>
            </div>
        );
    }


    return (
        <>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
                {/* 내 아바타 - 타인 접속 시 온라인 뱃지 표시 */}
                <div className="relative">
                    <div className={`w-9 h-9 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm border-2 border-white`}>
                        {getInitials()}
                    </div>
                    {others.length > 0 && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
                    )}
                </div>
                {/* 혼자면 화살표, 타인 있으면 접속자 수 */}
                {others.length > 0 ? (
                    <span className="text-xs font-bold text-slate-500">{others.length}</span>
                ) : (
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                )}
            </button>

            {open && typeof document !== 'undefined' && createPortal(
                <div
                    ref={ref}
                    style={{ top: popupPos.top, right: popupPos.right, position: 'fixed', zIndex: 999999 }}
                    className="w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                >
                    {/* 사용자 정보 */}
                    <div className="px-4 py-3 border-b border-gray-50">
                        <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                                {getInitials()}
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-800 truncate">{displayName}</p>
                                <p className="text-xs text-slate-400 truncate">{email}</p>
                            </div>
                        </div>
                    </div>
                    {/* ── 접속자 목록 ── */}
                    {(others.length > 0 || members.length > 0) && (
                        <div className="border-t border-gray-50 pt-1 pb-1">
                            <p className="px-4 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wide">멤버</p>
                            <div className="max-h-40 overflow-y-auto">
                                {/* 현재 접속 중인 다른 사람들 */}
                                {(() => {
                                    // 손님(미등록) 번호 사전 계산
                                    let guestIdx = 1;
                                    const guestNumMap = new Map<number, number>();
                                    others.forEach((o) => {
                                        if (!members.find((m) => m.user_id === o.id)) {
                                            guestNumMap.set(o.connectionId, guestIdx++);
                                        }
                                    });
                                    const totalGuests = guestIdx - 1;

                                    return others.map((other) => {
                                        const info = other.info as any;
                                        const name = info?.name || '사용자';
                                        const infoEmail = info?.email || '';
                                        const avatar = info?.avatar || '';
                                        const color = info?.color || '#94a3b8';
                                        const memberRecord = members.find((m) => m.user_id === other.id);
                                        const isGuest = !memberRecord;
                                        const guestNum = guestNumMap.get(other.connectionId);
                                        // 손님이 2명 이상이면 번호 부여, 1명이면 그냥 손님
                                        const guestLabel = totalGuests > 1 ? `손님 ${guestNum}` : '손님';
                                        const role = memberRecord?.role || null;
                                        const roleLabel = role === 'owner' ? { text: '소유자', cls: 'text-emerald-600 bg-emerald-50' }
                                            : role === 'editor' ? { text: '편집자', cls: 'text-blue-600 bg-blue-50' }
                                                : role === 'viewer' ? { text: '뷰어', cls: 'text-slate-500 bg-slate-100' }
                                                    : { text: '손님', cls: 'text-orange-500 bg-orange-50' };
                                        return (
                                            <div key={other.connectionId} className="flex items-center gap-2.5 px-4 py-2">
                                                <div className="relative shrink-0">
                                                    {avatar && !isGuest ? (
                                                        <img src={avatar} alt={name} className="w-7 h-7 rounded-full object-cover" />
                                                    ) : (
                                                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: color }}>
                                                            {isGuest ? '게' : name[0]?.toUpperCase()}
                                                        </div>
                                                    )}
                                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-medium text-slate-700 truncate">{isGuest ? guestLabel : name}</p>
                                                    {!isGuest && infoEmail && (
                                                        <p className="text-[10px] text-slate-400 truncate">{infoEmail}</p>
                                                    )}
                                                </div>
                                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md shrink-0 ${roleLabel.cls}`}>
                                                    {roleLabel.text}
                                                </span>
                                            </div>
                                        );
                                    });
                                })()}

                                {/* 등록됐지만 미접속인 멤버(오프라인) */}
                                {members
                                    .filter((m) => !onlineIds.has(m.user_id) && m.user_id !== self?.id)
                                    .map((m) => {
                                        const role = m.role || 'viewer';
                                        const roleLabel = role === 'owner' ? { text: '소유자', cls: 'text-emerald-600 bg-emerald-50' }
                                            : role === 'editor' ? { text: '편집자', cls: 'text-blue-600 bg-blue-50' }
                                                : { text: '뷰어', cls: 'text-slate-500 bg-slate-100' };
                                        const mName = m.name || '사용자';
                                        const mEmail = m.email || '';
                                        const mAvatar = m.avatar || '';
                                        return (
                                            <div key={m.user_id} className="flex items-center gap-2.5 px-4 py-2 opacity-50">
                                                <div className="relative shrink-0">
                                                    {mAvatar ? (
                                                        <img src={mAvatar} alt={mName} className="w-7 h-7 rounded-full object-cover grayscale" />
                                                    ) : (
                                                        <div className="w-7 h-7 bg-slate-300 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                            {mName[0]?.toUpperCase()}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-medium text-slate-500 truncate">{mName}</p>
                                                    {mEmail && <p className="text-[10px] text-slate-400 truncate">{mEmail}</p>}
                                                </div>
                                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md shrink-0 ${roleLabel.cls}`}>
                                                    {roleLabel.text}
                                                </span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )}
                    {/* 공유하기 */}
                    <button
                        onClick={() => { setShowShare(true); setOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                        공유하기
                    </button>
                    {/* 로그아웃 */}
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        로그아웃
                    </button>
                </div>,
                document.body
            )}

            {/* 공유 모달 */}
            {showShare && typeof document !== 'undefined' && (
                <ShareModal
                    shareUrl={shareUrl}
                    roomId={roomId}
                    onClose={() => setShowShare(false)}
                    addToast={addToast}
                />
            )}
        </>
    );

}
