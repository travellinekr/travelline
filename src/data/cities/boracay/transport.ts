import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Boracay", description: "카티클란/칼리보 공항에서 선착장·호텔까지 사전 예약 이동", priceRange: "₱700~4000+", availability: "항공편 시간대", features: ["공항-선착장", "보트 포함 상품 확인", "대형 짐"], icon: "✈️" },
    { name: "보트/페리", showInInbox: true, type: "traditional", city: "Boracay", description: "카티클란 제티포트와 보라카이 섬을 잇는 필수 이동", priceRange: "환경세/터미널/보트 요금 별도", availability: "날씨와 운항 상황 영향", features: ["카티클란 제티포트", "섬 입도", "현장 결제"], icon: "⛴️" },
    { name: "트라이시클", showInInbox: true, type: "traditional", city: "Boracay", description: "섬 내 스테이션·해변·호텔 이동의 기본 교통", priceRange: "₱20~300+", availability: "전역", features: ["단거리", "현금", "요금 흥정/확인"], icon: "🛺" },
    { name: "E-트라이크", showInInbox: true, type: "traditional", city: "Boracay", description: "보라카이 섬 내 친환경 삼륜차 이동", priceRange: "₱20~300+", availability: "전역", features: ["섬 내 이동", "단거리", "현금"], icon: "🔋" },
    { name: "호텔 셔틀", showInInbox: true, type: "shuttle", city: "Boracay", description: "리조트/호텔에서 제공하는 선착장·디몰·비치 셔틀", priceRange: "무료 또는 숙소별 상이", availability: "숙소별 시간표 확인", features: ["리조트 이동", "짐 이동", "시간표 확인"], icon: "🚌" },
    { name: "투어 보트", showInInbox: true, type: "traditional", city: "Boracay", description: "호핑투어·크리스탈코브·매직아일랜드 등 액티비티 보트", priceRange: "상품별 상이", availability: "날씨 영향", features: ["호핑투어", "액티비티", "사전 예약"], icon: "🚤" }
];

export default transport;
