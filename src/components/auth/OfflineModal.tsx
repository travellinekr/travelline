'use client';

import { WifiOff } from 'lucide-react';

// 브라우저 offline 상태에서 표시되는 안내 모달.
// - navigator.onLine=false 즉시 표시 (ConnectionLostModal 은 auth 실패 누적 후)
// - online 복구 시 자동 언마운트 (부모에서 조건부 렌더)
// - 유저가 강제로 새로고침해도 되도록 버튼 제공
export function OfflineModal() {
    return (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
                    <WifiOff className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-1">인터넷 연결이 끊겼어요</h2>
                    <p className="text-sm text-slate-500">
                        Wi-Fi 나 모바일 데이터를 확인해주세요.<br />
                        연결이 복구되면 자동으로 이어집니다.
                    </p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors"
                >
                    새로고침
                </button>
            </div>
        </div>
    );
}
