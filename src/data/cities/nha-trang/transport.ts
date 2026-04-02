import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "VinBus",
        type: "bus",
        city: "Nha Trang",
        description: "전기버스",
        priceRange: "5,000 VND",
        features: ["친환경", "앱 추적"],
        icon: "🚌"
    },
    {
        name: "Grab",
        type: "ride-hailing",
        city: "Nha Trang",
        description: "그랩카, 그랩바이크",
        appRequired: true,
        appName: "Grab",
        icon: "🚕"
    },
    {
        name: "Xanh SM Taxi",
        type: "taxi",
        city: "Nha Trang",
        description: "전기 택시",
        appRequired: true,
        appName: "Xanh SM",
        icon: "🚕"
    },
    {
        name: "관광버스",
        type: "shuttle",
        city: "Nha Trang",
        description: "Hop-on Hop-off",
        features: ["16개 관광지"],
        icon: "🚌"
    },
    {
        name: "공항 픽업/센딩 (캄란)",
        type: "airport-transfer",
        city: "Nha Trang",
        description: "캄란 공항 픽업/센딩",
        priceRange: "200,000~400,000 VND",
        features: ["35km 거리", "Grab 예약"],
        icon: "✈️"
    }
];

export default transport;
