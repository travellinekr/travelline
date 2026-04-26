import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "DanaBus",
        showInInbox: true,
        type: "bus",
        city: "Da Nang",
        description: "시내버스, DanaBus 앱",
        priceRange: "5,000-30,000 VND",
        features: ["에어컨", "앱 추적"],
        icon: "🚌"
    },
    {
        name: "Grab",
        showInInbox: true,
        type: "ride-hailing",
        city: "Da Nang",
        description: "그랩카, 그랩바이크",
        appRequired: true,
        appName: "Grab",
        features: ["24시간", "안전"],
        icon: "🚕"
    },
    {
        name: "Xanh SM Taxi",
        showInInbox: true,
        type: "taxi",
        city: "Da Nang",
        description: "전기 택시",
        appRequired: true,
        appName: "Xanh SM",
        features: ["친환경", "앱 예약"],
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (다낭)",
        showInInbox: true,
        type: "airport-transfer",
        city: "Da Nang",
        description: "다낭 공항 픽업/센딩",
        priceRange: "100,000~200,000 VND",
        features: ["10-15분", "Grab 예약 가능"],
        icon: "✈️"
    }
];

export default transport;
