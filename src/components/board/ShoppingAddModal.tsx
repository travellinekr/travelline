'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, MapPin, Loader2 } from 'lucide-react';

type ShoppingType = 'department' | 'mall' | 'market' | 'boutique' | 'duty-free';

interface Place {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    types: string[];
    rating?: number;
}

interface ShoppingAddModalProps {
    destinationCity?: string;
    onClose: () => void;
    onCreate: (data: any) => void;
}

// 도시별 좌표 매핑
const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
    'Bangkok': { lat: 13.7563, lng: 100.5018 },
    'Nha Trang': { lat: 12.2388, lng: 109.1967 },
    'Nhatrang': { lat: 12.2388, lng: 109.1967 },
    'Ho Chi Minh': { lat: 10.8231, lng: 106.6297 },
    'Hanoi': { lat: 21.0278, lng: 105.8342 },
    'Da Nang': { lat: 16.0544, lng: 108.2022 },
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
    '파리': { lat: 48.8566, lng: 2.3522 },
    '런던': { lat: 51.5074, lng: -0.1278 },
    '싱가포르': { lat: 1.3521, lng: 103.8198 },
    '홍콩': { lat: 22.3193, lng: 114.1694 },
};

export function ShoppingAddModal({ destinationCity, onClose, onCreate }: ShoppingAddModalProps) {
    const [shopName, setShopName] = useState('');
    const [shoppingType, setShoppingType] = useState<ShoppingType>('mall');
    const [hours, setHours] = useState('');
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

            // 도시 중심 좌표 설정 (대소문자 무시)
            let cityCoords = { lat: 13.7563, lng: 100.5018 };
            if (destinationCity) {
                const cityKey = Object.keys(CITY_COORDINATES).find(
                    key => key.toLowerCase() === destinationCity.toLowerCase()
                );
                if (cityKey) {
                    cityCoords = CITY_COORDINATES[cityKey];
                }
            }

            googleMapRef.current = new google.maps.Map(mapRef.current, {
                center: cityCoords,
                zoom: 13,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                mapId: 'TRIPTIMELINE_MAP',
            });

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
                        setShopName(newPlace.name);

                        // ✅ 쇼핑 타입 자동 선택
                        autoSelectShoppingType(newPlace.types);
                    } else {
                        alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('Nearby search error:', error);
                }
            });
        };

        initMap();
    }, [destinationCity]);

    // 검색 결과가 있을 때 마커 표시
    useEffect(() => {
        if (searchResults.length > 0) {
            displayMarkers(searchResults);
        }
    }, [searchResults]);

    // 검색 함수
    const handleSearch = async () => {
        if (!shopName.trim()) {
            alert('쇼핑 장소 이름을 입력해주세요');
            return;
        }

        // 검색 전 마커만 리셋 (지도 인스턴스는 유지)
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];
        // googleMapRef.current = null; // ✅ 제거: 지도 인스턴스를 유지하여 이벤트 리스너 보존

        setIsSearching(true);
        try {
            const response = await fetch(
                `/api/places/search?query=${encodeURIComponent(shopName)}&city=${destinationCity || ''}`
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

        if (!mapRef.current) {
            console.error('[ShoppingMap] mapRef.current가 없음');
            return;
        }

        // Google Maps API 로드 대기
        if (typeof google === 'undefined' || !google.maps) {
            console.error('[ShoppingMap] Google Maps API가 로드되지 않음');
            return;
        }

        if (!googleMapRef.current) {
            try {
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

                googleMapRef.current = new google.maps.Map(mapRef.current, {
                    center: cityCoords,
                    zoom: 13,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    zoomControl: true,
                    mapId: 'TRIPTIMELINE_MAP',
                });

                // 🆕 지도 클릭 이벤트 리스너 추가
                googleMapRef.current.addListener('click', async (event: google.maps.MapMouseEvent) => {
                    if (!event.latLng) return;

                    const lat = event.latLng.lat();
                    const lng = event.latLng.lng();

                    try {
                        const response = await fetch(
                            `/api/places/nearby?lat=${lat}&lng=${lng}&radius=50`
                        );
                        const data = await response.json();

                        if (data.status === 'success' && data.places.length > 0) {
                            const newPlace = data.places[0];

                            setSearchResults(prev => {
                                const exists = prev.some(p => p.id === newPlace.id);
                                if (exists) return prev;
                                return [...prev, newPlace];
                            });

                            // 자동으로 선택
                            setSelectedPlace(newPlace);

                            // ✅ 쇼핑 타입 자동 선택
                            autoSelectShoppingType(newPlace.types);
                        } else {
                            alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                        }
                    } catch (error) {
                        console.error('[ShoppingMap] Nearby search error:', error);
                        alert('장소 검색 중 오류가 발생했습니다.');
                    }
                });
            } catch (error) {
                console.error('지도 초기화 실패:', error);
                return;
            }
        } else {
        }

        // 기존 마커 제거
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];

        if (places.length === 0) {
            return;
        }

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place, index) => {
            const pinElement = new google.maps.marker.PinElement({
                glyphText: `${index + 1}`,
                glyphColor: 'white',
                background: '#f59e0b', // amber-500 (쇼핑용 색상)
                borderColor: '#d97706', // amber-600
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

    // ✅ 쇼핑 타입 자동 선택
    const autoSelectShoppingType = (types: string[]) => {
        if (types.includes('department_store')) {
            setShoppingType('department');
        } else if (types.includes('shopping_mall')) {
            setShoppingType('mall');
        } else if (types.includes('market') || types.includes('supermarket')) {
            setShoppingType('market');
        } else if (types.includes('clothing_store') || types.includes('jewelry_store')) {
            setShoppingType('boutique');
        } else if (types.includes('travel_agency') || types.includes('airport')) {
            setShoppingType('duty-free');
        }
    };

    // 확인 버튼 핸들러
    const handleConfirm = () => {
        if (!shopName.trim()) {
            alert('쇼핑 장소 이름을 입력해주세요');
            return;
        }

        if (!selectedPlace) {
            alert('지도에서 쇼핑 장소를 선택해주세요');
            return;
        }

        const cardData = {
            title: selectedPlace.name,
            text: selectedPlace.name,
            category: 'shopping' as const,
            shoppingType,
            hours: hours.trim() || undefined,
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
                    <h2 className="text-xl font-bold text-slate-800">쇼핑 직접 추가하기</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* 쇼핑 장소 이름 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            쇼핑 장소 이름
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                                placeholder="예: 센트럴 월드, 시암 파라곤"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 flex items-center gap-2"
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
                            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
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
                            쇼핑 타입
                        </label>
                        <select
                            value={shoppingType}
                            onChange={(e) => setShoppingType(e.target.value as ShoppingType)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="mall">쇼핑몰</option>
                            <option value="department">백화점</option>
                            <option value="market">재래시장</option>
                            <option value="boutique">부티크</option>
                            <option value="duty-free">면세점</option>
                        </select>
                    </div>

                    {/* 영업 시간 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            영업 시간 (선택사항)
                        </label>
                        <input
                            type="text"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            placeholder="예: 10:00 - 22:00"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                        disabled={!shopName.trim() || !selectedPlace}
                        className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
