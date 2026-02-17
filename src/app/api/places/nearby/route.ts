import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lat = searchParams.get('lat');
        const lng = searchParams.get('lng');
        const radius = searchParams.get('radius') || '50'; // 기본 50m

        if (!lat || !lng) {
            return NextResponse.json(
                { error: 'Latitude and longitude parameters are required' },
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

        // Google Places Nearby Search API
        const location = `${lat},${lng}`;
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodeURIComponent(location)}&radius=${radius}&language=ko&key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
            console.error('Google Places API error:', data.status, data.error_message);
            return NextResponse.json(
                { error: data.error_message || 'Failed to search nearby places' },
                { status: 500 }
            );
        }

        // 결과를 간단한 형식으로 변환 (search API와 동일한 형식)
        const allPlaces = (data.results || []).map((place: any) => ({
            id: place.place_id,
            name: place.name,
            address: place.vicinity || place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            types: place.types,
            rating: place.rating,
        }));

        // ✅ 도로, 지역명 등 불필요한 타입 제외
        const excludedTypes = [
            'route',              // 도로
            'locality',           // 지역명 (예: 서울)
            'political',          // 행정구역
            'neighborhood',       // 동네
            'sublocality',        // 하위 지역 (예: 강남구)
            'sublocality_level_1',
            'sublocality_level_2',
            'sublocality_level_3',
            'sublocality_level_4',
            'sublocality_level_5',
            'administrative_area_level_1',
            'administrative_area_level_2',
            'administrative_area_level_3',
            'administrative_area_level_4',
            'administrative_area_level_5',
            'country',            // 국가
            'postal_code',        // 우편번호
            'intersection',       // 교차로
        ];

        // 유효한 장소만 필터링 (위 타입들만 있는 place는 제외)
        const validPlaces = allPlaces.filter((place: any) => {
            // place의 모든 type이 excludedTypes에 포함되어 있으면 제외
            const hasOnlyExcludedTypes = place.types.every((type: string) =>
                excludedTypes.includes(type)
            );

            // 최소 하나의 유효한 type이 있어야 함
            return !hasOnlyExcludedTypes;
        });

        console.log('[Nearby API] 전체 결과:', allPlaces.length, '개');
        console.log('[Nearby API] 필터링 후:', validPlaces.length, '개');

        if (validPlaces.length > 0) {
            validPlaces.forEach((place: any, index: number) => {
                console.log(`[Nearby API] ${index + 1}. ${place.name} (types: ${place.types.join(', ')})`);
            });
        }

        // 가장 가까운 유효한 장소 선택
        if (validPlaces.length === 0) {
            return NextResponse.json({
                status: 'success',
                places: [],
                count: 0,
                clickedLocation: { lat: parseFloat(lat), lng: parseFloat(lng) },
                message: '주변에 유효한 장소를 찾을 수 없습니다. 다른 위치를 클릭해주세요.'
            });
        }

        const nearestPlace = validPlaces[0];

        // Place Details API로 한글 이름 가져오기
        try {
            const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${nearestPlace.id}&fields=name,formatted_address&language=ko&key=${apiKey}`;
            console.log('[Nearby API] Place Details 요청:', detailsUrl.replace(apiKey, 'API_KEY'));

            const detailsResponse = await fetch(detailsUrl);
            const detailsData = await detailsResponse.json();

            console.log('[Nearby API] Place Details 응답:', {
                status: detailsData.status,
                name: detailsData.result?.name,
                address: detailsData.result?.formatted_address,
                originalName: nearestPlace.name
            });

            if (detailsData.status === 'OK' && detailsData.result) {
                // 한글 이름으로 업데이트
                const newName = detailsData.result.name || nearestPlace.name;
                const newAddress = detailsData.result.formatted_address || nearestPlace.address;

                console.log('[Nearby API] 이름 업데이트:', nearestPlace.name, '→', newName);

                nearestPlace.name = newName;
                nearestPlace.address = newAddress;
            } else {
                console.warn('[Nearby API] Place Details 실패:', detailsData.status);
            }
        } catch (error) {
            console.error('[Nearby API] Place Details 오류:', error);
            // Details API 실패해도 Nearby Search 결과 사용
        }

        return NextResponse.json({
            status: 'success',
            places: [nearestPlace],
            count: 1,
            clickedLocation: { lat: parseFloat(lat), lng: parseFloat(lng) }
        });

    } catch (error: any) {
        console.error('Nearby places search error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
