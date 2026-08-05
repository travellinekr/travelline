'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export type LegalKind = 'terms' | 'privacy';

interface Props {
    kind: LegalKind;
    onClose: () => void;
}

// 이용약관 · 개인정보처리방침 공용 풀스크린 팝업. 카드 메모/커뮤니티 팝업과 동일 톤.
export default function LegalModal({ kind, onClose }: Props) {
    // ESC 키 닫기 + 배경 스크롤 잠금
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleEsc);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    const title = kind === 'terms' ? '이용약관' : '개인정보처리방침';

    const content = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[92vw] md:h-[85vh] md:max-w-3xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="닫기"
                        className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* 본문 */}
                <div className="flex-1 overflow-y-auto px-5 py-5 text-sm leading-relaxed text-slate-700">
                    {kind === 'terms' ? <TermsBody /> : <PrivacyBody />}
                </div>

                {/* 푸터 — 하단 닫기 */}
                <div className="flex items-center justify-end px-5 py-3 pb-safe border-t border-slate-200 bg-slate-50 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );

    if (typeof window === 'undefined') return null;
    return createPortal(content, document.body);
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2 first:mt-0">{children}</h3>;
}

function TermsBody() {
    return (
        <div className="space-y-1">
            <p className="text-xs text-slate-400 mb-4">시행일: 2026-08-05</p>

            <SectionTitle>제1조 (목적)</SectionTitle>
            <p>이 약관은 YoonTech(이하 &quot;회사&quot;)이 제공하는 여행 계획 협업 서비스 &quot;Travelline&quot;(이하 &quot;서비스&quot;)의 이용 조건 및 절차, 회원과 회사의 권리·의무·책임을 정하는 것을 목적으로 합니다.</p>

            <SectionTitle>제2조 (서비스 소개)</SectionTitle>
            <p>Travelline 은 여러 사용자가 실시간으로 여행 일정을 함께 계획할 수 있는 협업 도구입니다. 여행 카드 드래그·드롭, 실시간 공동 편집, 지도 연동, 커뮤니티 게시판을 포함한 기능을 무료 베타 형태로 제공합니다.</p>

            <SectionTitle>제3조 (회원가입 및 계정)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>이메일 기반 계정을 통해 회원가입이 이루어집니다.</li>
                <li>회원은 정확한 정보를 제공해야 하며, 계정 정보(비밀번호 등)의 관리 책임은 회원 본인에게 있습니다.</li>
                <li>타인의 정보를 도용하거나 허위 정보를 등록하는 행위는 금지됩니다.</li>
            </ul>

            <SectionTitle>제4조 (콘텐츠의 소유권 및 이용)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>회원이 서비스 내에서 작성·등록한 여행 계획, 카드, 게시글, 댓글 등 모든 콘텐츠의 저작권은 원 저작자인 회원에게 귀속됩니다.</li>
                <li>회사는 서비스 운영·개선·홍보 목적에 한해 회원 콘텐츠를 사용할 수 있으며, 이 경우 회원이 식별되는 형태로 외부 공개하지 않습니다.</li>
                <li>회원이 공개(공유 링크 등)로 설정한 콘텐츠는 해당 링크에 접근한 제3자에게 노출될 수 있습니다.</li>
            </ul>

            <SectionTitle>제5조 (금지 행위)</SectionTitle>
            <p>회원은 다음 행위를 해서는 안 됩니다.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>타인의 개인정보·저작권·초상권을 침해하는 행위</li>
                <li>허위 정보, 스팸, 광고성 게시글, 도배 등 서비스 운영을 방해하는 행위</li>
                <li>욕설·비방·차별·혐오 표현 등 타인의 명예를 훼손하는 행위</li>
                <li>자동화된 수단(크롤러, 봇 등)으로 서비스에 무단 접근하거나 데이터를 수집하는 행위</li>
                <li>서비스의 취약점을 악용하거나 정상적 운영을 방해하는 모든 행위</li>
            </ul>

            <SectionTitle>제6조 (커뮤니티 이용)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>커뮤니티 게시판에서 회원은 자유롭게 정보를 공유·문의할 수 있습니다.</li>
                <li>회사는 제5조에 해당하는 게시글을 사전 통지 없이 삭제하거나 계정 이용을 제한할 수 있습니다.</li>
                <li>&quot;해외안전정보&quot; 게시판은 회사가 지정한 관리자만 작성할 수 있습니다.</li>
            </ul>

            <SectionTitle>제7조 (서비스의 변경 및 중단)</SectionTitle>
            <p>회사는 서비스 개선, 기술적 사유, 외부 인프라(Supabase, Liveblocks 등) 장애, 무료 베타 정책 변경 등의 사유로 서비스의 전부 또는 일부를 변경·중단할 수 있으며, 중대한 변경은 사전 공지합니다.</p>

            <SectionTitle>제8조 (면책)</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>서비스는 &quot;있는 그대로(as-is)&quot; 제공되며, 회사는 회원이 서비스에서 얻은 여행 정보의 정확성·유용성·목적 부합 여부에 대해 보증하지 않습니다.</li>
                <li>실제 여행 시 항공권·숙소·비자·현지 규정 등은 반드시 회원이 직접 공식 채널로 재확인해야 합니다.</li>
                <li>천재지변, 인프라 장애, 회원의 귀책 사유로 인한 손해에 대해 회사는 책임을 지지 않습니다.</li>
            </ul>

            <SectionTitle>제9조 (회원 탈퇴 및 계정 삭제)</SectionTitle>
            <p>회원은 언제든지 이메일(travelline.kr@gmail.com)로 요청하여 계정 및 관련 데이터(여행 계획, 게시글 등)의 삭제를 요청할 수 있습니다. 요청 접수 후 지체 없이 처리하며, 백업본에서도 합리적 기간 내 파기됩니다.</p>

            <SectionTitle>제10조 (약관의 변경)</SectionTitle>
            <p>본 약관은 관련 법령 및 서비스 정책 변경에 따라 수정될 수 있으며, 변경 시 서비스 내 공지를 통해 사전에 안내합니다. 변경 이후에도 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 봅니다.</p>
        </div>
    );
}

