"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { Spinner } from "./Spinner";

/**
 * Button — 공통 버튼 프리미티브.
 *
 * 코드베이스에 흩어진 버튼 클래스 조합을 variant 로 고정한다.
 *   primary   : 주요 액션 (emerald)        — 저장 / 확인 / 완료
 *   secondary : 보조 액션 (slate 채움)     — 취소 / 닫기
 *   outline   : 테두리형                    — 보조 액션 (밝은 배경 위)
 *   ghost     : 배경 없음                    — 아이콘 버튼 / 툴바
 *   danger    : 파괴적 액션 (red)           — 삭제
 *   accent    : 강조 (orange)               — 여행쇼핑 / AI
 *
 * 기존 버튼을 강제로 교체하지 않는다. 신규 UI 부터 사용.
 */

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "accent";
type ButtonSize = "sm" | "md" | "lg";

const BASE =
    "inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg " +
    "transition-colors select-none disabled:opacity-50 disabled:pointer-events-none " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1";

const VARIANT: Record<ButtonVariant, string> = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white focus-visible:ring-emerald-400",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-600 focus-visible:ring-slate-300",
    outline: "border border-slate-200 hover:bg-slate-50 text-slate-700 focus-visible:ring-slate-300",
    ghost: "hover:bg-slate-100 text-slate-600 focus-visible:ring-slate-300",
    danger: "bg-red-500 hover:bg-red-600 text-white focus-visible:ring-red-400",
    accent: "bg-orange-500 hover:bg-orange-600 text-white focus-visible:ring-orange-400",
};

const SIZE: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** true 면 스피너 표시 + 클릭 비활성화 */
    loading?: boolean;
    /** 아이콘만 있는 정사각 버튼 (padding 제거, 정사각 크기) */
    iconOnly?: boolean;
    /** 가로 꽉 채우기 */
    fullWidth?: boolean;
}

const ICON_ONLY_SIZE: Record<ButtonSize, string> = {
    sm: "h-8 w-8 p-0",
    md: "h-10 w-10 p-0",
    lg: "h-12 w-12 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        variant = "primary",
        size = "md",
        loading = false,
        iconOnly = false,
        fullWidth = false,
        disabled,
        className,
        children,
        ...rest
    },
    ref
) {
    return (
        <button
            ref={ref}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            className={cn(
                BASE,
                VARIANT[variant],
                iconOnly ? ICON_ONLY_SIZE[size] : SIZE[size],
                fullWidth && "w-full",
                className
            )}
            {...rest}
        >
            {loading && <Spinner size="sm" tone={variant === "secondary" || variant === "outline" || variant === "ghost" ? "muted" : "white"} />}
            {children}
        </button>
    );
});
