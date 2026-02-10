import { useDroppable, useDndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DraggableCard } from "./DraggableCard";
import { memo, useState, useMemo } from "react";
import { FlightSection } from "./FlightSection";
import { MapPin, Map } from "lucide-react";
import { useStorage } from "@liveblocks/react/suspense";
import { DayMapModal } from "./DayMapModal";

// 🎯 destination-header 전용 컴포넌트 (분홍 점선, 최대 1개)
const DestinationHeaderSection = memo(function DestinationHeaderSection({ cards }: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'destination-header' });
  const { active } = useDndContext();

  const isDestinationCard = active?.data?.current?.category === 'destination';
  const shouldHighlight = isOver && isDestinationCard;

  return (
    <SortableContext items={cards.map((c: any) => c.id)} strategy={verticalListSortingStrategy}>
      <div
        ref={setNodeRef}
        className={`px-4 py-3 md:px-6 md:py-4 min-h-[100px] md:min-h-[100px] flex flex-col justify-center transition-all ${shouldHighlight
          ? 'bg-rose-50 border-2 border-dashed border-rose-300'
          : cards.length === 0
            ? 'bg-rose-50/30 border-2 border-dashed border-rose-100'
            : 'bg-white'
          }`}
      >
        {cards.length > 0 ? (
          cards.map((card: any) => {
            if (!card) return null;
            return <DraggableCard key={card.id} card={card} variant="compact" isHeader={true} />;
          })
        ) : (
          <div className="w-full h-[50px] flex items-center justify-center">
            <p className={`text-sm font-bold transition-all ${shouldHighlight ? 'text-rose-500 animate-pulse' : 'text-rose-300'
              }`}>
              {shouldHighlight ? '✨ 여기에 놓기' : '여기에 여행지 카드를 놓아주세요'}
            </p>
          </div>
        )}
      </div>
    </SortableContext>
  );
});

const DaySection = memo(function DaySection({ dayId, title, date, cards, color = "emerald", onMapClick }: any) {
  const { setNodeRef, isOver } = useDroppable({ id: `${dayId}-timeline` });
  const { active, over } = useDndContext();
  const allCards = useStorage((root) => root.cards);

  const isOverCard = over ? cards.some((c: any) => c.id === over.id) : false;
  const isSectionActive = (isOver || isOverCard) && active;

  const isBlue = color === "blue";
  const dotColor = isBlue ? "bg-blue-500" : "bg-emerald-500";
  const textColor = isBlue ? "text-blue-500" : "text-emerald-500";
  const borderColor = isBlue ? "border-blue-200" : "border-emerald-200";

  // 이 일차의 카드들에서 좌표 추출 (useMemo로 메모이제이션하여 깜빡임 방지)
  const markers = useMemo(() => {
    if (!allCards) {
      return [];
    }

    const result = cards
      .map((card: any) => {
        const fullCard = (allCards as any).get?.(card.id);

        if (!fullCard?.coordinates) {
          return null;
        }

        return {
          id: card.id,
          title: card.text || fullCard.route || '위치',
          coordinates: fullCard.coordinates,
          category: fullCard.category || 'unknown',
        };
      })
      .filter((marker: any): marker is NonNullable<typeof marker> => marker !== null);

    return result;
  }, [allCards, cards]);

  const dayNumber = parseInt(dayId.replace('day', ''));

  // 활성화 시 스타일 (리스트 전체를 감싸는 박스가 강조됨)
  const activeClass = isBlue
    ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-100 border-dashed"
    : "border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-100 border-dashed";

  // 기본 스타일: 흰색 배경, 얇은 테두리, 그림자 살짝 (하나의 종이 같은 느낌)
  const defaultClass = "bg-white border-gray-200 border shadow-sm";

  return (
    <div id={`${dayId}-section`} className="mb-6 scroll-mt-28">
      {/* 헤더 영역 (날짜) */}
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <span className={`w-1.5 h-5 rounded-full ${dotColor}`}></span>
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {date && (
            <span className="text-[11px] text-slate-400 font-medium">{date}</span>
          )}
          {/* 지도 버튼 (Day 0 제외, 항상 표시하되 좌표 있을 때만 활성화) */}
          {dayNumber > 0 && (
            <button
              onClick={() => {
                if (markers.length > 0) {
                  onMapClick?.(dayNumber, markers);
                } else {
                  // 마커가 없을 때는 아무 동작 안 함
                }
              }}
              className={`p-1.5 rounded-lg transition-colors ${markers.length > 0
                ? 'hover:bg-emerald-50 group cursor-pointer'
                : 'cursor-not-allowed opacity-40'
                }`}
              title={
                markers.length > 0
                  ? `지도 보기 (${markers.length}개 위치)`
                  : '표시할 위치가 없습니다'
              }
              disabled={markers.length === 0}
            >
              <Map
                className={`w-4 h-4 ${markers.length > 0
                  ? 'text-slate-400 group-hover:text-emerald-600'
                  : 'text-slate-300'
                  }`}
              />
            </button>
          )}
        </div>
      </div>

      <SortableContext items={[...cards.map((c: any) => c.id)]} strategy={verticalListSortingStrategy}>
        <div
          ref={setNodeRef}
          // 💥 [수정됨] space-y-0 (간격 없음, 리스트처럼 연결), overflow-hidden (둥근 모서리 안으로 내용 자르기)
          className={`min-h-[72px] rounded-xl transition-all duration-200 ease-in-out flex flex-col overflow-hidden ${isSectionActive ? activeClass : defaultClass
            }`}
        >
          {/* 빈 상태 안내 */}
          {cards.length === 0 && !isSectionActive && (
            <div className="text-center py-6 pointer-events-none">
              <p className="text-xs text-slate-300 font-medium">일정을 추가하세요</p>
            </div>
          )}

          {/* 드래그 오버 안내 */}
          {(cards.length === 0 && isSectionActive) && (
            <div className="h-[72px] flex items-center justify-center pointer-events-none animate-pulse">
              <p className={`text-xs font-bold ${textColor} flex items-center gap-2`}>
                ✨ 여기에 놓기
              </p>
            </div>
          )}

          {/* 카드 리스트 렌더링 */}
          {cards.map((card: any) => {
            if (!card) return null;
            return <DraggableCard key={card.id} card={card} variant="compact" />;
          })}
        </div>
      </SortableContext>
    </div>
  );
});

