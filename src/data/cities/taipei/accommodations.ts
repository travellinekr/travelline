import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "그랜드 하얏트 타이베이",
        type: "hotel",
        coordinates: { lat: 25.0351708, lng: 121.5628669 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Taipei",
        description: "타이베이 101 직결, 5성급",
        tags: ["101", "럭셔리"]
    },
    {
        name: "리젠트 타이베이 호텔",
        type: "hotel",
        coordinates: { lat: 25.054158, lng: 121.524288 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Taipei",
        description: "중산 지역, 명품 쇼핑몰",
        tags: ["중산", "쇼핑"]
    },
    {
        name: "코스모스 호텔 타이베이",
        type: "hotel",
        coordinates: { lat: 25.0463786, lng: 121.5182543 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Taipei",
        description: "타이베이 메인역 바로 앞",
        tags: ["역앞", "접근성"]
    },
    {
        name: "소테츠 그랜드 프레사 타이베이",
        type: "hotel",
        coordinates: { lat: 25.0329636, lng: 121.5654268 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Taipei",
        description: "2024년 신규 오픈, 시먼딩 도보 1분",
        tags: ["시먼딩", "신상"]
    },
    {
        name: "호텔 로얄 닛코 타이베이",
        type: "hotel",
        coordinates: { lat: 25.053857, lng: 121.52291 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Taipei",
        description: "2024년 리모델링, 쑹산공항 근처",
        tags: ["중산", "공항"]
    },
    {
        name: "유나이티드 호텔",
        type: "hotel",
        coordinates: { lat: 25.0329636, lng: 121.5654268 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Taipei",
        description: "MRT역 110m, 최근 리모델링",
        tags: ["역근처", "신상"]
    }
];

export default accommodations;
