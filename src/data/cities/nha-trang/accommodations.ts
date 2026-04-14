import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "알마 리조트",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 12.2941855, lng: 109.229089 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "12개 수영장, 워터파크",
        tags: ["깜란", "가족"]
    },
    {
        name: "그란 멜리아 나트랑",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 12.076636, lng: 109.192766 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "2023년 오픈, 4베드룸 풀빌라",
        tags: ["나트랑", "신상"]
    },
    {
        name: "아미아나 리조트 나트랑",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 12.295209, lng: 109.2338719 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "프라이빗 해변, 스노클링",
        tags: ["나트랑", "비치"]
    },
    {
        name: "아미아나 리조트 깜란",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 12.1050356, lng: 109.1912295 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "독립형 풀빌라, 한적한 휴양",
        tags: ["깜란", "풀빌라"]
    },
    {
        name: "빈펄 리조트",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 12.220935, lng: 109.2473572 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "다양한 놀이시설",
        tags: ["나트랑", "가족"]
    },
    {
        name: "하바나 나트랑 호텔",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 12.2433961, lng: 109.195842 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Nha Trang",
        description: "프라이빗 해변, 최고층 오션뷰",
        tags: ["나트랑", "전망"]
    },
    {
        name: "퓨전 리조트 깜 라인",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 12.0500142, lng: 109.2040205 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "공항 10분, 한적한 휴양",
        tags: ["깜란", "휴양"]
    },
    {
        name: "식스센스 닌반 베이",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 12.3589397, lng: 109.2776855 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Nha Trang",
        description: "럭셔리 풀빌라",
        tags: ["닌반", "럭셔리"]
    }
];

export default accommodations;
