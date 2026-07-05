// 팁 불릿 리스트. 빈 배열/undefined 면 렌더 안 함.
export function InfoTips({ tips, title = '팁' }: { tips?: string[]; title?: string }) {
    if (!tips || tips.length === 0) return null;
    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <ul className="space-y-1.5">
                {tips.map((t, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-indigo-500 shrink-0">💡</span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
