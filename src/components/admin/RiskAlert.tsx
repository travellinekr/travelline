import { AlertOctagon } from 'lucide-react';

interface RiskItem {
    apiName: string;
    ratio: number; // 0~1
    detail: string;
}

interface RiskAlertProps {
    items: RiskItem[];
}

// 95% 이상 초과한 API 를 상단 배너로 노출. 없으면 렌더 안 함.
export function RiskAlert({ items }: RiskAlertProps) {
    if (items.length === 0) return null;
    return (
        <div className="border border-red-200 bg-red-50 rounded-xl p-4">
            <div className="flex items-start gap-2.5">
                <AlertOctagon className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1">
                    <div className="text-sm font-semibold text-red-900">유료 전환 임박</div>
                    <ul className="text-sm text-red-800 space-y-0.5">
                        {items.map(item => (
                            <li key={item.apiName}>
                                <span className="font-medium">{item.apiName}</span>
                                {' '}— {Math.round(item.ratio * 100)}% 소진 · {item.detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
