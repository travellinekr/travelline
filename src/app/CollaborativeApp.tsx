"use client";

import { useStorage, useMutation, useErrorListener } from "../liveblocks.config";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { AnchorContext } from "@/contexts/AnchorContext";
import { Mouse, ChevronLeft, ChevronRight, Package, MapPin, Hotel, Lock, LockOpen } from "lucide-react";
import { useRole } from "@/hooks/useRole";
import { useToast } from "@/hooks/useToast";
import { ToastContainer } from "@/components/common/ToastContainer";
import { useRouter } from "next/navigation";
import { UserAvatarMenu } from "@/components/header/UserAvatarMenu";

import { DndContext, DragOverlay, useDroppable, type Modifier } from "@dnd-kit/core";
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
import { DraggableCard, renderCardInternal } from "../components/board/DraggableCard";
import { HotelCard } from "@/components/cards/HotelCard";
import { TransportCard } from "@/components/cards/TransportCard";
import { FoodCard } from "@/components/cards/FoodCard";
import { ShoppingCard } from "@/components/cards/ShoppingCard";
import { TourSpaCard } from "@/components/cards/TourSpaCard";
import { LiveCursors } from "../components/board/LiveCursors";
import { SessionExpiredModal } from "@/components/auth/SessionExpiredModal";
import { LoadingSkeleton } from "@/components/board/LoadingSkeleton";
import { useCardMutations } from "@/hooks/useCardMutations";
import { useMobileInbox } from "@/hooks/useMobileInbox";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";
import { usePresenceCursor } from "@/hooks/usePresenceCursor";
import { useAnchorLogic } from "@/hooks/useAnchorLogic";
import { useDragDrop } from "@/hooks/useDragDrop";
import { isPastDayColumn } from "@/utils/timeline";
import { findSourceColumn } from "@/utils/dnd";
import { Sidebar } from "@/components/board/Sidebar";
import { Confirm } from "@/components/board/Confirm";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

type CategoryType = "destination" | "preparation" | "flight" | "hotel" | "food" | "shopping" | "transport";

// 📱 모바일 우측 드래그 삭제 드롭존
function RightDeleteZone({ isActive }: { isActive: boolean }) {
    const { setNodeRef } = useDroppable({ id: 'right-delete-zone' });
    return (
        <div
            ref={setNodeRef}
            className={`md:hidden fixed right-0 top-0 bottom-0 w-[20%] z-40 flex items-center justify-center pointer-events-none transition-colors duration-150 ${
                isActive
                    ? 'bg-red-500/50 border-l-4 border-red-500'
                    : 'bg-red-500/5'
            }`}
        >
            <span
                style={{ writingMode: 'vertical-rl' }}
                className={`font-bold tracking-widest ${
                    isActive ? 'text-white text-base' : 'text-red-600/25 text-sm'
                }`}
            >
                드롭하면 삭제 됩니다
            </span>
        </div>
    );
}


