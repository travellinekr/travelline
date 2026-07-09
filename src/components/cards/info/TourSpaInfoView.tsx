'use client';

import type { TourSpaInfo } from '@/data/card-info-types';
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

export function TourSpaInfoView({ card, isOpen, onClose }: Props) {
    const cityEng = card?.city || card?.destinationCity || '';
    const name = card?.text || card?.name || card?.title || '';
    const { info, loading } = useCardInfo('tourspa', cityEng, name);
    const data = info as TourSpaInfo | null;
    const subtitle = `${name}${cityEng ? ` · ${cityEng}` : ''}`;
    const heroImage = data?.photos?.[0];
    const galleryPhotos = data?.photos?.slice(1);

    return (
        <InfoModalShell isOpen={isOpen} title="투어&스파 정보" subtitle={subtitle} onClose={onClose}>
            {loading ? (
                <p className="text-sm text-gray-400 text-center mt-10">불러오는 중...</p>
            ) : !data ? (
                <p className="text-sm text-gray-400 text-center mt-10">
                    {name} 의 상세 정보가 아직 등록되지 않았습니다.
                </p>
            ) : (
                <>
                    {heroImage && (
                        <button
                            type="button"
                            onClick={() => window.open(heroImage, '_blank', 'noopener,noreferrer')}
                            className="relative block w-full h-44 md:h-56 overflow-hidden rounded-2xl bg-gray-100 group"
                            aria-label={`${name} 대표 이미지 새 탭에서 열기`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={heroImage}
                                alt={`${name} 대표 이미지`}
                                loading="eager"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 py-3 text-left">
                                <span className="text-white text-sm font-semibold drop-shadow">{name}</span>
                            </div>
                        </button>
                    )}

                    <div className="flex items-start gap-2">
                        <span className="text-base text-gray-800 flex-1">{data.summary}</span>
                        {data.updatedAt && (
                            <span className="text-[10px] text-gray-400 shrink-0 pt-1">{data.updatedAt} 기준</span>
                        )}
                    </div>

                    <InfoWarnings warnings={data.warnings} />
                    <InfoHighlights highlights={data.highlights} />

                    {(data.hours || data.duration || data.price || data.bestTime || data.access || data.reservation) && (
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">기본 정보</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {data.hours && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">운영시간</span>
                                        <span className="text-sm text-gray-700">{data.hours}</span>
                                    </div>
                                )}
                                {data.duration && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">소요시간</span>
                                        <span className="text-sm text-gray-700">{data.duration}</span>
                                    </div>
                                )}
                                {data.price && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">요금</span>
                                        <span className="text-sm text-gray-700">{data.price}</span>
                                    </div>
                                )}
                                {data.bestTime && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">추천시간</span>
                                        <span className="text-sm text-gray-700">{data.bestTime}</span>
                                    </div>
                                )}
                                {data.access && (data.access.station || data.access.area || data.access.note) && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">위치/교통</span>
                                        <span className="text-sm text-gray-700">
                                            {[data.access.area, data.access.station, data.access.note].filter(Boolean).join(' · ')}
                                        </span>
                                    </div>
                                )}
                                {data.reservation && (
                                    <div className="flex px-4 py-3 gap-3">
                                        <span className="text-xs font-bold text-gray-500 w-20 shrink-0">예약</span>
                                        <span className="text-sm text-gray-700">
                                            {data.reservation.required ? '권장/필수' : '대체로 불필요'}
                                            {data.reservation.method ? ` · ${data.reservation.method}` : ''}
                                            {data.reservation.note ? ` · ${data.reservation.note}` : ''}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <InfoTips tips={data.tips} />
                    <InfoPhotoGallery photos={galleryPhotos} />
                    <InfoLinksList links={data.links} />
                </>
            )}
        </InfoModalShell>
    );
}
