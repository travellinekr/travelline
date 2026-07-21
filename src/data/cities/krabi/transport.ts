import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "그랩/볼트", showInInbox: true, type: "ride-hailing", city: "Krabi", description: "아오낭·끄라비타운·공항 이동에 쓰기 좋은 호출 차량", priceRange: "฿80~800+", availability: "주요 관광지", features: ["앱 호출", "요금 사전 확인", "지역별 배차 차이"], appRequired: true, appName: "Grab / Bolt", paymentMethods: ["현금", "앱 결제 가능 여부 확인"], icon: "🚗" },
    { name: "롱테일보트", showInInbox: true, type: "traditional", city: "Krabi", description: "아오낭·라일레이·4섬 투어 이동의 핵심 보트", priceRange: "฿100~2500+", availability: "선착장·날씨별 상이", features: ["라일레이 이동", "섬투어", "날씨 영향"], paymentMethods: ["현금"], icon: "🚤" },
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Krabi", description: "끄라비국제공항에서 아오낭·라일레이 선착장·끄라비타운까지 이동", priceRange: "฿150~1200+", availability: "항공편 시간대", features: ["심야 도착", "호텔 픽업", "짐 많을 때 편리"], icon: "✈️" },
    { name: "전용 차량 투어", showInInbox: true, type: "rental-car", city: "Krabi", description: "에메랄드풀·온천·타이거 케이브 등 내륙 투어용 차량", priceRange: "฿1800~4500+", availability: "투어 예약 시 확인", features: ["기사 포함", "내륙 명소", "가족 여행"], icon: "🚐" },
    { name: "스쿠터 렌털", showInInbox: true, type: "micromobility", city: "Krabi", description: "아오낭 주변 단거리 이동용 렌털 수단", priceRange: "฿200~400/일", availability: "렌털숍별 상이", features: ["국제면허 확인", "헬멧 필수", "우기 주의"], icon: "🛵" }
];

export default transport;
