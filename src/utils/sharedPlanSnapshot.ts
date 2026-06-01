// 공유플랜 발행용 스냅샷. Liveblocks storage 의 LiveMap/LiveList read view 를
// 자기완결적 JSON 으로 변환해 Supabase shared_plans.snapshot 에 저장한다.

import type { Card, FlightInfo, Column } from '@/liveblocks.config';

export const SHARED_PLAN_SCHEMA_VERSION = 1;

export interface SharedPlanSnapshot {
    schemaVersion: 1;
    destination: {
        id: string;
        text: string;
        city?: string;
        coordinates?: { lat: number; lng: number };
        imageUrl?: string;
        timezone?: number;
        airports?: Array<{ name: string; code: string }>;
    };
    flightInfo: FlightInfo | null;
    days: Array<{ id: string; title: string; cards: Card[] }>;
}

export interface BuildSnapshotInput {
    columns: any;
    cards: any;
    flightInfo: any;
}

function getDestinationCard(input: BuildSnapshotInput): Card | null {
    const destCol = input.columns?.get?.('destination-header') ?? input.columns?.['destination-header'];
    if (!destCol) return null;
    const cardIds = Array.isArray(destCol.cardIds) ? destCol.cardIds : destCol.cardIds?.toArray?.() ?? [];
    if (cardIds.length === 0) return null;
    const firstId = cardIds[0];
    return input.cards?.get?.(firstId) ?? input.cards?.[firstId] ?? null;
}

function getDayColumns(input: BuildSnapshotInput): Column[] {
    const result: Column[] = [];
    const iter = input.columns?.values?.() ?? [];
    for (const col of iter) {
        if (typeof col?.id === 'string' && /^day\d+$/.test(col.id)) {
            result.push(col);
        }
    }
    result.sort((a, b) => parseInt(a.id.slice(3)) - parseInt(b.id.slice(3)));
    return result;
}

// 공유플랜에 포함하면 안 되는 개인 데이터 — photos 등을 제거
function sanitizeCardForSnapshot(card: Card): Card {
    if (!card) return card;
    const { photos, ...rest } = card as any;
    return rest as Card;
}

export function buildSharedPlanSnapshot(input: BuildSnapshotInput): SharedPlanSnapshot | null {
    const dest = getDestinationCard(input);
    if (!dest) return null;

    const dayCols = getDayColumns(input);
    const days = dayCols.map((col) => {
        const cardIds = Array.isArray(col.cardIds) ? col.cardIds : (col as any).cardIds?.toArray?.() ?? [];
        const cards: Card[] = cardIds
            .map((id: string) => input.cards?.get?.(id) ?? input.cards?.[id])
            .filter(Boolean)
            .map(sanitizeCardForSnapshot);
        return { id: col.id, title: col.title, cards };
    });

    return {
        schemaVersion: SHARED_PLAN_SCHEMA_VERSION,
        destination: {
            id: dest.id,
            text: dest.text ?? '',
            city: (dest as any).city,
            coordinates: dest.coordinates,
            imageUrl: (dest as any).imageUrl,
            timezone: (dest as any).timezone,
            airports: (dest as any).airports,
        },
        flightInfo: input.flightInfo ?? null,
        days,
    };
}

export function calcDuration(flightInfo: FlightInfo | null): { nights: number; days: number } {
    if (!flightInfo?.outbound?.date || !flightInfo?.return?.date) {
        return { nights: 0, days: 0 };
    }
    const startStr = flightInfo.outbound.date;
    const endStr = flightInfo.return.arrivalDate || flightInfo.return.date;
    const start = new Date(startStr);
    const end = new Date(endStr);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    const diff = Math.max(0, Math.round((end.getTime() - start.getTime()) / 86400000));
    return { nights: diff, days: diff + 1 };
}
