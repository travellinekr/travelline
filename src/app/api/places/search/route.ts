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

        // 도시별 좌표 매핑 (대소문자 무시)
        const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
            // 영문 (소문자)
            'bangkok': { lat: 13.7563, lng: 100.5018 },
            'nha trang': { lat: 12.2388, lng: 109.1967 },
            'nhatrang': { lat: 12.2388, lng: 109.1967 },
            'ho chi minh': { lat: 10.8231, lng: 106.6297 },
            'hanoi': { lat: 21.0278, lng: 105.8342 },
            'da nang': { lat: 16.0544, lng: 108.2022 },
            'danang': { lat: 16.0544, lng: 108.2022 },
            'phuket': { lat: 7.8804, lng: 98.3923 },
            'bali': { lat: -8.3405, lng: 115.0920 },
            'tokyo': { lat: 35.6762, lng: 139.6503 },
            'osaka': { lat: 34.6937, lng: 135.5023 },
            'kyoto': { lat: 35.0116, lng: 135.7681 },
            'paris': { lat: 48.8566, lng: 2.3522 },
            'london': { lat: 51.5074, lng: -0.1278 },
            'new york': { lat: 40.7128, lng: -74.0060 },
            'singapore': { lat: 1.3521, lng: 103.8198 },
            'hong kong': { lat: 22.3193, lng: 114.1694 },
            // 한국어
            '방콕': { lat: 13.7563, lng: 100.5018 },
            '나트랑': { lat: 12.2388, lng: 109.1967 },
            '나트항': { lat: 12.2388, lng: 109.1967 },
            '호치민': { lat: 10.8231, lng: 106.6297 },
            '하노이': { lat: 21.0278, lng: 105.8342 },
            '다낭': { lat: 16.0544, lng: 108.2022 },
            '푸켓': { lat: 7.8804, lng: 98.3923 },
            '발리': { lat: -8.3405, lng: 115.0920 },
            '도쿄': { lat: 35.6762, lng: 139.6503 },
            '오사카': { lat: 34.6937, lng: 135.5023 },
            '교토': { lat: 35.0116, lng: 135.7681 },
            '파리': { lat: 48.8566, lng: 2.3522 },
            '런던': { lat: 51.5074, lng: -0.1278 },
            '싱가포르': { lat: 1.3521, lng: 103.8198 },
            '홍콩': { lat: 22.3193, lng: 114.1694 },
        };

        // 도시 좌표 찾기 (대소문자 무시)
        let locationBias = '';
        if (city) {
            const normalizedCity = city.toLowerCase();
            const coords = CITY_COORDINATES[normalizedCity];
            if (coords) {
                // location bias를 추가하여 특정 좌표 근처에서 검색
                locationBias = `&location=${coords.lat},${coords.lng}&radius=50000`;
                console.log(`[Places Search] Using location bias for ${city}:`, coords);
            }
        }

        // Google Places Text Search API (한글 결과 + location bias)
        const searchQuery = city ? `${query} in ${city}` : query;
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&language=ko${locationBias}&key=${apiKey}`;


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
        let places = (data.results || []).map((place: any) => ({
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            types: place.types,
            rating: place.rating,
        }));

        // 평점 높은 순으로 정렬 (평점이 없는 경우 맨 뒤로)
        places.sort((a: any, b: any) => {
            const ratingA = a.rating || 0;
            const ratingB = b.rating || 0;
            return ratingB - ratingA;
        });

        // 상위 10개로 제한
        places = places.slice(0, 10);

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
