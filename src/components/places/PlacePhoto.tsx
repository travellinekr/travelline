'use client';

import type { PlacePhotoData } from '@/data/card-info-types';
import { openExternal } from '@/utils/openExternal';

interface Props {
    photo: PlacePhotoData;
    alt: string;
    width?: 400 | 800;
    className?: string;
    onError?: React.ReactEventHandler<HTMLImageElement>;
    loading?: 'eager' | 'lazy';
}

// Google Places Photos 를 우리 프록시(/api/places/photo) 통해 렌더링.
// - photoReference 만 있으면 img src 계산 가능
// - 실제 Google 호출은 첫 요청 시만 (Vercel Edge 24h 캐시)
export function PlacePhoto({ photo, alt, width = 400, className, onError, loading = 'lazy' }: Props) {
    const src = `/api/places/photo?ref=${encodeURIComponent(photo.photoReference)}&w=${width}`;
    return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={className}
            onError={onError}
        />
    );
}

// Attribution 렌더. Google Terms 상 이미지 근처 필수 표시.
// html_attributions 는 안전한 <a> 태그를 포함한 HTML 문자열 (Google 이 sanitize 보증).
// - 웹: target="_blank" 로 새 탭
// - Capacitor 앱: 클릭 인터셉트 → openExternal → 시스템 브라우저 (앱 이탈 없이 위에 얹혀 열림)
export function PlacePhotoAttribution({ attributions }: { attributions?: string[] }) {
    if (!attributions || attributions.length === 0) return null;

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const anchor = (e.target as HTMLElement).closest('a');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href) return;
        e.preventDefault();
        openExternal(href);
    };

    return (
        <div
            className="text-[10px] text-gray-400 leading-tight [&_a]:underline [&_a]:text-gray-500 mt-1 space-x-2"
            onClick={handleClick}
        >
            {attributions.map((html, i) => (
                <span
                    key={i}
                    dangerouslySetInnerHTML={{ __html: html.replace(/<a\s/gi, '<a target="_blank" rel="noopener noreferrer" ') }}
                />
            ))}
        </div>
    );
}
