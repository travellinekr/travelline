'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { findCountryByCity, findCityNameKo } from '@/data/destinations';

// 데스크톱 헤더 우측 nav — 삼성 브라우저 톤(텍스트만·명료).
// destinationCity: 여행보드에서 DashboardHeader → HeaderNav 로 전달. 최종여행지 있을 때만 문의&요청 활성.
// onExpenseClick: 경비 창 오픈 핸들러. 없으면(여행보드 밖) 비활성 — 문의&요청과 동일한 disabled 패턴.
function HeaderNavInner({ destinationCity, onExpenseClick }: { destinationCity?: string | null; onExpenseClick?: () => void }) {
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

  return (
    <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
      <span className="text-slate-300 select-none">|</span>
      <Link
        href="/"
        className={`transition-colors ${isHome ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
      >
        홈
      </Link>
      <Link
        href={communityHref}
        className={`transition-colors ${isCommunityRoot ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
      >
        커뮤니티
      </Link>
      {inquiryEnabled ? (
        <Link
          href={inquiryHref!}
          className={`transition-colors ${isInquiry ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
        >
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

export default function HeaderNav({ destinationCity, onExpenseClick }: { destinationCity?: string | null; onExpenseClick?: () => void } = {}) {
  return (
    <Suspense fallback={<nav className="hidden md:flex items-center gap-5" />}>
      <HeaderNavInner destinationCity={destinationCity} onExpenseClick={onExpenseClick} />
    </Suspense>
  );
}
