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
    onClose: () => void;
    onCreate: (data: any) => void;
}

export function TourSpaAddModal({ destinationCity, onClose, onCreate }: TourSpaAddModalProps) {
    const [shopName, setShopName] = useState('');
    const [tourSpaType, setTourSpaType] = useState<TourSpaType>('massage');
    const [pickupAvailable, setPickupAvailable] = useState(false);
    const [searchResults, setSearchResults] = useState<Place[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const [isSearching, setIsSearching] = useState(false);

    const mapRef = useRef<HTMLDivElement>(null);
    const googleMapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);

    // Google Maps API 스크립트 로드 (한 번만)
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
        if (!shopName.trim()) {
            alert('장소 이름을 입력해주세요');
            return;
        }

        setIsSearching(true);
        try {
            const response = await fetch(
                `/api/places/search?query=${encodeURIComponent(shopName)}&city=${destinationCity || ''}`
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
            console.error('Search error:', error);
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
                console.error('Google Maps API가 로드되지 않았습니다');
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
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        if (places.length === 0) return;

        // 새 마커 추가
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            const marker = new google.maps.Marker({
                position: { lat: place.lat, lng: place.lng },
                map: googleMapRef.current,
                title: place.name,
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

            marker.addListener('click', () => {
                setSelectedPlace(place);
                infoWindow.open(googleMapRef.current, marker);
            });

            markersRef.current.push(marker);
            bounds.extend({ lat: place.lat, lng: place.lng });
        });

        // 모든 마커가 보이도록 지도 조정
        googleMapRef.current.fitBounds(bounds);
    };

    // 확인 버튼
    const handleConfirm = () => {
        if (!selectedPlace && !pickupAvailable) {
            alert('장소를 선택하거나 픽업 가능을 체크해주세요');
            return;
        }

        const cardData = {
            title: selectedPlace?.name || shopName,
            category: 'tourspa',
            tourSpaType,
            description: pickupAvailable ? '호텔에서 픽업하는 투어/체험' : '현지 집합 투어/체험',
            address: selectedPlace?.address || '',
            pickupAvailable,
            coordinates: selectedPlace ? { lat: selectedPlace.lat, lng: selectedPlace.lng } : undefined,
            rating: selectedPlace?.rating,
        };

        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📍 [1단계] TourSpaAddModal → onCreate');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('카드 데이터:', JSON.stringify(cardData, null, 2));
        console.log('전달할 함수:', onCreate);

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
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
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
                    )}
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
                        disabled={!shopName.trim() || (!selectedPlace && !pickupAvailable)}
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
