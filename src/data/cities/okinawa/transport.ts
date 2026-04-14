import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "Yui Rail",
        showInInbox: true,
        type: "tram",
        city: "Okinawa",
        description: "나하 공항-Tedako-Uranishi",
        availability: "6:00AM - 11:30PM",
        features: ["OKICA", "나하시 편리"],
        icon: "🚝"
    },
    {
        name: "시내버스",
        showInInbox: true,
        type: "bus",
        city: "Okinawa",
        description: "4개 주요 버스회사",
        features: ["OKICA"],
        icon: "🚌"
    },
    {
        name: "렌터카",
        showInInbox: true,
        type: "rental-car",
        city: "Okinawa",
        description: "섬 탐험 필수",
        features: ["자유 여행", "외딴섬 접근"],
        icon: "🚗"
    },
    {
        name: "택시",
        showInInbox: false,
        type: "taxi",
        city: "Okinawa",
        description: "일반 택시, Uber",
        features: ["24시간"],
        icon: "🚕"
    },
    {
        name: "공항 픽업/센딩 (나하)",
        showInInbox: false,
        type: "airport-transfer",
        city: "Okinawa",
        description: "나하 공항 픽업/센딩",
        priceRange: "¥3,000~8,000",
        features: ["주요 리조트", "영어지원"],
        icon: "✈️"
    }
];

export default transport;
