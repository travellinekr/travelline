import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "지프니",
        showInInbox: true,
        type: "traditional",
        city: "Cebu",
        description: "필리핀 전통 교통수단",
        priceRange: "₱13~",
        features: ["저렴함", "현지 문화"],
        icon: "🚐"
    },
    {
        name: "Grab",
        showInInbox: true,
        type: "ride-hailing",
        city: "Cebu",
        description: "그랩카, 그랩택시",
        appRequired: true,
        appName: "Grab",
        features: ["안전", "편리"],
        icon: "🚕"
    },
    {
        name: "Angkas",
        showInInbox: true,
        type: "ride-hailing",
        city: "Cebu",
        description: "오토바이 택시",
        appRequired: true,
        appName: "Angkas",
        features: ["빠름", "저렴"],
        icon: "🏍️"
    },
    {
        name: "택시",
        showInInbox: false,
        type: "taxi",
        city: "Cebu",
        description: "White/Yellow Taxi",
        priceRange: "₱40~",
        features: ["미터기"],
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (막탄)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Cebu",
        description: "막탄 공항 픽업/센딩",
        priceRange: "₱300~800",
        features: ["Grab 예약", "단거리"],
        icon: "✈️"
    }
];

export default transport;
