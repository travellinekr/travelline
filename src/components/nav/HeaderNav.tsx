'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { findCountryByCity, findCityNameKo } from '@/data/destinations';

// 데스크톱 헤더 우측 nav — 삼성 브라우저 톤(텍스트만·명료).
// destinationCity: 여행보드에서 DashboardHeader → HeaderNav 로 전달. 최종여행지 있을 때만 문의&요청 활성.
// onExpenseClick: 경비 창 오픈 핸들러. 없으면(여행보드 밖) 비활성 — 문의&요청과 동일한 disabled 패턴.
function HeaderNavInner({ destinationCity, onExpenseClick, onCommunityClick }: { destinationCity?: string | null; onExpenseClick?: () => void; onCommunityClick?: (tab: 'notice' | 'inquiry') => void }) {
  const pathname = usePathname();
  const search = useSearchParams();
  const { user } = useAuth();
  const type = search.get('type');

  const isHome = pathname === '/';
  const isCommunityRoot = pathname.startsWith('/community') && type !== 'inquiry';
  const isInquiry = pathname.startsWith('/community') && type === 'inquiry';
  const isBoard = pathname.startsWith('/room/');
  // destinationCity 는 영문 slug("osaka") 로 들어오므로 한글로 정규화 (게시글 city 필드는 한글로 저장됨).
  const boardCity = destinationCity ? findCityNameKo(destinationCity.trim()) : '';
  // 해외안전정보(notice) 는 나라 단위 필터라 country 파라미터도 함께 부착 → 커뮤니티 페이지가 탭에 맞게 사용.
  const boardCountry = boardCity ? (findCountryByCity(boardCity) || '') : '';
  const boardQs = boardCity
    ? `from=board&city=${encodeURIComponent(boardCity)}${boardCountry ? `&country=${encodeURIComponent(boardCountry)}` : ''}`
    : '';
  const communityHref = isBoard && boardCity ? `/community?type=notice&${boardQs}` : '/community';
  const inquiryHref = isBoard
    ? (boardCity ? `/community?type=inquiry&${boardQs}` : null)
    : '/community?type=inquiry';
  const inquiryEnabled = !!user && !!inquiryHref;
  const inquiryTitle = isBoard && !boardCity ? '최종여행지 등록 후 이용 가능' : (!user ? '로그인 후 이용 가능' : undefined);
  // 여행보드에서는 커뮤니티를 라우팅 없이 모달로 띄운다(보드 언마운트 방지 → Liveblocks 소켓 유지).
  // 핸들러가 없으면(보드 밖) 기존처럼 링크로 이동.
  const asModal = !!onCommunityClick;
  const linkClass = (active: boolean) =>
    `transition-colors ${active ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`;

  return (
    <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
      <span className="text-slate-300 select-none">|</span>
      <Link
        href="/"
        className={`transition-colors ${isHome ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
      >
        홈
      </Link>
      {asModal ? (
        <button type="button" onClick={() => onCommunityClick!('notice')} className={linkClass(isCommunityRoot)}>
          커뮤니티
        </button>
      ) : (
        <Link href={communityHref} className={linkClass(isCommunityRoot)}>
          커뮤니티
        </Link>
      )}
      {inquiryEnabled && asModal ? (
        <button type="button" onClick={() => onCommunityClick!('inquiry')} className={linkClass(isInquiry)}>
          문의&요청
        </button>
      ) : inquiryEnabled ? (
        <Link href={inquiryHref!} className={linkClass(isInquiry)}>
          문의&요청
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="text-slate-300 cursor-not-allowed"
          title={inquiryTitle}
        >
          문의&요청
        </button>
      )}
      {onExpenseClick ? (
        <button
          type="button"
          onClick={onExpenseClick}
          className="transition-colors text-slate-600 hover:text-emerald-600"
        >
          경비
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="text-slate-300 cursor-not-allowed"
          title="여행보드 참여자만 이용 가능"
        >
          경비
        </button>
      )}
    </nav>
  );
}

export default function HeaderNav({ destinationCity, onExpenseClick, onCommunityClick }: { destinationCity?: string | null; onExpenseClick?: () => void; onCommunityClick?: (tab: 'notice' | 'inquiry') => void } = {}) {
  return (
    <Suspense fallback={<nav className="hidden md:flex items-center gap-5" />}>
      <HeaderNavInner destinationCity={destinationCity} onExpenseClick={onExpenseClick} onCommunityClick={onCommunityClick} />
    </Suspense>
  );
}
