// 여행준비 유니버설 카드 (도시 무관 - 모든 도시에서 동일하게 나옴).
// useEntryCardSync 의 ensurePrepCards 가 각 방에 자동 생성 (없으면 만들고, 있으면 그대로).
// p1(입국심사) 만 isEntryCard=true 특수 플래그 → EntryInfoView 로 팝업 dispatch.
// 인포 팝업 데이터는 도시별로 별도 파일에서 수집 예정 (p2~p6).

export type PreparationCardSample = {
    id: string;
    text: string;
    isEntryCard?: boolean;
};

export const PREP_CARDS: readonly PreparationCardSample[] = [
    { id: 'p1', text: '입국심사&필요사항', isEntryCard: true },
    { id: 'p2', text: '여권·비자 확인' },
    { id: 'p3', text: '여행자보험' },
    { id: 'p4', text: '환전/트래블카드' },
    { id: 'p5', text: '유심/eSIM' },
    { id: 'p6', text: '국제운전면허증' },
] as const;
