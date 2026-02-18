# 기타(ETC) 카드 기능 구현 완료

## 구현 내용

### 새로 생성된 파일

| 파일 | 역할 |
|------|------|
| `EtcAddModal.tsx` | 제목 + 항목 입력 모달 팝업 |
| `cards/EtcCard.tsx` | 기타 카드 렌더링 컴포넌트 |
| `EtcPicker.tsx` | 기타 탭 피커 (TourSpaPicker 동일 패턴) |

### 수정된 파일

- **`Inbox.tsx`** — `EtcPicker` import 및 `activeCategory === 'other'` 렌더링 연결
- **`DraggableCard.tsx`** — `EtcCard` import 및 `case 'other'` 렌더링 연결

---

## 카드 UI

```
┌─────────────────────────────────┐
│ ▌  ETC                          │
│    등록한 제목              📝  │
│    등록한 항목                   │
└─────────────────────────────────┘
```
- 왼쪽 컬러바: **보라색(violet-400)**
- 카테고리 레이블: **ETC**
- D-Day 없음 (요청대로)

---

## 동작 흐름

1. **여행지 없을 때** → `MoreHorizontal` 아이콘 + "먼저 여행지를 선택해주세요" (TourSpaPicker 동일)
2. **여행지 있을 때** → 카드 목록 + "직접 추가하기" 버튼
3. **"직접 추가하기" 클릭** → `EtcAddModal` 팝업
   - 제목 입력 (필수)
   - 항목 입력 (선택)
4. **추가하기 클릭** → 카드 생성 → 타임라인에 드래그 가능

---

## 컴파일 결과

```
✓ Compiled in 502ms  (에러 없음)
```
