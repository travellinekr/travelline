'use client';

import { useState } from "react";
import { NotebookPen, Check, Info } from "lucide-react";
import type { CommonCardProps } from "./types";
import { CardInfoModal } from "./CardInfoModal";

/**
 * CardShell - 모든 카드의 공통 껍데기 (단일 관리)
 *
 * variant에 따라 wrapper와 우측 버튼만 분기:
 * - inbox / timeline : <div> (드래그) + Info버튼 + 메모버튼
 * - explore          : <button> (클릭) + 체크박스
 *
 * Info 지원 카테고리: preparation, hotel, food, shopping, tourspa
 * Info 상태(isInfoOpen)는 CardShell 내부에서만 관리 - 외부 prop 불필요
 */

const INFO_CATEGORIES = ['preparation', 'hotel', 'food', 'shopping', 'tourspa'];

// Tailwind safelist (런타임 colorClass.replace('bg-', 'ring-') 결과를 빌드 타임에 노출)
// ring-rose-400 ring-orange-400 ring-purple-400 ring-blue-400 ring-cyan-400 ring-indigo-400 ring-amber-400 ring-emerald-400 ring-sky-400

export function CardShell({
    children,
    colorClass,
    icon: Icon,
    category,
    variant,
    card,
    // inbox/timeline drag props
    onRef,
    style,
    listeners,
    attributes,
    onOpenNotes,
    hasNotes,
    className,
    // explore props
    isSelected,
    isChecked,
    onToggleCheck,
    onClick,
    // anchor (거리 정렬 기준)
    isAnchor,
}: Omit<CommonCardProps, 'card'> & {
    card?: any;
    children: React.ReactNode;
    colorClass: string;
    icon: any;
    category: string;
    className?: string;
}) {
    const isExplore = variant === 'explore';
    const isInbox = variant === 'inbox';
    const supportsInfo = INFO_CATEGORIES.includes(card?.category ?? '');

    // Info 모달 상태: CardShell 내부에서만 관리
    const [isInfoOpen, setIsInfoOpen] = useState(false);


    /* ── 공통 내부 컨텐츠 ── */
    const innerContent = (
        <>
            {/* 왼쪽 컬러 바 */}
            <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${colorClass}`} />

            {/* 아이콘 */}
            {isExplore ? (
                <div className="ml-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-black/5">
                    <Icon className="w-4 h-4 text-slate-600" />
                </div>
            ) : (
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${colorClass.replace(
                        "bg-",
                        "bg-opacity-10 text-"
                    )}`}
                >
                    <Icon className="w-4 h-4" />
                </div>
            )}

            {/* 컨텐츠 */}
            <div className={`flex-1 min-w-0 flex flex-col justify-center ${isExplore ? '' : 'h-full md:pt-1'}`}>
                <span className="hidden md:block text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                    {category}
                </span>
                {isExplore ? children : <div className="w-full">{children}</div>}
            </div>

            {/* ── 우측 버튼 영역 ── */}
            {isExplore ? (
                /* Explore: 체크박스 버튼 */
                <>
                    {onToggleCheck && (
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={onToggleCheck}
                            onKeyDown={(e) => e.key === 'Enter' && onToggleCheck(e as any)}
                            className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150 cursor-pointer ${isChecked
                                ? "bg-orange-500 border-orange-500"
                                : "bg-white border-slate-200 hover:border-orange-300"
                                }`}
                        >
                            {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                    )}
                    {!onToggleCheck && isSelected && (
                        <div className="shrink-0 w-2 h-2 rounded-full bg-orange-400 mr-1" />
                    )}
                </>
            ) : (
                /* Inbox / Timeline: Info + 메모 버튼 */
                <div className="shrink-0 flex items-center h-full gap-0.5">

                    {/* Info 버튼: 지원 카테고리만 표시 */}
                    {supportsInfo && (
                        <div
                            className="w-8 h-full flex items-center justify-center relative"
                            onPointerDown={(e) => e.stopPropagation()}
                        >
                            <Info className="w-4 h-4 text-indigo-300 group-hover:text-indigo-500 transition-colors" />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsInfoOpen(true);
                                }}
                                className="absolute inset-0 cursor-pointer"
                                title="입국 정보 보기"
                                aria-label="입국 정보 보기"
                            />
                        </div>
                    )}

                    {/* 메모 버튼 */}
                    <div
                        className="w-8 h-full flex items-center justify-center relative"
                        {...(onOpenNotes && !isInbox ? {} : listeners)}
                    >
                        <NotebookPen
                            className={`w-4 h-4 transition-colors ${isInbox || !onOpenNotes
                                ? "text-gray-200 cursor-not-allowed"
                                : hasNotes
                                    ? "text-green-500 group-hover:text-blue-500"
                                    : "text-gray-300 group-hover:text-blue-400 cursor-pointer"
                                }`}
                        />
                        {onOpenNotes && !isInbox && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenNotes();
                                }}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                title="메모"
                                aria-label="메모"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );

    /* ── Explore: <button> wrapper ── */
    if (isExplore) {
        return (
            <button
                onClick={onClick}
                className={`group w-full bg-white hover:bg-slate-50 border-b flex items-center gap-3 relative h-[72px] px-3 transition-colors overflow-hidden text-left rounded-xl ${isSelected
                    ? "border-2 border-orange-400 bg-orange-50/50 shadow-sm"
                    : "border border-gray-100 hover:border-slate-200"
                    } ${className ?? ""}`}
            >
                {innerContent}
            </button>
        );
    }

    /* ── Inbox / Timeline: <div> wrapper (드래그) ── */
    return (
        <>
            <div
                ref={onRef}
                style={style}
                {...listeners}
                {...attributes}
                onClick={onClick}
                data-card-id={card?.id}
                className={`group bg-white hover:bg-slate-50 border-b border-gray-100 flex items-center gap-3 relative touch-none select-none h-[58px] md:h-[72px] px-3 transition-colors overflow-hidden cursor-grab active:cursor-grabbing ${isAnchor ? `ring-2 ring-inset ${colorClass.replace('bg-', 'ring-')}` : ''} ${className ?? ""}`}
            >
                {innerContent}
            </div>

            {/* Info 읽기 전용 모달 */}
            {card && (
                <CardInfoModal
                    card={card}
                    isOpen={isInfoOpen}
                    onClose={() => setIsInfoOpen(false)}
                />
            )}
        </>
    );
}

/** @deprecated BaseCard는 CardShell의 alias입니다. 새 코드에서는 CardShell 사용을 권장합니다. */
export { CardShell as BaseCard };
