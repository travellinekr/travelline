'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, MapPin, Loader2 } from 'lucide-react';

type AccommodationType = 'hotel' | 'resort' | 'airbnb' | 'hostel' | 'guesthouse';

interface Place {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    types: string[];
    rating?: number;
}

interface AccommodationAddModalProps {
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

export function AccommodationAddModal({ destinationCity, anchorCoordinates, anchorTitle, onClose, onCreate }: AccommodationAddModalProps) {
    const [accommodationName, setAccommodationName] = useState('');
    const [accommodationType, setAccommodationType] = useState<AccommodationType>('hotel');
    const [checkInTime, setCheckInTime] = useState('15:00');
    const [checkOutTime, setCheckOutTime] = useState('11:00');
    const [tags, setTags] = useState('');
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
                        setAccommodationName(newPlace.name);

                        // ✅ 숙소 타입 자동 선택
                        autoSelectAccommodationType(newPlace.types);
                        // ✅ 태그 자동 추가
                        autoAddTags(newPlace.types);
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
        if (!accommodationName.trim()) {
            alert('숙소 이름을 입력해주세요');
            return;
        }

        // 검색 전 마커만 리셋 (지도 인스턴스는 유지)
        markersRef.current.forEach(marker => marker.map = null);
        markersRef.current = [];
        // googleMapRef.current = null; // ✅ 제거: 지도 인스턴스를 유지하여 이벤트 리스너 보존

        setIsSearching(true);
        try {
            const response = await fetch(
                `/api/places/search?query=${encodeURIComponent(accommodationName)}&city=${destinationCity || ''}`
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

                        // 검색 결과에 추가 (중복 체크)
                        setSearchResults(prev => {
                            const exists = prev.some(p => p.id === newPlace.id);
                            if (exists) return prev;
                            return [...prev, newPlace];
                        });

                        // 자동으로 선택
                        setSelectedPlace(newPlace);

                        // ✅ 숙소 타입 자동 선택
                        autoSelectAccommodationType(newPlace.types);

                        // ✅ 태그 자동 추가
                        autoAddTags(newPlace.types);
                    } else {
                        alert('이 위치 주변에 장소를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('[AccommodationMap] Nearby search error:', error);
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
                background: '#8b5cf6', // violet-500 (숙소용 색상)
                borderColor: '#7c3aed', // violet-600
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

    // ✅ 숙소 타입 자동 선택
    const autoSelectAccommodationType = (types: string[]) => {
        if (types.includes('resort')) {
            setAccommodationType('resort');
        } else if (types.includes('hostel')) {
            setAccommodationType('hostel');
        } else if (types.includes('lodging') || types.includes('hotel')) {
            setAccommodationType('hotel');
        } else if (types.includes('guest_house')) {
            setAccommodationType('guesthouse');
        }
        // 기본값은 hotel
    };

    // ✅ 태그 자동 추가
    const autoAddTags = (types: string[]) => {
        const tagMapping: Record<string, string> = {
            'swimming_pool': '수영장',
            'spa': '스파',
            'gym': '헬스장',
            'restaurant': '레스토랑',
            'bar': '바',
            'parking': '주차',
            'wifi': 'WiFi',
            'breakfast': '조식',
        };

        const detectedTags: string[] = [];
        types.forEach(type => {
            if (tagMapping[type]) {
                detectedTags.push(tagMapping[type]);
            }
        });

        if (detectedTags.length > 0) {
            setTags(detectedTags.join(', '));
        }
    };

    // 확인 버튼 핸들러
    const handleConfirm = () => {
        if (!accommodationName.trim()) {
            alert('숙소 이름을 입력해주세요');
            return;
        }

        if (!selectedPlace) {
            alert('지도에서 숙소를 선택해주세요');
            return;
        }

        const tagsArray = tags.trim() ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];

        const cardData = {
            title: selectedPlace.name,
            text: selectedPlace.name,
            category: 'hotel' as const,
            accommodationType,
            checkInTime,
            checkOutTime,
            address: selectedPlace.address,
            coordinates: {
                lat: selectedPlace.lat,
                lng: selectedPlace.lng
            },
            tags: tagsArray,
            rating: selectedPlace.rating,
            isUserCreated: true  // 🔑 사용자 생성 카드 표시
        };

        onCreate(cardData);
    };

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center md:p-4 bg-black/50">
            <div className="bg-white md:rounded-2xl shadow-2xl w-full md:max-w-2xl h-full md:max-h-[90vh] flex flex-col">
                {/* 헤더 - 고정 */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0">
                    <h2 className="text-xl font-bold text-slate-800">숙소 직접 추가하기</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* 컨텐츠 - 스크롤 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* 숙소 이름 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            숙소 이름
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={accommodationName}
                                onChange={(e) => setAccommodationName(e.target.value)}
                                placeholder="예: 힐튼 호텔, 반얀트리 리조트"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 flex items-center gap-2"
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
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
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
                            숙소 타입
                        </label>
                        <select
                            value={accommodationType}
                            onChange={(e) => setAccommodationType(e.target.value as AccommodationType)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                        >
                            <option value="hotel">호텔</option>
                            <option value="resort">리조트</option>
                            <option value="airbnb">에어비앤비</option>
                            <option value="hostel">호스텔</option>
                            <option value="guesthouse">게스트하우스</option>
                        </select>
                    </div>

                    {/* 체크인/체크아웃 시간 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                체크인 시간
                            </label>
                            <input
                                type="time"
                                value={checkInTime}
                                onChange={(e) => setCheckInTime(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                체크아웃 시간
                            </label>
                            <input
                                type="time"
                                value={checkOutTime}
                                onChange={(e) => setCheckOutTime(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                            />
                        </div>
                    </div>

                    {/* 태그 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            태그 (쉼표로 구분, 선택사항)
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="예: 수영장, 조식포함, 오션뷰"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                        />
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
                        disabled={!accommodationName.trim() || !selectedPlace}
                        className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
