import type { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';
import LegalPageShell from '@/components/legal/LegalPageShell';

// 고정 주소가 필요한 곳(구글 OAuth 동의 화면 등)에 제출하는 약관 페이지.
// 홈 푸터의 팝업(LegalModal)과 본문을 공유하므로 문구는 항상 같다.
export const metadata: Metadata = {
    title: '이용약관 | Travelline',
    description: 'Travelline 서비스 이용약관',
};

export default function TermsPage() {
    return (
        <LegalPageShell title="이용약관" updatedAt="2026-08-05" otherHref="/privacy" otherLabel="개인정보처리방침">
            <LegalContent kind="terms" />
        </LegalPageShell>
    );
}
