"use client";

import { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { type Card } from "../liveblocks.config";
import { supabase } from "@/lib/supabaseClient";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";

export function Room({ children, roomId }: { children: ReactNode, roomId: string }) {
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
            ["destination-header", new LiveObject({ id: "destination-header", title: "최종 여행지", cardIds: new LiveList<string>([]) })],
            ["destination-candidates", new LiveObject({ id: "destination-candidates", title: "여행지 후보", cardIds: new LiveList<string>([]) })],
            ["flights", new LiveObject({ id: "flights", title: "항공", cardIds: new LiveList<string>([]) })],
            ["day0", new LiveObject({ id: "day0", title: "0일차 (준비)", cardIds: new LiveList<string>([]) })],
            ["inbox", new LiveObject({ id: "inbox", title: "보관함", cardIds: new LiveList<string>([]) })],
          ] as any),
          columnOrder: new LiveList(["destination-header", "destination-candidates", "flights", "day0", "inbox"]),
          cards: (new LiveMap<string, LiveObject<Card>>([]) as any),
          flightInfo: null,
        }}
      >
        <ClientSideSuspense fallback={<LoadingSkeleton />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}