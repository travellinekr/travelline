'use client';

import { useRouter } from 'next/navigation';

export function SessionExpiredModal({ onClose }: { onClose?: () => void }) {
    const router = useRouter();

    const handleLogin = () => {
        onClose?.();
        router.push('/');
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-3xl">
                    🔐
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-1">세션이 만료되었어요</h2>
                    <p className="text-sm text-slate-500">
                        안전을 위해 다시 로그인해 주세요.<br />
                        작업 내용은 저장되어 있습니다.
                    </p>
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                >
                    로그인 페이지로 이동
                </button>
            </div>
        </div>
    );
}
