'use client';

import { createContext, useContext } from 'react';
import type { CityData, RegionKey } from '@/data/destinations';

// 룸 안에서 picker → /explore 콘텐츠를 모달로 띄울 때 사용하는 컨텍스트.
// CollaborativeApp이 Provider 제공, PickerHeader가 useExploreOverlay()로 open() 호출.
// Provider 없으면 (예: 스탠드얼론 페이지) useExploreOverlay()는 null 반환 → PickerHeader는 fallback Link 동작.

export interface ExploreOverlayState {
    city: CityData;
    region: RegionKey | 'main';
    category: string;            // 'food' | 'hotel' | 'shopping' | 'tourspa'
    anchorCard: any | null;      // 룸의 anchorCard 객체 (id/text/coordinates 보유)
}

interface ExploreOverlayContextValue {
    open: (state: ExploreOverlayState) => void;
}

export const ExploreOverlayContext = createContext<ExploreOverlayContextValue | null>(null);

export const useExploreOverlay = () => useContext(ExploreOverlayContext);
