import type { ReactNode } from 'react';

// 보드 전반의 빈 상태(빈 일차/빈 카테고리/destination 미선택 등)를 일관된 패턴으로 표시.
// size: 'sm'=타임라인 빈 일차, 'md'=인박스 빈 카테고리, 'lg'=Picker destination 미선택
type Size = 'sm' | 'md' | 'lg';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    subtitle?: string;
    size?: Size;
    className?: string;
}

const SIZES: Record<Size, { wrap: string; emoji: string; title: string; subtitle: string; gap: string }> = {
    sm: { wrap: 'py-6', emoji: 'text-base', title: 'text-xs', subtitle: 'text-[11px]', gap: 'gap-0.5' },
    md: { wrap: 'py-16', emoji: 'text-3xl', title: 'text-sm', subtitle: 'text-xs', gap: 'gap-2' },
    lg: { wrap: 'h-[400px]', emoji: 'text-5xl', title: 'text-sm', subtitle: 'text-xs', gap: 'gap-2' },
};

export function EmptyState({ icon, title, subtitle, size = 'md', className = '' }: EmptyStateProps) {
    const s = SIZES[size];
    const isEmojiString = typeof icon === 'string';
    return (
        <div className={`flex flex-col items-center justify-center text-center px-6 ${s.wrap} ${s.gap} ${className}`}>
            {icon && (
                isEmojiString
                    ? <span className={`${s.emoji} text-slate-300 leading-none`}>{icon}</span>
                    : <div className="text-slate-300">{icon}</div>
            )}
            <p className={`${s.title} font-medium text-slate-500`}>{title}</p>
            {subtitle && <p className={`${s.subtitle} text-slate-400`}>{subtitle}</p>}
        </div>
    );
}
