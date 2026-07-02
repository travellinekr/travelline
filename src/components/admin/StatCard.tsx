interface StatCardProps {
    label: string;
    value: string | number;
    sublabel?: string;
    trend?: { direction: 'up' | 'down' | 'flat'; amount: string };
}

export function StatCard({ label, value, sublabel, trend }: StatCardProps) {
    return (
        <div className="border border-slate-200 rounded-xl bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">{label}</div>
            <div className="mt-2 flex items-baseline gap-2">
                <div className="text-3xl font-semibold text-slate-900 tabular-nums">{value}</div>
                {trend && (
                    <span
                        className={`text-xs font-medium ${
                            trend.direction === 'up'
                                ? 'text-emerald-600'
                                : trend.direction === 'down'
                                    ? 'text-red-600'
                                    : 'text-slate-500'
                        }`}
                    >
                        {trend.direction === 'up' && '↑'}
                        {trend.direction === 'down' && '↓'}
                        {trend.amount}
                    </span>
                )}
            </div>
            {sublabel && <div className="mt-1 text-xs text-slate-400">{sublabel}</div>}
        </div>
    );
}
