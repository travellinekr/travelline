'use client';

import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface InfoModalShellProps {
    isOpen: boolean;
    title: string;              // "입국 정보" · "숙소 정보" 등
    subtitle?: string;          // "이치란 라멘 · Osaka" 등
    onClose: () => void;
    children: ReactNode;
    footer?: ReactNode;         // 커스텀 푸터, 없으면 기본 "실제 여행 전 최신 정보 확인" + 닫기
}

// 인포 팝업 공통 shell (헤더 · 스크롤 · 푸터 · 포털).
// 기존 CardInfoModal.tsx 의 레이아웃을 그대로 추출 (동일 클래스명·색상).
export function InfoModalShell({ isOpen, title, subtitle, onClose, children, footer }: InfoModalShellProps) {
    if (!isOpen) return null;
    if (typeof window === 'undefined') return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                {/* 헤더 — 기존 CardInfoModal 마크업 pixel-perfect 유지 */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                        {subtitle && (
                            <p className="text-sm text-gray-500 mt-1">
                                {subtitle}
                                <span className="ml-2 text-[11px] text-indigo-400 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full">읽기 전용</span>
                            </p>
                        )}
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 본문 스크롤 영역 */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                    {children}
                </div>

                {/* 푸터 */}
                {footer ?? (
                    <div className="flex items-center justify-between gap-3 px-6 py-3 border-t border-gray-200 bg-gray-50 shrink-0">
                        <p className="text-xs text-gray-400">📅 실제 여행 전 최신 정보를 반드시 확인하세요</p>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                        >
                            닫기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
