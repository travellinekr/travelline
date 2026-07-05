// 핵심 포인트 불릿 리스트. 빈 배열/undefined 면 렌더 안 함.
export function InfoHighlights({ highlights, title = '핵심 포인트' }: { highlights?: string[]; title?: string }) {
    if (!highlights || highlights.length === 0) return null;
    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <ul className="space-y-1.5">
                {highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        <span>{h}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
