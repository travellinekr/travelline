"use client";

import { createPortal } from "react-dom";
import { Crown } from "lucide-react";

interface ConfirmOwnerTransferModalProps {
    targetName: string;
    onConfirm: () => void;
    onClose: () => void;
    loading?: boolean;
}

export function ConfirmOwnerTransferModal({
    targetName,
    onConfirm,
    onClose,
    loading,
}: ConfirmOwnerTransferModalProps) {
    return createPortal(
        <div
            style={{ position: 'fixed', inset: 0, zIndex: 9999999 }}
            className="flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget && !loading) onClose(); }}
        >
            <div className="bg-white rounded-3xl shadow-2xl w-80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="px-6 pt-6 pb-4 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
                        <Crown className="w-7 h-7 text-amber-500" />
                    </div>
                    <h2 className="text-base font-bold text-slate-800 text-center">소유자 위임</h2>
                    <p className="text-sm text-slate-500 text-center leading-relaxed">
                        <span className="font-semibold text-slate-700">{targetName}</span> 님에게 소유자를 넘기시겠어요?
                        <br />
                        당신은 <span className="font-semibold">편집자</span>로 변경됩니다.
                    </p>
                </div>
                <div className="flex border-t border-gray-100">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="flex-1 py-3.5 text-sm font-semibold text-slate-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        취소
                    </button>
                    <div className="w-px bg-gray-100" />
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="flex-1 py-3.5 text-sm font-semibold text-amber-600 hover:bg-amber-50 transition-colors disabled:opacity-50"
                    >
                        {loading ? '위임 중...' : '위임하기'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
