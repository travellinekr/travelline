// 사진 썸네일 갤러리. 빈 배열/undefined 면 렌더 안 함.
// 클릭 시 새 탭에서 원본 이미지 열기.
export function InfoPhotoGallery({ photos, title = '사진' }: { photos?: string[]; title?: string }) {
    if (!photos || photos.length === 0) return null;
    return (
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <div className="grid grid-cols-3 gap-2">
                {photos.map((src, i) => (
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
        </div>
    );
}
