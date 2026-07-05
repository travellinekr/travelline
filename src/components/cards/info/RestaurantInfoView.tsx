'use client';

import type { RestaurantInfo } from '@/data/card-info-types';
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

export function RestaurantInfoView({ card, isOpen, onClose }: Props) {
    const cityEng = card?.city || card?.destinationCity || '';
    const name = card?.text || card?.name || card?.title || '';
    const { info, loading } = useCardInfo('food', cityEng, name);
    const data = info as RestaurantInfo | null;
    const subtitle = `${name}${cityEng ? ` · ${cityEng}` : ''}`;

    return (
        <InfoModalShell isOpen={isOpen} title="맛집 정보" subtitle={subtitle} onClose={onClose}>
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

                    {/* 예약 */}
                    {data.reservation && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">예약</h3>
                            <div className="border border-gray-100 rounded-xl p-3 space-y-1">
                                <div className="text-sm font-semibold text-gray-800">
                                    {data.reservation.required ? '✱ 예약 필수' : '워크인 가능'}
                                </div>
                                {data.reservation.method && <div className="text-xs text-gray-500">방법 · {data.reservation.method}</div>}
                                {data.reservation.note && <div className="text-xs text-gray-500">{data.reservation.note}</div>}
                                {data.reservation.url && (
                                    <button
                                        onClick={() => window.open(data.reservation!.url!, '_blank', 'noopener,noreferrer')}
                                        className="text-xs text-indigo-600 hover:underline mt-1"
                                    >
                                        예약 페이지 열기 ↗
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 메뉴 */}
                    {data.menu && (data.menu.signature || (data.menu.items && data.menu.items.length > 0)) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">메뉴</h3>
                            {data.menu.signature && (
                                <div className="mb-2 text-sm text-gray-800">
                                    <span className="text-emerald-600 font-semibold">시그니처</span> · {data.menu.signature}
                                </div>
                            )}
                            {data.menu.items && data.menu.items.length > 0 && (
                                <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                    {data.menu.items.map((it, i) => (
                                        <div key={i} className="flex items-center justify-between gap-3 px-4 py-2.5">
                                            <div className="min-w-0">
                                                <div className="text-sm font-medium text-gray-800 truncate">{it.name}</div>
                                                {it.note && <div className="text-xs text-gray-500 truncate">{it.note}</div>}
                                            </div>
                                            {it.price && <span className="text-sm text-emerald-600 shrink-0">{it.price}</span>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* 영업/대기/드레스코드/결제 */}
                    {(data.hours || data.waitTime || data.dressCode || (data.payment && data.payment.length > 0)) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">기본 정보</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.hours && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">영업시간</span>
                                        <span className="text-sm text-gray-700">{data.hours}</span>
                                    </div>
                                )}
                                {data.waitTime && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">대기시간</span>
                                        <span className="text-sm text-gray-700">{data.waitTime}</span>
                                    </div>
                                )}
                                {data.dressCode && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">드레스코드</span>
                                        <span className="text-sm text-gray-700">{data.dressCode}</span>
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
