import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "렌터카",
        type: "rental-car",
        city: "Guam",
        description: "공항 렌터카, 국제면허 필요",
        priceRange: "$40~100/일",
        features: ["자유 여행", "필수 교통수단"],
        icon: "🚗"
    },
    {
        name: "괌 트롤리",
        type: "bus",
        city: "Guam",
        description: "투몬 - 주요 쇼핑몰 순환",
        priceRange: "$4~20",
        features: ["관광 노선", "쇼핑몰 연결"],
        icon: "🚌"
    },
    {
        name: "택시",
        type: "taxi",
        city: "Guam",
        description: "미터 택시",
        priceRange: "$10~40",
        features: ["공항~투몬 $30~35"],
        icon: "🚕"
    },
    {
        name: "우버",
        type: "ride-hailing",
        city: "Guam",
        description: "우버 앱 사용 가능",
        appRequired: true,
        appName: "Uber",
        features: ["편리", "고정요금"],
        icon: "🚕"
    },
    {
        name: "공항 셔틀",
        type: "airport-transfer",
        city: "Guam",
        description: "호텔 픽업 셔틀",
        priceRange: "$15~30",
        features: ["호텔 예약 시", "편리"],
        icon: "✈️"
    }
];

export default transport;
