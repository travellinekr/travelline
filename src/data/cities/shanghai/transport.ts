import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Shanghai Metro",
        type: "subway",
        city: "Shanghai",
        description: "19개 노선, 세계 최대 규모",
        priceRange: "3-15 RMB",
        features: ["에어컨", "QR코드"],
        icon: "🚇"
    },
    {
        name: "시내버스",
        type: "bus",
        city: "Shanghai",
        description: "2,000개 노선",
        priceRange: "1-2 RMB",
        features: ["QR코드"],
        icon: "🚌"
    },
    {
        name: "DiDi",
        type: "ride-hailing",
        city: "Shanghai",
        description: "중국 대표 라이드셰어",
        appRequired: true,
        appName: "DiDi",
        features: ["영어 지원", "캐시리스"],
        icon: "🚕"
    },
    {
        name: "Maglev",
        type: "subway",
        city: "Shanghai",
        description: "자기부상열차, 공항 연결",
        priceRange: "50 RMB",
        features: ["430km/h 고속"],
        icon: "🚄"
    },
    {
        name: "공항 픽업/센딩 (푸둥)",
        type: "airport-transfer",
        city: "Shanghai",
        description: "푸둥 공항 픽업/센딩",
        priceRange: "200~400 RMB",
        features: ["영어 운전사", "DiDi 예약"],
        icon: "✈️"
    }
];

export default transport;
