import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — 조건부 className 병합 유틸.
 *
 * clsx 로 falsy 를 걸러내고, tailwind-merge 로 상충하는 Tailwind 클래스를
 * 뒤쪽 값이 이기도록 정리한다. (예: cn("px-2", cond && "px-4") → "px-4")
 *
 * 공통 프리미티브(src/components/ui/*)에서 variant 클래스를 조립할 때 사용한다.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
