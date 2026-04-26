import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Taipei MRT",
        showInInbox: true,
        type: "subway",
        city: "Taipei",
        description: "5개 주요 노선, 매우 깨끗",
        priceRange: "NT$15-65",
        features: ["에어컨", "EasyCard"],
        icon: "🚇"
    },
    {
        name: "시내버스",
        showInInbox: true,
        type: "bus",
        city: "Taipei",
        description: "광범위한 노선망",
        priceRange: "NT$15",
        features: ["EasyCard"],
        icon: "🚌"
    },
    {
        name: "Uber",
        showInInbox: true,
        type: "ride-hailing",
        city: "Taipei",
        description: "라이드셰어 서비스",
        appRequired: true,
        appName: "Uber",
        features: ["캐시리스"],
        icon: "🚕"
    },
    {
        name: "LINE Taxi",
        showInInbox: true,
        type: "ride-hailing",
        city: "Taipei",
        description: "인기 택시 앱",
        appRequired: true,
        appName: "LINE Taxi",
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (타오위안)",
        showInInbox: true,
        type: "airport-transfer",
        city: "Taipei",
        description: "타오위안 공항 픽업/센딩",
        priceRange: "NT$1,200~1,800",
        features: ["45분 거리", "고속버스 대안"],
        icon: "✈️"
    }
];

export default transport;
