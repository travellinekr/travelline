'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Image as ImageIcon, X } from 'lucide-react';

interface PhotoActionSheetProps {
    isOpen: boolean;
    onClose: () => void;
    onPick: (mode: 'camera' | 'library') => void;
}

// 모바일 하단 시트 + 데스크톱 가운데 모달 — 사진 첨부 vs 직접 촬영 선택
export function PhotoActionSheet({ isOpen, onClose, onPick }: PhotoActionSheetProps) {
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    if (typeof window === 'undefined') return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9998] flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full md:w-[90vw] md:max-w-sm bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                    <h3 className="font-bold text-slate-800">사진 추가</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100"
                        aria-label="닫기"
                    >
                        <X className="w-4 h-4 text-slate-500" />
                    </button>
                </div>
                <div className="p-3 space-y-2">
                    <button
                        type="button"
                        onClick={() => { onPick('camera'); onClose(); }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors text-left"
                    >
                        <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                            <Camera className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-semibold text-slate-800 text-sm">직접 촬영</div>
                            <div className="text-xs text-slate-500">카메라로 바로 찍기</div>
                        </div>
                    </button>
                    <button
                        type="button"
                        onClick={() => { onPick('library'); onClose(); }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                        <div className="w-10 h-10 rounded-lg bg-slate-500 text-white flex items-center justify-center shrink-0">
                            <ImageIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-semibold text-slate-800 text-sm">사진 첨부</div>
                            <div className="text-xs text-slate-500">갤러리에서 선택</div>
                        </div>
                    </button>
                </div>
                <div className="px-3 pb-3 pt-1">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm font-semibold transition-colors"
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
