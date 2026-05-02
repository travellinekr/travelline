import { useEffect, useRef } from 'react';
import { LiveMap, LiveObject } from '@liveblocks/client';
import { useMutation } from '@/liveblocks.config';

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