export const Timeline = memo(function Timeline({
  columns,
  cards,
  addToast,
  sections = ['destination-header', 'candidates', 'days'] // default: render all
}: any) {
  const { active } = useDndContext();
  const day0Column = columns.get("day0");
  const day0Cards = day0Column?.cardIds?.map((id: string) => cards.get(id)).filter(Boolean) || [];

  // destination-header 카드
  const destHeaderCards = columns.get("destination-header")?.cardIds?.map((id: string) => cards.get(id)).filter(Boolean) || [];

  // 드래그 중인 카드가 destination-header에서 나온 것인지 확인
  const isDraggingFromHeader = active?.id && destHeaderCards.some((card: any) => card.id === active.id);

  // 드래그 중이면 그 카드를 제외하고 계산 (드래그 = 빠진 상태)
  const effectiveHeaderCount = isDraggingFromHeader ? destHeaderCards.length - 1 : destHeaderCards.length;

  // 항공편 정보 가져오기
  const flightInfo = useStorage((root) => root.flightInfo) as any;

  // 지도 모달 state (전체 Timeline에서 하나만 관리)
  const [selectedDayForMap, setSelectedDayForMap] = useState<{ dayNumber: number; markers: any[] } | null>(null);

  // Dynamic day detection from columns
  const getDayColumns = () => {
    const dayColumns: Array<{ id: string; title: string; date: string; cards: any[] }> = [];

    // 항공편 정보에서 출발 날짜 가져오기
    const departureDate = flightInfo?.outbound?.date;

    // Check columns for day1, day2, day3, etc.
    for (let i = 1; i <= 20; i++) { // Check up to day20
      const dayId = `day${i}`;
      const dayColumn = columns.get(dayId);

      if (dayColumn) {
        const dayCards = dayColumn.cardIds?.map((id: string) => cards.get(id)).filter(Boolean) || [];

        // 날짜 계산
        let dateStr = '';
        if (departureDate) {
          const date = new Date(departureDate);
          date.setDate(date.getDate() + (i - 1)); // i일차는 출발일 + (i-1)일
          dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        }

        dayColumns.push({
          id: dayId,
          title: `${i}일차`,
          date: dateStr,
          cards: dayCards
        });
      } else {
        // Stop when we don't find the next day
        break;
      }
    }

    return dayColumns;
  };

  const dayColumns = getDayColumns();

  const shouldRenderDestinationHeader = sections.includes('destination-header');
  const shouldRenderCandidates = sections.includes('candidates');
  const shouldRenderDays = sections.includes('days');

  return (
    <div className="w-full h-full">

      {shouldRenderDestinationHeader && (
        <div className="sticky top-0 z-20 bg-white shadow-sm overflow-hidden">
          <DestinationHeaderSection cards={destHeaderCards} />
        </div>
      )}

      {/* 나머지 섹션들: 패딩과 max-width 적용 */}
      {(shouldRenderCandidates || shouldRenderDays) && (
        <div className="p-3 md:p-6 bg-slate-50">
          <div className="max-w-xl mx-auto pb-20">
            {/* 여행지 후보: 실제 header 카드 개수로 표시/숨김 결정 */}
            {shouldRenderCandidates && (
              <div className={effectiveHeaderCount > 0 ? 'hidden' : ''}>
                <DaySection
                  dayId="destination-candidates"
                  title="여행지 후보"
                  date="Candidates"
                  cards={columns.get("destination-candidates")?.cardIds?.map((id: string) => cards.get(id)).filter(Boolean) || []}
                  color="emerald"
                />
              </div>
            )}

            {/* 항공편 섹션 */}
            {shouldRenderDays && (
              <div id="flights-section">
                <FlightSection
                  destinationCard={destHeaderCards[0] || null}
                  addToast={addToast}
                  onConfirm={(data) => {
                    // TODO: 항공편 데이터 저장 및 자동 Day 생성 로직
                  }}
                />
              </div>
            )}
            {shouldRenderDays && (
              <>
                <DaySection
                  dayId="day0"
                  title="0일차 (준비)"
                  date="Check List"
                  cards={day0Cards}
                  color="blue"
                  onMapClick={(dayNumber: number, markers: any[]) => {
                    setSelectedDayForMap({ dayNumber, markers });
                  }}
                />

                {dayColumns.map(day => (
                  <DaySection
                    key={day.id}
                    dayId={day.id}
                    title={day.title}
                    date={day.date}
                    cards={day.cards}
                    onMapClick={(dayNumber: number, markers: any[]) => {
                      setSelectedDayForMap({ dayNumber, markers });
                    }}
                  />
                ))}

                {/* 통합 지도 모달 (Timeline 레벨에서 하나만) */}
                <DayMapModal
                  dayNumber={selectedDayForMap?.dayNumber || 0}
                  markers={selectedDayForMap?.markers || []}
                  isOpen={selectedDayForMap !== null}
                  onClose={() => setSelectedDayForMap(null)}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
});