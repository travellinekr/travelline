// 서버 컴포넌트 - force-dynamic이 여기서만 동작함 ('use client'에선 무효)
export const dynamic = 'force-dynamic';

import LoginPageContent from './LoginPageContent';

export default function LoginPage() {
    return <LoginPageContent />;
}
