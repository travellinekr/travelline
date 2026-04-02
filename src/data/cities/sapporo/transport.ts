import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Sapporo Subway",
        type: "subway",
        city: "Sapporo",
        description: "3개 노선, 고무 타이어 방식",
        availability: "6:00AM - 12:00AM",
        features: ["조용함", "SAPICA"],
        icon: "🚇"
    },
    {
        name: "Sapporo Streetcar",
        type: "tram",
        city: "Sapporo",
        description: "일본 최북단 노면전차",
        availability: "6:00AM - 11:00PM",
        features: ["눈이 와도 운행"],
        icon: "🚋"
    },
    {
        name: "시내버스",
        type: "bus",
        city: "Sapporo",
        description: "Hokkaido Chuo Bus 등",
        features: ["SAPICA"],
        icon: "🚌"
    },
    {
        name: "Uber Taxi",
        type: "ride-hailing",
        city: "Sapporo",
        description: "택시 연결",
        appRequired: true,
        appName: "Uber",
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (신치토세)",
        type: "airport-transfer",
        city: "Sapporo",
        description: "신치토세 공항 픽업/센딩",
        priceRange: "¥12,000~25,000",
        features: ["40분 거리", "영어지원"],
        icon: "✈️"
    }
];

export default transport;
