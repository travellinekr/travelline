'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { PlacePhotoData } from '@/data/card-info-types';
import { PlacePhoto, PlacePhotoAttribution } from '@/components/places/PlacePhoto';

interface Props {
    name: string;
    placeId?: string;
    placePhotos?: PlacePhotoData[];
    legacySrc?: string;
}

function mergeUniquePhotos(primary: PlacePhotoData[], secondary: PlacePhotoData[]) {
    const seen = new Set<string>();
    return [...primary, ...secondary].filter(photo => {
        if (!photo.photoReference || seen.has(photo.photoReference)) return false;
        seen.add(photo.photoReference);
        return true;
    });
}

// 카드 인포 팝업 상단 대표 이미지.
// - 저장된 Google 사진을 순서대로 시도
// - 모두 실패하거나 데이터가 없으면 placeId로 최신 사진을 재조회
// - 재조회 사진도 실패하면 legacySrc, 마지막에는 명시적 대체 상태 표시
export function InfoHeroPhoto({ name, placeId, placePhotos, legacySrc }: Props) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [refreshedPhotos, setRefreshedPhotos] = useState<PlacePhotoData[]>([]);
    const [refreshAttempted, setRefreshAttempted] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [legacyFailed, setLegacyFailed] = useState(false);
    const photoKey = placePhotos?.map(photo => photo.photoReference).join('|') || '';

    const allPlacePhotos = useMemo(
        () => mergeUniquePhotos(placePhotos || [], refreshedPhotos),
        [placePhotos, refreshedPhotos]
    );
    const currentPlacePhoto = allPlacePhotos[photoIndex];

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
            console.error('[InfoHeroPhoto] photo refresh failed', error);
        } finally {
            setRefreshing(false);
        }
    }, [placeId, refreshAttempted, refreshing]);

    // 다른 카드나 갱신된 정적 데이터로 전환하면 첫 사진부터 다시 검사한다.
    useEffect(() => {
        setPhotoIndex(0);
        setRefreshedPhotos([]);
        setRefreshAttempted(false);
        setRefreshing(false);
        setLegacyFailed(false);
    }, [name, placeId, photoKey, legacySrc]);

    // 사진 메타데이터가 처음부터 비어 있어도 placeId가 있으면 즉시 최신 사진을 조회한다.
    useEffect(() => {
        if (allPlacePhotos.length === 0 && placeId && !refreshAttempted && !refreshing) {
            void refreshPhotos();
        }
    }, [allPlacePhotos.length, placeId, refreshAttempted, refreshing, refreshPhotos]);

    const canRefresh = !!placeId && !refreshAttempted;
    const waitingForRefresh = !currentPlacePhoto && (refreshing || canRefresh);
    const useLegacy = !currentPlacePhoto && !waitingForRefresh && !!legacySrc && !legacyFailed;
    const unavailable = !currentPlacePhoto && !waitingForRefresh && !useLegacy;

    if ((!placePhotos || placePhotos.length === 0) && !placeId && !legacySrc) return null;

    const handleError = () => {
        if (currentPlacePhoto) {
            const nextIndex = photoIndex + 1;
            setPhotoIndex(nextIndex);
            if (nextIndex >= allPlacePhotos.length) {
                void refreshPhotos();
            }
            return;
        }
        setLegacyFailed(true);
    };

    const handleOpen = () => {
        if (currentPlacePhoto) {
            window.open(
                `/api/places/photo?ref=${encodeURIComponent(currentPlacePhoto.photoReference)}&w=800`,
                '_blank',
                'noopener,noreferrer'
            );
        } else if (useLegacy && legacySrc) {
            window.open(legacySrc, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleOpen}
                disabled={unavailable || waitingForRefresh}
                className="relative block w-full h-44 md:h-56 overflow-hidden rounded-2xl bg-gray-100 group disabled:cursor-default"
                aria-label={unavailable ? `${name} 대표 이미지를 불러올 수 없음` : `${name} 대표 이미지 새 탭에서 열기`}
            >
                {currentPlacePhoto ? (
                    <PlacePhoto
                        key={currentPlacePhoto.photoReference}
                        photo={currentPlacePhoto}
                        alt={`${name} 대표 이미지`}
                        width={400}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={handleError}
                    />
                ) : useLegacy && legacySrc ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        key={legacySrc}
                        src={legacySrc}
                        alt={`${name} 대표 이미지`}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={handleError}
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-gray-400">
                        <span className="text-3xl" aria-hidden="true">🖼️</span>
                        <span className="text-xs font-medium">
                            {waitingForRefresh ? '다른 사진을 불러오는 중입니다' : '이미지를 불러올 수 없습니다'}
                        </span>
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 py-3 text-left">
                    <span className="text-white text-sm font-semibold drop-shadow">{name}</span>
                </div>
            </button>
            {currentPlacePhoto && <PlacePhotoAttribution attributions={currentPlacePhoto.attributions} />}
        </div>
    );
}
