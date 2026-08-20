'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, HelpCircle, Wallet, Sparkles } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { findCountryByCity, findCityNameKo } from '@/data/destinations';

// 모바일 하단 탭바 — 삼성 브라우저 톤(반투명·명료).
// 문의&요청은 로그인 사용자만 활성. 경비/AI 는 각 핸들러(onExpenseClick/onAiClick)가 있을 때만 활성.
// 여행보드(/room/*)에서는 최종여행지(destinationCity) 등록된 경우에만 활성 + ?from=board&city=... 부착.
// 여행보드 밖(홈/커뮤니티 등)에서는 로그인만 하면 활성 (도시 필터 없음).
export default function BottomNav({ onAiClick, onExpenseClick, destinationCity }: { onAiClick?: () => void; onExpenseClick?: () => void; destinationCity?: string | null }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const fromBoard = pathname?.startsWith('/room/');
  // destinationCity 는 영문 slug("osaka") 로 들어오므로 한글로 정규화 (게시글 city 필드는 한글로 저장됨).
  const boardCity = destinationCity ? findCityNameKo(destinationCity.trim()) : '';
  // 여행보드에서 진입 시 커뮤니티도 도시 필터 자동 적용. 최종여행지 없으면 필터 없이 진입.
  // 해외안전정보(notice) 는 나라 단위 필터라 country 파라미터도 함께 부착 → 커뮤니티 페이지가 탭에 맞게 사용.
  const boardCountry = boardCity ? (findCountryByCity(boardCity) || '') : '';
  const boardQs = boardCity
    ? `from=board&city=${encodeURIComponent(boardCity)}${boardCountry ? `&country=${encodeURIComponent(boardCountry)}` : ''}`
    : '';
  const communityHref = fromBoard && boardCity ? `/community?type=notice&${boardQs}` : '/community';
  const inquiryHref = fromBoard
    ? (boardCity ? `/community?type=inquiry&${boardQs}` : null)
    : '/community?type=inquiry';
  const inquiryEnabled = !!user && !!inquiryHref;
  const inquiryTitle = fromBoard && !boardCity ? '최종여행지 등록 후 이용 가능' : (!user ? '로그인 후 이용 가능' : undefined);
  const baseItem = 'flex-1 flex flex-col items-center justify-center gap-[3px] py-1.5 min-h-[48px] text-slate-500';
  const disabledItem = 'flex-1 flex flex-col items-center justify-center gap-[3px] py-1.5 min-h-[48px] text-slate-300 cursor-not-allowed';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#e9eef4]/95 backdrop-blur-md border-t border-slate-200/60 pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-14">
        <Link href="/" className={baseItem}>
          <Home className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">홈</span>
        </Link>

        <Link href={communityHref} className={baseItem}>
          <Users className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">커뮤니티</span>
        </Link>

        {inquiryEnabled ? (
          <Link href={inquiryHref!} className={baseItem}>
            <HelpCircle className="w-6 h-6" strokeWidth={2} />
            <span className="text-[11px] font-medium">문의&요청</span>
          </Link>
        ) : (
          <button type="button" disabled className={disabledItem} title={inquiryTitle}>
            <HelpCircle className="w-6 h-6" strokeWidth={2} />
            <span className="text-[11px] font-medium">문의&요청</span>
          </button>
        )}

        {/* 경비 — 여행보드 전용 기능. 핸들러 없으면(커뮤니티 등) 비활성 */}
        <button
          type="button"
          onClick={onExpenseClick}
          disabled={!onExpenseClick}
          className={onExpenseClick ? baseItem : disabledItem}
          title={!onExpenseClick ? '여행보드 참여자만 이용 가능' : undefined}
        >
          <Wallet className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">경비</span>
        </button>

        {/* AI 는 사이트 시그니처 기능 — 아이콘만 은은한 오렌지, 라벨은 다른 탭과 동일 회색 */}
        <button
          type="button"
          onClick={onAiClick}
          disabled={!onAiClick}
          className={`${baseItem} ${!onAiClick ? 'cursor-not-allowed' : ''}`}
        >
          <Sparkles
            className={`w-6 h-6 ${onAiClick ? 'text-[#fcaa63]' : ''}`}
            strokeWidth={1.8}
            fill="currentColor"
            fillOpacity={0.10}
          />
          <span className="text-[11px] font-medium">AI</span>
        </button>
      </div>
    </nav>
  );
}
