import React from "react";
import { cn } from "@/lib/cn";
import {
    CARD_CATEGORY_COLOR,
    CARD_CATEGORY_LABEL,
    type CardCategoryKey,
} from "@/data/colors";

/**
 * Badge — 작은 상태/분류 라벨.
 *
 * tone:
 *   neutral / primary / accent / danger / success  — 일반 상태 배지
 * 또는 category prop 으로 카드 카테고리 색 배지 (CARD_CATEGORY_COLOR 사용).
 */

type BadgeTone = "neutral" | "primary" | "accent" | "danger" | "success";

const TONE: Record<BadgeTone, string> = {
    neutral: "bg-slate-100 text-slate-600",
    primary: "bg-emerald-50 text-emerald-700",
    accent: "bg-orange-50 text-orange-700",
    danger: "bg-red-50 text-red-700",
    success: "bg-emerald-50 text-emerald-700",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    /** 지정 시 카드 카테고리 색을 쓰고, children 없으면 한글 라벨 자동 표시 */
    category?: CardCategoryKey;
    /** 알약형(pill) 대신 각진 모서리 */
    square?: boolean;
}

export function Badge({ tone = "neutral", category, square = false, className, children, ...rest }: BadgeProps) {
    const catColor = category ? CARD_CATEGORY_COLOR[category] : null;
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold leading-none",
                square ? "rounded" : "rounded-full",
                catColor ? cn(catColor.soft, catColor.text) : TONE[tone],
                className
            )}
            {...rest}
        >
            {children ?? (category ? CARD_CATEGORY_LABEL[category] : null)}
        </span>
    );
}
