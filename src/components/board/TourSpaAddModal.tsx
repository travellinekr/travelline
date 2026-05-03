'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, MapPin, Loader2 } from 'lucide-react';
import { TourSpaType } from '@/data/tourSpa';

interface Place {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    types: string[];
    rating?: number;
}

interface TourSpaAddModalProps {
    destinationCity?: string;
    anchorCoordinates?: { lat: number; lng: number } | null;
    anchorTitle?: string | null;
    onClose: () => void;
    onCreate: (data: any) => void;
}

// 도시별 좌표 매핑
const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
    'Bangkok': { lat: 13.7563, lng: 100.5018 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 },
    'Osaka': { lat: 34.6937, lng: 135.5023 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'London': { lat: 51.5074, lng: -0.1278 },
    'New York': { lat: 40.7128, lng: -74.0060 },
    'Singapore': { lat: 1.3521, lng: 103.8198 },
    'Hong Kong': { lat: 22.3193, lng: 114.1694 },
};

export function TourSpaAddModal({ destinationCity, anchorCoordinates, anchorTitle, onClose, onCreate }: TourSpaAddModalProps) {
    const [activityName, setActivityName] = useState('');
    const [tourSpaType, setTourSpaType] = useState<TourSpaType>('massage');
    const [pickupAvailable, setPickupAvailable] = useState(false);
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

            // anchor 좌표 우선 → 없으면 도시 중심 (대소문자 무시)
            let cityCoords = { lat: 13.7563, lng: 100.5018 };
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
                        setActivityName(newPlace.name); // Added this line

                        // ✅ 투어&스파 타입 자동 선택
                        autoSelectTourSpaType(newPlace.types);
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
        if (!activityName.trim()) {
            alert('장소 이름을 입력해주세요');
            return;
        }

        // 검색 전 마커만 리셋 (지도 인스턴스는 유지)
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];
        // googleMapRef.current = null; // ✅ 제거: 지도 인스턴스를 유지하여 이벤트 리스너 보존

        setIsSearching(true);
        try {
            const response = await fetch(
                `/api/places/search?query=${encodeURIComponent(activityName)}&city=${destinationCity || ''}`
            );

            const data = await response.json();

            if (data.status === 'success' && data.places.length > 0) {
                setSearchResults(data.places);
                // DOM이 업데이트된 후 지도 초기화
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

    // 마커 표시 (지도 초기화 포함)
    const displayMarkers = async (places: Place[]) => {
        if (!mapRef.current) return;

        // 지도가 없으면 먼저 초기화
        if (!googleMapRef.current) {
            if (typeof google === 'undefined' || !google.maps) {
                return;
            }

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
                gestureHandling: 'greedy',
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

                        // ✅ 투어&스파 타입 자동 선택
                        autoSelectTourSpaType(newPlace.types);
                    } else {
                        alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('[TourSpaMap] Nearby search error:', error);
                    alert('장소 검색 중 오류가 발생했습니다.');
                }
            });

            // 지도가 완전히 로드될 때까지 기다림
            await new Promise<void>((resolve) => {
                google.maps.event.addListenerOnce(googleMapRef.current!, 'idle', () => {
                    // 지도가 로드된 후 resize 이벤트 호출 (컨테이너 크기 인식)
                    setTimeout(() => {
                        if (googleMapRef.current) {
                            google.maps.event.trigger(googleMapRef.current, 'resize');
                        }
                        resolve();
                    }, 100);
                });
            });
        }

        // 기존 마커 제거
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];

        if (places.length === 0) return;

        // 새 마커 추가
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place, index) => {
            const pinElement = new google.maps.marker.PinElement({
                glyphText: `${index + 1}`,
                glyphColor: 'white',
                background: '#06b6d4', // cyan-500 (관광지/스파용 색상)
                borderColor: '#0891b2', // cyan-600
                scale: 1.2,
            });

            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: place.lat, lng: place.lng },
                map: googleMapRef.current,
                title: place.name,
                content: pinElement.element,
            });

            // InfoWindow
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

        // 모든 마커가 보이도록 지도 조정
        googleMapRef.current.fitBounds(bounds);
    };

    // ✅ 투어&스파 타입 자동 선택
    const autoSelectTourSpaType = (types: string[]) => {
        if (types.includes('spa') || types.includes('beauty_salon')) {
            setTourSpaType('massage');
        } else if (types.includes('tourist_attraction') || types.includes('museum')) {
            setTourSpaType('city-tour');
        } else if (types.includes('amusement_park') || types.includes('aquarium') || types.includes('zoo')) {
            setTourSpaType('theme-park');
        } else if (types.includes('night_club') || types.includes('bar')) {
            setTourSpaType('show');
        } else if (types.includes('art_gallery')) {
            setTourSpaType('cultural');
        } else if (types.includes('travel_agency')) {
            setTourSpaType('island-hopping');
        }
    };

    // 확인 버튼
    const handleConfirm = () => {
        if (!selectedPlace && !pickupAvailable) {
            alert('장소를 선택하거나 픽업 가능을 체크해주세요');
            return;
        }

        const cardData = {
            title: selectedPlace?.name || activityName,
            category: 'tourspa',
            tourSpaType,
            description: pickupAvailable ? '호텔에서 픽업하는 투어/체험' : '현지 집합 투어/체험',
            address: selectedPlace?.address || '',
            pickupAvailable,
            coordinates: selectedPlace ? { lat: selectedPlace.lat, lng: selectedPlace.lng } : undefined,
            rating: selectedPlace?.rating,
            isUserCreated: true  // 🔑 사용자 생성 카드 표시
        };


        onCreate(cardData);
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-0 md:p-4">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[90vh] md:max-w-2xl md:rounded-2xl flex flex-col overflow-hidden shadow-2xl">
                {/* 헤더 - 고정 */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 shrink-0">
                    <h2 className="text-xl font-bold text-slate-800">투어&스파 직접 추가하기</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* 본문 - 스크롤 가능 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* 장소 이름 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            장소 이름
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={activityName}
                                onChange={(e) => setActivityName(e.target.value)}
                                placeholder="예: 타이 마사지, 아일랜드 호핑 투어"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 flex items-center gap-2"
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
                            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
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
                            타입
                        </label>
                        <select
                            value={tourSpaType}
                            onChange={(e) => setTourSpaType(e.target.value as TourSpaType)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        >
                            <option value="island-hopping">아일랜드 호핑</option>
                            <option value="city-tour">시티 투어</option>
                            <option value="spa">스파</option>
                            <option value="massage">마사지</option>
                            <option value="theme-park">테마파크</option>
                            <option value="cultural">문화 체험</option>
                            <option value="water-sports">수상 스포츠</option>
                            <option value="adventure">어드벤처</option>
                            <option value="cruise">크루즈</option>
                            <option value="show">공연/쇼</option>
                            <option value="workshop">워크샵/클래스</option>
                        </select>
                    </div>

                    {/* 픽업 가능 체크박스 */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="pickup"
                            checked={pickupAvailable}
                            onChange={(e) => setPickupAvailable(e.target.checked)}
                            className="w-4 h-4 text-teal-500 rounded focus:ring-teal-500"
                        />
                        <label htmlFor="pickup" className="text-sm text-gray-700">
                            픽업 가능 (호텔에서 픽업하는 투어/체험)
                        </label>
                    </div>
                </div>

                {/* 푸터 - 고정 */}
                <div className="flex justify-end gap-3 p-6 border-t border-gray-200 shrink-0 bg-white">
                <button
                    onClick={onClose}
                    className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    취소
                </button>
                <button
                    onClick={handleConfirm}
                    disabled={!activityName.trim() || (!selectedPlace && !pickupAvailable)}
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    확인
                </button>
            </div>
        </div>
    </div>
    );

    // Portal을 사용하여 document.body에 직접 렌더링
    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
