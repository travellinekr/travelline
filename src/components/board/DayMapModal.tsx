'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CardMarker {
    id: string;
    title: string;
    coordinates: { lat: number; lng: number };
    category: string;
}

interface DayMapModalProps {
    dayNumber: number;
    markers: CardMarker[];
    isOpen: boolean;
    onClose: () => void;
}

export function DayMapModal({ dayNumber, markers, isOpen, onClose }: DayMapModalProps) {

    const mapRef = useRef<HTMLDivElement>(null);
    const googleMapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
    const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);
    const previousMarkersStringRef = useRef<string>('');

    // 지도 초기화 - 모달이 열릴 때마다 새로 생성
    useEffect(() => {
        if (!isOpen || !mapRef.current) return;

        // Google Maps가 로드될 때까지 대기
        if (typeof google === 'undefined' || !google.maps) {
            console.error('❌ [DayMapModal] Google Maps API가 아직 로드되지 않았습니다.');
            return;
        }

        // Google Maps 초기화 - mapId 추가 (Advanced Markers 필수)
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 37.5665, lng: 126.978 }, // 서울 기본 좌표
            zoom: 12,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            mapId: 'MINDFLOWS_MAP', // Advanced Markers를 위한 Map ID
        });

        googleMapRef.current = map;

        // 지도가 완전히 렌더링된 후 resize 이벤트 트리거 (회색 화면 방지)
        setTimeout(() => {
            google.maps.event.trigger(map, 'resize');
        }, 100);

        return () => {
            // cleanup: 모달이 닫힐 때 지도 인스턴스와 마커들 완전히 제거
            // 마커들도 정리
            markersRef.current.forEach(m => m.map = null);
            infoWindowsRef.current.forEach(iw => iw.close());
            markersRef.current = [];
            infoWindowsRef.current = [];
            googleMapRef.current = null;
            previousMarkersStringRef.current = '';
        };
    }, [isOpen]);

    // 마커 업데이트 (markers가 실제로 변경되었을 때만)
    useEffect(() => {
        if (!isOpen || !googleMapRef.current || markers.length === 0) return;

        // 마커 배열이 실제로 변경되었는지 확인 (깜빡임 방지)
        const currentMarkersString = JSON.stringify(markers.map(m => ({ id: m.id, lat: m.coordinates.lat, lng: m.coordinates.lng })));
        if (currentMarkersString === previousMarkersStringRef.current) {
            return; // 변경 없으면 아무것도 하지 않음
        }
        previousMarkersStringRef.current = currentMarkersString;

        const map = googleMapRef.current;

        // 기존 마커들 제거
        markersRef.current.forEach(m => m.map = null);
        infoWindowsRef.current.forEach(iw => iw.close());
        markersRef.current = [];
        infoWindowsRef.current = [];

        // 새로운 마커 추가
        const bounds = new google.maps.LatLngBounds();

        markers.forEach((marker, index) => {
            try {
                // Google PinElement로 깔끔한 마커 생성
                const pinElement = new google.maps.marker.PinElement({
                    glyph: `${index + 1}`,
                    glyphColor: 'white',
                    background: '#10b981', // emerald-500
                    borderColor: '#059669', // emerald-600
                    scale: 1.3,
                });

                const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
                    map: map,
                    position: marker.coordinates,
                    title: marker.title,
                    content: pinElement.element,
                });

                markersRef.current.push(advancedMarker);
                bounds.extend(marker.coordinates);

                // 마커 클릭 시 정보 표시
                const infoWindow = new google.maps.InfoWindow({
                    content: `<div style="padding: 8px;">
          <strong style="font-size: 14px;">${marker.title}</strong><br/>
          <span style="color: #666; font-size: 12px;">${getCategoryLabel(marker.category)}</span>
        </div>`,
                });

                infoWindowsRef.current.push(infoWindow);

                advancedMarker.addListener('gmp-click', () => {
                    // 다른 InfoWindow 닫기
                    infoWindowsRef.current.forEach(iw => iw.close());
                    infoWindow.open(map, advancedMarker);
                });
            } catch (error) {
                console.error(`❌ [DayMapModal] 마커 ${index + 1} 생성 실패:`, error);
            }
        });

        // 모든 마커가 보이도록 화면 조정
        if (markers.length > 1) {
            map.fitBounds(bounds);
        } else if (markers.length === 1) {
            map.setCenter(markers[0].coordinates);
            map.setZoom(14);
        }
    }, [isOpen, markers]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-0 md:p-4">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[80vh] md:max-w-5xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-white">
                    <h2 className="text-lg font-bold text-slate-800">
                        {dayNumber}일차 지도
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {/* Map Container */}
                {markers.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-slate-400">
                        <p>표시할 위치가 없습니다</p>
                    </div>
                ) : (
                    <div ref={mapRef} className="flex-1 w-full" />
                )}

                {/* Footer - Marker Count */}
                <div className="p-3 border-t bg-slate-50 text-sm text-slate-600">
                    총 {markers.length}개 위치 표시
                </div>
            </div>
        </div>
    );
}

// 카테고리 한글 라벨
function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        flight: '항공',
        accommodation: '숙소',
        restaurant: '식당',
        destination: '여행지',
        preparation: '준비사항',
    };
    return labels[category] || category;
}
