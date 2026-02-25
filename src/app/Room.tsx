"use client";

import { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { type Card } from "../liveblocks.config";
import { supabase } from "@/lib/supabaseClient";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";

export function Room({ children, roomId }: { children: ReactNode, roomId: string }) {
  // 전체 카드 ID 목록 (기존 데이터 유지)
  const allCardIds = [
    "p1", "p2", "p3", // Prep
    "f1", "f2", "f3", // Flight
    "h1", "h2", "h3", // Hotel
    "fd1", "fd2", "fd3", // Food
    "s1", "s2", "s3"  // Shopping
  ];

  return (
    <LiveblocksProvider authEndpoint={async (room) => {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      const response = await fetch('/api/liveblocks-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ room }),
      });
      return await response.json();
    }}>
      <RoomProvider
        id={roomId}
        initialStorage={{
          columns: new LiveMap([
            ["destination-header", new LiveObject({ id: "destination-header", title: "최종 여행지", cardIds: new LiveList([]) })],
            ["destination-candidates", new LiveObject({ id: "destination-candidates", title: "여행지 후보", cardIds: new LiveList([]) })],
            ["flights", new LiveObject({ id: "flights", title: "항공", cardIds: new LiveList([]) })],
            ["day0", new LiveObject({ id: "day0", title: "0일차 (준비)", cardIds: new LiveList([]) })],
            ["inbox", new LiveObject({ id: "inbox", title: "보관함", cardIds: new LiveList(allCardIds) })],
          ]),
          columnOrder: new LiveList(["destination-header", "destination-candidates", "flights", "day0", "inbox"]),
          cards: new LiveMap<string, LiveObject<Card>>([
            // 1. 여행준비
            ["p1", new LiveObject({ id: "p1", text: "입국심사&필요사항", type: "travel", category: "preparation", isEntryCard: true } as any)],
            ["p2", new LiveObject({ id: "p2", text: "여행자 보험 가입", type: "travel", category: "preparation" } as any)],
            ["p3", new LiveObject({ id: "p3", text: "환전 및 트래블로그 카드", type: "travel", category: "preparation" } as any)],
            // 2. 항공
            ["f1", new LiveObject({ id: "f1", text: "대한항공 KE467 (09:00)", type: "travel", category: "flight" } as any)],
            ["f2", new LiveObject({ id: "f2", text: "비엣젯 VJ839 (06:15)", type: "travel", category: "flight" } as any)],
            ["f3", new LiveObject({ id: "f3", text: "제주항공 7C4907 (20:30)", type: "travel", category: "flight" } as any)],
            // 3. 호텔
            ["h1", new LiveObject({ id: "h1", text: "아미아나 리조트 (오션뷰)", type: "travel", category: "hotel", price: 350000 } as any)],
            ["h2", new LiveObject({ id: "h2", text: "퓨전 리조트 (풀빌라)", type: "travel", category: "hotel", price: 420000 } as any)],
            ["h3", new LiveObject({ id: "h3", text: "버고 호텔 (시내 가성비)", type: "travel", category: "hotel", price: 80000 } as any)],
            // 4. 맛집
            ["fd1", new LiveObject({ id: "fd1", text: "씀모이 가든 (반쎄오)", type: "travel", category: "food" } as any)],
            ["fd2", new LiveObject({ id: "fd2", text: "안토이 (곱창쌀국수)", type: "travel", category: "food" } as any)],
            ["fd3", new LiveObject({ id: "fd3", text: "CCCV 커피 (코코넛커피)", type: "travel", category: "food" } as any)],
            // 5. 쇼핑
            ["s1", new LiveObject({ id: "s1", text: "롯데마트 기념품 (젤리, 커피)", type: "travel", category: "shopping", price: 100000 } as any)],
            ["s2", new LiveObject({ id: "s2", text: "담시장 원피스/라탄백", type: "travel", category: "shopping", price: 50000 } as any)],
            ["s3", new LiveObject({ id: "s3", text: "약국 쇼핑 (샤론파스, 바나나보트)", type: "travel", category: "shopping", price: 30000 } as any)],
          ]),
        }}
      >
        <ClientSideSuspense fallback={<LoadingSkeleton />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}