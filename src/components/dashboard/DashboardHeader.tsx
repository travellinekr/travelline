'use client';

import { LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import TravellineLogo from '@/components/TravellineLogo';
import Link from 'next/link';
import HeaderNav from '@/components/nav/HeaderNav';
import { getAvatarInitials } from '@/lib/initials';

export default function DashboardHeader({ title, rightSlot, sticky = false, destinationCity, onExpenseClick, onCommunityClick, navAtSplit = false }: { title?: string; rightSlot?: React.ReactNode; sticky?: boolean; destinationCity?: string | null; onExpenseClick?: () => void; onCommunityClick?: (tab: 'notice' | 'inquiry') => void; navAtSplit?: boolean }) {
  // 펀치홀 여백은 sticky 여부와 무관하게 CSS env() 로 통일(iOS 앱/Safari/Android 동일 경로).
  // iOS contentInset='never' 라 env() 이중 적용 없음 → 스크롤 시 여백 누적 안 됨.
  const headerClass = sticky
    ? 'bg-white border-b shadow-sm shrink-0 sticky top-0 z-40 pt-[env(safe-area-inset-top)]'
    : 'bg-white border-b shadow-sm shrink-0 pt-[env(safe-area-inset-top)]';
  // navAtSplit: 여행보드에서만 켠다. 상단 메뉴를 본문의 타임라인|인박스 분할선에 맞춘다.
  //
  // 보드 본문 가로 구성 (컨테이너 폭 W):
  //     [일차 사이드바 w-20 = 80px][ 타임라인 (W-80)/2 ][ 인박스 (W-80)/2 ]
  //   → 분할선은 W/2 가 아니라 80 + (W-80)/2 = W/2 + 40  (정중앙 + 사이드바의 절반)
  //
  // 헤더는 좌우 px-6(24px) 이라 콘텐츠 박스 폭이 W-48 이다.
  // 제목 영역 폭 T 가 24 + T = W/2 + 40 을 만족해야 하므로
  //     T = W/2 + 16 = (W-48)/2 + 40 = 콘텐츠의 50% + 40px
  // 즉 calc(50% + 40px). 40px 은 사이드바 80px 의 절반이다.
  //
  // 제목이 길면 분할선을 넘지 않고 말줄임(...)으로 잘린다 — min-w-0 + truncate 조합.
  const titleWrapClass = navAtSplit
    ? 'flex items-center min-w-0 md:w-[calc(50%+40px)] md:shrink-0 md:pr-4'
    : 'flex items-center min-w-0 md:mr-5';

  const { user, loading: authLoading, signOut } = useAuth();
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

  // 이니셜 — 규칙은 여행보드 뱃지(UserAvatarMenu)와 같은 곳에 둔다.
  const initials = getAvatarInitials(user?.user_metadata?.full_name, email);

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
      <header className={headerClass}>
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          <div className={titleWrapClass}>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-700 flex items-center gap-4 min-w-0">
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-4 min-w-0">
                <TravellineLogo size={32} />
                <span className="truncate">{title ?? 'Travelline'}</span>
              </Link>
            </h1>
          </div>
          <HeaderNav destinationCity={destinationCity} onExpenseClick={onExpenseClick} onCommunityClick={onCommunityClick} />

          {/* 시작하기 버튼 — ml-auto 로 우측 끝에 붙인다(기존 justify-between 과 동일 결과) */}
          <div className="ml-auto pl-4">{rightSlot ?? (
            // useAuth 는 user=null 로 시작하고 세션은 effect 에서 확정된다.
            // loading 을 안 보면 로그인한 사람도 첫 페인트에서 "시작하기" 가 깜빡인다.
            // 확정 전에는 아바타와 같은 크기의 자리만 잡는다(여행보드 뱃지와 동일).
            authLoading ? (
              <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" aria-hidden="true" />
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-1.5 rounded-lg shadow-sm"
              >
                시작하기
              </button>
            )
          )}</div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          <div className={titleWrapClass}>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-700 flex items-center gap-4 min-w-0">
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-4 min-w-0">
                <TravellineLogo size={32} />
                <span className="truncate">{title ?? 'Travelline'}</span>
              </Link>
            </h1>
          </div>
          <HeaderNav destinationCity={destinationCity} onExpenseClick={onExpenseClick} onCommunityClick={onCommunityClick} />

          {/* 사용자 아바타 — ml-auto 로 우측 끝에 붙인다(기존 justify-between 과 동일 결과) */}
          <div className="ml-auto pl-4">{rightSlot ?? (
            <div>
              <button
                ref={buttonRef}
                onClick={handleTogglePopup}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white text-base font-bold shadow-sm`}>
                  {initials}
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${popupOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}</div>
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
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white text-base font-bold shrink-0`}>
                {initials}
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