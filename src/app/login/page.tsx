'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
    const [error, setError] = useState('');
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get('redirect') || '/'; // 로그인 후 돌아갈 경로

    const handleSocialLogin = async (provider: 'google' | 'kakao') => {
        setLoadingProvider(provider);
        setError('');

        // next 파라미터를 callback URL에 포함시켜 로그인 완료 후 원래 페이지로 이동
        const callbackUrl = `${window.location.origin}/auth/callback${redirectPath !== '/' ? `?next=${encodeURIComponent(redirectPath)}` : ''}`;
        console.log(`[Login] OAuth Redirect URL: ${callbackUrl}`);

        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: callbackUrl,
                ...(provider === 'kakao' && {
                    scopes: 'profile_nickname profile_image',
                }),
                ...(provider === 'google' && {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                }),
            },
        });
        if (error) {
            setError(error.message);
            setLoadingProvider(null);
        }
    };


    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            {/* 배경 장식 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-sm">
                {/* 로고 */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg shadow-emerald-200">
                        <span className="text-white text-3xl font-bold font-sans">T</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800">TripTimeline</h1>
                    <p className="text-slate-500 mt-2 text-sm">여행 계획을 더 스마트하게</p>
                </div>

                {/* 카드 */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-2 text-center">시작하기</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">소셜 계정으로 간편하게 로그인하세요</p>

                    <div className="space-y-3">
                        {/* Google 로그인 */}
                        <button
                            onClick={() => handleSocialLogin('google')}
                            disabled={loadingProvider !== null}
                            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-4 rounded-2xl transition-all hover:shadow-lg active:scale-95 disabled:opacity-60"
                        >
                            {loadingProvider === 'google' ? (
                                <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            )}
                            Google로 로그인
                        </button>

                        {/* Kakao 로그인 - 준비중 */}
                        <button
                            disabled
                            className="w-full flex items-center justify-center gap-3 bg-[#FEE500]/40 text-[#191919]/40 font-semibold py-3.5 px-4 rounded-2xl cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.636 5.08 4.1 6.52L5.2 21l4.32-2.84c.81.12 1.64.18 2.48.18 5.523 0 10-3.477 10-7.76C22 6.477 17.523 3 12 3z" />
                            </svg>
                            카카오로 로그인 (준비중)
                        </button>

                        {/* Naver 로그인 - 추후 지원 예정 */}
                        <button
                            disabled
                            className="w-full flex items-center justify-center gap-3 bg-[#03C75A]/30 text-[#03C75A]/50 font-semibold py-3.5 px-4 rounded-2xl cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
                            </svg>
                            네이버로 로그인 (준비중)
                        </button>
                    </div>

                    {/* 에러 메시지 */}
                    {error && (
                        <p className="text-sm text-center text-red-400 bg-red-400/10 px-3 py-2 rounded-lg mt-4">
                            {error}
                        </p>
                    )}

                    <p className="text-center text-slate-400 text-xs mt-8 leading-relaxed">
                        로그인 시 <span className="text-slate-500">서비스 이용약관</span> 및<br />
                        <span className="text-slate-500">개인정보처리방침</span>에 동의하게 됩니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
