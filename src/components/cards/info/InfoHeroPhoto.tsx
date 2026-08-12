'use client';

import type { PlacePhotoData } from '@/data/card-info-types';
import { PlacePhoto, PlacePhotoAttribution } from '@/components/places/PlacePhoto';

interface Props {
    name: string;
    placePhoto?: PlacePhotoData;
    legacySrc?: string;
}

// 카드 인포 팝업 상단 대표 이미지.
// - placePhoto 있으면 우선 사용 (Google Places 마이그레이션된 카드)
// - 없으면 legacySrc (레거시 로컬 이미지) 사용
// - 둘 다 없으면 렌더 안 함
export function InfoHeroPhoto({ name, placePhoto, legacySrc }: Props) {
    if (!placePhoto && !legacySrc) return null;

    const handleOpen = () => {
        if (placePhoto) {
            window.open(
                `/api/places/photo?ref=${encodeURIComponent(placePhoto.photoReference)}&w=800`,
                '_blank',
                'noopener,noreferrer'
            );
        } else if (legacySrc) {
            window.open(legacySrc, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleOpen}
                className="relative block w-full h-44 md:h-56 overflow-hidden rounded-2xl bg-gray-100 group"
                aria-label={`${name} 대표 이미지 새 탭에서 열기`}
            >
                {placePhoto ? (
                    <PlacePhoto
                        photo={placePhoto}
                        alt={`${name} 대표 이미지`}
                        width={400}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        src={legacySrc}
                        alt={`${name} 대표 이미지`}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 py-3 text-left">
                    <span className="text-white text-sm font-semibold drop-shadow">{name}</span>
                </div>
            </button>
            {placePhoto && <PlacePhotoAttribution attributions={placePhoto.attributions} />}
        </div>
    );
}
