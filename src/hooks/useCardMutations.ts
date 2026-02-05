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

    const createCard = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "" }) => {
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
            imageUrl
        });

        cards.set(newCardId, newCard);

        const inboxCol = columns.get("inbox");
        if (inboxCol) {
            inboxCol.get("cardIds").insert(newCardId, 0);
        }
    }, []);
    const createCardToColumn = useMutation(({ storage }, { title, category, type = "place", description = "", date = "", imageUrl = "", airports, month, city, timezone, targetColumnId, targetIndex = 0 }) => {
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

        const newCardId = `card-${Date.now()}`;
        const newCard = new LiveObject({
            id: newCardId,
            text: title,
            category,
            type: type as "travel" | "work",
            description,
            date,
            imageUrl,
            ...(airports && { airports }),
            ...(month !== undefined && { month }),  // 🎯 캘린더 초기 월
            ...(city && { city }),  // 🎯 도시 식별자
            ...(timezone !== undefined && { timezone })  // 시차
        });

        cards.set(newCardId, newCard);

        const targetCol = columns.get(targetColumnId);
        if (targetCol) {
            const targetList = targetCol.get("cardIds");
            if (typeof targetIndex === 'number' && targetIndex >= 0) targetList.insert(newCardId, targetIndex);
            else targetList.push(newCardId);
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

    return {
        reorderCard,
        copyCardToTimeline,
        removeCardFromTimeline,
        moveCard,
        createCard,
        createCardToColumn,
        toggleVote
    };
}
