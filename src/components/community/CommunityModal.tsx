'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import CommunityBrowser from './CommunityBrowser';
import PostDetailView from './PostDetailView';
import { BOARD_LABEL, type BoardType } from './types';

// 여행보드 안에서 뜨는 커뮤니티 — 라우팅을 하지 않는 진짜 팝업.
// 보드가 언마운트되지 않으므로 Liveblocks 소켓이 그대로 유지되고, 닫아도 보드가 재로딩되지 않는다.
// 목록↔상세 전환도 라우팅 대신 state 로 처리한다.

interface CommunityModalProps {
    /** 열릴 때 보여줄 게시판 — 하단바 "커뮤니티"=notice, "문의&요청"=inquiry */
    initialTab: BoardType;
    /** 최종여행지 프리셋 (한글 도시명) */
    city?: string;
    /** 최종여행지의 나라 (해외안전정보는 나라 단위 필터) */
    country?: string;
    onClose: () => void;
}

export default function CommunityModal({ initialTab, city = '', country = '', onClose }: CommunityModalProps) {
    const [tab, setTab] = useState<BoardType>(initialTab);
    const [cityFilter, setCityFilter] = useState(city);
    const [countryFilter, setCountryFilter] = useState(country);
    const [openPostId, setOpenPostId] = useState<string | null>(null);

    const isNotice = tab === 'notice';
    const title = tab === 'inquiry' ? BOARD_LABEL.inquiry : '커뮤니티';

    // 드롭다운 — notice 는 나라, 그 외는 도시
    const handleLocationChange = (value: string) => {
        if (isNotice) setCountryFilter(value);
        else setCityFilter(value);
    };

    const handleClearFilter = () => {
        setCityFilter('');
        setCountryFilter('');
    };

    const content = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full h-full md:w-[95vw] md:h-[90vh] md:max-w-4xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl pt-safe md:pt-0">
                {/* 헤더 — 타이틀만. 닫기는 하단에서만 (기존 팝업과 동일) */}
                <div className="px-5 py-4 border-b border-slate-200 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                </div>

                {/* 본문 — 목록과 상세를 state 로 전환. 상세는 스크롤 위치를 새로 잡도록 key 를 준다 */}
                <div className="flex-1 overflow-y-auto">
                    {openPostId ? (
                        <PostDetailView
                            key={openPostId}
                            postId={openPostId}
                            embedded
                            onBack={() => setOpenPostId(null)}
                            onDeleted={() => setOpenPostId(null)}
                        />
                    ) : (
                        <CommunityBrowser
                            activeTab={tab}
                            cityFilter={cityFilter}
                            countryFilter={countryFilter}
                            embedded
                            onTabChange={setTab}
                            onLocationChange={handleLocationChange}
                            onClearFilter={handleClearFilter}
                            onOpenPost={setOpenPostId}
                        />
                    )}
                </div>

                {/* 푸터 — 어디에 있든 "닫기"는 커뮤니티를 닫고 보드로 복귀 */}
                <div className="flex items-center justify-end gap-3 px-5 py-3 pb-safe border-t border-slate-200 bg-slate-50 shrink-0">
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

    if (typeof document === 'undefined') return null;
    return createPortal(content, document.body);
}
