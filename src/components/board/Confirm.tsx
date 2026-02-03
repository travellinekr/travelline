import { ReactNode } from "react";

interface ConfirmProps {
    children: ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
}

export function Confirm({ children, onConfirm, onCancel }: ConfirmProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/20 z-[9998] animate-in fade-in duration-200"
                onClick={onCancel}
            />

            {/* Toast-style Confirm Dialog */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="bg-white border border-rose-200/30 rounded-3xl shadow-2xl p-5"
                    style={{ background: 'linear-gradient(135deg, rgba(255, 241, 242, 0.9) 0%, rgba(255, 247, 237, 0.9) 100%)' }}
                >
                    {/* Icon + Message Container */}
                    <div className="flex items-start gap-4 mb-4">
                        {/* Warning Icon */}
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0 border-2 border-rose-200/50">
                            <span className="text-2xl">⚠️</span>
                        </div>

                        {/* Message */}
                        <div className="flex-1 text-rose-900 text-sm md:text-base font-medium leading-relaxed pt-1.5">
                            {children}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={onCancel}
                            className="flex-1 px-4 py-2.5 bg-white/80 hover:bg-white text-rose-700 text-sm font-semibold rounded-full transition-all border border-rose-200/50 shadow-sm hover:shadow-md"
                        >
                            취소
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
