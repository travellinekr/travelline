import type { RestaurantInfo } from '@/data/card-info-types';

// Osaka 맛집 인포 pilot 데이터.
// 실 서비스 인포는 add-card-info 스킬 참조해 등록.

const info: Record<string, RestaurantInfo> = {
    "이치란 라멘 도톤보리": {
        summary: "24시간 운영 · 1인 좌석 전문 돈코츠 라멘 전문점.",
        highlights: [
            "칸막이 1인 좌석 (혼밥 편함)",
            "영어·중국어·한국어 메뉴판 · 주문표 방식",
            "24시간 운영 · 심야에도 대기",
        ],
        tips: [
            "티켓 자판기 → 라멘 티켓 구매 → 자리 안내",
            "주문표에 맛/기름기/마늘/차슈/파 선호도 체크",
            "리필면(카에다마) ¥210 별도",
        ],
        warnings: [
            "⚠️ 관광 성수기 · 심야 시간 대기 30분~1시간",
        ],
        reservation: { required: false, note: "예약 불가 · 워크인만" },
        menu: {
            signature: "돈코츠 라멘 (¥980)",
            items: [
                { name: "돈코츠 라멘", price: "¥980" },
                { name: "차슈 추가", price: "¥250", note: "3장" },
                { name: "카에다마 (리필면)", price: "¥210" },
            ],
        },
        hours: "24시간",
        payment: ["카드", "현금"],
        waitTime: "평일 20~40분, 주말·심야 60분+",
        updatedAt: "2026-07-05",
        links: [
            { label: "이치란 공식 사이트", url: "https://ichiran.com/", type: "official", description: "이치란 공식 홈페이지" },
        ],
    },
};

export default info;
