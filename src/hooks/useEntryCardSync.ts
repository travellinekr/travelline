import { useEffect, useRef } from 'react';
import { LiveMap, LiveObject } from '@liveblocks/client';
import { useMutation } from '@/liveblocks.config';
import { PREP_CARDS } from '@/data/preparationCards';

// Liveblocks read-only 에러 무시 헬퍼.
// 노트북 sleep 등으로 Supabase 토큰이 만료되면 liveblocks-auth가 anon(viewer)으로
// 재발급하는데, 클라이언트 useSelf().info.role은 이전 'owner' 값을 잠시 캐시 →
// canEdit=true로 평가되어 mutation 시도 → 실제 토큰은 viewer라 에러.
// 이 race는 다음 토큰 갱신 또는 새로고침에서 자연 회복됨. silent skip이 안전.
function isReadOnlyError(e: unknown): boolean {
    return e instanceof Error && e.message.toLowerCase().includes('read only');
}

// p1(입국심사) 카드의 라이프사이클 관리.
// - 마운트 시 마이그레이션 (text/isEntryCard 보정 + notes 초기화)
// - 여행지 변경 시 city 필드 동기화
// 외부에서 setEntryCardCity('')로 카드 city 초기화 호출 가능 (여행지 제거 케이스).
export function useEntryCardSync({
    canEdit,
    roleLoading,
    destinationCard,
}: {
    canEdit: boolean;
    roleLoading: boolean;
    destinationCard: any;
}) {
    // p1 카드(입국심사&필요사항) 메모 업데이트 mutation
    const updateEntryCardNotes = useMutation(({ storage }, notes: any[]) => {
        try {
            const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
            if (!cardsMap) return;
            const p1Card = cardsMap.get('p1');
            if (p1Card) {
                (p1Card as any).set('notes', notes);
            }
        } catch (e) {
            if (isReadOnlyError(e)) return;
            throw e;
        }
    }, []);

    // p1 카드의 city 필드만 업데이트 (notes 자동 채우기 안 함 - 메모는 사용자가 직접 입력)
    const setEntryCardCity = useMutation(({ storage }, city: string) => {
        try {
            const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
            if (!cardsMap) return;
            const p1Card = cardsMap.get('p1');
            if (!p1Card) return;
            (p1Card as any).set('city', city);
        } catch (e) {
            if (isReadOnlyError(e)) return;
            throw e;
        }
    }, []);

    // 기존 룸의 p1 카드 마이그레이션 (text, isEntryCard 업데이트 + notes 초기화)
    const migrateP1Card = useMutation(({ storage }) => {
        try {
            const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
            if (!cardsMap) return;
            let p1Card = cardsMap.get('p1');
            if (p1Card) {
                // [Resilience] p1Card가 LiveObject가 아닌 일반 객체로 저장되어 있을 경우를 대비한 체크
                if (typeof (p1Card as any).get !== 'function') {
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
        } catch (e) {
            if (isReadOnlyError(e)) return;
            throw e;
        }
    }, []);

    // p1~p6 유니버설 여행준비 카드 존재 보장 (없으면 생성 + inbox 에 push).
    // 규칙:
    //   - cardsMap 에 이미 있으면 (다른 컬럼으로 옮겼든 뭐든) 손대지 않음.
    //   - cardsMap 에 없으면 (신규 방 or 유저가 삭제한 경우) 새로 만들어 inbox 에 push.
    //   - p1 은 isEntryCard=true + notes=[] 초기값 세팅 (EntryInfoView dispatch 용).
    //   - text 사후 수정은 유저 자유 → 마이그레이션에서 덮어쓰지 않음.
    //   - 신규 도시(예: 괌·홍콩) 방이라도 이 함수가 6개 카드 자동 생성 → 도시 무관 항상 등장.
    const ensurePrepCards = useMutation(({ storage }) => {
        try {
            const cardsMap = storage.get('cards') as LiveMap<string, any> | null;
            const columnsMap = storage.get('columns') as any;
            if (!cardsMap || !columnsMap) return;
            const inbox = columnsMap.get('inbox');
            if (!inbox) return;
            const inboxIds = inbox.get('cardIds');

            const inboxIdArr: string[] = inboxIds?.toArray ? inboxIds.toArray() : [];
            for (const prep of PREP_CARDS) {
                if (cardsMap.has(prep.id)) continue;
                const cardData: any = {
                    id: prep.id,
                    text: prep.text,
                    type: 'travel',
                    category: 'preparation',
                };
                if (prep.isEntryCard) {
                    cardData.isEntryCard = true;
                    cardData.notes = [];
                }
                cardsMap.set(prep.id, new LiveObject(cardData));
                // 동시 editor 마이그레이션 race 로 중복 push 방지
                if (!inboxIdArr.includes(prep.id)) {
                    inboxIds.push(prep.id);
                    inboxIdArr.push(prep.id);
                }
            }
        } catch (e) {
            if (isReadOnlyError(e)) return;
            throw e;
        }
    }, []);

    // 앱 마운트 시 여행준비 카드 마이그레이션 실행 (editor/owner만)
    useEffect(() => {
        if (roleLoading || !canEdit) return; // 로딩 중이거나 viewer는 write 불가
        migrateP1Card();
        ensurePrepCards();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit, roleLoading]);

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

    return { setEntryCardCity, updateEntryCardNotes };
}
