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

    const createCard = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, time, route, coordinates, accommodationType, checkInTime, checkOutTime, tags, transportationType, priceRange, availability, features, appRequired, appName, icon, restaurantType, cuisine, specialty, michelin, reservation, openingHours, shoppingType, shoppingCategory, specialItems, taxRefund, tourSpaType, duration, pickupAvailable, reservationRequired, rating, address, etcItem = '' }) => {
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
            checkInTime,
            checkOutTime,
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
    const createCardToColumn = useMutation(({ storage }, { text, title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, time, route, coordinates, accommodationType, checkInTime, checkOutTime, tags, transportationType, priceRange, availability, features, appRequired, appName, icon, restaurantType, cuisine, specialty, michelin, reservation, openingHours, shoppingType, shoppingCategory, specialItems, taxRefund, tourSpaType, duration, pickupAvailable, reservationRequired, rating, targetColumnId, targetIndex = 0 }) => {
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
            checkInTime,
            checkOutTime,
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
            rating
        });

        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");

            // 🎯 flight 카테고리는 날짜/시간순으로 자동 정렬
            if (category === 'flight' && date) {
                // 현재 컬럼의 모든 카드 확인
                let insertIndex = targetList.length; // 기본값: 맨 뒤

                for (let i = 0; i < targetList.length; i++) {
                    const existingCardId = targetList.get(i);
                    const existingCard = cards.get(existingCardId);

                    if (existingCard && existingCard.get('category') === 'flight') {
                        const existingDate = existingCard.get('date') || '';

                        // 날짜 비교 (같은 날짜면 생성 순서대로)
                        if (new Date(date) < new Date(existingDate)) {
                            insertIndex = i;
                            break;
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

    return {
        reorderCard,
        copyCardToTimeline,
        removeCardFromTimeline,
        moveCard,
        createCard,
        createCardToColumn,
        toggleVote,
        updateCard
    };
}
