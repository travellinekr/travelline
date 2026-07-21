import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Bohol", description: "보홀 팡라오 국제공항에서 알로나·팡라오 리조트까지 이동", priceRange: "₱500~1500+", availability: "항공편 시간대", features: ["심야 도착", "호텔 직행", "가족 여행 편리"], icon: "✈️" },
    { name: "트라이시클", showInInbox: true, type: "traditional", city: "Bohol", description: "알로나비치·팡라오 근거리 이동에 많이 쓰는 현지 교통", priceRange: "₱100~500+", availability: "지역별 상이", features: ["근거리", "현금 준비", "요금 사전 협의"], icon: "🛺" },
    { name: "그랩/택시", showInInbox: true, type: "ride-hailing", city: "Bohol", description: "공항·타그빌라란·팡라오 구간 보조 이동수단", priceRange: "₱200~1200+", availability: "배차 제한 가능", features: ["앱 호출", "요금 확인", "피크타임 주의"], appRequired: true, appName: "Grab", paymentMethods: ["현금", "앱 결제"], icon: "🚗" },
    { name: "전용 차량 투어", showInInbox: true, type: "rental-car", city: "Bohol", description: "초콜릿힐·로복강·안경원숭이 보호구역을 묶는 육상투어 차량", priceRange: "₱2500~6000+", availability: "사전 예약", features: ["육상투어", "기사 포함", "일정 맞춤"], icon: "🚐" },
    { name: "호핑투어 보트", showInInbox: true, type: "traditional", city: "Bohol", description: "발리카삭·버진아일랜드·파밀라칸 이동용 보트 투어", priceRange: "투어별 상이", availability: "날씨·업체별 상이", features: ["스노클링", "섬투어", "픽업 포함 여부 확인"], icon: "🚤" }
];

export default transport;
