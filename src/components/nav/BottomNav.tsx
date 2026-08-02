'use client';

import Link from 'next/link';
import { Home, Users, HelpCircle, Sparkles } from 'lucide-react';

// 모바일 하단 탭바 — 삼성 브라우저 톤(반투명·명료).
// 홈만 실제 링크. 커뮤니티/문의&요청은 페이지 준비 전이나 시각적으로는 동일 톤 유지.
// AI 는 onAiClick 이 있을 때만 활성(여행보드 등).
export default function BottomNav({ onAiClick }: { onAiClick?: () => void }) {
  const baseItem = 'flex-1 flex flex-col items-center justify-center gap-[3px] py-1.5 min-h-[48px] text-slate-500';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#e9eef4]/95 backdrop-blur-md border-t border-slate-200/60 pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-14">
        <Link href="/" className={baseItem}>
          <Home className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">홈</span>
        </Link>

        <button type="button" disabled className={`${baseItem} cursor-not-allowed`} title="곧 만나요">
          <Users className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">커뮤니티</span>
        </button>

        <button type="button" disabled className={`${baseItem} cursor-not-allowed`} title="곧 만나요">
          <HelpCircle className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium">문의&요청</span>
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
