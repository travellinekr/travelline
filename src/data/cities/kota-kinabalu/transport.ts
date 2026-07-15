import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "그랩",
        showInInbox: true,
        type: "ride-hailing",
        city: "Kota Kinabalu",
        description: "공항·시내·탄중아루 이동에 가장 편한 호출 차량",
        priceRange: "RM8~80+",
        availability: "시내와 주요 호텔권 중심",
        features: ["앱 호출", "요금 사전 확인", "공항 이동"],
        appRequired: true,
        appName: "Grab",
        paymentMethods: ["카드", "현금"],
        icon: "🚗"
    },
    {
        name: "택시",
        showInInbox: true,
        type: "taxi",
        city: "Kota Kinabalu",
        description: "공항과 호텔 앞에서 이용 가능한 일반 택시",
        priceRange: "RM20~120+",
        availability: "공항·호텔·중심가",
        features: ["즉시 탑승", "요금 확인 권장"],
        paymentMethods: ["현금", "카드 가능 여부 차량별 확인"],
        icon: "🚕"
    },
    {
        name: "공항 픽업",
        showInInbox: true,
        type: "airport-transfer",
        city: "Kota Kinabalu",
        description: "심야 도착·가족 여행에 편한 사전 픽업",
        priceRange: "RM40~180+",
        availability: "항공편 시간에 맞춰 사전 예약",
        features: ["가족 여행", "대형 짐", "심야 도착"],
        icon: "✈️"
    },
    {
        name: "렌터카/전세차",
        showInInbox: true,
        type: "rental-car",
        city: "Kota Kinabalu",
        description: "키나발루 공원·쿤다상·외곽 투어에 유리",
        priceRange: "RM180~600/일+",
        availability: "기사 포함 전세차 또는 렌터카",
        features: ["외곽 투어", "가족 여행", "일정 맞춤"],
        icon: "🚙"
    },
    {
        name: "투어 셔틀",
        showInInbox: true,
        type: "shuttle",
        city: "Kota Kinabalu",
        description: "섬 호핑·키나발루 공원·리버크루즈 상품 픽업",
        priceRange: "상품 포함 또는 별도",
        availability: "투어 예약 시 확인",
        features: ["호텔 픽업", "외곽 투어", "시간표 확인"],
        icon: "🚌"
    },
    {
        name: "보트/페리",
        showInInbox: true,
        type: "traditional",
        city: "Kota Kinabalu",
        description: "제셀톤 포인트에서 마누칸·사피 등 섬으로 이동",
        priceRange: "섬·업체별 상이",
        availability: "날씨와 해상 상황 영향",
        features: ["섬 호핑", "제셀톤 포인트", "스노클링"],
        icon: "⛴️"
    }
];

export default transport;
