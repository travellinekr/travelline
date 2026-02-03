import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

export type Card = {
  id: string;
  text: string;
  category: 'destination' | 'flight' | 'accommodation' | 'restaurant' | 'preparation';
  votes?: string[]; // Array of user IDs who voted for this card
  month?: number; // 월 정보 (1-12)
  city?: string; // 도시명 (영문, 예: "osaka")
  imageUrl?: string; // 이미지 URL (Unsplash)
  timezone?: number; // 시차 (UTC 기준, 예: 일본 +9, 태국 +7, 파리 +1)
  airports?: Array<{ name: string; code: string }>; // 공항 정보
};

export type FlightInfo = {
  outbound: {
    departureAirport: string;
    arrivalAirport: string;
    date: string; // 출발 일자 ISO format
    time: string; // 출발 시간
    arrivalDate: string; // 도착 일자 ISO format
    arrivalTime: string; // 도착 시간
    airline: string;
    stopovers?: Array<{
      departureAirport: string;
      arrivalAirport: string;
      date: string;
      time: string;
      arrivalDate: string;
      arrivalTime: string;
      airline: string;
    }>;
  };
  return: {
    departureAirport: string;
    arrivalAirport: string;
    date: string; // 출발 일자 ISO format
    time: string; // 출발 시간
    arrivalDate: string; // 도착 일자 ISO format
    arrivalTime: string; // 도착 시간
    stopovers?: Array<{
      departureAirport: string;
      arrivalAirport: string;
      date: string;
      time: string;
      arrivalDate: string;
      arrivalTime: string;
      airline: string;
    }>;
    airline: string;
  };
};

export type Column = {
  id: string;
  title: string;
  cardIds: string[];
};

type Presence = {};

type Storage = {
  cards: LiveMap<string, Card>;
  columns: LiveMap<string, Column>;
  columnOrder: LiveList<string>;
  flightInfo: FlightInfo | null;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    avatar?: string;
  };
};

type RoomEvent = {};

export type ThreadMetadata = {};

import { LiveList, LiveMap } from "@liveblocks/client";

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);