'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import LegalContent, { type LegalKind } from './LegalContent';

// 본문은 LegalContent 한 곳에서만 관리 (/terms · /privacy 페이지와 공유).
export type { LegalKind };

interface Props {
    kind: LegalKind;
    onClose: () => void;
}

// 이용약관 · 개인정보처리방침 공용 풀스크린 팝업. 카드 메모/커뮤니티 팝업과 동일 톤.
export default function LegalModal({ kind, onClose }: Props) {
    // ESC 키 닫기 + 배경 스크롤 잠금
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleEsc);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    const title = kind === 'terms' ? '이용약관' : '개인정보처리방침';

    const content = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[92vw] md:h-[85vh] md:max-w-3xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="닫기"
                        className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* 본문 */}
                <div className="flex-1 overflow-y-auto px-5 py-5 text-sm leading-relaxed text-slate-700">
                    <LegalContent kind={kind} />
                </div>

                {/* 푸터 — 하단 닫기 */}
                <div className="flex items-center justify-end px-5 py-3 pb-safe border-t border-slate-200 bg-slate-50 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );

    if (typeof window === 'undefined') return null;
    return createPortal(content, document.body);
}
