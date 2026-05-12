"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { findCityByEngSlug, type RegionKey } from "@/data/destinations";
import { ExploreContent } from "@/components/explore/ExploreContent";

// 스탠드얼론 /explore 라우트 — URL searchParams 파싱해서 ExploreContent에 props로 전달.
// 룸 안에서 모달로 띄울 때는 ExploreContent를 직접 호출 (CollaborativeApp).
export default function ExplorePage() {
    const searchParams = useSearchParams();

    const citySlug = searchParams.get("city");
    const category = searchParams.get("category");
    const fromRoomId = searchParams.get("from") ?? undefined;
    const anchorLat = searchParams.get("anchorLat");
    const anchorLng = searchParams.get("anchorLng");
    const anchorTitle = searchParams.get("anchorTitle");

    const found = useMemo(() => (citySlug ? findCityByEngSlug(citySlug) : null), [citySlug]);

    const anchor = useMemo(() => {
        if (!anchorLat || !anchorLng) return null;
        const lat = Number(anchorLat);
        const lng = Number(anchorLng);
        if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
        return { lat, lng, title: anchorTitle || "기준 카드" };
    }, [anchorLat, anchorLng, anchorTitle]);

    return (
        <ExploreContent
            initialCity={found?.city ?? null}
            initialRegion={(found?.region ?? "main") as RegionKey | "main"}
            initialCategory={category ?? "food"}
            anchor={anchor}
            fromRoomId={fromRoomId}
        />
    );
}
