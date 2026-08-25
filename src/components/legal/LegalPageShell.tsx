import Link from 'next/link';

// 약관·개인정보처리방침 페이지 껍데기.
// 홈 푸터는 지금처럼 팝업(LegalModal)으로 열리고, 이 페이지는 외부에 제출할 고정 주소용이다.
// (구글 OAuth 동의 화면은 실제 URL 을 열어 확인하므로 로그인 없이 정적으로 읽혀야 한다)
export default function LegalPageShell({
    title,
    updatedAt,
    otherHref,
    otherLabel,
    children,
}: {
    title: string;
    updatedAt: string;
    otherHref: string;
    otherLabel: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
                    <Link href="/" className="text-lg font-bold text-emerald-600">Travelline</Link>
                    <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600">홈으로</Link>
                </div>
            </header>

            <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-1">{title}</h1>
                <p className="text-xs text-slate-400 mb-6">시행일 {updatedAt}</p>
                <div className="bg-white border border-slate-200 rounded-xl px-5 py-6 text-sm leading-relaxed text-slate-700">
                    {children}
                </div>
            </main>

            <footer className="border-t border-slate-200 bg-white">
                <div className="max-w-3xl mx-auto px-5 py-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span>YoonTech</span>
                    <span className="font-mono">travelline.kr@gmail.com</span>
                    <Link href={otherHref} className="ml-auto text-slate-600 hover:text-emerald-600 underline underline-offset-2">
                        {otherLabel}
                    </Link>
                </div>
            </footer>
        </div>
    );
}
