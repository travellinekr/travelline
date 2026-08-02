'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 데스크톱 헤더 우측 nav — 삼성 브라우저 톤(텍스트만·명료).
// 홈만 실제 링크. 커뮤니티/문의&요청은 페이지 준비 전이라 비활성.
export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
      <span className="text-slate-300 select-none">|</span>
      <Link
        href="/"
        className={`transition-colors ${isHome ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
      >
        홈
      </Link>
      <button
        type="button"
        disabled
        className="text-slate-400 cursor-not-allowed"
        title="곧 만나요"
      >
        커뮤니티
      </button>
      <button
        type="button"
        disabled
        className="text-slate-400 cursor-not-allowed"
        title="곧 만나요"
      >
        문의&요청
      </button>
    </nav>
  );
}
