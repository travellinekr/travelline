import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "그랩", showInInbox: true, type: "ride-hailing", city: "Hanoi", description: "공항·구시가지·서호 이동에 가장 편한 호출 차량", priceRange: "₫40k~500k+", availability: "전역", features: ["앱 호출", "요금 사전 확인", "공항 이동"], appRequired: true, appName: "Grab", paymentMethods: ["카드", "현금"], icon: "🚗" },
    { name: "택시", showInInbox: true, type: "taxi", city: "Hanoi", description: "공항·호텔·관광지에서 이용 가능한 일반 택시", priceRange: "₫50k~600k+", availability: "전역", features: ["즉시 탑승", "미터 확인 권장"], paymentMethods: ["현금", "카드 가능 여부 차량별 확인"], icon: "🚕" },
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Hanoi", description: "노이바이공항에서 구시가지/서호 호텔까지 사전 예약 이동", priceRange: "₫300k~900k+", availability: "항공편 시간대", features: ["심야 도착", "가족 여행", "대형 짐"], icon: "✈️" },
    { name: "시내버스", showInInbox: true, type: "bus", city: "Hanoi", description: "저렴하지만 여행자는 노선 확인이 필요한 대중교통", priceRange: "₫8k~45k", availability: "노선별 상이", features: ["저렴", "노선 확인 필요", "공항버스"], icon: "🚌" },
    { name: "오토바이 택시", showInInbox: true, type: "traditional", city: "Hanoi", description: "교통 체증이 심한 구시가지에서 빠른 단거리 이동", priceRange: "₫20k~150k+", availability: "전역", features: ["단거리", "혼잡 시간 유리", "헬멧 착용"], appRequired: true, appName: "Grab", icon: "🏍️" },
    { name: "투어 셔틀", showInInbox: true, type: "shuttle", city: "Hanoi", description: "닌빈·하롱베이·사파 등 외곽 투어 픽업", priceRange: "상품 포함 또는 별도", availability: "투어 예약 시 확인", features: ["호텔 픽업", "외곽 투어", "시간표 확인"], icon: "🚐" }
];

export default transport;
