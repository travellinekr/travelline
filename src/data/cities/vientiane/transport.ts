import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Vientiane", description: "왓따이 국제공항에서 남푸·메콩강·시내 호텔까지 이동", priceRange: "₭100k~300k+", availability: "항공편 시간대", features: ["공항 이동", "호텔 직행", "심야 도착 편리"], icon: "✈️" },
    { name: "택시/호출차", showInInbox: true, type: "ride-hailing", city: "Vientiane", description: "시내와 공항, 부다파크 이동 보조에 쓰는 차량 호출·택시", priceRange: "₭40k~250k+", availability: "시내 중심", features: ["요금 확인", "공항 이동", "배차 확인"], appRequired: true, appName: "LOCA / 택시", paymentMethods: ["현금", "앱 결제"], icon: "🚗" },
    { name: "툭툭", showInInbox: true, type: "traditional", city: "Vientiane", description: "남푸·메콩강·사원 구간 단거리 이동에 쓰는 현지 교통", priceRange: "흥정/구간별 상이", availability: "관광지 주변", features: ["단거리", "요금 사전 협의", "현금 준비"], icon: "🛺" },
    { name: "전용 차량 투어", showInInbox: true, type: "rental-car", city: "Vientiane", description: "부다파크·파탓루앙·빠뚜사이·공항샌딩을 묶는 기사 포함 차량", priceRange: "₭500k~1500k+", availability: "사전 예약", features: ["시내투어", "근교 이동", "공항샌딩"], icon: "🚐" },
    { name: "도보/자전거", showInInbox: true, type: "traditional", city: "Vientiane", description: "남푸·메콩강·사원 주변을 천천히 둘러볼 때 적합", priceRange: "무료~대여료", availability: "날씨 영향", features: ["시내 산책", "강변 동선", "더위 주의"], icon: "🚶" }
];

export default transport;
