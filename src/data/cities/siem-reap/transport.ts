import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "그랩/패스앱", showInInbox: true, type: "ride-hailing", city: "Siem Reap", description: "시내·공항·펍스트리트 이동에 쓰기 좋은 호출 차량/툭툭", priceRange: "$1~15+", availability: "전역", features: ["앱 호출", "요금 사전 확인", "툭툭/차량 선택"], appRequired: true, appName: "Grab / PassApp", paymentMethods: ["현금", "앱 결제 가능 여부 확인"], icon: "🚗" },
    { name: "툭툭", showInInbox: true, type: "traditional", city: "Siem Reap", description: "앙코르 유적과 시내 이동에 가장 흔한 교통수단", priceRange: "$2~25+", availability: "전역", features: ["흥정 필요", "사원 투어", "단거리 이동"], paymentMethods: ["현금"], icon: "🛺" },
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Siem Reap", description: "씨엠립 앙코르국제공항에서 호텔까지 사전 예약 이동", priceRange: "$25~60+", availability: "항공편 시간대", features: ["심야 도착", "대형 짐", "호텔 픽업"], icon: "✈️" },
    { name: "전용 차량 투어", showInInbox: true, type: "rental-car", city: "Siem Reap", description: "앙코르와트·반띠아이 스레이·프놈쿨렌 외곽 투어용 차량", priceRange: "$35~120+", availability: "투어 예약 시 확인", features: ["기사 포함", "외곽 유적", "일출 투어"], icon: "🚐" },
    { name: "자전거", showInInbox: true, type: "micromobility", city: "Siem Reap", description: "시내와 일부 평지 구간을 천천히 둘러보는 이동수단", priceRange: "$2~10", availability: "렌털숍별 상이", features: ["근거리", "더위 주의", "야간 조명 필요"], icon: "🚲" }
];

export default transport;
