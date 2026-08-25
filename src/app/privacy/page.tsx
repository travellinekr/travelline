import type { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';
import LegalPageShell from '@/components/legal/LegalPageShell';

// 고정 주소가 필요한 곳(구글 OAuth 동의 화면 등)에 제출하는 개인정보처리방침 페이지.
// 홈 푸터의 팝업(LegalModal)과 본문을 공유하므로 문구는 항상 같다.
export const metadata: Metadata = {
    title: '개인정보처리방침 | Travelline',
    description: 'Travelline 개인정보처리방침 — 이메일·닉네임만 수집합니다.',
};

export default function PrivacyPage() {
    return (
        <LegalPageShell title="개인정보처리방침" updatedAt="2026-08-05" otherHref="/terms" otherLabel="이용약관">
            <LegalContent kind="privacy" />
        </LegalPageShell>
    );
}
