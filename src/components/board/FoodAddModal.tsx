'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, MapPin, Loader2 } from 'lucide-react';

type RestaurantType = 'korean' | 'japanese' | 'chinese' | 'western' | 'seafood' | 'cafe' | 'local';

interface Place {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    types: string[];
    rating?: number;
}

interface FoodAddModalProps {
    destinationCity?: string;
    anchorCoordinates?: { lat: number; lng: number } | null;
    anchorTitle?: string | null;
    onClose: () => void;
    onCreate: (data: any) => void;
}

// 도시별 좌표 매핑
const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
    // 영문
    'Bangkok': { lat: 13.7563, lng: 100.5018 },
    'Nha Trang': { lat: 12.2388, lng: 109.1967 },
    'Nhatrang': { lat: 12.2388, lng: 109.1967 },
    'Ho Chi Minh': { lat: 10.8231, lng: 106.6297 },
    'Hanoi': { lat: 21.0278, lng: 105.8342 },
    'Da Nang': { lat: 16.0544, lng: 108.2022 },
    'Danang': { lat: 16.0544, lng: 108.2022 },
    'Phuket': { lat: 7.8804, lng: 98.3923 },
    'Bali': { lat: -8.3405, lng: 115.0920 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 },
    'Osaka': { lat: 34.6937, lng: 135.5023 },
    'Kyoto': { lat: 35.0116, lng: 135.7681 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'London': { lat: 51.5074, lng: -0.1278 },
    'New York': { lat: 40.7128, lng: -74.0060 },
    'Singapore': { lat: 1.3521, lng: 103.8198 },
    'Hong Kong': { lat: 22.3193, lng: 114.1694 },
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

export function FoodAddModal({ destinationCity, anchorCoordinates, anchorTitle, onClose, onCreate }: FoodAddModalProps) {
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantType, setRestaurantType] = useState<RestaurantType>('local');
    const [specialty, setSpecialty] = useState('');
    const [searchResults, setSearchResults] = useState<Place[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const [isSearching, setIsSearching] = useState(false);

    const mapRef = useRef<HTMLDivElement>(null);
    const googleMapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

    // Google Maps API 스크립트 로드
    useEffect(() => {
        if (typeof google === 'undefined' || !google.maps) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,marker&loading=async`;
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // 🆕 모달 오픈 시 지도 즉시 초기화
    useEffect(() => {
        const initMap = () => {
            if (!mapRef.current || googleMapRef.current) return;
            if (typeof google === 'undefined' || !google.maps) {
                setTimeout(initMap, 100);
                return;
            }

            let cityCoords = { lat: 12.2388, lng: 109.1967 }; // 기본값: 나트랑
            if (anchorCoordinates) {
                cityCoords = anchorCoordinates;
            } else if (destinationCity) {
                const cityKey = Object.keys(CITY_COORDINATES).find(
                    key => key.toLowerCase() === destinationCity.toLowerCase()
                );
                if (cityKey) {
                    cityCoords = CITY_COORDINATES[cityKey];
                }
            }

            googleMapRef.current = new google.maps.Map(mapRef.current, {
                center: cityCoords,
                zoom: anchorCoordinates ? 15 : 13,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                gestureHandling: 'greedy',
                mapId: 'TRIPTIMELINE_MAP',
            });

            // anchor 좌표가 있으면 기준점 마커 표시 (인디고 핀 + 위에 이름 라벨)
            if (anchorCoordinates && google.maps.marker?.AdvancedMarkerElement) {
                const anchorPin = new google.maps.marker.PinElement({
                    background: '#6366f1',
                    borderColor: '#4338ca',
                    glyphColor: '#4338ca',
                    scale: 1.2,
                });
                const wrapper = document.createElement('div');
                wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;cursor:pointer;';
                const label = document.createElement('span');
                label.textContent = anchorTitle || '기준 위치';
                label.style.cssText = 'margin-bottom:2px;background:#4338ca;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:600;color:white;box-shadow:0 2px 4px rgba(0,0,0,0.25);max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
                wrapper.appendChild(label);
                wrapper.appendChild(anchorPin.element);
                new google.maps.marker.AdvancedMarkerElement({
                    map: googleMapRef.current,
                    position: anchorCoordinates,
                    title: anchorTitle || '기준 위치',
                    content: wrapper,
                });
            }

            // 지도 클릭 이벤트 리스너 추가
            googleMapRef.current.addListener('click', async (event: google.maps.MapMouseEvent) => {
                if (!event.latLng) return;

                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                try {
                    const response = await fetch(
                        `/api/places/nearby?lat=${lat}&lng=${lng}&radius=500`
                    );
                    const data = await response.json();

                    if (data.status === 'success' && data.places.length > 0) {
                        const newPlace = data.places[0];
                        setSearchResults([newPlace]);
                        setSelectedPlace(newPlace);
                        setRestaurantName(newPlace.name);

                        // ✅ 맛집 타입 자동 선택
                        autoSelectRestaurantType(newPlace.types);
                    } else {
                        alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('Nearby search error:', error);
                }
            });
        };

        initMap();
    }, [destinationCity, anchorCoordinates]);

    // 검색 결과가 있을 때 마커 표시
    useEffect(() => {
        if (searchResults.length > 0) {
            displayMarkers(searchResults);
        }
    }, [searchResults]);

    // 검색 함수
    const handleSearch = async () => {
        if (!restaurantName.trim()) {
            alert('맛집 이름을 입력해주세요');
            return;
        }

        // 검색 전 마커만 리셋 (지도 인스턴스는 유지)
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];
        // googleMapRef.current = null; // ✅ 제거: 지도 인스턴스를 유지하여 이벤트 리스너 보존

        setIsSearching(true);
        try {
            const response = await fetch(
                `/api/places/search?query=${encodeURIComponent(restaurantName)}&city=${destinationCity || ''}`
            );

            const data = await response.json();

            if (data.status === 'success' && data.places.length > 0) {
                setSearchResults(data.places);
                setTimeout(() => {
                    displayMarkers(data.places);
                }, 100);
            } else {
                alert('검색 결과가 없습니다');
                setSearchResults([]);
            }
        } catch (error) {
            alert('검색 중 오류가 발생했습니다');
        } finally {
            setIsSearching(false);
        }
    };

    // 마커 표시
    const displayMarkers = async (places: Place[]) => {
        if (!mapRef.current || places.length === 0) return;

        // 도시 중심 좌표 설정 (대소문자 무시)
        let cityCoords = { lat: 13.7563, lng: 100.5018 }; // 기본값: 방콕
        if (destinationCity) {
            const cityKey = Object.keys(CITY_COORDINATES).find(
                key => key.toLowerCase() === destinationCity.toLowerCase()
            );
            if (cityKey) {
                cityCoords = CITY_COORDINATES[cityKey];
            }
        }


        if (!googleMapRef.current) {
            if (typeof google === 'undefined' || !google.maps) {
                console.error('Google Maps API not loaded.');
                return;
            }

            googleMapRef.current = new google.maps.Map(mapRef.current, {
                center: cityCoords,
                zoom: 13,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                gestureHandling: 'greedy',
                mapId: 'TRIPTIMELINE_MAP', // Original mapId
            });

            // 🆕 지도 클릭 이벤트 리스너 추가
            googleMapRef.current.addListener('click', async (event: google.maps.MapMouseEvent) => {
                if (!event.latLng) return;

                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                try {
                    // 주변 장소 검색
                    const response = await fetch(
                        `/api/places/nearby?lat=${lat}&lng=${lng}&radius=50`
                    );

                    const data = await response.json();

                    if (data.status === 'success' && data.places.length > 0) {
                        const newPlace = data.places[0];

                        // 검색 결과에 추가 (중복 체크)
                        setSearchResults(prev => {
                            const exists = prev.some(p => p.id === newPlace.id);
                            if (exists) return prev;
                            return [...prev, newPlace];
                        });

                        // 자동으로 선택
                        setSelectedPlace(newPlace);

                        // ✅ 맛집 카테고리 자동 선택
                        autoSelectRestaurantType(newPlace.types);
                    } else {
                        alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('[FoodMap] Nearby search error:', error);
                    alert('장소 검색 중 오류가 발생했습니다.');
                }
            });
        }

        // 기존 마커 제거
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];

        if (places.length === 0) return;

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place, index) => {
            const pinElement = new google.maps.marker.PinElement({
                glyphText: `${index + 1}`,
                glyphColor: 'white',
                background: '#ef4444', // red-500 (음식점용 색상)
                borderColor: '#dc2626', // red-600
                scale: 1.2,
            });

            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: place.lat, lng: place.lng },
                map: googleMapRef.current,
                title: place.name,
                content: pinElement.element,
            });

            // InfoWindow 생성
            const infoWindow = new google.maps.InfoWindow({
                content: `
          <div style="padding: 8px;">
            <div style="font-weight: bold; margin-bottom: 4px;">${place.name}</div>
            <div style="font-size: 12px; color: #666;">${place.address}</div>
            ${place.rating ? `<div style="font-size: 12px; color: #ca8a04; margin-top: 4px;">⭐ ${place.rating}</div>` : ''}
          </div>
        `,
            });

            marker.addListener('gmp-click', () => {
                setSelectedPlace(place);
                infoWindow.open(googleMapRef.current, marker);
            });

            markersRef.current.push(marker);
            bounds.extend({ lat: place.lat, lng: place.lng });
        });

        googleMapRef.current.fitBounds(bounds);
    };

    // ✅ 맛집 카테고리 자동 선택
    const autoSelectRestaurantType = (types: string[]) => {
        if (types.includes('restaurant')) {
            // 더 세부적인 타입 확인
            if (types.includes('japanese_restaurant')) {
                setRestaurantType('japanese');
            } else if (types.includes('chinese_restaurant')) {
                setRestaurantType('chinese');
            } else if (types.includes('korean_restaurant')) {
                setRestaurantType('korean');
            } else if (types.includes('seafood_restaurant')) {
                setRestaurantType('seafood');
            } else {
                setRestaurantType('local'); // 기본값
            }
        } else if (types.includes('cafe')) {
            setRestaurantType('cafe');
        } else if (types.includes('bar')) {
            setRestaurantType('western');
        }
    };

    // 확인 버튼 핸들러
    const handleConfirm = () => {
        if (!restaurantName.trim()) {
            alert('맛집 이름을 입력해주세요');
            return;
        }

        if (!selectedPlace) {
            alert('지도에서 맛집을 선택해주세요');
            return;
        }


        const cardData = {
            title: selectedPlace.name,  // ✅ title 필드 추가
            text: selectedPlace.name,
            category: 'food' as const,
            restaurantType,
            specialty: specialty.trim() || undefined,
            address: selectedPlace.address,
            coordinates: {
                lat: selectedPlace.lat,
                lng: selectedPlace.lng
            },
            rating: selectedPlace.rating,
            isUserCreated: true  // 🔑 사용자 생성 카드 표시
        };

        onCreate(cardData);
    };

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-4 bg-black/50">
            <div className="bg-white md:rounded-2xl shadow-2xl w-full md:max-w-2xl h-full md:max-h-[90vh] flex flex-col">
                {/* 헤더 */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0">
                    <h2 className="text-xl font-bold text-slate-800">맛집 직접 추가하기</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* 맛집 이름 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            맛집 이름
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={restaurantName}
                                onChange={(e) => setRestaurantName(e.target.value)}
                                placeholder="예: 페퍼 런치, 솜분 씨푸드"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSearching ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        검색중...
                                    </>
                                ) : (
                                    <>
                                        <Search className="w-4 h-4" />
                                        검색
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* 🗺️ 지도 영역 - 맨 위로 이동 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            지도에서 선택 (클릭 또는 검색)
                        </label>
                        <div
                            ref={mapRef}
                            className="w-full h-80 rounded-lg overflow-hidden border border-gray-300 bg-gray-100"
                        />

                        {/* 선택된 장소 표시 */}
                        {selectedPlace && (
                            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">{selectedPlace.name}</div>
                                        <div className="text-sm text-gray-600">{selectedPlace.address}</div>
                                        {selectedPlace.rating && (
                                            <div className="text-sm text-yellow-600 mt-1">⭐ {selectedPlace.rating}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 타입 선택 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            음식 타입
                        </label>
                        <select
                            value={restaurantType}
                            onChange={(e) => setRestaurantType(e.target.value as RestaurantType)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="local">로컬맛집</option>
                            <option value="korean">한식</option>
                            <option value="japanese">일식</option>
                            <option value="chinese">중식</option>
                            <option value="western">양식</option>
                            <option value="seafood">해산물</option>
                            <option value="cafe">카페</option>
                        </select>
                    </div>

                    {/* 특색 메뉴 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            특색 메뉴 (선택사항)
                        </label>
                        <input
                            type="text"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            placeholder="예: 팟타이, 똠얌꿍, 그린카레"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* 푸터 */}
                <div className="flex justify-end gap-3 p-6 border-t border-gray-200 shrink-0 bg-white">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={!restaurantName.trim() || !selectedPlace}
                        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
