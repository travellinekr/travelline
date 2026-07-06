import { ExternalLink, BookOpen, Globe } from 'lucide-react';
import type { InfoLink } from '@/data/card-info-types';

// 기존 CardInfoModal.tsx 의 EntryLink 렌더 로직을 그대로 옮긴 재사용 컴포넌트.
// 카드 인포·입국 안내 모두 공용.

function LinkIcon({ type }: { type: InfoLink['type'] }) {
    if (type === 'official') return <Globe className="w-3.5 h-3.5 shrink-0" />;
    if (type === 'blog') return <BookOpen className="w-3.5 h-3.5 shrink-0" />;
    return <ExternalLink className="w-3.5 h-3.5 shrink-0" />;
}

function linkStyle(type: InfoLink['type']) {
    if (type === 'official') return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
    if (type === 'blog') return 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100';
    return 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100';
}

function linkTypeBadge(type: InfoLink['type']) {
    if (type === 'official') return '공식';
    if (type === 'blog') return '블로그';
    return '가이드';
}

interface Props {
    links?: InfoLink[];
    title?: string;
}

export function InfoLinksList({ links, title = '유용한 링크' }: Props) {
    if (!links || links.length === 0) return null;
    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <div className="space-y-2">
                {links.map((link, i) => (
                    <button
                        key={i}
                        onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors ${linkStyle(link.type)}`}
                    >
                        <LinkIcon type={link.type} />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold truncate">{link.label}</span>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/60 shrink-0">
                                    {linkTypeBadge(link.type)}
                                </span>
                            </div>
                            {link.description && (
                                <p className="text-xs opacity-70 mt-0.5 truncate">{link.description}</p>
                            )}
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 opacity-50 shrink-0" />
                    </button>
                ))}
            </div>
        </div>
    );
}
