# 🐛 버그 수정: 입국심사&필요사항 카드 메모 내용 사라짐

## 날짜
2026-02-20

## 문제 요약
입국심사&필요사항 카드에 메모를 작성한 후 조금이라도 수정하면 메모 내용이 사라지는 버그

## 원인 분석

### 파일
`/src/app/CollaborativeApp.tsx` - 495~509 라인

### 문제 코드
```tsx
// 여행지 변경 시 입국심사&필요사항 카드 메모 자동 삽입 (editor/owner만)
useEffect(() => {
    const cityName = destinationCard?.text || destinationCard?.title || null;
    if (cityName && cityName !== prevCity) {
        const blocks = getEntryCardBlocks(cityName);
        updateEntryCardNotes(blocks); // ⚠️ 기존 메모를 무조건 덮어씀!
    }
}, [destinationCard, ...]);
```

`destinationCard`의 text/title이 변경될 때마다 `updateEntryCardNotes(blocks)`로 p1 카드의 notes를 무조건 덮어씁니다. 실제로 사용자가 목적지 카드를 미세하게 수정하면 이 useEffect가 트리거되어 메모가 초기화됩니다.

## 수정 내용

### setEntryCardNotesIfEmpty mutation 추가
이미 유효한 notes가 있으면 건드리지 않는 새 mutation 추가:

```tsx
// p1 카드 메모가 비어있을 때만 초기값 삽입 (기존 메모 보호)
const setEntryCardNotesIfEmpty = useMutation(({ storage }, notes: any[]) => {
    const p1Card = cardsMap.get('p1');
    if (!p1Card) return;
    // 이미 유효한 notes가 있으면 덮어쓰지 않음
    const existingNotes = (p1Card as any).get('notes');
    if (Array.isArray(existingNotes) && existingNotes.length > 0) return;
    (p1Card as any).set('notes', notes);
}, []);
```

### useEffect에서 새 mutation 사용
```tsx
// 새 도시가 설정됨 → 기존 메모가 없을 때만 초기 블록 삽입
setEntryCardNotesIfEmpty(blocks); // updateEntryCardNotes 대신 사용
```

## 정책 정리
| 상황 | 동작 |
|---|---|
| 새 여행지 설정 + 메모 없음 | 기본 입국 정보 블록 자동 삽입 |
| 새 여행지 설정 + 메모 있음 | 기존 메모 유지 (덮어쓰지 않음) |
| 여행지 삭제 | 메모 초기화 (기존 `updateEntryCardNotes([])` 유지) |
