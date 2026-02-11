"use client";

import { throttle } from "lodash";

import { useStorage, useMyPresence, useMutation } from "@liveblocks/react/suspense";
import { LiveList, LiveMap } from "@liveblocks/client";
import { useState, useRef, useEffect, useMemo } from "react";
import { Link as LinkIcon, Mouse, ChevronUp, ChevronDown, MapPin, Hotel, Bus, Train, Car } from "lucide-react";
import Link from "next/link";
import { DndContext, DragOverlay, useSensors, useSensor, MouseSensor, TouchSensor, pointerWithin, closestCenter, useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { supabase } from "@/lib/supabaseClient";

import { Inbox } from "../components/board/Inbox";
import { Timeline } from "../components/board/Timeline";
import { DraggableCard, renderCardInternal } from "../components/board/DraggableCard";
import { BaseCard } from "../components/board/cards/BaseCard";
import { TransportCard } from "../components/board/cards/TransportCard";
import { LiveCursors } from "../components/board/LiveCursors";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";
import { useCardMutations } from "@/hooks/useCardMutations";
import { Sidebar } from "@/components/board/Sidebar";
import { Confirm } from "@/components/board/Confirm";

type CategoryType = "destination" | "preparation" | "flight" | "hotel" | "food" | "shopping" | "transport";
type InboxStateType = 'closed' | 'half' | 'full';

export function CollaborativeApp({ roomId, initialTitle }: { roomId: string; initialTitle: string }) {
    const columns = useStorage((root) => root.columns);
    const cards = useStorage((root) => root.cards);
    const flightInfo = useStorage((root) => root.flightInfo);

    const [myPresence, updateMyPresence] = useMyPresence();

    const throttledUpdateMyPresence = useMemo(
        () => throttle((cursor: { x: number, y: number }) => {
            updateMyPresence({ cursor });
        }, 50),
        [updateMyPresence]
    );

    const [activeCategory, setActiveCategory] = useState<CategoryType>("destination");
    const [activeDragItem, setActiveDragItem] = useState<any>(null);
    const [activeDay, setActiveDay] = useState("day1");
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

    // 플로팅 버튼 Ref
    const floatingBtnRef = useRef<HTMLDivElement>(null);
    const cachedContainerRect = useRef<DOMRect | null>(null);

    const [inboxState, setInboxState] = useState<InboxStateType>('closed');
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'info' | 'warning' }>>([]);
    const toastIdRef = useRef(0);

    const containerRef = useRef<HTMLDivElement>(null);

    // Toast helper function
    const addToast = (message: string, type: 'info' | 'warning' = 'info') => {
        const id = toastIdRef.current++;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const { setNodeRef: setInboxClosedHeaderRef } = useDroppable({
        id: 'inbox-closed-header',
    });

    const { reorderCard, copyCardToTimeline, removeCardFromTimeline, moveCard, createCard, createCardToColumn } = useCardMutations();

    // Cleanup mutation: removes flight info and all Day 1+ columns when destination is removed
    const cleanupFlightAndDays = useMutation(({ storage }) => {
        // Delete flight info
        storage.delete('flightInfo');

        // Get columns and columnOrder
        const columnsMap = storage.get('columns') as LiveMap<string, any>;
        const columnOrderList = storage.get('columnOrder') as LiveList<string>;

        if (!columnsMap || !columnOrderList) return;

        // Find and remove all Day 1+ columns (day1, day2, day3, etc.)
        const orderArray = columnOrderList.toArray();
        const dayColumnsToRemove: string[] = [];

        for (let i = 0; i < orderArray.length; i++) {
            const colId = orderArray[i];
            // Match day1, day2, day3, etc. but NOT day0
            if (/^day[1-9]\d*$/.test(colId)) {
                dayColumnsToRemove.push(colId);
            }
        }

        // Remove from columns map
        dayColumnsToRemove.forEach(colId => {
            columnsMap.delete(colId);
        });

        // Remove from columnOrder (in reverse to maintain indices)
        for (let i = orderArray.length - 1; i >= 0; i--) {
            const colId = orderArray[i];
            if (dayColumnsToRemove.includes(colId)) {
                columnOrderList.delete(i);
            }
        }
    }, []);

    // 모바일 키보드 감지
    useEffect(() => {
        if (typeof window === 'undefined' || !window.visualViewport) return;

        const handleViewportChange = () => {
            const viewport = window.visualViewport;
            if (!viewport) return;

            // 키보드가 올라오면 viewport 높이가 줄어듦 (모바일)
            const viewportHeight = viewport.height;
            const windowHeight = window.innerHeight;
            const heightDiff = windowHeight - viewportHeight;

            // 높이 차이가 150px 이상이면 키보드가 올라온 것으로 판단
            setIsKeyboardVisible(heightDiff > 150);
        };

        window.visualViewport.addEventListener('resize', handleViewportChange);
        window.visualViewport.addEventListener('scroll', handleViewportChange);

        return () => {
            window.visualViewport?.removeEventListener('resize', handleViewportChange);
            window.visualViewport?.removeEventListener('scroll', handleViewportChange);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const containerWidth = Math.min(window.innerWidth, 1000);
            const initX = containerWidth - 80;
            const initY = window.innerHeight - 200;

            setMobileCursorPos({ x: initX, y: initY });

            if (floatingBtnRef.current) {
                floatingBtnRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0)`;
            }
        }
    }, []);

    const publicUrl = "https://bistred-nylah-subcrenately.ngrok-free.app";

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 15 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
    );

    const destinationCard = useMemo(() => {
        const destCol = (columns as any)?.get('destination-header');
        if (!destCol || destCol.cardIds.length === 0) return null;
        const cardId = destCol.cardIds[0];
        return (cards as any)?.get(cardId) || null;
    }, [columns, cards]);

    // Track previous destination card ID to detect removal
    const prevDestinationCardId = useRef<string | null>(null);

    // Cleanup flight info and Day columns when destination is removed
    useEffect(() => {
        const currentId = destinationCard?.id || null;
        const prevId = prevDestinationCardId.current;

        // Detect removal: had a destination before, now it's gone
        if (prevId && !currentId) {
            cleanupFlightAndDays();
        }

        // Update ref for next render
        prevDestinationCardId.current = currentId;
    }, [destinationCard, cleanupFlightAndDays]);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isMobileDragging) return;
        e.preventDefault();

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            // 드래그 중일 때는 cursor 업데이트 스킵 (draggingCardId 보존)
            if (!activeDragItem) {
                throttledUpdateMyPresence({ x, y });
            }
        }
    };

    const handlePointerLeave = () => {
        if (isMobileDragging) return;
        updateMyPresence({ cursor: null });
    };

    const handleFloatingButtonTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(true);
        if (containerRef.current) {
            cachedContainerRect.current = containerRef.current.getBoundingClientRect();
        }
    };

    const handleFloatingButtonTouchMove = (e: React.TouchEvent) => {
        e.stopPropagation();

        const touch = e.touches[0];
        const newX = touch.clientX - 28;
        const newY = touch.clientY - 28;

        if (floatingBtnRef.current) {
            floatingBtnRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        }

        if (containerRef.current) {
            // Use cached rect if available, otherwise fallback
            const rect = cachedContainerRect.current || containerRef.current.getBoundingClientRect();
            const containerWidth = rect.width;
            const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
            const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

            let relativeX = touch.clientX - rect.left;
            const relativeY = touch.clientY - rect.top;

            const isMobile = windowWidth < 768;
            const inboxTopThreshold = inboxState === 'half' ? windowHeight * 0.5 : (inboxState === 'full' ? 0 : windowHeight);
            const isOverMobileInbox = isMobile && inboxState !== 'closed' && touch.clientY > inboxTopThreshold;

            if (isOverMobileInbox) {
                const normalizedX = touch.clientX / windowWidth;
                relativeX = (containerWidth / 2) + (normalizedX * (containerWidth / 2));
            }

            throttledUpdateMyPresence({ x: Math.round(relativeX), y: Math.round(relativeY) });
        }
    }
    const handleFloatingButtonTouchEnd = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsMobileDragging(false);
        cachedContainerRect.current = null;

        if (floatingBtnRef.current) {
            const transform = floatingBtnRef.current.style.transform;
            const match = transform.match(/translate3d\(([^p]+)px,\s*([^p]+)px/);
            if (match) {
                setMobileCursorPos({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
            }
        }
    };

    const handleDragStart = (event: any) => {
        const card = event.active.data.current;
        setActiveDragItem(card);
        if (card && card.category) setActiveCategory(card.category as CategoryType);
    };

    // 커스텀 충돌 감지: 모바일 닫힌 보관함 특별 처리
    const customCollisionDetection = (args: any) => {
        // 🎯 **PRIORITY 1**: destination-header - 중앙 영역만 감지
        const pointerCoords = args.pointerCoordinates;
        if (pointerCoords) {
            const destHeaderContainer = args.droppableContainers.find(
                (container: any) => container.id === 'destination-header'
            );
            if (destHeaderContainer && destHeaderContainer.rect.current) {
                const rect = destHeaderContainer.rect.current;

                // 중앙 80% 영역만 드롭존으로 인정 (좌우 10%씩 여백)
                const margin = (rect.right - rect.left) * 0.1;
                const centerLeft = rect.left + margin;
                const centerRight = rect.right - margin;

                // 포인터가 destination-header 중앙 영역 안에 있는지 확인
                if (
                    pointerCoords.x >= centerLeft &&
                    pointerCoords.x <= centerRight &&
                    pointerCoords.y >= rect.top &&
                    pointerCoords.y <= rect.bottom
                ) {
                    return [{ id: destHeaderContainer.id, data: destHeaderContainer.data }];
                }
            }
        }

        // 모바일이고 보관함이 닫혀있을 때
        if (typeof window !== 'undefined' && window.innerWidth < 768 && inboxState === 'closed') {
            if (pointerCoords) {
                const windowHeight = window.innerHeight;
                // 하단 80px 영역 (닫힌 보관함)
                if (pointerCoords.y > windowHeight - 80) {
                    // droppableContainers에서 inbox-closed-header 찾기
                    const inboxContainer = args.droppableContainers.find(
                        (container: any) => container.id === 'inbox-closed-header'
                    );
                    if (inboxContainer) {
                        return [{ id: inboxContainer.id, data: inboxContainer.data }];
                    }
                }
            }
        }

        const pointerCollisions = pointerWithin(args);
        if (pointerCollisions.length > 0) {
            return pointerCollisions;
        }
        return closestCenter(args);
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        setActiveDragItem(null);

        if (!over || !columns) return;

        const activeId = active.id;
        const overId = over.id;
        const draggedCard = active.data.current;

        let targetColumnId = null;
        let targetIndex = undefined;

        if (overId === 'destination-candidates-timeline') {
            targetColumnId = 'destination-candidates';
        } else if (overId === 'destination-header') {
            targetColumnId = 'destination-header';
        } else if (overId === 'inbox-closed-header') {
            // 닫힌 보관함 헤더에 드롭하면 보관함으로 이동
            targetColumnId = 'inbox';
        } else if (String(overId).includes('timeline')) {
            targetColumnId = String(overId).replace('-timeline', '');
        } else if (overId === 'inbox-dropzone') {
            targetColumnId = 'inbox';
        } else {
            for (const col of (columns as any).values()) {
                const list = col.cardIds;
                const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
                const idx = cardIdsArray.indexOf(String(overId));
                if (idx !== -1) { targetColumnId = col.id; targetIndex = idx; break; }
            }
        }

        if (!targetColumnId) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 2: sourceColumnId 찾기 (어디서 드래그했는지)
        // =========================================
        let sourceColumnId = null;
        let oldIndex = -1;
        for (const col of (columns as any).values()) {
            const list = col.cardIds;
            const cardIdsArray = Array.isArray(list) ? list : (list.toArray ? list.toArray() : []);
            const idx = cardIdsArray.indexOf(activeId);
            if (idx !== -1) { sourceColumnId = col.id; oldIndex = idx; break; }
        }

        // sourceColumnId를 찾지 못하면 (유효하지 않은 드래그) 중단
        // 단, picker 카드는 예외 (DestinationPicker에서 오는 카드는 sourceColumnId가 없음)
        if (!sourceColumnId && !String(activeId).startsWith('picker-')) {
            setActiveDragItem(null);
            return;
        }

        // =========================================
        // STEP 3: 카테고리별 검증 (올바른 카드 타입인지)
        // =========================================

        // 최종 여행지(destination-header)에는 도시 카드만, 딱 1개만 허용
        if (targetColumnId === 'destination-header') {
            if (draggedCard?.category !== 'destination') {
                addToast('여행지 카드만 넣을 수 있습니다.', 'warning');
                setActiveDragItem(null);
                return;
            }

            // 🔥 CRITICAL: self-drop 체크 (같은 위치에 드롭)
            if (sourceColumnId === 'destination-header') {
                setActiveDragItem(null);
                return;
            }

            // 기존 카드가 있으면 자동으로 교체 (self-drop이 아닌 경우만)
            const destCol = (columns as any).get('destination-header');
            if (destCol && destCol.cardIds.length >= 1) {
                const existingCardId = destCol.cardIds[0];
                removeCardFromTimeline({ cardId: existingCardId, sourceColumnId: 'destination-header' });
            }
        }

        // Picker 카드 처리: DestinationPicker 또는 AccommodationPicker에서 드래그
        if (String(activeId).startsWith('picker-')) {
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
                    addToast('여행지가 등록되어 여행지 후보는 사라집니다.', 'info');
                }

                return;
            }

            // Hotel Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'hotel' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    accommodationType: draggedCard.accommodationType,
                    checkInTime: draggedCard.checkInTime,
                    checkOutTime: draggedCard.checkOutTime,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    description: draggedCard.description,
                    tags: draggedCard.tags,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // Transport Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'transport' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    text: draggedCard.text,
                    title: draggedCard.title,
                    category: draggedCard.category,
                    transportationType: draggedCard.transportationType,
                    city: draggedCard.city,
                    description: draggedCard.description,
                    priceRange: draggedCard.priceRange,
                    availability: draggedCard.availability,
                    features: draggedCard.features,
                    appRequired: draggedCard.appRequired,
                    appName: draggedCard.appName,
                    icon: draggedCard.icon,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }
        }


        if (targetColumnId === 'day0') {
            if (draggedCard?.category !== 'preparation') {
                addToast('여행준비에는 여행준비 카드만 들어갑니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 항공 섹션에는 항공 카드만
        if (targetColumnId === 'flights') {
            if (draggedCard?.category !== 'flight') {
                addToast('항공에는 항공 카드만 들어걡니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 여행지 후보에는 여행지 카드만
        if (targetColumnId === 'destination-candidates') {
            if (draggedCard?.category !== 'destination') {
                addToast('여행지 후보에는 여행지 카드만 들어갑니다.', 'warning');
                setActiveDragItem(null);
                return;
            }
        }

        // 도시(destination) 카드는 여행지 후보, 최종 여행지, 보관함에만 드롭 가능
        if (draggedCard?.category === 'destination') {
            if (targetColumnId !== 'destination-candidates' && targetColumnId !== 'destination-header' && targetColumnId !== 'inbox') {
                setActiveDragItem(null);
                return;
            }
        }

        // 🎯 항공카드는 원래 일차에만 머물러야 함 (다른 일차, Inbox, 최종여행지 등으로 이동 불가)
        if (draggedCard?.category === 'flight') {
            // sourceColumnId가 day1, day2 등인지 확인
            const isDayColumn = sourceColumnId && /^day[1-9]\d*$/.test(sourceColumnId);

            if (isDayColumn) {
                // 같은 일차 내에서만 재정렬 허용, 다른 곳으로 이동 시도 시 차단
                if (targetColumnId !== sourceColumnId) {
                    addToast('항공카드는 다른 위치로 이동할 수 없습니다.', 'warning');
                    setActiveDragItem(null);
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
                    addToast('여행지가 등록되어 여행지 후보는 사라집니다.', 'info');
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

    const scrollToDay = (dayId: string) => {
        setActiveDay(dayId);
        const element = document.getElementById(`${dayId}-section`);
        if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };

    const getInboxHeightClass = () => {
        switch (inboxState) {
            case 'closed': return 'h-[80px]';
            case 'half': return 'h-[50vh]';
            case 'full': return 'h-[100dvh] top-0 rounded-none';
            default: return 'h-[80px]';
        }
    };

    const handleInboxResize = (direction: 'up' | 'down') => {
        if (direction === 'up') {
            if (inboxState === 'closed') setInboxState('half');
            else if (inboxState === 'half') setInboxState('full');
        } else {
            if (inboxState === 'full') setInboxState('half');
            else if (inboxState === 'half') setInboxState('closed');
        }
    };

    // Confirm handlers for destination change
    const handleConfirmDestinationChange = () => {
        setShowConfirm(false);

        if (!pendingDestinationDrop) return;

        const { activeId, targetColumnId } = pendingDestinationDrop;

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

    const inboxCards = useMemo(() => (columns as any).get("inbox")?.cardIds.map((id: string) => (cards as any).get(id)).filter(Boolean) || [], [columns, cards]);



    return (
        <>
            <DndContext sensors={sensors} collisionDetection={customCollisionDetection} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <style>{`
        body { overscroll-behavior-y: none; background-color: #ffffff; }
        * { touch-action: manipulation; }
        .custom-scrollbar { overflow-y: auto; overscroll-behavior-y: contain; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #E2E8F0; }
      `}</style>

                <div className="h-screen w-full flex flex-col items-center bg-white font-sans text-slate-700 relative overflow-hidden">
                    <div ref={containerRef} className="w-full h-full max-w-[1000px] bg-white flex flex-col border-x border-gray-100 shadow-xl relative" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
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

                            onTouchStart={handleFloatingButtonTouchStart}
                            onTouchEnd={handleFloatingButtonTouchEnd}
                            onTouchMove={handleFloatingButtonTouchMove}
                        >
                            <Mouse className="w-8 h-8 text-white fill-white/20 -rotate-12" strokeWidth={1.5} />
                        </div>

                        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-10 shrink-0">
                            <div className="flex items-center gap-4">
                                <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-500 text-white font-black text-xl hover:bg-emerald-600 transition-all shadow-sm">M</Link>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-lg md:text-2xl tracking-tight text-slate-700 flex items-center gap-2">{projectTitle}</h1>
                                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-slate-400 mt-0.5">
                                        <LinkIcon className="w-3 h-3" />
                                        <span>초대 링크: </span>
                                        <span className="font-mono bg-emerald-50 text-emerald-600 px-1 rounded select-all cursor-pointer truncate max-w-[150px] md:max-w-none">{publicUrl}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white font-bold text-sm">나</div>
                                    <div className="w-8 h-8 rounded-full bg-rose-400 text-white flex items-center justify-center border-2 border-white font-bold text-sm">J</div>
                                </div>
                            </div>
                        </header>

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

                                <section className={`w-full h-full md:w-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white relative flex flex-col scrollbar-trigger ${inboxState === 'closed' ? 'pb-[80px] md:pb-0' :
                                    inboxState === 'half' ? 'pb-[50vh] md:pb-0' :
                                        'md:pb-0'
                                    }`}>

                                    {/* 🎯 Fixed Destination Header - No Scroll */}
                                    <div className="shrink-0 bg-white border-b border-gray-200 h-[100px]">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['destination-header']} />
                                    </div>

                                    {/* 📜 Scrollable Main Timeline */}
                                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                                        <Timeline columns={columns} cards={cards} addToast={addToast} sections={['candidates', 'days']} />
                                    </div>
                                </section>

                                <div
                                    className={`
                            fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-300 ease-out flex flex-col
                            md:static md:z-auto md:shadow-none md:rounded-none md:w-1/2 md:h-full md:bg-gray-50 scrollbar-trigger
                            ${isKeyboardVisible ? 'hidden md:flex' : ''}
                            ${getInboxHeightClass()}
                        `}
                                >
                                    <div
                                        className="md:hidden w-full min-h-[80px] flex items-center justify-center bg-white border-b border-gray-100 shrink-0 rounded-t-3xl relative"
                                    >
                                        {inboxState === 'closed' && (
                                            <div
                                                ref={setInboxClosedHeaderRef}
                                                onClick={() => setInboxState('half')}
                                                className={`w-full h-full flex items-center justify-between px-6 cursor-pointer rounded-t-3xl transition-all ${activeDragItem
                                                    ? 'bg-emerald-50 border-2 border-dashed border-emerald-400'
                                                    : 'active:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-1 flex-1">
                                                    <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                                                    <span className={`text-[10px] font-bold ${activeDragItem ? 'text-emerald-600' : 'text-gray-400'}`}>
                                                        {activeDragItem ? '여기에 놓으면 보관함으로 이동' : '보관함 열기'}
                                                    </span>
                                                </div>
                                                <ChevronUp className={`w-5 h-5 ${activeDragItem ? 'text-emerald-600' : 'text-gray-400'}`} />
                                            </div>
                                        )}

                                        {inboxState !== 'closed' && (
                                            <div className="w-full h-full flex items-center justify-between px-6">
                                                <button
                                                    onClick={() => handleInboxResize('down')}
                                                    className="p-2 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-full transition-colors"
                                                >
                                                    <ChevronDown className="w-5 h-5" />
                                                </button>

                                                <div className="flex flex-col items-center gap-1" onClick={() => handleInboxResize('down')}>
                                                    <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                                                    <span className="text-sm font-bold text-slate-700">보관함</span>
                                                </div>

                                                <button
                                                    onClick={() => handleInboxResize('up')}
                                                    disabled={inboxState === 'full'}
                                                    className={`p-2 rounded-full transition-colors ${inboxState === 'full' ? 'text-gray-200 cursor-default' : 'text-gray-400 hover:text-slate-700 hover:bg-gray-100'}`}
                                                >
                                                    <ChevronUp className="w-5 h-5" />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 overflow-hidden bg-gray-50 md:bg-transparent">
                                        <Inbox
                                            cards={inboxCards}
                                            activeCategory={activeCategory}
                                            setActiveCategory={setActiveCategory}
                                            activeDragItem={activeDragItem}
                                            onCreateCard={createCard}
                                            onRemoveCard={(cardId: string) => removeCardFromTimeline({ cardId, sourceColumnId: 'inbox' })}
                                            destinationCard={destinationCard}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>

                        <DragOverlay dropAnimation={null}>
                            {activeDragItem ? (
                                String(activeDragItem.id).startsWith('picker-hotel-') ? (
                                    // Hotel Picker 카드: BaseCard 스타일
                                    <div className="w-full max-w-md">
                                        <BaseCard
                                            colorClass="bg-rose-400"
                                            icon={Hotel}
                                            category={activeDragItem.accommodationType === 'resort' ? 'Resort' : 'Hotel'}
                                            className="h-[72px] shadow-xl"
                                        >
                                            <div className="flex flex-col justify-center w-full">
                                                <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">
                                                    {activeDragItem.title || "호텔 이름"}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
                                                        Check-in
                                                    </span>
                                                    <span className="text-[11px] text-gray-500">
                                                        {activeDragItem.checkInTime || "15:00"}
                                                    </span>
                                                    {activeDragItem.tags && activeDragItem.tags.length > 0 && (
                                                        <>
                                                            <span className="text-gray-300">|</span>
                                                            {activeDragItem.tags.slice(0, 3).map((tag: string, index: number) => (
                                                                <span key={index} className="text-[9px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </BaseCard>
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-transport-') ? (
                                    // Transport Picker 카드: TransportCard 스타일
                                    <div className="w-full max-w-md">
                                        <TransportCard card={activeDragItem} className="shadow-xl" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-') ? (
                                    // Destination Picker 도시 카드: 타임라인 compact 스타일 (72px 가로 배치)
                                    <div className="bg-white hover:bg-slate-50 border border-gray-100 flex items-center gap-0 relative h-[72px] min-w-[320px] transition-all overflow-hidden w-full rounded-lg shadow-xl">
                                        {/* Left: Image (Fixed 80px width) */}
                                        <div className="w-20 h-full relative flex items-center justify-center overflow-hidden shrink-0 border-r border-gray-50">
                                            {activeDragItem.imageUrl ? (
                                                <img
                                                    src={activeDragItem.imageUrl}
                                                    alt={activeDragItem.text}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-emerald-500 opacity-50" />
                                                </div>
                                            )}
                                            <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1 py-0.5 rounded shadow-sm z-10">
                                                추천
                                            </div>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="flex-1 min-w-0 flex flex-col justify-center h-full px-3 py-1">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <span className="font-bold text-slate-800 text-sm leading-none truncate pr-2">
                                                    {activeDragItem.text}
                                                </span>
                                                <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
                                                    여행지
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 line-clamp-1 leading-tight">
                                                {activeDragItem.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    // 일반 카드: Compact 스타일
                                    renderCardInternal(activeDragItem, { variant: 'compact' })
                                )
                            ) : null}
                        </DragOverlay>
                    </div>
                </div>
            </DndContext >


            {/* 토스트 메시지들 - 오른쪽 아래 스택 */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col-reverse gap-2">
                {toasts.map((toast, index) => (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-3 md:gap-4 pl-3 pr-4 md:pl-4 md:pr-5 py-2.5 md:py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300 ${toast.type === 'warning'
                            ? 'bg-rose-100 text-rose-800 border border-rose-300/50'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300/50'
                            }`}
                    >
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${toast.type === 'warning'
                            ? 'bg-rose-200 border border-rose-400/50'
                            : 'bg-emerald-200 border border-emerald-400/50'
                            }`}>
                            <span className={`text-sm md:text-base ${toast.type === 'warning' ? 'text-rose-700' : 'text-emerald-700'}`}>
                                {toast.type === 'warning' ? '⚠' : '✓'}
                            </span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className={`text-xs md:text-sm font-semibold ${toast.type === 'warning' ? 'text-rose-800' : 'text-emerald-800'}`}>{toast.message}</span>
                        </div>
                        <button
                            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                            className={`ml-2 transition-colors ${toast.type === 'warning' ? 'text-rose-500 hover:text-rose-700' : 'text-emerald-500 hover:text-emerald-700'}`}
                        >
                            <span className="text-lg">×</span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}