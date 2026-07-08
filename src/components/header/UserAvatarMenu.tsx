"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, Crown, UserMinus } from "lucide-react";
import { useOthers, useSelf, useBroadcastEvent, useEventListener } from "@/liveblocks.config";
import { useAuth } from "@/hooks/useAuth";
import { useRole } from "@/hooks/useRole";
import { supabase } from "@/lib/supabaseClient";
import { ShareModal } from "@/components/modals/ShareModal";
import { ConfirmOwnerTransferModal } from "@/components/modals/ConfirmOwnerTransferModal";

type Role = 'owner' | 'editor' | 'viewer';

interface MemberRecord {
    user_id: string;
    role: Role;
    name?: string;
    email?: string;
    avatar?: string;
}

export function UserAvatarMenu({ shareUrl, roomId, addToast }: { shareUrl: string; roomId: string; addToast: (msg: string, type?: 'info' | 'warning') => void }) {
    const { user, signOut } = useAuth();
    const router = useRouter();
    const others = useOthers();
    const self = useSelf();
    const { isOwner: iAmOwner } = useRole(roomId);
    const broadcast = useBroadcastEvent();
    const [open, setOpen] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [popupPos, setPopupPos] = useState({ top: 0, right: 0 });
    const [members, setMembers] = useState<MemberRecord[]>([]);
    const [openActionsFor, setOpenActionsFor] = useState<string | null>(null);
    const [transferTarget, setTransferTarget] = useState<MemberRecord | null>(null);
    const [pendingUserId, setPendingUserId] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const email = user?.email || '';
    const displayName = user?.user_metadata?.full_name || email.split('@')[0] || '사용자';

    // 멤버 목록 재조회 (마운트 시 + 플로팅 메뉴 열릴 때마다)
    const fetchMembers = useCallback(() => {
        if (!roomId) return;
        fetch(`/api/projects/${roomId}/members`)
            .then((res) => res.json())
            .then(({ members: data }) => {
                if (data) setMembers(data);
            })
            .catch((err) => console.error('[UserAvatarMenu] members fetch error:', err));
    }, [roomId]);

    useEffect(() => { fetchMembers(); }, [fetchMembers]);

    // 역할 변경 이벤트: 실시간으로 members 재조회 (본인이 대상이면 안내 토스트 추가)
    useEventListener(({ event }) => {
        if (event.type === 'ROLE_CHANGED') {
            fetchMembers();
            if (event.userId === self?.id) {
                addToast('내 권한이 변경되었어요. 새로고침해주세요.', 'info');
            }
        }
    });

    // 현재 Liveblocks 접속 중인 user_id 목록
    const onlineIds = new Set([
        ...(self ? [self.id] : []),
        ...others.map((o) => o.id),
    ]);

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
                setOpenActionsFor(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!open && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPopupPos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
            fetchMembers(); // 열 때마다 최신화
        }
        setOpen(!open);
    };

    const handleSignOut = async () => {
        await signOut();
        router.push('/');
    };

    // API 호출 헬퍼
    const patchMemberRole = async (targetUserId: string, role: Role): Promise<boolean> => {
        const { data: { session } } = await supabase.auth.getSession();
        const token = session?.access_token;
        if (!token) {
            addToast('로그인이 필요해요.', 'warning');
            return false;
        }
        const res = await fetch(`/api/projects/${roomId}/members/${targetUserId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ role }),
        });
        if (!res.ok) {
            const j = await res.json().catch(() => ({}));
            addToast(j?.error || '변경에 실패했어요.', 'warning');
            return false;
        }
        return true;
    };

    const deleteMember = async (targetUserId: string): Promise<boolean> => {
        const { data: { session } } = await supabase.auth.getSession();
        const token = session?.access_token;
        if (!token) {
            addToast('로그인이 필요해요.', 'warning');
            return false;
        }
        const res = await fetch(`/api/projects/${roomId}/members/${targetUserId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
            const j = await res.json().catch(() => ({}));
            addToast(j?.error || '내보내기에 실패했어요.', 'warning');
            return false;
        }
        return true;
    };

    const handleRoleChange = async (targetUserId: string, newRole: 'editor' | 'viewer') => {
        setPendingUserId(targetUserId);
        const ok = await patchMemberRole(targetUserId, newRole);
        if (ok) {
            setMembers((prev) => prev.map((m) => (m.user_id === targetUserId ? { ...m, role: newRole } : m)));
            addToast(newRole === 'editor' ? '편집자로 변경되었어요.' : '뷰어로 변경되었어요.', 'info');
            broadcast({ type: 'ROLE_CHANGED', userId: targetUserId });
        }
        setOpenActionsFor(null);
        setPendingUserId(null);
    };

    const handleOwnerTransfer = async () => {
        if (!transferTarget) return;
        setPendingUserId(transferTarget.user_id);
        const ok = await patchMemberRole(transferTarget.user_id, 'owner');
        if (ok) {
            setMembers((prev) => prev.map((m) => {
                if (m.user_id === transferTarget.user_id) return { ...m, role: 'owner' };
                if (m.user_id === self?.id) return { ...m, role: 'editor' };
                return m;
            }));
            addToast('소유자를 위임했어요. 새로고침 후 반영됩니다.', 'info');
            broadcast({ type: 'ROLE_CHANGED', userId: transferTarget.user_id });
        }
        setTransferTarget(null);
        setOpenActionsFor(null);
        setPendingUserId(null);
    };

    const handleRemove = async (target: MemberRecord) => {
        if (!confirm(`${target.name || '사용자'} 님을 내보낼까요?`)) return;
        setPendingUserId(target.user_id);
        const ok = await deleteMember(target.user_id);
        if (ok) {
            setMembers((prev) => prev.filter((m) => m.user_id !== target.user_id));
            addToast('내보냈어요.', 'info');
            broadcast({ type: 'ROLE_CHANGED', userId: target.user_id });
        }
        setOpenActionsFor(null);
        setPendingUserId(null);
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

    // 역할 라벨/색상
    const roleMeta = (role: Role | null) => {
        if (role === 'owner') return { text: '소유자', cls: 'text-emerald-600 bg-emerald-50' };
        if (role === 'editor') return { text: '편집자', cls: 'text-blue-600 bg-blue-50' };
        if (role === 'viewer') return { text: '뷰어', cls: 'text-slate-500 bg-slate-100' };
        return { text: '손님', cls: 'text-orange-500 bg-orange-50' };
    };

    // 역할 뱃지 렌더 (owner 만 클릭 가능. 자기 자신 · owner 대상 제외)
    const renderRoleBadge = (target: { user_id: string; role: Role | null; name?: string }) => {
        const meta = roleMeta(target.role);
        const isSelf = target.user_id === self?.id;
        const isTargetOwner = target.role === 'owner';
        const canManage = iAmOwner && !isSelf && !isTargetOwner && target.role !== null;

        if (!canManage) {
            return (
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md shrink-0 flex items-center gap-1 ${meta.cls}`}>
                    {isTargetOwner && <Crown className="w-2.5 h-2.5" />}
                    {meta.text}
                </span>
            );
        }

        const isOpen = openActionsFor === target.user_id;
        const isPending = pendingUserId === target.user_id;

        return (
            <div className="relative shrink-0">
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenActionsFor(isOpen ? null : target.user_id);
                    }}
                    disabled={isPending}
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 hover:opacity-80 transition-opacity ${meta.cls} ${isPending ? 'opacity-50' : ''}`}
                >
                    {meta.text}
                    <ChevronDown className="w-2.5 h-2.5" />
                </button>
                {isOpen && (
                    <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-[1000000]">
                        {target.role !== 'editor' && (
                            <button
                                type="button"
                                onClick={() => handleRoleChange(target.user_id, 'editor')}
                                className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                편집자로 변경
                            </button>
                        )}
                        {target.role !== 'viewer' && (
                            <button
                                type="button"
                                onClick={() => handleRoleChange(target.user_id, 'viewer')}
                                className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                                뷰어로 변경
                            </button>
                        )}
                        <div className="my-1 border-t border-gray-100" />
                        <button
                            type="button"
                            onClick={() => {
                                const rec = members.find((m) => m.user_id === target.user_id);
                                if (rec) setTransferTarget(rec);
                            }}
                            className="w-full text-left px-3 py-1.5 text-xs text-amber-600 hover:bg-amber-50 transition-colors flex items-center gap-1.5"
                        >
                            <Crown className="w-3 h-3" />
                            소유자 위임
                        </button>
                        <div className="my-1 border-t border-gray-100" />
                        <button
                            type="button"
                            onClick={() => {
                                const rec = members.find((m) => m.user_id === target.user_id);
                                if (rec) handleRemove(rec);
                            }}
                            className="w-full text-left px-3 py-1.5 text-xs text-red-500 hover:bg-red-50 transition-colors flex items-center gap-1.5"
                        >
                            <UserMinus className="w-3 h-3" />
                            내보내기
                        </button>
                    </div>
                )}
            </div>
        );
    };

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
                    className="w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
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
                            <div className="max-h-52 overflow-y-auto overflow-x-visible">
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
                                        const guestLabel = totalGuests > 1 ? `손님 ${guestNum}` : '손님';
                                        const targetName = isGuest ? guestLabel : (memberRecord?.name || name);
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
                                                    <p className="text-xs font-medium text-slate-700 truncate">{targetName}</p>
                                                    {!isGuest && infoEmail && (
                                                        <p className="text-[10px] text-slate-400 truncate">{infoEmail}</p>
                                                    )}
                                                </div>
                                                {renderRoleBadge({
                                                    user_id: other.id || '',
                                                    role: (memberRecord?.role as Role) ?? null,
                                                    name: targetName,
                                                })}
                                            </div>
                                        );
                                    });
                                })()}

                                {/* 등록됐지만 미접속인 멤버(오프라인) */}
                                {members
                                    .filter((m) => !onlineIds.has(m.user_id) && m.user_id !== self?.id)
                                    .map((m) => {
                                        const mName = m.name || '사용자';
                                        const mEmail = m.email || '';
                                        const mAvatar = m.avatar || '';
                                        return (
                                            <div key={m.user_id} className="flex items-center gap-2.5 px-4 py-2 opacity-60">
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
                                                {renderRoleBadge({ user_id: m.user_id, role: m.role, name: mName })}
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

            {/* 소유자 위임 확인 모달 */}
            {transferTarget && (
                <ConfirmOwnerTransferModal
                    targetName={transferTarget.name || '사용자'}
                    onConfirm={handleOwnerTransfer}
                    onClose={() => setTransferTarget(null)}
                    loading={pendingUserId === transferTarget.user_id}
                />
            )}
        </>
    );

}
