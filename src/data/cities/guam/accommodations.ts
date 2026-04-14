import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "두짓 비치 리조트 괌",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 13.5144, lng: 144.7960 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Guam",
        description: "투몬 비치, 5성급 리조트",
        tags: ["투몬", "럭셔리"]
    },
    {
        name: "하얏트 리젠시 괌",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 13.5178, lng: 144.7996 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Guam",
        description: "투몬 중심, 비치프런트",
        tags: ["투몬", "럭셔리"]
    },
    {
        name: "힐튼 괌 리조트 앤 스파",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 13.5210, lng: 144.8021 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Guam",
        description: "대형 워터파크, 가족 추천",
        tags: ["투몬", "가족"]
    },
    {
        name: "웨스틴 리조트 괌",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 13.5165, lng: 144.7980 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Guam",
        description: "인피니티 풀, 스파",
        tags: ["투몬", "럭셔리"]
    },
    {
        name: "온워드 비치 리조트",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 13.5130, lng: 144.7950 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Guam",
        description: "워터파크, 가성비 리조트",
        tags: ["투몬", "가성비"]
    },
    {
        name: "괌 플라자 리조트",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 13.5200, lng: 144.8010 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Guam",
        description: "투몬 비치 근처, 가성비",
        tags: ["투몬", "가성비"]
    },
    {
        name: "로열 오차드 괌",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 13.5190, lng: 144.8000 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Guam",
        description: "부티크 호텔, 모던 디자인",
        tags: ["투몬", "부티크"]
    }
];

export default accommodations;
