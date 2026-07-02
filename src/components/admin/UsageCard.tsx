import Link from 'next/link';
import { AlertTriangle, AlertOctagon } from 'lucide-react';
import { computeStatus, UsageStatus } from '@/lib/admin/freeTierLimits';

interface UsageCardProps {
    apiName: string;
    used: number;
    limit: number;
    unit: string;
    detailHref: string;
    note?: string;
    lastCheckedAt?: number;
    // used/limit 대신 상태를 강제 지정 (실측 불가 API 용)
    forcedStatus?: UsageStatus;
}

const BAR_COLOR: Record<UsageStatus, string> = {
    normal: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
};

const TEXT_COLOR: Record<UsageStatus, string> = {
    normal: 'text-emerald-700',
    warning: 'text-amber-700',
    danger: 'text-red-700',
};

const STATUS_LABEL: Record<UsageStatus, string> = {
    normal: '정상',
    warning: '곧 한도 도달',
    danger: '유료 전환 임박',
};

function formatNumber(n: number): string {
    return new Intl.NumberFormat('ko-KR').format(n);
}

export function UsageCard({
    apiName,
    used,
    limit,
    unit,
    detailHref,
    note,
    lastCheckedAt,
    forcedStatus,
}: UsageCardProps) {
    const status = forcedStatus ?? computeStatus(used, limit);
    const ratio = limit > 0 ? Math.min(1, used / limit) : 0;
    const pct = Math.round(ratio * 100);

    const StatusIcon = status === 'danger' ? AlertOctagon : status === 'warning' ? AlertTriangle : null;

    return (
        <Link
            href={detailHref}
            className="group block border border-slate-200 rounded-xl bg-white p-5 shadow-sm hover:border-slate-300 hover:shadow transition-all"
        >
            <div className="flex items-start justify-between">
                <div className="text-sm font-medium text-slate-900">{apiName}</div>
                {StatusIcon && (
                    <div className={`flex items-center gap-1 text-xs ${TEXT_COLOR[status]}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        <span>{STATUS_LABEL[status]}</span>
                    </div>
                )}
            </div>

            <div className="mt-3 flex items-baseline gap-1.5 tabular-nums">
                <span className="text-2xl font-semibold text-slate-900">{formatNumber(used)}</span>
                <span className="text-sm text-slate-400">/ {formatNumber(limit)} {unit}</span>
            </div>

            <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className={`h-full ${BAR_COLOR[status]} transition-all`}
                    style={{ width: `${Math.max(2, pct)}%` }}
                    aria-label={`${apiName} ${pct}% 사용`}
                />
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>{pct}%</span>
                {lastCheckedAt && (
                    <span title={new Date(lastCheckedAt).toLocaleString('ko-KR')}>
                        {Math.round((Date.now() - lastCheckedAt) / 1000)}초 전
                    </span>
                )}
            </div>

            {note && <div className="mt-2 text-xs text-slate-500">{note}</div>}
        </Link>
    );
}
