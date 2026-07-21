import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "그랩", showInInbox: true, type: "ride-hailing", city: "Kuala Lumpur", description: "KLCC·부킷빈탕·KL센트럴 이동에 가장 편한 호출 차량", priceRange: "RM8~80+", availability: "전역", features: ["앱 호출", "요금 사전 확인", "피크타임 정체 주의"], appRequired: true, appName: "Grab", paymentMethods: ["현금", "앱 결제"], icon: "🚗" },
    { name: "LRT/MRT/모노레일", showInInbox: true, type: "subway", city: "Kuala Lumpur", description: "KLCC·부킷빈탕·센트럴·차이나타운을 잇는 도시철도", priceRange: "RM1.20~6+", availability: "노선별 상이", features: ["교통카드", "정체 회피", "환승 확인"], paymentMethods: ["Touch 'n Go", "현금/카드 충전"], icon: "🚇" },
    { name: "KLIA 익스프레스", showInInbox: true, type: "airport-transfer", city: "Kuala Lumpur", description: "쿠알라룸푸르국제공항과 KL 센트럴을 잇는 공항철도", priceRange: "RM55 내외", availability: "운행 시간 확인", features: ["공항 이동", "정시성", "KL Sentral 연결"], icon: "🚆" },
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Kuala Lumpur", description: "심야 도착·가족 여행·짐이 많을 때 편한 사전 예약 차량", priceRange: "RM80~250+", availability: "항공편 시간대", features: ["심야 도착", "호텔 직행", "대형 짐"], icon: "✈️" },
    { name: "도보 연결 통로", showInInbox: true, type: "traditional", city: "Kuala Lumpur", description: "KLCC와 부킷빈탕을 잇는 에어컨 보행 통로와 쇼핑몰 연결 동선", priceRange: "무료", availability: "상시/몰 운영시간 영향", features: ["더위 회피", "쇼핑몰 연결", "비 오는 날 유용"], icon: "🚶" }
];

export default transport;
