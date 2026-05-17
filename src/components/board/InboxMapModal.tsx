'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface MapMarker {
    id: string;
    title: string;
    coordinates: { lat: number; lng: number };
    isAnchor?: boolean; // anchor 카드 (보라/인디고) vs 일반 (오렌지)
}

interface InboxMapModalProps {
    title: string;
    markers: MapMarker[];
    isOpen: boolean;
    onClose: () => void;
}

// 인박스 카테고리(맛집/숙소/쇼핑/투어&스파)에서 호출하는 지도 모달.
// DayMapModal과 별도 — 마커 색상 분기(anchor vs 일반)와 호출 컨텍스트가 다름.
export function InboxMapModal({ title, markers, isOpen, onClose }: InboxMapModalProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const googleMapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
    const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);
    const previousMarkersStringRef = useRef<string>('');

    useEffect(() => {
        if (!isOpen || !mapRef.current) return;
        if (typeof google === 'undefined' || !google.maps) {
            console.error('❌ [InboxMapModal] Google Maps API 미로드');
            return;
        }

        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 37.5665, lng: 126.978 },
            zoom: 12,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            mapId: 'TRIPTIMELINE_MAP',
        });
        googleMapRef.current = map;

        setTimeout(() => google.maps.event.trigger(map, 'resize'), 100);

        return () => {
            markersRef.current.forEach(m => (m.map = null));
            infoWindowsRef.current.forEach(iw => iw.close());
            markersRef.current = [];
            infoWindowsRef.current = [];
            googleMapRef.current = null;
            previousMarkersStringRef.current = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !googleMapRef.current || markers.length === 0) return;
        if (!google?.maps?.marker?.AdvancedMarkerElement) return;

        const currentMarkersString = JSON.stringify(
            markers.map(m => ({ id: m.id, lat: m.coordinates.lat, lng: m.coordinates.lng, a: m.isAnchor }))
        );
        if (currentMarkersString === previousMarkersStringRef.current) return;
        previousMarkersStringRef.current = currentMarkersString;

        const map = googleMapRef.current;

        markersRef.current.forEach(m => (m.map = null));
        infoWindowsRef.current.forEach(iw => iw.close());
        markersRef.current = [];
        infoWindowsRef.current = [];

        const bounds = new google.maps.LatLngBounds();

        // anchor 마커가 제일 위로 오도록 정렬 (z-order — 동일 좌표 근처 일반 핀에 가려지지 않게)
        const sortedMarkers = [...markers].sort((a, b) => (a.isAnchor ? 1 : 0) - (b.isAnchor ? 1 : 0));
        // 일반 핀 번호용 — anchor 제외하고 1부터
        let nonAnchorIndex = 0;
        sortedMarkers.forEach((marker) => {
            try {
                // PinElement — anchor 는 더 크고 흰색 점 (시각 구분), 일반 핀은 번호 + 오렌지
                const pinElement = marker.isAnchor
                    ? new google.maps.marker.PinElement({
                        background: '#6366f1',
                        borderColor: '#4338ca',
                        glyphColor: '#ffffff',
                        scale: 1.6,
                    })
                    : new google.maps.marker.PinElement({
                        glyphText: `${++nonAnchorIndex}`,
                        glyphColor: 'white',
                        background: '#f97316',
                        borderColor: '#c2410c',
                        scale: 1.2,
                    });

                const wrapper = document.createElement('div');
                wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;cursor:pointer;';

                const label = document.createElement('span');
                label.textContent = marker.title;
                const labelBg = marker.isAnchor ? '#4338ca' : '#c2410c';
                label.style.cssText = `margin-bottom:2px;background:${labelBg};padding:3px 8px;border-radius:6px;font-size:11px;font-weight:600;color:white;box-shadow:0 2px 4px rgba(0,0,0,0.25);max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`;

                wrapper.appendChild(label);
                wrapper.appendChild(pinElement);

                const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: marker.coordinates,
                    title: marker.title,
                    content: wrapper,
                });
                markersRef.current.push(advancedMarker);
                bounds.extend(marker.coordinates);

                const infoWindow = new google.maps.InfoWindow({
                    content: `<div style="padding: 8px;">
            <strong style="font-size: 14px;">${marker.title}</strong>
            ${marker.isAnchor ? '<br/><span style="color: #6366f1; font-size: 11px;">기준점</span>' : ''}
          </div>`,
                });
                infoWindowsRef.current.push(infoWindow);

                advancedMarker.addListener('gmp-click', () => {
                    infoWindowsRef.current.forEach(iw => iw.close());
                    infoWindow.open(map, advancedMarker);
                });
            } catch (error) {
                console.error(`❌ [InboxMapModal] 마커 "${marker.title}" 생성 실패:`, error);
            }
        });

        if (markers.length > 1) {
            map.fitBounds(bounds);
        } else if (markers.length === 1) {
            map.setCenter(markers[0].coordinates);
            map.setZoom(14);
        }
    }, [isOpen, markers]);

    if (!isOpen) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-4 pointer-events-none">
            <div className="bg-white w-full h-full md:w-[90vw] md:h-[80vh] md:max-w-5xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto">
                <div className="flex items-center justify-between p-4 border-b bg-white">
                    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {markers.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-slate-400">
                        <p>표시할 위치가 없습니다</p>
                    </div>
                ) : (
                    <div ref={mapRef} className="flex-1 w-full" />
                )}

                <div className="p-3 border-t bg-slate-50 text-sm text-slate-600">
                    총 {markers.filter(m => !m.isAnchor).length}개 위치 표시
                    {markers.some(m => m.isAnchor) && ' · 보라색 핀: 기준점'}
                </div>
            </div>
        </div>
    );

    return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