function PrivacyBody() {
    return (
        <div className="space-y-1">
            <p className="text-xs text-slate-400 mb-4">시행일: 2026-08-05</p>

            <p>YoonTech(이하 &quot;회사&quot;)은 회원의 개인정보를 소중히 다루며, 관련 법령을 준수합니다. Travelline 서비스는 <span className="font-semibold text-slate-800">최소한의 개인정보(이메일·닉네임)만</span> 수집·이용합니다.</p>

            <SectionTitle>1. 수집하는 개인정보 항목</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">이메일 주소</span> — 회원가입, 로그인 인증, 계정 복구, 필수 공지 발송 목적</li>
                <li><span className="font-semibold">닉네임(표시 이름)</span> — 커뮤니티 게시글·댓글, 실시간 협업 시 참여자 식별 목적. 이메일 앞부분을 기본값으로 사용하며, 회원이 임의로 설정할 수 있습니다.</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">그 외 이름·전화번호·주소·주민번호 등 어떠한 개인정보도 수집하지 않습니다.</p>

            <SectionTitle>2. 개인정보 수집 방법</SectionTitle>
            <p>회원가입 절차(이메일 입력)를 통해 회원이 직접 제공하는 방식으로만 수집합니다.</p>

            <SectionTitle>3. 이용 목적</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>회원 인증 및 로그인 세션 유지</li>
                <li>여행 계획 프로젝트의 소유자·참여자 식별</li>
                <li>커뮤니티 게시글·댓글의 작성자 표시</li>
                <li>서비스 이용 관련 필수 공지(약관 변경, 서비스 중단 등)</li>
            </ul>

            <SectionTitle>4. 보유 및 이용 기간</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
                <li>회원 탈퇴 시까지 보관하며, 탈퇴 요청 접수 후 지체 없이 삭제합니다.</li>
                <li>단, 관련 법령(전자상거래법, 통신비밀보호법 등)에서 별도 보관을 요구하는 경우 해당 기간 동안 최소한의 범위에서 보관될 수 있으며, 현 시점 서비스 성격상 해당 사항은 없습니다.</li>
            </ul>

            <SectionTitle>5. 제3자 제공</SectionTitle>
            <p>회사는 회원의 개인정보를 <span className="font-semibold">외부에 제공·판매하지 않습니다</span>.</p>

            <SectionTitle>6. 처리 위탁 및 국외 이전</SectionTitle>
            <p>서비스 제공을 위해 회원의 개인정보(이메일·닉네임)가 다음 사업자의 인프라에 저장·처리됩니다. 각 사업자는 자체 개인정보 보호 정책과 국제 표준(GDPR, SOC2 등)을 준수합니다.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>
                    <span className="font-semibold">Supabase Inc.</span> (미국) — 회원 인증 및 데이터베이스 저장
                    <div className="text-xs text-slate-500">이전 항목: 이메일·닉네임 · 이전 시점: 회원가입·로그인 시 · 보유 기간: 회원 탈퇴 시까지</div>
                </li>
                <li>
                    <span className="font-semibold">Liveblocks Inc.</span> (미국) — 실시간 협업 세션(커서·프레즌스)
                    <div className="text-xs text-slate-500">이전 항목: 닉네임·표시 색상 · 이전 시점: 협업 세션 접속 시 · 보유 기간: 세션 종료 시까지</div>
                </li>
                <li>
                    <span className="font-semibold">Vercel Inc.</span> (미국) — 서비스 호스팅
                    <div className="text-xs text-slate-500">이전 항목: 요청 로그(접속 IP·User-Agent) · 이전 시점: 페이지 접속 시 · 보유 기간: 최대 30일</div>
                </li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">회원은 개인정보의 국외 이전을 원치 않을 경우 회원 탈퇴를 통해 이용을 중단할 수 있으며, 이 경우 서비스 이용은 제한됩니다.</p>

            <SectionTitle>7. 회원의 권리</SectionTitle>
            <p>회원은 언제든지 자신의 개인정보에 대해 다음 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>열람 요청 — 계정 설정 화면 또는 이메일 요청</li>
                <li>정정 요청 — 닉네임은 계정 설정에서 직접 수정 가능</li>
                <li>삭제(탈퇴) 요청 — 이메일 요청으로 즉시 처리</li>
            </ul>

            <SectionTitle>8. 개인정보 보호책임자 및 문의</SectionTitle>
            <p>개인정보 관련 문의는 아래로 접수해 주세요.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>이메일: <span className="font-mono">travelline.kr@gmail.com</span></li>
                <li>운영자: YoonTech</li>
            </ul>

            <SectionTitle>9. 방침의 변경</SectionTitle>
            <p>본 방침은 법령·서비스 정책 변경에 따라 수정될 수 있으며, 변경 시 서비스 내 공지 후 시행합니다.</p>
        </div>
    );
}
