import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

export type Card = {
  id: string;
  text: string;
  category: 'destination' | 'flight' | 'accommodation' | 'restaurant' | 'preparation' | 'hotel' | 'food' | 'shopping' | 'transport' | 'tourspa' | 'other';
  votes?: string[]; // Array of user IDs who voted for this card
  month?: number; // 월 정보 (1-12)
  city?: string; // 도시명 (영문, 예: "osaka")
  imageUrl?: string; // 이미지 URL (Unsplash)
  timezone?: number; // 시차 (UTC 기준, 예: 일본 +9, 태국 +7, 파리 +1)
  airports?: Array<{ name: string; code: string }>; // 공항 정보
  time?: string; // 항공편 시간 (예: "21:50")
  route?: string; // 항공편 경로 (예: "🛫 ICN")
  coordinates?: { lat: number; lng: number }; // GPS 좌표 (항공카드용)
  notes?: any; // BlockNote 에디터 콘텐츠 (JSON 형식)
  etcItem?: string; // 기타 카드 항목 (3단 표시용)
};

export type FlightInfo = {
  outbound: {
    departureAirport: string;
    departureTerminal?: string; // 출발 터미널 (텍스트 입력)
    arrivalAirport: string;
    arrivalTerminal?: string; // 도착 터미널 (텍스트 입력)
    date: string; // 출발 일자 ISO format
    time: string; // 출발 시간
    arrivalDate: string; // 도착 일자 ISO format
    arrivalTime: string; // 도착 시간
    airline: string;
    stopovers?: Array<{
      departureAirport: string;
      departureTerminal?: string;
      arrivalAirport: string;
      arrivalTerminal?: string;
      date: string;
      time: string;
      arrivalDate: string;
      arrivalTime: string;
      airline: string;
    }>;
  };
  return: {
    departureAirport: string;
    departureTerminal?: string; // 출발 터미널 (텍스트 입력)
    arrivalAirport: string;
    arrivalTerminal?: string; // 도착 터미널 (텍스트 입력)
    date: string; // 출발 일자 ISO format
    time: string; // 출발 시간
    arrivalDate: string; // 도착 일자 ISO format
    arrivalTime: string; // 도착 시간
    stopovers?: Array<{
      departureAirport: string;
      departureTerminal?: string;
      arrivalAirport: string;
      arrivalTerminal?: string;
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
    role?: 'owner' | 'editor' | 'viewer';
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