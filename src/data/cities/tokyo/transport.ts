import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Tokyo Metro",
        showInInbox: true,
        type: "subway",
        city: "Tokyo",
        description: "9개 노선, 가장 편리한 이동 수단",
        availability: "5:00AM - 12:30AM",
        features: ["에어컨", "Suica/Pasmo"],
        icon: "🚇"
    },
    {
        name: "JR 야마노테선",
        showInInbox: true,
        type: "subway",
        city: "Tokyo",
        description: "순환선, 주요 역 연결",
        features: ["에어컨", "Suica/Pasmo"],
        icon: "🚃"
    },
    {
        name: "GO Taxi",
        showInInbox: true,
        type: "ride-hailing",
        city: "Tokyo",
        description: "일본 대표 택시 앱",
        appRequired: true,
        appName: "GO",
        features: ["24시간", "캐시리스", "일본어/영어"],
        icon: "🚕"
    },
    {
        name: "Uber Taxi",
        showInInbox: false,
        type: "ride-hailing",
        city: "Tokyo",
        description: "택시 연결 서비스",
        appRequired: true,
        appName: "Uber",
        features: ["24시간", "캐시리스"],
        icon: "🚕"
    },
    {
        name: "DiDi",
        showInInbox: false,
        type: "ride-hailing",
        city: "Tokyo",
        description: "택시 호출 앱",
        appRequired: true,
        appName: "DiDi",
        features: ["24시간", "캐시리스"],
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (나리타/하네다)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Tokyo",
        description: "Blacklane, Tokyo MK, Private Van",
        priceRange: "¥20,000~50,000",
        features: ["24시간", "영어 운전사", "WiFi", "미팅보드"],
        appName: "Blacklane / Tokyo MK",
        icon: "✈️"
    }
];

export default transport;
