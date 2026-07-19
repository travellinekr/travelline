'use client';

import { Sparkles, X } from 'lucide-react';
import { AiChat } from '@/components/ai/AiChat';
import type { AiRequirements } from '@/components/ai/AiPlannerForm';
import type { AiChatController } from '@/components/ai/useAiPlannerChat';

interface AiAssistantPanelProps {
    open: boolean;
    onClose: () => void;
    /** 루트 컨테이너 위치/표시 클래스. 데스크톱=인박스 내부 absolute, 모바일=최상위 fixed 로 분기 */
    containerClassName?: string;
    /** 상위에서 공유되는 대화 컨트롤러(패널 개폐와 무관하게 유지) */
    controller: AiChatController;
    /** (배치 모드) 요약 확인 후 "이 내용으로 배치" 클릭 시 호출 */
    onGenerate?: (req: AiRequirements) => void;
    /** (추천 모드) "여행지 추천받기" 클릭 시 호출 */
    onRecommend?: (req: AiRequirements) => void;
    /** 실행 중 — 버튼 비활성 */
    busy?: boolean;
}

/**
 * AI 플래너 패널.
 * - 데스크톱: 인박스 relative <aside> 안에 `absolute inset-0`로 인박스 영역을 덮음(hidden md:flex).
 * - 모바일: CollaborativeApp 최상위에 `fixed inset-0` 독립 팝업으로 표시(flex md:hidden). 인박스 개폐와 무관.
 *
 * 1단계(골격): 열기/닫기 + 헤더 + 플레이스홀더.
 * 다음 단계에서 본문에 AiChat(대화 UI)을 임베드한다.
 */
export function AiAssistantPanel({ open, onClose, containerClassName = 'absolute inset-0 z-40 flex', controller, onGenerate, onRecommend, busy }: AiAssistantPanelProps) {
    if (!open) return null;

    const subtitle = controller.mode === 'recommend' ? '어디로 갈지 추천해드려요' : '일정을 자동으로 짜드려요';

    return (
        <div className={`flex-col bg-white ${containerClassName}`}>
            {/* 헤더 */}
            <div className="shrink-0 flex items-center justify-between gap-2 px-4 h-[60px] border-b border-slate-100 bg-white">
                <div className="flex items-center gap-2.5 min-w-0">
                    <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/30 ring-1 ring-white/50">
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/25" />
                        <Sparkles className="relative w-[18px] h-[18px] text-white" strokeWidth={2.2} />
                    </span>
                    <div className="flex flex-col leading-tight min-w-0">
                        <span className="text-[15px] tracking-tight flex items-center gap-1.5">
                            <span>
                                <span className="font-extrabold bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text text-transparent">AI</span>
                                <span className="font-bold text-slate-800"> 플래너</span>
                            </span>
                            <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold tracking-wide">BETA</span>
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">{subtitle}</span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="닫기"
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* 본문 — 대화 UI */}
            <AiChat controller={controller} onGenerate={onGenerate} onRecommend={onRecommend} busy={busy} />
        </div>
    );
}
