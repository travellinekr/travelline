"use client";

import { useEffect, useRef } from "react";
import { useDndContext } from "@dnd-kit/core";
import { ADSENSE_CLIENT, ADSENSE_SLOT_DAY, isAdsenseConfigured, shouldRenderAdSlot } from "@/lib/adsense";

// 일차(day) 카드 목록 맨 아래에 붙는 광고 자리.
//
// 배치 규칙 (부모 Timeline 에서 판정해 showAd 로 내려준다):
//  - 실제 일차(day1~dayN)에만. destination-candidates / day0 은 제외
//  - 출발일(첫 일차)·도착일(마지막 일차) 제외 — 그날은 정신없다는 판단
//  - 카드가 하나라도 있을 때만. 빈 일차에 광고부터 보이면 첫인상이 나쁘다
//  - 유료 프로젝트는 아예 렌더되지 않는다 (Timeline 에서 PlanContext 로 판정)
//
// dnd-kit 과의 관계:
//  - SortableContext 의 items 는 카드 id 배열이라, 이 정적 div 는 dnd-kit 이 아예 인식하지 않는다.
//    → 드래그/드롭 대상이 아니고, 별도 차단 로직도 필요 없다.
//    → 카드를 광고 위에 떨어뜨려도 드롭존(일차 컬럼)에 정상 안착한다.
//  - 광고는 iframe 이라 드래그 중 포인터 이벤트를 삼킨다(드래그가 그 지점에서 끊김).
//    → active 가 있을 때만 pointer-events 를 없애 유리처럼 통과시킨다. 평소엔 정상 클릭된다.

const AD_HEIGHT = "h-[64px]";

/**
 * AdSense 광고 단위.
 *
 * React 에서 adsbygoogle 를 쓸 때 걸리는 것들:
 *  - StrictMode 는 마운트를 두 번 태운다. 그대로 두면 같은 <ins> 에 push 가 두 번 들어가
 *    "All ins elements already have ads" 오류가 난다. → 스크립트가 남기는
 *    data-adsbygoogle-status 와 자체 ref 로 이중 차단.
 *  - 폭이 0 인 상태에서 push 하면 광고가 뜨지 않고 그 자리는 영영 빈 채로 남는다.
 *    일차 컬럼은 접혀 있거나 모바일 인박스에 가려 폭 0 으로 마운트될 수 있다.
 *    → ResizeObserver 로 폭이 생기는 순간에 한 번만 push.
 */
function AdsenseUnit() {
    const insRef = useRef<HTMLModElement>(null);
    const pushedRef = useRef(false);

    useEffect(() => {
        const el = insRef.current;
        if (!el) return;

        const tryPush = () => {
            if (pushedRef.current) return true;
            // 스크립트가 이미 채운 자리면 건드리지 않는다
            if (el.getAttribute("data-adsbygoogle-status")) {
                pushedRef.current = true;
                return true;
            }
            if (el.offsetWidth === 0) return false;
            try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
                pushedRef.current = true;
                return true;
            } catch {
                // 스크립트 미로드 등 — 다음 기회에 다시 시도한다
                return false;
            }
        };

        if (tryPush()) return;

        const ro = new ResizeObserver(() => {
            if (tryPush()) ro.disconnect();
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <ins
            ref={insRef}
            className="adsbygoogle block w-full"
            style={{ display: "block", width: "100%", height: 64 }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={ADSENSE_SLOT_DAY}
            data-ad-format="horizontal"
            data-full-width-responsive="false"
        />
    );
}

/** 승인 전 자리표시 — 실제 광고와 높이를 맞춰 나중에 레이아웃이 흔들리지 않게 한다. */
function AdPlaceholder() {
    return (
        <div className="h-full flex items-center justify-center gap-2 select-none">
            <span className="text-[10px] font-semibold text-slate-400 border border-slate-300 rounded px-1 py-px">
                광고
            </span>
            <span className="text-xs text-slate-400">광고 자리 (테스트)</span>
        </div>
    );
}

export function DayAdSlot() {
    const { active } = useDndContext();

    // AdSense 승인 전에는 자리 자체를 만들지 않는다.
    // (NEXT_PUBLIC_ADS_PREVIEW=1 로 로컬에서만 더미를 켤 수 있다)
    if (!shouldRenderAdSlot) return null;

    return (
        <div
            className={`${AD_HEIGHT} flex-none border-t border-slate-200 bg-slate-50 overflow-hidden ${active ? "pointer-events-none" : ""
                }`}
        >
            {isAdsenseConfigured ? <AdsenseUnit /> : <AdPlaceholder />}
        </div>
    );
}
