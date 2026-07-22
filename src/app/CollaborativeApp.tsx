"use client";

import { useStorage, useErrorListener } from "../liveblocks.config";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { AnchorContext } from "@/contexts/AnchorContext";
import { IntercityFlightContext } from "@/contexts/IntercityFlightContext";
import { IntercityMoveContext } from "@/contexts/IntercityMoveContext";
import dynamic from "next/dynamic";

// 도시간 항공편/이동 모달은 진입 직후엔 거의 안 쓰임 + 내부 정적 데이터(airports/airlines/destinations)가 무거움 → 청크 분리
const IntercityFlightModal = dynamic(
    () => import("@/components/board/IntercityFlightModal").then(m => m.IntercityFlightModal),
    { ssr: false, loading: () => null }
);
const IntercityMoveModal = dynamic(
    () => import("@/components/board/IntercityMoveModal").then(m => m.IntercityMoveModal),
    { ssr: false, loading: () => null }
);
import { Sparkles, ChevronLeft, ChevronRight, Package, Lock, LockOpen } from "lucide-react";
import { useIntercityFlightRegistration } from "@/hooks/useIntercityFlightRegistration";
import { useIntercityMoveRegistration } from "@/hooks/useIntercityMoveRegistration";
import { useModalPrefetch } from "@/hooks/useModalPrefetch";
import { useRole } from "@/hooks/useRole";
import { useToast } from "@/hooks/useToast";
import { ToastContainer } from "@/components/common/ToastContainer";
import { useRouter } from "next/navigation";
import { UserAvatarMenu } from "@/components/header/UserAvatarMenu";
import { RightDeleteZone } from "@/components/board/RightDeleteZone";

import { DndContext, DragOverlay, type Modifier } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { getEventCoordinates } from "@dnd-kit/utilities";

// DragOverlay가 항상 포인터 중심에 붙도록 강제 (모바일 인박스 슬라이드로 인한 포지션 틀어짐 방지)
const snapCenterToCursor: Modifier = ({ activatorEvent, draggingNodeRect, transform }) => {
    if (draggingNodeRect && activatorEvent) {
        const activatorCoordinates = getEventCoordinates(activatorEvent);
        if (!activatorCoordinates) return transform;
        const offsetX = activatorCoordinates.x - draggingNodeRect.left;
        const offsetY = activatorCoordinates.y - draggingNodeRect.top;
        return {
            ...transform,
            x: transform.x + offsetX - draggingNodeRect.width / 2,
            y: transform.y + offsetY - draggingNodeRect.height / 2,
        };
    }
    return transform;
};

import { Inbox } from "../components/board/Inbox";
import { Timeline } from "../components/board/Timeline";
import { DraggedCardOverlay } from "@/components/board/DraggedCardOverlay";
import { useEntryCardSync } from "@/hooks/useEntryCardSync";
import { useDestinationSync } from "@/hooks/useDestinationSync";
import { useTripStartDateSync } from "@/hooks/useTripStartDateSync";
import { useFloatingButton } from "@/hooks/useFloatingButton";
import { AiAssistantPanel } from "@/components/board/AiAssistant/AiAssistantPanel";
import { useAiPlannerChat } from "@/components/ai/useAiPlannerChat";
import { useApplyAiPlan } from "@/hooks/useApplyAiPlan";
import { useBoardStorage } from "@/hooks/useBoardStorage";
import { LiveCursors } from "../components/board/LiveCursors";
import { SessionExpiredModal } from "@/components/auth/SessionExpiredModal";
import { ConnectionLostModal } from "@/components/auth/ConnectionLostModal";
import { OfflineModal } from "@/components/auth/OfflineModal";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";
import { useCardMutations } from "@/hooks/useCardMutations";
import { useMobileInbox } from "@/hooks/useMobileInbox";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";
import { usePresenceCursor } from "@/hooks/usePresenceCursor";
import { useAnchorLogic } from "@/hooks/useAnchorLogic";
import { useDragDrop } from "@/hooks/useDragDrop";
import { isPastDayColumn, isTripStarted, isTripEnded } from "@/utils/timeline";
import { getPickerCityChips } from "@/utils/citySources";
import { findSourceColumn } from "@/utils/dnd";
import { buildPickerCardPayload } from "@/utils/pickerCardPayload";
import { validateDragDrop } from "@/utils/dragValidation";

// Picker 카테고리별 삭제 드롭존 (드래그 중 카드 삭제) — 문자열 상수 배열
const PICKER_DELETE_ZONES = [
    'tourspa-delete-zone',
    'etc-delete-zone',
    'shopping-delete-zone',
    'hotel-delete-zone',
    'food-delete-zone',
] as const;
import { Sidebar } from "@/components/board/Sidebar";
import { Confirm } from "@/components/board/Confirm";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { OnboardingTour, type OnboardingStep } from "@/components/onboarding/OnboardingTour";
import { useOnboarding } from "@/hooks/useOnboarding";
import { DESTINATION_DATA, FALLBACK_IMAGES } from "@/data/destinations";

type CategoryType = "destination" | "preparation" | "flight" | "hotel" | "food" | "shopping" | "transport";

