'use client';

import { LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import TravellineLogo from '@/components/TravellineLogo';
import Link from 'next/link';

export default function DashboardHeader({ title, rightSlot }: { title?: string; rightSlot?: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, right: 0 });
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleTogglePopup = () => {
    if (!popupOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopupPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setPopupOpen(!popupOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '사용자';
  const email = user?.email || '';

  // 이니셜 추출 (최대 2글자)
  const getInitials = () => {
    const name = user?.user_metadata?.full_name;
    if (name) {
      const parts = name.trim().split(' ');
      if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
      return name[0].toUpperCase();
    }
    return email ? email[0].toUpperCase() : '?';
  };

  // 아바타 배경색 (이메일 기반 고정 색상)
  const colors = ['bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'];
  const colorIndex = email ? email.charCodeAt(0) % colors.length : 0;
  const avatarColor = colors[colorIndex];

  // 팝업 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 비로그인 상태: 로그인/회원가입 버튼 표시
  if (!user) {
    return (
      <header className="h-16 sm:h-20 bg-white border-b shadow-sm shrink-0">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              <TravellineLogo size={32} />
              <span className="hidden sm:inline">{title ?? 'Travelline'}</span>
            </Link>
          </h1>

          {/* 로그인/회원가입 버튼 */}
          {rightSlot ?? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push('/login')}
                className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-1.5"
              >
                로그인
              </button>
              <button
                onClick={() => router.push('/login')}
                className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-1.5 rounded-lg shadow-sm"
              >
                회원가입
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="h-16 sm:h-20 bg-white border-b shadow-sm shrink-0">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              <TravellineLogo size={32} />
              <span className="hidden sm:inline">{title ?? 'Travelline'}</span>
            </Link>
          </h1>

          {/* 사용자 아바타 */}
          {rightSlot ?? (
            <div>
              <button
                ref={buttonRef}
                onClick={handleTogglePopup}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className={`w-9 h-9 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                  {getInitials()}
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${popupOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 팝업 - fixed로 모든 레이어 위에 렌더링 */}
      {popupOpen && (
        <div
          ref={popupRef}
          style={{ top: popupPos.top, right: popupPos.right }}
          className="fixed w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[9999] animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* 사용자 정보 */}
          <div className="px-4 py-3 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {getInitials()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{displayName}</p>
                <p className="text-xs text-slate-400 truncate">{email}</p>
              </div>
            </div>
          </div>

          {/* 로그아웃 */}
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            로그아웃
          </button>
        </div>
      )}
    </>
  );
}