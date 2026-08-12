import { NextRequest } from 'next/server';

// Google Places Photos 프록시.
// - 우리 도메인 응답으로 감싸 Vercel Edge Network + 브라우저 캐시 사용
// - Cache-Control: 24h(edge) + 7일 SWR → 실제 Google 호출은 photo_reference 첫 등장 시만
// - photo_reference 는 저장 가능(영구). 실제 이미지 URL 은 짧게 만료되므로 매번 프록시 경유 필요
// - Google Maps Terms: 성능 목적 임시 캐싱 허용(최대 30일). 다운로드/영구 저장 금지.
export async function GET(request: NextRequest) {
    const ref = request.nextUrl.searchParams.get('ref');
    const w = request.nextUrl.searchParams.get('w') || '400';

    if (!ref) return new Response('Missing ref', { status: 400 });

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return new Response('Missing API key', { status: 500 });

    const upstreamUrl =
        `https://maps.googleapis.com/maps/api/place/photo` +
        `?maxwidth=${encodeURIComponent(w)}` +
        `&photo_reference=${encodeURIComponent(ref)}` +
        `&key=${apiKey}`;

    try {
        const upstream = await fetch(upstreamUrl, { redirect: 'follow' });
        if (!upstream.ok) {
            return new Response('Photo not found', { status: upstream.status });
        }

        return new Response(upstream.body, {
            headers: {
                'Content-Type': upstream.headers.get('content-type') || 'image/jpeg',
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
            },
        });
    } catch (e) {
        console.error('[places/photo] proxy error', e);
        return new Response('Upstream error', { status: 502 });
    }
}
