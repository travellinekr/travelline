import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Fukuoka City Subway",
        showInInbox: true,
        type: "subway",
        city: "Fukuoka",
        description: "공항선 포함 3개 노선",
        features: ["에어컨", "IC카드"],
        icon: "🚇"
    },
    {
        name: "Nishitetsu Bus",
        showInInbox: true,
        type: "bus",
        city: "Fukuoka",
        description: "시내 전역 커버",
        features: ["에어컨", "IC카드"],
        icon: "🚌"
    },
    {
        name: "Uber Taxi",
        showInInbox: true,
        type: "ride-hailing",
        city: "Fukuoka",
        description: "택시 연결",
        appRequired: true,
        appName: "Uber",
        icon: "🚕"
    },
    {
        name: "DiDi",
        showInInbox: false,
        type: "ride-hailing",
        city: "Fukuoka",
        description: "일본식 라이드셰어",
        appRequired: true,
        appName: "DiDi",
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (후쿠오카)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Fukuoka",
        description: "후쿠오카 공항 픽업/센딩",
        priceRange: "¥8,000~15,000",
        features: ["시내 10분", "영어지원"],
        icon: "✈️"
    }
];

export default transport;
