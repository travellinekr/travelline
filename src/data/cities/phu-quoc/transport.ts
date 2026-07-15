import type { TransportationData } from '../index';

const transport: TransportationData[] = [
    {
        name: "그랩",
        showInInbox: true,
        type: "ride-hailing",
        city: "Phu Quoc",
        description: "공항·리조트·즈엉동 이동에 가장 편한 호출 차량",
        priceRange: "₫80,000~500,000+",
        availability: "주요 관광지와 리조트권 중심",
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
        city: "Phu Quoc",
        description: "공항과 주요 리조트 앞에서 이용 가능한 일반 택시",
        priceRange: "₫100,000~600,000+",
        availability: "공항·호텔·중심가",
        features: ["즉시 탑승", "장거리 요금 확인 필수"],
        paymentMethods: ["현금", "카드 가능 여부 차량별 확인"],
        icon: "🚕"
    },
    {
        name: "공항 픽업",
        showInInbox: true,
        type: "airport-transfer",
        city: "Phu Quoc",
        description: "리조트 예약 또는 현지 투어사를 통한 사전 픽업",
        priceRange: "₫200,000~700,000+",
        availability: "항공편 시간에 맞춰 사전 예약",
        features: ["가족 여행", "대형 짐", "심야 도착"],
        icon: "✈️"
    },
    {
        name: "스쿠터 렌트",
        showInInbox: true,
        type: "micromobility",
        city: "Phu Quoc",
        description: "섬 내 단거리 자유 이동용, 우기·야간 운전 주의",
        priceRange: "₫150,000~250,000/일",
        availability: "즈엉동·리조트 주변 렌털샵",
        features: ["자유 일정", "주차 편리", "헬멧 필수"],
        paymentMethods: ["현금"],
        icon: "🛵"
    },
    {
        name: "렌터카/전세차",
        showInInbox: true,
        type: "rental-car",
        city: "Phu Quoc",
        description: "남부 케이블카·북부 빈원더스 등 장거리 동선에 유리",
        priceRange: "₫800,000~1,800,000/일",
        availability: "기사 포함 전세차 형태가 일반적",
        features: ["가족 여행", "장거리 투어", "일정 맞춤"],
        icon: "🚙"
    },
    {
        name: "투어 셔틀",
        showInInbox: true,
        type: "shuttle",
        city: "Phu Quoc",
        description: "호핑투어·테마파크·케이블카 상품에 포함되는 픽업 셔틀",
        priceRange: "상품 포함 또는 별도",
        availability: "투어 예약 시 확인",
        features: ["호텔 픽업", "남부/북부 투어", "시간표 확인"],
        icon: "🚌"
    }
];

export default transport;
