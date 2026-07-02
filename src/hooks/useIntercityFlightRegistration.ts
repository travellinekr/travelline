import { useState, useMemo, useCallback } from "react";
import { useStorage } from "@/liveblocks.config";
import { isTripEnded } from "@/utils/timeline";

// airports 정적 데이터(수만 줄)를 진입 청크에서 제외 — 첫 저장 시점에만 로드.
// 모달이 dynamic import 로 이미 청크 분리되어 있어 실 사용 시점엔 airports 도 사실상 캐시됨.
async function loadAirportLookup() {
    const mod = await import("@/data/airports");
    return (code: string) =>
        mod.KOREAN_AIRPORTS.find(a => a.code === code) ||
        mod.MAJOR_AIRPORTS.find(a => a.code === code) ||
        null;
}

// 도시간 항공편 등록 로직 (state + 저장 핸들러 + 자식 카드 정보 selector + Context value).
// CollaborativeApp 규모(1000줄 초과) 축소 목적. 동작은 원본과 100% 동일.
export function useIntercityFlightRegistration({
    cards,
    columns,
    flightInfo,
    createCardToColumn,
    createIntercityFlightPair,
    removeIntercityFlightChildren,
    setCardTargetCity,
    addToast,
}: {
    cards: any;
    columns: any;
    flightInfo: any;
    createCardToColumn: any;
    createIntercityFlightPair: (args: any) => void;
    removeIntercityFlightChildren: (metaCardId: string) => void;
    setCardTargetCity: (args: { cardId: string; targetCity: string }) => void;
    addToast: (msg: string, level?: 'info' | 'warning') => void;
}) {
    // 도시간 항공편 모달 — 클릭한 메타 카드 id (등록 후 메타 카드는 그대로 유지)
    const [editingIntercityCardId, setEditingIntercityCardId] = useState<string | null>(null);

    // 메타 카드가 속한 day 컬럼의 실제 날짜 (등록 모달 기본값)
    const editingIntercityDefaultDate = useMemo(() => {
        if (!editingIntercityCardId || !flightInfo?.outbound?.date) return '';
        let foundColId: string | null = null;
        (columns as any)?.forEach((col: any, key: string) => {
            if (foundColId) return;
            const ids = col?.cardIds || [];
            if (ids.indexOf(editingIntercityCardId) !== -1) foundColId = key;
        });
        if (!foundColId) return '';
        const m = /^day([1-9]\d*)$/.exec(foundColId);
        if (!m) return '';
        const dayNum = parseInt(m[1]);
        const base = new Date(flightInfo.outbound.date);
        base.setDate(base.getDate() + (dayNum - 1));
        return base.toISOString().slice(0, 10);
    }, [editingIntercityCardId, columns, flightInfo]);

    // 등록/수정 → 메타 카드는 그대로 두고 출발/도착 항공 카드 2장 생성.
    //  - 기존 자식 카드가 있으면 먼저 제거 (수정 케이스) → 그 후 새 카드 생성
    //  - 생성된 자식 카드는 parentIntercityCardId 로 메타 카드 id 를 가리켜, 메타 삭제 시 cascade.
    //  - airports 데이터는 dynamic import (진입 청크에서 분리).
    const handleSaveIntercityFlight = useCallback(async (data: any) => {
        if (!flightInfo?.outbound?.date) return;
        const parentId = editingIntercityCardId ?? undefined;

        // 기존 자식 카드 정리 (수정 시 중복 방지)
        if (parentId) removeIntercityFlightChildren(parentId);

        // 날짜 → day 컬럼 ID (useFlightForm 의 동일 로직)
        const findDayColumnByDate = (dateStr: string): string | null => {
            const target = new Date(dateStr);
            const start = new Date(flightInfo.outbound.date);
            const diffDays = Math.floor((target.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            const dayNum = diffDays + 1;
            return dayNum >= 1 ? `day${dayNum}` : null;
        };

        // 공항 코드 → 정보 (좌표·이름) — dynamic import 로 airports 데이터 지연 로드
        const lookupAirport = await loadAirportLookup();

        const depInfo = lookupAirport(data.depAirport);
        const arrInfo = lookupAirport(data.arrAirport);
        const depDisplay = depInfo ? `${depInfo.name}(${depInfo.code})` : data.depAirport;
        const arrDisplay = arrInfo ? `${arrInfo.name}(${arrInfo.code})` : data.arrAirport;
        const depCoords = depInfo ? { lat: depInfo.lat, lng: depInfo.lng } : undefined;
        const arrCoords = arrInfo ? { lat: arrInfo.lat, lng: arrInfo.lng } : undefined;

        const depDayCol = findDayColumnByDate(data.depDate);
        const arrDayCol = findDayColumnByDate(data.arrDate);

        // 두 카드 페이로드 준비 (컬럼 없으면 null → mutation 안에서 skip + 아래 addToast)
        const depCardData = depDayCol ? {
            text: data.airline,
            title: data.airline,
            time: data.depTime,
            route: `🛫 ${depDisplay}`,
            description: '출발',
            category: 'flight',
            type: 'travel',
            date: data.depDate,
            coordinates: depCoords,
            city: data.depCity || undefined,
            isIntercityFlight: true,
            airportCode: data.depAirport,
            parentIntercityCardId: parentId,
        } : null;
        const arrCardData = arrDayCol ? {
            text: data.airline,
            title: data.airline,
            time: data.arrTime,
            route: `🛬 ${arrDisplay}`,
            description: '도착',
            category: 'flight',
            type: 'travel',
            date: data.arrDate,
            coordinates: arrCoords,
            city: data.arrCity || undefined,
            isIntercityFlight: true,
            airportCode: data.arrAirport,
            parentIntercityCardId: parentId,
        } : null;

        // 원자 mutation — 두 카드 동시 생성 (또는 컬럼 존재하는 카드만 부분 생성)
        createIntercityFlightPair({ depCardData, arrCardData, depDayCol, arrDayCol });

        if (!depDayCol) addToast(`${data.depDate} 에 해당하는 일차가 없어요`, 'warning');
        if (!arrDayCol) addToast(`${data.arrDate} 에 해당하는 일차가 없어요`, 'warning');

        // 메타 카드에 도착 도시 기록 (타이틀에 도시명 표시용)
        if (parentId && data.arrCity) {
            setCardTargetCity({ cardId: parentId, targetCity: data.arrCity });
        }

        setEditingIntercityCardId(null);
    }, [flightInfo, createIntercityFlightPair, addToast, editingIntercityCardId, removeIntercityFlightChildren, setCardTargetCity]);

    // 도시간 항공편/이동 메타 카드의 자식 카드 정보 — 1회 selector 로 전체 cards 1회 순회 후 Map 빌드.
    // 카드 1장당 useStorage 등록을 막아 N×O(cards) → 1×O(cards) 로 줄임.
    const intercityChildInfoMap = useStorage((root) => {
        const map = new Map<string, { isRegistered: boolean; childArrCity: string }>();
        const c = (root as any).cards;
        if (!c?.forEach) return map;
        c.forEach((card: any) => {
            const parentId = card?.parentIntercityCardId;
            if (!parentId) return;
            const prev = map.get(parentId) ?? { isRegistered: false, childArrCity: '' };
            prev.isRegistered = true;
            const route: string = card.route || '';
            if (route.startsWith('🛬') && card.city && !prev.childArrCity) {
                prev.childArrCity = card.city;
            }
            map.set(parentId, prev);
        });
        return map;
    });

    const intercityFlightContextValue = useMemo(() => ({
        openIntercityModal: (cardId: string) => setEditingIntercityCardId(cardId),
        isTripEnded: isTripEnded(flightInfo),
        childInfoMap: intercityChildInfoMap as Map<string, { isRegistered: boolean; childArrCity: string }>,
    }), [flightInfo, intercityChildInfoMap]);

    return {
        editingIntercityCardId,
        setEditingIntercityCardId,
        editingIntercityDefaultDate,
        handleSaveIntercityFlight,
        intercityFlightContextValue,
    };
}
