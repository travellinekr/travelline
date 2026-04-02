import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "송태우",
        type: "traditional",
        city: "Chiang Mai",
        description: "빨간 픽업트럭 합승 택시",
        priceRange: "฿30~60",
        features: ["저렴", "현지 교통"],
        icon: "🚐"
    },
    {
        name: "툭툭",
        type: "traditional",
        city: "Chiang Mai",
        description: "3륜 오토바이 택시",
        priceRange: "฿60~150",
        features: ["단거리", "흥정"],
        icon: "🛺"
    },
    {
        name: "RTC 시내버스",
        type: "bus",
        city: "Chiang Mai",
        description: "치앙마이 시내버스",
        priceRange: "฿15~20",
        features: ["저렴", "노선 제한"],
        icon: "🚌"
    },
    {
        name: "Grab",
        type: "ride-hailing",
        city: "Chiang Mai",
        description: "그랩카, 그랩바이크",
        appRequired: true,
        appName: "Grab",
        features: ["안전", "고정요금"],
        icon: "🚕"
    },
    {
        name: "Bolt",
        type: "ride-hailing",
        city: "Chiang Mai",
        description: "Grab 대안 앱",
        appRequired: true,
        appName: "Bolt",
        features: ["저렴", "편리"],
        icon: "⚡"
    },
    {
        name: "공항 픽업/센딩",
        type: "airport-transfer",
        city: "Chiang Mai",
        description: "치앙마이 국제공항 픽업/센딩",
        priceRange: "฿150~300",
        features: ["Grab 추천", "시내 30분"],
        icon: "✈️"
    }
];

export default transport;
