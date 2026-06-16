'use client';

import { createPortal } from 'react-dom';
import { canForceExternalBrowser, InAppKind, inAppLabel, openInExternalBrowser } from '@/utils/inAppBrowser';

interface InAppBrowserModalProps {
    kind: InAppKind;
    onClose: () => void;
}

// Google OAuth 가 인앱 브라우저를 차단하므로, 외부 브라우저로 안내하는 모달.
// 카톡·네이버앱은 자동 점프 버튼 + 수동 안내, 그 외는 수동 안내만.
export function InAppBrowserModal({ kind, onClose }: InAppBrowserModalProps) {
    if (!kind) return null;
    if (typeof window === 'undefined') return null;

    const label = inAppLabel(kind);
    const canForce = canForceExternalBrowser(kind);

    const handleOpenExternal = () => {
        openInExternalBrowser(kind, window.location.href);
    };

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-3">
                    Google 로그인은 기본 브라우저에서만 가능해요
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    Google 정책상 {label} 인앱 브라우저에서는 로그인이 차단됩니다.
                    Chrome / Safari 등 기본 브라우저로 열어주세요.
                </p>

                {canForce ? (
                    <>
                        <button
                            onClick={handleOpenExternal}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors mb-3"
                        >
                            기본 브라우저로 열기
                        </button>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                            버튼이 동작하지 않으면, 우측 상단 메뉴(⋮)에서 <span className="text-slate-600 font-medium">"다른 브라우저로 열기"</span>를 선택해주세요.
                        </p>
                    </>
                ) : (
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-4">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            우측 상단 메뉴에서 <span className="text-slate-800 font-medium">"브라우저로 열기"</span> 또는 <span className="text-slate-800 font-medium">"외부 브라우저"</span>를 선택해주세요.
                        </p>
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="w-full text-sm text-slate-500 hover:text-slate-700 py-2 transition-colors"
                >
                    닫기
                </button>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
