"use client";

import { useStorage, useErrorListener } from "../liveblocks.config";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { AnchorContext } from "@/contexts/AnchorContext";
import { ExploreOverlayContext, type ExploreOverlayState } from "@/contexts/ExploreOverlayContext";
import { ExploreContent } from "@/components/explore/ExploreContent";
import { Mouse, ChevronLeft, ChevronRight, Package, Lock, LockOpen } from "lucide-react";
import { useRole } from "@/hooks/useRole";
import { useToast } from "@/hooks/useToast";
import { ToastContainer } from "@/components/common/ToastContainer";
import { useRouter, useSearchParams } from "next/navigation";
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
import { useExploreQueue } from "@/hooks/useExploreQueue";
import { useEntryCardSync } from "@/hooks/useEntryCardSync";
import { useDestinationSync } from "@/hooks/useDestinationSync";
import { useFloatingButton } from "@/hooks/useFloatingButton";
import { useBoardStorage } from "@/hooks/useBoardStorage";
import { LiveCursors } from "../components/board/LiveCursors";
import { SessionExpiredModal } from "@/components/auth/SessionExpiredModal";
import { ConnectionLostModal } from "@/components/auth/ConnectionLostModal";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";
import { useCardMutations } from "@/hooks/useCardMutations";
import { useMobileInbox } from "@/hooks/useMobileInbox";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";
import { usePresenceCursor } from "@/hooks/usePresenceCursor";
import { useAnchorLogic } from "@/hooks/useAnchorLogic";
import { useDragDrop } from "@/hooks/useDragDrop";
import { isPastDayColumn } from "@/utils/timeline";
import { findSourceColumn } from "@/utils/dnd";
import { buildPickerCardPayload } from "@/utils/pickerCardPayload";
import { validateDragDrop } from "@/utils/dragValidation";
import { Sidebar } from "@/components/board/Sidebar";
import { Confirm } from "@/components/board/Confirm";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

type CategoryType = "destination" | "preparation" | "flight" | "hotel" | "food" | "shopping" | "transport";

