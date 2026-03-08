import { NotebookPen, Check } from "lucide-react";
import type { CommonCardProps } from "./types";

/**
 * CardShell - 모든 카드의 공통 껍데기
 *
 * variant에 따라 3가지 표현:
 * - inbox / timeline: 드래그 가능, 오른쪽에 메모 버튼
 * - explore: 클릭 가능 button, 오른쪽에 체크박스 버튼
 */
export function CardShell({
    children,
    colorClass,
    icon: Icon,
    category,
    variant,
    // inbox/timeline props
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
}: Omit<CommonCardProps, 'card'> & {
    card?: any;
    children: React.ReactNode;
    colorClass: string;
    icon: any;
    category: string;
    className?: string;
}) {
    const isExplore = variant === 'explore';

    /* ── Explore 버전: 선택 가능한 버튼 ── */
    if (isExplore) {
        return (
            <button
                onClick={onClick}
                className={`group w-full bg-white hover:bg-slate-50 border-b flex items-center gap-3 relative h-[72px] px-3 transition-colors overflow-hidden text-left rounded-xl ${isSelected
                    ? "border-2 border-orange-400 bg-orange-50/50 shadow-sm"
                    : "border border-gray-100 hover:border-slate-200"
                    } ${className ?? ""}`}
            >
                {/* 왼쪽 컬러 바 */}
                <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${colorClass}`} />

                {/* 아이콘 */}
                <div className="ml-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-black/5">
                    <Icon className="w-4 h-4 text-slate-600" />
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                        {category}
                    </span>
                    {children}
                </div>

                {/* 체크박스 버튼 */}
                {onToggleCheck && (
                    <button
                        onClick={onToggleCheck}
                        className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${isChecked
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white border-slate-200 hover:border-orange-300"
                            }`}
                    >
                        {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                )}

                {/* 선택 인디케이터 (체크박스 없을 때) */}
                {!onToggleCheck && isSelected && (
                    <div className="shrink-0 w-2 h-2 rounded-full bg-orange-400 mr-1" />
                )}
            </button>
        );
    }

    /* ── Inbox / Timeline 버전: 드래그 가능한 div ── */
    return (
        <div
            ref={onRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`group bg-white hover:bg-slate-50 border-b border-gray-100 flex items-center gap-3 relative touch-none select-none h-[72px] px-3 transition-colors overflow-hidden cursor-grab active:cursor-grabbing ${className ?? ""}`}
        >
            {/* 왼쪽 컬러 바 */}
            <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${colorClass}`} />

            {/* 아이콘 */}
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${colorClass.replace(
                    "bg-",
                    "bg-opacity-10 text-"
                )}`}
            >
                <Icon className="w-4 h-4" />
            </div>

            {/* 컨텐츠 */}
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full pt-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                    {category}
                </span>
                <div className="w-full">{children}</div>
            </div>

            {/* 메모 버튼 */}
            <div
                className="shrink-0 w-8 h-full flex items-center justify-center relative"
                {...(onOpenNotes ? {} : listeners)}
            >
                <NotebookPen
                    className={`w-4 h-4 transition-colors ${hasNotes
                        ? "text-green-500 group-hover:text-blue-500"
                        : "text-gray-300 group-hover:text-blue-400"
                        } cursor-pointer`}
                />
                {onOpenNotes && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenNotes();
                        }}
                        className="absolute inset-0 opacity-0 hover:opacity-0 cursor-pointer"
                        title="메모"
                        aria-label="메모"
                    />
                )}
            </div>
        </div>
    );
}

/** @deprecated BaseCard는 CardShell의 alias입니다. 새 코드에서는 CardShell 사용을 권장합니다. */
export { CardShell as BaseCard };
