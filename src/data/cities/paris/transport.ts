import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "메트로 (지하철)",
        showInInbox: true,
        type: "subway",
        city: "Paris",
        description: "파리 지하철 1~14호선",
        priceRange: "€2.15/회, 카르네 10회권",
        features: ["편리", "시내 이동 최적"],
        icon: "🚇"
    },
    {
        name: "RER",
        showInInbox: true,
        type: "tram",
        city: "Paris",
        description: "광역 급행 철도, 공항 연결",
        priceRange: "€3.80~€11.80",
        features: ["공항 연결", "베르사유"],
        icon: "🚆"
    },
    {
        name: "버스",
        showInInbox: true,
        type: "bus",
        city: "Paris",
        description: "시내 버스, 나이트버스",
        priceRange: "€2.15/회",
        features: ["야간 운행", "지상 관광"],
        icon: "🚌"
    },
    {
        name: "택시",
        showInInbox: false,
        type: "taxi",
        city: "Paris",
        description: "파리 시내 택시",
        priceRange: "€10~50",
        features: ["야간 가능", "공항 €50~70"],
        icon: "🚕"
    },
    {
        name: "Uber",
        showInInbox: false,
        type: "ride-hailing",
        city: "Paris",
        description: "우버 프랑스",
        appRequired: true,
        appName: "Uber",
        features: ["편리", "영어 가능"],
        icon: "🚕"
    },
    {
        name: "Vélib' (공유 자전거)",
        showInInbox: false,
        type: "micromobility",
        city: "Paris",
        description: "파리 시내 공유 자전거",
        priceRange: "€3~10/일",
        features: ["친환경", "단거리 이동"],
        icon: "🚲"
    },
    {
        name: "공항 픽업 (CDG/ORY)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Paris",
        description: "샤를 드골 / 오를리 공항",
        priceRange: "€35~80",
        features: ["RER B (CDG)", "미리 예약 권장"],
        icon: "✈️"
    }
];

export default transport;