export function CollaborativeApp({ roomId, initialTitle }: { roomId: string; initialTitle: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showSessionExpired, setShowSessionExpired] = useState(false);
    const [showConnectionLost, setShowConnectionLost] = useState(false);
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
    const { canEdit, loading: roleLoading } = useRole(roomId);

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

    // 여행쇼핑 모달 오버레이 — 룸 위에 ExploreContent 띄움 (URL 변경 없이)
    const [exploreOverlay, setExploreOverlay] = useState<ExploreOverlayState | null>(null);
    const exploreOverlayContextValue = useMemo(() => ({ open: setExploreOverlay }), []);
    const overlayAnchor = useMemo(() => {
        const ac = exploreOverlay?.anchorCard;
        if (!ac?.coordinates) return null;
        return { lat: ac.coordinates.lat, lng: ac.coordinates.lng, title: ac.text || ac.title || '기준 카드' };
    }, [exploreOverlay]);

    const containerRef = useRef<HTMLDivElement>(null);
    const { throttledUpdateMyPresence, handlePointerMove, handlePointerLeave } = usePresenceCursor({
        containerRef,
        isMobileDragging,
        activeDragItem,
    });
    // Liveblocks cards 최신값 참조 (stale closure 방지)
    const cardsRef = useRef<any>(null);
    useEffect(() => { cardsRef.current = cards; }, [cards]);

    // /explore 에서 "여행보드로" 뒤로가기 시 ?inbox=<category> 받아 인박스 자동 펼침 + 카테고리 복원
    const inboxParamHandledRef = useRef(false);
    useEffect(() => {
        if (inboxParamHandledRef.current) return;
        const inboxParam = searchParams.get('inbox');
        if (!inboxParam) return;
        const validCategories = ['destination', 'preparation', 'flight', 'hotel', 'food', 'shopping', 'transport', 'tourspa', 'other'];
        if (validCategories.includes(inboxParam)) {
            setActiveCategory(inboxParam as CategoryType);
            if (typeof window !== 'undefined' && window.innerWidth < 768) {
                setInboxState('open');
            }
        }
        // URL 정리 (재진입/새로고침 시 깨끗하게)
        if (typeof window !== 'undefined') {
            window.history.replaceState({}, '', `/room/${roomId}`);
        }
        inboxParamHandledRef.current = true;
    }, [searchParams, roomId, setInboxState]);

    const { reorderCard, copyCardToTimeline, removeCardFromTimeline, moveCard, createCard, createCardToColumn } = useCardMutations();

    // createCard wrapper for debugging
    const handleCreateCard = (data: any) => {

        try {
            createCard(data);
        } catch (error) {
            console.error('❌ createCard 에러:', error);
        }
    };


    // 보드 스토리지 관리 (자동 복구 + 여행지 제거 시 cleanup)
    const { cleanupFlightAndDays } = useBoardStorage({ columns, addToast });

    // Explore에서 추가된 카드 큐 처리 (중복 체크 포함)
    useExploreQueue({ roomId, cardsRef, handleCreateCard, addToast });

    // 모바일 플로팅 버튼 (가짜 마우스 커서)
    const { floatingBtnRef, handleTouchStart, handleTouchMove, handleTouchEnd } = useFloatingButton({
        containerRef,
        inboxState,
        throttledUpdateMyPresence,
        setIsMobileDragging,
        setMobileCursorPos,
    });

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    const publicUrl = `${baseUrl}/room/${roomId}`;

    const destinationCard = useMemo(() => {
        const destCol = (columns as any)?.get('destination-header');
        if (!destCol || destCol.cardIds.length === 0) return null;
        const cardId = destCol.cardIds[0];
        return (cards as any)?.get(cardId) || null;
    }, [columns, cards]);

    // p1(입국심사) 카드 라이프사이클 + city 동기화
    const { setEntryCardCity } = useEntryCardSync({ canEdit, roleLoading, destinationCard });

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

    const handleDragEnd = (event: any) => {

        const { active, over } = event;

        setActiveDragItem(null);

        // 📱 모바일: 드래그 종료 후 인박스 이전 상태로 복원 (딜레이로 카드 안착 확인 후 열림)
        // (잠금 상태였으면 close/open 토글이 일어나지 않았으므로 복원 불필요)
        if (typeof window !== 'undefined' && window.innerWidth < 768 && !isInboxLocked) {
            setTimeout(() => {
                setInboxState(prevInboxStateRef.current);
            }, 500);
        }

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
        } else if (
            overId === 'tourspa-delete-zone' ||
            overId === 'etc-delete-zone' ||
            overId === 'shopping-delete-zone' ||
            overId === 'hotel-delete-zone' ||
            overId === 'food-delete-zone'
        ) {
            // Picker 카테고리별 삭제 영역 (투어&스파/기타/쇼핑/숙소/맛집): 카드 삭제
            const { sourceColumnId: foundColumnId } = findSourceColumn(activeId, columns);
            if (foundColumnId) {
                removeCardFromTimeline({ cardId: activeId, sourceColumnId: foundColumnId });
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
        // 단, picker/sample 카드는 예외 (Picker에서 오는 카드는 sourceColumnId가 없음)
        if (!sourceColumnId && !String(activeId).startsWith('picker-') && !String(activeId).startsWith('sample-')) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2.5: 지난 일차 제한
        // =========================================
        // 지난 일차 카드를 다른 컬럼으로 이동/삭제 시도
        if (sourceColumnId && isPastDayColumn(sourceColumnId, flightInfo) && targetColumnId !== sourceColumnId) {
            addToast('지난 일정의 카드는 이동하거나 삭제할 수 없어요.', 'warning');
            setActiveDragItem(null);
            return;
        }

        // 지난 일차로 카드 추가 시도
        if (isPastDayColumn(targetColumnId, flightInfo) && targetColumnId !== sourceColumnId) {
            addToast('지난 일정에는 카드를 추가할 수 없어요.', 'warning');
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
            // flightInfo가 있으면 confirm 창 띄우기
            if (flightInfo) {
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
            // 맨 뒤에 추가: targetIndex가 없으면 기존 카드 개수를 사용
            let finalTargetIndex = targetIndex;
            if (typeof targetIndex !== 'number') {
                const targetCol = (columns as any).get(targetColumnId);
                finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;
            }
            copyCardToTimeline({ originalCardId: activeId, targetColumnId, targetIndex: finalTargetIndex });
        } else if (sourceColumnId !== 'inbox' && targetColumnId === 'inbox') {
            removeCardFromTimeline({ cardId: activeId, sourceColumnId });
            // 보관함에서 해당 카테고리 활성화
            if (draggedCard?.category) {
                setActiveCategory(draggedCard.category as CategoryType);
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

    // useStorage로 직접 inboxCards를 가져와서 반응형 업데이트 활성화
    const inboxCards = useStorage((root) => {
        const inboxCol = (root.columns as any)?.get("inbox");
        if (!inboxCol) return [];

        const cardIds = inboxCol.cardIds || [];
        return cardIds.map((id: string) => (root.cards as any)?.get(id)).filter(Boolean);
    });



    return (
        <AnchorContext.Provider value={anchorContextValue}>
        <ExploreOverlayContext.Provider value={exploreOverlayContextValue}>
            {showSessionExpired && (
                <SessionExpiredModal onClose={() => setShowSessionExpired(false)} />
            )}
            {showConnectionLost && <ConnectionLostModal />}
            {exploreOverlay && (
                <div className="fixed inset-0 z-[9000] bg-white">
                    <ExploreContent
                        initialCity={exploreOverlay.city}
                        initialRegion={exploreOverlay.region}
                        initialCategory={exploreOverlay.category}
                        anchor={overlayAnchor}
                        onBack={(category) => {
                            setExploreOverlay(null);
                            setActiveCategory(category as CategoryType);
                            if (typeof window !== 'undefined' && window.innerWidth < 768) setInboxState('open');
                        }}
                    />
                </div>
            )}
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
                                항공편 정보가 있습니다. 항공편과 일정이 리셋됩니다.
                                <br />
                                변경하시겠습니까?
                            </Confirm>
                        )}

                        <div
                            ref={floatingBtnRef}
                            className="md:hidden fixed z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-grab active:cursor-grabbing touch-none active:scale-95"

                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onTouchMove={handleTouchMove}
                        >
                            <Mouse className="w-8 h-8 text-white fill-white/20 -rotate-12" strokeWidth={1.5} />
                        </div>


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
                                    <div className="shrink-0 bg-white border-b border-gray-200 h-[100px]">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['destination-header']} canEdit={canEdit} />
                                    </div>

                                    {/* 📜 Scrollable Main Timeline */}
                                    <div ref={timelineScrollRef} className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['candidates', 'days']} canEdit={canEdit} />
                                    </div>
                                </section>

                                {/* 📱 모바일 우측 드래그 삭제 드롭존 (타임라인 카드 드래그 중에만) */}
                                {activeDragItem && activeDragSourceColumn && activeDragSourceColumn !== 'inbox' && (
                                    <RightDeleteZone isActive={isDeleteZoneActive} />
                                )}

                                {/* 모바일 우측 토글 버튼 (드래그 중이 아닐 때 항상 표시 — 양방향 개폐) */}
                                {!activeDragItem && (
                                    <button
                                        onClick={toggleInbox}
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
                            ${isKeyboardVisible ? 'hidden md:flex' : ''}
                        `}
                                >
                                    <div className="flex-1 flex flex-col min-h-0 bg-gray-50 md:bg-transparent">
                                        <Inbox
                                            cards={inboxCards}
                                            activeCategory={activeCategory}
                                            setActiveCategory={setActiveCategory}
                                            activeDragItem={activeDragItem}
                                            onCreateCard={handleCreateCard}
                                            onRemoveCard={(cardId: string) => removeCardFromTimeline({ cardId, sourceColumnId: 'inbox' })}
                                            destinationCard={destinationCard}
                                            canEdit={canEdit}
                                            roomId={roomId}
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

            {/* 토스트 메시지들 */}
            <ToastContainer toasts={toasts} onClose={removeToast} position="bottom-center" />
        </ExploreOverlayContext.Provider>
        </AnchorContext.Provider>
    );
}
