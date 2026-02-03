"use client";

import { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { type Card } from "../liveblocks.config";

// ✨ [수정됨] 메인 앱과 동일한 레이아웃(1000px 중앙 정렬)을 가진 스켈레톤
function LoadingSkeleton() {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-white font-sans overflow-hidden">

      {/* 앱 컨테이너 (1000px + 그림자 + 테두리) */}
      <div className="w-full h-full max-w-[1000px] bg-white flex flex-col border-x border-gray-100 shadow-xl relative">

        {/* 헤더 */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
            <div className="flex flex-col gap-2">
              <div className="w-32 h-5 bg-slate-200 rounded animate-pulse" />
              <div className="w-48 h-3 bg-slate-100 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden">
          {/* 💥 [수정됨] 사이드바: 배경 하얀색(bg-white) + 밝은 회색 스켈레톤 아이템 */}
          <nav className="w-14 md:w-20 bg-white border-r border-gray-100 flex flex-col shrink-0 py-2 gap-2 z-20">
            {[1, 2, 3, 4, 5].map(i => (
              // 어두운 배경용(bg-slate-700) -> 밝은 배경용(bg-slate-100)으로 변경
              <div key={i} className="h-16 mx-2 bg-slate-100 rounded animate-pulse" />
            ))}
          </nav>

          {/* 메인 콘텐츠 */}
          <div className="flex-1 flex flex-col md:flex-row h-full">

            {/* 왼쪽: 일정표 */}
            <div className="w-full h-1/2 md:w-1/2 md:h-full border-r border-gray-200 bg-white p-6 space-y-8 overflow-hidden">
              <div className="w-24 h-6 bg-slate-200 rounded animate-pulse mb-4" />
              <div className="h-32 w-full bg-slate-50 border-2 border-dashed border-slate-100 rounded-2xl animate-pulse" />
              <div className="h-32 w-full bg-slate-50 border-2 border-dashed border-slate-100 rounded-2xl animate-pulse" />
            </div>

            {/* 오른쪽: 보관함 */}
            <div className="w-full h-1/2 md:w-1/2 md:h-full bg-gray-50 p-6 space-y-4 overflow-hidden">
              <div className="flex gap-2 mb-6 overflow-hidden">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-20 h-9 bg-slate-200 rounded-xl animate-pulse" />
                ))}
              </div>
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 w-full bg-white rounded-xl shadow-sm animate-pulse" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

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
    <LiveblocksProvider publicApiKey="pk_dev_jkTYSaS6FeHPjxNrP79_uDGgtMtBMXph5W7puIETGoLZDV0hVI8jyQHGWJlWXZuQ">
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
            ["p1", new LiveObject({ id: "p1", text: "여권 유효기간 확인", type: "travel", category: "preparation" } as any)],
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