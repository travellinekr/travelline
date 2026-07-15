import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    { name: "공항 픽업", showInInbox: true, type: "airport-transfer", city: "Pattaya", description: "우타파오 또는 방콕 수완나품공항에서 파타야 호텔까지 사전 예약 이동", priceRange: "฿900~3500+", availability: "항공편 시간대", features: ["공항 이동", "대형 짐", "가족 여행"], icon: "✈️" },
    { name: "그랩/볼트", showInInbox: true, type: "ride-hailing", city: "Pattaya", description: "시내·좀티엔·나끌루아 이동에 편한 호출 차량", priceRange: "฿80~700+", availability: "전역", features: ["앱 호출", "요금 사전 확인", "단거리/장거리"], appRequired: true, appName: "Grab/Bolt", paymentMethods: ["카드", "현금"], icon: "🚗" },
    { name: "썽태우", showInInbox: true, type: "traditional", city: "Pattaya", description: "비치로드·세컨드로드·좀티엔 노선에서 많이 쓰는 공유 픽업트럭", priceRange: "฿10~50+", availability: "주요 도로", features: ["저렴", "현금", "노선 확인"], icon: "🛻" },
    { name: "택시", showInInbox: true, type: "taxi", city: "Pattaya", description: "호텔·관광지·공항 이동에 이용 가능한 일반 택시", priceRange: "฿150~2500+", availability: "전역", features: ["요금 사전 협의", "장거리 이동"], paymentMethods: ["현금", "카드 가능 여부 차량별 확인"], icon: "🚕" },
    { name: "렌터카/기사 차량", showInInbox: true, type: "rental-car", city: "Pattaya", description: "농눅빌리지·카오키여우·라용 등 외곽 일정에 적합", priceRange: "฿1500~5000+", availability: "예약 필요", features: ["외곽 투어", "가족 여행", "일일 대절"], icon: "🚙" },
    { name: "투어 셔틀", showInInbox: true, type: "shuttle", city: "Pattaya", description: "꼬란·농눅빌리지·수상시장 등 액티비티 픽업", priceRange: "상품 포함 또는 별도", availability: "투어 예약 시 확인", features: ["호텔 픽업", "액티비티", "시간표 확인"], icon: "🚐" }
];

export default transport;
