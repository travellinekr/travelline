import React from "react";
import { cn } from "@/lib/cn";

/**
 * Skeleton — 로딩 자리표시 블록.
 *
 * 여행보드 진입 스켈레톤(@/components/board/LoadingSkeleton)처럼 화면 전체
 * 골격을 흉내 내는 큰 스켈레톤은 그쪽을 쓰고, 여기 Skeleton 은 작은 조각
 * (한 줄 텍스트, 아바타, 썸네일 등)을 조립할 때 쓴다.
 *
 *   <Skeleton className="h-4 w-32" />
 *   <Skeleton circle className="w-8 h-8" />
 *   <SkeletonText lines={3} />
 */

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    circle?: boolean;
}

export function Skeleton({ circle = false, className, ...rest }: SkeletonProps) {
    return (
        <div
            aria-hidden="true"
            className={cn("animate-pulse bg-slate-200/70", circle ? "rounded-full" : "rounded", className)}
            {...rest}
        />
    );
}

/** 여러 줄 텍스트 자리표시. 마지막 줄은 짧게. */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton key={i} className={cn("h-3", i === lines - 1 ? "w-2/3" : "w-full")} />
            ))}
        </div>
    );
}
