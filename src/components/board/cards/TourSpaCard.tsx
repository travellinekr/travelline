import { Palmtree } from "lucide-react";
import { BaseCard } from "./BaseCard";

// 투어&스파 타입별 한글 레이블
const TOUR_SPA_TYPE_LABELS: Record<string, string> = {
    'island-hopping': '아일랜드 호핑',
    'city-tour': '시티 투어',
    'nature-tour': '자연 관광',
    'cultural-tour': '문화 투어',
    'adventure': '액티비티',
    'water-sports': '수상 스포츠',
    'diving': '다이빙',
    'snorkeling': '스노클링',
    'massage': '마사지',
    'spa': '스파',
    'wellness': '웰니스',
    'hot-spring': '온천',
};

export function TourSpaCard({ card, ...props }: any) {
    // 실제 투어&스파 이름 (card.text 또는 card.title 사용)
    const tourSpaName = card.text || card.title || "투어 & 스파";

    // 투어&스파 카테고리 (tourSpaType을 한글로 변환)
    const category = card.tourSpaType
        ? TOUR_SPA_TYPE_LABELS[card.tourSpaType] || card.tourSpaType
        : "투어&스파";

    // 메모가 있는지 확인 (BlockNote 블록 배열 체크)
    const hasNotes = Boolean(
        card.notes &&
        Array.isArray(card.notes) &&
        card.notes.length > 0 &&
        // 빈 블록만 있는지 확인 (content가 비어있지 않은 블록이 하나라도 있으면 true)
        card.notes.some((block: any) => {
            // paragraph 블록의 경우 content 배열이 있고, 내용이 있는지 확인
            if (block.type === 'paragraph' && Array.isArray(block.content)) {
                return block.content.length > 0 && block.content.some((item: any) => item.text && item.text.trim().length > 0);
            }
            // 다른 타입의 블록(heading, list 등)은 존재하면 true
            return block.type !== 'paragraph';
        })
    );

    return (
        <BaseCard {...props} colorClass="bg-teal-400" icon={Palmtree} category={category} className="h-[72px]" hasNotes={hasNotes}>
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center gap-2">
                    {card.icon && (
                        <span className="text-base">{card.icon}</span>
                    )}
                    <h4 className="font-bold text-slate-800 text-[15px] truncate leading-tight">{tourSpaName}</h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {/* 주소 표시 (최우선) */}
                    {card.address && (
                        <span className="text-[11px] text-gray-600 truncate">
                            {card.address}
                        </span>
                    )}
                    {/* 주소가 없으면 설명 표시 */}
                    {!card.address && card.description && (
                        <span className="text-[11px] text-gray-600 truncate">
                            {card.description}
                        </span>
                    )}
                    {card.duration && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[11px] text-gray-500">
                                {card.duration}
                            </span>
                        </>
                    )}
                    {card.pickupAvailable && (
                        <>
                            <span className="text-gray-300">|</span>
                            <span className="text-[9px] text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100 font-bold">
                                픽업
                            </span>
                        </>
                    )}
                </div>
            </div>
        </BaseCard>
    );
}
