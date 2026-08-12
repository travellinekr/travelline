import type { PlacePhotoData } from '@/data/card-info-types';
import { PlacePhoto, PlacePhotoAttribution } from '@/components/places/PlacePhoto';

// 사진 썸네일 갤러리.
// - placePhotos 있으면 우선 사용 (Google Places 마이그레이션된 카드) + Attribution 합쳐서 하단 표시
// - 없으면 legacy photos (문자열 URL 배열) 사용
// - 둘 다 없으면 렌더 안 함
export function InfoPhotoGallery({
    photos,
    placePhotos,
    title = '사진',
}: {
    photos?: string[];
    placePhotos?: PlacePhotoData[];
    title?: string;
}) {
    const usePlace = placePhotos && placePhotos.length > 0;
    const useLegacy = !usePlace && photos && photos.length > 0;

    if (!usePlace && !useLegacy) return null;

    // Attribution 은 갤러리 하단에 한 번만 통합 표시 (중복 제거)
    const attributions = usePlace
        ? Array.from(new Set(placePhotos!.flatMap(p => p.attributions || [])))
        : undefined;

    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <div className="grid grid-cols-3 gap-2">
                {usePlace
                    ? placePhotos!.map((photo, i) => (
                        <button
                            key={i}
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
                                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                            />
                        </button>
                    ))
                    : photos!.map((src, i) => (
                        <button
                            key={i}
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
                                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                            />
                        </button>
                    ))}
            </div>
            {usePlace && <PlacePhotoAttribution attributions={attributions} />}
        </div>
    );
}
