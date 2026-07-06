'use client';

import type { ShoppingInfo } from '@/data/card-info-types';
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

export function ShoppingInfoView({ card, isOpen, onClose }: Props) {
    const cityEng = card?.city || card?.destinationCity || '';
    const name = card?.text || card?.name || card?.title || '';
    const { info, loading } = useCardInfo('shopping', cityEng, name);
    const data = info as ShoppingInfo | null;
    const subtitle = `${name}${cityEng ? ` · ${cityEng}` : ''}`;

    return (
        <InfoModalShell isOpen={isOpen} title="쇼핑 정보" subtitle={subtitle} onClose={onClose}>
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

                    {/* 택스 리펀드 */}
                    {data.taxRefund && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">택스 리펀드</h3>
                            <div className="border border-gray-100 rounded-xl p-3 space-y-1">
                                <div className="text-sm font-semibold text-gray-800">
                                    {data.taxRefund.available ? '✓ 지원' : '미지원'}
                                </div>
                                {data.taxRefund.minAmount && <div className="text-xs text-gray-500">최소 금액 · {data.taxRefund.minAmount}</div>}
                                {data.taxRefund.method && <div className="text-xs text-gray-500">방법 · {data.taxRefund.method}</div>}
                                {data.taxRefund.note && <div className="text-xs text-gray-500">{data.taxRefund.note}</div>}
                            </div>
                        </div>
                    )}

                    {/* 기본 정보 */}
                    {(data.hours || data.closureDates || data.parking || data.floors || (data.payment && data.payment.length > 0)) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">기본 정보</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.hours && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">영업시간</span>
                                        <span className="text-sm text-gray-700">{data.hours}</span>
                                    </div>
                                )}
                                {data.closureDates && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">휴무</span>
                                        <span className="text-sm text-gray-700">{data.closureDates}</span>
                                    </div>
                                )}
                                {data.floors && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">규모</span>
                                        <span className="text-sm text-gray-700">{data.floors}</span>
                                    </div>
                                )}
                                {data.parking && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">주차</span>
                                        <span className="text-sm text-gray-700">{data.parking}</span>
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