export function CollaborativeApp({ roomId, initialTitle }: { roomId: string; initialTitle: string }) {
    const router = useRouter();
    const [showSessionExpired, setShowSessionExpired] = useState(false);

    useErrorListener((error) => {
        if (error.message.toLowerCase().includes("auth") || error.message.toLowerCase().includes("unauthorized")) {
            setShowSessionExpired(true);
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

    // 플로팅 버튼 Ref
    const floatingBtnRef = useRef<HTMLDivElement>(null);
    const cachedContainerRect = useRef<DOMRect | null>(null);

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

    const containerRef = useRef<HTMLDivElement>(null);
    const { throttledUpdateMyPresence, handlePointerMove, handlePointerLeave } = usePresenceCursor({
        containerRef,
        isMobileDragging,
        activeDragItem,
    });
    // Liveblocks cards 최신값 참조 (stale closure 방지)
    const cardsRef = useRef<any>(null);
    useEffect(() => { cardsRef.current = cards; }, [cards]);

    const { reorderCard, copyCardToTimeline, removeCardFromTimeline, moveCard, createCard, createCardToColumn } = useCardMutations();

    // createCard wrapper for debugging
    const handleCreateCard = (data: any) => {

        try {
            createCard(data);
        } catch (error) {
            console.error('❌ createCard 에러:', error);
        }
    };


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
            // Match day0, day1, day2, day3, etc. (여행준비 포함 전체 초기화)
            if (/^day\d+$/.test(colId)) {
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

    // [긴급 복구] 데이터가 로드되었으나 필수 컬럼이 비어있을 경우 자동 초기화
    const autoRestore = useMutation(({ storage }) => {
        const columnsMap = storage.get('columns') as LiveMap<string, any>;
        const cardsMap = storage.get('cards') as LiveMap<string, any>;
        const columnOrder = storage.get('columnOrder') as LiveList<string>;

        if (!columnsMap || !cardsMap) return;

        // 1. 기본 컬럼 확인 및 생성
        const requiredCols = [
            { id: "destination-header", title: "최종 여행지" },
            { id: "destination-candidates", title: "여행지 후보" },
            { id: "flights", title: "항공" },
            { id: "day0", title: "0일차 (준비)" },
            { id: "inbox", title: "보관함" }
        ];

        requiredCols.forEach(col => {
            if (!columnsMap.has(col.id)) {
                columnsMap.set(col.id, new LiveObject({ id: col.id, title: col.title, cardIds: new LiveList([]) }));
            }
        });

        // 2. 컬럼 순서 복구
        if (columnOrder.length === 0) {
            requiredCols.forEach(col => columnOrder.push(col.id));
        }


        // 4. 나머지 샘플 카드 복구 (인박스가 비었을 경우만)
        const inbox = columnsMap.get("inbox");
        if (inbox && inbox.get("cardIds").length === 0) {
            const samples = [
                { id: "p1", text: "입국심사&필요사항", type: "travel", category: "preparation" },
                { id: "f1", text: "대한항공 KE467 (09:00)", type: "travel", category: "flight" },
                { id: "h1", text: "아미아나 리조트 (오션뷰)", type: "travel", category: "hotel" }
            ];
            samples.forEach(s => {
                if (!cardsMap.has(s.id)) {
                    cardsMap.set(s.id, new LiveObject(s));
                    inbox.get("cardIds").push(s.id);
                }
            });
        }
        console.log('✅ 보드 데이터 자동 복구 완료');
        addToast("기본 여행 데이터를 복구했습니다.", "info");
    }, []);

    const autoRestoreRef = useRef(autoRestore);
    autoRestoreRef.current = autoRestore;

    useEffect(() => {
        if (columns && columns.size > 0) {
            const requiredCols = ["destination-header", "destination-candidates", "flights", "day0", "inbox"];
            const missingCol = requiredCols.some(id => !(columns as any).get(id));
            if (missingCol) {
                console.log('⚠️ 보드 데이터 부재 감지 - 자동 복구 시도');
                autoRestoreRef.current();
            }
        }
    }, [columns]);

    // ── Explore에서 추가된 카드 큐 처리 (중복 체크 포함) ─────────────
    useEffect(() => {
        const queueKey = `explore_queue_${roomId}`;
        const raw = localStorage.getItem(queueKey);
        if (!raw) return;

        let queued: any[] = [];
        try { queued = JSON.parse(raw); } catch { return; }
        if (!queued.length) return;

        // 딜레이 후 처리 (Liveblocks 스토리지 준비 대기)
        const timer = setTimeout(() => {
            // 현재 보관함에 있는 카드들의 title+city 세트 (O(1) 중복 검색)
            const existingKeys = new Set<string>();
            if (cardsRef.current) {
                cardsRef.current.forEach((c: any) => {
                    if (c?.text && c?.city) {
                        existingKeys.add(`${c.text}__${c.city}`);
                    }
                });
            }

            let addedCount = 0;
            let skippedCount = 0;

            queued.forEach((card) => {
                const dupKey = `${card.name}__${card.city || ''}`;
                if (existingKeys.has(dupKey)) {
                    skippedCount++;
                    return; // 중복 skip
                }
                try {
                    handleCreateCard({
                        title: card.name,
                        category: card.category === 'food' ? 'food' : card.category === 'shopping' ? 'shopping' : 'hotel',
                        type: 'place',
                        city: card.city || '',
                        icon: card.icon || '',
                        coordinates: card.coordinates,
                        description: card.description || '',
                        priceRange: card.priceRange || '',
                        openingHours: card.openingHours || '',
                        michelin: card.michelin || '',
                        specialty: card.specialty || '',
                        features: card.features || [],
                        reservation: card.reservation || false,
                        restaurantType: card.restaurantType || '',
                        cuisine: card.cuisine || '',
                        accommodationType: card.accommodationType || '',
                        checkInTime: card.checkInTime || '',
                        checkOutTime: card.checkOutTime || '',
                        tags: card.tags || [],
                        shoppingType: card.shoppingType || '',
                        shoppingCategory: card.shoppingCategory || '',
                        specialItems: card.specialItems || '',
                        taxRefund: card.taxRefund || false,
                    });
                    existingKeys.add(dupKey); // 방금 추가한 카드도 키에 등록
                    addedCount++;
                } catch (e) {
                    console.error('[explore_queue] 카드 추가 실패:', e);
                }
            });

            localStorage.removeItem(queueKey);

            // 결과 토스트
            if (addedCount > 0 && skippedCount > 0) {
                addToast(`✈️ ${addedCount}개 카드가 추가되었고, ${skippedCount}개는 중복 스킵했습니다.`, 'info');
            } else if (addedCount > 0) {
                addToast(`✈️ Explore에서 ${addedCount}개 카드가 보관함에 추가됐어요!`, 'info');
            } else if (skippedCount > 0) {
                addToast(`모든 카드가 이미 보관함에 있어요. (${skippedCount}개 중복 스킵)`, 'warning');
            }
        }, 500); // Liveblocks 연결 대기 (ClientSideSuspense 내부라 이미 연결됨)

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const containerWidth = Math.min(window.innerWidth, 1152);
            const initX = containerWidth - 80;
            const initY = window.innerHeight - 200;

            setMobileCursorPos({ x: initX, y: initY });

            if (floatingBtnRef.current) {
                floatingBtnRef.current.style.transform = `translate3d(${initX}px, ${initY}px, 0)`;
            }
        }
    }, []);

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    const publicUrl = `${baseUrl}/room/${roomId}`;

    const destinationCard = useMemo(() => {
        const destCol = (columns as any)?.get('destination-header');
        if (!destCol || destCol.cardIds.length === 0) return null;
        const cardId = destCol.cardIds[0];
        return (cards as any)?.get(cardId) || null;
    }, [columns, cards]);

    // Track previous destination card ID to detect removal
    const prevDestinationCardId = useRef<string | null>(null);

    // p1 카드(입국심사&필요사항) 메모 업데이트 mutation (여행지 삭제 시 초기화용)
    const updateEntryCardNotes = useMutation(({ storage }, notes: any[]) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        const p1Card = cardsMap.get('p1');
        if (p1Card) {
            (p1Card as any).set('notes', notes);
        }
    }, []);

    // p1 카드의 city 필드만 업데이트 (notes 자동 채우기 안 함 - 메모는 사용자가 직접 입력)
    const setEntryCardCity = useMutation(({ storage }, city: string) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        const p1Card = cardsMap.get('p1');
        if (!p1Card) return;
        (p1Card as any).set('city', city);
    }, []);

    // 기존 룸의 p1 카드 마이그레이션 (text, isEntryCard 업데이트 + notes 초기화)
    const migrateP1Card = useMutation(({ storage }) => {
        const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
        if (!cardsMap) return;
        let p1Card = cardsMap.get('p1');
        if (p1Card) {
            // [Resilience] p1Card가 LiveObject가 아닌 일반 객체로 저장되어 있을 경우를 대비한 체크
            if (typeof (p1Card as any).get !== 'function') {
                console.log('⚠️ p1Card is a plain object, converting to LiveObject');
                const plainData = JSON.parse(JSON.stringify(p1Card)); // 깊은 복사
                cardsMap.set('p1', new LiveObject(plainData));
                p1Card = cardsMap.get('p1');
            }

            const currentText = (p1Card as any).get('text');
            if (currentText !== '입국심사&필요사항') {
                (p1Card as any).set('text', '입국심사&필요사항');
            }
            if (!(p1Card as any).get('isEntryCard')) {
                (p1Card as any).set('isEntryCard', true);
            }
            // Info/메모 분리: 기존 자동 입력된 notes 전부 초기화
            // 메모는 사용자가 직접 작성, 입국 정보는 Info 모달(data/ 파일)에서 제공
            // ⚠️ undefined 대신 [] 사용 (Liveblocks는 undefined를 직렬화하지 않아 무시됨)
            (p1Card as any).set('notes', []);
        }
    }, []);

    // 앱 마운트 시 p1 카드 마이그레이션 실행 (editor/owner만)
    useEffect(() => {
        if (roleLoading || !canEdit) return; // 로딩 중이거나 viewer는 write 불가
        migrateP1Card();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit, roleLoading]);

    // Cleanup flight info and Day columns when destination is removed
    useEffect(() => {
        const currentId = destinationCard?.id || null;
        const prevId = prevDestinationCardId.current;

        // Detect removal: had a destination before, now it's gone
        if (prevId && !currentId && canEdit && !roleLoading) {
            cleanupFlightAndDays();
            // 입국심사 카드 city 초기화
            setEntryCardCity('');
        }

        // Update ref for next render
        prevDestinationCardId.current = currentId;
    }, [destinationCard, cleanupFlightAndDays, updateEntryCardNotes, canEdit, roleLoading]);

    // 여행지 변경 시 입국심사 카드의 city 필드만 업데이트 (메모 자동 채우기 ❌)
    const prevDestCityRef = useRef<string | null>(null);
    useEffect(() => {
        if (roleLoading || !canEdit) return;
        const cityName = destinationCard?.text || destinationCard?.title || null;
        const prevCity = prevDestCityRef.current;

        if (cityName && cityName !== prevCity) {
            // 도시명만 저장 → Info 모달이 이 city로 data/ 파일에서 실시간 로드
            setEntryCardCity(cityName);
        }

        prevDestCityRef.current = cityName;
    }, [destinationCard, setEntryCardCity, canEdit, roleLoading]);

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
            const inboxTopThreshold = inboxState === 'open' ? 0 : windowHeight;
            const isOverMobileInbox = isMobile && inboxState === 'open' && touch.clientY > inboxTopThreshold;

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

        // 최종 여행지(destination-header)에는 도시 카드만, 딱 1개만 허용
        if (targetColumnId === 'destination-header') {
            // 🔒 항공편이 이미 등록된 경우 여행지 변경 불가
            if (flightInfo) {
                addToast('항공편이 등록된 경우 여행지를 변경할 수 없습니다.', 'warning');
                setActiveDragItem(null);
                return;
            }

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

            // Food Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'food' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    restaurantType: draggedCard.restaurantType,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    cuisine: draggedCard.cuisine,
                    specialty: draggedCard.specialty,
                    priceRange: draggedCard.priceRange,
                    michelin: draggedCard.michelin,
                    reservation: draggedCard.reservation,
                    openingHours: draggedCard.openingHours,
                    features: draggedCard.features,
                    icon: draggedCard.icon,
                    description: draggedCard.description,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // Shopping Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'shopping' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    shoppingType: draggedCard.shoppingType,
                    city: draggedCard.city,
                    coordinates: draggedCard.coordinates,
                    shoppingCategory: draggedCard.shoppingCategory,
                    specialItems: draggedCard.specialItems,
                    priceRange: draggedCard.priceRange,
                    openingHours: draggedCard.openingHours,
                    taxRefund: draggedCard.taxRefund,
                    features: draggedCard.features,
                    icon: draggedCard.icon,
                    description: draggedCard.description,
                    targetColumnId: targetColumnId,
                    targetIndex: finalTargetIndex
                });

                return;
            }

            // TourSpa Picker 카드 → Day 컬럼 (day1, day2, ...)
            if (draggedCard?.category === 'tourspa' && /^day[1-9]\d*$/.test(targetColumnId)) {
                // 맨 뒤에 추가: 기존 카드 개수를 targetIndex로 사용
                const targetCol = (columns as any).get(targetColumnId);
                const finalTargetIndex = targetCol ? targetCol.cardIds.length : 0;

                createCardToColumn({
                    title: draggedCard.title,
                    category: draggedCard.category,
                    tourSpaType: draggedCard.tourSpaType,
                    description: draggedCard.description,
                    duration: draggedCard.duration,
                    priceRange: draggedCard.priceRange,
                    pickupAvailable: draggedCard.pickupAvailable,
                    coordinates: draggedCard.coordinates,
                    reservationRequired: draggedCard.reservationRequired,
                    openingHours: draggedCard.openingHours,
                    features: draggedCard.features,
                    rating: draggedCard.rating,
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
            {showSessionExpired && (
                <SessionExpiredModal onClose={() => setShowSessionExpired(false)} />
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

                            onTouchStart={handleFloatingButtonTouchStart}
                            onTouchEnd={handleFloatingButtonTouchEnd}
                            onTouchMove={handleFloatingButtonTouchMove}
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
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>

                        <DragOverlay dropAnimation={null} modifiers={[snapCenterToCursor]} style={dragOverlayWidth ? { width: dragOverlayWidth } : undefined}>
                            {activeDragItem ? (
                                (String(activeDragItem.id).startsWith('picker-') && !String(activeDragItem.id).startsWith('picker-hotel-') && !String(activeDragItem.id).startsWith('picker-transport-') && !String(activeDragItem.id).startsWith('picker-food-') && !String(activeDragItem.id).startsWith('picker-shopping-') && !String(activeDragItem.id).startsWith('picker-tourspa-')) || (activeDragSourceColumn === 'destination-header' && activeDragItem?.category === 'destination') ? (
                                    // Destination 카드 (picker 또는 최종여행지에서 드래그): 인박스 스타일 고정 (소스 폭 유지)
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl w-full bg-white">
                                        <div className="bg-white flex items-center gap-0 relative h-[72px] w-full overflow-hidden">
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
                                            <div className="flex-1 min-w-0 flex flex-col justify-center h-full px-3 py-1">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <span className="font-bold text-slate-800 text-sm leading-none truncate pr-2">
                                                        {activeDragItem.text || activeDragItem.title}
                                                    </span>
                                                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded shrink-0">
                                                        여행지
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-hotel-') ? (
                                    // Hotel Picker 카드: HotelCard 스타일
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <HotelCard
                                            card={{ ...activeDragItem, text: activeDragItem.title }}
                                            variant="inbox"
                                        />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-transport-') ? (
                                    // Transport Picker 카드: TransportCard 스타일
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <TransportCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-food-') ? (
                                    // Food Picker 카드: FoodCard 스타일
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <FoodCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-shopping-') ? (
                                    // Shopping Picker 카드: ShoppingCard 스타일
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <ShoppingCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
                                    </div>
                                ) : String(activeDragItem.id).startsWith('picker-tourspa-') ? (
                                    // TourSpa Picker 카드: TourSpaCard 스타일
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        <TourSpaCard card={{ ...activeDragItem, text: activeDragItem.title }} variant="inbox" />
                                    </div>
                                ) : (
                                    // 일반 카드: 출발 컬럼 기반 variant로 고스트 렌더링
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                                        {renderCardInternal(
                                            activeDragItem,
                                            {
                                                listeners: {},
                                                attributes: {},
                                                onRemove: undefined,
                                                canEdit: false,
                                                ...(activeDragSourceColumn === 'destination-header' ? { isHeader: true } : {}),
                                            },
                                            activeDragSourceColumn === 'inbox' || activeDragSourceColumn === null
                                                ? 'inbox'
                                                : activeDragSourceColumn === 'destination-header'
                                                    ? 'compact'
                                                    : activeDragSourceColumn === 'destination-candidates'
                                                        ? 'compact'
                                                        : 'timeline'
                                        )}
                                    </div>
                                )
                            ) : null}
                        </DragOverlay>
                    </div>
                </div>
            </DndContext >

            {/* 토스트 메시지들 */}
            <ToastContainer toasts={toasts} onClose={removeToast} position="bottom-center" />
        </AnchorContext.Provider>
    );
}
