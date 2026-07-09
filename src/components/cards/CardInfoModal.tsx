'use client';

import { EntryInfoView } from './info/EntryInfoView';
import { AccommodationInfoView } from './info/AccommodationInfoView';
import { RestaurantInfoView } from './info/RestaurantInfoView';
import { ShoppingInfoView } from './info/ShoppingInfoView';
import { TransportInfoView } from './info/TransportInfoView';
import { TourSpaInfoView } from './info/TourSpaInfoView';

interface CardInfoModalProps {
    card: any;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Info 버튼 클릭 시 표시되는 읽기 전용 모달.
 * 카테고리별 view 컴포넌트로 dispatch:
 *   preparation + isEntryCard → EntryInfoView (기존 흐름, 변화 없음)
 *   hotel + hasInfo           → AccommodationInfoView
 *   food + hasInfo            → RestaurantInfoView
 *   shopping + hasInfo        → ShoppingInfoView
 *   transport + hasInfo       → TransportInfoView
 * 그 외 (버튼은 CardShell 이 이미 supportsInfo 체크로 걸러내지만 방어적으로 null 반환)
 */
export function CardInfoModal({ card, isOpen, onClose }: CardInfoModalProps) {
    if (!isOpen) return null;

    // 1) preparation 입국카드 — 기존 동작 100% 유지
    if (card?.isEntryCard) {
        return <EntryInfoView card={card} isOpen={isOpen} onClose={onClose} />;
    }

    // 2) hasInfo:true 카드 → 카테고리별 view
    if (card?.hasInfo === true) {
        switch (card?.category) {
            case 'hotel':
                return <AccommodationInfoView card={card} isOpen={isOpen} onClose={onClose} />;
            case 'food':
                return <RestaurantInfoView card={card} isOpen={isOpen} onClose={onClose} />;
            case 'shopping':
                return <ShoppingInfoView card={card} isOpen={isOpen} onClose={onClose} />;
            case 'transport':
                return <TransportInfoView card={card} isOpen={isOpen} onClose={onClose} />;
            case 'tourspa':
                return <TourSpaInfoView card={card} isOpen={isOpen} onClose={onClose} />;
            default:
                return null;
        }
    }

    return null;
}
