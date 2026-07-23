import { useMutation } from "@liveblocks/react/suspense";
import { LiveObject, LiveList } from "@liveblocks/client";

export function useCardMutations() {
    const reorderCard = useMutation(({ storage }, { columnId, oldIndex, newIndex }) => {
        const columns = storage.get("columns") as any;
        const col = columns.get(columnId);
        if (col) col.get("cardIds").move(oldIndex, newIndex);
    }, []);

    const copyCardToTimeline = useMutation(({ storage }, { originalCardId, targetColumnId, targetIndex }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;
        const originalCard = cards.get(originalCardId);
        if (!originalCard) return;

        if (targetColumnId === 'day0' && !columns.get('day0')) {
            columns.set('day0', new LiveObject({
                id: 'day0',
                title: '0일차',
                cardIds: new LiveList<string>([])
            }));
        }

        const newCardId = `${originalCardId}-${Date.now()}`;
        const newCard = new LiveObject({ ...originalCard.toObject(), id: newCardId });
        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");
            if (typeof targetIndex === 'number' && targetIndex >= 0) targetList.insert(newCardId, targetIndex);
            else targetList.push(newCardId);
        }
    }, []);

    const removeCardFromTimeline = useMutation(({ storage }, { cardId, sourceColumnId }) => {
        const columns = storage.get("columns") as any;
        const cards = storage.get("cards") as any;
        const col = columns.get(sourceColumnId);
        if (col) {
            const list = col.get("cardIds");
            const idx = list.indexOf(cardId);
            if (idx !== -1) list.delete(idx);
        }
        cards.delete(cardId);
    }, []);

    // 컬럼의 모든 카드 제거 (cardIds 비우기 + cards LiveMap 에서 삭제) — 단일 원자 mutation
    const clearColumnCards = useMutation(({ storage }, columnId: string) => {
        const columns = storage.get("columns") as any;
        const cards = storage.get("cards") as any;
        const col = columns.get(columnId);
        if (!col) return;
        const list = col.get("cardIds");
        const ids: string[] = list?.toArray ? list.toArray() : [];
        for (const id of ids) cards.delete(id);
        while (list.length > 0) list.delete(0);
    }, []);

    const moveCard = useMutation(({ storage }, { cardId, targetColumnId, targetIndex }) => {
        const columns = storage.get("columns") as any;

        if (targetColumnId === 'day0' && !columns.get('day0')) {
            columns.set('day0', new LiveObject({
                id: 'day0',
                title: '0일차',
                cardIds: new LiveList<string>([])
            }));
        }

        if (targetColumnId === 'destination-candidates' && !columns.get('destination-candidates')) {
            columns.set('destination-candidates', new LiveObject({
                id: 'destination-candidates',
                title: '여행지 후보',
                cardIds: new LiveList<string>([])
            }));
        }

        for (const col of columns.values()) {
            const list = col.get("cardIds");
            const idx = list.indexOf(cardId);
            if (idx !== -1) { list.delete(idx); break; }
        }
        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");
            if (typeof targetIndex === 'number' && targetIndex >= 0) targetList.insert(cardId, targetIndex);
            else targetList.push(cardId);
        }
    }, []);

    const createCard = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, time, route, coordinates, accommodationType, priceTier, checkInTime, checkOutTime, showCheckOut, tags, transportationType, priceRange, availability, features, appRequired, appName, icon, restaurantType, cuisine, specialty, michelin, reservation, openingHours, shoppingType, shoppingCategory, specialItems, taxRefund, tourSpaType, duration, pickupAvailable, reservationRequired, rating, address, hasInfo, etcItem = '' }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;

        const newCardId = `card-${Date.now()}`;

        const newCard = new LiveObject({
            id: newCardId,
            text: title,
            category,
            type: type as "travel" | "work",
            description,
            date,
            imageUrl,
            airports,
            month,
            city,
            timezone,
            time,
            route,
            coordinates,
            accommodationType,
            priceTier,
            checkInTime,
            checkOutTime,
            showCheckOut, // 숙소: true=체크아웃 카드, false/undefined=체크인 카드
            tags,
            transportationType,
            priceRange,
            availability,
            features,
            appRequired,
            appName,
            icon,
            restaurantType,
            cuisine,
            specialty,
            michelin,
            reservation,
            openingHours,
            shoppingType,
            shoppingCategory,
            specialItems,
            taxRefund,
            tourSpaType,
            duration,
            pickupAvailable,
            reservationRequired,
            rating,
            address,
            hasInfo,
            isUserCreated: true,  // 사용자가 직접 추가한 카드
            etcItem: etcItem || '',  // 기타 카드 항목
        });

        cards.set(newCardId, newCard);

        const inboxCol = columns.get("inbox");

        if (inboxCol) {
            const cardIds = inboxCol.get("cardIds");

            // 맨 뒤에 추가
            inboxCol.get("cardIds").insert(newCardId, cardIds.length);
        } else {
        }
    }, []);
    const createCardToColumn = useMutation(({ storage }, { text, title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, time, route, coordinates, accommodationType, priceTier, checkInTime, checkOutTime, showCheckOut, tags, transportationType, priceRange, availability, features, appRequired, appName, icon, restaurantType, cuisine, specialty, michelin, reservation, openingHours, shoppingType, shoppingCategory, specialItems, taxRefund, tourSpaType, duration, pickupAvailable, reservationRequired, rating, hasInfo, isIntercityFlight, airportCode, parentIntercityCardId, votes, targetColumnId, targetIndex = 0, flightPlacement }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;

        // 컬럼이 없으면 생성
        if (targetColumnId === 'destination-candidates' && !columns.get('destination-candidates')) {
            columns.set('destination-candidates', new LiveObject({
                id: 'destination-candidates',
                title: '여행지 후보',
                cardIds: new LiveList<string>([])
            }));
        }
        if (targetColumnId === 'destination-header' && !columns.get('destination-header')) {
            columns.set('destination-header', new LiveObject({
                id: 'destination-header',
                title: '최종 여행지',
                cardIds: new LiveList<string>([])
            }));
        }

        // 중복 방지: Date.now() + 랜덤 문자열
        const randomSuffix = Math.random().toString(36).substring(2, 9);
        const newCardId = `card-${Date.now()}-${randomSuffix}`;
        const newCard = new LiveObject({
            id: newCardId,
            text: text || title,
            category,
            type: type as "travel" | "work",
            description,
            date,
            imageUrl,
            airports,
            month,
            city,
            timezone,
            time,
            route,
            coordinates,
            accommodationType,
            priceTier,
            checkInTime,
            checkOutTime,
            showCheckOut, // 숙소: true=체크아웃 카드, false/undefined=체크인 카드
            tags,
            transportationType,
            priceRange,
            availability,
            features,
            appRequired,
            appName,
            icon,
            // 맛집 관련 필드
            restaurantType,
            cuisine,
            specialty,
            michelin,
            reservation,
            openingHours,
            // 쇼핑 관련 필드
            shoppingType,
            shoppingCategory,
            specialItems,
            taxRefund,
            // 투어&스파 관련 필드
            tourSpaType,
            duration,
            pickupAvailable,
            reservationRequired,
            rating,
            hasInfo,
            // 도시간 항공편 마커
            isIntercityFlight,
            airportCode,
            parentIntercityCardId,
            votes, // 투표한 사용자 id 배열 (여행지 후보용, 없으면 undefined)
        });

        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");

            // 🎯 flight 카테고리 배치
            if (category === 'flight' && date) {
                let insertIndex: number;

                if (flightPlacement === 'top') {
                    // 가는편: 일반(비-flight) 카드보다 위. 앞쪽의 연속된 flight 카드 클러스터 뒤에 삽입
                    //  → 기존 항공 카드(출발 등) 뒤·일반 카드 앞 → 생성 순서(출발→도착) 유지하며 최상단 고정
                    insertIndex = 0;
                    while (insertIndex < targetList.length) {
                        const c = cards.get(targetList.get(insertIndex));
                        if (c && c.get('category') === 'flight') insertIndex++;
                        else break;
                    }
                } else if (flightPlacement === 'bottom') {
                    // 오는편: 항상 맨 아래 (일반 카드 아래, 생성 순서 유지)
                    insertIndex = targetList.length;
                } else {
                    // 기본(도시간 항공편 등): flight 카드끼리 날짜순 정렬, 같은 날짜면 생성 순서대로
                    insertIndex = targetList.length;
                    for (let i = 0; i < targetList.length; i++) {
                        const existingCard = cards.get(targetList.get(i));
                        if (existingCard && existingCard.get('category') === 'flight') {
                            const existingDate = existingCard.get('date') || '';
                            if (new Date(date) < new Date(existingDate)) {
                                insertIndex = i;
                                break;
                            }
                        }
                    }
                }

                targetList.insert(newCardId, insertIndex);
            } else {
                // 다른 카테고리는 기존 로직 유지
                if (typeof targetIndex === 'number' && targetIndex >= 0) {
                    targetList.insert(newCardId, targetIndex);
                } else {
                    targetList.push(newCardId);
                }
            }
        }
    }, []);

    const toggleVote = useMutation(({ storage }, { cardId, userId }) => {
        const cards = storage.get("cards") as any;
        const card = cards.get(cardId);
        if (!card) return;

        // votes 배열이 없으면 초기화
        let votes = card.get("votes") || [];
        const votesArray = Array.isArray(votes) ? votes : [];

        // 이미 이 카드에 투표했으면 취소
        const voteIndex = votesArray.indexOf(userId);
        if (voteIndex > -1) {
            // 투표 취소
            votesArray.splice(voteIndex, 1);
            card.set("votes", votesArray);
            return;
        }

        // 새로운 카드에 투표: 먼저 모든 다른 카드에서 이 사용자의 투표 제거
        for (const [otherCardId, otherCard] of cards.entries()) {
            if (otherCardId === cardId) continue; // 현재 카드는 스킵

            const otherVotes = otherCard.get("votes");
            if (otherVotes && Array.isArray(otherVotes)) {
                const otherVotesArray = [...otherVotes];
                const idx = otherVotesArray.indexOf(userId);
                if (idx > -1) {
                    otherVotesArray.splice(idx, 1);
                    otherCard.set("votes", otherVotesArray);
                }
            }
        }

        // 현재 카드에 투표 추가
        votesArray.push(userId);
        card.set("votes", votesArray);
    }, []);

    const updateCard = useMutation(({ storage }, { cardId, updates }: { cardId: string; updates: Record<string, any> }) => {
        const cards = storage.get("cards") as any;
        const card = cards.get(cardId);
        if (!card) return;

        // 카드의 필드들을 업데이트
        Object.keys(updates).forEach(key => {
            card.set(key, updates[key]);
        });
    }, []);

    // 카드에 사진 추가 — 최신 사진이 배열 앞쪽(왼쪽 슬롯)에 오도록 prepend
    const addCardPhoto = useMutation(({ storage }, { cardId, photo }: { cardId: string; photo: any }) => {
        const cards = storage.get("cards") as any;
        const card = cards.get(cardId);
        if (!card) return;
        const existing = card.get("photos") || [];
        card.set("photos", [photo, ...existing]);
    }, []);

    // 카드에서 사진 제거 (id로 매칭)
    const removeCardPhoto = useMutation(({ storage }, { cardId, photoId }: { cardId: string; photoId: string }) => {
        const cards = storage.get("cards") as any;
        const card = cards.get(cardId);
        if (!card) return;
        const existing = card.get("photos") || [];
        card.set("photos", existing.filter((p: any) => p?.id !== photoId));
    }, []);

    // 도시간 항공편 자식 항공 카드만 삭제 (메타 카드는 유지) — 재등록(수정) 시 사용
    const removeIntercityFlightChildren = useMutation(({ storage }, metaCardId: string) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;
        if (!cards || !columns) return;

        const childIds: string[] = [];
        cards.forEach((c: any, id: string) => {
            const parent = c?.get ? c.get('parentIntercityCardId') : c?.parentIntercityCardId;
            if (parent === metaCardId) childIds.push(id);
        });

        childIds.forEach(cardId => {
            columns.forEach((col: any) => {
                const list = col.get("cardIds");
                const idx = list.indexOf(cardId);
                if (idx !== -1) list.delete(idx);
            });
            cards.delete(cardId);
        });
    }, []);

    // 도시간 항공편 메타 카드 + 자식 항공 카드(parentIntercityCardId 일치) 일괄 삭제
    const removeIntercityFlightGroup = useMutation(({ storage }, metaCardId: string) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;
        if (!cards || !columns) return;

        // 1) 자식 항공 카드 id 수집
        const childIds: string[] = [];
        cards.forEach((c: any, id: string) => {
            const parent = c?.get ? c.get('parentIntercityCardId') : c?.parentIntercityCardId;
            if (parent === metaCardId) childIds.push(id);
        });

        // 2) 메타 + 자식 모두 컬럼/cards 에서 제거
        [metaCardId, ...childIds].forEach(cardId => {
            columns.forEach((col: any) => {
                const list = col.get("cardIds");
                const idx = list.indexOf(cardId);
                if (idx !== -1) list.delete(idx);
            });
            cards.delete(cardId);
        });
    }, []);

    // 도시간 항공편 미등록 카드 생성 — id prefix `intercity-flight-*` 로 IntercityFlightCard 라우팅
    const createIntercityFlightCard = useMutation(({ storage }, { targetColumnId, targetIndex }: { targetColumnId: string; targetIndex?: number }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;
        const newCardId = `intercity-flight-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const newCard = new LiveObject({
            id: newCardId,
            text: '도시간 항공편',
            category: 'flight',
        });
        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");
            if (typeof targetIndex === 'number' && targetIndex >= 0) {
                targetList.insert(newCardId, targetIndex);
            } else {
                targetList.push(newCardId);
            }
        }
    }, []);

    // 도시간 이동(육로) 메타 카드 생성. 자식 카드는 없음 — 카드 자체에 targetCity 저장.
    const createIntercityMoveCard = useMutation(({ storage }, { targetColumnId, targetIndex }: { targetColumnId: string; targetIndex?: number }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;
        const newCardId = `intercity-move-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const newCard = new LiveObject({
            id: newCardId,
            text: '도시간 이동',
            category: 'transport',
            isIntercityMove: true,
        });
        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");
            if (typeof targetIndex === 'number' && targetIndex >= 0) {
                targetList.insert(newCardId, targetIndex);
            } else {
                targetList.push(newCardId);
            }
        }
    }, []);

    // 도시간 항공편/이동 메타 카드 모두에서 사용 가능한 generic targetCity setter.
    const setCardTargetCity = useMutation(({ storage }, { cardId, targetCity }: { cardId: string; targetCity: string }) => {
        const cards = storage.get("cards") as any;
        const card = cards.get(cardId);
        if (!card) return;
        card.set('targetCity', targetCity);
    }, []);

    // 도시간 항공편 자식 카드 2장(출발/도착)을 한 mutation 안에서 원자 생성.
    //  - Liveblocks mutation 은 성공 시 전체 커밋 / 예외 시 롤백 → 부분 실패로 orphan 카드가 남지 않음
    //  - 두 컬럼 존재 여부를 미리 검증한 후 두 카드 모두 생성 (부분 성공 방지)
    //  - depDayCol / arrDayCol 이 없으면 해당 카드는 skip (호출측이 addToast 로 알림)
    const createIntercityFlightPair = useMutation(({ storage }, {
        depCardData, arrCardData, depDayCol, arrDayCol,
    }: {
        depCardData: any | null;    // depDayCol 이 있을 때만 세팅됨
        arrCardData: any | null;
        depDayCol: string | null;
        arrDayCol: string | null;
    }) => {
        const cards = storage.get("cards") as any;
        const columns = storage.get("columns") as any;

        const insertOne = (data: any, colId: string) => {
            const newCardId = `card-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            const newCard = new LiveObject({ id: newCardId, ...data });
            cards.set(newCardId, newCard);
            const col = columns.get(colId);
            if (!col) { cards.delete(newCardId); return false; }
            const list = col.get("cardIds");
            // flight 카테고리는 날짜/시간순 자동 정렬 — createCardToColumn 와 동일 규칙
            let insertIndex = list.length;
            if (data.category === 'flight' && data.date) {
                for (let i = 0; i < list.length; i++) {
                    const existingId = list.get(i);
                    const existing = cards.get(existingId);
                    if (existing && existing.get('category') === 'flight') {
                        const eDate = existing.get('date') || '';
                        const eTime = existing.get('time') || '';
                        const newKey = `${data.date} ${data.time || ''}`;
                        const eKey = `${eDate} ${eTime}`;
                        if (newKey < eKey) { insertIndex = i; break; }
                    }
                }
            }
            list.insert(newCardId, insertIndex);
            return true;
        };

        if (depDayCol && depCardData) insertOne(depCardData, depDayCol);
        if (arrDayCol && arrCardData) insertOne(arrCardData, arrDayCol);
    }, []);

    // 보드 전체 초기화 — 신규 보드(initialStorage) 상태로 되돌림.
    //  (온보딩 인트로 종료 시 데모로 만든 여행지/항공편/일차/카드 등을 모두 정리)
    const resetBoard = useMutation(({ storage }) => {
        const columns = storage.get("columns") as any;
        const cards = storage.get("cards") as any;
        const columnOrder = storage.get("columnOrder") as any;

        // 1) 모든 카드 삭제
        Array.from(cards.keys()).forEach((k: any) => cards.delete(k));

        // 2) 기본 5개 컬럼만 남기고(빈 상태로) 나머지(day1+, unconfirmed 등) 삭제
        const BASE = ["destination-header", "destination-candidates", "flights", "day0", "inbox"];
        const BASE_TITLE: Record<string, string> = {
            "destination-header": "최종 여행지",
            "destination-candidates": "여행지 후보",
            "flights": "항공",
            "day0": "0일차 (준비)",
            "inbox": "보관함",
        };
        Array.from(columns.keys()).forEach((colId: any) => {
            if (!BASE.includes(colId)) columns.delete(colId);
        });
        BASE.forEach((id) => {
            const col = columns.get(id);
            if (col) col.set("cardIds", new LiveList<string>([]));
            else columns.set(id, new LiveObject({ id, title: BASE_TITLE[id], cardIds: new LiveList<string>([]) }));
        });

        // 3) columnOrder 를 기본 순서로 리셋
        while (columnOrder.length > 0) columnOrder.delete(0);
        BASE.forEach((id) => columnOrder.push(id));

        // 4) 항공 정보 제거
        storage.set("flightInfo", null);
    }, []);

    return {
        resetBoard,
        reorderCard,
        copyCardToTimeline,
        removeCardFromTimeline,
        clearColumnCards,
        moveCard,
        createCard,
        createCardToColumn,
        toggleVote,
        updateCard,
        addCardPhoto,
        removeCardPhoto,
        createIntercityFlightCard,
        removeIntercityFlightGroup,
        removeIntercityFlightChildren,
        createIntercityMoveCard,
        setCardTargetCity,
        createIntercityFlightPair,
    };
}
