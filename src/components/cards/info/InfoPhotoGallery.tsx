'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { PlacePhotoData } from '@/data/card-info-types';
import { PlacePhoto, PlacePhotoAttribution } from '@/components/places/PlacePhoto';

function mergeUniquePhotos(primary: PlacePhotoData[], secondary: PlacePhotoData[]) {
    const seen = new Set<string>();
    return [...primary, ...secondary].filter(photo => {
        if (!photo.photoReference || seen.has(photo.photoReference)) return false;
        seen.add(photo.photoReference);
        return true;
    });
}

// 사진 썸네일 갤러리.
// - 실패한 사진은 제거하고 다음 정상 사진을 앞으로 당김
// - 유효 사진이 부족하면 placeId로 최신 Google 사진을 한 번 재조회해 보충
// - Google 사진이 없으면 legacy photos, 모두 실패하면 갤러리 자체를 숨김
export function InfoPhotoGallery({
    photos,
    placeId,
    placePhotos,
    title = '사진',
}: {
    photos?: string[];
    placeId?: string;
    placePhotos?: PlacePhotoData[];
    title?: string;
}) {
    const [failedPlaceRefs, setFailedPlaceRefs] = useState<Set<string>>(() => new Set());
    const [failedLegacySources, setFailedLegacySources] = useState<Set<string>>(() => new Set());
    const [refreshedPhotos, setRefreshedPhotos] = useState<PlacePhotoData[]>([]);
    const [refreshAttempted, setRefreshAttempted] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const inputKey = placePhotos?.map(photo => photo.photoReference).join('|') || '';
    const targetCount = placePhotos && placePhotos.length > 0 ? placePhotos.length : 5;

    const allPlacePhotos = useMemo(
        () => mergeUniquePhotos(placePhotos || [], refreshedPhotos),
        [placePhotos, refreshedPhotos]
    );
    const availablePlacePhotos = allPlacePhotos
        .filter(photo => !failedPlaceRefs.has(photo.photoReference))
        .slice(0, targetCount);
    const availableLegacyPhotos = (photos || []).filter(
        src => !failedLegacySources.has(src)
    );

    const refreshPhotos = useCallback(async () => {
        if (!placeId || refreshAttempted || refreshing) return;
        setRefreshAttempted(true);
        setRefreshing(true);
        try {
            const response = await fetch(`/api/places/photos?placeId=${encodeURIComponent(placeId)}`);
            if (!response.ok) return;
            const payload = await response.json();
            if (Array.isArray(payload.photos)) {
                setRefreshedPhotos(payload.photos);
            }
        } catch (error) {
            console.error('[InfoPhotoGallery] photo refresh failed', error);
        } finally {
            setRefreshing(false);
        }
    }, [placeId, refreshAttempted, refreshing]);

    // 다른 장소의 갤러리로 전환하면 이전 장소의 실패 기록을 초기화한다.
    useEffect(() => {
        setFailedPlaceRefs(new Set());
        setFailedLegacySources(new Set());
        setRefreshedPhotos([]);
        setRefreshAttempted(false);
        setRefreshing(false);
    }, [placeId, inputKey]);

    // 저장된 사진 정보가 아예 없는 장소도 placeId가 있으면 최신 사진을 조회한다.
    useEffect(() => {
        if ((!placePhotos || placePhotos.length === 0) && placeId && !refreshAttempted && !refreshing) {
            void refreshPhotos();
        }
    }, [placePhotos, placeId, refreshAttempted, refreshing, refreshPhotos]);

    const usePlace = availablePlacePhotos.length > 0;
    const waitingForRefresh = !usePlace && refreshing;
    const useLegacy = !usePlace && !waitingForRefresh && availableLegacyPhotos.length > 0;

    if (!usePlace && !useLegacy && !waitingForRefresh) return null;

    const attributions = usePlace
        ? Array.from(new Set(availablePlacePhotos.flatMap(photo => photo.attributions || [])))
        : undefined;

    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            {waitingForRefresh ? (
                <div className="rounded-lg bg-gray-50 py-6 text-center text-xs text-gray-400">
                    다른 사진을 불러오는 중입니다
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-2">
                    {usePlace
                        ? availablePlacePhotos.map((photo, i) => (
                            <button
                                key={photo.photoReference}
                                type="button"
                                onClick={() => window.open(
                                    `/api/places/photo?ref=${encodeURIComponent(photo.photoReference)}&w=800`,
                                    '_blank',
                                    'noopener,noreferrer'
                                )}
                                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-80 transition-opacity"
                            >
                                <PlacePhoto
                                    photo={photo}
                                    alt={`photo-${i + 1}`}
                                    width={400}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    onError={() => {
                                        setFailedPlaceRefs(previous => {
                                            const next = new Set(previous);
                                            next.add(photo.photoReference);
                                            return next;
                                        });
                                        if (availablePlacePhotos.length <= targetCount) {
                                            void refreshPhotos();
                                        }
                                    }}
                                />
                            </button>
                        ))
                        : availableLegacyPhotos.map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                onClick={() => window.open(src, '_blank', 'noopener,noreferrer')}
                                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-80 transition-opacity"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`photo-${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    onError={() => {
                                        setFailedLegacySources(previous => {
                                            const next = new Set(previous);
                                            next.add(src);
                                            return next;
                                        });
                                    }}
                                />
                            </button>
                        ))}
                </div>
            )}
            {usePlace && <PlacePhotoAttribution attributions={attributions} />}
        </div>
    );
}
