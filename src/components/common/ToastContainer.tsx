"use client";

import { ToastItem } from '@/hooks/useToast';

interface ToastContainerProps {
    toasts: ToastItem[];
    onClose: (id: number) => void;
    /** 화면에서 토스트 위치. 기본값: 하단 중앙 */
    position?: 'bottom-right' | 'bottom-center';
}

/**
 * 공용 토스트 컨테이너
 * useToast() 훅과 함께 사용합니다.
 *
 * @example
 * const { toasts, addToast, removeToast } = useToast();
 * <ToastContainer toasts={toasts} onClose={removeToast} />
 */
export function ToastContainer({ toasts, onClose, position = 'bottom-center' }: ToastContainerProps) {
    if (toasts.length === 0) return null;

    const posClass = position === 'bottom-center'
        ? 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col-reverse gap-2'
        : 'fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col-reverse gap-2';

    return (
        <div className={posClass}>
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`flex items-center gap-3 md:gap-4 pl-3 pr-4 md:pl-4 md:pr-5 py-2.5 md:py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300 ${toast.type === 'warning'
                            ? 'bg-rose-100 text-rose-800 border border-rose-300/50'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300/50'
                        }`}
                >
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${toast.type === 'warning'
                            ? 'bg-rose-200 border border-rose-400/50'
                            : 'bg-emerald-200 border border-emerald-400/50'
                        }`}>
                        <span className={`text-sm md:text-base ${toast.type === 'warning' ? 'text-rose-700' : 'text-emerald-700'}`}>
                            {toast.type === 'warning' ? '⚠' : '✓'}
                        </span>
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className={`text-xs md:text-sm font-semibold ${toast.type === 'warning' ? 'text-rose-800' : 'text-emerald-800'}`}>
                            {toast.message}
                        </span>
                    </div>
                    <button
                        onClick={() => onClose(toast.id)}
                        className={`ml-2 transition-colors ${toast.type === 'warning' ? 'text-rose-500 hover:text-rose-700' : 'text-emerald-500 hover:text-emerald-700'}`}
                    >
                        <span className="text-lg">×</span>
                    </button>
                </div>
            ))}
        </div>
    );
}
