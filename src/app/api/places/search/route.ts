import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');
        const city = searchParams.get('city');

        if (!query) {
            return NextResponse.json(
                { error: 'Query parameter is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Google Maps API key not configured' },
                { status: 500 }
            );
        }

        // Google Places Text Search API
        const searchQuery = city ? `${query} in ${city}` : query;
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
            console.error('Google Places API error:', data.status, data.error_message);
            return NextResponse.json(
                { error: data.error_message || 'Failed to search places' },
                { status: 500 }
            );
        }

        // 결과를 간단한 형식으로 변환
        const places = (data.results || []).map((place: any) => ({
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            types: place.types,
            rating: place.rating,
        }));

        return NextResponse.json({
            status: 'success',
            places,
            count: places.length
        });

    } catch (error: any) {
        console.error('Places search error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
