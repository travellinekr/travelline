'use client';

import type { AccommodationInfo } from '@/data/card-info-types';
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

export function AccommodationInfoView({ card, isOpen, onClose }: Props) {
    const cityEng = card?.city || card?.destinationCity || '';
    const name = card?.text || card?.name || card?.title || '';
    const { info, loading } = useCardInfo('hotel', cityEng, name);
    const data = info as AccommodationInfo | null;
    const subtitle = `${name}${cityEng ? ` · ${cityEng}` : ''}`;

    return (
        <InfoModalShell isOpen={isOpen} title="숙소 정보" subtitle={subtitle} onClose={onClose}>
            {loading ? (
                <p className="text-sm text-gray-400 text-center mt-10">불러오는 중...</p>
            ) : !data ? (
                <p className="text-sm text-gray-400 text-center mt-10">
                    {name} 의 상세 정보가 아직 등록되지 않았습니다.
                </p>
            ) : (
                <>
                    {/* summary + updatedAt */}
                    <div className="flex items-start gap-2">
                        <span className="text-base text-gray-800 flex-1">{data.summary}</span>
                        {data.updatedAt && (
                            <span className="text-[10px] text-gray-400 shrink-0 pt-1">{data.updatedAt} 기준</span>
                        )}
                    </div>

                    <InfoWarnings warnings={data.warnings} />
                    <InfoHighlights highlights={data.highlights} />

                    {/* 체크인/체크아웃 */}
                    {(data.checkIn || data.checkOut) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">체크인/아웃</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {data.checkIn && (
                                    <div className="border border-gray-100 rounded-xl p-3">
                                        <div className="text-xs font-bold text-gray-500">Check-in</div>
                                        <div className="text-sm font-semibold text-gray-800 mt-1">{data.checkIn.time}</div>
                                        {data.checkIn.note && <div className="text-xs text-gray-500 mt-1">{data.checkIn.note}</div>}
                                    </div>
                                )}
                                {data.checkOut && (
                                    <div className="border border-gray-100 rounded-xl p-3">
                                        <div className="text-xs font-bold text-gray-500">Check-out</div>
                                        <div className="text-sm font-semibold text-gray-800 mt-1">{data.checkOut.time}</div>
                                        {data.checkOut.note && <div className="text-xs text-gray-500 mt-1">{data.checkOut.note}</div>}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 조식 */}
                    {data.breakfast && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">조식</h3>
                            <div className="border border-gray-100 rounded-xl p-3 space-y-1">
                                <div className="text-sm font-semibold text-gray-800">
                                    {data.breakfast.included ? '✓ 포함' : '별도 유료'}
                                    {data.breakfast.price && ` · ${data.breakfast.price}`}
                                </div>
                                {data.breakfast.time && <div className="text-xs text-gray-500">시간 · {data.breakfast.time}</div>}
                                {data.breakfast.menu && <div className="text-xs text-gray-500">메뉴 · {data.breakfast.menu}</div>}
                            </div>
                        </div>
                    )}

                    {/* 부대시설 */}
                    {data.amenities && data.amenities.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">부대시설</h3>
                            <div className="flex flex-wrap gap-2">
                                {data.amenities.map((a, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700">
                                        <span>{a.icon}</span>
                                        <span className="font-medium">{a.label}</span>
                                        {a.note && <span className="text-gray-400">· {a.note}</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 룸 타입 */}
                    {data.roomTypes && data.roomTypes.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">객실 타입</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.roomTypes.map((r, i) => (
                                    <div key={i} className="px-4 py-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                                            {r.price && <span className="text-sm text-emerald-600 font-medium">{r.price}</span>}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5 space-x-2">
                                            {r.capacity && <span>{r.capacity}</span>}
                                            {r.note && <span>· {r.note}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 위치 이점 */}
                    {data.location && (data.location.transit || data.location.landmark || data.location.airport) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">위치</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.location.transit && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">교통</span>
                                        <span className="text-sm text-gray-700">{data.location.transit}</span>
                                    </div>
                                )}
                                {data.location.landmark && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">랜드마크</span>
                                        <span className="text-sm text-gray-700">{data.location.landmark}</span>
                                    </div>
                                )}
                                {data.location.airport && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">공항</span>
                                        <span className="text-sm text-gray-700">{data.location.airport}</span>
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
