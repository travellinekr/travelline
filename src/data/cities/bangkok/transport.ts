import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "BTS Skytrain",
        showInInbox: true,
        type: "subway",
        city: "Bangkok",
        description: "스카이트레인, Sukhumvit/Silom Line",
        priceRange: "฿16-59",
        features: ["에어컨", "Rabbit Card"],
        icon: "🚈"
    },
    {
        name: "MRT",
        showInInbox: true,
        type: "subway",
        city: "Bangkok",
        description: "지하철, Blue/Purple Line 등",
        priceRange: "฿14-42",
        features: ["에어컨"],
        icon: "🚇"
    },
    {
        name: "BMTA Bus",
        showInInbox: true,
        type: "bus",
        city: "Bangkok",
        description: "100개 이상 노선",
        priceRange: "฿8-25",
        features: ["일부 에어컨"],
        icon: "🚌"
    },
    {
        name: "Grab",
        showInInbox: true,
        type: "ride-hailing",
        city: "Bangkok",
        description: "그랩카, 그랩바이크",
        appRequired: true,
        appName: "Grab",
        features: ["24시간"],
        icon: "🚕"
    },
    {
        name: "Bolt",
        showInInbox: true,
        type: "ride-hailing",
        city: "Bangkok",
        description: "라이드셰어",
        appRequired: true,
        appName: "Bolt",
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (수완나품)",
        showInInbox: true,
        type: "airport-transfer",
        city: "Bangkok",
        description: "수완나품/돈므앙 공항 픽업/센딩",
        priceRange: "฿800~1,500",
        features: ["Grab 예약", "호텔 미팅"],
        icon: "✈️"
    }
];

export default transport;
