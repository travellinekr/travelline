import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "MTR",
        showInInbox: true,
        type: "subway",
        city: "Hong Kong",
        description: "홍콩 전역을 잇는 지하철·공항철도 핵심 교통",
        priceRange: "HK$5~120",
        features: ["Octopus", "공항철도", "주요 관광지 연결"],
        appRequired: true,
        appName: "MTR Mobile",
        icon: "🚇"
    },
    {
        name: "트램",
        showInInbox: true,
        type: "tram",
        city: "Hong Kong",
        description: "홍콩섬 북부를 천천히 달리는 2층 노면전차",
        priceRange: "HK$3 전후",
        features: ["홍콩섬", "저렴", "풍경 감상"],
        icon: "🚋"
    },
    {
        name: "스타 페리",
        showInInbox: true,
        type: "traditional",
        city: "Hong Kong",
        description: "센트럴·침사추이를 잇는 빅토리아 하버 페리",
        priceRange: "HK$5 전후",
        features: ["하버뷰", "침사추이", "센트럴"],
        icon: "⛴️"
    },
    {
        name: "택시",
        showInInbox: true,
        type: "taxi",
        city: "Hong Kong",
        description: "지역별 색상 택시, 현금·Octopus 가능 차량 확인",
        priceRange: "HK$30~300+",
        features: ["심야 이동", "지역별 운행권역"],
        icon: "🚕"
    },
    {
        name: "공항 익스프레스",
        showInInbox: true,
        type: "airport-transfer",
        city: "Hong Kong",
        description: "홍콩국제공항과 홍콩역·구룡역을 빠르게 연결",
        priceRange: "HK$100~120 전후",
        features: ["공항 이동", "빠른 연결", "MTR 연계"],
        icon: "✈️"
    }
];

export default transport;
