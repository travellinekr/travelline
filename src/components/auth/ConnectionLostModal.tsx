'use client';

export function ConnectionLostModal() {
    const handleReload = () => {
        window.location.reload();
    };

    const handleGoLogin = () => {
        // 세션 정리 후 메인 페이지로 (로그인 안 되어 있으면 /login 으로 라우팅됨)
        window.location.href = '/';
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center text-3xl">
                    🔄
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-1">연결이 잠시 끊겼어요</h2>
                    <p className="text-sm text-slate-500">
                        새로고침 후 이어서 작업해 주세요.<br />
                        반복되면 로그인 페이지로 이동해 다시 시도해 주세요.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <button
                        onClick={handleReload}
                        className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                    >
                        새로고침
                    </button>
                    <button
                        onClick={handleGoLogin}
                        className="w-full py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors"
                    >
                        로그인 페이지로 이동
                    </button>
                </div>
            </div>
        </div>
    );
}
