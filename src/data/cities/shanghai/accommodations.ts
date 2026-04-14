import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "콘래드 상하이",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 31.230416, lng: 121.473701 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Shanghai",
        description: "2024년 신규 오픈",
        tags: ["푸동", "럭셔리"]
    },
    {
        name: "시클루시브 호텔",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 31.230416, lng: 121.473701 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Shanghai",
        description: "1918년 맨션 개조, 부티크 호텔",
        tags: ["우캉루", "부티크"]
    },
    {
        name: "더 페닌슐라 상하이",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 31.230416, lng: 121.473701 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Shanghai",
        description: "와이탄, 5성급",
        tags: ["와이탄", "럭셔리"]
    },
    {
        name: "파크 하얏트 상하이",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 31.234732, lng: 121.50764 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Shanghai",
        description: "상하이 타워, 고층 전망",
        tags: ["푸동", "전망"]
    },
    {
        name: "페어몬트 피스 호텔",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 31.2390388, lng: 121.4895427 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Shanghai",
        description: "난징루, 역사적 건물",
        tags: ["난징루", "역사"]
    },
    {
        name: "푸시 인터컨티넨탈",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 31.230416, lng: 121.473701 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Shanghai",
        description: "와이탄 뷰",
        tags: ["푸동", "전망"]
    }
];

export default accommodations;
