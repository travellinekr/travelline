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
    onClose: () => void;
    onCreate: (data: any) => void;
}

export function FoodAddModal({ destinationCity, onClose, onCreate }: FoodAddModalProps) {
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
        if (typeof google !== 'undefined' && google.maps) return;

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }, []);

    // 검색 함수
    const handleSearch = async () => {
        if (!restaurantName.trim()) {
            alert('맛집 이름을 입력해주세요');
            return;
        }

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
        if (!mapRef.current) return;

        if (!googleMapRef.current) {
            if (typeof google === 'undefined' || !google.maps) {
                return;
            }

            googleMapRef.current = new google.maps.Map(mapRef.current, {
                center: { lat: 13.7563, lng: 100.5018 },
                zoom: 13,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                mapId: 'MINDFLOWS_SEARCH_MAP',
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
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

                    {/* 지도 영역 */}
                    {searchResults.length > 0 && (
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                검색 결과 ({searchResults.length}개)
                            </label>
                            <div
                                ref={mapRef}
                                className="w-full h-80 rounded-lg overflow-hidden border border-gray-300 bg-gray-100"
                            />

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
                    )}
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
