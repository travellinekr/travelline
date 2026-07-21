import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Manado", description: "삼 라투랑이 국제공항에서 시내·리조트까지 이동", priceRange: "Rp150k~500k+", availability: "항공편 시간대", features: ["심야 도착", "리조트 픽업", "짐 많을 때 편리"], icon: "✈️" },
    { name: "그랩/고젝", showInInbox: true, type: "ride-hailing", city: "Manado", description: "마나도 시내와 쇼핑몰 이동에 편한 호출 차량", priceRange: "Rp20k~200k+", availability: "시내 중심", features: ["앱 호출", "요금 사전 확인", "교외 배차 제한"], appRequired: true, appName: "Grab / Gojek", paymentMethods: ["현금", "앱 결제"], icon: "🚗" },
    { name: "전용 차량 투어", showInInbox: true, type: "rental-car", city: "Manado", description: "토모혼·탕코코·공항 이동을 묶기 좋은 기사 포함 차량", priceRange: "Rp600k~1500k+", availability: "사전 예약", features: ["근교 투어", "기사 포함", "일정 맞춤"], icon: "🚐" },
    { name: "보트/호핑투어", showInInbox: true, type: "traditional", city: "Manado", description: "부나켄·실라덴·리하가 섬 이동과 호핑투어용 보트", priceRange: "투어별 상이", availability: "날씨·업체별 상이", features: ["부나켄", "스노클링", "다이빙"], paymentMethods: ["현금", "업체별 확인"], icon: "🚤" },
    { name: "오젝/현지 택시", showInInbox: true, type: "traditional", city: "Manado", description: "짧은 시내 이동이나 로컬 구간 보조 이동수단", priceRange: "흥정/앱 요금", availability: "지역별 상이", features: ["단거리", "현금 준비", "언어 소통 주의"], icon: "🛵" }
];

export default transport;
