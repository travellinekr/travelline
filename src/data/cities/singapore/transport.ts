import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "MRT", showInInbox: true, type: "subway", city: "Singapore", description: "공항·도심·주요 명소를 잇는 핵심 지하철", priceRange: "S$1~3+", availability: "05:30~자정 전후", features: ["EZ-Link", "SimplyGo", "공항 연결"], appRequired: true, appName: "SimplyGo", paymentMethods: ["교통카드", "비접촉 카드"], icon: "🚇" },
    { name: "버스", showInInbox: true, type: "bus", city: "Singapore", description: "MRT 사각지대까지 연결하는 촘촘한 버스망", priceRange: "S$1~3+", availability: "노선별 상이", features: ["저렴", "촘촘한 노선", "교통카드"], icon: "🚌" },
    { name: "그랩", showInInbox: true, type: "ride-hailing", city: "Singapore", description: "심야·가족 이동에 편한 호출 차량", priceRange: "S$10~60+", availability: "전역", features: ["앱 호출", "요금 사전 확인", "공항 이동"], appRequired: true, appName: "Grab", paymentMethods: ["카드", "현금"], icon: "🚗" },
    { name: "택시", showInInbox: true, type: "taxi", city: "Singapore", description: "공항·호텔·택시 승강장에서 이용 가능", priceRange: "S$10~80+", availability: "전역", features: ["즉시 탑승", "피크/심야 할증"], paymentMethods: ["카드", "현금"], icon: "🚕" },
    { name: "공항 이동", showInInbox: true, type: "airport-transfer", city: "Singapore", description: "창이공항은 MRT·택시·그랩 모두 편리", priceRange: "MRT S$2~3 / 차량 S$25~60+", availability: "항공편 시간대", features: ["창이공항", "MRT 연결", "심야 차량 권장"], icon: "✈️" },
    { name: "센토사 익스프레스", showInInbox: true, type: "traditional", city: "Singapore", description: "비보시티와 센토사를 잇는 모노레일", priceRange: "정책별 상이", availability: "운영시간 확인", features: ["센토사", "비보시티", "테마파크 이동"], icon: "🚝" }
];

export default transport;
