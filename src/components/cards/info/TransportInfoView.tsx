'use client';

import type { TransportInfo } from '@/data/card-info-types';
import { useCardInfo } from '@/hooks/useCardInfo';
import { InfoModalShell } from './InfoModalShell';
import { InfoWarnings } from './InfoWarnings';
import { InfoHighlights } from './InfoHighlights';
import { InfoTips } from './InfoTips';
import { InfoLinksList } from './InfoLinksList';
import { InfoPhotoGallery } from './InfoPhotoGallery';

interface Props {
    card: any;
    isOpen: boolean;
    onClose: () => void;
}

export function TransportInfoView({ card, isOpen, onClose }: Props) {
    const cityEng = card?.city || card?.destinationCity || '';
    const name = card?.text || card?.name || card?.title || '';
    const { info, loading } = useCardInfo('transport', cityEng, name);
    const data = info as TransportInfo | null;
    const subtitle = `${name}${cityEng ? ` · ${cityEng}` : ''}`;

    return (
        <InfoModalShell isOpen={isOpen} title="교통 정보" subtitle={subtitle} onClose={onClose}>
            {loading ? (
                <p className="text-sm text-gray-400 text-center mt-10">불러오는 중...</p>
            ) : !data ? (
                <p className="text-sm text-gray-400 text-center mt-10">
                    {name} 의 상세 정보가 아직 등록되지 않았습니다.
                </p>
            ) : (
                <>
                    <div className="flex items-start gap-2">
                        <span className="text-base text-gray-800 flex-1">{data.summary}</span>
                        {data.updatedAt && (
                            <span className="text-[10px] text-gray-400 shrink-0 pt-1">{data.updatedAt} 기준</span>
                        )}
                    </div>

                    <InfoWarnings warnings={data.warnings} />
                    <InfoHighlights highlights={data.highlights} />

                    {/* 요금 */}
                    {data.fare && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">요금</h3>
                            <div className="border border-gray-100 rounded-xl p-3">
                                <div className="text-sm font-semibold text-gray-800">
                                    기본 · <span className="text-emerald-600">{data.fare.base}</span>
                                </div>
                                {data.fare.note && <div className="text-xs text-gray-500 mt-1">{data.fare.note}</div>}
                                {data.fare.ranges && data.fare.ranges.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                        {data.fare.ranges.map((r, i) => (
                                            <div key={i} className="text-xs text-gray-700 flex justify-between">
                                                <span>{r.from} → {r.to}</span>
                                                <span className="text-emerald-600 font-medium">{r.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 앱 */}
                    {data.app && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">앱</h3>
                            <div className="border border-gray-100 rounded-xl p-3 space-y-1">
                                <div className="text-sm font-semibold text-gray-800">
                                    📱 {data.app.required ? '앱 필수' : '앱 있음 (선택)'}
                                    {data.app.name && ` · ${data.app.name}`}
                                </div>
                                {data.app.url && (
                                    <button
                                        onClick={() => window.open(data.app!.url!, '_blank', 'noopener,noreferrer')}
                                        className="text-xs text-indigo-600 hover:underline"
                                    >
                                        앱 페이지 열기 ↗
                                    </button>
                                )}
                                {data.app.downloadUrl && data.app.downloadUrl !== data.app.url && (
                                    <button
                                        onClick={() => window.open(data.app!.downloadUrl!, '_blank', 'noopener,noreferrer')}
                                        className="text-xs text-indigo-600 hover:underline ml-3"
                                    >
                                        다운로드 ↗
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 노선 */}
                    {data.route && data.route.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">노선</h3>
                            <div className="space-y-3">
                                {data.route.map((r, i) => (
                                    <div key={i}>
                                        <div className="text-sm font-semibold text-gray-800 mb-1">{r.name}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {r.stations.map((s, j) => (
                                                <span key={j} className="text-[11px] bg-slate-100 text-slate-700 rounded-full px-2 py-0.5">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 기본 정보 */}
                    {(data.hours || data.frequency || (data.payment && data.payment.length > 0)) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">기본 정보</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.hours && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">운영시간</span>
                                        <span className="text-sm text-gray-700">{data.hours}</span>
                                    </div>
                                )}
                                {data.frequency && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">배차</span>
                                        <span className="text-sm text-gray-700">{data.frequency}</span>
                                    </div>
                                )}
                                {data.payment && data.payment.length > 0 && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">결제</span>
                                        <span className="text-sm text-gray-700">{data.payment.join(', ')}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <InfoTips tips={data.tips} />
                    <InfoPhotoGallery photos={data.photos} />
                    <InfoLinksList links={data.links} />
                </>
            )}
        </InfoModalShell>
    );
}
