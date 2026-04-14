import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Grab",
        showInInbox: true,
        type: "ride-hailing",
        city: "Bali",
        description: "그랩카, 그랩바이크",
        appRequired: true,
        appName: "Grab",
        features: ["가장 인기"],
        icon: "🚕"
    },
    {
        name: "GoJek",
        showInInbox: true,
        type: "ride-hailing",
        city: "Bali",
        description: "고카, 고라이드",
        appRequired: true,
        appName: "GoJek",
        icon: "🏍️"
    },
    {
        name: "Bluebird Taxi",
        showInInbox: true,
        type: "taxi",
        city: "Bali",
        description: "가장 신뢰받는 택시",
        features: ["미터기"],
        icon: "🚕"
    },
    {
        name: "스쿠터 렌탈",
        showInInbox: false,
        type: "rental-car",
        city: "Bali",
        description: "가장 인기있는 이동 수단",
        features: ["자유 여행"],
        icon: "🛵"
    },
    {
        name: "공항 픽업/센딩 (덴파사르)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Bali",
        description: "응우라라이 공항 픽업/센딩",
        priceRange: "$5.69~30",
        features: ["Klook/GetYourGuide", "영어 운전사", "미팅보드"],
        appName: "Klook / Grab",
        icon: "✈️"
    }
];

export default transport;
