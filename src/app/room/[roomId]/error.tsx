'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RoomError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error('[RoomError]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center text-3xl">
          🛜
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-1">연결에 문제가 생겼어요</h2>
          <p className="text-sm text-slate-500">
            네트워크 상태를 확인하거나<br />잠시 후 다시 시도해주세요.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={reset}
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
          >
            다시 시도
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-semibold transition-colors"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
