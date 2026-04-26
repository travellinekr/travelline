import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Osaka Metro",
        showInInbox: true,
        type: "subway",
        city: "Osaka",
        description: "8개 노선, 깨끗하고 편리",
        availability: "5:00AM - 12:00AM",
        features: ["에어컨", "IC카드"],
        icon: "🚇"
    },
    {
        name: "Osaka Metro Bus",
        showInInbox: true,
        type: "bus",
        city: "Osaka",
        description: "시내 전역 커버",
        features: ["에어컨", "IC카드"],
        icon: "🚌"
    },
    {
        name: "Uber Taxi",
        showInInbox: true,
        type: "ride-hailing",
        city: "Osaka",
        description: "택시 연결 서비스",
        appRequired: true,
        appName: "Uber",
        features: ["24시간", "캐시리스", "영어지원"],
        icon: "🚕"
    },
    {
        name: "LUUP",
        showInInbox: true,
        type: "micromobility",
        city: "Osaka",
        description: "전동 킥보드/자전거",
        appRequired: true,
        appName: "LUUP",
        features: ["단거리 이동"],
        icon: "🛴"
    },
    {
        name: "공항 픽업/센딩 (KIX)",
        showInInbox: true,
        type: "airport-transfer",
        city: "Osaka",
        description: "간사이 공항 픽업/센딩",
        priceRange: "¥15,000~30,000",
        features: ["24시간", "미팅 서비스", "영어지원"],
        icon: "✈️"
    }
];

export default transport;
