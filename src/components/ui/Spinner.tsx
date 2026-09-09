import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Spinner — 인라인 로딩 표시 (버튼 안, 인풋 우측, 리스트 하단 등).
 *
 * 전체 화면 / 섹션 로딩은 이걸 쓰지 말고 @/components/BrandLoader 의
 * <BrandLoader> · <ModalLoader> · <TopProgressBar> 를 쓴다. (브랜드 인상 통일)
 *
 * 기존에 흩어져 있던 `<Loader2 className="w-4 h-4 animate-spin" />` 패턴을
 * 한 컴포넌트로 모은 것. 크기/색을 prop 으로 고정한다.
 */

type SpinnerSize = "xs" | "sm" | "md" | "lg";
type SpinnerTone = "current" | "primary" | "muted" | "white";

const SIZE: Record<SpinnerSize, string> = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
};

const TONE: Record<SpinnerTone, string> = {
    current: "text-current",
    primary: "text-emerald-500",
    muted: "text-slate-400",
    white: "text-white",
};

export interface SpinnerProps {
    size?: SpinnerSize;
    tone?: SpinnerTone;
    /** 스크린리더용 라벨 (기본 "로딩 중"). 시각적으로는 숨김. */
    label?: string;
    className?: string;
}

export function Spinner({ size = "sm", tone = "current", label = "로딩 중", className }: SpinnerProps) {
    return (
        <span role="status" aria-live="polite" className={cn("inline-flex", className)}>
            <Loader2 className={cn("animate-spin", SIZE[size], TONE[tone])} aria-hidden="true" />
            <span className="sr-only">{label}</span>
        </span>
    );
}

/**
 * 가운데 정렬된 블록 스피너 — 패널/리스트 영역이 로딩 중일 때.
 * (전체 화면은 BrandLoader 사용)
 */
export function SpinnerBlock({ label = "불러오는 중", className }: { label?: string; className?: string }) {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-2 py-10 text-slate-400", className)}>
            <Spinner size="lg" tone="muted" label={label} />
            <span className="text-xs font-medium">{label}</span>
        </div>
    );
}
