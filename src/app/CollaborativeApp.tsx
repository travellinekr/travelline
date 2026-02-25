"use client";

import { throttle } from "lodash";

import { useStorage, useMyPresence, useMutation, useOthers, useSelf } from "@liveblocks/react/suspense";
import { LiveList, LiveMap } from "@liveblocks/client";
import { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Link as LinkIcon, Mouse, ChevronUp, ChevronDown, MapPin, Hotel, Bus, Train, Car, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRole } from "@/hooks/useRole";
import { useRouter } from "next/navigation";
import { getEntryCardBlocks } from "@/data/entryCardGuide";
import { DndContext, DragOverlay, useSensors, useSensor, MouseSensor, TouchSensor, pointerWithin, closestCenter, useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { supabase } from "@/lib/supabaseClient";

import { Inbox } from "../components/board/Inbox";
import { Timeline } from "../components/board/Timeline";
import { DraggableCard, renderCardInternal } from "../components/board/DraggableCard";
import { BaseCard } from "../components/board/cards/BaseCard";
import { TransportCard } from "../components/board/cards/TransportCard";
import { FoodCard } from "../components/board/cards/FoodCard";
import { ShoppingCard } from "../components/board/cards/ShoppingCard";
import { TourSpaCard } from "../components/board/cards/TourSpaCard";
import { LiveCursors } from "../components/board/LiveCursors";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";
import { useCardMutations } from "@/hooks/useCardMutations";
import { Sidebar } from "@/components/board/Sidebar";
import { Confirm } from "@/components/board/Confirm";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

type CategoryType = "destination" | "preparation" | "flight" | "hotel" | "food" | "shopping" | "transport";
type InboxStateType = 'closed' | 'half' | 'full';

// 공유 모달 컴포넌트
function ShareModal({ shareUrl, roomId, onClose, addToast }: { shareUrl: string; roomId: string; onClose: () => void; addToast: (msg: string, type?: 'info' | 'warning') => void }) {
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


// 사용자 아바타 + 팝업 메뉴 컴포넌트
function UserAvatarMenu({ shareUrl, roomId, addToast }: { shareUrl: string; roomId: string; addToast: (msg: string, type?: 'info' | 'warning') => void }) {
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

export function CollaborativeApp({ roomId, initialTitle }: { roomId: string; initialTitle: string }) {
    const columns = useStorage((root) => root.columns);
    const cards = useStorage((root) => root.cards);
    const flightInfo = useStorage((root) => root.flightInfo);

    const [myPresence, updateMyPresence] = useMyPresence();

    const throttledUpdateMyPresence = useMemo(
        () => throttle((cursor: { x: number, y: number }) => {
            updateMyPresence({ cursor });
        }, 50),
        [updateMyPresence]
    );

    // 권한 체크
    const { canEdit, loading: roleLoading } = useRole(roomId);

    const [activeCategory, setActiveCategory] = useState<CategoryType>("destination");
    const [activeDragItem, setActiveDragItem] = useState<any>(null);
    const [activeDay, setActiveDay] = useState("day1");
    const [projectTitle, setProjectTitle] = useState<string>(initialTitle);

    // Confirm dialog state
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingDestinationDrop, setPendingDestinationDrop] = useState<{
        activeId: string;
        draggedCard: any;
        targetColumnId: string;
    } | null>(null);

    // React State는 초기 위치용
    const [mobileCursorPos, setMobileCursorPos] = useState({ x: 0, y: 0 });
    const [isMobileDragging, setIsMobileDragging] = useState(false);

    // 플로팅 버튼 Ref
    const floatingBtnRef = useRef<HTMLDivElement>(null);
    const cachedContainerRect = useRef<DOMRect | null>(null);

    const [inboxState, setInboxState] = useState<InboxStateType>('closed');
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'info' | 'warning' }>>([]);
    const toastIdRef = useRef(0);

    const containerRef = useRef<HTMLDivElement>(null);

    // Toast helper function
    const addToast = (message: string, type: 'info' | 'warning' = 'info') => {
        const id = toastIdRef.current++;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const { setNodeRef: setInboxClosedHeaderRef } = useDroppable({
        id: 'inbox-closed-header',
    });

    const { reorderCard, copyCardToTimeline, removeCardFromTimeline, moveCard, createCard, createCardToColumn } = useCardMutations();

    // createCard wrapper for debugging
    const handleCreateCard = (data: any) => {

        try {
            createCard(data);
        } catch (error) {
            console.error('❌ createCard 에러:', error);
        }
    };


    // Cleanup mutation: removes flight info and all Day 1+ columns when destination is removed
    const cleanupFlightAndDays = useMutation(({ storage }) => {
        // Delete flight info
        storage.delete('flightInfo');

        // Get columns and columnOrder
        const columnsMap = storage.get('columns') as LiveMap<string, any>;
        const columnOrderList = storage.get('columnOrder') as LiveList<string>;

        if (!columnsMap || !columnOrderList) return;

        // Find and remove all Day 1+ columns (day1, day2, day3, etc.)
        const orderArray = columnOrderList.toArray();
        const dayColumnsToRemove: string[] = [];

        for (let i = 0; i < orderArray.length; i++) {
            const colId = orderArray[i];
            // Match day0, day1, day2, day3, etc. (여행준비 포함 전체 초기화)
            if (/^day\d+$/.test(colId)) {
                dayColumnsToRemove.push(colId);
            }
        }

        // Remove from columns map
        dayColumnsToRemove.forEach(colId => {
            columnsMap.delete(colId);
        });

        // Remove from columnOrder (in reverse to maintain indices)
        for (let i = orderArray.length - 1; i >= 0; i--) {
            const colId = orderArray[i];
            if (dayColumnsToRemove.includes(colId)) {
                columnOrderList.delete(i);
            }
        }
    }, []);

    // 모바일 키보드 감지
    useEffect(() => {
        if (typeof window === 'undefined' || !window.visualViewport) return;

        const handleViewportChange = () => {
            const viewport = window.visualViewport;
            if (!viewport) return;

            // 키보드가 올라오면 viewport 높이가 줄어듦 (모바일)
            const viewportHeight = viewport.height;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;

            // 높이 차이가 150px 이상이면 키보드가 올라온 것으로 판단
            setIsKeyboardVisible(heightDiff > 150);
        };

        window.visualViewport.addEventListener('resize', handleViewportChange);
        window.visualViewport.addEventListener('scroll', handleViewportChange);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleViewportChange);
            window.visualViewport?.removeEventListener('scroll', handleViewportChange);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const containerWidth = Math.min(window.innerWidth, 1152);
            const initX = containerWidth - 80;
            const initY = window.innerHeight - 200;

            setMobileCursorPos({ x: initX, y: initY });

            if (floatingBtnRef.current) {
                floatingBtnRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0)`;
            }
        }
    }, []);

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    const publicUrl = `${baseUrl}/room/${roomId}`;

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: canEdit ? { distance: 15 } : { distance: 999999 } }),
        useSensor(TouchSensor, { activationConstraint: canEdit ? { delay: 250, tolerance: 5 } : { distance: 999999 } })
    );

    const destinationCard = useMemo(() => {
        const destCol = (columns as any)?.get('destination-header');
        if (!destCol || destCol.cardIds.length === 0) return null;
        const cardId = destCol.cardIds[0];
        return (cards as any)?.get(cardId) || null;
    }, [columns, cards]);

    // Track previous destination card ID to detect removal
    const prevDestinationCardId = useRef<string | null>(null);

    // p1 카드(입국심사&필요사항) 메모 업데이트 mutation (여행지 삭제 시 초기화용)
    const updateEntryCardNotes = useMutation(({ storage }, notes: any[]) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        const p1Card = cardsMap.get('p1');
        if (p1Card) {
            (p1Card as any).set('notes', notes);
        }
    }, []);

    // p1 카드 메모가 비어있을 때만 초기값 삽입 (기존 메모 보호)
    const setEntryCardNotesIfEmpty = useMutation(({ storage }, notes: any[]) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        const p1Card = cardsMap.get('p1');
        if (!p1Card) return;
        // 이미 유효한 notes가 있으면 덮어쓰지 않음
        const existingNotes = (p1Card as any).get('notes');
        if (Array.isArray(existingNotes) && existingNotes.length > 0) return;
        (p1Card as any).set('notes', notes);
    }, []);

    // 기존 룸의 p1 카드 마이그레이션 (text, isEntryCard 업데이트)
    const migrateP1Card = useMutation(({ storage }) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        const p1Card = cardsMap.get('p1');
        if (p1Card) {
            const currentText = (p1Card as any).get('text');
            // 구버전 텍스트면 업데이트
            if (currentText !== '입국심사&필요사항') {
                (p1Card as any).set('text', '입국심사&필요사항');
            }
            // isEntryCard 플래그가 없으면 추가
            if (!(p1Card as any).get('isEntryCard')) {
                (p1Card as any).set('isEntryCard', true);
            }
            // 기존 잘못된 notes(빈 배열 등) 초기화
            const existingNotes = (p1Card as any).get('notes');
            if (Array.isArray(existingNotes) && existingNotes.length === 0) {
                (p1Card as any).set('notes', undefined);
            }
        }
    }, []);

    // 앱 마운트 시 p1 카드 마이그레이션 실행 (editor/owner만)
    useEffect(() => {
        if (roleLoading || !canEdit) return; // 로딩 중이거나 viewer는 write 불가
        migrateP1Card();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit, roleLoading]);

    // Cleanup flight info and Day columns when destination is removed
    useEffect(() => {
        const currentId = destinationCard?.id || null;
        const prevId = prevDestinationCardId.current;

        // Detect removal: had a destination before, now it's gone
        if (prevId && !currentId && canEdit && !roleLoading) {
            cleanupFlightAndDays();
            // 입국심사 카드 메모 초기화
            updateEntryCardNotes([]);
        }

        // Update ref for next render
        prevDestinationCardId.current = currentId;
    }, [destinationCard, cleanupFlightAndDays, updateEntryCardNotes, canEdit, roleLoading]);

    // 여행지 변경 시 입국심사&필요사항 카드 메모 자동 삽입 (editor/owner만)
    // ⚠️ 이미 메모가 있으면 덮어쓰지 않음 (기존 작성 내용 보호)
    const prevDestCityRef = useRef<string | null>(null);
    useEffect(() => {
        if (roleLoading || !canEdit) return; // 로딩 중이거나 viewer는 write 불가
        const cityName = destinationCard?.text || destinationCard?.title || null;
        const prevCity = prevDestCityRef.current;

        if (cityName && cityName !== prevCity) {
            // 새 도시가 설정됨 → 기존 메모가 없을 때만 초기 블록 삽입
            const blocks = getEntryCardBlocks(cityName);
            setEntryCardNotesIfEmpty(blocks);
        }

        prevDestCityRef.current = cityName;
    }, [destinationCard, setEntryCardNotesIfEmpty, canEdit, roleLoading]);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isMobileDragging) return;
        e.preventDefault();

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            // 드래그 중일 때는 cursor 업데이트 스킵 (draggingCardId 보존)
            if (!activeDragItem) {
                throttledUpdateMyPresence({ x, y });
            }
        }
    };

    const handlePointerLeave = () => {
        if (isMobileDragging) return;
        updateMyPresence({ cursor: null });
    };

    const handleFloatingButtonTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(true);
        if (containerRef.current) {
            cachedContainerRect.current = containerRef.current.getBoundingClientRect();
        }
    };

    const handleFloatingButtonTouchMove = (e: React.TouchEvent) => {
        e.stopPropagation();

        const touch = e.touches[0];
        const newX = touch.clientX - 28;
        const newY = touch.clientY - 28;

        if (floatingBtnRef.current) {
            floatingBtnRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        }

        if (containerRef.current) {
            // Use cached rect if available, otherwise fallback
            const rect = cachedContainerRect.current || containerRef.current.getBoundingClientRect();
            const containerWidth = rect.width;
            const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
            const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

            let relativeX = touch.clientX - rect.left;
            const relativeY = touch.clientY - rect.top;

            const isMobile = windowWidth < 768;
            const inboxTopThreshold = inboxState === 'half' ? windowHeight * 0.5 : (inboxState === 'full' ? 0 : windowHeight);
            const isOverMobileInbox = isMobile && inboxState !== 'closed' && touch.clientY > inboxTopThreshold;

            if (isOverMobileInbox) {
                const normalizedX = touch.clientX / windowWidth;
                relativeX = (containerWidth / 2) + (normalizedX * (containerWidth / 2));
            }

            throttledUpdateMyPresence({ x: Math.round(relativeX), y: Math.round(relativeY) });
        }
    }
    const handleFloatingButtonTouchEnd = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(false);
        cachedContainerRect.current = null;

        if (floatingBtnRef.current) {
            const transform = floatingBtnRef.current.style.transform;
            const match = transform.match(/translate3d\(([^p]+)px,\s*([^p]+)px/);
            if (match) {
                setMobileCursorPos({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
            }
        }
    };

    const handleDragStart = (event: any) => {
        const card = event.active.data.current;
        setActiveDragItem(card);
        if (card && card.category) setActiveCategory(card.category as CategoryType);
    };

    // 커스텀 충돌 감지: 모바일 닫힌 보관함 특별 처리
    const customCollisionDetection = (args: any) => {
        // 🎯 **PRIORITY 1**: destination-header - 중앙 영역만 감지
        const pointerCoords = args.pointerCoordinates;
        if (pointerCoords) {
            const destHeaderContainer = args.droppableContainers.find(
                (container: any) => container.id === 'destination-header'
            );
            if (destHeaderContainer && destHeaderContainer.rect.current) {
                const rect = destHeaderContainer.rect.current;

                // 중앙 80% 영역만 드롭존으로 인정 (좌우 10%씩 여백)
                const margin = (rect.right - rect.left) * 0.1;
                const centerLeft = rect.left + margin;
                const centerRight = rect.right - margin;

                // 포인터가 destination-header 중앙 영역 안에 있는지 확인
                if (
                    pointerCoords.x >= centerLeft &&
                    pointerCoords.x <= centerRight &&
                    pointerCoords.y >= rect.top &&
                    pointerCoords.y <= rect.bottom
                ) {
                    return [{ id: destHeaderContainer.id, data: destHeaderContainer.data }];
                }
            }
        }

        // 모바일이고 보관함이 닫혀있을 때
        if (typeof window !== 'undefined' && window.innerWidth < 768 && inboxState === 'closed') {
            if (pointerCoords) {
                const windowHeight = window.innerHeight;
                // 하단 80px 영역 (닫힌 보관함)
                if (pointerCoords.y > windowHeight - 80) {
                    // droppableContainers에서 inbox-closed-header 찾기
                    const inboxContainer = args.droppableContainers.find(
                        (container: any) => container.id === 'inbox-closed-header'
                    );
                    if (inboxContainer) {
                        return [{ id: inboxContainer.id, data: inboxContainer.data }];
                    }
                }
            }
        }

        const pointerCollisions = pointerWithin(args);
        if (pointerCollisions.length > 0) {
            return pointerCollisions;
        }
        return closestCenter(args);
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        setActiveDragItem(null);

        if (!over || !columns) return;

        const activeId = active.id;
        const overId = over.id;
        const draggedCard = active.data.current;

        let targetColumnId = null;
        let targetIndex = undefined;

        if (overId === 'destination-candidates-timeline') {
            targetColumnId = 'destination-candidates';
        } else if (overId === 'destination-header') {
            targetColumnId = 'destination-header';
        } else if (overId === 'inbox-closed-header') {
            // 닫힌 보관함 헤더에 드롭하면 보관함으로 이동
            targetColumnId = 'inbox';
        } else if (String(overId).includes('timeline')) {
            targetColumnId = String(overId).replace('-timeline', '');
        } else if (overId === 'inbox-dropzone') {
            targetColumnId = 'inbox';
        } else if (overId === 'tourspa-delete-zone') {
            // 투어&스파 삭제 영역에 드롭하면 카드 삭제

            // 카드가 어느 컬럼에 있는지 찾기
            let foundColumnId: string | null = null;
            if (columns) {
                for (const col of (columns as any).values()) {
                    const list = col.cardIds;  // col.get("cardIds") 대신 직접 접근
                    const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
                    if (cardIdsArray.includes(activeId)) {
                        foundColumnId = col.id;
                        break;
                    }
                }
            }

            if (foundColumnId) {
                removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
            } else {
            }

            setActiveDragItem(null);
            return;
        } else if (overId === 'etc-delete-zone') {
            // 기타 삭제 영역에 드롭하면 카드 삭제
            let foundColumnId: string | null = null;
            if (columns) {
                for (const col of (columns as any).values()) {
                    const list = col.cardIds;
                    const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
                    if (cardIdsArray.includes(activeId)) {
                        foundColumnId = col.id;
                        break;
                    }
                }
            }

            if (foundColumnId) {
                removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
            }

            setActiveDragItem(null);
            return;

        } else if (
            overId === 'shopping-delete-zone' ||
            overId === 'hotel-delete-zone' ||
            overId === 'food-delete-zone'
        ) {
            // 쇼핑 / 숙소 / 맛집 삭제 영역에 드롭하면 카드 삭제
            let foundColumnId: string | null = null;
            if (columns) {
                for (const col of (columns as any).values()) {
                    const list = col.cardIds;
                    const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
                    if (cardIdsArray.includes(activeId)) {
                        foundColumnId = col.id;
                        break;
                    }
                }
            }

            if (foundColumnId) {
                removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
            }

            setActiveDragItem(null);
            return;

        } else {
            for (const col of (columns as any).values()) {
                const list = col.cardIds;
                const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
                const idx = cardIdsArray.indexOf(String(overId));
                if (idx !== -1) { targetColumnId = col.id; targetIndex = idx; break; }
            }
        }

        if (!targetColumnId) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2: sourceColumnId 찾기 (어디서 드래그했는지)
        // =========================================
        let sourceColumnId = null;
        let oldIndex = -1;
        for (const col of (columns as any).values()) {
            const list = col.cardIds;
            const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
            const idx = cardIdsArray.indexOf(activeId);
            if (idx !== -1) { sourceColumnId = col.id; oldIndex = idx; break; }
        }

        // sourceColumnId를 찾지 못하면 (유효하지 않은 드래그) 중단
        // 단, picker/sample 카드는 예외 (Picker에서 오는 카드는 sourceColumnId가 없음)
        if (!sourceColumnId && !String(activeId).startsWith('picker-') && !String(activeId).startsWith('sample-')) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 3: 카테고리별 검증 (올바른 카드 타입인지)
        // =========================================

        // 최종 여행지(destination-header)에는 도시 카드만, 딱 1개만 허용
        if (targetColumnId === 'destination-header') {
            // 🔒 항공편이 이미 등록된 경우 여행지 변경 불가
            if (flightInfo) {
                addToast('항공편이 등록된 경우 여행지를 변경할 수 없습니다.', 'warning');
                setActiveDragItem(null);
                return;
            }

            if (draggedCard?.category !== 'destination') {
                addToast('여행지 카드만 넣을 수 있습니다.', 'warning');
                setActiveDragItem(null);
                return;
            }

            // 🔥 CRITICAL: self-drop 체크 (같은 위치에 드롭)
            if (sourceColumnId === 'destination-header') {
                setActiveDragItem(null);
                return;
            }

            // 기존 카드가 있으면 자동으로 교체 (self-drop이 아닌 경우만)
            const destCol = (columns as any).get('destination-header');
            if (destCol && destCol.cardIds.length >= 1) {
                const existingCardId = destCol.cardIds[0];
                removeCardFromTimeline({ cardId: existingCardId, sourceColumnId: 'destination-header' });
            }
        }

        // Picker 카드 처리: DestinationPicker, AccommodationPicker, ShoppingPicker 등에서 드래그
        // picker- 또는 sample-로 시작하는 카드
        if (String(activeId).startsWith('picker-') || String(activeId).startsWith('sample-')) {
            // Destination Picker 카드 → destination-candidates 또는 destination-header
            if (draggedCard?.category === 'destination' && (targetColumnId === 'destination-candidates' || targetColumnId === 'destination-header')) {
                // 여행지 후보에 넣을 때만 중복 체크
                if (targetColumnId === 'destination-candidates') {
                    const candidatesCol = (columns as any).get('destination-candidates');
                    if (candidatesCol) {
                        const existingCardIds = candidatesCol.cardIds;
                        for (const cardId of existingCardIds) {
                            const existingCard = (cards as any).get(cardId);
                            if (existingCard &&
                                existingCard.text === draggedCard.text &&
                                existingCard.date === draggedCard.date) {
                                addToast(`${draggedCard.date} ${draggedCard.text} 카드는 들어가 있습니다.`, 'warning');
                                setActiveDragItem(null);
                                return;
                            }
                        }
                    }
                }

                createCardToColumn({
                    title: draggedCard.text,
                    category: draggedCard.category,
                    type: draggedCard.type || 'travel',
                    description: draggedCard.description,
                    date: draggedCard.date,
                    imageUrl: draggedCard.imageUrl,
                    airports: draggedCard.airports,
                    month: draggedCard.month,  // 🎯 캘린더 초기 월 설정에 필요
                    city: draggedCard.city,    // 🎯 도시 식별자
                    timezone: draggedCard.timezone,
                    targetColumnId: targetColumnId,
                    targetIndex: 0
                });

                // destination-header에 카드를 추가하면 candidates 숨김
                if (targetColumnId === 'destination-header') {
                    addToast('여행지가 등록되어 여행지 후보는 사라집니다.', 'info');
                }

                return;
            }

            // Hotel Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'hotel' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    accommodationType: draggedCard.accommodationType,
                    checkInTime: draggedCard.checkInTime,
                    checkOutTime: draggedCard.checkOutTime,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    description: draggedCard.description,
                    tags: draggedCard.tags,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // Transport Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'transport' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    text: draggedCard.text,
                    title: draggedCard.title,
                    category: draggedCard.category,
                    transportationType: draggedCard.transportationType,
                    city: draggedCard.city,
                    description: draggedCard.description,
                    priceRange: draggedCard.priceRange,
                    availability: draggedCard.availability,
                    features: draggedCard.features,
                    appRequired: draggedCard.appRequired,
                    appName: draggedCard.appName,
                    icon: draggedCard.icon,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // Food Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'food' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    restaurantType: draggedCard.restaurantType,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    cuisine: draggedCard.cuisine,
                    specialty: draggedCard.specialty,
                    priceRange: draggedCard.priceRange,
                    michelin: draggedCard.michelin,
                    reservation: draggedCard.reservation,
                    openingHours: draggedCard.openingHours,
                    features: draggedCard.features,
                    icon: draggedCard.icon,
                    description: draggedCard.description,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // Shopping Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'shopping' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    shoppingType: draggedCard.shoppingType,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    shoppingCategory: draggedCard.shoppingCategory,
                    specialItems: draggedCard.specialItems,
                    priceRange: draggedCard.priceRange,
                    openingHours: draggedCard.openingHours,
                    taxRefund: draggedCard.taxRefund,
                    features: draggedCard.features,
                    icon: draggedCard.icon,
                    description: draggedCard.description,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // TourSpa Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'tourspa' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    tourSpaType: draggedCard.tourSpaType,
                    description: draggedCard.description,
                    duration: draggedCard.duration,
                    priceRange: draggedCard.priceRange,
                    pickupAvailable: draggedCard.pickupAvailable,
                    coordinates: draggedCard.coordinates,
                    reservationRequired: draggedCard.reservationRequired,
                    openingHours: draggedCard.openingHours,
                    features: draggedCard.features,
                    rating: draggedCard.rating,
                    icon: draggedCard.icon,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }
        }


        if (targetColumnId === 'day0') {
            if (draggedCard?.category !== 'preparation') {
                addToast('여행준비에는 여행준비 카드만 들어갑니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 항공 섹션에는 항공 카드만
        if (targetColumnId === 'flights') {
            if (draggedCard?.category !== 'flight') {
                addToast('항공에는 항공 카드만 들어걡니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 여행지 후보에는 여행지 카드만
        if (targetColumnId === 'destination-candidates') {
            if (draggedCard?.category !== 'destination') {
                addToast('여행지 후보에는 여행지 카드만 들어갑니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 도시(destination) 카드는 여행지 후보, 최종 여행지, 보관함에만 드롭 가능
        if (draggedCard?.category === 'destination') {
            if (targetColumnId !== 'destination-candidates' && targetColumnId !== 'destination-header' && targetColumnId !== 'inbox') {
                setActiveDragItem(null);
                return;
            }
        }

        // 🎯 항공카드는 원래 일차에만 머물러야 함 (다른 일차, Inbox, 최종여행지 등으로 이동 불가)
        if (draggedCard?.category === 'flight') {
            // sourceColumnId가 day1, day2 등인지 확인
            const isDayColumn = sourceColumnId && /^day[1-9]\d*$/.test(sourceColumnId);

            if (isDayColumn) {
                // 같은 일차 내에서만 재정렬 허용, 다른 곳으로 이동 시도 시 차단
                if (targetColumnId !== sourceColumnId) {
                    addToast('항공카드는 다른 위치로 이동할 수 없습니다.', 'warning');
                    setActiveDragItem(null);
                    return;
                }
            }
        }

        // =========================================
        // STEP 4: 액션 실행 (source와 target 조합에 따라 분기)
        // =========================================

        // 🔥 CRITICAL: destination-header에서 나가는 경우 먼저 체크 (항공편 정보 확인)
        if (sourceColumnId === 'destination-header' && targetColumnId !== 'destination-header') {
            // flightInfo가 있으면 confirm 창 띄우기
            if (flightInfo) {
                setPendingDestinationDrop({
                    activeId: String(activeId),
                    draggedCard,
                    targetColumnId
                });
                setShowConfirm(true);
                setActiveDragItem(null);
                return; // 이동 중단, confirm 대기
            }

            addToast('여행지 후보가 나타납니다.', 'info');
        }

        if (sourceColumnId === 'inbox' && targetColumnId !== 'inbox') {
            // 맨 뒤에 추가: targetIndex가 없으면 기존 카드 개수를 사용
            let finalTargetIndex = targetIndex;
            if (typeof targetIndex !== 'number') {
                const targetCol = (columns as any).get(targetColumnId);
                finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
            }
            copyCardToTimeline({ originalCardId: activeId, targetColumnId, targetIndex: finalTargetIndex });
        } else if (sourceColumnId !== 'inbox' && targetColumnId === 'inbox') {
            removeCardFromTimeline({ cardId: activeId, sourceColumnId });
            // 보관함에서 해당 카테고리 활성화
            if (draggedCard?.category) {
                setActiveCategory(draggedCard.category as CategoryType);
            }
        } else if (sourceColumnId !== 'inbox' && targetColumnId !== 'inbox') {
            if (sourceColumnId === targetColumnId) {
                if (typeof targetIndex === 'number' && oldIndex !== targetIndex) reorderCard({ columnId: sourceColumnId, oldIndex, newIndex: targetIndex });
            } else {
                // destination-header로 이동하는 경우, 기존 카드가 있으면 먼저 제거
                if (targetColumnId === 'destination-header') {
                    const destCol = (columns as any).get('destination-header');
                    if (destCol && destCol.cardIds.length >= 1) {
                        const existingCardId = destCol.cardIds[0];
                        removeCardFromTimeline({ cardId: existingCardId, sourceColumnId: 'destination-header' });
                    }
                    addToast('여행지가 등록되어 여행지 후보는 사라집니다.', 'info');
                }

                // 맨 뒤에 추가: targetIndex가 없으면 기존 카드 개수를 사용
                let finalTargetIndex = targetIndex;
                if (typeof targetIndex !== 'number') {
                    const targetCol = (columns as any).get(targetColumnId);
                    finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
                }

                moveCard({ cardId: activeId, targetColumnId, targetIndex: finalTargetIndex });
            }
        }

        // 모든 경우에 드래그 상태 초기화
        setActiveDragItem(null);
    };

    const scrollToDay = (dayId: string) => {
        setActiveDay(dayId);
        const element = document.getElementById(`${dayId}-section`);
        if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };

    const getInboxHeightClass = () => {
        switch (inboxState) {
            case 'closed': return 'h-[80px]';
            case 'half': return 'h-[50vh]';
            case 'full': return 'h-[100dvh] top-0 rounded-none';
            default: return 'h-[80px]';
        }
    };

    const handleInboxResize = (direction: 'up' | 'down') => {
        if (direction === 'up') {
            if (inboxState === 'closed') setInboxState('half');
            else if (inboxState === 'half') setInboxState('full');
        } else {
            if (inboxState === 'full') setInboxState('half');
            else if (inboxState === 'half') setInboxState('closed');
        }
    };

    // Confirm handlers for destination change
    const handleConfirmDestinationChange = () => {
        setShowConfirm(false);

        if (!pendingDestinationDrop) return;

        const { activeId, targetColumnId } = pendingDestinationDrop;

        // 항공편/일정 리셋
        cleanupFlightAndDays();

        // 카드 이동 (destination-header → targetColumnId)
        moveCard({ cardId: activeId, targetColumnId, targetIndex: 0 });

        setPendingDestinationDrop(null);
    };

    const handleCancelDestinationChange = () => {
        setShowConfirm(false);
        setPendingDestinationDrop(null);
        // 아무것도 안 함 → destination-header에 기존 카드 유지
    };

    if (!columns || !cards) return <LoadingSkeleton />;

    // useStorage로 직접 inboxCards를 가져와서 반응형 업데이트 활성화
    const inboxCards = useStorage((root) => {
        const inboxCol = (root.columns as any)?.get("inbox");
        if (!inboxCol) return [];

        const cardIds = inboxCol.cardIds || [];
        return cardIds.map((id: string) => (root.cards as any)?.get(id)).filter(Boolean);
    });



    return (
        <>
            <DndContext sensors={sensors} collisionDetection={customCollisionDetection} onDragStart={canEdit ? handleDragStart : undefined} onDragEnd={canEdit ? handleDragEnd : undefined}>
                <style>{`
        body { overscroll-behavior-y: none; background-color: #ffffff; }
        * { touch-action: manipulation; }
        .custom-scrollbar { overflow-y: auto; overscroll-behavior-y: contain; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #E2E8F0; }
      `}</style>

                <div className="h-screen w-full flex flex-col bg-white font-sans text-slate-700 overflow-hidden">
                    <DashboardHeader title={projectTitle} rightSlot={<UserAvatarMenu shareUrl={publicUrl} roomId={roomId} addToast={addToast} />} />
                    <div ref={containerRef} className="w-full flex-1 min-h-0 max-w-6xl mx-auto bg-white flex flex-col border-x border-gray-100 shadow-xl relative overflow-hidden" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
                        <LiveCursors />

                        {/* Confirm Dialog */}
                        {showConfirm && (
                            <Confirm
                                onConfirm={handleConfirmDestinationChange}
                                onCancel={handleCancelDestinationChange}
                            >
                                항공편 정보가 있습니다. 항공편과 일정이 리셋됩니다.
                                <br />
                                변경하시겠습니까?
                            </Confirm>
                        )}

                        <div
                            ref={floatingBtnRef}
                            className="md:hidden fixed z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-grab active:cursor-grabbing touch-none active:scale-95"

                            onTouchStart={handleFloatingButtonTouchStart}
                            onTouchEnd={handleFloatingButtonTouchEnd}
                            onTouchMove={handleFloatingButtonTouchMove}
                        >
                            <Mouse className="w-8 h-8 text-white fill-white/20 -rotate-12" strokeWidth={1.5} />
                        </div>


                        <main className="flex-1 flex overflow-hidden relative">
                            <Sidebar
                                destinationCard={destinationCard}
                                flightInfo={flightInfo as any}
                                activeDay={activeDay}
                                onDayClick={scrollToDay}
                                onFlightRegisterClick={() => {
                                    // TODO: Open flight modal
                                }}
                                addToast={addToast}
                                columns={columns as any}
                            />

                            <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">

                                <section className={`w-full h-full md:w-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative flex flex-col scrollbar-trigger ${inboxState === 'closed' ? 'pb-[80px] md:pb-0' :
                                    inboxState === 'half' ? 'pb-[50vh] md:pb-0' :
                                        'md:pb-0'
                                    }`}>

                                    {/* 🎯 Fixed Destination Header - No Scroll */}
                                    <div className="shrink-0 bg-white border-b border-gray-200 h-[100px]">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['destination-header']} canEdit={canEdit} />
                                    </div>

                                    {/* 📜 Scrollable Main Timeline */}
                                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['candidates', 'days']} canEdit={canEdit} />
                                    </div>
                                </section>

                                <div
                                    className={`
                            fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-300 ease-out flex flex-col
                            md:static md:z-auto md:shadow-none md:rounded-none md:w-1/2 md:h-full md:bg-gray-50 scrollbar-trigger
                            ${isKeyboardVisible ? 'hidden md:flex' : ''}
                            ${getInboxHeightClass()}
                        `}
                                >
                                    <div
                                        className="md:hidden w-full min-h-[80px] flex items-center justify-center bg-white border-b border-gray-100 shrink-0 rounded-t-3xl relative"
                                    >
                                        {inboxState === 'closed' && (
                                            <div
                                                ref={setInboxClosedHeaderRef}
                                                onClick={() => setInboxState('half')}
                                                className={`w-full h-full flex items-center justify-between px-6 cursor-pointer rounded-t-3xl transition-all ${activeDragItem
                                                    ? 'bg-emerald-50 border-2 border-dashed border-emerald-400'
                                                    : 'active:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-1 flex-1">
                                                    <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                                                    <span className={`text-[10px] font-bold ${activeDragItem ? 'text-emerald-600' : 'text-gray-400'}`}>
                                                        {activeDragItem ? '여기에 놓으면 보관함으로 이동' : '보관함 열기'}
                                                    </span>
                                                </div>
                                                <ChevronUp className={`w-5 h-5 ${activeDragItem ? 'text-emerald-600' : 'text-gray-400'}`} />
                                            </div>
                                        )}

                                        {inboxState !== 'closed' && (
                                            <div className="w-full h-full flex items-center justify-between px-6">
                                                <button
                                                    onClick={() => handleInboxResize('down')}
                                                    className="p-2 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-full transition-colors"
                                                >
                                                    <ChevronDown className="w-5 h-5" />
                                                </button>

                                                <div className="flex flex-col items-center gap-1" onClick={() => handleInboxResize('down')}>
                                                    <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                                                    <span className="text-sm font-bold text-slate-700">보관함</span>
                                                </div>

                                                <button
                                                    onClick={() => handleInboxResize('up')}
                                                    disabled={inboxState === 'full'}
                                                    className={`p-2 rounded-full transition-colors ${inboxState === 'full' ? 'text-gray-200 cursor-default' : 'text-gray-400 hover:text-slate-700 hover:bg-gray-100'}`}
                                                >
                                                    <ChevronUp className="w-5 h-5" />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 overflow-hidden bg-gray-50 md:bg-transparent">
                                        <Inbox
                                            cards={inboxCards}
                                            activeCategory={activeCategory}
                                            setActiveCategory={setActiveCategory}
                                            activeDragItem={activeDragItem}
                                            onCreateCard={handleCreateCard}
                                            onRemoveCard={(cardId: string) => removeCardFromTimeline({ cardId, sourceColumnId: 'inbox' })}
                                            destinationCard={destinationCard}
                                            canEdit={canEdit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>

                        <DragOverlay dropAnimation={null}>
                            {activeDragItem ? (
                                String(activeDragItem.id).startsWith('picker-hotel-') ? (
                                    // Hotel Picker 카드: BaseCard 스타일
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <BaseCard
                                            colorClass="bg-rose-400"
                                            icon={Hotel}
                                            category={activeDragItem.accommodationType === 'resort' ? 'Resort' : 'Hotel'}
                                            className="h-[72px] shadow-xl"
                                        >
                                            <div className="flex flex-col justify-center w-full">
                                                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                                                    {activeDragItem.title || "호텔 이름"}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
                                                        Check-in
                                                    </span>
                                                    <span className="text-[11px] text-gray-500">
                                                        {activeDragItem.checkInTime || "15:00"}
                                                    </span>
                                                    {activeDragItem.tags && activeDragItem.tags.length > 0 && (
                                                        <>
                                                            <span className="text-gray-300">|</span>
                                                            {activeDragItem.tags.slice(0, 3).map((tag: string, index: number) => (
                                                                <span key={index} className="text-[9px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </BaseCard>
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-transport-') ? (
                                    // Transport Picker 카드: TransportCard 스타일
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <TransportCard card={activeDragItem} className="shadow-xl" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-food-') ? (
                                    // Food Picker 카드: FoodCard 스타일
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <FoodCard card={activeDragItem} className="shadow-xl" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-shopping-') ? (
                                    // Shopping Picker 카드: ShoppingCard 스타일
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <ShoppingCard card={activeDragItem} className="shadow-xl" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-tourspa-') ? (
                                    // TourSpa Picker 카드: TourSpaCard 스타일
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <TourSpaCard card={activeDragItem} className="shadow-xl" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-') ? (
                                    // Destination Picker 도시 카드: 타임라인 compact 스타일 (72px 가로 배치)
                                    <div className="bg-white hover:bg-slate-50 border border-gray-100 flex items-center gap-0 relative h-[72px] min-w-[320px] transition-all overflow-hidden w-full rounded-lg shadow-xl">
                                        {/* Left: Image (Fixed 80px width) */}
                                        <div className="w-20 h-full relative flex items-center justify-center overflow-hidden shrink-0 border-r border-gray-50">
                                            {activeDragItem.imageUrl ? (
                                                <img
                                                    src={activeDragItem.imageUrl}
                                                    alt={activeDragItem.text}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-emerald-500 opacity-50" />
                                                </div>
                                            )}
                                            <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm z-10">
                                                추천
                                            </div>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="flex-1 min-w-0 flex flex-col justify-center h-full px-3 py-1">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <span className="font-bold text-slate-800 text-sm leading-none truncate pr-2">
                                                    {activeDragItem.text}
                                                </span>
                                                <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
                                                    여행지
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight">
                                                {activeDragItem.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    // 일반 카드: Compact 스타일 + 테두리 wrapper
                                    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        {renderCardInternal(activeDragItem, { variant: 'compact' })}
                                    </div>
                                )
                            ) : null}
                        </DragOverlay>
                    </div>
                </div>
            </DndContext >


            {/* 토스트 메시지들 - 오른쪽 아래 스택 */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col-reverse gap-2">
                {toasts.map((toast, index) => (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-3 md:gap-4 pl-3 pr-4 md:pl-4 md:pr-5 py-2.5 md:py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300 ${toast.type === 'warning'
                            ? 'bg-rose-100 text-rose-800 border border-rose-300/50'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300/50'
                            }`}
                    >
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${toast.type === 'warning'
                            ? 'bg-rose-200 border border-rose-400/50'
                            : 'bg-emerald-200 border border-emerald-400/50'
                            }`}>
                            <span className={`text-sm md:text-base ${toast.type === 'warning' ? 'text-rose-700' : 'text-emerald-700'}`}>
                                {toast.type === 'warning' ? '⚠' : '✓'}
                            </span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className={`text-xs md:text-sm font-semibold ${toast.type === 'warning' ? 'text-rose-800' : 'text-emerald-800'}`}>{toast.message}</span>
                        </div>
                        <button
                            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                            className={`ml-2 transition-colors ${toast.type === 'warning' ? 'text-rose-500 hover:text-rose-700' : 'text-emerald-500 hover:text-emerald-700'}`}
                        >
                            <span className="text-lg">×</span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}