export function CollaborativeApp({ roomId, initialTitle }: { roomId: string; initialTitle: string }) {
    const router = useRouter();
    const [showSessionExpired, setShowSessionExpired] = useState(false);
    const [showConnectionLost, setShowConnectionLost] = useState(false);
    // navigator.onLine 기반 즉시 감지 (Liveblocks auth 실패 4회 누적 전에 UX 확보)
    const online = useOnlineStatus();
    // useErrorListener 콜백 클로저 stale 방지 — 이미 모달 뜬 후 같은 에러 반복 시 setState 스킵
    const connectionLostShownRef = useRef(false);

    useErrorListener((error) => {
        if (connectionLostShownRef.current) return;
        const msg = error.message.toLowerCase();
        // Liveblocks 인증/네트워크 오류 전부 ConnectionLostModal로 통합
        // (모달이 [새로고침] + [로그인 페이지로 이동] 두 버튼 모두 제공)
        if (
            msg.includes("auth") ||
            msg.includes("unauthorized") ||
            msg.includes("timed out") ||
            msg.includes("failed to fetch") ||
            msg.includes("unexpected token")
        ) {
            connectionLostShownRef.current = true;
            setShowConnectionLost(true);
        }
    });
    const columns = useStorage((root) => root.columns);
    const cards = useStorage((root) => root.cards);
    const flightInfo = useStorage((root) => root.flightInfo);


    // 권한 체크
    const { canEdit, isOwner, loading: roleLoading } = useRole(roomId);

    // 온보딩: "여행 계획을 만든 사람(소유자)이 처음 들어왔을 때"만 자동 노출.
    //  "한 번 본 사람"은 useOnboarding 내부의 사용자 단위 seen 플래그로 관리.
    const onboardingEnabled = !!columns && !!cards && isOwner;
    const onboarding = useOnboarding({ enabled: onboardingEnabled });

    const [activeCategory, setActiveCategory] = useState<CategoryType>("destination");
    const [projectTitle, setProjectTitle] = useState<string>(initialTitle);

    // Confirm dialog state
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingDestinationDrop, setPendingDestinationDrop] = useState<{
        activeId: string;
        draggedCard: any;
        targetColumnId: string;
    } | null>(null);

    // React State는 초기 위치용
    const [mobileCursorPos, setMobileCursorPos] = useState({ x: 0, y: 0 });
    const [isMobileDragging, setIsMobileDragging] = useState(false);

    // AI 플래너 패널 열림 상태 (플로팅 버튼 탭 / 데스크톱 인박스 헤더 버튼으로 오픈)
    const [aiPanelOpen, setAiPanelOpen] = useState(false);
    const [aiBusy, setAiBusy] = useState(false);
    // 기존 일차 카드가 있을 때 배치 방식(추가/새로) 확인용 대기 plan
    const [pendingAiPlan, setPendingAiPlan] = useState<{ plan: any; warnings: string[] } | null>(null);

    const {
        inboxState,
        setInboxState,
        prevInboxStateRef,
        isInboxLocked,
        setIsInboxLocked,
        isKeyboardVisible,
        toggleInbox,
        getInboxSlideClass,
    } = useMobileInbox();

    const { reorderCard, copyCardToTimeline, removeCardFromTimeline, moveCard, createCard, createCardToColumn, createIntercityFlightCard, removeIntercityFlightGroup, removeIntercityFlightChildren, createIntercityMoveCard, setCardTargetCity, createIntercityFlightPair, resetBoard } = useCardMutations();

    // 여행지 필터 시연 트리거: 인박스 열고 여행지 탭으로 전환 + DestinationPicker 데모 이벤트 발사
    const fireDestinationDemo = useCallback(() => {
        setInboxState("open");
        setActiveCategory("destination");
        // 피커가 (재)마운트되어 리스너를 등록하기 전 발사되는 경우 대비 → 즉시 + 지연 재발사
        const fire = () => window.dispatchEvent(new Event("travelline:onb-dest-demo"));
        if (typeof window !== "undefined") {
            fire();
            setTimeout(fire, 380);
        }
    }, [setInboxState]);

    // 온보딩 시연: 발리 카드를 최종여행지에 실제로 넣어 항공편/미리 일정 만들기 UI 를 노출.
    //  (공유 스토리지에 쓰이므로 온보딩 종료 시 handleOnboardingFinish 에서 되돌림)
    const createdDemoDestRef = useRef(false);
    const placeDemoDestination = useCallback(() => {
        setInboxState("closed"); // 모바일: 타임라인(항공편 섹션)이 보이도록 인박스 닫기
        const destCol = (columns as any)?.get("destination-header");
        if (destCol && destCol.cardIds.length > 0) return; // 이미 여행지가 있으면 건드리지 않음
        const bali = DESTINATION_DATA.se_asia.cities.find((c) => c.engName === "Bali");
        if (!bali) return;
        createCardToColumn({
            title: bali.name,
            text: bali.name,
            category: "destination",
            type: "travel",
            description: bali.desc,
            date: "9월",
            city: bali.engName.toLowerCase(),
            month: 9,
            timezone: bali.timezone,
            airports: bali.airports,
            imageUrl: FALLBACK_IMAGES[bali.engName],
            targetColumnId: "destination-header",
            targetIndex: 0,
        });
        createdDemoDestRef.current = true;
    }, [columns, createCardToColumn, setInboxState]);

    // 온보딩 종료(마지막 스텝 "다음" 또는 "그만 보기"):
    //  - 인트로(최초 자동): 데모로 채워진 보드를 신규 상태로 완전 초기화
    //  - 재시청(사용법 다시 보기): 실제 보드를 지우면 안 되므로, 데모로 넣은 여행지만 정리
    const handleOnboardingFinish = useCallback(() => {
        if (onboarding.isIntro()) {
            resetBoard(); // 인트로: 데모로 채워진 보드를 신규 상태로 초기화 (seen 플래그는 onboarding.finish 가 저장)
            createdDemoDestRef.current = false;
        } else if (createdDemoDestRef.current) {
            const destCol = (columns as any)?.get("destination-header");
            const id = destCol?.cardIds?.[0];
            if (id) removeCardFromTimeline({ cardId: id, sourceColumnId: "destination-header" });
            createdDemoDestRef.current = false;
        }
        if (typeof window !== "undefined") window.dispatchEvent(new Event("travelline:onb-dest-reset"));
        onboarding.finish();
    }, [columns, removeCardFromTimeline, resetBoard, onboarding]);

    // 온보딩 코치마크 스텝 — 화면 폭(768px) 기준 모바일/데스크탑 분기.
    //  (Fold 펼침 등 태블릿 폭은 데스크탑 시나리오로 처리됨 → OnboardingTour 내부 필터)
    //  모바일 인박스 스텝은 onEnter 로 실제 인박스를 열고/닫아 보여준다.
    const onboardingSteps = useMemo<OnboardingStep[]>(() => [
        {
            key: "timeline",
            heading: "✏️ 사용 가이드 미리보기",
            target: "day0",
            placement: "top",
            body: "여기가 여행 일정표!\n항공편만 넣으면\n날짜가 쫙 생겨요",
        },
        // 📱 모바일: 보관함(인박스) 열기 안내 → 다음 스텝에서 실제로 열어 보여줌
        {
            key: "inbox-toggle",
            target: "inbox-toggle",
            platform: "mobile",
            placement: "left",
            body: "여기 눌러서\n보관함 열기 👆",
            onEnter: () => setInboxState("closed"),
        },
        {
            key: "inbox-open-mobile",
            target: "inbox-tabs",
            platform: "mobile",
            placement: "auto",
            body: "숙소·맛집·쇼핑·교통...\n카테고리별 카드가 여기!",
            onEnter: () => setInboxState("open"),
        },
        // 🖥 데스크탑: 오른쪽 인박스 카테고리 설명
        {
            key: "inbox-desktop",
            target: "inbox-tabs",
            platform: "desktop",
            placement: "left",
            body: "숙소·맛집·쇼핑·교통...\n카테고리별 카드가 여기!",
        },
        // 여행지 필터 시연: 9월 + 동남아시아 선택 → 여행지 카드 등장
        // 🖥 데스크탑: 오른쪽 인박스에 카드 등장, 문구는 왼쪽에서 오른쪽 화살표
        {
            key: "destination-demo-desktop",
            target: "inbox-content",
            platform: "desktop",
            placement: "left",
            body: "여행 시기와 여행지 분류를\n선택하면 여행지 카드가 나와요",
            onEnter: fireDestinationDemo,
        },
        // 📱 모바일: 전체화면 인박스 → 카테고리 메뉴는 딤, 문구는 위 / 화살표는 아래(카드 영역)로
        {
            key: "destination-demo-mobile",
            target: "inbox-content",
            platform: "mobile",
            placement: "top",
            body: "여행 시기와 여행지 분류를\n선택하면 여행지 카드가 나와요",
            onEnter: fireDestinationDemo,
        },
        // 카드 하나(발리)를 짚어 넣는 방법 안내 — 플랫폼별 조작법이 달라 문구 분리
        {
            key: "card-demo-desktop",
            target: "destination-card-demo",
            platform: "desktop",
            placement: "left",
            body: "마음에 드는 카드를\n끌어서 여행 계획에 넣어요",
        },
        {
            key: "card-demo-mobile",
            target: "destination-card-demo",
            platform: "mobile",
            placement: "top",
            body: "마음에 드는 카드를\n꾹 눌러 여행 계획에 넣어요",
        },
        // 여행지를 최종여행지에 넣은 뒤 → 항공편/미리 일정 만들기로 일정 생성 안내
        {
            key: "make-itinerary-desktop",
            target: ["destination", "flight-section", "preplan"],
            platform: "desktop",
            placement: "right",
            body: "항공편 또는 미리 일정 만들기로\n일정을 만드세요",
            onEnter: placeDemoDestination,
            cta: "이제 시작해볼까요? →",
        },
        {
            key: "make-itinerary-mobile",
            target: ["destination", "flight-section", "preplan"],
            platform: "mobile",
            placement: "bottom",
            body: "항공편 또는 미리 일정 만들기로\n일정을 만드세요",
            onEnter: placeDemoDestination,
            cta: "이제 시작해볼까요? →",
        },
    ], [fireDestinationDemo, placeDemoDestination]);
    const {
        activeDay,
        setActiveDay,
        timelineScrollRef,
        autoScrollRef,
        scrollToDay,
    } = useTimelineScroll({ flightInfo });
    const {
        activeDragItem,
        setActiveDragItem,
        activeDragSourceColumn,
        dragOverlayWidth,
        isDeleteZoneActive,
        setIsDeleteZoneActive,
        sensors,
        handleDragStart,
        handleDragMove,
        customCollisionDetection,
    } = useDragDrop<CategoryType>({
        canEdit,
        columns,
        isInboxLocked,
        inboxState,
        setInboxState,
        prevInboxStateRef,
        setActiveCategory,
        timelineScrollRef,
        autoScrollRef,
    });

    const { toasts, addToast, removeToast } = useToast();

    // 거리 정렬 기준 카드(anchor) — 타임라인 카드 single-tap으로 활성/해제
    const anchorContextValue = useAnchorLogic({ cards, addToast, setInboxState });

    const containerRef = useRef<HTMLDivElement>(null);
    const { throttledUpdateMyPresence, handlePointerMove, handlePointerLeave } = usePresenceCursor({
        containerRef,
        isMobileDragging,
        activeDragItem,
    });
    // Liveblocks cards 최신값 참조 (stale closure 방지)
    const cardsRef = useRef<any>(null);
    useEffect(() => { cardsRef.current = cards; }, [cards]);

    // 도시간 항공편/이동 모달 청크 idle prefetch
    useModalPrefetch();

    // 도시간 항공편 등록/수정/자식 정보 (state + handler + Context value 통합 hook)
    const {
        editingIntercityCardId,
        setEditingIntercityCardId,
        editingIntercityDefaultDate,
        handleSaveIntercityFlight,
        intercityFlightContextValue,
    } = useIntercityFlightRegistration({
        cards, columns, flightInfo,
        createCardToColumn, createIntercityFlightPair,
        removeIntercityFlightChildren, setCardTargetCity, addToast,
    });

    // 도시간 이동(육로) 등록/수정 (state + handler + Context value 통합 hook)
    const {
        editingMoveCardId,
        setEditingMoveCardId,
        handleSaveIntercityMove,
        intercityMoveContextValue,
    } = useIntercityMoveRegistration({ flightInfo, setCardTargetCity });

    // createCard wrapper for debugging
    const handleCreateCard = useCallback((data: any) => {
        try {
            createCard(data);
        } catch (error) {
            console.error('❌ createCard 에러:', error);
        }
    }, [createCard]);

    // Inbox 로 내려주는 카드 삭제 콜백 — 인라인 화살표 함수 대신 useCallback 으로 안정화
    const handleInboxRemoveCard = useCallback((cardId: string) => {
        removeCardFromTimeline({ cardId, sourceColumnId: 'inbox' });
    }, [removeCardFromTimeline]);


    // 보드 스토리지 관리 (자동 복구 + 여행지 제거 시 cleanup)
    const { cleanupFlightAndDays } = useBoardStorage({ columns, addToast });

    // 모바일 플로팅 버튼 (가짜 마우스 커서)
    const { floatingBtnRef, handleTouchStart, handleTouchMove, handleTouchEnd } = useFloatingButton({
        containerRef,
        inboxState,
        throttledUpdateMyPresence,
        setIsMobileDragging,
        setMobileCursorPos,
        // 탭(드래그 아님) 시 AI 패널 오픈. 모바일은 인박스와 무관하게 독립 팝업으로 뜸.
        onTap: () => setAiPanelOpen(true),
    });

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    const publicUrl = `${baseUrl}/room/${roomId}`;

    const destinationCard = useMemo(() => {
        const destCol = (columns as any)?.get('destination-header');
        if (!destCol || destCol.cardIds.length === 0) return null;
        const cardId = destCol.cardIds[0];
        return (cards as any)?.get(cardId) || null;
    }, [columns, cards]);

    // 다중 도시 — picker 서브 도시 chips 옵션.
    // 도시간 이동(항공편/육로) 카드가 있을 때만 [최종여행지, ...이동도시] 반환, 없으면 빈 배열.
    const subCities = useMemo(
        () => getPickerCityChips(destinationCard, cards),
        [destinationCard, cards]
    );

    // AI 플래너 — 대화용 여행지 이름 + 공유 대화 컨트롤러(패널 개폐와 무관하게 대화 유지)
    const aiDestinationName = (destinationCard as any)?.text || (destinationCard as any)?.city || undefined;

    // 현재 보드에 배치된 일정(일차별 카드 name/category) — AI 컨텍스트용(기간 재질문 방지 + 부분수정).
    // day1..연속 일차만(첫 빈 번호에서 중단, Timeline 규칙과 동일).
    const aiCurrentPlan = useMemo(() => {
        const cols = columns as any;
        if (!cols) return null;
        const days: Array<{ day: number; items: Array<{ name: string; category?: string }> }> = [];
        for (let i = 1; i <= 20; i++) {
            const col = cols.get(`day${i}`);
            if (!col) break;
            const ids: string[] = Array.isArray(col.cardIds) ? col.cardIds : (col.cardIds?.toArray?.() ?? []);
            const items = ids
                .map((id) => (cards as any)?.get(id))
                .filter(Boolean)
                .map((c: any) => ({ name: c.text || c.title || '', category: c.category }))
                .filter((it: any) => it.name);
            days.push({ day: i, items });
        }
        return days.length ? { dayCount: days.length, days } : null;
    }, [columns, cards]);

    const aiChat = useAiPlannerChat({ destinationName: aiDestinationName, currentPlan: aiCurrentPlan });
    const { applyPlan, swapPlace } = useApplyAiPlan();

    // p1(입국심사) 카드 라이프사이클 + city 동기화
    const { setEntryCardCity } = useEntryCardSync({ canEdit, roleLoading, destinationCard });

    // Phase 3: flightInfo.outbound.date 를 Supabase projects.trip_start_date 로 동기화 (D-1 크론 대상 선정용)
    useTripStartDateSync({
        roomId,
        canEdit,
        roleLoading,
        outboundDate: flightInfo?.outbound?.date,
    });

    // 여행지 제거 감지 → 항공편/일차 정리 + 입국 카드 city 초기화
    useDestinationSync({
        canEdit,
        roleLoading,
        destinationCard,
        onDestinationRemoved: useCallback(() => {
            cleanupFlightAndDays();
            setEntryCardCity('');
        }, [cleanupFlightAndDays, setEntryCardCity]),
    });

    // 여행지 + 항공편 모두 등록 완료 시점에 인박스 카테고리 자동 전환: '맛집'
    // (양쪽 다 갖춰지면 사용자가 다음으로 맛집 카드를 살펴보는 흐름이 자연스러움)
    // 둘 중 하나라도 빠지면 ref 리셋 → 다시 둘 다 갖춰질 때 재트리거. 그 사이 사용자 수동 탭 선택은 유지.
    const foodAutoSelectedRef = useRef(false);
    useEffect(() => {
        const bothSet = !!(destinationCard?.city && flightInfo?.outbound?.date);
        if (bothSet) {
            if (!foodAutoSelectedRef.current) {
                setActiveCategory('food');
                foodAutoSelectedRef.current = true;
            }
        } else {
            foodAutoSelectedRef.current = false;
        }
    }, [destinationCard, flightInfo]);

    const handleDragEnd = (event: any) => {

        const { active, over } = event;

        setActiveDragItem(null);

        // 📱 모바일: 드래그 종료 후 인박스 이전 상태로 복원 (딜레이로 카드 안착 확인 후 열림)
        // (잠금 상태였으면 close/open 토글이 일어나지 않았으므로 복원 불필요)
        // ⚠️ 2026-07-02: 사용자 요청으로 드롭 후 자동 복원 비활성 — 필요시 아래 블록 주석 해제.
        //   (인박스 열린 상태에서 드롭하면 다시 스르륵 열리는 동작을 막기 위함)
        // if (typeof window !== 'undefined' && window.innerWidth < 768 && !isInboxLocked) {
        //     setTimeout(() => {
        //         setInboxState(prevInboxStateRef.current);
        //     }, 500);
        // }

        // auto-scroll 정리
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }

        // 우측 삭제존 시각 강조 리셋
        setIsDeleteZoneActive(false);

        if (!over || !columns) return;

        const activeId = active.id;
        const overId = over.id;
        const draggedCard = active.data.current;

        let targetColumnId = null;
        let targetIndex = undefined;

        if (overId === 'right-delete-zone') {
            // 📱 모바일 우측 삭제존: 타임라인 카드 완전 삭제 (인박스 카드 제외)
            const { sourceColumnId: foundColumnId } = findSourceColumn(activeId, columns);

            // 🔒 일정 시작 후 최종여행지는 변경 불가
            if (foundColumnId === 'destination-header' && isTripStarted(flightInfo)) {
                addToast('여행이 시작되어 여행지를 변경할 수 없어요.', 'warning');
                setActiveDragItem(null);
                return;
            }

            // 🔒 지난 일차 카드는 삭제 불가
            if (foundColumnId && isPastDayColumn(foundColumnId, flightInfo)) {
                addToast('지난 일정의 카드는 변경할 수 없어요.', 'warning');
                setActiveDragItem(null);
                return;
            }

            // 🔒 destination-header 카드 + 항공편 등록 상태에서는 confirm 후 처리
            // (데스크톱에서 destination-header → 다른 곳 드래그 시 confirm 뜨는 것과 동일 흐름)
            if (foundColumnId === 'destination-header' && flightInfo) {
                setPendingDestinationDrop({
                    activeId: String(activeId),
                    draggedCard,
                    targetColumnId: 'destination-candidates',
                });
                setShowConfirm(true);
                return;
            }

            if (foundColumnId && foundColumnId !== 'inbox') {
                // 🔒 항공 카드 삭제 규칙
                //  - 도시간 항공편 메타 카드 (intercity-flight-*) → 자식 항공 카드까지 cascade
                //  - 실제 항공 카드 (category='flight' + 메타 아님) → 삭제 차단 + 토스트
                const isMetaCard = typeof activeId === 'string' && activeId.startsWith('intercity-flight-');
                const draggedCardData = (cards as any)?.get(activeId);
                const isFlightCard = draggedCardData?.category === 'flight';

                if (isMetaCard) {
                    removeIntercityFlightGroup(String(activeId));
                    return;
                }
                if (isFlightCard) {
                    addToast('항공 카드는 삭제할 수 없어요.', 'warning');
                    return;
                }
                removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
            }
            return;
        }

        if (overId === 'destination-candidates-timeline') {
            targetColumnId = 'destination-candidates';
        } else if (overId === 'destination-header') {
            targetColumnId = 'destination-header';
        } else if (String(overId).includes('timeline')) {
            targetColumnId = String(overId).replace('-timeline', '');
        } else if (overId === 'inbox-dropzone') {
            targetColumnId = 'inbox';
        } else if (PICKER_DELETE_ZONES.includes(overId as any)) {
            // Picker 카테고리별 삭제 영역 (투어&스파/기타/쇼핑/숙소/맛집): 카드 삭제
            const { sourceColumnId: foundColumnId } = findSourceColumn(activeId, columns);
            if (foundColumnId) {
                // 도시간 항공편 메타 카드 → 자식 항공 카드까지 cascade 삭제
                if (typeof activeId === 'string' && activeId.startsWith('intercity-flight-')) {
                    removeIntercityFlightGroup(String(activeId));
                } else {
                    removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
                }
            }
            setActiveDragItem(null);
            return;
        } else {
            // overId가 카드 ID인 경우: 그 카드가 들어있는 컬럼을 찾아 target으로 사용
            const targetMatch = findSourceColumn(String(overId), columns);
            if (targetMatch.sourceColumnId) {
                targetColumnId = targetMatch.sourceColumnId;
                targetIndex = targetMatch.oldIndex;
            }
        }

        if (!targetColumnId) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2: sourceColumnId 찾기 (어디서 드래그했는지)
        // =========================================
        const { sourceColumnId, oldIndex } = findSourceColumn(activeId, columns);

        // sourceColumnId를 찾지 못하면 (유효하지 않은 드래그) 중단
        // 단, picker/sample/shared 카드는 예외 (외부에서 오는 카드는 sourceColumnId가 없음)
        if (!sourceColumnId && !String(activeId).startsWith('picker-') && !String(activeId).startsWith('sample-') && !String(activeId).startsWith('shared-')) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2.5: 지난 일차 제한
        // =========================================
        // 지난 일차 카드는 어떤 액션이든 (이동/삭제/같은 컬럼 내 순서 변경) 차단
        if (sourceColumnId && isPastDayColumn(sourceColumnId, flightInfo)) {
            addToast('지난 일정의 카드는 변경할 수 없어요.', 'warning');
            setActiveDragItem(null);
            return;
        }

        // 지난 일차로 카드 추가 시도
        if (isPastDayColumn(targetColumnId, flightInfo) && targetColumnId !== sourceColumnId) {
            addToast('지난 일정에는 카드를 추가할 수 없어요.', 'warning');
            setActiveDragItem(null);
            return;
        }

        // 공유플랜 카드 드롭 처리 (single 또는 bulk) — 카테고리 검증/picker 분기 우회
        if (draggedCard?.__sharedPlan) {
            const cardsToAdd: any[] = draggedCard.bulk ? (draggedCard.cards || []) : [draggedCard.card];
            if (cardsToAdd.length === 0) {
                setActiveDragItem(null);
                return;
            }
            if (!/^day\d+$/.test(targetColumnId) && targetColumnId !== 'inbox') {
                addToast('일차 또는 보관함에만 추가할 수 있어요.', 'warning');
                setActiveDragItem(null);
                return;
            }
            const targetCol = (columns as any).get(targetColumnId);
            const startIndex = targetCol?.cardIds?.length ?? 0;
            cardsToAdd.forEach((c: any, idx: number) => {
                if (!c) return;
                createCardToColumn({
                    ...c,
                    title: c.text || c.title,
                    targetColumnId,
                    targetIndex: startIndex + idx,
                });
            });
            addToast(`${cardsToAdd.length}개 카드를 추가했어요.`, 'info');
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2.9: 도시간 항공편 picker 카드 → day 컬럼 드롭
        //   - 미등록 카드 생성만 하고 종료. 모달은 카드의 "등록" 버튼 클릭 시 띄움.
        // =========================================
        if (draggedCard?.__intercityFlightTrigger && /^day\d+$/.test(targetColumnId)) {
            const targetCol = (columns as any).get(targetColumnId);
            const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
            createIntercityFlightCard({ targetColumnId, targetIndex: finalTargetIndex });
            setActiveDragItem(null);
            return;
        }

        // 도시간 이동(육로) picker 카드 → day 컬럼 드롭
        if (draggedCard?.__intercityMoveTrigger && /^day\d+$/.test(targetColumnId)) {
            const targetCol = (columns as any).get(targetColumnId);
            const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
            createIntercityMoveCard({ targetColumnId, targetIndex: finalTargetIndex });
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 3: 카테고리별 검증 (올바른 카드 타입인지)
        // =========================================
        const validation = validateDragDrop({ draggedCard, targetColumnId, sourceColumnId, flightInfo });
        if (!validation.ok) {
            if ('reason' in validation) addToast(validation.reason, 'warning');
            setActiveDragItem(null);
            return;
        }

        // 최종 여행지에 기존 카드가 있으면 자동으로 교체 (validation 통과 후만)
        if (targetColumnId === 'destination-header') {
            const destCol = (columns as any).get('destination-header');
            if (destCol && destCol.cardIds.length >= 1) {
                const existingCardId = destCol.cardIds[0];
                removeCardFromTimeline({ cardId: existingCardId, sourceColumnId: 'destination-header' });
            }
        }

        // Picker 카드 처리: DestinationPicker, AccommodationPicker, ShoppingPicker 등에서 드래그
        // picker- 또는 sample-로 시작하는 카드
        if (String(activeId).startsWith('picker-') || String(activeId).startsWith('sample-')) {
            // Destination Picker 카드 → destination-candidates 또는 destination-header
            if (draggedCard?.category === 'destination' && (targetColumnId === 'destination-candidates' || targetColumnId === 'destination-header')) {
                // 여행지 후보에 넣을 때만 중복 체크
                if (targetColumnId === 'destination-candidates') {
                    const candidatesCol = (columns as any).get('destination-candidates');
                    if (candidatesCol) {
                        const existingCardIds = candidatesCol.cardIds;
                        for (const cardId of existingCardIds) {
                            const existingCard = (cards as any).get(cardId);
                            if (existingCard &&
                                existingCard.text === draggedCard.text &&
                                existingCard.date === draggedCard.date) {
                                addToast(`${draggedCard.date} ${draggedCard.text} 카드는 들어가 있습니다.`, 'warning');
                                setActiveDragItem(null);
                                return;
                            }
                        }
                    }
                }

                createCardToColumn({
                    title: draggedCard.text,
                    category: draggedCard.category,
                    type: draggedCard.type || 'travel',
                    description: draggedCard.description,
                    date: draggedCard.date,
                    imageUrl: draggedCard.imageUrl,
                    airports: draggedCard.airports,
                    month: draggedCard.month,  // 🎯 캘린더 초기 월 설정에 필요
                    city: draggedCard.city,    // 🎯 도시 식별자
                    timezone: draggedCard.timezone,
                    targetColumnId: targetColumnId,
                    targetIndex: 0
                });

                // destination-header에 카드를 추가하면 candidates 숨김
                if (targetColumnId === 'destination-header') {
                    addToast('항공편을 등록하세요.', 'info');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                        prevInboxStateRef.current = 'closed';
                    }
                }

                return;
            }

            // 5개 카테고리 Picker 카드 (hotel/transport/food/shopping/tourspa) → Day 컬럼
            if (
                /^day[1-9]\d*$/.test(targetColumnId) &&
                ['hotel', 'transport', 'food', 'shopping', 'tourspa'].includes(draggedCard?.category)
            ) {
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
                const payload = buildPickerCardPayload(draggedCard, targetColumnId, finalTargetIndex);
                if (payload) {
                    createCardToColumn(payload);
                    return;
                }
            }
        }


        // =========================================
        // STEP 4: 액션 실행 (source와 target 조합에 따라 분기)
        // =========================================

        // 🔥 CRITICAL: destination-header에서 나가는 경우 먼저 체크 (항공편 정보 확인)
        if (sourceColumnId === 'destination-header' && targetColumnId !== 'destination-header') {
            // 🔒 일정 시작 후에는 최종여행지 변경 불가
            if (isTripStarted(flightInfo)) {
                addToast('여행이 시작되어 여행지를 변경할 수 없어요.', 'warning');
                setActiveDragItem(null);
                return;
            }

            // flightInfo, 작성된 일차(day1+), 또는 "확정되지 않은 일정" 카드가 있으면 confirm 창 띄우기
            // (항공편 없이 "미리 일정 만들기"로 짠 일정 / 밀려나 있는 카드도 초기화 전에 물어봄)
            const hasItineraryDays = (() => {
                for (const col of (columns as any).values()) {
                    if (/^day[1-9]\d*$/.test(col.id)) return true;
                    if (col.id === 'unconfirmed') {
                        const list = col.cardIds;
                        const len = Array.isArray(list) ? list.length : (list?.length ?? 0);
                        if (len > 0) return true;
                    }
                }
                return false;
            })();
            if (flightInfo || hasItineraryDays) {
                setPendingDestinationDrop({
                    activeId: String(activeId),
                    draggedCard,
                    targetColumnId
                });
                setShowConfirm(true);
                setActiveDragItem(null);
                return; // 이동 중단, confirm 대기
            }

            addToast('여행지 후보가 나타납니다.', 'info');

            // 항공편 없이 여행지를 빼면 0일차 카드도 제거
            const day0Col = (columns as any).get('day0');
            if (day0Col) {
                const list = day0Col.cardIds;
                const day0CardIds: string[] = Array.isArray(list) ? list : (list?.toArray ? list.toArray() : []);
                [...day0CardIds].forEach((cardId: string) => {
                    removeCardFromTimeline({ cardId, sourceColumnId: 'day0' });
                });
            }
        }

        if (sourceColumnId === 'inbox' && targetColumnId !== 'inbox') {
            // ❌ (기존) targetIndex 없으면 맨 아래로 강제 → 드롭 위치가 무시되던 원인. 주석 처리.
            // let finalTargetIndex = targetIndex;
            // if (typeof targetIndex !== 'number') {
            //     const targetCol = (columns as any).get(targetColumnId);
            //     finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
            // }
            // ✅ 드롭한 카드 위치(targetIndex)에 그대로 삽입.
            //    빈 영역에 드롭하면 targetIndex=undefined → 뮤테이션이 맨 뒤에 push (기존 동작 유지).
            copyCardToTimeline({ originalCardId: activeId, targetColumnId, targetIndex });
        } else if (sourceColumnId !== 'inbox' && targetColumnId === 'inbox') {
            // 도시간 항공편 메타 카드 → 자식 항공 카드까지 cascade 삭제 (메타 자체도 제거)
            if (typeof activeId === 'string' && activeId.startsWith('intercity-flight-')) {
                removeIntercityFlightGroup(String(activeId));
            } else {
                removeCardFromTimeline({ cardId: activeId, sourceColumnId });
                // 보관함에서 해당 카테고리 활성화
                if (draggedCard?.category) {
                    setActiveCategory(draggedCard.category as CategoryType);
                }
            }
        } else if (sourceColumnId !== 'inbox' && targetColumnId !== 'inbox') {
            if (sourceColumnId === targetColumnId) {
                if (typeof targetIndex === 'number' && oldIndex !== targetIndex) reorderCard({ columnId: sourceColumnId, oldIndex, newIndex: targetIndex });
            } else {
                // destination-header로 이동하는 경우, 기존 카드가 있으면 먼저 제거
                if (targetColumnId === 'destination-header') {
                    const destCol = (columns as any).get('destination-header');
                    if (destCol && destCol.cardIds.length >= 1) {
                        const existingCardId = destCol.cardIds[0];
                        removeCardFromTimeline({ cardId: existingCardId, sourceColumnId: 'destination-header' });
                    }
                    addToast('항공편을 등록하세요.', 'info');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                        setInboxState('closed');
                    }
                }

                // 맨 뒤에 추가: targetIndex가 없으면 기존 카드 개수를 사용
                let finalTargetIndex = targetIndex;
                if (typeof targetIndex !== 'number') {
                    const targetCol = (columns as any).get(targetColumnId);
                    finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
                }

                moveCard({ cardId: activeId, targetColumnId, targetIndex: finalTargetIndex });
            }
        }

        // 모든 경우에 드래그 상태 초기화
        setActiveDragItem(null);
    };

    // Confirm handlers for destination change
    const handleConfirmDestinationChange = () => {
        setShowConfirm(false);

        if (!pendingDestinationDrop) return;

        const { activeId, targetColumnId } = pendingDestinationDrop;

        // day 컬럼의 카드들을 직접 삭제 (cleanupFlightAndDays는 컬럼만 삭제하고
        // 카드 객체는 orphan으로 남기므로, 사용자 의도(완전 초기화)에 맞게 직접 정리)
        if (columns) {
            for (const col of (columns as any).values()) {
                if (/^day\d+$/.test(col.id)) {
                    const list = col.cardIds;
                    const cardIds: string[] = Array.isArray(list) ? list : (list?.toArray ? list.toArray() : []);
                    [...cardIds].forEach((cardId: string) => {
                        removeCardFromTimeline({ cardId, sourceColumnId: col.id });
                    });
                }
            }
        }

        // 항공편/일정 리셋
        cleanupFlightAndDays();

        // 카드 이동 (destination-header → targetColumnId)
        moveCard({ cardId: activeId, targetColumnId, targetIndex: 0 });

        setPendingDestinationDrop(null);
    };

    const handleCancelDestinationChange = () => {
        setShowConfirm(false);
        setPendingDestinationDrop(null);
        // 아무것도 안 함 → destination-header에 기존 카드 유지
    };

    if (!columns || !cards) return <LoadingSkeleton />;

    // useStorage로 직접 inboxCards를 가져와서 반응형 업데이트 활성화.
    // shallow compare 두 번째 인자 — 배열 내용(id 순서, 각 카드 immutable reference)이 동일하면 이전 배열 유지.
    // 다른 컬럼(day1, day2 등) 카드 변경 시 selector 는 재실행되지만 결과 shallow 동일 → reference 유지 →
    //  Inbox(memo)가 불필요 리렌더 안 함. 배열 내용은 이전과 완전 동일 → 표시 동작 100% 유지.
    const inboxCards = useStorage(
        (root) => {
            const inboxCol = (root.columns as any)?.get("inbox");
            if (!inboxCol) return [];
            const cardIds = inboxCol.cardIds || [];
            return cardIds.map((id: string) => (root.cards as any)?.get(id)).filter(Boolean);
        },
        (prev, curr) => {
            if (prev === curr) return true;
            if (!prev || !curr) return false;
            if (prev.length !== curr.length) return false;
            for (let i = 0; i < prev.length; i++) {
                if (prev[i] !== curr[i]) return false;
            }
            return true;
        }
    );

    // ── AI 플래너: 배치 실행 ──────────────────────────────
    // 실제 적용(복사 배치). 패널 닫고 토스트로 결과 안내.
    const doApplyAiPlan = (plan: any, mode: 'replace' | 'append', warnings: string[] = []) => {
        const placed = applyPlan(plan, { mode });
        setPendingAiPlan(null);
        setAiPanelOpen(false);
        aiChat.markApplied();
        let msg = placed > 0 ? `${placed}개 카드를 일정에 배치했어요.` : '배치할 카드가 없었어요.';
        const unassigned = Array.isArray(plan?.unassigned) ? plan.unassigned.length : 0;
        if (unassigned > 0) msg += ` 남은 카드 ${unassigned}개는 인박스에 그대로 있어요.`;
        addToast(msg, 'info');
    };

    // 요약 확인 → (여행지 카탈로그로) generate 호출 → (기존 일차 있으면) 추가/새로 모달
    const handleAiGenerate = async (req: any) => {
        const destEng = (destinationCard as any)?.city;
        if (!destEng) {
            addToast('먼저 최종 여행지를 선택해주세요.', 'warning');
            return;
        }

        // 편집 모드 판정 — 모델의 intent 플래그에만 의존하지 않는다(flash 가 자주 누락).
        // 이미 일차 카드가 있으면 "기본이 편집(추가)": 모델이 명시적으로 'create'(=처음부터 새로)를
        // 낼 때만 전체 새 일정으로 간주. → 추가 요청이 전체 재생성+append 로 카드가 두 배 되는 문제 방지.
        const hasExistingPlan = !!aiCurrentPlan?.days?.some((d) => d.items.length > 0);

        // 장소 교체(swap) 판정 — 모델 intent 에만 의존하지 않고 "바꿀 대상이 현재 일정에 실제로 있는지"로 결정.
        // (긴 대화로 intent 가 오염돼도, swapTo 가 있고 바꿀 대상이 현재 일정에 존재하면 교체로 처리)
        if (hasExistingPlan && req?.swapTo && req?.intent !== 'create') {
            const items = aiCurrentPlan!.days.flatMap((d) => d.items);
            // swapFrom 없으면: swapCategory 의 장소가 현재 일정에 하나뿐일 때 자동 추론
            let fromName: string | undefined = req.swapFrom || undefined;
            if (!fromName) {
                const pool = req.swapCategory ? items.filter((i) => i.category === req.swapCategory) : items;
                const distinct = [...new Set(pool.map((i) => i.name))];
                if (distinct.length === 1) fromName = distinct[0];
            }
            const fromExists = !!fromName && items.some((i) => i.name === fromName);

            if (fromName && fromExists) {
                setAiBusy(true);
                try {
                    const res = await fetch('/api/ai-planner', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phase: 'swap', destinationEngName: destEng, destinationName: aiDestinationName, swapTo: req.swapTo, swapCategory: req.swapCategory }),
                    });
                    const data = await res.json();
                    if (!res.ok || data.error || !data.place) {
                        addToast(data.error || '장소 교체에 실패했어요.', 'warning');
                        return;
                    }
                    const swapped = swapPlace(fromName, data.place);
                    aiChat.markApplied();
                    setAiPanelOpen(false);
                    addToast(swapped > 0 ? `'${fromName}' → '${req.swapTo}'(으)로 변경했어요.` : '바꿀 기존 장소를 찾지 못했어요.', swapped > 0 ? 'info' : 'warning');
                } catch {
                    addToast('장소 교체 중 오류가 발생했어요.', 'warning');
                } finally {
                    setAiBusy(false);
                }
                return;
            }

            // swapTo 는 있는데 바꿀 대상을 현재 일정에서 못 찾음(이미 바뀜/이름 불일치 등):
            // 명시적 교체 의도면 전체 재생성으로 빠지지 않도록 안내 후 중단.
            if (req?.intent === 'swap') {
                addToast('바꿀 장소를 현재 일정에서 찾지 못했어요. 다시 말씀해 주세요.', 'warning');
                return;
            }
            // 그 외(stale swap 필드 + 편집 의도 등)는 아래 일반 흐름으로 진행
        }

        const editing = hasExistingPlan && req?.intent !== 'create';

        setAiBusy(true);
        try {
            const res = await fetch('/api/ai-planner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phase: 'generate',
                    destinationEngName: destEng,
                    destinationName: aiDestinationName,
                    requirements: req,
                    currentPlan: editing ? aiCurrentPlan : undefined,
                }),
            });
            const data = await res.json();
            if (!res.ok || data.error) {
                addToast(data.error || '배치 생성에 실패했어요.', 'warning');
                return;
            }
            const plan = data.plan;

            // 편집 모드: 추가분만 그대로 append (기존 카드 보존, 모달 없이 바로 반영)
            if (data.edit) {
                if (data.empty || !plan?.days?.length) {
                    addToast('추가할 만한 장소를 찾지 못했어요. 조금 더 구체적으로 말씀해 주세요.', 'info');
                    return;
                }
                doApplyAiPlan(plan, 'append', data.warnings || []);
                return;
            }

            if (!plan?.days?.length) {
                addToast('배치할 일정을 만들지 못했어요. 대화로 조건을 조금 더 알려주세요.', 'warning');
                return;
            }

            // 기존 일차(day1+)에 카드가 있으면 추가/새로 물어보기
            const hasDayCards = (() => {
                for (let i = 1; i <= 30; i++) {
                    const col = (columns as any)?.get(`day${i}`);
                    if (!col) continue;
                    const ids = col.cardIds || [];
                    if ((ids.length ?? 0) > 0) return true;
                }
                return false;
            })();

            if (hasDayCards) {
                setPendingAiPlan({ plan, warnings: data.warnings || [] });
            } else {
                doApplyAiPlan(plan, 'replace', data.warnings || []);
            }
        } catch {
            addToast('배치 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.', 'warning');
        } finally {
            setAiBusy(false);
        }
    };

    // 여행지 미정 → 시기·취향으로 도시 추천 → "여행지 후보" 컬럼에 카드로 담기 (사용자가 최종여행지로 올려 확정)
    const handleAiRecommend = async (req: any) => {
        setAiBusy(true);
        try {
            const res = await fetch('/api/ai-planner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phase: 'recommend-destination', requirements: req }),
            });
            const data = await res.json();
            if (!res.ok || data.error) {
                addToast(data.error || '여행지 추천에 실패했어요.', 'warning');
                return;
            }
            const dests: any[] = Array.isArray(data.destinations) ? data.destinations : [];
            if (!dests.length) {
                addToast('추천할 여행지를 찾지 못했어요. 조건을 조금 더 알려주세요.', 'warning');
                return;
            }

            const candCol = (columns as any)?.get('destination-candidates');
            const startIndex = candCol?.cardIds?.length ?? 0;
            dests.forEach((d, i) => {
                createCardToColumn({
                    title: d.name,           // 표시 = 한글 도시명
                    text: d.name,
                    category: 'destination',
                    type: 'travel',
                    city: d.engName,         // 식별자 = engName (승격 후 배치 모드 연결)
                    month: req?.month || undefined,
                    timezone: d.timezone,
                    description: d.reason || d.desc || '',
                    imageUrl: d.imageUrl || '',
                    targetColumnId: 'destination-candidates',
                    targetIndex: startIndex + i,
                });
            });

            setAiPanelOpen(false);
            addToast(`여행지 후보에 ${dests.length}곳을 담았어요. 마음에 드는 곳을 최종 여행지로 올려 확정해주세요.`, 'info');
        } catch {
            addToast('추천 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.', 'warning');
        } finally {
            setAiBusy(false);
        }
    };

    return (
        <AnchorContext.Provider value={anchorContextValue}>
            <IntercityFlightContext.Provider value={intercityFlightContextValue}>
                <IntercityMoveContext.Provider value={intercityMoveContextValue}>
                    {showSessionExpired && (
                        <SessionExpiredModal onClose={() => setShowSessionExpired(false)} />
                    )}
                    {!online && <OfflineModal />}
            {showConnectionLost && <ConnectionLostModal />}
                    <DndContext
                        sensors={sensors}
                        collisionDetection={customCollisionDetection}
                        onDragStart={canEdit ? handleDragStart : undefined}
                        onDragEnd={canEdit ? handleDragEnd : undefined}
                        onDragMove={canEdit ? handleDragMove : undefined}
                    >
                        <style>{`
        body { overscroll-behavior-y: none; background-color: #ffffff; overflow: hidden; }
        * { touch-action: manipulation; }
        .custom-scrollbar { overflow-y: auto; overscroll-behavior-y: contain; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #E2E8F0; }
      `}</style>

                        <div className="h-screen w-full flex flex-col bg-white font-sans text-slate-700 overflow-hidden">
                            <DashboardHeader title={projectTitle} rightSlot={<UserAvatarMenu shareUrl={publicUrl} roomId={roomId} addToast={addToast} />} />
                            <div ref={containerRef} className="w-full flex-1 min-h-0 max-w-6xl mx-auto bg-white flex flex-col border-x border-gray-100 shadow-xl relative overflow-hidden" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
                                <LiveCursors />

                                {/* Confirm Dialog */}
                                {showConfirm && (
                                    <Confirm
                                        onConfirm={handleConfirmDestinationChange}
                                        onCancel={handleCancelDestinationChange}
                                    >
                                        {flightInfo
                                            ? '항공편 정보가 있습니다. 항공편과 일정이 리셋됩니다.'
                                            : '작성한 일정이 초기화됩니다.'}
                                        <br />
                                        변경하시겠습니까?
                                    </Confirm>
                                )}

                                <div
                                    ref={floatingBtnRef}
                                    data-tour="ai"
                                    className="md:hidden fixed z-50 w-14 h-14 rounded-2xl flex items-center justify-center cursor-grab active:cursor-grabbing touch-none active:scale-95 transition-transform bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/40 ring-1 ring-white/50"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                    onTouchMove={handleTouchMove}
                                >
                                    {/* AI 플래너 진입 — 은은한 광택 + 원래 크기 반짝임 위에 "AI" 겹치기 */}
                                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-white/25 pointer-events-none" />
                                    <span className="relative flex items-center justify-center">
                                        <Sparkles className="absolute w-8 h-8 text-white/45" strokeWidth={1.6} fill="currentColor" fillOpacity={0.2} />
                                        <span className="relative text-white font-extrabold text-base tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">AI</span>
                                    </span>
                                </div>

                                {/* AI 플래너 패널 (모바일) — 인박스와 무관한 최상위 독립 팝업 */}
                                <AiAssistantPanel
                                    open={aiPanelOpen}
                                    onClose={() => setAiPanelOpen(false)}
                                    containerClassName="fixed inset-0 z-[70] flex md:hidden"
                                    mobile
                                    controller={aiChat}
                                    onGenerate={handleAiGenerate}
                                    onRecommend={handleAiRecommend}
                                    busy={aiBusy}
                                />


                                <main className="flex-1 flex overflow-hidden relative">
                                    <Sidebar
                                        destinationCard={destinationCard}
                                        flightInfo={flightInfo as any}
                                        activeDay={activeDay}
                                        onDayClick={scrollToDay}
                                        onFlightRegisterClick={() => {
                                            // TODO: Open flight modal
                                        }}
                                        addToast={addToast}
                                        columns={columns as any}
                                    />

                                    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">

                                        <section className="w-full h-full md:w-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative flex flex-col scrollbar-trigger">

                                            {/* 🎯 Fixed Destination Header - No Scroll */}
                                            <div data-tour="destination" className="shrink-0 bg-white border-b border-gray-200 h-[100px]">
                                                <Timeline columns={columns} cards={cards} addToast={addToast} sections={['destination-header']} canEdit={canEdit} roomId={roomId} projectTitle={projectTitle} />
                                            </div>

                                            {/* 📜 Scrollable Main Timeline */}
                                            <div ref={timelineScrollRef} className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                                                <Timeline columns={columns} cards={cards} addToast={addToast} sections={['candidates', 'days']} canEdit={canEdit} />
                                            </div>
                                        </section>

                                        {/* 📱 모바일 우측 드롭존 — 타임라인 카드: 삭제 / 그 외(인박스·picker·shared): 변경 없이 인박스만 재오픈 (사실상 취소) */}
                                        {activeDragItem && (
                                            <RightDeleteZone isActive={isDeleteZoneActive} inboxOpen={inboxState === 'open'} />
                                        )}

                                        {/* 모바일 우측 토글 버튼 (드래그 중이 아닐 때 항상 표시 — 양방향 개폐) */}
                                        {!activeDragItem && (
                                            <button
                                                onClick={toggleInbox}
                                                data-tour="inbox-toggle"
                                                aria-label={inboxState === 'closed' ? '보관함 열기' : '보관함 닫기'}
                                                className="md:hidden fixed right-0 top-[62%] -translate-y-1/2 z-[60] w-8 h-20 rounded-l-lg bg-emerald-500 text-white shadow-lg flex flex-col items-center justify-center gap-1 active:bg-emerald-600 transition-colors"
                                            >
                                                {inboxState === 'closed' ? (
                                                    <>
                                                        <ChevronLeft className="w-4 h-4" />
                                                        <Package className="w-4 h-4" />
                                                    </>
                                                ) : (
                                                    <ChevronRight className="w-5 h-5" />
                                                )}
                                            </button>
                                        )}

                                        {/* 모바일 인박스 잠금 토글 (인박스 열렸을 때만, 우측 토글 바로 아래) */}
                                        {inboxState === 'open' && !activeDragItem && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const next = !isInboxLocked;
                                                    setIsInboxLocked(next);
                                                    addToast(next ? '인박스를 고정합니다.' : '카드를 드래그할때 인박스가 닫힙니다', 'info');
                                                }}
                                                aria-label={isInboxLocked ? '인박스 고정 해제' : '인박스 고정'}
                                                title={isInboxLocked ? '드래그해도 인박스 유지 중 (탭하면 해제)' : '드래그 시 인박스 자동 닫힘 (탭하면 고정)'}
                                                className={`md:hidden fixed right-0 top-[calc(62%+44px)] z-[60] w-8 h-12 rounded-l-lg shadow-lg flex items-center justify-center transition-colors ${isInboxLocked ? 'bg-emerald-500 text-white active:bg-emerald-600' : 'bg-white text-slate-400 border border-r-0 border-slate-200 active:bg-slate-50'}`}
                                            >
                                                {isInboxLocked ? <Lock className="w-4 h-4" /> : <LockOpen className="w-4 h-4" />}
                                            </button>
                                        )}

                                        <div
                                            className={`
                            fixed top-0 right-0 bottom-0 z-50 w-full h-[100dvh] bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.15)] flex flex-col
                            ${activeDragItem ? '' : 'transition-transform duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]'}
                            ${getInboxSlideClass()}
                            md:static md:z-auto md:shadow-none md:w-1/2 md:h-full md:bg-gray-50 md:translate-x-0 scrollbar-trigger
                            ${isKeyboardVisible && inboxState === 'closed' ? 'hidden md:flex' : ''}
                        `}
                                        >
                                            <div className="flex-1 flex flex-col min-h-0 bg-gray-50 md:bg-transparent">
                                                <Inbox
                                                    cards={inboxCards}
                                                    activeCategory={activeCategory}
                                                    setActiveCategory={setActiveCategory}
                                                    activeDragItem={activeDragItem}
                                                    onCreateCard={handleCreateCard}
                                                    onRemoveCard={handleInboxRemoveCard}
                                                    destinationCard={destinationCard}
                                                    flightInfo={flightInfo}
                                                    canEdit={canEdit}
                                                    roomId={roomId}
                                                    subCities={subCities}
                                                    aiPanelOpen={aiPanelOpen}
                                                    onOpenAiPanel={() => setAiPanelOpen(true)}
                                                    onCloseAiPanel={() => setAiPanelOpen(false)}
                                                    aiController={aiChat}
                                                    onAiGenerate={handleAiGenerate}
                                                    onAiRecommend={handleAiRecommend}
                                                    aiBusy={aiBusy}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </main>

                                <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]} style={dragOverlayWidth ? { width: dragOverlayWidth } : undefined}>
                                    <DraggedCardOverlay
                                        activeDragItem={activeDragItem}
                                        activeDragSourceColumn={activeDragSourceColumn}
                                    />
                                </DragOverlay>
                            </div>
                        </div>
                    </DndContext >

                    {/* AI 배치 방식 선택 (기존 일차에 카드가 있을 때) */}
                    {pendingAiPlan && (
                        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 flex flex-col gap-3">
                                <h3 className="font-bold text-slate-800 text-lg">일정을 어떻게 배치할까요?</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    이미 일차에 카드가 있어요. 기존 일정에 이어붙일지, 새로 만들지 선택하세요.
                                </p>
                                <div className="flex flex-col gap-2 mt-1">
                                    <button
                                        type="button"
                                        onClick={() => doApplyAiPlan(pendingAiPlan.plan, 'append', pendingAiPlan.warnings)}
                                        className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition"
                                    >
                                        기존에 추가
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => doApplyAiPlan(pendingAiPlan.plan, 'replace', pendingAiPlan.warnings)}
                                        className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition"
                                    >
                                        새로 생성
                                        <span className="block text-[11px] text-slate-400 font-normal mt-0.5">기존 일정 카드는 '확정되지 않은 일정'으로 이동돼요</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPendingAiPlan(null)}
                                        className="w-full py-2 text-slate-400 hover:text-slate-600 font-medium text-sm transition"
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 온보딩 코치마크 (실제 UI 요소를 스포트라이트로 안내) */}
                    {onboarding.active && (
                        <OnboardingTour steps={onboardingSteps} onFinish={handleOnboardingFinish} />
                    )}

                    {/* 토스트 메시지들 */}
                    <ToastContainer toasts={toasts} onClose={removeToast} position="bottom-center" />

                    {/* 도시간 항공편 등록 모달 — 메타 카드는 유지, 별도 항공 카드 2장 생성. 조건부 마운트로 청크 로드 지연 */}
                    {editingIntercityCardId && (
                        <IntercityFlightModal
                            isOpen={true}
                            onClose={() => setEditingIntercityCardId(null)}
                            onSave={handleSaveIntercityFlight}
                            defaultDate={editingIntercityDefaultDate}
                            currentCardId={editingIntercityCardId}
                            cards={cards}
                            destinationCard={destinationCard}
                            flightInfo={flightInfo}
                        />
                    )}

                    {/* 도시간 이동(육로) 등록 모달 — 도시명만 입력, 메타 카드의 targetCity 에 저장 */}
                    {editingMoveCardId && (
                        <IntercityMoveModal
                            isOpen={true}
                            onClose={() => setEditingMoveCardId(null)}
                            onSave={handleSaveIntercityMove}
                            currentCardId={editingMoveCardId}
                            cards={cards}
                            destinationCard={destinationCard}
                        />
                    )}
                </IntercityMoveContext.Provider>
            </IntercityFlightContext.Provider>
        </AnchorContext.Provider>
    );
}