import { NextRequest, NextResponse } from 'next/server';
import type { PlacePhotoData } from '@/data/card-info-types';

// 저장된 photoReference가 소진됐을 때 placeId로 최신 Google 사진 메타데이터를 다시 조회한다.
// API 키는 서버에서만 사용하며 클라이언트에는 사진 참조와 attribution만 반환한다.
export async function GET(request: NextRequest) {
    const placeId = request.nextUrl.searchParams.get('placeId')?.trim();
    if (!placeId) {
        return NextResponse.json({ error: 'Missing placeId' }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
    }

    const detailsUrl =
        'https://maps.googleapis.com/maps/api/place/details/json' +
        `?place_id=${encodeURIComponent(placeId)}` +
        '&fields=place_id%2Cphotos' +
        `&key=${encodeURIComponent(apiKey)}`;

    try {
        // 같은 장소의 반복 실패 요청은 한 시간 동안 Google 재호출 없이 재사용한다.
        const upstream = await fetch(detailsUrl, { next: { revalidate: 3600 } });
        if (!upstream.ok) {
            return NextResponse.json({ error: 'Place Details request failed' }, { status: upstream.status });
        }

        const data = await upstream.json();
        if (data.status !== 'OK' || !data.result) {
            return NextResponse.json(
                { error: 'Place Details unavailable', status: data.status || 'UNKNOWN' },
                { status: data.status === 'NOT_FOUND' ? 404 : 502 }
            );
        }

        const photos: PlacePhotoData[] = (data.result.photos || [])
            .filter((photo: any) => typeof photo.photo_reference === 'string')
            .slice(0, 10)
            .map((photo: any) => ({
                photoReference: photo.photo_reference,
                width: Number(photo.width) || 0,
                height: Number(photo.height) || 0,
                attributions: Array.isArray(photo.html_attributions) ? photo.html_attributions : [],
            }));

        return NextResponse.json(
            { placeId, photos },
            { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
        );
    } catch (error) {
        console.error('[places/photos] refresh error', error);
        return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
    }
}
