import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "JR 타워 호텔 닛코 삿포로",
        type: "hotel",
        coordinates: { lat: 43.0684388, lng: 141.3523648 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "삿포로역 직결, 온천 스파 보유",
        tags: ["역직결", "온천"]
    },
    {
        name: "인터컨티넨탈 삿포로",
        type: "hotel",
        coordinates: { lat: 43.0617713, lng: 141.3544506 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Sapporo",
        description: "2025년 럭셔리 라인, 최소 42㎡ 객실",
        tags: ["오도리", "럭셔리"]
    },
    {
        name: "호텔 소세이 삿포로 엠갤러리",
        type: "hotel",
        coordinates: { lat: 43.0650191, lng: 141.3606067 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "5성급, 앤틱한 분위기",
        tags: ["삿포로역", "럭셔리"]
    },
    {
        name: "그랑벨 호텔 삿포로",
        type: "hotel",
        coordinates: { lat: 43.0550034, lng: 141.3565401 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "루프탑 노천탕, 대욕장",
        tags: ["스스키노", "온천"]
    },
    {
        name: "포르자 호텔 삿포로",
        type: "hotel",
        coordinates: { lat: 43.065455, lng: 141.3526763 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "가성비, 가족 여행",
        tags: ["삿포로역", "가성비"]
    },
    {
        name: "도미인 프리미엄 삿포로",
        type: "hotel",
        coordinates: { lat: 43.057061, lng: 141.34884 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "대욕장 보유",
        tags: ["스스키노", "온천"]
    },
    {
        name: "크로스 호텔 삿포로",
        type: "hotel",
        coordinates: { lat: 43.06404, lng: 141.3532757 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "현대적 디자인",
        tags: ["삿포로역", "모던"]
    },
    {
        name: "베셀 호텔 캄파나 스스키노",
        type: "hotel",
        coordinates: { lat: 43.0542308, lng: 141.3492526 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Sapporo",
        description: "깔끔한 인테리어",
        tags: ["스스키노", "쾌적"]
    }
];

export default accommodations;
